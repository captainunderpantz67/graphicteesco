status: READY
lane: C
type: redo
id: 1094
slug: black-camo-hoodies
kd: 16
push: R0
---
## Black camo hoodies page push (R0 item 5 + card order (1) camo cluster, $0, outside the 6-a-day cap)
Keyword: black camo hoodie 2,900 / KD 16 (RankHero 2026-10-21, collections.ts ~line 1556; KD 20 band). Page live at /hoodies/black-camo-hoodies/: 11 products in the Shopify collection (Storefront read 2026-11-25), generic title "Black Camo Hoodies — Funny Outdoor Designs". Never had a push. Last known position: unknown.
Do (copy and links only in src/data/collections.ts, the hand-written entry; never delete true copy):
1. **Fact-check first:** every printed line, blank, color, size and weight the entry names must be on a live product in this collection (Storefront API) or the Printful spec; replace any that isn't (R8.6). Never Mossy Oak or Realtree.
2. **SEO title, 60 max:** "Black Camo Hoodies" first, then the hook, no price. Meta 155 max with 2-3 real printed lines.
3. **Answer-first intro:** live count, blank(s) and weight, fit and size range, price written "$49.99 through November 30, then $54.99" (R8.6 form), printed to order, one free size exchange with nothing to mail back. Christmas order-by in the `{{before||after}}` form from #1093 if #1093 has landed, otherwise leave the date out.
4. **Sections:** link /hoodies/camo-hoodies/ (hub), /hoodies/duck-camo-hoodies/ and /hoodies/black-zip-up-hoodies/ where it reads naturally (curl 200, not noindexed); one H2 on how black camo differs from the other camo colors (reads darker, pairs with black jeans, prints cream ink).
5. **FAQs to 8** (40-60 words, facts only, first sentence answers): fit/sizing, warmth/weight, care, colors, gift timing, size exchange, shipping time. Head phrase at most 3 times; no other page's primary (product-keyword-map.json).
Done when: astro build passes in both modes (normal and PRICE_DATE=2026-12-02, no sale price left in the Dec build), audit 0 errors, page 200, log lists every changed file.
---
## Log
- 2026-11-25 14:30 UTC director: brief written, READY (2,900 / KD 16; $0).
