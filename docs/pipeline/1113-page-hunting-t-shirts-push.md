status: READY
lane: B
type: redo
id: 1113
slug: hunting-t-shirts
kd: 44
push: R0
---
## hunting-t-shirts page push (R0 item 5 + card order (3), $0, outside the 6-a-day cap)
Keyword: hunting shirts 14,800 / KD 44 (KD 36-50 band: R2.2 needs 6+ designs and 400+ words of page copy; 8 live) (RankHero, the collections.ts entry; not re-measured this run, RankHero answers nothing unattended, so log the source date). Page live at /hunting-t-shirts/ as a generic niche() template, 200 and indexable. Never had a push. Last known position: unknown.
Do (copy and links only in src/data/collections.ts: wrap the niche() call in an override the way #1102/#1108 did; never delete true copy):
0. **Fact-check (R8.6):** count ACTIVE products (Admin GraphQL `collectionByIdentifier`); under 6 live, set PARKED and log the count. Every printed line, blank, color, size and price named must be on a live product here (tees are Bella+Canvas 3001, 4.2 oz; women's relaxed tees 6400; read the product copy, never guess a weight). Name only lines you can see in the print.
1. **SEO title, 60 max:** the head phrase first, then the hook from 1-2 real printed lines. Prices only in a Dec-1-true form: "$X through November 30, then $Y", or `[[sale text||December text]]` with the December side in December prices (tees $29.99). Meta 155 max naming 2-3 real lines.
2. **Answer-first intro (2-3 sentences):** live count, the blanks really on the grid, who it is for, printed to order, the Christmas order-by line in the `{{before||after}}` cutoff form, one free size exchange with nothing to mail back.
3. **Sections:** one H2 on deer camp and duck blind lines (who each is for), naming 2-3 live designs; one H2 linking /hoodies/hunting-hoodies/ (pushed #1104) and /hoodies/camo-hoodies/ with 2-3 live designs. Never write Mossy Oak or Realtree (R11.14). Every link curl 200 and not noindexed. Page copy reaches 400+ words.
4. **FAQs to 8** (40-60 words, facts only, first sentence answers, all in FAQPage): fit, sizing, care, colors, price, gift timing (Christmas), size exchange, and 'do you have camo hunting shirts?' (answer truthfully: tees are solid colors if so; point to the camo hoodies). Drop any template FAQ that contradicts the new answers or talks about another garment (the #1108 fix). Head phrase at most 3 times; never another page's primary (docs/product-keyword-map.json).
Done when: astro build passes in normal, PRICE_DATE=2026-12-02 and PRICE_DATE=2026-12-06 modes (Dec 2: no sale price and no price raised twice; Dec 6: no order-by-Dec-4 claim), audit 0 errors, page 200, log lists every changed file.
---
## Log
- 2026-11-28 14:45 UTC director: brief written, READY ($0). Never-pushed KD 36-50 page with 6+ live (Admin count 2026-11-28: 8 live).
