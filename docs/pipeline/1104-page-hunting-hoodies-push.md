status: REVIEW
lane: E
type: redo
id: 1104
slug: hunting-hoodies
kd: 32
push: R0
---
## hunting-hoodies page push (R0 item 5 + card order (2) women's hunting camo, $0, outside the 6-a-day cap)
Keyword: hunting hoodie 3,600 / KD 32 (RankHero, the collections.ts entry; not re-measured this run, RankHero answers nothing unattended, so log the source date). Page live at /hoodies/hunting-hoodies/ as a generic niche() template ("Original Graphic Designs" title, about 5 FAQs). 25 products in the Shopify collection (Admin count 2026-11-26). Never had a push. Last known position: unknown.
Do (copy and links only in src/data/collections.ts: wrap the niche() call in an override the way #1098 did; never delete true copy):
0. **Fact-check (R8.6):** count ACTIVE products (Admin GraphQL `collectionByIdentifier`); under 6 live, set PARKED and log the count. Every printed line, blank (pullover Gildan 18500, zip Gildan 18600, heavyweight IND4000, camo IND4000 colors, cropped B+C 7502, as really on the grid), color, size and price named must be on a live product here. Name only lines you can see in the print.
1. **SEO title, 60 max:** the head phrase first, then the hook from 1-2 real printed lines. Prices only in a Dec-1-true form: "$39.99 through November 30, then $44.99", or `[[sale text||December text]]` where the December side is already written in December prices (price.ts now locks those amounts, 2026-11-26). Meta 155 max naming 2-3 real lines.
2. **Answer-first intro (2-3 sentences):** live count, the blanks really on the grid, who it is for, printed to order, the Christmas order-by line in the `{{before||after}}` cutoff form, one free size exchange with nothing to mail back.
3. **Sections:** one H2 'Hunting hoodies for women' naming the live women's or unisex designs and linking /hoodies/camo-hoodies-for-women/; one H2 on camo vs solid colors linking /hoodies/camo-hoodies/ and /hoodies/duck-camo-hoodies/ (casual wear, never claim scent control, blaze-orange safety or a real Mossy Oak/Realtree pattern). Every link curl 200 and not noindexed.
4. **FAQs to 8** (40-60 words, facts only, first sentence answers, all in FAQPage): is it for the stand (casual layer, not hunting gear; follow state blaze-orange rules), fit, sizing, care, camo colors offered, women's options, gift timing, size exchange. Head phrase at most 3 times; never another page's primary (docs/product-keyword-map.json).
Done when: astro build passes in normal, PRICE_DATE=2026-12-02 and PRICE_DATE=2026-12-06 modes (Dec 2: no sale price and no price raised twice; Dec 6: no order-by-Dec-4 claim), audit 0 errors, page 200, log lists every changed file.
---
## Log
- 2026-11-26 23:50 UTC director: brief written, READY ($0). Picked among never-pushed pages with 6+ live products; every KD-20-or-under page left (capybara hoodies 5, y2k zip-ups 4, pink camo 1) is under the depth floor.
- 2026-11-27 17:50 UTC [B]: built, REVIEW. src/data/collections.ts only (override around niche(N.hunting,'hoodies')). Fact-check via Admin GraphQL: 25 in collection, 24 ACTIVE (Doe-Eyed and Dangerous pink camo is DRAFT, not counted). Title 'Hunting Hoodies: Tag Soup, Sat 11 Hours, Antler Envy' (52), meta names 4 real lines; intro with live count, {{ }} order-by, size exchange; H2s 'Hunting hoodies for women' (links camo-hoodies-for-women) and 'Camo or a solid color?' (links camo-hoodies, duck-camo-hoodies, all 200, not noindexed); FAQs 8 (not scent-control/blaze-orange claims; no embroidered-design claim). astro build passes normal, PRICE_DATE=2026-12-02 (only $44.99/54.99/62.99) and 2026-12-06 (no order-by claim). seo-audit: no hunting-hoodies issue. Position source: RankHero per brief, not re-measured. fal $0.
