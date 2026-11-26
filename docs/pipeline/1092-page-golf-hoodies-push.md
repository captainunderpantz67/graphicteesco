status: LIVE
lane: C
type: redo
id: 1092
slug: golf-hoodies
kd: 22
push: R0
---
## Golf hoodies page push (R0 item 5 + card order (2) gym/golf dad, $0, outside the 6-a-day cap)
Keyword: golf hoodie 14,800 / KD 22 (collections.ts ~line 1615, RankHero; re-check before 2027). Page live at /hoodies/golf-hoodies/: 11 products in the Shopify collection (read 2026-11-24), title "Golf Hoodies — Funny Original Designs for the Course", 5 FAQs. Never had a push. Last known position: unknown.
Do (copy and links only in src/data/collections.ts, the hand-written entry; never delete true copy):
1. **Fact-check first:** every printed line, blank and color named on the page must be on a live product in the collection (read Shopify; "Sorry About Your Windshield", "Not Cheating. Improving My Lie." and "I Only Golf for the Outfits" are on Sam's approved list, R3.13, if they are live here). Replace anything not live (R8.6).
2. **SEO title, 60 max:** "Golf Hoodies" first, then the hook (funny, for the course and the 19th hole is fine; no alcohol claims); price only in a Dec-1-proof form. Meta 155 max with 2-3 real lines.
3. **Answer-first intro:** live count, garments really on the grid (pullover, zip, cropped: read 3 product pages), who it is for (golf dad, golf mom), printed to order, order by Fri Dec 4 2026, one free size exchange.
4. **Sections:** one H2 "Golf gifts for dad" naming 2-3 live men's designs by their printed lines; link /hoodies/graphic-hoodies-for-men/ and /hoodies/zip-up-hoodies-for-men/ once each (curl 200).
5. **FAQs to 8** (40-60 words, facts only): can you golf in it (layer for cold rounds, not performance fabric), fit and sizing, care, colors, gift timing, size exchange. Head phrase at most 3 times. No brand or tour names.
Done when: astro build passes in both modes, audit 0 errors, page 200, log lists every changed file.
---
## Log
- 2026-11-24 23:20 UTC director: brief written, READY (14,800 / KD 22; $0).
- 2026-11-26 17:50 UTC [B]: built, REVIEW. File: src/data/collections.ts (golf-hoodies entry) only. Fact-check via Shopify (11 products, all active). Removed unlive 'breakfast ball' and 'mulligan' wording and the false 'every one ships free' claim (pullover is under $45). New title 52 chars, meta 144, answer-first intro, 'Golf gifts for dad' H2 with 3 live product links plus /hoodies/graphic-hoodies-for-men/ and /hoodies/zip-up-hoodies-for-men/ (curl 200), FAQs 5 to 9 in schema. astro build passes normal, PRICE_DATE=2026-12-02 and 2026-12-06 (no Dec 4 claim). fal $0. Audit not run.
- 2026-11-26 23:50 UTC director: LIVE. Fixed before LIVE (R8.6): the 'How much are the golf hoodies?' FAQ read 'start at $44.99 for the pullover, then $49.99 … heavyweight $59.99' in the Dec 2 build (prices after the first raised twice); now a [[sale||December]] pair, and price.ts locks December-side amounts so this cannot recur. All 11 products ACTIVE, the 3 embroidered zips are $57.99 as written. Builds normal, Dec 2, Dec 6 read; full audit 823 products 0 errors. Position unknown.
