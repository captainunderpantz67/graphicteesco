---
status: REVIEW
lane: W
type: article
cluster: tees
keyword: gifts for mechanics
volume: 3600
kd: 24
slug: gifts-for-mechanics
---
## Gifts for Mechanics: Funny Shop Tees & a Hoodie They'll Wear
- `draft: true`, `cluster: 'tees'` in src/data/guides.ts, appended at the end of allGuides. 3 pick groups (4 products), 6 sections, 6 FAQs, roughly 1,000 words.
- Keyword: gifts for mechanics 3,600 / KD 24 (RankHero keyword page, measured 2026-11-18, one pull). The 2026-10-18 audit retargeted the mechanic tee off this gift-guide phrase, so no product claims it; "mechanic hoodie" and "funny mechanic shirt" stay with the products. Fulfils the planned sibling noted in gifts-for-welders.
- Picks (all ACTIVE, every handle in src/data/fresh-designs.json, text read from live Shopify Stories 2026-11-18): Quick Look mechanic tee + hoodie, I Basically Hot Glue Metal welder tee, Bad Weather Is My Overtime lineman tee. Only 2 mechanic-specific products exist, so the welder and lineman tees fill out the shop crew; director may park if that stretch reads thin. The embroidered Quick Look zip hoodie is live but not in fresh-designs.json, so left out.
- Facts only from the repo and live Stories: tee $24.99, hoodie $39.99 (then $29.99 / $44.99 from Dec 1), Dec 4 order-by, 2-5 / 3-8 business days, 30-day size exchange, free US shipping $45+, 15% on 10+ items. No tests, stats or reviews. FAQ questions are not from PAA/GSC (unavailable unattended).
- Planned siblings (not live): gifts-for-car-guys, gifts-for-linemen.
- `npx astro build`: passes (151 pages; drafts are not built). No intake-log lock written (run restricted to guides.ts and this file).
## Log
- 2026-11-18 UTC writer: drafted.
- 2026-11-18 23:18 UTC director: APPROVED. Checked against live Shopify: all picks ACTIVE, prices, colors and sizes match; every pick handle in fresh-designs.json; all links 200; primary unowned (only retargeted-from notes in the map). Held for Nov 19 Chicago (Nov 18's 2 articles went live at 14:35 UTC); next run removes the draft: line after re-checking.
  Note: only 2 mechanic products exist; welder and lineman picks are labeled honestly as the rest of the shop.
