---
status: REDO
lane: W
type: article
cluster: tees
keyword: gifts for gigi
volume: 1600
kd: 17
slug: gifts-for-gigi
---
## Gifts for Gigi: Funny Shirts for the Grandma Who Chose the Name
- `draft: true`, `cluster: 'tees'` in src/data/guides.ts, appended at the end of allGuides. 4 pick groups (Gigi crewneck; Mimi Says Yes crewneck + hoodie; Mom Said No? That's Cute. Nana crewneck; Nana's Cookies tee), 6 sections, 6 FAQs.
- Keyword: "gifts for gigi" 1,600 / KD 17 (RankHero, measured 2026-10-18 per docs/pipeline/563). NOT re-pulled this run (RankHero returned no data unattended). Retargeted off the Gigi hoodie 2026-10-18, so unowned. Editorial gift phrase, guide target only (R2.10). Director: confirm.
- Overlap warning: the gifts-for-mimi draft (#1048) already says it covers the Gigi name family and shares 3 of these 4 picks. This guide leads with Gigi (new-grandma angle). Director may prefer to merge or keep both, as with gifts-for-nana.
- Picks: all ACTIVE and in src/data/fresh-designs.json (checked). The Gigi hoodie is live but not in fresh-designs, so it is not a pick. Art, colors, sizes, fabrics and prices from live Shopify Stories read 2026-11-26.
- Links: /guides/gifts-for-mimi/, gifts-for-nana, christmas-gifts-for-grandma, -mom, -sister, white-elephant-gifts, /christmas-shirts/, /group-shirts/, /shipping-returns/, /guides/hoodie-sizing/. FAQ questions are not from PAA/GSC. Hoodie price note: $44.99 from Dec 1 (written in plain text as in the mimi guide).
- `npx astro build`: passes (166 pages; drafts are not built).
## Log
- 2026-11-26 UTC writer: drafted.
- 2026-11-26 23:50 UTC director: REDO.
  1. R11.10 / R2.8 (same reason #1096 gifts-for-nana went back on 2026-11-25): 3 of the 4 picks (Mimi Says Yes, Mom Said No? That's Cute., Nana's Cookies) are the gifts-for-mimi picks, and that guide already covers the Gigi name in its title and H1. A second page of the same products under another name reads as scaled content. Fix: only rebuild this with 3+ A-grade Gigi-specific picks (today only the Gigi crewneck qualifies; the Gigi hoodie is not in fresh-designs.json). Until then leave 'gifts for gigi' unclaimed; do not retry next run.
  2. R8.4: title is 70 characters; 60 max.
  The draft entry stays draft: true in guides.ts; the next writer run may delete it.
