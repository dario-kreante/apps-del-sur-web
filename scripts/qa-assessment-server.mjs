/** Local integration fixture: actual API handlers, in-memory Airtable, no external writes. */
import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import submit from '../api/assessment-submit.js';
import report from '../api/assessment-report.js';
const actualFetch = globalThis.fetch;
const records = new Map();
const emails = [];
let failing = false;
let emailFailing = false;
process.env.AIRTABLE_API_KEY = 'qa-fixture-only';
process.env.AIRTABLE_BASE_ID = 'appQaFixture';
process.env.AIRTABLE_ASSESSMENT_TABLE = 'Assessment Leads';
process.env.HUBSPOT_PRIVATE_APP_TOKEN = '';
process.env.BREVO_API_KEY ||= 'qa-fixture-only';
// Cloudflare's published test secrets: one always passes, the other always fails.
const TURNSTILE_PASS = '1x0000000000000000000000000000000AA';
const TURNSTILE_FAIL = '2x0000000000000000000000000000000AA';
// QA_TURNSTILE=off: the e2e run blocks third parties, so the widget cannot produce a token.
process.env.TURNSTILE_SECRET_KEY = process.env.QA_TURNSTILE === 'off' ? '' : TURNSTILE_PASS;
process.env.PUBLIC_SITE_URL = 'http://127.0.0.1:4322';
globalThis.fetch = async (url, options={}) => {
 const target = new URL(url);
 if (target.hostname === 'api.airtable.com') {
  if (failing) return Response.json({error:'QA intentional failure'}, {status:503});
  const body = options.body ? JSON.parse(options.body) : {};
  const method = options.method || 'GET';
  if (method==='POST') {
   const id = 'rec' + String(records.size+1).padStart(14,'0');
   const record = {id,fields:body.records[0].fields}; records.set(id, record);
   return Response.json({records:[record]});
  }
  if (method==='PATCH') {
   if (body.records) { for (const record of body.records) Object.assign(records.get(record.id).fields,record.fields); return Response.json({records:body.records.map(r=>records.get(r.id))}); }
   const id=target.pathname.split('/').pop(); Object.assign(records.get(id).fields,body.fields); return Response.json(records.get(id));
  }
  if (target.searchParams.has('filterByFormula')) {
   const email = target.searchParams.get('filterByFormula').match(/LOWER\(\{Email\}\)='([^']*)'/)?.[1];
   return Response.json({records:[...records.values()].filter((record)=>String(record.fields.Email).toLowerCase()===email)});
  }
  const id=target.pathname.split('/').pop(); return records.has(id) ? Response.json(records.get(id)) : Response.json({}, {status:404});
 }
 if (target.hostname === 'challenges.cloudflare.com') return actualFetch(url,options);
 if (target.hostname === 'api.brevo.com') {
  if (process.env.QA_REAL_EMAIL === '1') return actualFetch(url,options);
  if (emailFailing) return Response.json({message:'QA intentional failure'}, {status:401});
  emails.push(JSON.parse(options.body));
  return Response.json({messageId:'qa-fixture'}, {status:201});
 }
 if (target.hostname !== '127.0.0.1' && target.hostname !== 'localhost') throw Error('QA prevents external request');
 return actualFetch(url,options);
};
http.createServer(async (req,res)=>{
 try {
  if(req.url.startsWith('/__qa/failure')) { failing=req.url.includes('enabled=1'); res.end(JSON.stringify({failing})); return; }
  if(req.url.startsWith('/__qa/email-failure')) { emailFailing=req.url.includes('enabled=1'); res.end(JSON.stringify({emailFailing})); return; }
  if(req.url.startsWith('/__qa/turnstile')) { process.env.TURNSTILE_SECRET_KEY=req.url.includes('reject=1')?TURNSTILE_FAIL:TURNSTILE_PASS; res.end(JSON.stringify({reject:req.url.includes('reject=1')})); return; }
  if(req.url.startsWith('/__qa/status')) { res.setHeader('Content-Type','application/json'); res.end(JSON.stringify({records:[...records.values()],emails})); return; }
  if(req.url.startsWith('/api/assessment-submit')) { await submit(req,res); return; }
  if(req.url.startsWith('/api/assessment-report')) { await report(req,res); return; }
  if (process.env.QA_STATIC === '1') {
   const root = resolve('.vercel/output/static');
   let path = resolve(root, '.' + new URL(req.url, 'http://localhost').pathname);
   if (!path.startsWith(root + sep)) { res.statusCode=403; res.end(); return; }
   if (!extname(path)) path = resolve(path, 'index.html');
   const types = {'.html':'text/html; charset=utf-8','.js':'application/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.woff2':'font/woff2'};
   try { const content=await readFile(path); res.setHeader('Content-Type',types[extname(path)]||'application/octet-stream'); res.end(content); }
   catch {res.statusCode=404;res.end('Not found');}
   return;
  }
  const upstream = await actualFetch('http://127.0.0.1:4321'+req.url);
  res.statusCode=upstream.status;
  for(const [key,value] of upstream.headers) if(!['content-encoding','transfer-encoding','content-length'].includes(key)) res.setHeader(key,value);
  res.end(Buffer.from(await upstream.arrayBuffer()));
 } catch(error) {console.error('QA server:',error.message);res.statusCode=500;res.end('QA server error');}
}).listen(4322,'127.0.0.1',()=>console.log('QA fixture at http://127.0.0.1:4322 (actual handlers; external services simulated)'));
