status: REVIEW
lane: B
type: redo
id: 1098
slug: western-graphic-tees
kd: 16
push: R0
---
## Western graphic tees page push (R0 item 5 + card order (3) easy measured keyword, $0, outside the 6-a-day cap)
Keyword: western graphic tees 2,400 / KD 16 (RankHero, collections.ts line ~505; KD 20-or-under band; not re-measured this run because RankHero answers 403 unattended, so log the source date). Page live at /western-graphic-tees/ as a generic niche() entry ("Western Graphic Tees — Original Graphic Designs"). Never had a push. Last known position: unknown.
Do (copy and links only in src/data/collections.ts: wrap the niche() call in an override the way #1090 did; never delete true copy):
0. **Depth check first (R9.11):** count ACTIVE products in the Shopify collection. Under 6 live: stop, set this item PARKED with the count and tell the director in the log.
1. **Fact-check:** every printed line, blank, color and size named must be on a live product in this collection (Admin GraphQL `collectionByIdentifier`). Drop the template's "Want it warmer? Look for the hoodie" section only if no western hoodie is live; otherwise link /hoodies/western-hoodies/ there (curl 200, not noindexed).
2. **SEO title, 60 max:** "Western Graphic Tees" first, then the hook from 1-2 real printed lines; price only in a Dec-1-true form (tees $24.99 through November 30, then $29.99; R8.6). Meta 155 max naming 2-3 real lines.
3. **Answer-first intro:** live count, the blank (Bella+Canvas 3001, 4.2 oz lightweight, unisex; women's relaxed 6400 where used), sizes from a live product page, printed to order, a Christmas order-by line in a form the #1093 switch reads, one free size exchange with nothing to mail back.
4. **Sections:** one H2 on how to wear a western tee (rodeo, county fair, ranch, a night out), plain and specific; link /hoodies/western-hoodies/ and one related guide if one exists (curl 200).
5. **FAQs to 8** (40-60 words, facts only, first sentence answers): fit, sizing, fabric, care, colors, gift timing, size exchange, whether the art is original (no brand marks). Head phrase at most 3 times; no other page's primary (product-keyword-map.json).
Done when: astro build passes in normal, PRICE_DATE=2026-12-02 and 2026-12-06 modes (no sale price in the Dec builds, no order-by claim in the Dec 6 build), audit 0 errors, page 200, log lists every changed file.
---
## Log
- 2026-11-25 23:28 UTC director: brief written, READY (2,400 / KD 16; $0). Women's zip-ups (14,800 / KD 32) were considered and skipped: R9.11 lists that head term as brand-owned (no extra page effort). Half zip pullovers (5,400 / KD 14) skipped: 5 live, under the depth floor.
- 2026-11-26 21:35 UTC [B]: built. Depth 15 active (all $24.99). collections.ts override only: title, meta, answer-first intro (Dec-1-true price, {{order-by}} switch), wear section linking /hoodies/western-hoodies/ (200), FAQs 2 to 8. astro build passes normal, 2026-12-02, 2026-12-06 (Dec 6: 0 order-by claims, no $24.99). Audit not rerun (copy only). Position unknown; RankHero not re-measured.
