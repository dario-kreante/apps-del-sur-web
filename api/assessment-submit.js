const DEFAULT_TABLE_NAME = 'Assessment Leads';
const ASSESSMENT_DIMENSIONS = {
  ia: [
    'Estrategia y liderazgo',
    'Personas y cultura',
    'Procesos y operación',
    'Datos y gobernanza',
    'Tecnología e integración',
  ],
  digital: [
    'Estrategia y liderazgo digital',
    'Clientes y ventas digitales',
    'Procesos y operación',
    'Datos e información',
    'Herramientas y seguridad',
  ],
};
const DIMENSION_KEYS = {
  ia: { estrategia: ASSESSMENT_DIMENSIONS.ia[0], personas: ASSESSMENT_DIMENSIONS.ia[1], procesos: ASSESSMENT_DIMENSIONS.ia[2], datos: ASSESSMENT_DIMENSIONS.ia[3], tecnologia: ASSESSMENT_DIMENSIONS.ia[4] },
  digital: { estrategia: ASSESSMENT_DIMENSIONS.digital[0], clientes: ASSESSMENT_DIMENSIONS.digital[1], procesos: ASSESSMENT_DIMENSIONS.digital[2], datos: ASSESSMENT_DIMENSIONS.digital[3], herramientas: ASSESSMENT_DIMENSIONS.digital[4] },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return sendJson(res, 405, { ok: false, error: 'method_not_allowed' });
  }

  try {
    const payload = await readJson(req);
    const lead = normalizePayload(payload);
    const config = readConfig(req);

    const validationError = validateLead(lead);
    if (validationError) {
      return sendJson(res, 400, { ok: false, error: validationError });
    }

    const airtableConfigured = Boolean(config.airtableKey && config.airtableBaseId);
    if (!airtableConfigured) {
      return sendJson(res, 503, { ok: false, error: 'report_storage_not_configured' });
    }

    let airtable;
    try {
      airtable = await createAirtableRecord(config, lead);
    } catch (error) {
      console.error('airtable sync failed', error);
      return sendJson(res, 502, { ok: false, error: 'report_storage_failed' });
    }

    return sendJson(res, 200, {
      ok: true,
      storage: 'airtable',
      airtableRecordId: airtable.recordId,
      reportUrl: airtable.reportUrl,
      emailSent: false,
      emailStatus: 'not_sent_by_api',
    });
  } catch (error) {
    console.error('assessment-submit failed', error);
    return sendJson(res, 500, { ok: false, error: 'assessment_submit_failed' });
  }
}

function normalizeEnv(value) {
  return String(value || '').trim().replace(/^['"]|['"]$/g, '');
}

function readConfig(req) {
  const siteUrl = process.env.PUBLIC_SITE_URL || getOrigin(req);
  return {
    siteUrl: siteUrl.replace(/\/$/, ''),
    airtableKey: normalizeEnv(process.env.AIRTABLE_API_KEY),
    airtableBaseId: normalizeEnv(process.env.AIRTABLE_BASE_ID),
    airtableTable: normalizeEnv(process.env.AIRTABLE_ASSESSMENT_TABLE) || DEFAULT_TABLE_NAME,
  };
}

function getOrigin(req) {
  const proto = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers['x-forwarded-host'] || req.headers.host || 'appsdelsur.cl';
  return `${proto}://${host}`;
}

async function readJson(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString('utf8');
  return raw ? JSON.parse(raw) : {};
}

function normalizePayload(payload) {
  const fields = payload.fields || payload;
  const answersJson = fields['Respuestas Detalladas'] || fields.answersDetail || '[]';
  let answers = [];
  try { answers = JSON.parse(answersJson); } catch (_error) {}

  const fuente = clean(fields.Fuente || fields.source || 'diagnostico-madurez-ia');
  const assessmentType = normalizeAssessmentType(fuente);
  const dimensions = Object.entries(fields)
    .filter(([key]) => /^Etapa\s+(?!Global\b)/i.test(key))
    .map(([key, value]) => ({ name: key.replace(/^Etapa\s+/i, ''), result: clean(value) }))
    .filter((item) => item.result);

  return {
    leadId: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    submittedAt: new Date().toISOString(),
    nombre: clean(fields.Nombre || fields.name),
    email: clean(fields.Email || fields.email).toLowerCase(),
    empresa: clean(fields.Empresa || fields.company),
    telefono: clean(fields.Telefono || fields.phone),
    sector: clean(fields.Sector || fields.sector),
    tamano: clean(fields.Tamano || fields.size),
    region: clean(fields.Region || fields.region),
    fuente,
    assessmentType,
    assessmentTitle: assessmentType === 'digital' ? 'Diagnóstico de Madurez Digital' : 'Diagnóstico de Madurez en IA',
    etapaGlobal: clean(fields['Etapa Global']),
    puntajePromedio: clean(fields['Puntaje Promedio']),
    puntajeNormalizado: clean(fields['Puntaje Normalizado']),
    fortaleza: clean(fields.Fortaleza),
    prioridad: clean(fields.Prioridad),
    brechaInterna: clean(fields['Brecha Interna']),
    resumen: clean(fields['Resumen del Diagnostico']),
    consentimiento: clean(fields.Consentimiento),
    answers,
    dimensions,
    rawFields: fields,
  };
}

function normalizeAssessmentType(source) {
  return /digital/i.test(source) ? 'digital' : 'ia';
}

function validateLead(lead) {
  if (!lead.email || !lead.nombre || !lead.empresa) return 'missing_required_fields';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) return 'invalid_email';
  if (lead.consentimiento !== 'Aceptado') return 'consent_required';
  if (!Array.isArray(lead.answers) || lead.answers.length !== 20) return 'invalid_assessment_answers';
  const expectedDimensions = ASSESSMENT_DIMENSIONS[lead.assessmentType];
  const dimensionCounts = new Map(expectedDimensions.map((dimension) => [dimension, 0]));
  const seenQuestionIndexes = new Set();
  for (const answer of lead.answers) {
    const dimension = clean(answer && (answer.dimension || DIMENSION_KEYS[lead.assessmentType][answer.dim]));
    const stage = Number(answer && answer.stage);
    const qIdx = Number(answer && answer.qIdx);
    if (!dimensionCounts.has(dimension) || !Number.isInteger(qIdx) || qIdx < 0 || qIdx > 19 || seenQuestionIndexes.has(qIdx)) {
      return 'invalid_assessment_answers';
    }
    if (!Number.isInteger(stage) || stage < 1 || stage > 4) return 'invalid_assessment_answers';
    seenQuestionIndexes.add(qIdx);
    dimensionCounts.set(dimension, dimensionCounts.get(dimension) + 1);
  }
  if (seenQuestionIndexes.size !== 20 || [...dimensionCounts.values()].some((count) => count !== 4)) return 'invalid_assessment_answers';
  return null;
}

function clean(value) {
  return String(value || '').trim().slice(0, 15000);
}

async function createAirtableRecord(config, lead) {
  const fields = airtableFields(lead, '');
  const created = await airtableRequest(config, 'POST', '', {
    records: [{ fields }],
    typecast: true,
  });

  const recordId = created.records?.[0]?.id;
  const reportUrl = recordId ? `${config.siteUrl}/api/assessment-report?id=${encodeURIComponent(recordId)}` : '';

  if (!recordId || !reportUrl) throw new Error('Airtable did not return a record ID');
  await updateAirtableRecord(config, recordId, { 'Reporte URL': reportUrl });

  return { configured: true, recordId, reportUrl };
}

async function updateAirtableRecord(config, recordId, fields) {
  await airtableRequest(config, 'PATCH', '', {
    records: [{ id: recordId, fields }],
    typecast: true,
  });
}

function airtableFields(lead, reportUrl) {
  const fields = {
    'Lead ID': lead.leadId,
    'Fecha': lead.submittedAt,
    'Nombre': lead.nombre,
    'Email': lead.email,
    'Empresa': lead.empresa,
    'Telefono': lead.telefono,
    'Sector': lead.sector,
    'Tamano': lead.tamano,
    'Region': lead.region,
    'Fuente': lead.fuente,
    'Etapa Global': lead.etapaGlobal,
    'Puntaje Promedio': Number.parseFloat(lead.puntajePromedio) || null,
    'Puntaje Normalizado': lead.puntajeNormalizado,
    'Fortaleza': lead.fortaleza,
    'Prioridad': lead.prioridad,
    'Brecha Interna': Number.parseFloat(lead.brechaInterna) || null,
    'Reporte URL': reportUrl,
    'Respuestas JSON': JSON.stringify({ version: 1, assessmentType: lead.assessmentType, consentimiento: lead.consentimiento, dimensions: lead.dimensions, answers: lead.answers }),
    'Resumen': lead.resumen,
    'Estado CRM': 'Nuevo',
  };
  // These existing Airtable columns are specific to the IA assessment. Keep
  // them accurate for legacy reports and store Digital dimensions in Respuestas JSON.
  if (lead.assessmentType === 'ia') {
    fields['Estrategia y liderazgo'] = clean(lead.rawFields['Etapa Estrategia y liderazgo']);
    fields['Personas y cultura'] = clean(lead.rawFields['Etapa Personas y cultura']);
    fields['Procesos y operación'] = clean(lead.rawFields['Etapa Procesos y operación']);
    fields['Datos y gobernanza'] = clean(lead.rawFields['Etapa Datos y gobernanza']);
    fields['Tecnología e integración'] = clean(lead.rawFields['Etapa Tecnología e integración']);
  }
  return fields;
}

async function airtableRequest(config, method, path, body) {
  const table = encodeURIComponent(config.airtableTable);
  const url = `https://api.airtable.com/v0/${config.airtableBaseId}/${table}${path}`;
  const response = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${config.airtableKey}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Airtable ${response.status}: ${text}`);
  }
  return response.json();
}

function sendJson(res, statusCode, body) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(body));
}
