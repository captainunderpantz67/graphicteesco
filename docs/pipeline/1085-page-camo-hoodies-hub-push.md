status: REVIEW
lane: C
type: redo
id: 1085
slug: camo-hoodies
kd: 23
push: R0
---
## Camo hoodies hub push (R0 item 5 + card order (1) camo cluster, $0, outside the 6-a-day cap)
Keyword: camo hoodie 74,000 / KD 23 (RankHero 2026-10-16, collections.ts line ~1273; KD 21-35 band, the biggest camo term). Page live at /hoodies/camo-hoodies/: generic title "Camo Hoodies — Original Graphic Designs", 1 FAQ question on the live page. Never had a push. Last known position: unknown; note it as unknown.
Do (copy and links only in src/data/collections.ts; it is a niche() entry, so add an override the way #1083 / #1076 did; never delete existing copy):
1. **SEO title, 60 max:** "Camo Hoodies" first, then hook and a date-proof price (Dec 1 prices rise, R12.1; say "Under $60" or "From $49.99" only if still true after Dec 1, or leave price out). Meta 155 max, names 2-3 real printed lines from the live grid (read Shopify; camo redo lines, never the retired patch-template ones).
2. **Answer-first intro:** live count, blanks really on the grid (read 3 product pages: IND4000 camo colors, AOP pink camo, camo zips), where the print sits (center chest or small left chest, the placement A/B test, R11.13), printed to order, order by Fri Dec 4 2026, one free size exchange.
3. **Spoke sections:** one sentence each linking /hoodies/camo-hoodies-for-women/, /hoodies/pink-camo-hoodies/, /hoodies/duck-camo-hoodies/, /hoodies/black-camo-hoodies/, /hoodies/camo-zip-up-hoodies/ and /hoodies/hunting-hoodies/ only if each curls 200 and is not noindexed.
4. **FAQs to 8** (40-60 words, facts only): is it real hunting camo, warmth/weight, sizing, colors offered, where the print sits, care (wash cold inside out), gift timing, size exchange. Head phrase at most 3 times. Never write Mossy Oak or Realtree (R11.14).
5. **Inbound links:** /hoodies/ and /hoodies/graphic-hoodies-for-men/ get one natural sentence linking here if missing.
Done when: astro build passes, audit 0 errors, page 200, log lists every changed file.
---
## Log
- 2026-11-24 14:30 UTC director: brief written, READY (camo hub, 74,000 / KD 23; $0).
- 2026-11-24 [B]: built. collections.ts camo-hoodies override: title 49 chars, meta 146, answer-first intro (38 hoodies, heavyweight 10 oz, $49.99 through Nov 30, 5 camo colors, print ~10 in center chest, order by Dec 4, free exchange), spoke section linking women's, black, duck, hunting (pink camo and camo zip-up are noindex, not linked), 6 new FAQs (45-53 words). /hoodies/ and graphic-hoodies-for-men already link here. Astro build passes, last position unknown, audit not run (no admin-json), fal $0.
