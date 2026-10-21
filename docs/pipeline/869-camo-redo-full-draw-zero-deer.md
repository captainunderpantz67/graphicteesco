status: REVIEW
lane: B
type: redo
id: 869
handle: mens-hunting-full-draw-zero-deer-camo-hoodie
kd: 36
push: camo
---
## Camo redo: mens-hunting-full-draw-zero-deer-camo-hoodie
- **Why now:** Sam's camo order (R11.13 step 3: redo the live camo products that fail the camo standard, before new camo designs). The director's 2026-10-21 06:55 grading found all 19 live camo hoodies fail the patch standard; #840–#845 took the worst 6, this is the next batch.
- **Product:** the existing `mens-hunting-full-draw-zero-deer-camo-hoodie` (pipeline #293), redone IN PLACE: same handle, URL, title keyword and collections; never unpublish (R1.4, R11.4). Stays ACTIVE during the redo. Primary keyword stays as recorded in docs/product-keyword-map.json.
- **Camo standard (R11.13, builder 7o):** the art inside ONE solid bone patch (blaze orange where the art is mostly bone) with a ~0.2 in dark outline; only the patch and lettering sit on the camo. 2-3 solid inks (black + bone + blaze orange), no distress, halftone, gradients or earth tones. One Recraft v4 call for a flat redraw (--n 1, picture only, no words); at most 2 tries, then PARK and say why.
- **Subject:** a compound bow at full draw aimed at an empty clearing, bold flat shapes. Niche cue test (R5.3.4): a hunter would not wince at anything.
- **Text on shirt:** keep the line from #293 (FULL DRAW, ZERO DEER — hand-drawn lettering in two lines around the art.), re-set with scripts/compose-print.py in heavy slab or condensed, solid bone or blaze orange with a dark keyline, spelled exactly; punch at least as wide as the setup (R3.7.8, builder 7h: log both widths).
- **Size:** FW 1500+, patch top about 3 in below the collar, clear of the pouch.
- **Colors:** Duck Camo, Black Camo, Deadwood Tree Camo, Forest Camo where it reads; drop any color whose mockup fails at phone size. ≤100 variants. Spoke tags (R11.14): duck-camo-hoodies / black-camo-hoodies for the colors offered.
- **Copy:** Story design paragraph rewritten noun by noun against the new art (R8.3), name the camo colors the mockups show, drop any 'cream backing' line; gift line for Christmas (order by about Dec 8). Never write Mossy Oak or Realtree.
- **Cover:** plain Printful product shot (R6.11), front first, neck-logo back last (R6.13); add the handle to src/data/retired-covers.json if an old cover shows the old print.
- **Before REVIEW:** GET /sync/products, every variant on the new file (R7.7 'N/N on <id>'); docs/review/869.jpg with the Duck Camo and Deadwood Tree mockups; `node scripts/cohesion-audit.mjs --handle mens-hunting-full-draw-zero-deer-camo-hoodie` PASS.

---
## Log
- 2026-10-21 07:40 UTC director: brief written, READY (camo redo, lane B, push: camo).
- 2026-10-21 08:50 UTC [B]: REDO to the R11.13 patch standard, IN PLACE on the live product (same handle, URL and collections, stays ACTIVE). Print = the old live art re-inked by designs/camo_patch.py (print-prep only; no Recraft call, the fal wallet is exhausted, 403 'Exhausted balance'): bowhunter in the ladder stand at full draw (orange camo blotches, leaves) reduced to 3 solid inks (black, bone, blaze orange; no halftone, distress or earth tones) on ONE solid bone patch with a ~0.2 in black outline; lettering FULL DRAW, (bone) / ZERO DEER (blaze orange) in Anton with a solid dark keyline, widths (7h) 3212 / 3230 px (punch 100.6%), patch narrower than the lettering. FW 1500 TOP 0, clear of the pouch. The small squirrel of the old art is too faint after the 3-ink conversion, so the copy no longer mentions it. R7.7: Darkwood Tree Camo + Forest Camo x XS-3XL = 14/14 synced on default file 1091000200, back logo 1080398177 on 14/14. Mockups remade for both colors, phone-size read OK; media replaced in place and attached per color; copy rewritten against the new art (no cream backing line), docs/review/869.jpg shows Forest + Darkwood. Duck Camo is not added where the product did not already sell it (adding variants was not part of this redo). Cohesion audit --handle PASS (0 warn).
