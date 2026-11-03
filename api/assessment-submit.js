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
  datos: [
    'Conocimiento de sus datos',
    'Transparencia y consentimiento',
    'Accesos y seguridad',
    'Derechos de las personas',
    'Proveedores, IA e incidentes',
  ],
};
const DIMENSION_KEYS = {
  ia: { estrategia: ASSESSMENT_DIMENSIONS.ia[0], personas: ASSESSMENT_DIMENSIONS.ia[1], procesos: ASSESSMENT_DIMENSIONS.ia[2], datos: ASSESSMENT_DIMENSIONS.ia[3], tecnologia: ASSESSMENT_DIMENSIONS.ia[4] },
  digital: { estrategia: ASSESSMENT_DIMENSIONS.digital[0], clientes: ASSESSMENT_DIMENSIONS.digital[1], procesos: ASSESSMENT_DIMENSIONS.digital[2], datos: ASSESSMENT_DIMENSIONS.digital[3], herramientas: ASSESSMENT_DIMENSIONS.digital[4] },
  datos: { inventario: ASSESSMENT_DIMENSIONS.datos[0], transparencia: ASSESSMENT_DIMENSIONS.datos[1], seguridad: ASSESSMENT_DIMENSIONS.datos[2], derechos: ASSESSMENT_DIMENSIONS.datos[3], terceros: ASSESSMENT_DIMENSIONS.datos[4] },
};
const ASSESSMENT_TITLES = {
  ia: 'Diagnóstico de Madurez en IA',
  digital: 'Diagnóstico de Madurez Digital',
  datos: 'Diagnóstico de Datos Personales',
};
const ASSESSMENT_STAGES = { ia: ['Analógica', 'Principiante', 'Intermedia', 'Líder en IA'], digital: ['Papel y WhatsApp', 'Digital Básica', 'Digital Conectada', 'Digital Optimizada'], datos: ['Expuesta', 'Inicial', 'Encaminada', 'Preparada'] };
const EMAIL_COPY = {
  ia: { heading: 'Tu informe está listo', stage: 'Tu etapa', score: 'Puntaje', cta: 'Abrir mi informe', closing: 'Puedes responder este correo si quieres conversar sobre los próximos pasos.', disclaimer: 'Este diagnóstico es una autoevaluación orientativa.' },
  digital: { heading: 'Tu informe está listo', stage: 'Tu etapa', score: 'Puntaje', cta: 'Abrir mi informe', closing: 'Puedes responder este correo si quieres conversar sobre los próximos pasos.', disclaimer: 'Este diagnóstico es una autoevaluación orientativa.' },
  datos: { heading: 'Su informe está listo', stage: 'Su etapa', score: 'Puntaje', cta: 'Abrir mi informe', closing: 'Puede responder este correo si quiere conversar sobre los próximos pasos.', disclaimer: 'Este diagnóstico es orientativo y no constituye asesoría legal.' },
};
const BREVO_EMAIL_URL = 'https://api.brevo.com/v3/smtp/email';
const DEFAULT_EMAIL_FROM = 'contacto@appsdelsur.cl';
const EMAIL_TIMEOUT_MS = 8000;
const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const TURNSTILE_TIMEOUT_MS = 5000;
const MAX_SUBMISSIONS_PER_EMAIL = 5;
const EXPOSED_STAGE_MAX_AVG = 1.6;
const WHATSAPP_QUESTION_INDEX = 10;

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

    const botCheck = await verifyBotCheck(config, payload.turnstileToken, req);
    if (botCheck === 'rejected') return sendJson(res, 403, { ok: false, error: 'bot_check_failed' });
    if (botCheck === 'unavailable') return sendJson(res, 503, { ok: false, error: 'bot_check_unavailable' });

    let airtable;
    try {
      if (await countRecentSubmissions(config, lead.email) >= MAX_SUBMISSIONS_PER_EMAIL) {
        return sendJson(res, 429, { ok: false, error: 'too_many_requests' });
      }
      airtable = await createAirtableRecord(config, lead);
    } catch (error) {
      console.error('airtable sync failed', error);
      return sendJson(res, 502, { ok: false, error: 'report_storage_failed' });
    }

    // Without the bot check the endpoint could send mail to anyone, so no check means no mail.
    const emailStatus = botCheck === 'passed' ? await sendReportEmail(config, lead, airtable.reportUrl) : 'not_sent_by_api';

    return sendJson(res, 200, {
      ok: true,
      storage: 'airtable',
      airtableRecordId: airtable.recordId,
      reportUrl: airtable.reportUrl,
      emailSent: emailStatus === 'sent',
      emailStatus,
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
    brevoKey: normalizeEnv(process.env.BREVO_API_KEY),
    emailFrom: normalizeEnv(process.env.ASSESSMENT_EMAIL_FROM) || DEFAULT_EMAIL_FROM,
    turnstileSecret: normalizeEnv(process.env.TURNSTILE_SECRET_KEY),
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
    assessmentTitle: ASSESSMENT_TITLES[assessmentType],
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
  if (/datos-personales/i.test(source)) return 'datos';
  return /digital/i.test(source) ? 'digital' : 'ia';
}

function isUrgentDataLead(lead) {
  if (/^(salud|legal)$/i.test(lead.sector)) return true;
  const whatsapp = lead.answers.find((answer) => Number(answer.qIdx) === WHATSAPP_QUESTION_INDEX);
  return computeResult(lead).stage === 1 || Number(whatsapp.stage) <= 2;
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

async function verifyBotCheck(config, token, req) {
  if (!config.turnstileSecret) return 'not_configured';
  if (!token || typeof token !== 'string') return 'rejected';
  const remoteip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim();
  try {
    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret: config.turnstileSecret, response: token, ...(remoteip ? { remoteip } : {}) }),
      signal: AbortSignal.timeout(TURNSTILE_TIMEOUT_MS),
    });
    if (!response.ok) throw new Error(`Turnstile ${response.status}`);
    const result = await response.json();
    return result.success === true ? 'passed' : 'rejected';
  } catch (error) {
    console.error('bot check unavailable', error);
    return 'unavailable';
  }
}

async function countRecentSubmissions(config, email) {
  const escaped = email.toLowerCase().replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  const formula = `AND(LOWER({Email})='${escaped}', IS_AFTER({Fecha}, DATEADD(NOW(), -1, 'days')))`;
  const query = new URLSearchParams({ filterByFormula: formula, maxRecords: String(MAX_SUBMISSIONS_PER_EMAIL) });
  query.append('fields[]', 'Email');
  const result = await airtableRequest(config, 'GET', `?${query}`);
  return (result.records || []).length;
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
  if (lead.assessmentType === 'datos') fields.Urgente = isUrgentDataLead(lead);
  return fields;
}

// The endpoint is public, so the email only carries values computed here: free text
// from the form would let anyone send arbitrary content to any address.
function computeResult(lead) {
  const average = lead.answers.reduce((sum, answer) => sum + Number(answer.stage), 0) / lead.answers.length;
  const stage = average < EXPOSED_STAGE_MAX_AVG ? 1 : average < 2.4 ? 2 : average < 3.3 ? 3 : 4;
  return { stageName: ASSESSMENT_STAGES[lead.assessmentType][stage - 1], stage, percent: Math.round(((average - 1) / 3) * 100) };
}

function buildReportEmail(config, lead, reportUrl) {
  const copy = EMAIL_COPY[lead.assessmentType];
  const { stage, stageName, percent } = computeResult(lead);
  const url = encodeURI(reportUrl);
  return {
    sender: { name: 'Apps del Sur', email: config.emailFrom },
    replyTo: { email: config.emailFrom },
    to: [{ email: lead.email }],
    subject: `${lead.assessmentTitle}: ${copy.heading.toLowerCase()}`,
    htmlContent: `<!doctype html><html lang="es-CL"><body style="margin:0;background:#f7faf7;padding:24px;font-family:Arial,Helvetica,sans-serif;color:#173a2e"><div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #dce8df;border-radius:12px;padding:28px"><p style="margin:0 0 8px;color:#176b4d;font-size:14px;font-weight:bold">Apps del Sur · ${lead.assessmentTitle}</p><h1 style="margin:0 0 16px;font-size:24px">${copy.heading}</h1><p style="margin:0 0 6px">${copy.stage}: <strong>${stage} de 4, ${stageName}</strong></p><p style="margin:0 0 20px">${copy.score}: <strong>${percent}%</strong></p><p style="margin:0 0 20px"><a href="${url}" style="display:inline-block;background:#176b4d;color:#ffffff;text-decoration:none;font-weight:bold;padding:12px 20px;border-radius:999px">${copy.cta}</a></p><p style="margin:0 0 16px;font-size:14px;word-break:break-all"><a href="${url}" style="color:#176b4d">${url}</a></p><p style="margin:0 0 16px;font-size:14px">${copy.closing}</p><p style="margin:0;font-size:12px;color:#66766c">${copy.disclaimer}</p></div></body></html>`,
    textContent: [`${lead.assessmentTitle}`, '', copy.heading, `${copy.stage}: ${stage} de 4, ${stageName}`, `${copy.score}: ${percent}%`, '', `${copy.cta}: ${url}`, '', copy.closing, copy.disclaimer].join('\n'),
  };
}

async function sendReportEmail(config, lead, reportUrl) {
  if (!config.brevoKey) return 'not_sent_by_api';
  try {
    const response = await fetch(BREVO_EMAIL_URL, {
      method: 'POST',
      headers: { 'api-key': config.brevoKey, 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(buildReportEmail(config, lead, reportUrl)),
      signal: AbortSignal.timeout(EMAIL_TIMEOUT_MS),
    });
    if (!response.ok) throw new Error(`Brevo ${response.status}: ${await response.text()}`);
    return 'sent';
  } catch (error) {
    console.error('report email failed', error);
    return 'failed';
  }
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
