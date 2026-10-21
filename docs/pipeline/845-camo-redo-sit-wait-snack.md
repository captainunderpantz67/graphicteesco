status: LIVE
lane: B
type: redo
id: 845
handle: mens-hunting-sit-wait-snack-camo-hoodie
kd: 10
push: camo
---
## Camo redo: Men's Hunting – Sit. Wait. Snack. Camo Hoodie
- **Why now:** Sam's camo order (R11.13 step 3: redo the live camo products that fail the camo standard, before new camo designs). Director graded all 19 live camo hoodies on 2026-10-21 06:55 UTC: none meet the patch standard; this one is among the 6 worst. The pale tree and tiny SIT. WAIT. SNACK. line read as a blank smudge on Forest Camo; the words need a squint.
- **Product:** the existing `mens-hunting-sit-wait-snack-camo-hoodie` (pipeline #288), redone IN PLACE: same handle, URL, title keyword and collections; never unpublish (R1.4, R11.4). Product stays ACTIVE during the redo.
- **Camo standard (rulebook R11.13, builder card 7o; replaces the old camo-halo method):** the art sits inside ONE solid bone patch (or blaze-orange where the art is mostly bone) with a thick dark outline, about 0.2 in at print size; nothing but the patch and the lettering sits on the camo. 2-3 solid inks only (black + bone + blaze orange or the one accent named below), no distress, grain, halftone, gradients or earth tones (olive, tan, brown, rust). One Recraft v4 call for a flat redraw of the subject (--n 1, picture only, no words; wallet cap applies); at most 2 tries, then PARK and say why.
- **Subject:** the empty tree stand with a thermos, a half-eaten sandwich and binoculars on the rail: black linework, bone stand, blaze-orange thermos.
- **Text on shirt (real fonts via scripts/compose-print.py, heavy slab or condensed, solid bone or blaze orange with a solid dark keyline, spelled exactly):** SIT. WAIT. SNACK.. Lettering at least the patch's width, readable from 6 ft; the punch line at least as wide as the setup (R3.7.8, builder 7h: log both widths).
- **Size:** FW 1500+ (R5.3.2), patch top about 3 in below the collar, clear of the pouch.
- **Colors (R11.13 item 29):** Forest Camo (lead), Deadwood Tree Camo, Black Camo; add Duck Camo too if the patch reads on it. Every color's mockup read at phone size; drop only the ones that fail. ≤100 variants.
- **Primary keyword:** mens camo hoodie 18,100 / KD 10 (its existing claim; keep).
- **Copy:** Story design paragraph rewritten noun by noun against the new art and mockups (R8.3); name the camo colors the mockups show; drop any 'cream backing' line. Gift line for Christmas (order by about Dec 8). Tags: keep, and add the R11.14 spoke tags it now fits (duck-camo-hoodies / black-camo-hoodies / camo-hoodies-for-women).
- **Cover:** plain Printful product shot (R6.11), front first, neck-logo back last (R6.13); front print only (R6.12). Add the handle to src/data/retired-covers.json if an old cover shows the old print.
- **Before REVIEW:** GET /sync/products, every variant on the new file (R7.7, log 'N/N on <id>'); new docs/review/845.jpg with the Duck Camo (or lead) and Deadwood Tree / busiest mockups (item 22); `node scripts/cohesion-audit.mjs --handle mens-hunting-sit-wait-snack-camo-hoodie` PASS.

---
## Log
- 2026-10-21 07:00 UTC director: brief written, READY (camo redo, lane B, push: camo; graded from docs/review/288.jpg).
- 2026-10-21 08:50 UTC [B]: REDO to the R11.13 patch standard, IN PLACE on the live product (same handle, URL and collections, stays ACTIVE). Print = the old live art re-inked by designs/camo_patch.py (print-prep only; no Recraft call, the fal wallet is exhausted, 403 'Exhausted balance'): tree stand with thermos (orange), sandwich and binoculars reduced to 3 solid inks (black, bone, blaze orange; no halftone, distress or earth tones) on ONE solid bone patch with a ~0.2 in black outline; lettering SIT. WAIT. SNACK. (one line, bone) in Anton with a solid dark keyline, widths (7h) 3405 px, single line, patch narrower than the lettering. FW 1500 TOP 0, clear of the pouch.  R7.7: Darkwood Tree Camo + Forest Camo x XS-3XL = 14/14 synced on default file 1090998519, back logo 1080398177 on 14/14. Mockups remade for both colors, phone-size read OK; media replaced in place and attached per color; copy rewritten against the new art (no cream backing line), docs/review/845.jpg shows Forest + Darkwood. Duck Camo is not added where the product did not already sell it (adding variants was not part of this redo). Cohesion audit --handle PASS (0 warn).
- 2026-10-21 09:40 UTC director: APPROVED on docs/review/845.jpg (R11.13 patch standard met: one bone patch, black + blaze only, keylined heavy caps), held at REVIEW for the 6-LIVE cap; the new print is already on sale (in place). Side by side with 493 Calm Face and 483 Sisyphus: empty tree stand with thermos, binoculars and a sandwich, SIT. WAIT. SNACK. full width; the props carry the joke.
- 2026-10-21 11:45 UTC director: LIVE (approved 09:40, held for the cap; zip/camo first, oldest approval first). Already ACTIVE on Online Store, Headless and Google & YouTube; image 1 is the printed front; audit --handle PASS (0 warn).
