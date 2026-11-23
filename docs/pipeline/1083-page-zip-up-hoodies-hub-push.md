status: READY
lane: C
type: redo
id: 1083
slug: zip-up-hoodies
kd: 28
push: R0
---
## Zip-up hoodies hub push (R0 item 5 + card order (1) zip cluster, $0, outside the 6-a-day cap)
Keyword: zip-up hoodie 135,000 / KD 28 (collections.ts, RankHero 2026-10-16; KD 21-35 band, hub page). Page live at /hoodies/zip-up-hoodies/: 95 products in the Shopify collection, only 4 FAQs, generic title "Zip-Up Hoodies — Original Graphic Designs". Last known position: unknown; note it as unknown.
Do (copy and links only in src/data/collections.ts; this is a niche() entry (line ~1218), so add an override the way #1065 / #1076 did; never delete existing copy):
1. **SEO title, 60 max:** "Zip-Up Hoodies" first, then hook and price from the live grid, e.g. "Zip-Up Hoodies: Funny Back-Print Designs, $49.99+". Meta 155 max, names 2-3 real printed lines.
2. **Answer-first intro:** live count, blanks on the grid (read product pages, never guess), back print + embroidered left chest standard only where it is really there, price range including the all-over-print zips if live, printed to order, order-by Fri Dec 4 2026, one free size exchange.
3. **Spoke sections (hub and spoke, R11.14):** one sentence each linking the live spokes: /hoodies/zip-up-hoodies-for-men/, /hoodies/zip-up-hoodies-for-women/, /hoodies/black-zip-up-hoodies/, /hoodies/y2k-zip-up-hoodies/ and /hoodies/camo-zip-up-hoodies/ only if each curls 200 and is not noindexed; plus /guides/graphic-zip-up-hoodie/.
4. **FAQs to 8** (40-60 words, facts only): zip-up vs pullover, sizing, weight/warmth, where the print sits, care, gift timing, size exchange. Head phrase at most 3 times on the page.
5. **Inbound links:** /hoodies/ and /hoodies/graphic-hoodies-for-men/ get one natural sentence linking here if missing.
Done when: astro build passes, audit 0 errors, page 200, log lists every changed file.
---
## Log
- 2026-11-23 23:30 UTC director: brief written, READY (zip hub, 135,000 / KD 28; $0).
