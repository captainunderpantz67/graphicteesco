status: LIVE
lane: B
type: redo
id: 1103
slug: gym-hoodies-for-men
kd: 31
push: R0
---
## gym-hoodies-for-men page push (R0 item 5 + card order (2) gym dad zips, $0, outside the 6-a-day cap)
Keyword: mens gym hoodie 9,900 / KD 31 (RankHero, the collections.ts entry; not re-measured this run, RankHero answers nothing unattended, so log the source date). Page live at /hoodies/gym-hoodies-for-men/ as a generic niche() template ("Original Graphic Designs" title, about 5 FAQs). 20 products in the Shopify collection (Admin count 2026-11-26). Never had a push. Last known position: unknown.
Do (copy and links only in src/data/collections.ts: wrap the niche() call in an override the way #1098 did; never delete true copy):
0. **Fact-check (R8.6):** count ACTIVE products (Admin GraphQL `collectionByIdentifier`); under 6 live, set PARKED and log the count. Every printed line, blank (pullover Gildan 18500, zip Gildan 18600, heavyweight IND4000, camo IND4000 colors, cropped B+C 7502, as really on the grid), color, size and price named must be on a live product here. Name only lines you can see in the print.
1. **SEO title, 60 max:** the head phrase first, then the hook from 1-2 real printed lines. Prices only in a Dec-1-true form: "$39.99 through November 30, then $44.99", or `[[sale text||December text]]` where the December side is already written in December prices (price.ts now locks those amounts, 2026-11-26). Meta 155 max naming 2-3 real lines.
2. **Answer-first intro (2-3 sentences):** live count, the blanks really on the grid, who it is for, printed to order, the Christmas order-by line in the `{{before||after}}` cutoff form, one free size exchange with nothing to mail back.
3. **Sections:** one H2 on wearing a hoodie to lift (warm-up layer, cotton-poly fleece, not a compression or performance fabric) naming 2-3 live designs; one H2 'Gym gifts for men' with 2-3 live designs and links to /guides/gym-gifts-for-men/, /mens-gym-shirts/ and /hoodies/gym-hoodies/. Every link curl 200 and not noindexed.
4. **FAQs to 8** (40-60 words, facts only, first sentence answers, all in FAQPage): can you work out in it, fit (room for shoulders), sizing, care, colors, pullover vs zip vs heavyweight, gift timing, size exchange. Head phrase at most 3 times; never another page's primary (docs/product-keyword-map.json).
Done when: astro build passes in normal, PRICE_DATE=2026-12-02 and PRICE_DATE=2026-12-06 modes (Dec 2: no sale price and no price raised twice; Dec 6: no order-by-Dec-4 claim), audit 0 errors, page 200, log lists every changed file.
---
## Log
- 2026-11-26 23:50 UTC director: brief written, READY ($0). Picked among never-pushed pages with 6+ live products; every KD-20-or-under page left (capybara hoodies 5, y2k zip-ups 4, pink camo 1) is under the depth floor.
- 2026-11-27 14:00 UTC [B] builder: built, REVIEW. collections.ts only (override of the gym-hoodies-for-men niche() call). Fact-check: 20 ACTIVE products (Admin GraphQL 2026-11-27: 11 pullover $39.99, 2 heavyweight $49.99, 5 oversized $54.99, 2 embroidered zip $57.99); named lines, colors and prices are on live products. Title "Men's Gym Hoodies: Twelve Labors. Zero Cardio.", meta under 155, answer-first intro, 2 new H2s (wearing a hoodie to lift; Gym gifts for men, links /guides/gym-gifts-for-men/, /mens-gym-shirts/, /hoodies/gym-hoodies/ all 200 and not noindexed, product links 200), 7 FAQs added (11 in FAQPage). astro build passes in normal, PRICE_DATE=2026-12-02 (44.99/54.99/59.99/62.99, no sale prices) and 2026-12-06 (no order-by-Dec-4 claim). Keyword 9,900 / KD 31 RankHero 2026-10-16, not re-measured. Last known position: unknown. fal $0, 0 new products.
- 2026-11-27 14:40 UTC director: LIVE after one fix (R8.6): the styles FAQ said the zip-up 'has the design embroidered' (it has the back print and a small stitched ZERO CARDIO. chest mark, per the Twelve Labors zip copy) and 'the jokes are the same' across styles (they are not: each design comes in its own set of styles); care FAQ's 'design on the chest' reworded. Count 20 ACTIVE re-checked. astro build normal + Dec 2 read, full audit 0 errors. Last known position: unknown.
