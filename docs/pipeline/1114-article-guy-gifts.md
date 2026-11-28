---
status: REVIEW
lane: W
type: article
cluster: tees
keyword: guy gifts
volume: 9900
kd: 29
slug: guy-gifts
---
## Guy Gifts: Funny Shirts for the Guy Whose Hobby Nobody Else Buys For
- `draft: true`, `cluster: 'tees'` in src/data/guides.ts, appended at the end of allGuides. 5 pick groups (The Neighbors Love Me tee + hoodie; Bad Weather Is My Overtime tee; I Only Run Downhill tee; Yes, One Cat. Once. hoodie; The Mountains Called. Left Them on Read. hoodie), 6 sections, 6 FAQs, roughly 1,200 words.
- Keyword: "guy gifts" 9,900 / KD 29, competition 8,691 (RankHero via scripts/keyword-gap.py, measured 2026-10-18 per docs/pipeline/584). NOT re-pulled this run (RankHero returned no data unattended). Editorial gift phrase, guide target only (R2.10). Unowned: only "car guy gifts" is claimed (#584). Director: confirm the keyword.
- Why this topic: the earlier candidates were blocked (gifts for cat lovers KD 51, gifts for nana and gigi share picks with other guides, drummers and skiers have under 3 products). This guide uses the odd-hobby men's designs that lead no other guide.
- Picks (all ACTIVE, every handle in src/data/fresh-designs.json, checked by the writer): mens-drummer-the-neighbors-love-me-graphic-tee and -hoodie, mens-lineman-bad-weather-is-my-overtime-graphic-tee, mens-running-i-only-run-downhill-graphic-tee, mens-firefighter-yes-one-cat-once-hoodie, mens-outdoors-mountains-called-left-on-read-hoodie. Each pick has 0 or 1 mentions elsewhere in guides.ts (no guide leads with it). Art, colors, sizes, fabrics and prices from live Shopify Stories read 2026-11-28.
- Prices use the sibling form (sale through Nov 30, tees $29.99 and hoodies $44.99 from Dec 1) so price.ts reprices them; the [[..||..]] shipping line and order-by Dec 4 sentences follow xmas-gifts-for-him (#1100) for the #1093 switch. Free shipping at $45 and the size exchange as in siblings.
- Links: /christmas-shirts-for-men/, /graphic-tees-for-men/, /hoodies/, /shipping-returns/, guides xmas-gifts-for-him, gifts-for-mechanics, gifts-for-welders, gym-gifts-for-men, funny-gifts-for-dad, christmas-gifts-for-brother, cheap-christmas-gifts. FAQ questions are not from PAA/GSC.
- `npx astro build`: passes (167 pages; drafts are not built).
## Log
- 2026-11-28 UTC writer: drafted.
