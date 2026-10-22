import test, { beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import submitHandler from '../api/assessment-submit.js';
import reportHandler from '../api/assessment-report.js';
import healthHandler from '../api/integrations-health.js';

const envKeys = [
  'AIRTABLE_API_KEY', 'AIRTABLE_BASE_ID', 'AIRTABLE_ASSESSMENT_TABLE',
  'HUBSPOT_PRIVATE_APP_TOKEN', 'HUBSPOT_OWNER_ID', 'HUBSPOT_DEAL_PIPELINE',
  'HUBSPOT_DEAL_STAGE', 'PUBLIC_SITE_URL', 'ASSESSMENT_NOTIFY_EMAIL',
];
const originalEnv = Object.fromEntries(envKeys.map((key) => [key, process.env[key]]));
const originalFetch = globalThis.fetch;

beforeEach(() => {
  Object.assign(process.env, {
    AIRTABLE_API_KEY: 'test-airtable-token',
    AIRTABLE_BASE_ID: 'appTestBase',
    AIRTABLE_ASSESSMENT_TABLE: 'Assessment Leads',
    PUBLIC_SITE_URL: 'https://example.test',
  });
  delete process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  delete process.env.HUBSPOT_DEAL_PIPELINE;
  delete process.env.HUBSPOT_DEAL_STAGE;
});

afterEach(() => {
  globalThis.fetch = originalFetch;
  for (const key of envKeys) {
    if (originalEnv[key] === undefined) delete process.env[key];
    else process.env[key] = originalEnv[key];
  }
});

function makeFields(type) {
  const digital = type === 'digital';
  const labels = digital
    ? ['Estrategia y liderazgo digital', 'Clientes y ventas digitales', 'Procesos y operación', 'Datos e información', 'Herramientas y seguridad']
    : ['Estrategia y liderazgo', 'Personas y cultura', 'Procesos y operación', 'Datos y gobernanza', 'Tecnología e integración'];
  const keys = digital
    ? ['estrategia', 'clientes', 'procesos', 'datos', 'herramientas']
    : ['estrategia', 'personas', 'procesos', 'datos', 'tecnologia'];
  const answers = Array.from({ length: 20 }, (_, index) => {
    const dimensionIndex = Math.floor(index / 4);
    return {
      qIdx: index,
      dim: keys[dimensionIndex],
      dimension: labels[dimensionIndex],
      question: `Pregunta ${index + 1}`,
      stage: index % 4 + 1,
      stageName: `Etapa ${index % 4 + 1}`,
    };
  });
  return {
    Nombre: 'Persona QA',
    Email: 'qa@example.test',
    Empresa: 'Empresa QA',
    Fuente: `diagnostico-madurez-${type}`,
    Consentimiento: 'Aceptado',
    'Respuestas Detalladas': JSON.stringify(answers),
    'Etapa Global': '2 — En desarrollo',
    'Puntaje Promedio': '2.4',
    'Puntaje Normalizado': '60%',
    Fortaleza: `${labels[0]} — Etapa 1`,
    Prioridad: `${labels[1]} — Etapa 2`,
    'Brecha Interna': '1.2',
    'Resumen del Diagnostico': `Próximos pasos prioritarios:\n  • ${labels[0]}: Ruta de mejora ${type}`,
    ...Object.fromEntries(labels.map((label, index) => [`Etapa ${label}`, `${index + 1} — Nivel ${index + 1} (avg ${(index + 1).toFixed(2)})`])),
  };
}

function responseRecorder() {
  return {
    statusCode: 200,
    headers: {},
    body: '',
    setHeader(name, value) { this.headers[name] = value; },
    end(value = '') { this.body = value; },
  };
}

function airtableMock() {
  let storedFields;
  let createBody;
  const calls = [];
  globalThis.fetch = async (url, options = {}) => {
    calls.push({ url: String(url), method: options.method || 'GET' });
    const method = options.method || 'GET';
    if (method === 'POST') {
      createBody = JSON.parse(options.body);
      storedFields = createBody.records[0].fields;
      return jsonResponse({ records: [{ id: 'recTest123', fields: storedFields }] });
    }
    if (method === 'PATCH') {
      const patch = JSON.parse(options.body).records[0].fields;
      Object.assign(storedFields, patch);
      return jsonResponse({ records: [{ id: 'recTest123', fields: storedFields }] });
    }
    if (String(url).includes('/recTest123')) return jsonResponse({ id: 'recTest123', fields: storedFields });
    return new Response('Unexpected mocked request', { status: 500 });
  };
  return { calls, get createBody() { return createBody; }, get fields() { return storedFields; } };
}

function jsonResponse(value) {
  return new Response(JSON.stringify(value), { status: 200, headers: { 'Content-Type': 'application/json' } });
}

test('stores IA assessment and serves a saved, typed report', async () => {
  const mock = airtableMock();
  const fields = makeFields('ia');
  const submitRes = responseRecorder();
  await submitHandler({ method: 'POST', headers: { host: 'example.test' }, body: { fields } }, submitRes);

  assert.equal(submitRes.statusCode, 200);
  const result = JSON.parse(submitRes.body);
  assert.equal(result.ok, true);
  assert.equal(result.reportUrl, 'https://example.test/api/assessment-report?id=recTest123');
  assert.equal(result.emailSent, false);
  assert.equal(result.emailStatus, 'not_sent_by_api');
  assert.equal(mock.fields.Fuente, 'diagnostico-madurez-ia');
  assert.equal(JSON.parse(mock.fields['Respuestas JSON']).consentimiento, 'Aceptado');
  assert.equal(mock.fields['Estrategia y liderazgo'], fields['Etapa Estrategia y liderazgo']);
  assert.equal(mock.fields['Reporte URL'], result.reportUrl);

  const reportRes = responseRecorder();
  await reportHandler({ method: 'GET', url: '/api/assessment-report?id=recTest123' }, reportRes);
  assert.equal(reportRes.statusCode, 200);
  assert.match(reportRes.body, /Diagnóstico de Madurez en IA/);
  assert.match(reportRes.body, /Estrategia y liderazgo/);
  assert.match(reportRes.body, /Pregunta 1/);
  assert.match(reportRes.body, /Datos de tu empresa/);
  assert.match(reportRes.body, /Tu ruta de mejora/);
  assert.match(reportRes.body, /Ruta de mejora ia/);
  assert.match(reportRes.body, /window\.print\(\)/);
});

test('stores digital dimensions without labeling them as IA and serves a digital report', async () => {
  const mock = airtableMock();
  const fields = makeFields('digital');
  const submitRes = responseRecorder();
  await submitHandler({ method: 'POST', headers: { host: 'example.test' }, body: { fields } }, submitRes);

  assert.equal(submitRes.statusCode, 200);
  assert.equal(mock.fields.Fuente, 'diagnostico-madurez-digital');
  assert.equal(mock.fields['Estrategia y liderazgo'], undefined);
  const saved = JSON.parse(mock.fields['Respuestas JSON']);
  assert.equal(saved.assessmentType, 'digital');
  assert.equal(saved.dimensions[1].name, 'Clientes y ventas digitales');
  assert.equal(mock.fields['Reporte URL'], JSON.parse(submitRes.body).reportUrl);

  const reportRes = responseRecorder();
  await reportHandler({ method: 'GET', url: '/api/assessment-report?id=recTest123' }, reportRes);
  assert.equal(reportRes.statusCode, 200);
  assert.match(reportRes.body, /Diagnóstico de Madurez Digital/);
  assert.match(reportRes.body, /Clientes y ventas digitales/);
  assert.match(reportRes.body, /Ruta de mejora digital/);
  assert.doesNotMatch(reportRes.body, /Diagnóstico de Madurez en IA/);
});

test('rejects incomplete assessment data before any external request', async () => {
  let called = false;
  globalThis.fetch = async () => { called = true; throw new Error('should not call'); };
  const res = responseRecorder();
  await submitHandler({ method: 'POST', headers: {}, body: { fields: { Nombre: 'A', Email: 'invalid', Empresa: 'B' } } }, res);
  assert.equal(res.statusCode, 400);
  assert.equal(JSON.parse(res.body).error, 'invalid_email');
  assert.equal(called, false);
});

test('rejects partial answers and missing consent before any external request', async () => {
  let called = false;
  globalThis.fetch = async () => { called = true; throw new Error('should not call'); };
  const invalidPayloads = [
    (fields) => { fields['Respuestas Detalladas'] = JSON.stringify(JSON.parse(fields['Respuestas Detalladas']).slice(0, 5)); },
    (fields) => {
      const answers = JSON.parse(fields['Respuestas Detalladas']);
      answers[19].qIdx = 18;
      fields['Respuestas Detalladas'] = JSON.stringify(answers);
    },
    (fields) => {
      const answers = JSON.parse(fields['Respuestas Detalladas']);
      answers[0].dimension = 'Dimensión desconocida';
      fields['Respuestas Detalladas'] = JSON.stringify(answers);
    },
    (fields) => {
      const answers = JSON.parse(fields['Respuestas Detalladas']);
      answers[0].stage = 5;
      fields['Respuestas Detalladas'] = JSON.stringify(answers);
    },
  ];
  for (const mutate of invalidPayloads) {
    const fields = makeFields('digital');
    mutate(fields);
    const res = responseRecorder();
    await submitHandler({ method: 'POST', headers: {}, body: { fields } }, res);
    assert.equal(res.statusCode, 400);
    assert.equal(JSON.parse(res.body).error, 'invalid_assessment_answers');
  }

  const noConsent = makeFields('ia');
  delete noConsent.Consentimiento;
  const res = responseRecorder();
  await submitHandler({ method: 'POST', headers: {}, body: { fields: noConsent } }, res);
  assert.equal(res.statusCode, 400);
  assert.equal(JSON.parse(res.body).error, 'consent_required');
  assert.equal(called, false);
});

test('does not return success when report storage is unavailable', async () => {
  delete process.env.AIRTABLE_API_KEY;
  const res = responseRecorder();
  await submitHandler({ method: 'POST', headers: {}, body: { fields: makeFields('digital') } }, res);
  assert.equal(res.statusCode, 503);
  assert.equal(JSON.parse(res.body).ok, false);
});

test('does not return success if Airtable rejects persistence', async () => {
  globalThis.fetch = async () => new Response('mock failure', { status: 500 });
  const res = responseRecorder();
  const originalConsoleError = console.error;
  console.error = () => {};
  try {
    await submitHandler({ method: 'POST', headers: {}, body: { fields: makeFields('ia') } }, res);
  } finally {
    console.error = originalConsoleError;
  }
  assert.equal(res.statusCode, 502);
  assert.equal(JSON.parse(res.body).error, 'report_storage_failed');
});

for (const type of ['ia', 'digital']) {
  test(`${type} saves exclusively to Airtable even with legacy HubSpot configuration`, async () => {
    Object.assign(process.env, { HUBSPOT_PRIVATE_APP_TOKEN: 'legacy-token', HUBSPOT_OWNER_ID: '123', HUBSPOT_DEAL_PIPELINE: 'pipeline', HUBSPOT_DEAL_STAGE: 'stage' });
    const mock = airtableMock();
    const res = responseRecorder();
    await submitHandler({ method: 'POST', headers: {}, body: { fields: makeFields(type) } }, res);
    const result = JSON.parse(res.body);
    assert.equal(res.statusCode, 200);
    assert.equal(result.storage, 'airtable');
    assert.equal(result.airtableRecordId, 'recTest123');
    assert.equal(mock.fields['Reporte URL'], result.reportUrl);
    assert.deepEqual(mock.calls.map(call => call.method), ['POST', 'PATCH']);
    assert.ok(mock.calls.every(call => new URL(call.url).hostname === 'api.airtable.com'));
    assert.ok(!Object.keys(result).some(key => /hubspot/i.test(key)));
    assert.ok(!Object.keys(mock.fields).some(key => /hubspot/i.test(key)));
    assert.equal(mock.fields['Estado CRM'], 'Nuevo');
  });
}

test('health checks only read Airtable and expose no credentials or record data', async () => {
  process.env.HUBSPOT_PRIVATE_APP_TOKEN = 'legacy-token';
  const calls = [];
  globalThis.fetch = async (url, options) => {
    calls.push({ url, method: options.method });
    return jsonResponse({ records: [{ fields: { Email: 'private@example.test' } }] });
  };
  const res = responseRecorder();
  await healthHandler({ method: 'GET' }, res);
  const result = JSON.parse(res.body);
  assert.equal(result.ok, true);
  assert.equal(calls.length, 1);
  assert.equal(calls[0].method, 'GET');
  assert.equal(new URL(calls[0].url).hostname, 'api.airtable.com');
  assert.equal(result.hubspot, undefined);
  assert.ok(!/test-airtable-token|private@example.test|legacy-token/.test(res.body));
});
