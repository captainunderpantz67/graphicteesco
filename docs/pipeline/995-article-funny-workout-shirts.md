status: PARKED
lane: W
type: article
cluster: gym
keyword: workout shirts funny
volume: 1300
kd: 17
slug: funny-workout-shirts
---
## Funny Workout Shirts for Guys Who Lift and Laugh: 5 Gym Tees
- New gym-cluster article, `draft: true` in src/data/guides.ts (cluster: gym). The rewrite queue is blocked: item 4 (how-to-wash, #903) is REDO for an unmeasured phrase, and items 5 and 6 (how-to-style, are-graphic-tees-in-style) have no measurable phrase either (RankHero is Etsy-only), so the run took the next rule: fewest-article cluster, measured keyword.
- Keyword: workout shirts funny 1,300 / KD 17 (RankHero 2026-10-24). Overlap risk for the director: the singular "funny workout shirt" is claimed by the Gym Rat tee and "funny gym shirts" (3,600/40) by the Plate Club tee; the article uses the plural word-order variant and links to /mens-gym-shirts/. Retitle or retarget if you judge it too close.
- Picks (A-grade, in fresh-designs.json, tee URLs return 200): Retired From Cardio (#153), Sore Since 1987 (#154), Beach Body Pending (#163), Sisyphus Had Bad Programming (tee/crewneck/hoodie), Rack Your Weights. Respectfully. (tee, oversized hoodie). All tees $24.99. Old School Strength skipped (REDO).
- Links: /mens-gym-shirts/, /hoodies/gym-hoodies/, /hoodies/gym-hoodies-for-men/, /shipping-returns/, siblings gym-gifts-for-men, white-elephant-gifts, funny-golf-gifts. Director: please confirm these paths return 200 (R14.1).
- Facts only from the repo (pipeline briefs, collections.ts gym copy, site.ts). Not performance fabric, stated plainly. No tests, stats or reviews. FAQ questions are not from PAA/GSC (not available unattended).
- Length is about 990 words. `npx astro build` passes (109 pages; drafts are not built). Not done: docs/intake-log.md lock line (run restricted to guides.ts and this file).
- Planned siblings (not live yet): funny-gym-shirts, gym-hoodies-for-men-guide, gifts-for-lifters-under-50.
## Log
- 2026-10-24 UTC writer: drafted, build passes.
- 2026-10-25 14:15 UTC director: REDO (article). R2.8: 'workout shirts funny' is the same search as 'funny workout shirt', which the Gym Rat tee owns; word order does not make it a second keyword. Retarget to a distinct measured phrase (try 'funny gym shirts for men', 'funny lifting shirts', 'gym humor shirts' in keyword-gap.py) that no page owns, or PARK if none measures.
- 2026-10-26 UTC writer: PARKED per director. keyword-gap.py (RankHero 2026-10-26) returns no volume for funny gym shirts for men, funny lifting shirts (KD 50, no volume), gym humor shirts, funny gym t shirts, funny gym tank tops, gym shirts with sayings, funny workout shirts for men. Only measured variants are workout shirts funny 1,300/17 (same search as the Gym Rat tee) and funny gym shirts 3,600/40 (Plate Club tee). Draft entry kept in guides.ts (draft: true) for reuse if a distinct phrase measures. Also removed the stale 2026-10-22 draft copy of best-funny-thanksgiving-shirts (#801, PARKED).
