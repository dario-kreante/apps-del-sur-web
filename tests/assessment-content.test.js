import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

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
