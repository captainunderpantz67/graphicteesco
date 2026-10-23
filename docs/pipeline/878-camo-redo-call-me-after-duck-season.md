status: LIVE
lane: B
type: redo
id: 878
handle: mens-hunting-call-me-after-duck-season-camo-sweatshirt
kd: 34
push: camo
---
## Camo redo: mens-hunting-call-me-after-duck-season-camo-sweatshirt
- **Why now:** Sam's camo order (R11.13 step 3: redo the live camo products that fail the camo standard, before new camo designs). Director graded docs/review/305.jpg on 2026-10-21 09:45 UTC: fails the patch standard (multi-ink earth-tone art with distress and thin or hand-drawn lettering straight on the camo; on the mockups the words go muddy at phone size). #840-#845 and #865-#870 took the first 12; this is the remaining batch.
- **Product:** the existing `mens-hunting-call-me-after-duck-season-camo-sweatshirt` (pipeline #305), AOP camo sweatshirt (Printful #1418), redone IN PLACE: same handle, URL, title keyword and collections; never unpublish (R1.4, R11.4). Stays ACTIVE during the redo. Primary keyword: mallard sweatshirt (320 / KD 34), keep.
- **Camo standard (R11.13, builder 7o):** the art inside ONE solid bone patch (blaze orange where the art is mostly bone) with a ~0.2 in dark outline; only the patch and the lettering sit on the camo. 2-3 solid inks (black + bone + blaze orange unless named below), no distress, halftone, gradients or earth tones. **$0 first:** re-ink the live art with designs/camo_patch.py (as #841-#845 did) when that gives a clean subject; one Recraft v4 flat redraw (--n 1, picture only) only when the re-ink cannot separate the subject from old lettering or the subject below needs new elements, at most 2 tries; if fal is empty and a redraw is needed, leave it READY with a log line (as #840).
- **Subject:** a mallard drake with a flip phone ringing on a stump beside him, ignored; flat black, bone, blaze. Niche cue test (R5.3.4): a hunter would not wince at anything, and the art agrees with the line (see #866's REDO).
- **Text on shirt:** CALL ME AFTER / DUCK SEASON. (keep: a restraint joke every hunter's family gets). DUCK SEASON. the widest line in blaze. Real fonts via scripts/compose-print.py, spelled exactly; log both line widths (builder 7h).
- **Size:** chest FW 1500+ (R5.3.2), patch top about 3 in below the collar, clear of the pouch.
- **Colors:** keep the colors it sells; every color's mockup read at phone size; drop only one that fails. ≤100 variants.
- **Copy:** Story design paragraph rewritten noun by noun against the new art (R8.3); if the line changed, update title design words, SEO title, meta and line one (keyword unchanged); gift line for Christmas (order by about Dec 8). Never write Mossy Oak or Realtree. Spoke tags (R11.14): camo-sweatshirts.
- **Cover:** plain Printful product shot (R6.11), printed front first, neck-logo back last (R6.13); front print only (R6.12). Add the handle to src/data/retired-covers.json if an AI cover shows the old print.
- **Before REVIEW:** GET /sync/products, every variant on the new file (R7.7, 'N/N on <id>'); docs/review/878.jpg with the two busiest color mockups; `node scripts/cohesion-audit.mjs --handle mens-hunting-call-me-after-duck-season-camo-sweatshirt` PASS.

---
## Log
- 2026-10-21 09:45 UTC director: brief written, READY (camo redo, lane B, push: camo; graded from docs/review/305.jpg).
- 2026-10-21 10:45 UTC [B]: NOT BUILT this run (AOP item). The live front panel is a flat 5037x6600 jpg; I confirmed the chest art can be recovered by differencing it against the plain pattern panel (designs/aop_extract.py), but the arched or overlapping lettering needs a Recraft redraw for 875, 878 and 884 and the fal wallet is exhausted, and the AOP sync/mockup path (b-aopgo.sh) was not run in this session. Stays READY.
- 2026-10-21 14:44 UTC [B]: BUILT IN PLACE (AOP sweatshirt #1418, one Recraft flat call $0.04, first try; the old arched lettering overlapped the drake). Art: a smug mallard drake beside a stump with a ringing flip phone on top, ignoring it, 3 inks (black, blaze orange, white) on ONE bone patch with ~0.2 in black outline (scripts/b-camo-lockup.py --top, PHR 0.72). Lettering CALL ME AFTER above, DUCK SEASON. below (the widest, the punch), Anton bone with dark keyline; widths (7h) 3384 / 3384 px = 100%. 7l: subject 3120 of 3400 px = 92%; type 1265 of 3853 px. Front panel = plain pattern panel 1087947657 with the lockup at 1500 px wide, top 1700 (scripts/b-aopredo.sh), file 1091163732; back 1087947726 and sleeves unchanged. R7.7: 11/11 on front 1091163732, back 1087947726 on 11/11 (2XS-6XL). New M mockups replace the old in place; phone-size read OK. Copy rewritten against the new art (rotary phone and arched reeds are gone: flip phone, stump), SEO meta updated, Dec 8 gift line; title unchanged (same line). Cohesion audit --handle PASS (0 warn). docs/review/878.jpg.
- 2026-10-21 15:45 UTC director: APPROVED on docs/review/878.jpg, held at REVIEW for the cap (product stays ACTIVE). Side by side with 493 Calm Face and 483 Sisyphus: drake ignoring a ringing flip phone, DUCK SEASON. the loudest line, 3 inks on one bone patch.
- 2026-10-23 14:50 UTC director: LIVE (bookkeeping): already ACTIVE on Shopify (redo in place, confirmed by Admin API today), approved earlier from its sheet. Not a new product, so outside the 6/day drip cap (R11.15).
