status: READY
lane: C
type: redo
id: 1108
slug: oversized-hoodies
kd: 38
push: R0
---
## oversized-hoodies page push (R0 item 5 + card order (3), $0, outside the 6-a-day cap)
Keyword: oversized hoodie 165,000 / KD 38 (KD 36-50 band: R2.2 needs 6+ designs and 400+ words of page copy; 22 live, 2 DRAFT not counted) (RankHero, the collections.ts entry; not re-measured this run, RankHero answers nothing unattended, so log the source date). Page live at /hoodies/oversized-hoodies/ as a generic niche() template. Never had a push. Last known position: unknown.
Do (copy and links only in src/data/collections.ts: wrap the niche() call in an override the way #1102/#1103 did; never delete true copy):
0. **Fact-check (R8.6):** count ACTIVE products (Admin GraphQL `collectionByIdentifier`); under 6 live, set PARKED and log the count. Every printed line, blank (oversized B+C 4719 mostly; name only blanks really on the grid), color, size and price named must be on a live product here. Name only lines you can see in the print. **Zip-ups carry the big print on the back and a small stitched left-chest mark; never write that a zip's design is embroidered (director 2026-11-27, fixed on #1102 and #1103).**
1. **SEO title, 60 max:** the head phrase first, then the hook from 1-2 real printed lines. Prices only in a Dec-1-true form: "$X through November 30, then $Y", or `[[sale text||December text]]` with the December side in December prices. Meta 155 max naming 2-3 real lines.
2. **Answer-first intro (2-3 sentences):** live count, the blanks really on the grid, who it is for, printed to order, the Christmas order-by line in the `{{before||after}}` cutoff form, one free size exchange with nothing to mail back.
3. **Sections:** one H2 on how an oversized hoodie fits (dropped shoulders, longer body, size chart; men's and women's sizing advice) naming 2-3 live designs; one H2 linking /hoodies/oversized-hoodies-for-men/ if indexable, plus /hoodies/heavyweight-hoodies/ and /hoodies/graphic-hoodies-for-women/ with 2-3 live designs. Every link curl 200 and not noindexed. Page copy reaches 400+ words.
4. **FAQs to 8** (40-60 words, facts only, first sentence answers, all in FAQPage): fit, sizing up or down, care, colors, price, gift timing, size exchange, and 'is an oversized hoodie the same as a heavyweight one?'. Head phrase at most 3 times; never another page's primary (docs/product-keyword-map.json).
Done when: astro build passes in normal, PRICE_DATE=2026-12-02 and PRICE_DATE=2026-12-06 modes (Dec 2: no sale price and no price raised twice; Dec 6: no order-by-Dec-4 claim), audit 0 errors, page 200, log lists every changed file.
---
## Log
- 2026-11-27 23:40 UTC director: brief written, READY ($0). Never-pushed page with 6+ live (Admin count 2026-11-27: 22 live, 2 DRAFT not counted); every never-pushed KD-35-or-under page left is under 6 live (cropped graphic tees 5, half-zip pullovers 5, capybara hoodies 5).
