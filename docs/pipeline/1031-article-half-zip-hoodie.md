status: REVIEW
lane: W
type: article
cluster: hoodies
keyword: half zip hoodie
volume: 6600
kd: 12
slug: half-zip-hoodie
---
## Half Zip Hoodie or Half Zip Pullover? What to Buy Instead of Guessing
- `draft: true`, `cluster: 'hoodies'` in src/data/guides.ts, appended at the end of allGuides. About 1,000 words, 4 pick groups (5 products), 6 sections, 6 FAQs.
- Keyword: half zip hoodie 6,600 / KD 12 (RankHero page pull via scripts/keyword-gap.py, measured 2026-11-09; no competition count). Unowned. /hoodies/half-zip-pullovers/ owns "half zip pullover". The article says plainly that our half zips have no hood.
- Picks (all ACTIVE, $54.99, Stories read from live Shopify 2026-11-09): Reel Talk, Fisher of Men Mostly Bass, Fairways Are a Rumor, He Wanted Out Now He Wants In, Slurp Responsibly. Only the golf one is in fresh-designs.json: director to confirm grade.
- Facts only from live Stories, rulebook R12.1 price pattern ($54.99 to Nov 30, $59.99 from Dec 1) and site.ts. FAQ questions not from PAA/GSC (unavailable unattended).
- Links: /hoodies/half-zip-pullovers/, /hoodies/fishing-hoodies/, /hoodies/zip-up-hoodies/, /hoodies/, /shipping-returns/; guides graphic-zip-up-hoodie, thick-hoodies, fleece-lined-hoodie, hoodie-sizing, how-to-wash-graphic-tees, best-hoodies-for-men, hoodies-for-guys. Director: confirm paths return 200.
- `npx astro build` passes (drafts are not built).
## Log
- 2026-11-09 UTC writer: drafted, build passes.
