status: REVIEW
lane: A
type: twin
cover: temp
id: 211
handle: womens-christmas-golden-retriever-christmas-hoodie
---
## Women's Christmas – Golden Retriever Christmas Hoodie
- **Twin of the live tee** `womens-christmas-golden-retriever-christmas-graphic-tee`: reuse its final approved print file(s) (with any knock-outs already applied), no new art generation (R6.2, R11.5). Only the cover is new.
- **Blank:** Pullover Gildan 18500 (Printful #146). Copy facts from the Printful spec only (R7.1). Front print about 11–12 in wide, placed so every word and the bottom of the art clear the pouch pocket seam (sent-back #189).
- **Hook:** the same joke/line as the tee, now for cold weather; line one of the copy carries it in the house voice (R3).
- **Colors (R7.2 cold-weather launch):** Sand + Navy. The art must read on both; if it doesn't, pick the closest light + dark pair it reads on and log why.
- **Primary keyword:** dog hoodie — 18,100 / KD 44 (R2.2 KD 36–50 band: the dog-lover gift niche has depth; #202 owns dog christmas hoodie, a different phrase) (RankHero 2026-10-16). Unowned in docs/product-keyword-map.json; record it there.
- **Popularity evidence (R5.2):** Golden Retriever tee + crewneck LIVE (golden retriever sweatshirt 1,300/38 owned by the crewneck).
- **Cover:** registry #284. Scene: a snowy front yard with a wreathed door, a real golden retriever sitting at her side. Real pullover hoodie with the hood visible, the blank's real color, generated with the product's own Printful mockup in that color as the `--design` reference; hands empty or at the sides, nothing over any part of the print; read every word against the art before saving (R6.7, R6.8, R6.9).
- **Title / handle:** "Women's Christmas – Golden Retriever Christmas Hoodie" / `womens-christmas-golden-retriever-christmas-hoodie` (R7.4; handle suffix sets the audit price, R12.1).
- **Tags:** christmas-hoodies, graphic-hoodies-for-women, hoodie, ai-art, intake-done. No tee collection tags (R7.5).
- **Price (R12.1):** $39.99, no compare-at (R12.1 honest compare-at, 2026-10-17).
---
## Log
- 2026-10-16 19:05 UTC director: brief written, READY (lane A holiday hoodie twin, R11.5).
- 2026-10-16 UTC builder [A]: DRAFT gid://shopify/Product/15361966735664 (18500; Sand + Sport Grey x S-3XL = 12; Navy dropped because the dark lettering sinks into it), tee file 1085871853 at FW=1307 TOP=0, Printful sync 482277467. Copy/SEO/tags/price, keyword in map, cover (try 1 of 2 kept, generated from the product's Printful mockup), 2 fronts + back, variant images, audit PASS, docs/review/211.jpg. Printful link queued (runner): `FORCE=1 FW=1307 TOP=0 python3 scripts/pf-sync.py setfile 482277467 1085871853 1080398177`. REVIEW once synced = 12.
- 2026-10-16 22:54 UTC builder [A]: Printful sync complete; REVIEW.
- 2026-10-16 23:19 UTC director: REDO (product stays DRAFT). Notes:
  1. R3.7.6 / R6.2: 'Merry Christmas' is a typeset book serif. Erase it in print-prep or re-letter by hand (one lettering-only generation).
  2. R4.1: the cream snow ground ends in a straight-edged rectangle, a pale block on both Sand and Sport Grey mockups. Break the bottom and side edges up into worn texture (or crop the ground) in print-prep so the scene is the shape. Resync, new mockups.
  3. R6.8: one new cover after the art change (the dog beside her is fine).
- 2026-10-17 04:25 UTC builder [A]: REDO (fal empty, no fal calls): 'Merry Christmas' serif erased in print-prep (52 components) and the cream ground's bottom edge broken into worn snow with ragged-edge.py (depth 110, rows 3000+), top trimmed; new file 1088026484 (3600x4020) FW=1432; copy/SEO/FAQ no longer mention the lettering (R8.3). Print file re-linked 12/12 (sync 482277467), new Sand + second-color mockups replaced in place, TEMP COVER from Printful Women's Lifestyle (style 1421, Sand 18500, hood visible, hands in pocket) (print fully visible, hands off the print), covers.ts alt. Self-grade: keep. Sheet docs/review/211.jpg. REVIEW.
