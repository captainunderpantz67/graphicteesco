---
status: LIVE
lane: W
type: article
cluster: tees
keyword: xmas gifts for him
volume: 14800
kd: 10
slug: xmas-gifts-for-him
---
## Xmas Gifts for Him: Funny Shirts for the Guy With a Hobby
- `draft: true`, `cluster: 'tees'` in src/data/guides.ts, appended at the end of allGuides. 5 pick groups (Sisyphus Had Bad Programming tee + hoodie; Fishing Is My Love Language hoodie; Sorry About Your Windshield hoodie; No, I Can't Just Take a Quick Look tee + hoodie; If You Can Step Over It, I Can Fill It tee + hoodie), 6 sections, 6 FAQs, roughly 1,300 words of page text.
- Keyword: "xmas gifts for him" 14,800 / KD 10 (RankHero keyword page, measured 2026-10-18 per docs/pipeline/623; Nov 74,000, Dec 90,500). NOT re-pulled this run (RankHero returned no data unattended). Editorial gift phrase, guide target only (R2.10). Unclaimed: the phrase was retargeted off mens-christmas-it-looked-smaller-at-the-farm-oversized-hoodie on 2026-10-18. Director: confirm the keyword.
- Angle: the husband, boyfriend, brother and dad guides use the Christmas-themed men's shirts. This guide is by hobby (gym, fishing, golf, cars, welding) so it shares no pick with them.
- Picks (all ACTIVE, every handle in src/data/fresh-designs.json, checked by the writer): mens-gym-sisyphus-had-bad-programming-graphic-tee and -hoodie, mens-fishing-love-language-hoodie, unisex-golf-sorry-about-your-windshield-hoodie, mens-mechanic-no-i-cant-just-take-a-quick-look-graphic-tee and -hoodie, mens-welder-if-you-can-step-over-it-graphic-tee and -hoodie. Art, colors, sizes, fabrics and prices from live Shopify Stories read 2026-11-26.
- Prices use the sibling form (sale through Nov 30, tees $29.99 and hoodies $44.99 from Dec 1) so price.ts reprices them; order-by Dec 4 sentences use the form the #1093 switch rewrites. Free shipping at $45 and the size exchange as in sibling guides.
- Links: /christmas-shirts-for-men/, /hoodies/, /hoodies/fishing-hoodies/, /hoodies/golf-hoodies/, /mens-gym-shirts/, /welder-shirts/, /shipping-returns/, guides gym-gifts-for-men, fishing-gifts-for-dad, funny-golf-gifts, gifts-for-mechanics, gifts-for-welders, cheap-christmas-gifts, christmas-gifts-for-husband, -boyfriend, -brother, -dad, white-elephant-gifts. FAQ questions are not from PAA/GSC.
- `npx astro build`: passes (166 pages; drafts are not built).
## Log
- 2026-11-26 UTC writer: drafted.
- 2026-11-26 23:50 UTC director: LIVE (draft line removed; article 1 of 2 for Nov 26 Chicago). Keyword confirmed: xmas gifts for him is unclaimed in collections.ts, guides.ts and the keyword map (editorial guide target, R2.10). Picks share none with the husband, boyfriend, brother and dad guides; all 8 picks render live. Dec 2 build: tees $29.99, hoodies $44.99, '$59.98' pair line correct, no price raised twice; Dec 6 build swaps both order-by lines. Every internal link builds.
