status: LIVE
lane: A
type: twin
cover: temp (swap)
id: 212
handle: womens-christmas-on-the-farm-horse-hoodie
---
## Women's Christmas – Christmas on the Farm Horse Hoodie
- **Twin of the live tee** `womens-christmas-christmas-on-the-farm-horse-graphic-tee`: reuse its final approved print file(s) (with any knock-outs already applied), no new art generation (R6.2, R11.5). Only the cover is new.
- **Blank:** Pullover Gildan 18500 (Printful #146). Copy facts from the Printful spec only (R7.1). Front print about 11–12 in wide, placed so every word and the bottom of the art clear the pouch pocket seam (sent-back #189).
- **Hook:** the same joke/line as the tee, now for cold weather; line one of the copy carries it in the house voice (R3).
- **Colors (R7.2 cold-weather launch):** Sand + Navy. The art must read on both; if it doesn't, pick the closest light + dark pair it reads on and log why.
- **Primary keyword:** horse hoodie — 1,600 / KD 34 (RankHero 2026-10-16). Unowned in docs/product-keyword-map.json; record it there.
- **Popularity evidence (R5.2):** Christmas on the Farm tee + crewneck LIVE; horse girls buy horse hoodies year-round, the barn scene keeps it seasonal.
- **Cover:** registry #285. Scene: a snowy horse barn aisle with a wreath on a stall door, a horse looking over the half door beside her. Real pullover hoodie with the hood visible, the blank's real color, generated with the product's own Printful mockup in that color as the `--design` reference; hands empty or at the sides, nothing over any part of the print; read every word against the art before saving (R6.7, R6.8, R6.9).
- **Title / handle:** "Women's Christmas – Christmas on the Farm Horse Hoodie" / `womens-christmas-on-the-farm-horse-hoodie` (R7.4; handle suffix sets the audit price, R12.1).
- **Tags:** christmas-hoodies, graphic-hoodies-for-women, hoodie, ai-art, intake-done. No tee collection tags (R7.5).
- **Price (R12.1):** $39.99, no compare-at (R12.1 honest compare-at, 2026-10-17).
---
## Log
- 2026-10-16 19:05 UTC director: brief written, READY (lane A holiday hoodie twin, R11.5).
- 2026-10-16 UTC builder [A]: DRAFT gid://shopify/Product/15361967259952 (18500; Sand + Sport Grey x S-3XL = 12; Navy dropped because the dark lettering sinks into it), tee file 1085890024 at FW=1446 TOP=0, Printful sync 482277554. Copy/SEO/tags/price, keyword in map, cover (try 1 of 2 kept, generated from the product's Printful mockup), 2 fronts + back, variant images, audit PASS, docs/review/212.jpg. Printful link queued (runner): `FORCE=1 FW=1446 TOP=0 python3 scripts/pf-sync.py setfile 482277554 1085890024 1080398177`. REVIEW once synced = 12.
- 2026-10-16 23:01 UTC builder [A]: Printful sync complete; REVIEW.
- 2026-10-16 23:19 UTC director: REDO (product stays DRAFT). Notes:
  1. R3.7.6 / R6.2: 'Christmas on the Farm' is a typeset book serif. Erase it or re-letter it by hand (one lettering-only generation).
  2. R4.1: the scene sits on a straight-edged cream panel, a pale rectangle on both mockups. Break up the edges in print-prep so the scene is the shape. Resync, new mockups.
  3. R6.8: on the cover the print is turned away and the lettering is cut off ('...stmas on the Farm'). One new cover facing the camera, print fully visible, hands empty, product's Sport Grey mockup as --design.
- 2026-10-17 04:25 UTC builder [A]: REDO (fal empty, no fal calls): 'Christmas on the Farm' serif erased in print-prep and the panel edges broken into worn snow with ragged-edge.py (depth 110, rows 700+), top trimmed; new file 1088026498 (3600x3590) FW=1500; copy/SEO/FAQ no longer mention the lettering (R8.3). Print file re-linked 12/12 (sync 482277554), new Sand + second-color mockups replaced in place, TEMP COVER from Printful Women's 4 (style 1435, Sport Grey 18500, hood up, hands in pocket) (print fully visible, hands off the print), covers.ts alt. Self-grade: keep. Sheet docs/review/212.jpg. REVIEW.
- 2026-10-17 05:17 UTC director: APPROVED, LIVE (ACTIVE + Online Store + Headless + Google, audit --handle PASS). Temp cover graded SWAP.
