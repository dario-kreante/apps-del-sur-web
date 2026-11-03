import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';

const assessments = JSON.parse(await readFile(new URL('../src/data/assessments.json', import.meta.url), 'utf8'));
const readSource = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('personal data assessment has 20 questions across 5 dimensions of 4', () => {
  const { dimKeys, dimLabels, questions } = assessments.datos;
  assert.deepEqual(dimKeys, ['inventario', 'transparencia', 'seguridad', 'derechos', 'terceros']);
  assert.equal(dimLabels.seguridad, 'Accesos y seguridad');
  assert.equal(questions.length, 20);
  questions.forEach((question, index) => {
    assert.equal(question.dim, dimKeys[Math.floor(index / 4)], `dimensión de la pregunta ${index + 1}`);
    assert.equal(question.a.length, 4, `opciones de la pregunta ${index + 1}`);
  });
});

test('personal data question 11 is the WhatsApp question used by the urgency rule', () => {
  assert.equal(assessments.datos.questions[10].q, '¿Desde dónde atienden a clientes por WhatsApp?');
  assert.equal(assessments.datos.questions[10].a[0], 'Desde los celulares personales del equipo.');
});

test('personal data assessment defines stages, narrative, matrix and recommendations', () => {
  const { dimKeys, stages, narrative, matrix, recommendations } = assessments.datos;
  assert.deepEqual(stages, ['Expuesta', 'Inicial', 'Encaminada', 'Preparada']);
  for (const stage of [1, 2, 3, 4]) assert.ok(narrative[stage], `lectura de la etapa ${stage}`);
  for (const key of dimKeys) {
    assert.equal(matrix[key].length, 4, `matriz de ${key}`);
    for (const stage of [1, 2, 3, 4]) {
      assert.ok(recommendations[key][stage].now, `ahora de ${key} etapa ${stage}`);
      assert.ok(recommendations[key][stage].next, `siguiente de ${key} etapa ${stage}`);
    }
  }
});

const SERVICE_PAGE = 'src/pages/servicios/diagnostico-datos-personales/index.astro';
const QUIZ_PAGE = 'src/pages/diagnostico-datos-personales/index.astro';

test('service page sends every diagnostic CTA to the questionnaire page', async () => {
  const page = await readSource(SERVICE_PAGE);
  assert.doesNotMatch(page, /<Assessment/);
  assert.match(page, /href="\/diagnostico-datos-personales\/"/);
  assert.doesNotMatch(page, /href="#/);
});

test('service page keeps to what the service can promise today', async () => {
  const page = await readSource(SERVICE_PAGE);
  assert.doesNotMatch(page, /abogado aliado|trabajamos con un abogado/i);
  assert.doesNotMatch(page, /enviarle su resultado/i);
  assert.doesNotMatch(page, /certificaci[oó]n|auditor[ií]a legal/i);
  assert.doesNotMatch(page, /formsubmit/i);
  assert.match(page, /no constituye asesoría legal/);
  assert.match(page, /wa\.me\/56945262335/);
});

test('questionnaire page follows the structure of the other assessments', async () => {
  const page = await readSource(QUIZ_PAGE);
  const other = await readSource('src/pages/diagnostico-madurez-ia/index.astro');
  assert.match(other, /<Assessment type="ia" \/>/);
  assert.match(page, /<Assessment type="datos" \/>/);
  assert.match(page, /class="assessment-more"/);
  assert.match(page, /no constituye asesoría legal/);
  assert.match(page, /href="\/servicios\/diagnostico-datos-personales\/"/);
  assert.match(page, /href="\/diagnostico-madurez-digital\/"/);
  assert.doesNotMatch(page, /certificaci[oó]n|auditor[ií]a legal/i);
});

test('assessment component has a single page layout for every type', async () => {
  const component = await readSource('src/components/Assessment.astro');
  assert.doesNotMatch(component, /embedded/);
  assert.match(component, /<main id="main-content" class="assessment-page">/);
});

test('sitemap lists the questionnaire and the service page', async () => {
  const sitemap = await readSource('src/pages/sitemap.xml.ts');
  assert.match(sitemap, /\/diagnostico-datos-personales\//);
  assert.match(sitemap, /\/servicios\/diagnostico-datos-personales\//);
});

test('diagnostics index links the third assessment', async () => {
  assert.match(await readSource('src/pages/diagnosticos/index.astro'), /href: '\/diagnostico-datos-personales\/'/);
});

test('privacy policy names the providers that receive assessment data', async () => {
  const policy = await readSource('src/pages/privacidad.astro');
  for (const provider of ['Airtable', 'Brevo', 'Cloudflare']) assert.match(policy, new RegExp(provider));
  assert.match(policy, /informe.*correo|correo.*informe/);
});

test('email stage names match the assessment data', async () => {
  const source = await readSource('api/assessment-submit.js');
  for (const [type, { stages }] of Object.entries(assessments)) {
    for (const stage of stages) assert.ok(source.includes(`'${stage}'`), `${type}: ${stage}`);
  }
});

test('a failed security check offers WhatsApp as a way out', async () => {
  const app = await readSource('public/assessment-app.js');
  const failure = app.slice(app.indexOf('function submitErrorMessage'), app.indexOf('function announce'));
  assert.match(app, /WHATSAPP_LINK = '<a href="https:\/\/wa\.me\/56945262335"/);
  assert.match(failure, /verificationFallback\(\)/);
  assert.match(app.slice(app.indexOf('!turnstileToken'), app.indexOf('const formValues')), /verificationFallback\(\)/);
});

test('personal data narrative does not state legal conclusions as fact', () => {
  const narrative = Object.values(assessments.datos.narrative).join(' ');
  assert.doesNotMatch(narrative, /serían infracciones/);
  assert.match(assessments.datos.narrative['1'], /podrían ser incumplimientos/);
});

test('law status is shared and separates the current date from the pending bill', async () => {
  const status = await readSource('src/data/ley21719.ts');
  assert.match(status, /1 de diciembre de 2026/);
  assert.match(status, /15 de octubre de 2027/);
  assert.match(status, /18\.623-07/);
  assert.match(status, /Cámara/);
  for (const page of [SERVICE_PAGE, QUIZ_PAGE]) assert.match(await readSource(page), /LEY_21719_ESTADO/);
});

test('service page describes the small business warning as a power of the Agency', async () => {
  const page = await readSource(SERVICE_PAGE);
  assert.doesNotMatch(page, /tienen un primer año con amonestaciones en vez de multas/);
  assert.match(page, /podrá|puede aplicar/);
  assert.match(page, /no una exención/);
});

test('blog posts do not promise that small businesses get no fines, and link the real law', async () => {
  const dir = new URL('../src/content/blog/', import.meta.url);
  for (const name of await readdir(dir)) {
    const post = await readFile(new URL(name, dir), 'utf8');
    assert.doesNotMatch(post, /idNorma=1208515/, name);
    assert.doesNotMatch(post, /Aplican desde diciembre 2027/, name);
    assert.doesNotMatch(post, /12 meses adicionales como pyme con amonestación en vez de multa/, name);
  }
  for (const name of ['ley-21719-proteccion-datos-pymes-chile-2026', 'ley-21719-inteligencia-artificial-empresas-chile-2026', 'ley-21719-datos-sensibles-sectores-chile-2026']) {
    assert.match(await readFile(new URL(`${name}.md`, dir), 'utf8'), /15 de octubre de 2027/, name);
  }
});

test('form offers study and commercial consent as separate, optional choices', async () => {
  const app = await readSource('public/assessment-app.js');
  const study = app.match(/<input name="ConsentimientoEstudio"[^>]*>/);
  const commercial = app.match(/<input name="ConsentimientoComercial"[^>]*>/);
  assert.ok(study && commercial);
  assert.doesNotMatch(study[0], /required|checked/);
  assert.doesNotMatch(commercial[0], /required|checked/);
  assert.match(app, /sin identificar personas ni empresas/);
  assert.match(app, /href="\/privacidad\/"/);
});

test('personal data results say they do not certify compliance', async () => {
  const app = await readSource('public/assessment-app.js');
  assert.match(app, /no certifica el cumplimiento/);
});

test('privacy policy covers all three assessments, the study and commercial contact', async () => {
  const page = await readSource('src/pages/privacidad.astro');
  assert.match(page, /madurez digital, madurez en IA y datos personales/);
  assert.match(page, /estudio/i);
  assert.match(page, /resultados agregados/);
});

test('llms.txt points to real assessment routes', async () => {
  const llms = await readSource('public/llms.txt');
  assert.doesNotMatch(llms, /diagnostico-madurez\/-ia/);
  for (const route of ['/diagnostico-madurez-ia/', '/diagnostico-madurez-digital/', '/diagnostico-datos-personales/']) assert.ok(llms.includes(route), route);
  assert.doesNotMatch(llms, /vigencia plena 2026/);
});

test('sector posts separate the current date from the pending postponement', async () => {
  const dir = new URL('../src/content/blog/', import.meta.url);
  for (const name of await readdir(dir)) {
    const post = await readFile(new URL(name, dir), 'utf8');
    assert.doesNotMatch(post, /\(vigencia diciembre 2026\)|\(entrada en vigencia diciembre 2026\)|Desde diciembre 2026 rige/, name);
    assert.doesNotMatch(post, /\*\*Multas hasta 20\.000 UTM\*\* si no cumple/, name);
  }
});
