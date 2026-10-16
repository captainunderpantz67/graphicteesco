status: REDO
lane: A
type: twin
id: 210
handle: unisex-christmas-ski-lodge-hoodie
---
## Unisex Christmas – Ski Lodge Hoodie
- **Twin of the live tee** `unisex-christmas-christmas-ski-lodge-graphic-tee`: reuse its final approved print file(s) (with any knock-outs already applied), no new art generation (R6.2, R11.5). Only the cover is new.
- **Blank:** Pullover Gildan 18500 (Printful #146). Copy facts from the Printful spec only (R7.1). Front print about 11–12 in wide, placed so every word and the bottom of the art clear the pouch pocket seam (sent-back #189).
- **Hook:** the same joke/line as the tee, now for cold weather; line one of the copy carries it in the house voice (R3).
- **Colors (R7.2 cold-weather launch):** Sand + Navy. The art must read on both; if it doesn't, pick the closest light + dark pair it reads on and log why.
- **Primary keyword:** ski hoodie — 6,600 / KD 30 (RankHero 2026-10-16). Unowned in docs/product-keyword-map.json; record it there.
- **Popularity evidence (R5.2):** Ski Lodge tee + crewneck LIVE (ski sweatshirt 1,600/38 owned by the crewneck); retro ski art is a proven Etsy winter theme.
- **Cover:** registry #282 + #283 — man AND woman together, alt starts "Man and woman …" (R6.3). Scene: outside a snowy A-frame ski lodge at golden hour, skis propped in the snow beside them. Real pullover hoodie with the hood visible, the blank's real color, generated with the product's own Printful mockup in that color as the `--design` reference; hands empty or at the sides, nothing over any part of the print; read every word against the art before saving (R6.7, R6.8, R6.9).
- **Title / handle:** "Unisex Christmas – Ski Lodge Hoodie" / `unisex-christmas-ski-lodge-hoodie` (R7.4; handle suffix sets the audit price, R12.1).
- **Tags:** christmas-hoodies, graphic-hoodies-for-women, hoodie, ai-art, intake-done. No tee collection tags (R7.5).
- **Price (R12.1):** $39.99, compare-at $44.99.
---
## Log
- 2026-10-16 19:05 UTC director: brief written, READY (lane A holiday hoodie twin, R11.5).
- 2026-10-16 UTC builder [A]: DRAFT gid://shopify/Product/15361954054448 (18500; Sand + Navy x S-3XL = 12), tee file 1085848768 at FW=1401 TOP=0, Printful sync 482276514. Copy/SEO/tags/price, keyword in map, cover (unisex pair; 210: try 1 redrew the print and lost the skier, try 2 from the Printful mockup kept), 2 fronts + back, variant images, audit PASS, docs/review/210.jpg. Printful link queued (runner): `FORCE=1 FW=1401 TOP=0 python3 scripts/pf-sync.py setfile 482276514 1085848768 1080398177`. REVIEW once synced = 12.
- 2026-10-16 19:25 UTC builder [A]: Printful synced = variant count → REVIEW.
- 2026-10-16 21:13 UTC director: REDO.
  1. R5.3.8 letter fills: the O and D in SKI LODGE have solid cream counters, which read as white blobs on Navy (clear on the Navy mockup). Knock the counters of O and D (and any other closed letter) out of the Navy print file with scripts/knock-white.py, keep the snow scene's cream as is, re-upload and re-link the Navy variants (Sand can keep its file if it looks right there; check the same counters on Sand).
  2. R6.9: on the cover her hair falls across the print and hides most of SKI LODGE, and both prints are small and soft. Use your R6.9 extra attempt from the new Navy Printful mockup as `--design`: her hair behind the shoulders or tucked, the hood visible on both, every word of SKI LODGE readable on both shirts.
  3. Regenerate the Navy mockup + variant images after the file fix, then REVIEW.
