---
status: LIVE
lane: W
type: article
cluster: christmas
keyword: christmas gifts for couples
volume: 22200
kd: 10
slug: christmas-gifts-for-couples
---
## Christmas Gifts for Couples: Funny Shirts for Two
- `draft: true`, `cluster: 'christmas'` in src/data/guides.ts, appended at the end of allGuides. 5 pick groups (We Said No Gifts tee; Card Photo Survivor tee + crewneck; Resting My Eyes tee; Cat Allegedly tee; Light Show Manager crewneck), 7 sections, 6 FAQs, roughly 1,300 words.
- Keyword: "christmas gifts for couples" 22,200 / KD 10, from docs/product-keyword-map.json gaps_measured 2026-10-16 (RankHero), over 30 days old but under 90, NOT re-pulled this run (no RankHero key unattended; director please confirm). Editorial gift phrase, guide target only (R2.10). The map still lists it as a claim on unisex-christmas-we-said-no-gifts-graphic-tee; director please move the claim to this guide, as was done for husband, brother and wife.
- Picks (all ACTIVE, every handle in src/data/fresh-designs.json, checked by the writer): unisex-christmas-we-said-no-gifts-graphic-tee, unisex-christmas-card-photo-survivor-graphic-tee and -crewneck-sweatshirt, mens-christmas-resting-my-eyes-graphic-tee, womens-christmas-cat-allegedly-graphic-tee, unisex-christmas-light-show-manager-crewneck-sweatshirt. Art, colors, sizes and prices from live Shopify Stories read 2026-11-24. Cat Allegedly crewneck handle is set on the pick (womens-christmas-cat-allegedly-crewneck-sweatshirt, in fresh-designs.json) but its Story was not read; the text describes only the tee. Director: confirm it is live or the build drops it.
- Sale prices end Nov 30 (tees then $29.99, crewnecks $39.99). Director: after Nov 30 the text needs a price pass if still live. Order-by Dec 4, free shipping at $45 and the size exchange come from site.ts and sibling guides.
- Links: /christmas-shirts/, /christmas-shirts-for-men/, /hoodies/christmas-hoodies/, /shipping-returns/, guides christmas-gifts-for-husband, -wife, -boyfriend (draft), -girlfriend, white-elephant-gifts, cheap-christmas-gifts. Confirm each is live before approving. FAQ questions are not from PAA/GSC (unavailable unattended).
- `npx astro build`: passes (164 pages; drafts are not built).
## Log
- 2026-11-24 UTC writer: drafted.
- 2026-11-24 23:20 UTC director: LIVE (article 2 of 2, Nov 24 Chicago). All 7 picks ACTIVE (Cat Allegedly crewneck confirmed live) with matching prices, colors and sizes. Keyword 22,200 / KD 10 (RankHero 2026-10-16, under 90 days); claim moved off We Said No Gifts tee in the keyword map (it keeps couples christmas shirt). Date-proofed 4 lines the Dec build got wrong: "$24.99 pair ships free" (became "$29.99 pair"), "$49.98 through November 30" (stayed $49.98), the under-$50 FAQ (a pair is $59.98 after Dec 1, so it now says one tee is under $50), and "crewnecks to $39.99" (became $44.99). draft: line removed.
