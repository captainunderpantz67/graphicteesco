// Ping IndexNow (Bing, Yandex, Seznam, Naver…) with every URL in the live sitemap.
// Google doesn't use IndexNow — it reads the sitemap submitted in Search Console.
const HOST = 'graphicteesco.com';
const KEY = '95596679754142b3852ab23904094caf'; // public by design: served at /95596679754142b3852ab23904094caf.txt
const index = await (await fetch(`https://${HOST}/sitemap-index.xml`)).text();
const maps = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const urls = [];
for (const m of maps) urls.push(...[...(await (await fetch(m)).text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((x) => x[1]));
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
});
console.log(`IndexNow: ${urls.length} URLs → HTTP ${res.status}`);
if (res.status >= 400) process.exit(1);
