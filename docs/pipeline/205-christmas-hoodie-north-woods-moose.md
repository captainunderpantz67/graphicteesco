status: REDO
lane: A
type: twin
id: 205
handle: unisex-christmas-north-woods-moose-hoodie
---
## Unisex Christmas – North Woods Moose Hoodie
- **Twin of the live tee** `unisex-christmas-north-woods-moose-graphic-tee`: reuse its final approved print file (with any knock-outs already applied), no new art generation (R6.2, R11.5). Only the cover is new.
- **Blank:** Pullover Gildan 18500 (Printful #146). Copy facts from the Printful spec only (R7.1). Front print about 11–12 in wide, placed so every word and the bottom of the art clear the pouch pocket seam (sent-back #189).
- **Hook:** the same joke as the tee, now for cold weather; line one of the copy carries it in the house voice (R3).
- **Colors (R7.2 cold-weather launch):** Sand + Navy. The art must read on both; if dark linework sinks into Navy, pick the closest light + dark pair it reads on and log why.
- **Primary keyword:** moose hoodie — 590 / KD 28 (RankHero 2026-10-16). Unowned in docs/product-keyword-map.json; record it there.
- **Popularity evidence (R5.2):** North Woods Moose tee + crewneck are LIVE; moose/north-woods is a proven cabin gift theme. christmas hoodie 9,900 / KD 52 is the collection head (R11.5).
- **Cover:** registry 2050. Scene: a snowy lake cabin dock at dusk with a canoe flipped on the shore, mugs held at the side. Real pullover hoodie with the hood visible, art flattened onto the garment color before --design, nothing over the print (R6.7, R6.8 hoodie-cover line).
- **Title / handle:** "Unisex Christmas – North Woods Moose Hoodie" / `unisex-christmas-north-woods-moose-hoodie` (R7.4).
- **Tags:** graphic-hoodies-for-men, graphic-hoodies-for-women, christmas-hoodies, hoodie, ai-art, intake-done. No tee collection tags (R7.5).
- **Price (R12.1):** $39.99, no compare-at (R12.1 honest compare-at, 2026-10-17).
---
## Log
- 2026-10-16 17:20 UTC director: brief written, READY (lane A Christmas hoodie twins, R11.5).
- 2026-10-16 UTC builder [A]: DRAFT gid://shopify/Product/15361813414192 (18500; Sand + Navy x S-3XL = 12), tee file 1085864180 at 10 in wide / 10.1 in tall at the top of the area (FW=1500 TOP=0), Printful sync 482261698. Copy/SEO/tags/price, moose hoodie 590/KD28 in map, covers #275 + #276 pair, 2 fronts + back, variant images, audit PASS, docs/review/205.jpg. COVER NEEDS A LOOK: try 2 kept (try 1 dropped the lettering into the sky); the print is right on both hoodies, but the man's top shows no hood and the photo background echoes the print. Director: REDO if it fails R6.8 / the hoodie-cover line. Printful link queued (runner): `FORCE=1 FW=1500 TOP=0 python3 scripts/pf-sync.py setfile 482261698 1085864180 1080398177`. REVIEW once synced = 12.
- 2026-10-16 22:47 UTC builder [A]: Printful sync complete; REVIEW.
- 2026-10-16 23:19 UTC director: REDO (product stays DRAFT). Notes:
  1. R6.4 / R6.8 / R6.9: the cover background is a giant copy of the print (backdrop, not a place), and the man's top shows no hood. One new cover: a real north-woods scene (snowy cabin porch or pine trail), man and woman both in Navy pullover hoodies with visible hoods, hands empty, product's Navy mockup as --design.
  2. R3.7.6 / R6.2: NORTH WOODS CHRISTMAS is a condensed distressed font with even spacing. Re-letter it by hand (one Recraft lettering-only generation, composed in print-prep) and knock out the white highlights inside the letters on Navy (R5.3.8). Resync, new mockups.
