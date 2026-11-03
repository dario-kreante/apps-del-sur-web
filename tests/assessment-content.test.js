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

test('landing sends every diagnostic CTA to the embedded questionnaire', async () => {
  const page = await readSource('src/pages/diagnostico-datos-personales/index.astro');
  assert.match(page, /<Assessment type="datos"/);
  assert.match(page, /href="#autodiagnostico"/);
  assert.doesNotMatch(page, /href="#(empezar|inicio|contacto)"/);
});

test('landing keeps to what the service can promise today', async () => {
  const page = await readSource('src/pages/diagnostico-datos-personales/index.astro');
  assert.doesNotMatch(page, /abogado aliado|trabajamos con un abogado/i);
  assert.doesNotMatch(page, /enviarle su resultado/i);
  assert.doesNotMatch(page, /certificaci[oó]n|auditor[ií]a legal/i);
  assert.doesNotMatch(page, /formsubmit/i);
  assert.match(page, /no constituye asesoría legal/);
  assert.match(page, /wa\.me\/56945262335/);
  assert.match(page, /\/diagnostico-madurez-digital\//);
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
