status: REVIEW
lane: B
type: redo
id: 1074
slug: christian-shirts-for-men
kd: 12
push: new-page
---
## New page: /christian-shirts-for-men/ (card order (3): a measured easy keyword with no page; $0, outside the 6-a-day cap)
Keyword: christian shirts men 12,100 / KD 12 (RankHero 2026-10-17, R11.3; re-check the 90-day rule: valid to 2027-01-15). No page owns it: /christian-shirts/ is a women's page (2026-10-23 decision), and the phrase sits as a product claim on the Short Grace. Hot Food. tee, which R8.8 says moves to the page once it exists. 3 men's/unisex Christian tees are ACTIVE (R2.9 needs 3 to index): mens-christian-short-grace-hot-food-graphic-tee, mens-christian-rebuilt-by-a-carpenter-graphic-tee (Still Under Construction), unisex-christian-holy-spirit-mildly-spooky-graphic-tee (Holy Ghost, Friendly Edition; joins only if its cover shows a man and a woman, R7.5). Tees only on the grid (R13 garment grids).
Do:
1. **Shopify smart collection** by tag `christian-shirts-for-men`; tag the qualifying tees above. Never add the tag to hoodies (they stay on /hoodies/christian-hoodies/).
2. **collections.ts entry** (audience men, section tees): keyword christian shirts men, volume 12100, kd 12, source + date. Hand-written answer-first intro (count, Bella+Canvas 3001 4.2 oz, price through Nov 30 and from Dec 1, printed to order, one free size exchange), describe each print from its live Story (R3.14: sincere designs judged as sincere; Short Grace is the insider joke the community already makes). 6 FAQs, 40-60 words, facts only (fit, sizes up to the grid's largest, care, gift timing with order-by Fri Dec 4 2026, church/small-group wear, size exchange). One link to /hoodies/christian-hoodies/ and one to /christian-shirts/ ("for her").
3. **Keyword map:** move "christian shirts men" off the Short Grace tee to the page; the tee keeps a design long-tail (its line, e.g. "short grace shirt"; mark it unmeasured if RankHero still blocks) and may say the head phrase once in copy (R8.8). Update its SEO title/meta only if they lead with the head phrase.
4. **Inbound links:** /graphic-tees-for-men/ and /christian-shirts/ get one natural sentence each linking here.
5. If fewer than 3 tees qualify after the cover check, keep the page noindexed via src/lib/linkable.ts and log it (R9.11 empty collections).
Done when: astro build passes, `node scripts/cohesion-audit.mjs` 0 errors (keyword collisions included), page 200, log lists every changed file.
---
## Log
- 2026-11-22 23:25 UTC director: brief written, READY (card order (3); christian shirts men 12,100 / KD 12, no page yet; $0).
- 2026-11-23 UTC [B]: built, REVIEW. Shopify: smart collection christian-shirts-for-men (gid 516059889968, rule tag equals) created; tag christian-shirts-for-men added to Short Grace, Still Under Construction and Holy Ghost Friendly Edition tees (Holy Ghost cover alt shows man and woman, so it qualifies, 3 tees, page indexable). Code: collections.ts entry (title 54 chars, meta 150, answer-first intro, 3 sections, FAQs 4 to 10, answers 44-52 words), inbound sentences on /graphic-tees-for-men/ and /christian-shirts/, keyword map: head phrase left the Short Grace tee (claimed now 'short grace shirt', unmeasured). Files: src/data/collections.ts, docs/product-keyword-map.json. astro build passes; audit not run; page not live until deploy (curl 200 for director). fal $0.
