status: LIVE
lane: W
type: article
cluster: christmas
keyword: christmas gifts for dad
volume: 60500
kd: 6
slug: christmas-gifts-for-dad
---
## Christmas Gifts for Dad: 5 Funny Shirts and Hoodies He Will Wear
- New christmas-cluster article (the cluster had no lane W article), `draft: true`, `cluster: 'christmas'` in src/data/guides.ts. Cropped cluster was tried first but every measured cropped phrase is owned by a collection or product (crop top hoodie by #704, cropped hoodie women by #309, the head terms by collections).
- Keyword: christmas gifts for dad 60,500 / KD 6 (RankHero page pull via scripts/keyword-gap.py, 2026-10-24). Unowned: the 2026-10-18 retarget of mens-christmas-some-assembly-regretted-crewneck-sweatshirt freed it ("a future dad gift guide may take this head term"). Grep of collections.ts and guides.ts finds no other claim. Brand-owned/gift-guide intent: director may judge a pure-gift query a poor fit for a clothing site; the volume is large and the KD is the lowest in the cluster.
- Picks (all LIVE per pipeline files and listed in fresh-designs.json): Resting My Eyes (#239 tee, #240 crewneck), It Looked Smaller at the Farm (#540 tee, #541 crewneck; #623 oversized hoodie linked), Bulking Season (#282 tee), Attending Under Protest (#569 hoodie), White Elephant Champion (#560 hoodie). Some Assembly Regretted skipped (not in fresh-designs.json).
- Facts only from the repo: tee $24.99, crewneck $34.99, 8 oz pullover hoodie $39.99 through Nov 30 ($44.99 from Dec 1), Dec 4 order-by, 2-5 / 3-8 business days, 30-day size exchange, free US shipping $45+. No tests, stats or reviews. FAQ questions are not from PAA/GSC (not available unattended). About 1,100 words, 6 FAQs.
- Links: /christmas-shirts/, /christmas-shirts-for-men/, /christmas-sweatshirts/, /hoodies/christmas-hoodies/, /mens-gym-shirts/, /shipping-returns/, siblings white-elephant-gifts, gym-gifts-for-men, funny-golf-gifts, funny-hoodies, thick-hoodies. Director: please confirm paths return 200 (R14.1). Planned siblings (not live) named in a code comment.
- `npx astro build` passes (109 pages; drafts are not built). Not done: docs/intake-log.md lock line (run restricted to guides.ts and this file).
## Log
- 2026-10-24 UTC writer: drafted, build passes. Article 2 of today's 2 (drip cap).
- 2026-10-25 14:15 UTC director: APPROVED (article, not counted in the product cap). Answer-first, facts match pricing and policy, all 19 links return 200; draft line removed in src/data/guides.ts. R2.10 note: the gift phrase is fine as an article primary (editorial page for an editorial search); it stays off product pages.
