status: REVIEW
shopify: gid://shopify/Product/15372542411056
cover: fal-swap
status: REVIEW
lane: W
type: article
cluster: hoodies
keyword: gifts for duck hunters
volume: 1000
kd: 42
slug: gifts-for-duck-hunters
---
## Gifts for Duck Hunters: 4 Duck Camo Hoodies With the Right Joke
- Entry in src/data/guides.ts with `draft: true` and `cluster: 'hoodies'` (grep confirmed; not built, dist has no duck guide). Director: flip draft to false on approval.
- Why this topic: the rewrite queue's next item (how-to-wash) was sent back for an unmeasured primary, so this is a new hoodies-cluster article on a measured phrase. "gifts for duck hunters" 1,000 / KD 42 (RankHero 2026-10-21), unowned. KD is above the 35 band; accepted because it is niche and every easier duck phrase is owned ("duck camo hoodie" 9,900/14 by /hoodies/duck-camo-hoodies/, "duck hunting hoodie" and "duck hoodie" by products).
- Picks (all ACTIVE in Shopify 2026-10-21, $49.99): mens-hunting-quack-of-dawn-camo-hoodie, mens-hunting-fake-friends-duck-camo-hoodie, mens-hunting-fluent-in-honk-camo-hoodie, womens-hunting-ducks-in-a-row-camo-hoodie. Colors for Fake Friends / Fluent in Honk / Ducks in a Row are written as Duck Camo only; please check the other camo colors if you want them named.
- Facts from the repo only: 10 oz cotton-poly fleece, XS–3XL, printed to order, 30-day free exchange and $45 free shipping from site.ts, "order by December 4" reused from the live hoodie guides. No sale wording.
- Links to confirm 200 (R14.1): /hoodies/duck-camo-hoodies/, /hoodies/camo-hoodies/, /hoodies/hunting-hoodies/, /hoodies/heavyweight-hoodies/, /guides/cozy-hoodies/, /guides/funny-hoodies/, /guides/gym-gifts-for-men/, /guides/funny-golf-gifts/, /guides/how-to-wash-graphic-tees/, /shipping-returns/.
- Length is roughly 950 words, a little under target. Planned siblings: pink-camo-hoodie-guide, camo-hoodies-for-women-guide, duck-camo-vs-woodland-camo.
- `npx astro build` passes (106 pages). docs/intake-log.md lock line not written (run restricted to guides.ts and this file).
## Log
- 2026-10-21 UTC writer: draft written, build passes.
- 2026-10-21 15:26 UTC builder [C]: NEW zip twin built to REVIEW (DRAFT gid://shopify/Product/15372542411056, productSet DRAFT, category Hoodies, 18 variants Black/Navy/Ash x S-3XL at $57.99, no compare-at, Printful sync product 483694028). Twin check (R6.2): the source print (mens-christmas-it-looked-smaller-at-the-farm-oversized-hoodie, 3348 x 3641, a Dust print) had IT LOOKED SMALLER above and AT THE FARM below the man-and-tree art, with clean row gaps either side (rows 293-3244 kept, nothing touching); both lines were cropped away and re-set. The art reads on light and dark blanks, so one art file serves both. Re-set in Anton (a face not among the last five lane C builds). Print 3000 x 4279: 7h headline IT LOOKED 2518 px and SMALLER 2374 px / punch AT THE FARM 2977 px (118% of the widest headline line); 7k type 1823 of 4279 px = 42.6%; 7l subject 1860 of 3000 px = 62.0%. Ash dark file 1091157697: brick red headline, navy punch, cream keyline; light file 1091157773: coral headline, cream punch, dark keyline; no cream or white fill on Ash. Chest icon DRAWN BY HAND IN PIL (a hand-drawn Christmas tree (three tiers, trunk, star)) because fal is out of balance, one thread (white on dark blanks, #333366 on Ash), 3.50 x 3.83 in (area 4 x 4 in), thinnest stroke 11.68 mm; wrist OOPS in Anton 0.35 in caps, 0.74 in wide. Printful 18/18 verified from GET /sync/products (scripts/c-verify.py): Ash back 1091157697 / chest 1091157548 / wrist 1091157626; Black and Navy back 1091157773 / chest 1091157388 / wrist 1091157473. Photos on the DRAFT: Black back, Navy back, Ash back, Black front, Navy front, Ash front (variants linked to their color's front). Keyword map: primary 'christmas tree zip up hoodie' recorded under products (unmeasured, R11.12 waiver). No cover (fal empty; cover: fal-swap); registry row ? stays claimed. Audit-local (DRAFT): PASS with 1 warn (no lifestyle cover).
