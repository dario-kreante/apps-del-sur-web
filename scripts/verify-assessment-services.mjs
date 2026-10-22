// Read-only health check. Never prints credentials or lead data.
const clean = value=>String(value||'').trim().replace(/^['"]|['"]$/g,'');
const key=clean(process.env.AIRTABLE_API_KEY)||clean(process.env.AIRTABLE_TOKEN), base=clean(process.env.AIRTABLE_BASE_ID), table=clean(process.env.AIRTABLE_ASSESSMENT_TABLE)||'Assessment Leads';
const status={airtableConfigured:Boolean(key&&base)};
if(key&&base) {const r=await fetch(`https://api.airtable.com/v0/${base}/${encodeURIComponent(table)}?maxRecords=1`,{headers:{Authorization:`Bearer ${key}`}});status.airtableReadStatus=r.status;}
console.log(JSON.stringify(status));
