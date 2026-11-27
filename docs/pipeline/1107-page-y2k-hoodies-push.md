status: REVIEW
lane: C
type: redo
id: 1107
slug: y2k-hoodies
kd: 35
push: R0
---
## y2k-hoodies page push (R0 item 5 + card order (3) easy measured keyword, $0, outside the 6-a-day cap)
Keyword: y2k hoodie 14,800 / KD 35 (KD 21-35 band, 8 live; R2.2) (RankHero, the collections.ts entry; not re-measured this run, RankHero answers nothing unattended, so log the source date). Page live at /hoodies/y2k-hoodies/ as a generic niche() template. 8 products in the Shopify collection (Admin count 2026-11-27). Never had a push. Last known position: unknown.
Do (copy and links only in src/data/collections.ts: wrap the niche() call in an override the way #1102/#1103 did; never delete true copy):
0. **Fact-check (R8.6):** count ACTIVE products (Admin GraphQL `collectionByIdentifier`); under 6 live, set PARKED and log the count. Every printed line, blank (pullover Gildan 18500, zip Gildan 18600, oversized B+C 4719, cropped B+C 7502, as really on the grid), color, size and price named must be on a live product here. Name only lines you can see in the print. **Zip-ups carry the big print on the back and a small stitched left-chest mark; never write that a zip's design is embroidered (director 2026-11-27, fixed on #1102 and #1103).**
1. **SEO title, 60 max:** the head phrase first, then the hook from 1-2 real printed lines. Prices only in a Dec-1-true form: "$X through November 30, then $Y", or `[[sale text||December text]]` with the December side in December prices. Meta 155 max naming 2-3 real lines.
2. **Answer-first intro (2-3 sentences):** live count, the blanks really on the grid, who it is for, printed to order, the Christmas order-by line in the `{{before||after}}` cutoff form, one free size exchange with nothing to mail back.
3. **Sections:** one H2 on how to style a Y2K hoodie (baggy jeans, low-rise, oversized fit) naming 2-3 live designs; one H2 linking /hoodies/y2k-zip-up-hoodies/ (if indexable) and /y2k-graphic-tees/ with 2-3 live designs. Every link curl 200 and not noindexed.
4. **FAQs to 8** (40-60 words, facts only, first sentence answers, all in FAQPage): fit, sizing, care, colors, price, gift timing, size exchange, plus one question the niche really asks. Head phrase at most 3 times; never another page's primary (docs/product-keyword-map.json).
Done when: astro build passes in normal, PRICE_DATE=2026-12-02 and PRICE_DATE=2026-12-06 modes (Dec 2: no sale price and no price raised twice; Dec 6: no order-by-Dec-4 claim), audit 0 errors, page 200, log lists every changed file.
---
## Log
- 2026-11-27 14:40 UTC director: brief written, READY ($0). Never-pushed page with 6+ live products; KD-20-or-under pages left (capybara hoodies 5, y2k zip-ups 4, pink camo 1, half-zip pullovers 5) are under the depth floor.
- 2026-11-27 21:50 UTC [B] built, REVIEW: collections.ts only (override around niche(N.y2k hoodies)): title, meta, answer-first intro, 2 new H2s (styling; zip-ups + Y2K tees), FAQs added incl. order-by cutoff; 8 ACTIVE products (5 pullovers $39.99, 3 zips $57.99) fact-checked via Admin API; zips described as back print plus small stitched left-chest mark; links 200 and indexable; astro build normal / PRICE_DATE=2026-12-02 (no sale prices, nothing raised twice) / 2026-12-06 (no order-by claim) pass; audit 823 products 0 errors. Keyword source RankHero per brief (not re-measured).
