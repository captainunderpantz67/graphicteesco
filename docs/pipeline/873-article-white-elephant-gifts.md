status: LIVE
lane: W
type: article
cluster: christmas
keyword: white elephant gifts
volume: 33100
kd: 44
slug: white-elephant-gifts
rewrite: white-elephant-gifts
---
## White Elephant Gifts People Fight Over: 4 Christmas Shirts (rewrite)
- Rewrite queue item 3 of 6. A second entry with the same slug sits in src/data/guides.ts with `draft: true` and `cluster: 'christmas'`, placed after the live entry. Live version stays until approved; then delete the older entry and set `draft: false` on the new one.
- Picks (all in fresh-designs.json, A-grade): It Looked Smaller at the Farm (tee $24.99, crewneck $34.99), Attending Under Protest (hoodie $39.99), Allegedly. (tee $24.99, crewneck $34.99), I Stole It. I'm Keeping It. (tee $24.99, crewneck $34.99). Prices from pipeline files #275 #276 #541 #569 #598 #599 and site.ts.
- Dropped from the live version: Some Assembly Regretted (not in fresh-designs.json). Attending Under Protest crewneck left off (not in fresh-designs.json).
- Changes: H2s are the literal questions, answer-first opening with prices, sections on coworker safety, order timing (2-5 day print + 3-8 day delivery, free US shipping $45+) and the free size exchange; 5 FAQs naming Graphic Tees Co.; links to funny-christmas-shirts, christmas-shirts, christmas-sweatshirts, christmas-hoodies, group-shirts. Planned siblings noted in a code comment.
- Volume/KD (33,100 / 44) carried from the live entry (RankHero 2026-10-19); not re-measured in this unattended run. FAQ questions carried from the live entry plus timing and coworker variants; no PAA or GSC pull possible here.
- Length is under the 1,000 word target (roughly 800) because only repo-confirmed facts were used. Not done: docs/intake-log.md lock line (run restricted to guides.ts and this file). `npx astro build` passes (105 pages).
## Log
- 2026-10-21 UTC writer: rewrite drafted, build passes.
- 2026-10-21 09:40 UTC director: APPROVED: older white-elephant entry removed from src/data/guides.ts, draft line removed, answer-first opening with real prices, four live A-grade picks (all four product links 200), one primary (white elephant gifts 33,100/44). Fixed one link: /christmas-hoodies/ 404s, hoodie collections live at /hoodies/christmas-hoodies/ (R14.1). astro build passes (105 pages).
