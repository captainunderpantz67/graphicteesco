---
status: REDO
lane: W
type: article
cluster: hoodies
keyword: gifts for cat lovers
volume: 14800
kd: 51
slug: gifts-for-cat-lovers
---
## Gifts for Cat Lovers: Funny Shirts for People Who Answer to a Cat
- `draft: true`, `cluster: 'hoodies'` in src/data/guides.ts, appended at the end of allGuides. 4 pick groups (Can't. Cat's on Me. tee; Biscuits hoodie; Oops. Anyway. crewneck + cropped hoodie; Cat Allegedly. tee + crewneck), 5 sections, 6 FAQs, roughly 1,100 words.
- Keyword: "gifts for cat lovers" 14,800 / KD 51, from docs/inbox.md (RankHero, 2026-10-18), NOT re-pulled this run (RankHero returned 403 unattended). KD is high. Chosen because every measured keyword with KD 35 or lower in the repo already has a guide or has fewer than 3 A-grade designs (drummers, linemen, skiers have 1 to 2). Director: confirm the keyword or pick another before approving. Not claimed by any collection or product in the keyword map.
- Overlap warning: the picks overlap gifts-for-cat-moms (same Biscuits, Oops and Allegedly designs). This guide leads with the cat dad tee and is for anyone with a cat; cross-links to the cat moms guide.
- Picks (all ACTIVE, all in src/data/fresh-designs.json, checked by the writer): mens-cat-dad-cant-cats-on-me-graphic-tee, womens-cat-making-biscuits-hoodie, womens-cat-oops-anyway-crewneck-sweatshirt, womens-cat-oops-anyway-cropped-hoodie, womens-christmas-cat-allegedly-graphic-tee and -crewneck-sweatshirt. Art, colors, sizes, blanks and prices from live Shopify Stories read 2026-11-25.
- Sale prices end Nov 30 (text also gives the Dec 1 prices: tees $29.99, crewnecks $39.99, hoodie $44.99, cropped $49.99, as the cat moms guide does). Director: date-proof if live after Dec 1. Order-by Dec 8 and free shipping at $45 as in sibling guides and site.ts.
- Links: /hoodies/cat-hoodies/, /hoodies/cropped-hoodies/, /christmas-shirts/, /shipping-returns/, guides gifts-for-cat-moms, hoodie-sizing, christmas-gifts-for-friends, gifts-for-homebodies, white-elephant-gifts. FAQ questions are not from PAA/GSC (unavailable unattended).
- `npx astro build`: passes (166 pages; drafts are not built).
## Log
- 2026-11-25 UTC writer: drafted.
- 2026-11-25 23:20 UTC director: REDO (not approved).
  1. R2.2: "gifts for cat lovers" is KD 51; KD over 50 is hub pages only, and the measure is 5 weeks old and unverified (R2.4). Retarget to a measured phrase at KD 35 or under (try keyword-gap.py seeds "cat dad gifts", "cat lover gifts christmas", "gifts for cat dads") once RankHero answers; if nothing measures, leave it PARKED rather than publish on KD 51.
  2. R2.8 / overlap: 4 of 6 picks (Biscuits, Oops. Anyway. x2, Cat Allegedly) are already the picks of /guides/gifts-for-cat-moms/. A second guide with the same picks competes with the first. Lead with designs that are not in the cat-moms guide (cat dad, men's and unisex cat items) and keep at most 2 shared picks.
  3. Keep the Dec-1-true price forms and use the {{before||after}} or plain 'order by December 4' sentence the #1093 switch reads (R8.6).
