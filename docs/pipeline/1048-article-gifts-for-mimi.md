---
status: LIVE
lane: W
type: article
cluster: tees
keyword: gifts for mimi
volume: 1600
kd: 16
slug: gifts-for-mimi
---
## Gifts for Mimi (and Gigi and Nana): Funny Shirts for the Grandma With a Name
- `draft: true`, `cluster: 'tees'` in src/data/guides.ts, appended at the end of allGuides. 4 pick groups (6 products), 6 sections, 6 FAQs, roughly 1,000 words.
- Keyword: gifts for mimi 1,600 / KD 16 (RankHero keyword page via scripts/keyword-gap.py, measured 2026-11-18, one pull). Unowned by any collection, product or guide. "gifts for gigi" and "gifts for grandmothers" measure the same 1,600 / KD 16, so the guide covers the Mimi/Gigi/Nana name family on one page; "mimi/gigi hoodie/sweatshirt" stay with their products.
- Overlap note for the director: christmas-gifts-for-grandma (LIVE) uses three of the same designs. This guide is the any-occasion, name-led angle (birthday, Mother's Day, Grandparents Day, Christmas). Park it if you judge it too close.
- Why this topic: #1046 workout-hoodies REDO could not be retargeted honestly. Measured 2026-11-18: gym hoodie men 1,000/KD22 and mens gym hoodie 9,900/KD31 are the gym-hoodies collections' heads; mens workout hoodie 1,600/KD16 is the same search as the claimed "workout hoodie men"; lifting hoodie (390/KD40), weightlifting hoodie (170/KD39) and funny gym hoodie (90/KD56) are product-claimed; funny workout hoodies returns no data. Left #1046 in REDO for the director to decide (retarget to a gym/lifting gift angle or PARK).
- Picks (all ACTIVE, every handle in src/data/fresh-designs.json, text read from the live Shopify Stories 2026-11-18): Mimi Says Yes hoodie + crewneck, Gigi crewneck, Mom Said No? That's Cute. crewneck, Nana's Cookies tee. FLAG: the live Nana's Cookies tee now reads THE RECIPE DIES WITH ME.; christmas-gifts-for-grandma still says RECIPE NOT AVAILABLE and should be checked.
- Facts only from the repo and live Stories: tee $24.99, crewneck $34.99, hoodie $39.99 (then $44.99 from Dec 1), Dec 4 order-by, 2-5 / 3-8 business days, 30-day size exchange, free US shipping $45+, 15% on 10+ items. No tests, stats or reviews. FAQ questions are not from PAA/GSC (unavailable unattended).
- `npx astro build`: passes (151 pages; drafts are not built). No intake-log lock written (run restricted to guides.ts and this file).
## Log
- 2026-11-18 UTC writer: drafted.
- 2026-11-18 23:18 UTC director: APPROVED. Checked against live Shopify: all picks ACTIVE, prices, colors and sizes match; every pick handle in fresh-designs.json; all links 200; primary unowned (only retargeted-from notes in the map). Held for Nov 19 Chicago (Nov 18's 2 articles went live at 14:35 UTC); next run removes the draft: line after re-checking.
  Fix: SEO title 66 -> 60 chars (R8.4); christmas-gifts-for-grandma's Nana's Cookies line updated to the live print THE RECIPE DIES WITH ME. (4 spots).
- 2026-11-19 23:20 UTC director: LIVE (draft line removed; 1 of 2 articles for Nov 19 Chicago). Held approval re-checked: no rule dated after Nov 18 applies; all 5 pick pages 200. astro build 153 pages.
