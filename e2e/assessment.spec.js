import { test, expect } from '@playwright/test';

const ASSESSMENTS = [
  { type: 'ia', path: '/diagnostico-madurez-ia/', source: 'diagnostico-madurez-ia', title: 'Diagnóstico de Madurez en IA', stageOne: 'Analógica', stageFour: 'Líder en IA' },
  { type: 'digital', path: '/diagnostico-madurez-digital/', source: 'diagnostico-madurez-digital', title: 'Diagnóstico de Madurez Digital', stageOne: 'Papel y WhatsApp', stageFour: 'Digital Optimizada' },
];

test.beforeEach(async ({ page, request }) => {
  await request.get('/__qa/failure?enabled=0');
  // Analytics and other third parties stay out of the run.
  await page.route('**/*', (route) => (new URL(route.request().url()).hostname === '127.0.0.1' ? route.continue() : route.abort()));
});

const assessmentApp = (page) => page.locator('#assessment-app');

// option is 1 to 4, in the order the questionnaire shows them.
async function answerQuestions(page, option, count = 20) {
  for (let answered = 0; answered < count; answered += 1) {
    await assessmentApp(page).locator('input[type=radio]').nth(option - 1).check();
    await page.locator('#assessment-next').click();
    const milestone = page.locator('#assessment-continue');
    if (await milestone.isVisible()) await milestone.click();
  }
}

async function start(page, path) {
  await page.goto(path);
  await page.locator('#assessment-start').click();
}

async function completeAssessment(page, path, option) {
  await start(page, path);
  await answerQuestions(page, option);
  await expect(page.locator('#assessment-lead-form')).toBeVisible();
}

async function fillLead(page, { consent = true } = {}) {
  const form = page.locator('#assessment-lead-form');
  await form.locator('[name=Nombre]').fill('Persona QA');
  await form.locator('[name=Email]').fill('qa@example.test');
  await form.locator('[name=Empresa]').fill('Empresa QA');
  await form.locator('[name=Sector]').selectOption('Servicios');
  await form.locator('[name=Tamano]').selectOption({ index: 1 });
  if (consent) await form.locator('[name=Consentimiento]').check();
  return form;
}

for (const assessment of ASSESSMENTS) {
  test.describe(assessment.title, () => {
    test('all lowest answers land on the first stage with score 0', async ({ page }) => {
      await completeAssessment(page, assessment.path, 1);
      await expect(page.locator('.assessment-title')).toHaveText(assessment.stageOne);
      await expect(page.getByRole('img', { name: 'Puntaje estimado 0 de 100' })).toBeVisible();
    });

    test('all highest answers land on the last stage with score 100', async ({ page }) => {
      await completeAssessment(page, assessment.path, 4);
      await expect(page.locator('.assessment-title')).toHaveText(assessment.stageFour);
      await expect(page.getByRole('img', { name: 'Puntaje estimado 100 de 100' })).toBeVisible();
    });

    test('submitting stores the lead and opens a typed report', async ({ page, request, context }) => {
      await completeAssessment(page, assessment.path, 2);
      const form = await fillLead(page);
      const submitted = page.waitForResponse('**/api/assessment-submit');
      await form.getByRole('button', { name: 'Enviar mis datos' }).click();
      expect((await submitted).status()).toBe(200);

      const message = page.locator('#assessment-form-message');
      await expect(message).toHaveClass(/assessment-success/);
      const { records } = await (await request.get('/__qa/status')).json();
      const record = records.at(-1);
      expect(record.fields.Fuente).toBe(assessment.source);
      expect(record.fields.Email).toBe('qa@example.test');
      expect(record.fields['Puntaje Normalizado']).toBe('33%');
      expect(JSON.parse(record.fields['Respuestas JSON']).answers).toHaveLength(20);

      const [report] = await Promise.all([context.waitForEvent('page'), message.getByRole('link').click()]);
      await expect(report.locator('body')).toContainText(assessment.title);
      await expect(report.locator('body')).toContainText('Empresa QA');
    });

    test('progress survives a reload', async ({ page }) => {
      await start(page, assessment.path);
      await answerQuestions(page, 3, 2);
      await page.reload();
      await expect(assessmentApp(page).locator('.assessment-sticky-line strong')).toHaveText('2 de 20');
    });

    test('has no horizontal overflow on a phone', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 });
      await completeAssessment(page, assessment.path, 2);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow).toBeLessThanOrEqual(0);
    });
  });
}

test('the invitation link is stored with the submitted lead', async ({ page, request }) => {
  await completeAssessment(page, '/diagnostico-madurez-digital/?source=ADS-2026-01-A-abc123', 2);
  const form = await fillLead(page);
  const submitted = page.waitForResponse('**/api/assessment-submit');
  await form.getByRole('button', { name: 'Enviar mis datos' }).click();
  expect((await submitted).status()).toBe(200);
  const { records } = await (await request.get('/__qa/status')).json();
  expect(records.at(-1).fields['Fuente campaña']).toBe('ADS-2026-01-A-abc123');
});

test('one assessment does not touch the progress of another', async ({ page }) => {
  await start(page, '/diagnostico-madurez-ia/');
  await answerQuestions(page, 3, 2);
  await page.goto('/diagnostico-madurez-digital/');
  await expect(page.locator('#assessment-start')).toHaveText(/Comenzar/);
  await page.goto('/diagnostico-madurez-ia/');
  await expect(assessmentApp(page).locator('.assessment-sticky-line strong')).toHaveText('2 de 20');
});

test('the form does not submit without consent', async ({ page }) => {
  const submissions = [];
  page.on('request', (request) => { if (request.url().includes('/api/assessment-submit')) submissions.push(request); });
  await completeAssessment(page, '/diagnostico-madurez-ia/', 2);
  const form = await fillLead(page, { consent: false });
  await form.getByRole('button', { name: 'Enviar mis datos' }).click();
  await expect(form.getByRole('button', { name: 'Enviar mis datos' })).toBeEnabled();
  expect(await form.evaluate((element) => element.checkValidity())).toBe(false);
  expect(submissions).toHaveLength(0);
});

test('an Airtable failure keeps the result and allows a retry', async ({ page, request }) => {
  await completeAssessment(page, '/diagnostico-madurez-digital/', 2);
  const form = await fillLead(page);
  await request.get('/__qa/failure?enabled=1');
  await form.getByRole('button', { name: 'Enviar mis datos' }).click();
  const message = page.locator('#assessment-form-message');
  await expect(message).toHaveClass(/assessment-error/);
  await expect(page.locator('.assessment-title')).toBeVisible();

  await request.get('/__qa/failure?enabled=0');
  await form.getByRole('button', { name: 'Reintentar envío' }).click();
  await expect(message).toHaveClass(/assessment-success/);
});

test('the index lists every assessment', async ({ page }) => {
  await page.goto('/diagnosticos/');
  for (const assessment of ASSESSMENTS) {
    await expect(page.locator(`article a[href="${assessment.path}"]`)).toBeVisible();
  }
});
