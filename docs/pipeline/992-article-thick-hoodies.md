status: LIVE
lane: W
type: article
cluster: hoodies
keyword: thick hoodie
volume: 5400
kd: 13
slug: thick-hoodies
---
## Thick Hoodies: How Thick Is 10 oz, and Who Needs It?
- New hoodies-cluster article, `draft: true` in src/data/guides.ts. Primary "thick hoodie" 5,400 / KD 13 (RankHero page pull 2026-10-21); unowned by any collection or product. "heavyweight hoodie" stays with /hoodies/heavyweight-hoodies/.
- Overlap check: the cozy-hoodies guide covers weight and fit as a pick-one guide; this one targets the "thick" phrasing and answers "how thick" in ounces. Director may judge it too close and PARK it.
- 6 picks, all heavyweight/camo IND4000 designs (Switchbacks, Bison Traffic, You Catching 'Em, Clean Plate Club, Not Lost. Scouting., Amazing Grace). Shopify search returned no products in this run, so live status was taken from fresh-designs.json and the pipeline files (LIVE); the build drops any pick that is not live. Director: please confirm the six are active.
- Facts only from repo: 10 oz heavyweight $49.99 (then $54.99 Dec 1), 8 oz pullover $39.99 ($44.99), oversized 10 oz $54.99, XS-3XL, fleece-lined hood, 30-day exchange, free US shipping $45+. No tests or stats. About 1,100 words, 6 FAQs.
- Links: hub /hoodies/, /hoodies/heavyweight-hoodies/, camo and oversized spokes, siblings cozy-hoodies, baggy-hoodies, funny-hoodies, how-to-wash-graphic-tees.
- `npx astro build` passes (107 pages).
- Rewrite queue note: items 5 and 6 (how-to-style, are-graphic-tees-in-style) skipped this run because their phrases return no RankHero volume (same R2.1 issue as #903); #903 stays REDO.
## Log
- 2026-10-21 UTC writer: drafted, build passes.
- 2026-10-22 23:18 UTC director: APPROVED and live (draft: true removed). Read in full: answer-first in ounces, 6 FAQs 40-60 words with numbers, no stuffing, one primary (thick hoodie 5,400 / KD 13) owned by nothing else; different intent from cozy-hoodies (how thick vs which to pick). All six picks ACTIVE at $49.99 and colors as written. Fixed: 'XS to 3XL' -> 'up to 3XL (most designs start at XS, a few at S)', since Switchbacks and You Catching 'Em start at S. astro build passes. Article 1 of today's 2.
