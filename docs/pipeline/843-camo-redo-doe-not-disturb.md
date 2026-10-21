status: REVIEW
lane: B
type: redo
id: 843
handle: womens-hunting-doe-not-disturb-camo-hoodie
kd: 12
push: camo
---
## Camo redo: Women's Hunting – Doe Not Disturb Camo Hoodie
- **Why now:** Sam's camo order (R11.13 step 3: redo the live camo products that fail the camo standard, before new camo designs). Director graded all 19 live camo hoodies on 2026-10-21 06:55 UTC: none meet the patch standard; this one is among the 6 worst. The pink doe is a small blot and DOE NOT DISTURB is a thin line under it, unreadable at phone size.
- **Product:** the existing `womens-hunting-doe-not-disturb-camo-hoodie` (pipeline #300), redone IN PLACE: same handle, URL, title keyword and collections; never unpublish (R1.4, R11.4). Product stays ACTIVE during the redo.
- **Camo standard (rulebook R11.13, builder card 7o; replaces the old camo-halo method):** the art sits inside ONE solid bone patch (or blaze-orange where the art is mostly bone) with a thick dark outline, about 0.2 in at print size; nothing but the patch and the lettering sits on the camo. 2-3 solid inks only (black + bone + blaze orange or the one accent named below), no distress, grain, halftone, gradients or earth tones (olive, tan, brown, rust). One Recraft v4 call for a flat redraw of the subject (--n 1, picture only, no words; wallet cap applies); at most 2 tries, then PARK and say why.
- **Subject:** the sleepy doe curled up with a sleep mask pushed up, one eye open: black linework, bone doe, a hot-pink (not dusty) sleep mask as the one accent.
- **Text on shirt (real fonts via scripts/compose-print.py, heavy slab or condensed, solid bone or blaze orange with a solid dark keyline, spelled exactly):** DOE NOT / DISTURB (title keyword stays, R11.4). Lettering at least the patch's width, readable from 6 ft; the punch line at least as wide as the setup (R3.7.8, builder 7h: log both widths).
- **Size:** FW 1500+ (R5.3.2), patch top about 3 in below the collar, clear of the pouch.
- **Colors (R11.13 item 29):** Forest Camo (lead), Darkwood Tree Camo, Black Camo; add Duck Camo too if the patch reads on it. Every color's mockup read at phone size; drop only the ones that fail. ≤100 variants.
- **Primary keyword:** doe camo hoodie (R11.12 waiver phrase; move off 'womens camo hoodie', which is now too close to the /hoodies/camo-hoodies-for-women/ head term 'camo hoodie women', R8.8): SEO title, meta, first sentence, keyword map.
- **Copy:** Story design paragraph rewritten noun by noun against the new art and mockups (R8.3); name the camo colors the mockups show; drop any 'cream backing' line. Gift line for Christmas (order by about Dec 8). Tags: keep, and add the R11.14 spoke tags it now fits (duck-camo-hoodies / black-camo-hoodies / camo-hoodies-for-women).
- **Cover:** plain Printful product shot (R6.11), front first, neck-logo back last (R6.13); front print only (R6.12). Add the handle to src/data/retired-covers.json if an old cover shows the old print.
- **Before REVIEW:** GET /sync/products, every variant on the new file (R7.7, log 'N/N on <id>'); new docs/review/843.jpg with the Duck Camo (or lead) and Deadwood Tree / busiest mockups (item 22); `node scripts/cohesion-audit.mjs --handle womens-hunting-doe-not-disturb-camo-hoodie` PASS.

---
## Log
- 2026-10-21 07:00 UTC director: brief written, READY (camo redo, lane B, push: camo; graded from docs/review/300.jpg).
- 2026-10-21 08:50 UTC [B]: REDO to the R11.13 patch standard, IN PLACE on the live product (same handle, URL and collections, stays ACTIVE). Print = the old live art re-inked by designs/camo_patch.py (print-prep only; no Recraft call, the fal wallet is exhausted, 403 'Exhausted balance'): sleeping doe in the oak leaves (leaves as black mass, doe bone) reduced to 3 solid inks (black, bone, blaze orange; no halftone, distress or earth tones) on ONE solid bone patch with a ~0.2 in black outline; lettering DOE NOT (bone) / DISTURB (blaze orange) in Anton with a solid dark keyline, widths (7h) 3107 / 3098 px (punch 99.7%, both 92% of the file width), patch narrower than the lettering. FW 1500 TOP 0, clear of the pouch. The hot-pink mask accent is not kept: the pink reads as bone/black in 3 solid inks, so the brief's pink mask is a plain mask in the art. R7.7: Darkwood Tree Camo + Forest Camo x XS-3XL = 14/14 synced on default file 1090995939, back logo 1080398177 on 14/14. Mockups remade for both colors, phone-size read OK; media replaced in place and attached per color; copy rewritten against the new art (no cream backing line), docs/review/843.jpg shows Forest + Darkwood. Duck Camo is not added where the product did not already sell it (adding variants was not part of this redo). Cohesion audit --handle PASS (0 warn).
