status: REVIEW
cover: pending
lane: B
type: twin
id: 384
handle: womens-y2k-hot-mess-express-oversized-sweatshirt
kd: 58
---
## Women's Y2K – Hot Mess Express Oversized Sweatshirt
- **Twin of:** womens-y2k-hot-mess-express-graphic-tee (#129; zip #264): reuse the final approved print file, no new art (R6.2, R11.5). R6.2 check first: read every line of the source art; any typeset line, ring, panel or white counter gets fixed in print-prep before upload (R4.1, R5.3.8), never linked as is. Same chrome-letter white check as the zip hoodie (R5.3.8).
- **Blank:** Oversized sweatshirt Bella+Canvas 4711 (Printful #897), heavyweight fleece; copy facts (weight, fit) from the Printful spec only (R7.1). FW 1650. Copy facts from the Printful spec only (R7.1).
- **Colors:** Two launch colors from the blank's range, one light + one dark the art reads on (R7.2); log which. Generate a Printful mockup for every color offered before REVIEW (a color with no photo is not offered).
- **Hook:** HOT MESS EXPRESS over a pink steam train with butterflies and an iced coffee: the self-aware mess (women's sass).
- **Why it's not taken:** same design as the live original; no other seller has this art.
- **Primary keyword:** y2k sweatshirt — 1,000 / KD 58 (RankHero 2026-10-17, director; KD 36+ (see evidence for why it was briefed)). Unowned in docs/product-keyword-map.json; record it there. Supporting: none measured unclaimed. Use the primary where a person would say it: H1-area copy, the first sentence (with the joke and the occasion, R9.11), once in the meta; no stuffing (R8.2–R8.3). Answer-first FAQs (fit, care, sizing, gift timing) per R8.7.
- **Popularity evidence (R5.2):** Hot Mess Express tee and zip hoodie LIVE; oversized-sweatshirts has 2 products (thin-page guard); y2k sweatshirt 1,000/58 unclaimed (KD 36+ at 1,000: briefed for the thin-page guard).
- **Cover:** TEMP-COVER MODE while fal is empty: best Printful lifestyle mockup matching the audience (alt starts 'Woman …'), `cover: temp`; grep the pipeline logs for the Printful style ID first and don't reuse one already on a live item (R6.6 temp covers). When fal returns: registry #575, Black woman, mid 20s, long knotless braids, chunky sneakers; scene: a busy train platform with a coffee cart behind her. Real garment, generated with the product's own Printful mockup in the cover color as `--design` (--n 1); hands empty or in pockets; nothing over any part of the print; read every word before saving (R6.3–R6.9). No alcohol, tools or weapons (R6.5).
- **Title / handle:** "Women's Y2K – Hot Mess Express Oversized Sweatshirt" / `womens-y2k-hot-mess-express-oversized-sweatshirt` (R7.4; the suffix sets the audit price, R12.1).
- **Tags:** oversized-sweatshirts, heavyweight-sweatshirts, sweatshirt, ai-art, intake-done (heavyweight-sweatshirts holds the heavy oversized crewnecks; check the collections.ts copy still matches the blank weight). No tee collection tags (R7.5).
- **Price:** $49.99 (R12.1 oversized sweatshirt), no compare-at.
- **Pre-build while fal is empty:** twin: build fully now (temp cover).
---
## Log
- 2026-10-17 07:20 UTC director: brief written, READY (twin, buildable without fal; keyword measured this run).
- 2026-10-17 07:53 UTC builder [B]: built (temp-cover mode, no fal). DRAFT gid://shopify/Product/15363296330032 (Bella+Canvas 4711 #897, Dust + Navy x S-3XL = 12, $49.99 no compare-at, category aa-1-13-14, tags oversized-sweatshirts heavyweight-sweatshirts sweatshirt), print file 1087368545 (tee file reused, 3600x3814), FW=1650 TOP=0 (print 1748 px tall in a 2250x2700 area), sync 12/12. R6.2 check: hand-drawn chrome bubble letters with black outline, no typeset line, ring, panel or arch. Colors Dust + Navy (train's black parts and outline sink on Black). Keyword y2k sweatshirt 1,000/KD58 in map. Mockups Dust + Navy fronts + back, variant images attached, audit PASS except 'No lifestyle cover'. COVER: Printful has NO women's lifestyle style for blank #897 (only Men's Front/Back/Left/Right, Flat, Ghost, Folded), so a temp woman cover is impossible without breaking R6.3; set `cover: pending` and left covers.ts untouched. Needs the fal cover (registry #575) when fal returns, or the director's call on a ghost/flat cover. Sheet docs/review/384.jpg uses the Navy front as its cover tile. REVIEW.
