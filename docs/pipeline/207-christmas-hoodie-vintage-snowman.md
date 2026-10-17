status: LIVE
lane: A
type: twin
cover: swap
id: 207
handle: womens-christmas-vintage-snowman-hoodie
---
## Women's Christmas – Vintage Snowman Hoodie
- **Twin of the live tee** `womens-christmas-vintage-snowman-graphic-tee`: reuse its final approved print file (with any knock-outs already applied), no new art generation (R6.2, R11.5). Only the cover is new.
- **Blank:** Pullover Gildan 18500 (Printful #146). Copy facts from the Printful spec only (R7.1). Front print about 11–12 in wide, placed so every word and the bottom of the art clear the pouch pocket seam (sent-back #189).
- **Hook:** the same joke as the tee, now for cold weather; line one of the copy carries it in the house voice (R3).
- **Colors (R7.2 cold-weather launch):** Sand + Navy. The art must read on both; if dark linework sinks into Navy, pick the closest light + dark pair it reads on and log why.
- **Primary keyword:** snowman hoodie — 260 / KD 40 (2,446 competing) (RankHero 2026-10-16). Unowned in docs/product-keyword-map.json; record it there.
- **Popularity evidence (R5.2):** Vintage Snowman tee + crewneck are LIVE. christmas hoodie 9,900 / KD 52 is the collection head (R11.5).
- **Cover:** registry 2070. Scene: a snowy small-town main street with wreaths on lampposts, shopping bags at her side. Real pullover hoodie with the hood visible, art flattened onto the garment color before --design, nothing over the print (R6.7, R6.8 hoodie-cover line).
- **Title / handle:** "Women's Christmas – Vintage Snowman Hoodie" / `womens-christmas-vintage-snowman-hoodie` (R7.4).
- **Tags:** christmas-hoodies, hoodie, ai-art, intake-done. No tee collection tags (R7.5).
- **Price (R12.1):** $39.99, compare-at $44.99.
---
## Log
- 2026-10-16 17:20 UTC director: brief written, READY (lane A Christmas hoodie twins, R11.5).
- 2026-10-16 UTC builder [A]: DRAFT gid://shopify/Product/15361822654768 (18500; Sand + Navy x S-3XL = 12), tee file 1083079179 at 8.6 in wide / 10.7 in tall at the top of the area (FW=1292 TOP=0), Printful sync 482262647. Copy/SEO/tags/price, snowman hoodie 260/KD40 in map, cover #278 (try 2 kept: try 1 had a lighter panel behind the print; the art is now flattened on a darker navy 26,34,62), 2 fronts + back, variant images, audit PASS, docs/review/207.jpg. Printful link queued (runner): `FORCE=1 FW=1292 TOP=0 python3 scripts/pf-sync.py setfile 482262647 1083079179 1080398177`. REVIEW once synced = 12.
- 2026-10-16 22:54 UTC builder [A]: Printful sync complete; REVIEW.
- 2026-10-16 23:19 UTC director: REDO (product stays DRAFT). Notes:
  1. R3.7.6 / R5.3.8: the small 'SNOW DAY' is typeset serif caps in black; on Navy it disappears completely. Erase it in print-prep (the snowman stands alone), check on Sand and Navy at 200%, re-upload, resync, new mockups.
  2. R6.8 / R6.9: one new cover so it matches the print (Navy mockup as --design).
  3. R8.3: copy and meta describe only the new print.
- 2026-10-17 04:10 UTC builder [A]: REDO (fal empty, no fal calls): (1) SNOW DAY erased in print-prep (component erase, hat untouched; checked on Navy and Sand mockups; phone-size read: nothing left to read, snowman stands alone); new file 1088019986 (3600x4455, hosted on branch lane-a-files), re-linked all 12 variants FW=1292 TOP=0 (sync 482262647, 12/12); (2) new Sand + Navy mockups replaced in place (fileUpdate, variant links kept); (3) copy: dropped 'SNOW DAY curved by his hat' from Story (R8.3), SEO already clean; (4) TEMP COVER: Printful Women's 4 (style 1435, Navy 18500, hood up, print fully visible, hands off the print) -> public/covers, covers.ts alt. Self-grade: keep. Sheet docs/review/207.jpg. REVIEW.
- 2026-10-17 04:13 UTC director: LIVE (audit --handle PASS 0 warn). SNOW DAY erase checked on the sheet: snowman stands alone, clean on Navy and Sand. Temp cover graded SWAP (white catalog sweep, print small on the chest; looks plain next to the scene covers): Seedream cover when fal returns (R6.9, Navy mockup as --design). SEO title dropped 'Snow Day' (the words are off the print, R8.3); added graphic-hoodies-for-women (R7.5); alt starts 'Woman'. FW 1292 accepted: tall art is capped by the pouch seam and has no lettering.
