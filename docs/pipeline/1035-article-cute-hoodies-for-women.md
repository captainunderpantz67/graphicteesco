---
status: LIVE
lane: W
type: article
cluster: hoodies
keyword: cute hoodies for women
volume: 8100
kd: 12
slug: cute-hoodies-for-women
---
## Cute Hoodies for Women: 5 Funny Graphic Picks & How They Fit
- `draft: true`, `cluster: 'hoodies'` in src/data/guides.ts, appended at the end of allGuides. 3 pick groups (5 products), 6 sections, 6 FAQs, about 1,200 words.
- Keyword: cute hoodies for women 8,100 / KD 12 (RankHero page pull, measured 2026-11-11 via curl). Unowned: not in collections.ts, product-keyword-map.json or guides.ts.
- Why not "cropped zip up hoodie" (9,900 / KD 11, measured the same day): no cropped zip hoodie exists in the shop (live Shopify check 2026-11-11), so the page would have no product to show.
- Picks (all ACTIVE, Stories/colors/sizes/prices read from live Shopify 2026-11-11): Oops. Anyway. (Sand/Navy, $39.99), Plot Twist (Sand/Navy, $39.99), Don't Talk to Me. I'm Counting. (Sand/Light Pink, $39.99), Per My Last Email, I'm Soaking (oversized, Dust/Navy, $54.99), I'm Fine. Just a Little Rain. (oversized, Dust/Navy, $54.99). All S-3XL (Plot Twist Navy to 5XL). Grades not in fresh-designs.json: director to confirm A-grade.
- Facts only from live Stories and site.ts. Oversized price carries the "through November 30, 2026" line like #1033; the $39.99 classic price has no scheduled change that I could confirm: director to adjust. FAQ questions not from PAA/GSC (not available unattended).
- Links: /hoodies/graphic-hoodies-for-women/, /hoodies/oversized-hoodies/, /hoodies/; guides cozy-hoodies, hoodie-sizing, thick-hoodies, baggy-hoodies, how-to-wash-graphic-tees, black-cropped-hoodie, gym-hoodies-for-women, best-hoodies-for-men. Drafts best-oversized-hoodies and best-heavyweight-hoodies not linked until live.
- `npx astro build` passes (137 pages; drafts are not built).
## Log
- 2026-11-11 UTC writer: drafted, build passes.
- 2026-11-12 14:30 UTC director: APPROVED, held as draft for Nov 13 with #1034 (cute hoodies for women 8,100 / KD 12, unowned). Fixed: R12.1 price lines: classic pullovers $39.99 through Nov 30 then $44.99, oversized $54.99 then $59.99, in answer, picks, cost section and FAQ (it implied $39.99 holds past Dec 1); awkward 'Oops. Anyway. It comes in' line; noted Plot Twist Navy to 5XL. All 5 picks ACTIVE and 200; A-grade by eye (Sam-approved bookish/cat lines).
- 2026-11-13 14:25 UTC director: LIVE (draft line removed, held approval re-checked: no newer rule since Nov 12 applies). Nov 13 articles: 2 of 2; astro build 141 pages.
