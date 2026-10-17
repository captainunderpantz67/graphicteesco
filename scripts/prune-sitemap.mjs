// Post-build: drop noindex pages from the sitemap so Google never gets mixed signals
// (empty collections are noindex until they have products), then add real <lastmod> dates and
// <image:image> entries (Google image sitemap; Bing and AI crawlers use lastmod for freshness).
// lastmod is only written when it is true: product pages use Shopify's updatedAt, collection pages the
// newest updatedAt of the products they list; other pages get none rather than a made-up date.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const sm = 'dist/sitemap-0.xml';

async function productDates() {
  try {
    const cfg = JSON.parse(readFileSync('shopify.public.json', 'utf8'));
    const domain = cfg.domain || cfg.storeDomain;
    const token = Object.entries(cfg).find(([k]) => /token/i.test(k))?.[1];
    const out = new Map();
    let after = null;
    for (;;) {
      const r = await fetch(`https://${domain}/api/2026-01/graphql.json`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Shopify-Storefront-Access-Token': token },
        body: JSON.stringify({ query: 'query($a:String){products(first:250,after:$a){pageInfo{hasNextPage endCursor} nodes{handle updatedAt}}}', variables: { a: after } }),
      });
      const d = (await r.json()).data.products;
      d.nodes.forEach((n) => out.set(n.handle, n.updatedAt));
      if (!d.pageInfo.hasNextPage) return out;
      after = d.pageInfo.endCursor;
    }
  } catch (e) {
    console.log(`[prune-sitemap] no product dates (${e.message}); lastmod skipped`);
    return new Map();
  }
}

const esc = (s) => s.replace(/&(?!amp;)/g, '&amp;').replace(/</g, '&lt;');

if (existsSync(sm)) {
  const dates = await productDates();
  let xml = readFileSync(sm, 'utf8');
  let dropped = 0, dated = 0, imgs = 0;
  xml = xml.replace(/<url><loc>https:\/\/graphicteesco\.com(\/[^<]*)<\/loc>.*?<\/url>/g, (m, path) => {
    const file = `dist${path}index.html`;
    if (!existsSync(file)) return m;
    const html = readFileSync(file, 'utf8');
    if (html.includes('content="noindex"')) { dropped++; return ''; }
    const prod = path.match(/^\/products\/([^/]+)\/$/);
    let lastmod = prod ? dates.get(prod[1]) : undefined;
    if (!prod) {
      const listed = [...html.matchAll(/href="\/products\/([^/"]+)\//g)].map((x) => dates.get(x[1])).filter(Boolean).sort();
      if (listed.length) lastmod = listed.at(-1);
    }
    if (lastmod) dated++;
    const images = new Set();
    const og = html.match(/<meta property="og:image" content="([^"]+)"/);
    if (og && !og[1].includes('og-default')) images.add(og[1]);
    if (prod) {
      for (const b of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
        try {
          const j = JSON.parse(b[1]);
          if (/Product/.test(j['@type']) && Array.isArray(j.image)) j.image.forEach((u) => images.add(u));
        } catch {}
      }
    }
    const imgXml = [...images].slice(0, 10).map((u) => `<image:image><image:loc>${esc(new URL(u, 'https://graphicteesco.com').href)}</image:loc></image:image>`).join('');
    imgs += Math.min(images.size, 10);
    return `<url><loc>https://graphicteesco.com${path}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}${imgXml}</url>`;
  });
  if (!xml.includes('xmlns:image=')) xml = xml.replace('<urlset ', '<urlset xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" ');
  writeFileSync(sm, xml);
  console.log(`[prune-sitemap] removed ${dropped} noindex URL(s); lastmod on ${dated}; ${imgs} image entries`);
}
