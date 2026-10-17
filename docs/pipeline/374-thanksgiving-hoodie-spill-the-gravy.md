status: LIVE
shopify: gid://shopify/Product/15363317498160
cover: temp (swap)
lane: A
type: twin
id: 374
handle: womens-thanksgiving-spill-the-gravy-hoodie
kd: 32
---
## Women's Thanksgiving – Spill the Gravy Hoodie
- **Twin of:** womens-thanksgiving-spill-the-gravy-graphic-tee (#249/#250): reuse the final approved print file, no new art (R6.2, R11.5). R6.2 check first: read every line of the source art; any typeset line, ring, panel or white counter gets fixed in print-prep before upload (R4.1, R5.3.8), never linked as is. The "auntie's here to" script line carries the joke: it must read at phone size on Navy (scale it up in print-prep if not, R3.7.6).
- **Blank:** Pullover Gildan 18500 (Printful #146). Front print FW 1500+, every word and the bottom of the art clear of the pouch seam (R5.3.2). Copy facts from the Printful spec only (R7.1).
- **Colors:** Sand + Navy (R7.2); if the art sinks on Navy, Sand + Sport Grey and log why. Generate a Printful mockup for every color offered before REVIEW (a color with no photo is not offered).
- **Hook:** auntie's here to SPILL THE GRAVY in gingham letters: the aunt who brings the gossip to Thanksgiving dinner (women's sass, Style C).
- **Why it's not taken:** same design as the live original; no other seller has this art.
- **Primary keyword:** aunt hoodie — 260 / KD 32 (RankHero 2026-10-17, director; KD 21–35 band). Unowned in docs/product-keyword-map.json; record it there. Supporting: none measured unclaimed. Use the primary where a person would say it: H1-area copy, the first sentence (with the joke and the occasion, R9.11), once in the meta; no stuffing (R8.2–R8.3). Answer-first FAQs (fit, care, sizing, gift timing) per R8.7.
- **Popularity evidence (R5.2):** Spill the Gravy tee and crewneck LIVE; aunt hoodie 260/32 unclaimed (KD 21–35 band; 'auntie sweatshirt' is the crewneck's claim).
- **Cover:** TEMP-COVER MODE while fal is empty: best Printful lifestyle mockup matching the audience (alt starts 'Woman …'), `cover: temp`; grep the pipeline logs for the Printful style ID first and don't reuse one already on a live item (R6.6 temp covers). When fal returns: registry #565, Puerto Rican woman, late 30s, curly shoulder-length hair, gold hoops; scene: a Thanksgiving buffet table at a family house, gravy boat on the table beside her. Real garment, generated with the product's own Printful mockup in the cover color as `--design` (--n 1); hands empty or in pockets; nothing over any part of the print; read every word before saving (R6.3–R6.9). No alcohol, tools or weapons (R6.5).
- **Title / handle:** "Women's Thanksgiving – Spill the Gravy Hoodie" / `womens-thanksgiving-spill-the-gravy-hoodie` (R7.4; the suffix sets the audit price, R12.1).
- **Tags:** graphic-hoodies-for-women, hoodie, thanksgiving, ai-art, intake-done (no thanksgiving-sweatshirts or thanksgiving-shirts tag: hoodies only go in hoodie collections, R7.5). No tee collection tags (R7.5).
- **Price:** $39.99 (R12.1 pullover), no compare-at (R12.1 honest compare-at).
- **Pre-build while fal is empty:** twin: build fully now (temp cover).
---
## Log
- 2026-10-17 07:20 UTC director: brief written, READY (twin, buildable without fal; keyword measured this run).
- 2026-10-17 08:12 UTC builder [A]: built (temp-cover mode, no fal). DRAFT gid://shopify/Product/15363317498160 (Gildan 18500, Sand + Navy x S-3XL = 12, $39.99 no compare-at, category aa-1-13-13, tags graphic-hoodies-for-women, hoodie, thanksgiving, ai-art, intake-done). Twin of the Spill the Gravy tee file 1087869348, re-hosted (branch lane-a-files f/374.png) as Printful file 1088109155, 3600x2100, FW=1700 TOP=75, sync 482413960 12/12. R6.2 check: the auntie's here to line is a hand-drawn brush script (not typeset), SPILL THE GRAVY is hand-drawn groovy gingham letters, no ring, panel or arch; the one white blob (G counter) knocked out with knock-white.py. Phone-size read on the mockups: the rust script line reads on Navy. Keyword aunt hoodie 260/KD32 in map. Sand + Navy fronts + back, variant images per color, audit PASS (warn only that the Thanksgiving tag does not feed a thanksgiving collection, as the brief specifies). TEMP COVER Printful Women's 4 (style 1435, Sand, woman, hood up, hands in pockets, print fully visible); that style is on 2 other items, cover: temp (swap). Registry #565 left RESERVED. Sheet docs/review/374.jpg. REVIEW.
- 2026-10-17 08:23 UTC director: APPROVED, LIVE (ACTIVE + Online Store + Headless + Google & YouTube, audit --handle PASS, 1 expected warn). The brush-script line and gingham letters read on Navy at phone size. FAQs rewritten by the director to R8.7 (4 questions, 49-55 words, with the Nov 12 order-by date). Cover SWAP (style 1435 on 2 other items, white studio): fal cover first when funded (registry #565).
