/**
 * Cliente de Airtable para el panel. Corre solo en el servidor: el token nunca
 * llega al navegador.
 *
 * Los IDs de campo están fijados a propósito en vez de usar nombres. Renombrar
 * una columna en Airtable no debe romper el panel.
 */
const API = 'https://api.airtable.com/v0';

export const BASE = 'appljcRVaklZuqbzA';

export const TABLES = {
  leads: 'tblh3jWRRo7jrHOtu',
  actividades: 'tblCp4LE92jo3PNkh',
  proyectos: 'tblgh3n1thYLPRJ11',
  tareas: 'tblE37PCZGPtWHQg9',
} as const;

export const F = {
  lead: {
    empresa: 'flds46fZFRyP2BM09',
    rubro: 'fldmmq8T47s4US6Jd',
    region: 'fldggs6E12AV1AM0J',
    comuna: 'fld0TfrbvLZ42Vsu9',
    etapa: 'fldoYEGbnDfhkJG1e',
    contacto: 'fldt9nwqkocUb1ovz',
    cargo: 'fldkoba1jdN3JI6SA',
    email: 'fldU4zCUvgqC6juBX',
    telefono: 'fld4clyTfoSUUGPrZ',
    web: 'fldo4wgXlJZ9L0NQt',
    dolor: 'fldAm0xbYhvRuYnXq',
    respondio: 'fldjYWhPNrI011GU3',
    toques: 'fldQuSfMqcAsbtnp3',
    canalUltimo: 'fldrd3OqLeMWrNkF2',
    fechaPrimerContacto: 'fldxocbBZt8ICqgHy',
    fechaUltimoContacto: 'fldcw9i8r4DCPrJWS',
    proximaAccion: 'fldIybDpDw5sc5n91',
    fechaProximaAccion: 'fldbEwD9qXbkYFm87',
    valor: 'fldwIwWR0EyB7uLW7',
    motivoCierre: 'fld84zvq9OVIFITDd',
    dossier: 'fldFm7iw5N17xiYQf',
    notas: 'fldfopsoLmidIHpe9',
    valorAporte: 'fldfoyTvPeU5b2KFZ',
    borrador: 'fldiLrrLWNaO7YMtT',
    ultimoResultado: 'fldGfLgSnjSnommfR',
    control: 'fldLZ4Q9bmpuWlZq6',
    capturaPresencia: 'fldz0IZtJmzC8D8xp',
    mockup: 'fld6SERtRMUBHWZGX',
  },
  actividad: {
    actividad: 'fldgDou05xSo7W7ZP',
    leadRecordId: 'fld2lbB4cKDOQN8nz',
    empresa: 'fldMTqgxMU07W6G6A',
    fechaHora: 'fldZlq18NEoHTvvHX',
    canal: 'fldPJwg6ZvQohSGTi',
    tipo: 'fldRpgLuwA5McMk6g',
    direccion: 'fldIfrCcWDOW1cxHa',
    estado: 'fldAClfsfeayW0L7v',
    asunto: 'fldiKKImk8wImx0QM',
    mensaje: 'fldGSPo0ZKfR9afw1',
    resultado: 'fld78y4Vgcy9yv0ca',
    agente: 'fldTlvWO3Xw9YLOzE',
  },
  proyecto: {
    proyecto: 'fldpbGLzESu8DySTV',
    cliente: 'fldw7w3lYpkBRYgDR',
    estado: 'fldGATwSvltLtwwCe',
    tipo: 'fldw61NQIBJtRCZcn',
    contraparte: 'fldONIQS4vt1APsN5',
    email: 'fld3K5STZj0zovLYl',
    fechaInicio: 'fld6lbPzJjXoWLYwx',
    fechaEntrega: 'fldYAgnqVs8oTefby',
    monto: 'fld1RN6IPr1AmKOfT',
    facturado: 'fldbbuG83g0PEVXsO',
    avance: 'fldJV1IZhjj1m3d7R',
    proximoHito: 'fld7C6HlH6JYZaxTt',
    bloqueadoPor: 'fldmpHT61wrI33zHu',
    notas: 'fldPf9I0qrITzDz2q',
    origen: 'fldMypdFtKrZbfm6O',
  },
  tarea: {
    tarea: 'fldWlOQ0SRjYemyj0',
    proyecto: 'fldsSxIjuH86EfRKI',
    estado: 'fldIclt2vXNLUuFF1',
    prioridad: 'fldtSmUE2tjhladJm',
    responsable: 'fldRARgoWt8NVVC6W',
    fechaLimite: 'fldG6g6IZKTLeYwPa',
    bloqueadaPor: 'fldEQ4W3S11l6pyOy',
    notas: 'fldMezSZlS7nhJEdV',
  },
} as const;

/**
 * El token de Airtable. Acepta dos nombres a propósito:
 *
 * - `AIRTABLE_TOKEN` — token propio del panel. Es lo preferible: el endpoint
 *   público del assessment y el panel no comparten credencial, así que un fallo
 *   en el formulario público no expone el pipeline.
 * - `AIRTABLE_API_KEY` — el token que ya existía para el assessment. Sirve si
 *   se le amplía el alcance a la base del pipeline.
 *
 * Si están los dos, gana el específico del panel.
 */
export function airtableToken(
  env: Record<string, string | undefined>,
): string | undefined {
  return env.AIRTABLE_TOKEN || env.AIRTABLE_API_KEY || undefined;
}

export interface AirtableRecord {
  id: string;
  createdTime: string;
  fields: Record<string, unknown>;
}

export class AirtableError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
    this.name = 'AirtableError';
  }
}

async function call(
  token: string,
  path: string,
  init: RequestInit = {},
): Promise<any> {
  const res = await fetch(`${API}/${BASE}/${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...init.headers,
    },
  });
  if (!res.ok) {
    const body = await res.text();
    throw new AirtableError(
      `Airtable ${res.status}: ${body.slice(0, 300)}`,
      res.status,
    );
  }
  return res.json();
}

/** Trae todas las páginas. El pipeline es chico; no vale la pena paginar en la UI. */
export async function listAll(
  token: string,
  table: string,
  params: Record<string, string> = {},
): Promise<AirtableRecord[]> {
  const out: AirtableRecord[] = [];
  let offset: string | undefined;
  do {
    const qs = new URLSearchParams({ pageSize: '100', ...params });
    if (offset) qs.set('offset', offset);
    const data = await call(token, `${table}?${qs}`);
    out.push(...(data.records ?? []));
    offset = data.offset;
  } while (offset);
  return out;
}

export async function updateRecord(
  token: string,
  table: string,
  id: string,
  fields: Record<string, unknown>,
): Promise<AirtableRecord> {
  return call(token, `${table}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ fields, typecast: true }),
  });
}

export async function createRecord(
  token: string,
  table: string,
  fields: Record<string, unknown>,
): Promise<AirtableRecord> {
  const data = await call(token, table, {
    method: 'POST',
    body: JSON.stringify({ records: [{ fields }], typecast: true }),
  });
  return data.records[0];
}

/** Los singleSelect vuelven como objeto pero se escriben como string. */
export function selectName(value: unknown): string {
  if (!value) return '';
  if (typeof value === 'string') return value;
  if (typeof value === 'object' && 'name' in (value as any)) {
    return String((value as any).name);
  }
  return '';
}

export function attachmentUrl(value: unknown): string | null {
  if (!Array.isArray(value) || value.length === 0) return null;
  const a = value[0] as any;
  return a?.thumbnails?.large?.url ?? a?.url ?? null;
}
