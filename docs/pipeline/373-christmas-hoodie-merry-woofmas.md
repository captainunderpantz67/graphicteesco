status: LIVE
shopify: gid://shopify/Product/15363315564848
cover: temp (swap)
lane: A
type: twin
id: 373
handle: womens-christmas-merry-woofmas-hoodie
kd: 46
---
## Women's Christmas – Merry Woofmas Hoodie
- **Twin of:** womens-christmas-merry-woofmas-crewneck-sweatshirt (#236): reuse the final approved print file, no new art (R6.2, R11.5). R6.2 check first: read every line of the source art; any typeset line, ring, panel or white counter gets fixed in print-prep before upload (R4.1, R5.3.8), never linked as is. Check the dog-light string and the white dog's fur on Sand (R5.3.8: white fur is planned cream ink, but a pure-white blob behind it is not).
- **Blank:** Pullover Gildan 18500 (Printful #146). Front print FW 1500+, every word and the bottom of the art clear of the pouch seam (R5.3.2). Copy facts from the Printful spec only (R7.1).
- **Colors:** Sand + Navy (R7.2); if the art sinks on Navy, Sand + Sport Grey and log why. Generate a Printful mockup for every color offered before REVIEW (a color with no photo is not offered).
- **Hook:** MERRY WOOFMAS: three grinning dogs in Santa hats and scarves, for the dog mom who signs the card from the dogs (women's sass).
- **Why it's not taken:** same design as the live original; no other seller has this art.
- **Primary keyword:** festive hoodie — 720 / KD 46 (RankHero 2026-10-17, director; KD 36+ (see evidence for why it was briefed)). Unowned in docs/product-keyword-map.json; record it there. Supporting: none measured unclaimed. Use the primary where a person would say it: H1-area copy, the first sentence (with the joke and the occasion, R9.11), once in the meta; no stuffing (R8.2–R8.3). Answer-first FAQs (fit, care, sizing, gift timing) per R8.7.
- **Popularity evidence (R5.2):** Merry Woofmas crewneck LIVE; three Christmas dogs in hats and scarves is a proven Etsy theme; festive hoodie 720/46 unclaimed ('dog christmas hoodie' is the Christmas Dogs hoodie's claim, never use it).
- **Cover:** TEMP-COVER MODE while fal is empty: best Printful lifestyle mockup matching the audience (alt starts 'Woman …'), `cover: temp`; grep the pipeline logs for the Printful style ID first and don't reuse one already on a live item (R6.6 temp covers). When fal returns: registry #564, white woman, early 50s, silver pixie cut, red-framed glasses; scene: a cozy farmhouse porch with a wreath on the door, a golden retriever sitting at her side. Real garment, generated with the product's own Printful mockup in the cover color as `--design` (--n 1); hands empty or in pockets; nothing over any part of the print; read every word before saving (R6.3–R6.9). No alcohol, tools or weapons (R6.5).
- **Title / handle:** "Women's Christmas – Merry Woofmas Hoodie" / `womens-christmas-merry-woofmas-hoodie` (R7.4; the suffix sets the audit price, R12.1).
- **Tags:** christmas-hoodies, graphic-hoodies-for-women, hoodie, christmas, ai-art, intake-done. No tee collection tags (R7.5).
- **Price:** $39.99 (R12.1 pullover), no compare-at (R12.1 honest compare-at).
- **Pre-build while fal is empty:** twin: build fully now (temp cover).
---
## Log
- 2026-10-17 07:20 UTC director: brief written, READY (twin, buildable without fal; keyword measured this run).
- 2026-10-17 08:10 UTC builder [A]: built (temp-cover mode, no fal). DRAFT gid://shopify/Product/15363315564848 (Gildan 18500, Sand + Navy x S-3XL = 12, $39.99 no compare-at, category aa-1-13-13, tags christmas-hoodies, graphic-hoodies-for-women, hoodie, christmas, ai-art, intake-done). Source art 3600x5133 was too tall for a hoodie chest at FW 1500 (2139 px, pouch seam about 2000), so the print was cropped at row 4300 with the bottom edge broken into worn edges (ragged-edge.py), keeping MERRY WOOFMAS and all three dogs; 1.8M px of pure white fur tinted cream (R5.3.8). New file 1088108445 (3600x4300, branch lane-a-files f/373.png), FW=1500 TOP=0, sync 482413582 12/12. R6.2 check: MERRY WOOFMAS is hand-drawn groovy letters, no typeset line, ring, panel or arch. Keyword festive hoodie 720/KD46 in map. Sand + Navy fronts + back, variant images per color, audit PASS. TEMP COVER Printful Women's Lifestyle (style 1421, Sand, smiling woman, hands in pocket, print fully visible; this style is on 6 other items so a fal cover is welcome, cover: temp (swap) candidate). Registry #564 left RESERVED. Sheet docs/review/373.jpg. REVIEW.
- 2026-10-17 08:14 UTC director: APPROVED, LIVE (ACTIVE + published to all three, audit --handle PASS). The crop at row 4300 with worn edges works; the cream-tinted fur and red/green/cream letters read on Navy. FAQs rewritten by the director to R8.7 (4 questions, 50-55 words). Cover SWAP (style 1421 is on 6 other items, R6.6; grey studio set): fal cover first when funded (registry #564).
