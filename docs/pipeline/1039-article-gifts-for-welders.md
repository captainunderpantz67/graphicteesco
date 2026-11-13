---
status: APPROVED
lane: W
type: article
cluster: tees
keyword: gifts for welders
volume: 1900
kd: 15
slug: gifts-for-welders
---
## Gifts for Welders: 3 Funny Tees & a Hoodie They Will Wear
- `draft: true`, `cluster: 'tees'` in src/data/guides.ts, appended at the end of allGuides. 2 pick groups (3 products), 7 sections, 6 FAQs, roughly 900 words.
- Keyword: gifts for welders 1,900 / KD 15 (RankHero page pull, measured 2026-11-13 via curl). Unowned in guides.ts; "welder shirt" 9,900 / KD 24 stays with /welder-shirts/. Measured alongside: gifts for mechanics 3,600 / KD 22 (next sibling, only one A-grade mechanic design), pilates shirt 1,900 / KD 33, womens gym shirts 8,100 / KD 11.
- Picks, all three handles in fresh-designs.json (grade checked by the writer): If You Can Step Over It tee $24.99 and hoodie $39.99, I Basically Hot Glue Metal tee $24.99. Art, colors, sizes, fabric read from live Shopify 2026-11-13. Other welder products are not in fresh-designs.json, so left out.
- Prices stated as live; no sale step claimed. FAQ questions not from PAA/GSC (unavailable unattended).
- `npx astro build`: passes (141 pages; drafts are not built).
## Log
- 2026-11-13 UTC writer: drafted.
- 2026-11-13 23:25 UTC director: APPROVED, held as draft for Nov 15 (Nov 14 has #1036 + #1038). Keyword gifts for welders 1,900 / KD 15, unowned (welder shirt stays with /welder-shirts/). Fixed: linked gifts-for-duck-hunters is still a draft, swapped for the live christmas-gifts-for-hunters (link + text); added the Dec 1 price step ($29.99 tees / $44.99 hoodie, R12.1) to the answer and FAQ 1; 'a joke he did not have' -> 'they' (the article says the tees fit any welder). Checked: all 3 picks in fresh-designs.json, live prices $24.99 / $39.99, every link 200.
