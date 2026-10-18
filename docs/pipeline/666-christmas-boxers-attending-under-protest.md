status: PARKED
lane: A
type: addon
id: 666
handle: mens-christmas-attending-under-protest-boxer-briefs
kd: 34
---
## Men's Christmas – Attending Under Protest Boxer Briefs
- **Gift add-on, build FIRST among add-ons (Sam 2026-10-18: funny boxers before socks, the best Christmas gift; docs/backlog/gift-addons.md).** Allowed during the quality reset: no new design, no new line, no fal. Source design: #471 / #569 (A grade; art from Printful file 1088449390, the grumpy reindeer). Pull the art layer from that Printful file, never regenerate it.
- **Blank:** Printful #428 All-Over Print Boxer Briefs (men's only at Printful). Copy facts (fabric, waistband, sizes, fit) from the Printful #428 spec only (R7.1). Confirm the base cost leaves at least $6 profit at $34.99 and log the number.
- **Layout:** a small repeat of the source art's main motif over the whole garment on a background color pulled from the art, and the line once, large, across the back seat panel (the waistband stays Printful's). Use Printful's #428 template so nothing lands on a seam or the pouch. Cheeky, never crude: nothing on the front pouch but the motif repeat.
- **Text (real fonts via scripts/compose-print.py, solid ink, spelled exactly; R3.7.8, R5.3.10):** ATTENDING / UNDER PROTEST in the source design's fonts and colors. Read it on the back-view mockup at phone size.
- **Hook:** The man who would rather be home than at the family Christmas party, now wearing it where nobody can see. A stocking-stuffer gag from his wife or kids; the matching socks are #665.
- **Lines considered (R3.1):** the A-grade line from the quality-reset grading; no new lines on add-ons. Checked for an unintended second meaning on underwear: none.
- **Why it's not taken:** funny boxer listings lean on photo-face prints, crude slogans and pun patterns; none carry this line.
- **Popularity (R5.2):** RankHero shows no listing sample for the boxer phrases (2026-10-18); demand is the measured search with a December peak, and the design's own A-grade proof from its pipeline file. Sam chose the product line.
- **Primary keyword:** funny boxers: 2,900 / KD 34 (RankHero 2026-10-18, competition 9,605, US 75%, December peak). Unowned (checked docs/product-keyword-map.json); record it with this handle when built.
- **Supporting:** none; the other three boxer phrases belong to #667–#669.
- **Copy:** line one = the joke + who gets it + when (R9.11), plainly, no superlative opener (R8.3). Primary in the SEO title, H1 subline, first sentence and once in the meta; at most 3 times. 300+ words in the SOP's three sections; 4–6 answer-first FAQs at 40–60 words: fabric, fit and sizing (Printful's size chart), washing, gift timing (Christmas order-by about Dec 8), and that it matches the Attending Under Protest shirt (link the source product). Underwear returns: say only what the store policy says (R12.2); if unsure, ask the director rather than promise a size exchange.
- **Cover:** the nicest Printful lifestyle mockup for #428 with a man (R6.3, R6.10 update); grep the pipeline logs for the style ID (R6.6). If none passes, the cleanest flat front and back mockups, logged.
- **Title / handle:** "Men's Christmas – Attending Under Protest Boxer Briefs" / `mens-christmas-attending-under-protest-boxer-briefs` (the -boxer-briefs suffix sets the audit kind and the $34.99 price).
- **Tags:** boxers, gift-addon, christmas, intake-done. Never a tee, sweatshirt or hoodie collection tag. /funny-boxers/ is built by the director when 3 are live.
- **Price:** $34.99, no compare-at.
- **Before REVIEW:** review sheet with the back view (`python3 scripts/review-sheet.py 666 <art> <cover> <front mockup> <back mockup>`); every variant on the new file id, logged (R7.7); `node scripts/cohesion-audit.mjs --handle mens-christmas-attending-under-protest-boxer-briefs` passes except "not active".
---
## Log
- 2026-10-18 director: brief written, READY (gift add-on, boxers first per Sam; source design A grade).
- 2026-10-18 23:25 UTC director: PARKED. Boxers are OFF (Sam 2026-10-18: AOP boxer cost leaves about $3 at a sellable price; docs/backlog/gift-addons.md). The Shopify product stays DRAFT and unpublished (never delete without Sam's yes, R1.3). Revisit only if Sam brings boxers back with a cheaper supplier.
