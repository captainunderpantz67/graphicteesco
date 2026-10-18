status: READY
lane: A
type: addon
id: 665
handle: mens-christmas-attending-under-protest-socks
kd: 38
---
## Men's Christmas – Attending Under Protest Socks
- **Gift add-on (docs/backlog/gift-addons.md, Sam approved 2026-10-18).** Allowed during the quality reset: no new design, no new line, no fal. Source design: #471 / #569 (A grade; art from Printful file 1088449390, the grumpy reindeer). Pull the art layer from that Printful file (or the lane's designs/ folder), never regenerate it.
- **Blank:** Printful #882 Sublimation Socks (all-over print, white base). Copy facts (material, sizes, cushioning) from the Printful #882 spec only (R7.1); never say compression, cotton or one size unless the spec says so. Confirm the Printful base cost leaves at least $6 profit at $18.99 and log the number.
- **Layout:** the grumpy reindeer as the leg motif, a small repeat of the same reindeer face on the foot. Lettering stays solid ink, read at phone size on the Printful mockup (R3.7.8, R5.3.10). Use Printful's #882 template for the leg and foot panels so nothing lands on the heel or toe seam. Light background (cream or a pale color pulled from the art) so the sublimation white base doesn't show as a blank band.
- **Text on socks (real fonts via scripts/compose-print.py, spelled exactly):** ATTENDING / UNDER PROTEST (the #471 lockup; the knit-stitch letters are art, so re-set the words in a heavy real font in the #471 colors if they do not read at sock size; solid ink, no pattern fill per R5.3.10).
- **Hook:** The dad at the family Christmas party who would rather be home. Wives and kids buy it as a stocking stuffer.
- **Lines considered (R3.1):** the line is the A-grade print already approved in the quality-reset grading; no new lines on add-ons.
- **Why it's not taken:** The christmas socks top 12 is stockings, knitting patterns and Fair Isle; no grumpy-reindeer joke.
- **Popularity (R5.2):** "Fair Isle Christmas socks with reindeer" (WoolMagicShop) 473 favorites in the christmas socks top 12, and "Mozzarella Sticks Funny Socks" (PyknicOfficial) 2,257 under funny socks (printed novelty sock format).
- **Primary keyword:** christmas socks: 165,000 / KD 38 (RankHero 2026-10-18, competition 71,085; Nov 2025 peak, US 55%, median Etsy price $17.99). KD 36+ is allowed here by its measured holiday surge (R2.5). If a /christmas-socks/ page is ever built it takes this head term and this product moves to mens christmas socks (R8.8).. Unowned (checked docs/product-keyword-map.json this run); record it with this handle when built.
- **Supporting:** mens christmas socks 5,400 / KD 14 and reindeer socks 590 / KD 28 (no competition count, so supporting only per R2.10; once each).
- **Copy:** line one = the joke + who wears it + when, plainly (R9.11): no superlative opener (R8.3). Primary keyword in the SEO title, H1 subline, first sentence and once in the meta; at most 3 times in all. 300+ words of real copy in the SOP's three sections; 4–6 answer-first FAQs at 40–60 words: what the socks are made of, sizes, washing (inside out, cold, no tumble-dry if the spec says so), gift timing with the order-by date (Christmas: about Dec 8), and that they match the Attending Under Protest shirt (link the source product). Never say we drew it.
- **Cover:** the nicest Printful lifestyle mockup for #882 (R6.10 update, Sam 2026-10-18: no AI covers). If a person shows, match the audience (R6.3) and grep the pipeline logs for the style ID (R6.6). If none passes, the cleanest flat mockup, logged.
- **Title / handle:** "Men's Christmas – Attending Under Protest Socks" / `mens-christmas-attending-under-protest-socks` (the -socks suffix sets the audit kind and the $18.99 price).
- **Tags:** socks, christmas, gift-addon, intake-done. Never a tee, sweatshirt or hoodie collection tag (the audit fails socks in garment grids). The /socks/ hub (funny socks 33,100 / KD 34) is built by the director when 3 socks are live.
- **Price:** $18.99, no compare-at (docs/backlog/gift-addons.md; the audit checks it).
- **Before REVIEW:** `python3 scripts/review-sheet.py 665 <art> <cover> <mockup>`; every variant on the new file id, logged (R7.7); `node scripts/cohesion-audit.mjs --handle mens-christmas-attending-under-protest-socks` passes except "not active".
---
## Log
- 2026-10-18 director: brief written, READY (gift add-on, socks first; source design A grade).
- 2026-10-18 director: Sam put funny boxers first, so build the boxer briefs #666–#669 before this one.
- 2026-10-18 23:25 UTC director: boxers are OFF, so this no longer waits. Before building, read the REDO notes on #660–#663: the front leg placement must read upright (the shared panel printed upside down at the ankle on the front view) and the lockup fills the leg from cuff to heel.
