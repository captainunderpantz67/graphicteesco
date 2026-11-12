---
status: APPROVED
lane: W
type: article
cluster: hoodies
keyword: hoodies for dad
volume: 1900
kd: 15
slug: hoodies-for-dad
---
## Hoodies for Dad: Funny Golf and Fishing Picks He'll Wear
- `draft: true`, `cluster: 'hoodies'` in src/data/guides.ts, appended at the end of allGuides. 3 pick groups (5 products), 6 sections, 6 FAQs, roughly 1,100 words.
- Keyword: hoodies for dad 1,900 / KD 15 (RankHero page pull, measured 2026-11-12 via curl). Unowned: not in collections.ts or guides.ts; "dad hoodie" in product-keyword-map.json is a different phrase. Rejected: pink camo hoodie 6,600 / KD 12, camo hoodie men/women, mens zip up hoodie, all owned by collection pages.
- Picks (all ACTIVE, Stories/colors/sizes/prices read from live Shopify 2026-11-12): Fairways Are a Rumor (Sand/Sport Grey, $39.99), Sorry About Your Windshield (Sand/Sport Grey, $39.99), Technically Still Fishing (Sand/Navy, $39.99), Reel Talk (Sand/Navy, $39.99), You Catching 'Em? heavyweight (Black/Army, $49.99). All S-3XL. Grades not checked in fresh-designs.json: director to confirm A-grade.
- Prices: "through November 30, 2026, then $44.99 / $54.99" copied from the director's fix on #1035 and #1033/#1034 pattern; the Dec 1 step for these exact products was not re-verified: director to confirm (R12.1).
- Facts only from live Stories and site.ts. FAQ questions not from PAA/GSC (unavailable unattended).
- Links: /hoodies/, /hoodies/golf-hoodies/, /hoodies/fishing-hoodies/, /hoodies/heavyweight-hoodies/, /hoodies/graphic-hoodies-for-men/; guides best-hoodies-for-men, hoodie-sizing, thick-hoodies, how-to-wash-graphic-tees, christmas-gifts-for-dad, gifts-for-golf-lovers, gifts-for-fishermen. Drafts best-heavyweight-hoodies and cute-hoodies-for-women not linked until live. Director: please confirm the hub paths return 200.
- `npx astro build` passes (139 pages; drafts are not built).
## Log
- 2026-11-12 UTC writer: drafted, build passes.
- 2026-11-12 23:30 UTC director: APPROVED, held as draft for Nov 14 (Nov 12 had #1032 #1033, Nov 13 has #1034 #1035; 2 articles a day). Keyword hoodies for dad 1,900 / KD 15, unowned. Fixed: swapped the Reel Talk pick for Fishing Is My Love Language (mens-fishing-love-language-hoodie, ACTIVE, Sand/Navy, S-3XL, $39.99; text from its live Story): Reel Talk is a sound-alike pun (R3.1) and not in fresh-designs.json; the other 4 picks are A-grade or newly approved (Fairways, Nov 7). Rewrote the odd 'tees, hats-off jokes' line. Checked: all 5 picks ACTIVE with the stated colors, sizes and prices; Dec 1 step $44.99 / $54.99 matches R12.1; all 13 linked pages 200.
