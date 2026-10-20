status: BUILDING [C] 2026-10-20 21:00
lane: C
type: sweatpants
id: 715
handle: unisex-national-park-the-view-better-be-worth-it-sweatpants
kd: 26
---
**Sam's build order 2026-10-20 (docs/backlog/black-friday-bundles.md §2–3): matching sweatsuit sets. Lane C takes `type: sweatpants` items before its REDOs, one per run (builder card step 1).**
- **Blank:** Cotton Heritage M7580 Unisex Fleece Sweatpants, Printful #412 (base $29.98–31.98, XS–2XL, DTG). Copy facts from the Printful spec only.
- **Title:** Unisex National Park – The View Better Be Worth It. Sweatpants. Handle unisex-national-park-the-view-better-be-worth-it-sweatpants. Shopify category: look up "Sweatpants" in the taxonomy (productSet `category`) and log the gid.
- **Pairs with:** #624 (unisex-national-park-switchbacks-build-character-heavyweight-hoodie), LIVE, A grade. Same art and same words, re-laid for the leg. No new art, no fal ($0).
- **Print (front left leg only):** Printful area is 525 x 2175 px at 150 dpi (3.5 x 14.5 in). Take the hoodie's own print source (art + compose spec) and re-compose with scripts/compose-print.py: the words run down the leg, turned 90° to read bottom to top, in the hoodie's fonts and colors, filling the 3.5 in width (two lines side by side if the line has two parts); a small crop of the hoodie's art (about 3 in wide) sits above the words at the hip. Cap height of every line at least 1 in on the leg. No giant all-over leg print.
- **Text on the leg:** THE VIEW BETTER / BE WORTH IT.. Spelled exactly as on #624; the punch line is never the smallest line (R3.7.8).
- **Hook:** the same joke as #624, now as a set: hoodie + sweatpants for the hiker complaining on every switchback and still going.
- **Why it's not taken:** "graphic sweatpants" has only 951 competing listings (RankHero 2026-10-20) and "matching sweatsuit" 1,594; joke sweatpants that match a hoodie barely exist.
- **Proof gate (R5.2):** before building, log one same-format listing (graphic or slogan sweatpants, or a matching hoodie + sweatpants set) with 500+ favorites (RankHero or Etsy). None found: set PARKED with the searches you ran.
- **Colors (R7.2 launch pair):** Military Green + Navy Blazer (both dark). Read every word on each color's mockup at phone size.
- **Primary keyword:** "vintage sweatpants" 1,600 / KD 26 (2,989 competing listings), RankHero 2026-10-20. Use it in the SEO title, H1 subline, first sentence (with the joke and the occasion: lounging, the gym, cold mornings, Christmas morning) and once in the meta. Supporting, once each at most: "matching sweatsuit" (3,600 / 19), "sweatsuit set" (4,400 / 22). Do not use "graphic sweatpants": it is reserved for the /sweatpants/ collection page. Record in docs/product-keyword-map.json.
- **Copy (R8):** three h3 sections; line one = the joke + who wears it; say it matches the #624 hoodie and link that product. FAQ 4–6, 40–60 words each: fit (unisex jogger fit, size chart), fleece weight from the Printful spec, wash care, the free size exchange, Christmas order-by (about December 8), "Does it match the hoodie?" (same art and words, colors listed).
- **Cover:** plain Printful flat/product shot of the front leg (R6.11: no new covers); add the handle to src/data/retired-covers.json if needed.
- **Tags:** sweatpants, sweatsuit-sets, ai-art, intake-done. No tee, sweatshirt or hoodie collection tags (the audit errors on sweatpants in those grids).
- **Price (R12.1):** $44.99 on every variant, no compare-at (the audit knows -sweatpants).
- **Review sheet:** leg art, the front mockup on both colors, and #624's hoodie mockup as the last panel so the director sees the set.
---
## Log
- 2026-10-20 05:45 UTC builder [C]: PARKED at the R5.2 proof gate. No same-format listing with 500+ favorites could be logged: WebSearch "funny graphic sweatpants matching hoodie set Etsy" and "etsy listing sweatpants funny saying leg print sweatsuit matching hoodie" returned only Walmart, Brooks Brothers and J.Crew pages (no favorites counts); WebFetch of etsy.com search returned 403; RankHero listing grids are not public (R5.2). Needs the director or Sam to supply a 500+ favorites listing, or waive the gate.
- 2026-10-20 04:24 UTC director: brief written (Sam's sweatsuit-set order; leg area measured from Printful printfiles 412; keyword measured today).
- 2026-10-20 13:00 UTC director: READY: R5.2 proof gate waived by the director. The gate guards fal spend on an unproven theme; this item reuses an A-grade live hoodie's approved art (fal $0), the format is Sam's own order (sweatsuit sets, inbox 2026-10-20, R1.1), and the measured sweatpants phrase carries a real competition count. Etsy blocks fetches and RankHero no longer shows listing grids (R5.2 2026-10-19 note), so no favorites number is reachable from a run. Build per the brief, ahead of lane C REDOs (one per run); plain Printful product shots, no cover.
