status: REVIEW
lane: B
type: redo
id: 1106
slug: country-graphic-tees
kd: 24
push: R0
---
## country-graphic-tees page push (R0 item 5 + card order (3) easy measured keyword, $0, outside the 6-a-day cap)
Keyword: country graphic tees 1,000 / KD 24 (RankHero, the collections.ts entry; not re-measured this run, RankHero answers nothing unattended, so log the source date). Page live at /country-graphic-tees/ as a generic niche() template. 15 products in the Shopify collection (Admin count 2026-11-27). Never had a push. Last known position: unknown.
Do (copy and links only in src/data/collections.ts: wrap the niche() call in an override the way #1102/#1103 did; never delete true copy):
0. **Fact-check (R8.6):** count ACTIVE products (Admin GraphQL `collectionByIdentifier`); under 6 live, set PARKED and log the count. Every printed line, blank (tees as really on the grid: Bella+Canvas 3001 or 6400), color, size and price named must be on a live product here. Name only lines you can see in the print. **Zip-ups carry the big print on the back and a small stitched left-chest mark; never write that a zip's design is embroidered (director 2026-11-27, fixed on #1102 and #1103).**
1. **SEO title, 60 max:** the head phrase first, then the hook from 1-2 real printed lines. Prices only in a Dec-1-true form: "$X through November 30, then $Y", or `[[sale text||December text]]` with the December side in December prices. Meta 155 max naming 2-3 real lines.
2. **Answer-first intro (2-3 sentences):** live count, the blanks really on the grid, who it is for, printed to order, the Christmas order-by line in the `{{before||after}}` cutoff form, one free size exchange with nothing to mail back.
3. **Sections:** one H2 on what to wear to a country concert, rodeo or barn dance (tee + flannel or denim jacket in cold weather) naming 2-3 live designs; one H2 on country gifts for her with 2-3 live designs and links to /western-graphic-tees/ and any live country or western hoodie page. Every link curl 200 and not noindexed.
4. **FAQs to 8** (40-60 words, facts only, first sentence answers, all in FAQPage): fit, sizing, care, colors, price, gift timing, size exchange, plus one question the niche really asks. Head phrase at most 3 times; never another page's primary (docs/product-keyword-map.json).
Done when: astro build passes in normal, PRICE_DATE=2026-12-02 and PRICE_DATE=2026-12-06 modes (Dec 2: no sale price and no price raised twice; Dec 6: no order-by-Dec-4 claim), audit 0 errors, page 200, log lists every changed file.
---
## Log
- 2026-11-27 14:40 UTC director: brief written, READY ($0). Never-pushed page with 6+ live products; KD-20-or-under pages left (capybara hoodies 5, y2k zip-ups 4, pink camo 1, half-zip pullovers 5) are under the depth floor.
- 2026-11-27 21:40 UTC [B] built, REVIEW: collections.ts only (override around niche(N.country)): title 58, meta 145, answer-first intro, 2 new H2s (concert/rodeo, gifts for her), 8 FAQs; 15 ACTIVE products, all $24.99, fact-checked via Admin API; links 200 (western tees, western hoodies, 6 product pages); astro build normal / PRICE_DATE=2026-12-02 (no sale price) / 2026-12-06 (no order-by claim) pass; audit 823 products 0 errors. Keyword source RankHero per brief (not re-measured).
