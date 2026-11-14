---
status: APPROVED
lane: W
type: article
cluster: hoodies
keyword: gifts for cat moms
volume: 390
kd: 28
slug: gifts-for-cat-moms
---
## Gifts for Cat Moms: Funny Cat Hoodies, Crewnecks & Tees
- `draft: true`, `cluster: 'hoodies'` in src/data/guides.ts, appended at the end of allGuides. 3 pick groups (5 products), 6 sections, 6 FAQs, roughly 1,000 words.
- Keyword: gifts for cat moms 390 / KD 28 (RankHero page pull via scripts/keyword-gap.py rankhero(), measured 2026-11-14). Low volume: the head phrases "gifts for cat lovers" (14,800 / KD 50) and "cat mom gifts" (1,300 / KD 60) are above the KD gate, and "gifts for cat dads" (1,600 / KD 16) collides with the "cat dad gift" product claim. Unowned in guides.ts, collections.ts and product-keyword-map.json; "cat hoodie" stays with /hoodies/cat-hoodies/. Cropped-cluster phrases (cropped hoodie outfit, how to wear, grey cropped hoodie) and tennis/yoga/cycling/hiking gift phrases were checked first: unmeasurable, KD 50+, or fewer than 3 A-grade picks. The mechanic-gifts sibling was skipped: only one A-grade design and "mechanic gifts" is mapped to its product.
- Picks, all five handles in src/data/fresh-designs.json (grade checked by the writer): Making Biscuits hoodie, Oops. Anyway. crewneck and cropped hoodie, Cat Allegedly. tee and crewneck. Art, colors, sizes and fabric read from the live Shopify Stories 2026-11-14; all ACTIVE.
- Prices stated per R12.1: sale through Nov 30 ($24.99 tee / $34.99 crewneck / $39.99 hoodie / $44.99 cropped hoodie), Dec 1 step ($29.99 / $39.99 / $44.99 / $49.99). FAQ questions not from PAA/GSC (unavailable unattended).
- Links: guides christmas-gifts-for-sister, christmas-gifts-for-friends, gifts-for-homebodies, hoodie-sizing, how-to-wash-graphic-tees (all live); /hoodies/cat-hoodies/, /hoodies/cropped-hoodies/, /graphic-tees-for-women/, /shipping-returns/, /group-shirts/. Planned siblings gifts-for-cat-dads, funny-cat-shirts not linked.
- `npx astro build`: passes (143 pages; drafts are not built).
## Log
- 2026-11-14 UTC writer: drafted.
- 2026-11-14 23:20 UTC director: APPROVED, held as draft for Nov 16 (Nov 15 has #1039 + #1040). Keyword gifts for cat moms 390 / KD 28, unowned. All 5 picks ACTIVE, in fresh-designs.json, 200; prices, colors, sizes match Shopify. Fixed: (1) 'a hoodie ships free' was false, the hoodie is $39.99 under the $45 line (R8.6), now 'a hoodie or a cropped hoodie with a tee'; (2) FAQ 'Is the cat mom hoodie warm?' used the Oops. Anyway. zip's claimed phrase (R2.8, R8.7), now 'Is the Biscuits in Progress hoodie warm?'; (3) answer said the shop 'has three cat designs' (it has 10+), now 'three ... fit her best'.
