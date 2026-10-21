status: REVIEW
lane: E
type: new
id: 822
handle: womens-camo-blending-in-was-never-the-plan-aop-zip-hoodie
kd: 30
push: zip
---
## Women's Camo – Blending In Was Never the Plan. All-Over Print Zip Hoodie
- **Why now:** Sam's zip push, all-over-print zips (docs/backlog/zip-up-upgrade.md items 15-18, inbox 2026-10-21 02:40 UTC): counts toward the zip-up 40 and the camo 40. Lane C, push: zip.
- **Blank:** Printful #717 All-Over Print Recycled Unisex Zip Hoodie (cut-sew sublimation, 95% recycled polyester fleece, drop shoulder; copy facts only from the Printful spec, R7.1). Panels: front left/right, back, sleeves, hood, pocket. Handle ends -aop-zip-hoodie (the audit prices it, director 2026-10-21).
- **Pattern:** generic pink camo from assets/patterns (pink, blush, rose, cream blotches; no Realtree/Mossy Oak marks). Seamless tile at print resolution; align across the zipper and side seams; hood lining plain (item 17). Pattern art: one Recraft v4 call if no matching tile exists in assets/patterns, else $0.
- **Front:** small chest art on the left chest panel: a small doe silhouette with a bow, 3 thread colors (printed, not stitched; AOP is sublimation). **Back:** the joke large across the back panel over the pattern, on a solid backing shape cut to the words' outline only (no box, no badge, R4.1), sized at 80%+ of the back width; every word readable on the back mockup at phone size.
- **Text (spelled exactly):** BLENDING IN / WAS NEVER THE PLAN. (punch line at least as wide as the setup, the loudest line, R3.7.8). Set with scripts/compose-print.py, heavy face, solid ink, no pattern fill in letters (R5.3.10); log 7h widths.
- **Five lines considered (R3.13 side by side with "Wildly Low Maintenance", "Politely, No.", "I Only Golf for the Outfits"):** Blending In Was Never the Plan. · Camouflaged. Emotionally. · You Can See Me? Rude. · Hiding in Plain Pink. · Pretty Sure You Saw Me.. Kept the first. Pink camo is camo that refuses to hide; the wearer is in on it. Full sass, women's voice (R3.4).
- **Primary keyword:** pink camo zip up hoodie. RankHero shows no volume for it (sweep 2026-10-21 04:45 UTC); Sam's depth-40 decision (inbox 02:15 UTC) says fill with distinct angles once measured searches run out, so R2.9's no-measurement rule is waived for the zip-up and camo pages only. Unowned in docs/product-keyword-map.json; record it with this handle. Never claim the page head terms (zip up hoodie, camo hoodie).
- **Title / handle:** "Women's Camo – Blending In Was Never the Plan. All-Over Print Zip Hoodie" / `womens-camo-blending-in-was-never-the-plan-aop-zip-hoodie`.
- **Tags:** graphic-hoodies-for-women, hoodie, zip-up-hoodies, camo-hoodies, ai-art, intake-done.
- **Price:** $79.99 flat, NO compare-at (Printful base about $58.25, about $15 profit; Sam 2026-10-21).
- **Copy:** line one = the joke + who wears it + when (R9.11); answer-first FAQ includes "Is the all-over print hoodie cotton?" → No, recycled polyester fleece, sublimation printed edge to edge, so it will not crack or fade (item 18). Care, sizing (drop shoulder runs roomy), Christmas order-by about Dec 8, free size exchange. SEO title ≤ 60, meta ≤ 155.
- **R5.2 proof:** Sam's direct order (inbox 2026-10-21 02:40 UTC) stands in for the favorites gate; still log one same-theme listing with 500+ favorites if you find one.
**Cover (zip-up spec item 4 + 9, Sam 2026-10-21; overrides R6.11's flat-only fallback for zip-ups):** one AI lifestyle photo with the BACK print readable, person per the registry row below (claimed, never used). Setup: a woman walking down a gravel farm road toward a barn, back to camera, late afternoon. No over-the-shoulder look-back. Zip-ups zip at the FRONT; the back is plain fleece with our print, no seam or zip down the back or hood (R6.8). Hands, hair and props off every letter; read every word at 200%. One image per call (--n 1), at most 2 tries inside the $16/day fal cap; if both fail, use the Printful back mockup and log it. Then a front mockup (zip half-open over a tee) as image 2. **Photo order (R6.13 + zip spec):** back print first, then the front, then sleeve/hood detail, then one flat (AOP has one colorway).
- **Registry:** row 1007 (claimed): Mexican-American woman, early 20s, long dark hair in a high ponytail with a pink scrunchie, slim build.
- **Before REVIEW:** check every panel and seam on the Printful mockup (item 17); R7.7 file log; review sheet; `node scripts/cohesion-audit.mjs --handle womens-camo-blending-in-was-never-the-plan-aop-zip-hoodie` passes except "not active".

---
## Log
- 2026-10-21 05:00 UTC director: brief written, READY (AOP zip push; primary unmeasured under Sam's depth-40 waiver; registry row 1007 claimed).
- 2026-10-21 05:25 UTC director: one of Sam's 3 AOP pilots (pink camo). Build it next in lane C after the zip upgrades.
- 2026-10-21 07:10 UTC director: moved to lane E (inbox 2026-10-21 05:50: E builds the AOP pilots, Essentials and colorways; C keeps the zip upgrades).
- 2026-10-21 08:55 UTC builder [E]: REVIEW. DRAFT 15371716165936, Printful sync 483625538, 11 sizes 2XS-6XL at $79.99, no compare-at, files front 1090995228 / back 1090995231 / plain 1090995234 (panels 5250 x 6000). Pattern assets/patterns/pink-camo-src.png tiled seamless ($0); chest doe = 1 Recraft call ($0.04, doe with hair bow, cream + maroon keyline), placed on the wearer's left chest panel; back lockup set in Alfa Slab One, cream fill, maroon keyline + outline-cut backing: headline 3607 px / punch 4304 and 4303 px (punch 119%, split over two lines), 3000 px wide on the back panel = about 90% of the body width, centered high. R7.7: no light-blank file needed (one print colorway, cream on pink camo with maroon keyline). Mockups front + back read at 700 px (every word legible). **Cover: fal wallet exhausted again (storage 403 after the doe call), so no AI lifestyle photo: product shows the Printful back mockup first, handle added to retired-covers.json (registry row 1007 stays CLAIMED, unused).** Audit --admin-json PASS (1 warn: no lifestyle cover). Sheet docs/review/822.jpg. Keyword row under products (unmeasured, waiver). fal $0.04.
