import assert from 'node:assert/strict';
import { readFile, readdir, access } from 'node:fs/promises';
import { join } from 'node:path';
import { calculateROI } from '../src/lib/roi.mjs';
const root = '.vercel/output/static';
const folders = (await readdir(`${root}/blog`,{withFileTypes:true})).filter(x=>x.isDirectory());
const files = [`${root}/blog/index.html`,...folders.map(x=>`${root}/blog/${x.name}/index.html`)];
let linksChecked=0;
for(const file of files){
 const html = await readFile(file,'utf8');
 const path=file.slice(root.length).replace(/index\.html$/,'');
 assert.equal((html.match(/<h1[\s>]/g)||[]).length,1,`${path}: one H1`);
 const canonical=html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
 assert.equal(canonical,`https://appsdelsur.cl${path}`,`${path}: canonical`);
 const schemas=[...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(x=>JSON.parse(x[1]));
 assert.ok(!schemas.some(x=>x['@type']==='FAQPage'),`${path}: no unrelated FAQ schema`);
 if(path!='/blog/'){
  const article=schemas.find(x=>x['@type']==='BlogPosting');
  assert.ok(article?.headline && article?.dateModified,`${path}: article metadata`);
  assert.ok(schemas.some(x=>x['@type']==='BreadcrumbList'),`${path}: breadcrumb`);
 }else{
  const collection=schemas.find(x=>x['@type']==='CollectionPage');
  assert.equal(collection.mainEntity.itemListElement.length,folders.length);
 }
 for(const [,href] of html.matchAll(/<a\s[^>]*href="([^"]+)"/g)){
  if(!href.startsWith('/')||href.startsWith('//'))continue;
  const route=new URL(href,'https://appsdelsur.cl').pathname;
  const target=join(root,decodeURIComponent(route));
  let exists=false;
  for(const candidate of [target,join(target,'index.html')])try{await access(candidate);exists=true;break;}catch{}
  assert.ok(exists,`${path}: missing internal target ${route}`);linksChecked++;
 }
}
assert.deepEqual(calculateROI(8000000,6000000,1200000,0),{initial:8000000,net:4800000,roi:-.4,payback:20});
assert.deepEqual(calculateROI(8000000,6000000,1200000,60),{initial:3200000,net:4800000,roi:.5,payback:8});
assert.equal(calculateROI(5,0,1,0).payback,null);
assert.equal(calculateROI(5,5,5,0).payback,null);
assert.equal(calculateROI(5,5,0,100).roi,null);
assert.throws(()=>calculateROI(0,1,0,0),RangeError);
assert.throws(()=>calculateROI(1,1,0,101),RangeError);
console.log(`PASS: ${files.length} blog pages, ${linksChecked} internal links, canonical/H1/JSON-LD and 7 ROI checks.`);
