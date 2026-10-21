status: REVIEW
lane: W
type: article
cluster: hoodies
keyword: cozy hoodies
volume: 3600
kd: 14
slug: cozy-hoodies
---
## Cozy Hoodies: How to Pick the Right Weight and Fit
- Draft guide in src/data/guides.ts (draft: true, cluster: hoodies), 6 FAQs, 6 live hoodie picks (4 heavyweight 10 oz, 1 oversized, 1 pullover), about 1,100 words.
- Keyword: "cozy hoodies" 3,600 / KD 14 (RankHero via scripts/keyword-gap.py, 2026-10-21). Unowned in docs/product-keyword-map.json and src/data/collections.ts.
- Picks read from live Shopify (get-product) 2026-10-21, all ACTIVE: No Deer Today and Quack of Dawn camo, Clean Plate Club, Amazing Grace (all $49.99); University of Staying In oversized ($54.99) and Knitting pullover ($39.99), the last two confirmed ACTIVE today and otherwise reusing details from the approved aesthetic-hoodies article.
- Facts: weights, fabrics, hood, cuffs and sizes from the live listings; prices follow R12.1 (sale $5 under regular, holiday sale through Nov 30); policies from site.ts. No warmth ratings or temperature claims.
- FAQ questions are keyword-natural phrasings; no live PAA or GSC data in this unattended run, so the director may swap in measured questions.
- Links: /hoodies/, heavyweight, camo, oversized; siblings aesthetic-hoodies, funny-hoodies, hoodies-for-teens; guide how-to-wash. Planned siblings noted in a code comment.
- Director: confirm picks' colors against live listings and flip draft to false on approval.
## Log
- 2026-10-21 UTC writer: draft written, `draft: true` grep confirmed, astro build passes.
