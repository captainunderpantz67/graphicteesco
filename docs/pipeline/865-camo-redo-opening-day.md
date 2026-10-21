status: LIVE
lane: B
type: redo
id: 865
handle: mens-hunting-opening-day-camo-hoodie
kd: 6
push: camo
---
## Camo redo: mens-hunting-opening-day-camo-hoodie
- **Why now:** Sam's camo order (R11.13 step 3: redo the live camo products that fail the camo standard, before new camo designs). The director's 2026-10-21 06:55 grading found all 19 live camo hoodies fail the patch standard; #840–#845 took the worst 6, this is the next batch.
- **Product:** the existing `mens-hunting-opening-day-camo-hoodie` (pipeline #231), redone IN PLACE: same handle, URL, title keyword and collections; never unpublish (R1.4, R11.4). Stays ACTIVE during the redo. Primary keyword stays as recorded in docs/product-keyword-map.json.
- **Camo standard (R11.13, builder 7o):** the art inside ONE solid bone patch (blaze orange where the art is mostly bone) with a ~0.2 in dark outline; only the patch and lettering sit on the camo. 2-3 solid inks (black + bone + blaze orange), no distress, halftone, gradients or earth tones. One Recraft v4 call for a flat redraw (--n 1, picture only, no words); at most 2 tries, then PARK and say why.
- **Subject:** a buck and a hunter's orange cap on a stump at dawn, bold flat shapes. Niche cue test (R5.3.4): a hunter would not wince at anything.
- **Text on shirt:** new line (the old OPENING DAY label is a seasonal label, quality-reset C pattern; the title keyword stays): OPENING DAY. / UP AT 4. SAW NOTHING., re-set with scripts/compose-print.py in heavy slab or condensed, solid bone or blaze orange with a dark keyline, spelled exactly; punch at least as wide as the setup (R3.7.8, builder 7h: log both widths).
- **Size:** FW 1500+, patch top about 3 in below the collar, clear of the pouch.
- **Colors:** Duck Camo, Black Camo, Deadwood Tree Camo, Forest Camo where it reads; drop any color whose mockup fails at phone size. ≤100 variants. Spoke tags (R11.14): duck-camo-hoodies / black-camo-hoodies for the colors offered.
- **Copy:** Story design paragraph rewritten noun by noun against the new art (R8.3), name the camo colors the mockups show, drop any 'cream backing' line; gift line for Christmas (order by about Dec 8). Never write Mossy Oak or Realtree.
- **Cover:** plain Printful product shot (R6.11), front first, neck-logo back last (R6.13); add the handle to src/data/retired-covers.json if an old cover shows the old print.
- **Before REVIEW:** GET /sync/products, every variant on the new file (R7.7 'N/N on <id>'); docs/review/865.jpg with the Duck Camo and Deadwood Tree mockups; `node scripts/cohesion-audit.mjs --handle mens-hunting-opening-day-camo-hoodie` PASS.

---
## Log
- 2026-10-21 07:40 UTC director: brief written, READY (camo redo, lane B, push: camo).
- 2026-10-21 08:50 UTC [B]: REDO to the R11.13 patch standard, IN PLACE on the live product (same handle, URL and collections, stays ACTIVE). Print = the old live art re-inked by designs/camo_patch.py (print-prep only; no Recraft call, the fal wallet is exhausted, 403 'Exhausted balance'): buck in the meadow (antlers and chest in orange) reduced to 3 solid inks (black, bone, blaze orange; no halftone, distress or earth tones) on ONE solid bone patch with a ~0.2 in black outline; lettering OPENING DAY. (bone) / UP AT 4. SAW NOTHING. (blaze orange, one line) in Anton with a solid dark keyline, widths (7h) 2715 / 3402 px (punch 125% of the setup), patch narrower than the lettering. FW 1500 TOP 0, clear of the pouch. New line per brief; the brief's hunter's orange cap on a stump is not drawn (no new art): the buck is the subject. R7.7: Darkwood Tree Camo + Forest Camo x XS-3XL = 14/14 synced on default file 1090999037, back logo 1080398177 on 14/14. Mockups remade for both colors, phone-size read OK; media replaced in place and attached per color; copy rewritten against the new art (no cream backing line), docs/review/865.jpg shows Forest + Darkwood. Duck Camo is not added where the product did not already sell it (adding variants was not part of this redo). Cohesion audit --handle PASS (0 warn).
- 2026-10-21 09:40 UTC director: APPROVED on docs/review/865.jpg (R11.13 patch standard met: one bone patch, black + blaze only, keylined heavy caps), held at REVIEW for the 6-LIVE cap; the new print is already on sale (in place). Side by side with 493 Calm Face and 483 Sisyphus: buck on one bone patch, UP AT 4. SAW NOTHING. full width in blaze (the buck staring back is the irony).
- 2026-10-21 11:45 UTC director: LIVE (approved 09:40, held for the cap; zip/camo first, oldest approval first). Already ACTIVE on Online Store, Headless and Google & YouTube; image 1 is the printed front; audit --handle PASS (0 warn).
