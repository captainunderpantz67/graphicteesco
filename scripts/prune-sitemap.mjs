// Post-build: drop noindex pages from the sitemap so Google never gets mixed signals
// (empty collections are noindex until they have products).
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
const sm = 'dist/sitemap-0.xml';
if (existsSync(sm)) {
  let xml = readFileSync(sm, 'utf8');
  let dropped = 0;
  xml = xml.replace(/<url><loc>https:\/\/graphicteesco\.com(\/[^<]*)<\/loc>.*?<\/url>/g, (m, path) => {
    const file = `dist${path}index.html`;
    if (existsSync(file) && readFileSync(file, 'utf8').includes('content="noindex"')) { dropped++; return ''; }
    return m;
  });
  writeFileSync(sm, xml);
  console.log(`[prune-sitemap] removed ${dropped} noindex URL(s)`);
}
