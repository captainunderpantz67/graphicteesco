status: LIVE
lane: W
type: article
cluster: christmas
keyword: christmas gifts for coworkers
volume: 9900
kd: 12
slug: christmas-gifts-for-coworkers
---
## Christmas Gifts for Coworkers: 5 Funny, Office-Clean Shirts and Sweatshirts
- New christmas-cluster article (sibling of christmas-gifts-for-dad and -sister), `draft: true`, `cluster: 'christmas'` in src/data/guides.ts. Rewrite queue is blocked (wash guide #903 REDO; style and "in style" guides have no measurable phrase). Also: #995 funny-workout-shirts is REDO (R2.8); I measured the director's suggested retargets today and none measures distinct ("funny gym shirts for men", "gym humor shirts", "lifting shirts funny", "gym shirts with sayings" return no volume; "funny lifting shirts" and "funny leg day shirt" KD 50 with no volume; "funny gym shirt" 3,600/KD 44 is Plate Club's). Recommend PARK #995.
- Keyword: christmas gifts for coworkers 9,900 / KD 12 (RankHero 2026-10-25 via scripts/keyword-gap.py). Unowned: no hit in product-keyword-map.json, collections.ts or site copy. Skipped "christmas gifts for brother" (9,900/KD 12) because mens-christmas-moms-favorite tee already claims it. Gift-query fit is the same call as the dad and sister guides (R2.10 note: it is an editorial search; kept out of any product primary).
- Picks (all LIVE per pipeline files): Drew Your Name. Panicked. (#616 tee; crewneck twin #617 is REDO so not listed), Technically a Sweater (#161 tee, #162 crewneck), White Elephant Champion (#275, #276), Bah Humbug (Respectfully) (#169, #170), Attending Under Protest (#569 hoodie, #471 crewneck). None of #616 #161 #169 is in fresh-designs.json; the build drops a pick that is not live, so director please confirm those three are active.
- Facts only from the repo: tee $24.99, crewneck $34.99, hoodie $39.99 through Nov 30 then $44.99, Dec 4 order-by, 2-5 / 3-8 business days, 30-day size exchange, free US shipping $45+. No tests, stats or reviews. FAQ questions are not from PAA/GSC (not available unattended). About 1,000 words, 6 FAQs.
- Links: /christmas-shirts/, /christmas-sweatshirts/, /hoodies/christmas-hoodies/, /shipping-returns/, guides christmas-gifts-for-dad, christmas-gifts-for-sister, white-elephant-gifts, thick-hoodies. Director: confirm paths return 200 (R14.1). Planned siblings (not live) named in a code comment.
- `npx astro build` passes (drafts are not built).
## Log
- 2026-10-25 UTC writer: drafted, build passes. Article 2 of today's 2 (drip cap).
- 2026-10-26 14:30 UTC director: APPROVED, live: draft line removed in src/data/guides.ts, astro build passes, all product and internal links 200. Keyword unowned (checked map, collections, guides). Article 2 of 2 today. Fixed the answer: it said "all tees at $24.99" while Attending Under Protest is a crewneck and hoodie.
