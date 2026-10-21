status: READY
lane: B
type: redo
id: 867
handle: mens-hunting-fake-friends-duck-camo-hoodie
kd: 24
push: camo
---
## Camo redo: mens-hunting-fake-friends-duck-camo-hoodie
- **Why now:** Sam's camo order (R11.13 step 3: redo the live camo products that fail the camo standard, before new camo designs). The director's 2026-10-21 06:55 grading found all 19 live camo hoodies fail the patch standard; #840–#845 took the worst 6, this is the next batch.
- **Product:** the existing `mens-hunting-fake-friends-duck-camo-hoodie` (pipeline #289), redone IN PLACE: same handle, URL, title keyword and collections; never unpublish (R1.4, R11.4). Stays ACTIVE during the redo. Primary keyword stays as recorded in docs/product-keyword-map.json.
- **Camo standard (R11.13, builder 7o):** the art inside ONE solid bone patch (blaze orange where the art is mostly bone) with a ~0.2 in dark outline; only the patch and lettering sit on the camo. 2-3 solid inks (black + bone + blaze orange), no distress, halftone, gradients or earth tones. One Recraft v4 call for a flat redraw (--n 1, picture only, no words); at most 2 tries, then PARK and say why.
- **Subject:** a mallard drake side-eyeing two wooden decoys, bold flat shapes. Niche cue test (R5.3.4): a hunter would not wince at anything.
- **Text on shirt:** keep the line from #289 (FAKE FRIENDS — hand-drawn vintage lettering in one arched line above the art.), re-set with scripts/compose-print.py in heavy slab or condensed, solid bone or blaze orange with a dark keyline, spelled exactly; punch at least as wide as the setup (R3.7.8, builder 7h: log both widths).
- **Size:** FW 1500+, patch top about 3 in below the collar, clear of the pouch.
- **Colors:** Duck Camo, Black Camo, Deadwood Tree Camo, Forest Camo where it reads; drop any color whose mockup fails at phone size. ≤100 variants. Spoke tags (R11.14): duck-camo-hoodies / black-camo-hoodies for the colors offered.
- **Copy:** Story design paragraph rewritten noun by noun against the new art (R8.3), name the camo colors the mockups show, drop any 'cream backing' line; gift line for Christmas (order by about Dec 8). Never write Mossy Oak or Realtree.
- **Cover:** plain Printful product shot (R6.11), front first, neck-logo back last (R6.13); add the handle to src/data/retired-covers.json if an old cover shows the old print.
- **Before REVIEW:** GET /sync/products, every variant on the new file (R7.7 'N/N on <id>'); docs/review/867.jpg with the Duck Camo and Deadwood Tree mockups; `node scripts/cohesion-audit.mjs --handle mens-hunting-fake-friends-duck-camo-hoodie` PASS.

---
## Log
- 2026-10-21 07:40 UTC director: brief written, READY (camo redo, lane B, push: camo).
