import test from 'node:test';
import assert from 'node:assert/strict';
import handler from '../api/baja.js';
import { signBajaId } from '../api/_lib/baja-token.js';

const TOKEN = 'tok_abcdefghijklmnop1234';

function recorder() {
  return {
    statusCode: 200, headers: {}, body: '',
    setHeader(key, value) { this.headers[key.toLowerCase()] = value; },
    end(value = '') { this.body = value; },
  };
}

function airtable({ found = true, estado = 'Enviada', existingOptOut = false } = {}) {
  const state = { bajas: [], patches: [], lastFormula: '', optOutFormula: '', invitationReads: 0 };
  process.env.AIRTABLE_API_KEY = 'key';
  process.env.AIRTABLE_BASE_ID = 'appTest';
  globalThis.fetch = async (url, options = {}) => {
    const target = new URL(url);
    const table = decodeURIComponent(target.pathname.split('/')[3]);
    const method = options.method || 'GET';
    const json = (value) => new Response(JSON.stringify(value), { status: 200 });
    if (table === 'Invitaciones del estudio' && method === 'GET') {
      state.lastFormula = target.searchParams.get('filterByFormula');
      state.invitationReads += 1;
      return json({ records: found ? [{ id: 'recInv', fields: { Email: 'persona@example.test', 'Invitación ID': 'INV-1', Estado: estado } }] : [] });
    }
    if (table === 'Invitaciones del estudio' && method === 'PATCH') { state.patches.push(JSON.parse(options.body)); return json({}); }
    if (table === 'Bajas' && method === 'GET') {
      state.optOutFormula = target.searchParams.get('filterByFormula');
      return json({ records: existingOptOut ? [{ id: 'recBaja' }] : [] });
    }
    if (table === 'Bajas' && method === 'POST') { state.bajas.push(JSON.parse(options.body).records[0].fields); return json({ records: [{ id: 'recBaja' }] }); }
    return new Response('{}', { status: 404 });
  };
  return state;
}

const call = async (method, query = `t=${TOKEN}`) => {
  const res = recorder();
  await handler({ method, url: `/api/baja/?${query}`, headers: {} }, res);
  return res;
};

test('GET only asks for confirmation, so link scanners cannot unsubscribe anyone', async () => {
  const state = airtable();
  const res = await call('GET');
  assert.equal(res.statusCode, 200);
  assert.match(res.body, /<form method="post"/);
  assert.equal(state.bajas.length, 0);
  assert.equal(state.patches.length, 0);
  assert.equal(res.headers['x-robots-tag'], 'noindex, nofollow');
});

test('POST records the opt-out once and marks the invitation', async () => {
  const state = airtable();
  const res = await call('POST');
  assert.equal(res.statusCode, 200);
  assert.equal(state.bajas[0].Email, 'persona@example.test');
  assert.equal(state.bajas[0]['Invitación ID'], 'INV-1');
  assert.equal(state.patches[0].fields.Estado, 'Baja');
  assert.doesNotMatch(res.body, /persona@example\.test/);
});

test('repeating the opt-out does not duplicate it', async () => {
  const state = airtable({ estado: 'Baja' });
  const res = await call('POST');
  assert.equal(res.statusCode, 200);
  assert.equal(state.bajas.length, 0);
});

test('malformed tokens never reach Airtable', async () => {
  const state = airtable();
  const res = await call('POST', "t=x'%20OR%201=1");
  assert.equal(res.statusCode, 400);
  assert.equal(state.lastFormula, '');
});

test('unknown tokens get the same neutral answer without writing', async () => {
  const state = airtable({ found: false });
  const res = await call('POST');
  assert.equal(res.statusCode, 404);
  assert.equal(state.bajas.length, 0);
});

test('a failed write tells the person how to opt out by email', async () => {
  airtable();
  const working = globalThis.fetch;
  globalThis.fetch = async (url, options = {}) => (options.method === 'POST' ? new Response('{}', { status: 500 }) : working(url, options));
  const res = await call('POST');
  assert.equal(res.statusCode, 502);
  assert.match(res.body, /contacto@appsdelsur\.cl/);
});

test('other methods are rejected', async () => {
  airtable();
  assert.equal((await call('DELETE')).statusCode, 405);
});

const SECRET = 'baja-secret-for-tests';
const signed = (id = 'a3290fe5492d7eec') => `t=${id}.${signBajaId(SECRET, id)}`;

test('a signed token records the opt-out by prospect id without touching invitations', async () => {
  process.env.BAJA_TOKEN_SECRET = SECRET;
  const state = airtable();
  const res = await call('POST', signed());
  assert.equal(res.statusCode, 200);
  assert.equal(state.invitationReads, 0);
  assert.equal(state.bajas[0]['ID prospección'], 'a3290fe5492d7eec');
  assert.equal(state.bajas[0].Origen, 'Enlace de baja');
  assert.equal('Email' in state.bajas[0], false);
});

test('opening a signed link only asks for confirmation', async () => {
  process.env.BAJA_TOKEN_SECRET = SECRET;
  const state = airtable();
  const res = await call('GET', signed());
  assert.equal(res.statusCode, 200);
  assert.match(res.body, /action="\/api\/baja\/\?t=a3290fe5492d7eec\./);
  assert.equal(state.bajas.length, 0);
});

test('repeating a signed opt-out does not duplicate it', async () => {
  process.env.BAJA_TOKEN_SECRET = SECRET;
  const state = airtable({ existingOptOut: true });
  const res = await call('POST', signed());
  assert.equal(res.statusCode, 200);
  assert.match(state.optOutFormula, /a3290fe5492d7eec/);
  assert.equal(state.bajas.length, 0);
});

test('a forged signature is rejected without reaching Airtable', async () => {
  process.env.BAJA_TOKEN_SECRET = SECRET;
  const state = airtable();
  const other = signBajaId('other-secret', 'a3290fe5492d7eec');
  for (const method of ['GET', 'POST']) {
    const res = await call(method, `t=a3290fe5492d7eec.${other}`);
    assert.equal(res.statusCode, 404);
  }
  assert.equal(state.bajas.length, 0);
  assert.equal(state.optOutFormula, '');
});

test('a signature for one prospect does not work for another', async () => {
  process.env.BAJA_TOKEN_SECRET = SECRET;
  const state = airtable();
  const res = await call('POST', `t=bbbbbbbbbbbbbbbb.${signBajaId(SECRET, 'a3290fe5492d7eec')}`);
  assert.equal(res.statusCode, 404);
  assert.equal(state.bajas.length, 0);
});

test('signed tokens fail closed when the secret is missing', async () => {
  delete process.env.BAJA_TOKEN_SECRET;
  const state = airtable();
  const res = await call('POST', signed());
  assert.equal(res.statusCode, 404);
  assert.equal(state.bajas.length, 0);
  assert.match(res.body, /contacto@appsdelsur\.cl/);
});
