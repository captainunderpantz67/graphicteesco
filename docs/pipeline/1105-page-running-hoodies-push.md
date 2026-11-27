status: LIVE
lane: B
type: redo
id: 1105
slug: running-hoodies
kd: 26
push: R0
---
## running-hoodies page push (R0 item 5 + card order (3) measured KD 21-35 keyword, $0, outside the 6-a-day cap)
Keyword: running hoodie 5,400 / KD 26 (RankHero, the collections.ts entry; not re-measured this run, RankHero answers nothing unattended, so log the source date). Page live at /hoodies/running-hoodies/ as a hand-written entry ("Running Hoodies — Funny Retro Designs for Slow Runners", 5 FAQs; edit it in place, keep true copy). 7 products in the Shopify collection (Admin count 2026-11-26). Never had a push. Last known position: unknown.
Do (copy and links only in src/data/collections.ts: edit the hand-written entry the way #1092 did; never delete true copy):
0. **Fact-check (R8.6):** count ACTIVE products (Admin GraphQL `collectionByIdentifier`); under 6 live, set PARKED and log the count. Every printed line, blank (pullover Gildan 18500, zip Gildan 18600, heavyweight IND4000, camo IND4000 colors, cropped B+C 7502, as really on the grid), color, size and price named must be on a live product here. Name only lines you can see in the print.
1. **SEO title, 60 max:** the head phrase first, then the hook from 1-2 real printed lines. Prices only in a Dec-1-true form: "$39.99 through November 30, then $44.99", or `[[sale text||December text]]` where the December side is already written in December prices (price.ts now locks those amounts, 2026-11-26). Meta 155 max naming 2-3 real lines.
2. **Answer-first intro (2-3 sentences):** live count, the blanks really on the grid, who it is for, printed to order, the Christmas order-by line in the `{{before||after}}` cutoff form, one free size exchange with nothing to mail back.
3. **Sections:** one H2 on running in a hoodie (cold warm-up or cool-down layer; cotton-poly fleece is not a technical running fabric) naming 2-3 live designs; link /hoodies/gym-hoodies/ and any live running tee page or guide. Every link curl 200 and not noindexed.
4. **FAQs to 8** (40-60 words, facts only, first sentence answers, all in FAQPage): can you run in it (warm-up layer, not technical), fit, sizing, care, colors, gift for a runner, gift timing, size exchange. Head phrase at most 3 times; never another page's primary (docs/product-keyword-map.json).
Done when: astro build passes in normal, PRICE_DATE=2026-12-02 and PRICE_DATE=2026-12-06 modes (Dec 2: no sale price and no price raised twice; Dec 6: no order-by-Dec-4 claim), audit 0 errors, page 200, log lists every changed file.
---
## Log
- 2026-11-26 23:50 UTC director: brief written, READY ($0). Picked among never-pushed pages with 6+ live products; every KD-20-or-under page left (capybara hoodies 5, y2k zip-ups 4, pink camo 1) is under the depth floor.
- 2026-11-27 18:10 UTC [B]: built, REVIEW. src/data/collections.ts only (hand-written running-hoodies entry edited in place; nothing true deleted). Fact-check via Admin GraphQL: 7 in collection, 7 ACTIVE (5 pullovers $39.99, 2 zips $57.99; Sand/Navy/Light Blue pullovers, zips Black/Navy/Ash + Pace adds White, Forest Green, Dark Chocolate, Dark Heather, Royal). Title 'Running Hoodies: Mile One Was a Mistake, Pace: Leisurely' (56); meta names 4 real lines; intro with count, {{ }} order-by, size exchange; new H2 'Wearing a hoodie to run' (links 4 designs + /hoodies/gym-hoodies/; no running tee page or guide exists); FAQs now 9 in schema. Fixed old wrong copy: FAQ said zip-up $44.99 and 'every hoodie over $45 ships free' (pullover is $39.99): replaced with [[ ]] price form. astro build passes normal, PRICE_DATE=2026-12-02 (only $44.99/62.99) and 2026-12-06 (no order-by claim); seo-audit no running-hoodies issue. Position source: RankHero 2026-10-18, not re-measured. fal $0.
- 2026-11-27 23:40 UTC director: LIVE. Fixed before LIVE (R8.6): 'Pullover or zip-up' section said the zip has 'a small version' of the print on the left chest; live zips carry a small stitched mark, now says so. Builds normal / Dec 2 / Dec 6 read; position unknown.
