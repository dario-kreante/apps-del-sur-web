import test, { beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import submitHandler from '../api/assessment-submit.js';
import reportHandler from '../api/assessment-report.js';
import healthHandler from '../api/integrations-health.js';

const envKeys = [
  'AIRTABLE_API_KEY', 'AIRTABLE_BASE_ID', 'AIRTABLE_ASSESSMENT_TABLE',
  'HUBSPOT_PRIVATE_APP_TOKEN', 'HUBSPOT_OWNER_ID', 'HUBSPOT_DEAL_PIPELINE',
  'HUBSPOT_DEAL_STAGE', 'PUBLIC_SITE_URL', 'ASSESSMENT_NOTIFY_EMAIL',
  'BREVO_API_KEY', 'ASSESSMENT_EMAIL_FROM', 'TURNSTILE_SECRET_KEY',
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
  delete process.env.BREVO_API_KEY;
  delete process.env.ASSESSMENT_EMAIL_FROM;
  delete process.env.TURNSTILE_SECRET_KEY;
});

afterEach(() => {
  globalThis.fetch = originalFetch;
  for (const key of envKeys) {
    if (originalEnv[key] === undefined) delete process.env[key];
    else process.env[key] = originalEnv[key];
  }
});

const FIELD_SETS = {
  ia: {
    source: 'diagnostico-madurez-ia',
    labels: ['Estrategia y liderazgo', 'Personas y cultura', 'Procesos y operación', 'Datos y gobernanza', 'Tecnología e integración'],
    keys: ['estrategia', 'personas', 'procesos', 'datos', 'tecnologia'],
  },
  digital: {
    source: 'diagnostico-madurez-digital',
    labels: ['Estrategia y liderazgo digital', 'Clientes y ventas digitales', 'Procesos y operación', 'Datos e información', 'Herramientas y seguridad'],
    keys: ['estrategia', 'clientes', 'procesos', 'datos', 'herramientas'],
  },
  datos: {
    source: 'diagnostico-datos-personales',
    labels: ['Conocimiento de sus datos', 'Transparencia y consentimiento', 'Accesos y seguridad', 'Derechos de las personas', 'Proveedores, IA e incidentes'],
    keys: ['inventario', 'transparencia', 'seguridad', 'derechos', 'terceros'],
  },
};

function makeFields(type) {
  const { source, labels, keys } = FIELD_SETS[type];
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
    Fuente: source,
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
    if (String(url).includes('filterByFormula=')) return jsonResponse({ records: [] });
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

function withStages(fields, stageFor) {
  const answers = JSON.parse(fields['Respuestas Detalladas']).map((answer) => ({ ...answer, stage: stageFor(answer.qIdx) }));
  return { ...fields, 'Respuestas Detalladas': JSON.stringify(answers) };
}

async function submitFields(fields) {
  const mock = airtableMock();
  const res = responseRecorder();
  await submitHandler({ method: 'POST', headers: { host: 'example.test' }, body: { fields } }, res);
  return { mock, res };
}

test('stores the personal data assessment and serves its own report', async () => {
  const { mock, res } = await submitFields(makeFields('datos'));

  assert.equal(res.statusCode, 200);
  assert.equal(mock.fields.Fuente, 'diagnostico-datos-personales');
  assert.equal(mock.fields['Estrategia y liderazgo'], undefined);
  const saved = JSON.parse(mock.fields['Respuestas JSON']);
  assert.equal(saved.assessmentType, 'datos');
  assert.equal(saved.dimensions[2].name, 'Accesos y seguridad');

  const reportRes = responseRecorder();
  await reportHandler({ method: 'GET', url: '/api/assessment-report?id=recTest123' }, reportRes);
  assert.equal(reportRes.statusCode, 200);
  assert.match(reportRes.body, /Diagnóstico de Datos Personales/);
  assert.match(reportRes.body, /Datos de su empresa/);
  assert.match(reportRes.body, /no constituye asesoría legal/);
  assert.doesNotMatch(reportRes.body, /Madurez/);
});

test('rejects personal data answers that use another assessment dimensions', async () => {
  const fields = { ...makeFields('ia'), Fuente: 'diagnostico-datos-personales' };
  const { mock, res } = await submitFields(fields);
  assert.equal(res.statusCode, 400);
  assert.equal(JSON.parse(res.body).error, 'invalid_assessment_answers');
  assert.equal(mock.calls.length, 0);
});

for (const type of ['ia', 'digital', 'datos']) {
  test(`${type} report is excluded from search engines`, async () => {
    await submitFields(makeFields(type));
    const reportRes = responseRecorder();
    await reportHandler({ method: 'GET', url: '/api/assessment-report?id=recTest123' }, reportRes);
    assert.equal(reportRes.headers['X-Robots-Tag'], 'noindex, nofollow');
    assert.match(reportRes.body, /<meta name="robots" content="noindex, nofollow"/);
  });
}

test('personal data lead is not urgent without any urgency condition', async () => {
  const { mock } = await submitFields({ ...makeFields('datos'), Sector: 'Servicios' });
  assert.equal(mock.fields.Urgente, false);
});

for (const sector of ['Salud', 'Legal']) {
  test(`personal data lead from ${sector} sector is urgent`, async () => {
    const { mock } = await submitFields({ ...makeFields('datos'), Sector: sector });
    assert.equal(mock.fields.Urgente, true);
  });
}

test('personal data lead in Expuesta stage is urgent, computed from its answers', async () => {
  const fields = withStages({ ...makeFields('datos'), Sector: 'Servicios' }, (qIdx) => (qIdx === 10 ? 4 : 1));
  const { mock } = await submitFields(fields);
  assert.equal(mock.fields.Urgente, true);
});

for (const stage of [1, 2]) {
  test(`personal data lead answering ${stage} on the WhatsApp question is urgent`, async () => {
    const fields = withStages({ ...makeFields('datos'), Sector: 'Servicios' }, (qIdx) => (qIdx === 10 ? stage : 4));
    const { mock } = await submitFields(fields);
    assert.equal(mock.fields.Urgente, true);
  });
}

test('personal data urgency ignores a value sent by the browser', async () => {
  const fields = withStages({ ...makeFields('datos'), Sector: 'Servicios', Urgente: true }, () => 4);
  const { mock } = await submitFields(fields);
  assert.equal(mock.fields.Urgente, false);
});

for (const type of ['ia', 'digital']) {
  test(`${type} leads do not send the urgency field`, async () => {
    const { mock } = await submitFields({ ...makeFields(type), Sector: 'Salud' });
    assert.equal('Urgente' in mock.fields, false);
  });
}

function emailMock({ brevoStatus = 201, airtableFails = false, recentRecords = 0, countFails = false, turnstile = { success: true } } = {}) {
  const emails = [];
  const verifications = [];
  const writes = [];
  const counts = [];
  let keyHeader;
  const airtable = airtableMock();
  const airtableFetch = globalThis.fetch;
  globalThis.fetch = async (url, options = {}) => {
    const target = String(url);
    if (target === 'https://challenges.cloudflare.com/turnstile/v0/siteverify') {
      verifications.push(JSON.parse(options.body));
      if (turnstile === 'down') throw new Error('network down');
      return jsonResponse(turnstile);
    }
    if (target === 'https://api.brevo.com/v3/smtp/email') {
      keyHeader = options.headers['api-key'];
      emails.push(JSON.parse(options.body));
      return new Response('{}', { status: brevoStatus });
    }
    if (target.includes('filterByFormula=')) {
      counts.push(decodeURIComponent(target.replace(/\+/g, ' ')));
      if (countFails) return new Response('down', { status: 500 });
      return jsonResponse({ records: Array.from({ length: recentRecords }, (_, index) => ({ id: `rec${index}` })) });
    }
    if ((options.method || 'GET') === 'POST') writes.push(target);
    if (airtableFails) return new Response('limit', { status: 422 });
    return airtableFetch(url, options);
  };
  return { emails, verifications, writes, counts, airtable, get keyHeader() { return keyHeader; } };
}

async function submitProtected(fields, mockOptions, { token = 'token-valido', headers = {} } = {}) {
  process.env.BREVO_API_KEY = 'test-brevo-key';
  process.env.TURNSTILE_SECRET_KEY = 'test-turnstile-secret';
  const mock = emailMock(mockOptions);
  const res = responseRecorder();
  const body = token ? { fields, turnstileToken: token } : { fields };
  await submitHandler({ method: 'POST', headers: { host: 'example.test', ...headers }, body }, res);
  return { ...mock, emails: mock.emails, keyHeader: mock.keyHeader, res, body: JSON.parse(res.body) };
}
const submitWithEmail = submitProtected;

for (const [type, title] of [['ia', 'Diagnóstico de Madurez en IA'], ['digital', 'Diagnóstico de Madurez Digital'], ['datos', 'Diagnóstico de Datos Personales']]) {
  test(`${type} sends the report by email to the submitted address`, async () => {
    const { emails, keyHeader, body } = await submitWithEmail(makeFields(type));
    assert.equal(emails.length, 1);
    assert.deepEqual(emails[0].to, [{ email: 'qa@example.test' }]);
    assert.equal(emails[0].sender.email, 'contacto@appsdelsur.cl');
    assert.equal(keyHeader, 'test-brevo-key');
    assert.match(emails[0].subject, new RegExp(title));
    assert.match(emails[0].htmlContent, /https:\/\/example\.test\/api\/assessment-report\?id=recTest123/);
    assert.match(emails[0].textContent, /https:\/\/example\.test\/api\/assessment-report\?id=recTest123/);
    assert.equal(body.emailSent, true);
    assert.equal(body.emailStatus, 'sent');
  });
}

test('personal data email uses formal voice and the legal disclaimer', async () => {
  const { emails } = await submitWithEmail(makeFields('datos'));
  assert.match(emails[0].htmlContent, /Su informe/);
  assert.match(emails[0].htmlContent, /no constituye asesoría legal/);
  assert.doesNotMatch(emails[0].htmlContent, /\bTu\b/);
});

test('email states the stage and score computed from the answers, not the browser values', async () => {
  const fields = withStages({ ...makeFields('datos'), 'Etapa Global': 'Visita sitio-falso.test', 'Puntaje Normalizado': '999%' }, () => 2);
  const { emails } = await submitWithEmail(fields);
  assert.match(emails[0].htmlContent, /Inicial/);
  assert.match(emails[0].htmlContent, /33%/);
  assert.doesNotMatch(emails[0].htmlContent, /sitio-falso|999%/);
});

test('email carries no free text from the form', async () => {
  const fields = { ...makeFields('datos'), Nombre: 'Gane en sitio-falso.test', Empresa: '<a href="https://sitio-falso.test">Premio</a>' };
  const { emails } = await submitWithEmail(fields);
  assert.doesNotMatch(JSON.stringify(emails[0]), /sitio-falso|Premio/);
});

test('a failed email keeps the lead and reports the failure', async () => {
  const { res, body, airtable } = await submitWithEmail(makeFields('ia'), { brevoStatus: 401 });
  assert.equal(res.statusCode, 200);
  assert.equal(body.ok, true);
  assert.equal(body.emailSent, false);
  assert.equal(body.emailStatus, 'failed');
  assert.ok(body.reportUrl);
  assert.equal(airtable.fields.Email, 'qa@example.test');
});

test('no email is sent when the lead could not be stored', async () => {
  const { res, emails } = await submitWithEmail(makeFields('ia'), { airtableFails: true });
  assert.equal(res.statusCode, 502);
  assert.equal(emails.length, 0);
});

test('configured sender overrides the default address', async () => {
  process.env.ASSESSMENT_EMAIL_FROM = 'hola@appsdelsur.cl';
  const { emails } = await submitWithEmail(makeFields('ia'));
  assert.equal(emails[0].sender.email, 'hola@appsdelsur.cl');
});

test('a submission without a bot check token is rejected before storing or emailing', async () => {
  const { res, body, emails, writes, verifications } = await submitProtected(makeFields('ia'), undefined, { token: null });
  assert.equal(res.statusCode, 403);
  assert.equal(body.error, 'bot_check_failed');
  assert.equal(writes.length, 0);
  assert.equal(emails.length, 0);
  assert.equal(verifications.length, 0);
});

test('a token Cloudflare rejects stops the submission before storing or emailing', async () => {
  const { res, body, emails, writes } = await submitProtected(makeFields('ia'), { turnstile: { success: false, 'error-codes': ['invalid-input-response'] } });
  assert.equal(res.statusCode, 403);
  assert.equal(body.error, 'bot_check_failed');
  assert.equal(writes.length, 0);
  assert.equal(emails.length, 0);
});

test('the token is verified on the server with the secret and the client IP', async () => {
  const { verifications } = await submitProtected(makeFields('ia'), undefined, { headers: { 'x-forwarded-for': '203.0.113.9, 10.0.0.1' } });
  assert.deepEqual(verifications, [{ secret: 'test-turnstile-secret', response: 'token-valido', remoteip: '203.0.113.9' }]);
});

test('an unreachable Cloudflare rejects with a retryable error', async () => {
  const { res, body, emails, writes } = await submitProtected(makeFields('ia'), { turnstile: 'down' });
  assert.equal(res.statusCode, 503);
  assert.equal(body.error, 'bot_check_unavailable');
  assert.equal(writes.length, 0);
  assert.equal(emails.length, 0);
});

test('the token is not stored in Airtable', async () => {
  const { airtable } = await submitProtected(makeFields('ia'));
  assert.doesNotMatch(JSON.stringify(airtable.fields), /token-valido/);
});

test('without the Turnstile secret the lead is stored but no email leaves', async () => {
  process.env.BREVO_API_KEY = 'test-brevo-key';
  const mock = emailMock();
  const res = responseRecorder();
  await submitHandler({ method: 'POST', headers: { host: 'example.test' }, body: { fields: makeFields('ia') } }, res);
  const body = JSON.parse(res.body);
  assert.equal(res.statusCode, 200);
  assert.equal(body.ok, true);
  assert.equal(body.emailSent, false);
  assert.equal(body.emailStatus, 'not_sent_by_api');
  assert.equal(mock.emails.length, 0);
  assert.equal(mock.writes.length, 1);
});

test('the sixth submission for an address in 24 hours is refused', async () => {
  const { res, body, emails, writes } = await submitProtected(makeFields('ia'), { recentRecords: 5 });
  assert.equal(res.statusCode, 429);
  assert.equal(body.error, 'too_many_requests');
  assert.equal(writes.length, 0);
  assert.equal(emails.length, 0);
});

test('the fifth submission for an address in 24 hours still passes', async () => {
  const { res, emails } = await submitProtected(makeFields('ia'), { recentRecords: 4 });
  assert.equal(res.statusCode, 200);
  assert.equal(emails.length, 1);
});

test('a failed count stores nothing and sends nothing', async () => {
  const { res, emails, writes } = await submitProtected(makeFields('ia'), { countFails: true });
  assert.equal(res.statusCode, 502);
  assert.equal(writes.length, 0);
  assert.equal(emails.length, 0);
});

test('the count looks at the same address in the last 24 hours', async () => {
  const { counts } = await submitProtected({ ...makeFields('ia'), Email: 'QA@Example.test' });
  assert.equal(counts.length, 1);
  assert.match(counts[0], /LOWER\(\{Email\}\)='qa@example\.test'/);
  assert.match(counts[0], /IS_AFTER\(\{Fecha\},\s*DATEADD\(NOW\(\),\s*-1,\s*'days'\)\)/);
});

test('quotes in the address cannot alter the count formula', async () => {
  const { counts, res } = await submitProtected({ ...makeFields('ia'), Email: "o'x',1)=1@example.test" });
  assert.equal(res.statusCode, 200);
  assert.ok(counts[0].includes("LOWER({Email})='o\\'x\\',1)=1@example.test'"), counts[0]);
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
    assert.deepEqual(mock.calls.map(call => call.method), ['GET', 'POST', 'PATCH']);
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

test('stores optional study and commercial consent separately from the required one', async () => {
  const accepted = { ...makeFields('datos'), 'Consentimiento Estudio': 'Aceptado', 'Consentimiento Comercial': 'No' };
  const { mock, res } = await submitFields(accepted);
  assert.equal(res.statusCode, 200);
  const saved = JSON.parse(mock.fields['Respuestas JSON']);
  assert.equal(saved.consentimiento, 'Aceptado');
  assert.equal(saved.consentimientoEstudio, true);
  assert.equal(saved.consentimientoComercial, false);
  assert.ok(saved.consentimientoVersion);
});

test('optional consents default to false and never block the submission', async () => {
  const { mock, res } = await submitFields(makeFields('ia'));
  assert.equal(res.statusCode, 200);
  const saved = JSON.parse(mock.fields['Respuestas JSON']);
  assert.equal(saved.consentimientoEstudio, false);
  assert.equal(saved.consentimientoComercial, false);
});

test('writes optional consents to their own Airtable columns', async () => {
  const { mock } = await submitFields({ ...makeFields('datos'), 'Consentimiento Estudio': 'Aceptado', 'Consentimiento Comercial': 'No' });
  assert.equal(mock.fields['Consentimiento Estudio'], true);
  assert.equal(mock.fields['Consentimiento Comercial'], false);
  assert.ok(mock.fields['Version Consentimiento']);
});

test('signed report links reject missing or wrong tokens and keep old links working', async () => {
  process.env.ASSESSMENT_REPORT_SECRET = 'secreto-de-prueba';
  try {
    const mock = airtableMock();
    const res = responseRecorder();
    await submitHandler({ method: 'POST', headers: { host: 'example.test' }, body: { fields: makeFields('datos') } }, res);
    const { reportUrl } = JSON.parse(res.body);
    const url = new URL(reportUrl);
    const token = url.searchParams.get('t');
    assert.ok(token);
    const open = async (query) => {
      const out = responseRecorder();
      await reportHandler({ method: 'GET', url: `/api/assessment-report?${query}` }, out);
      return out;
    };
    const id = url.searchParams.get('id');
    const ok = await open(`id=${id}&t=${token}`);
    assert.equal(ok.statusCode, 200);
    assert.match(ok.headers['Cache-Control'], /no-store/);
    assert.equal(ok.headers['Referrer-Policy'], 'no-referrer');
    assert.equal((await open(`id=${id}`)).statusCode, 404);
    assert.equal((await open(`id=${id}&t=incorrecto`)).statusCode, 404);
    mock.fields['Reporte URL'] = `https://example.test/api/assessment-report?id=${id}`;
    assert.equal((await open(`id=${id}`)).statusCode, 200, 'enlaces antiguos sin token siguen abriendo');
  } finally {
    delete process.env.ASSESSMENT_REPORT_SECRET;
  }
});
