status: PARKED
lane: C
type: sweatpants
id: 711
handle: mens-gym-rack-your-weights-respectfully-sweatpants
kd: 18
---
**Sam's build order 2026-10-20 (docs/backlog/black-friday-bundles.md §2–3): matching sweatsuit sets. Lane C takes `type: sweatpants` items before its REDOs, one per run (builder card step 1).**
- **Blank:** Cotton Heritage M7580 Unisex Fleece Sweatpants, Printful #412 (base $29.98–31.98, XS–2XL, DTG). Copy facts from the Printful spec only.
- **Title:** Men's Gym – Rack Your Weights. Respectfully. Sweatpants. Handle mens-gym-rack-your-weights-respectfully-sweatpants. Shopify category: look up "Sweatpants" in the taxonomy (productSet `category`) and log the gid.
- **Pairs with:** #625 (mens-gym-rack-your-weights-respectfully-oversized-hoodie), LIVE, A grade. Same art and same words, re-laid for the leg. No new art, no fal ($0).
- **Print (front left leg only):** Printful area is 525 x 2175 px at 150 dpi (3.5 x 14.5 in). Take the hoodie's own print source (art + compose spec) and re-compose with scripts/compose-print.py: the words run down the leg, turned 90° to read bottom to top, in the hoodie's fonts and colors, filling the 3.5 in width (two lines side by side if the line has two parts); a small crop of the hoodie's art (about 3 in wide) sits above the words at the hip. Cap height of every line at least 1 in on the leg. No giant all-over leg print.
- **Text on the leg:** RACK YOUR WEIGHTS. / Respectfully.. Spelled exactly as on #625; the punch line is never the smallest line (R3.7.8).
- **Hook:** the same joke as #625, now as a set: hoodie + sweatpants for the lifter who re-racks everyone else's plates and says so politely.
- **Why it's not taken:** "graphic sweatpants" has only 951 competing listings (RankHero 2026-10-20) and "matching sweatsuit" 1,594; joke sweatpants that match a hoodie barely exist.
- **Proof gate (R5.2):** before building, log one same-format listing (graphic or slogan sweatpants, or a matching hoodie + sweatpants set) with 500+ favorites (RankHero or Etsy). None found: set PARKED with the searches you ran.
- **Colors (R7.2 launch pair):** Navy Blazer + Charcoal Heather (both dark: the hoodie's Navy file colors). Read every word on each color's mockup at phone size.
- **Primary keyword:** "gym sweatpants" 9,900 / KD 18 (1,957 competing listings), RankHero 2026-10-20. Use it in the SEO title, H1 subline, first sentence (with the joke and the occasion: lounging, the gym, cold mornings, Christmas morning) and once in the meta. Supporting, once each at most: "matching sweatsuit" (3,600 / 19), "sweatsuit set" (4,400 / 22). Do not use "graphic sweatpants": it is reserved for the /sweatpants/ collection page. Record in docs/product-keyword-map.json.
- **Copy (R8):** three h3 sections; line one = the joke + who wears it; say it matches the #625 hoodie and link that product. FAQ 4–6, 40–60 words each: fit (unisex jogger fit, size chart), fleece weight from the Printful spec, wash care, the free size exchange, Christmas order-by (about December 8), "Does it match the hoodie?" (same art and words, colors listed).
- **Cover:** plain Printful flat/product shot of the front leg (R6.11: no new covers); add the handle to src/data/retired-covers.json if needed.
- **Tags:** sweatpants, sweatsuit-sets, ai-art, intake-done. No tee, sweatshirt or hoodie collection tags (the audit errors on sweatpants in those grids).
- **Price (R12.1):** $44.99 on every variant, no compare-at (the audit knows -sweatpants).
- **Review sheet:** leg art, the front mockup on both colors, and #625's hoodie mockup as the last panel so the director sees the set.
---
## Log
- 2026-10-20 05:45 UTC builder [C]: PARKED at the R5.2 proof gate. No same-format listing with 500+ favorites could be logged: WebSearch "funny graphic sweatpants matching hoodie set Etsy" and "etsy listing sweatpants funny saying leg print sweatsuit matching hoodie" returned only Walmart, Brooks Brothers and J.Crew pages (no favorites counts); WebFetch of etsy.com search returned 403; RankHero listing grids are not public (R5.2). Needs the director or Sam to supply a 500+ favorites listing, or waive the gate.
- 2026-10-20 04:24 UTC director: brief written (Sam's sweatsuit-set order; leg area measured from Printful printfiles 412; keyword measured today).
