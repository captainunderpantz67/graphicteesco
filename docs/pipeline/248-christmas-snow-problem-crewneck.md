status: REVIEW
lane: A
type: twin
id: 248
handle: womens-christmas-snow-problem-crewneck-sweatshirt
---
## Women's Christmas – Snow Problem Crewneck Sweatshirt
- **Twin of #247:** same art and print files; build after #247's art passes the self-check (R6.2, R7.3).
- **Blank:** Gildan 18000 crewneck (Printful #145), 8 oz, 50/50 cotton-poly fleece (R7.1).
- **Hook:** SNOW PROBLEM, the unbothered winter queen (R3.4). Line one carries it.
- **Colors (≤100 variants):** White, Sand, Light Pink, Ash, Sport Grey; Red or Forest Green only if the plaid letters read (R7.2).
- **Primary keyword:** snowflake sweatshirt — 320 / KD 48 (RankHero 2026-10-16). Unowned; record it.
- **Popularity evidence (R5.2):** as #247; winter sweatshirt 2,900/55 measured (owned elsewhere).
- **Cover:** registry #424 (South Asian woman in her mid 20s, long wavy dark hair in a side part, nose stud) — woman (R6.3). Scene: an outdoor ice rink at dusk with string lights and a big tree, cocoa mug held at her side off the print (R6.5, R6.9).
- **Title / handle:** "Women's Christmas – Snow Problem Crewneck Sweatshirt" / `womens-christmas-snow-problem-crewneck-sweatshirt` (R7.3, R7.4).
- **Tags (R7.5):** christmas-sweatshirts, sweatshirt, christmas.
- **Price (R12.1):** $34.99, compare-at $39.99.
---
## Log
- 2026-10-16 21:18 UTC director: brief written, READY (lane A women's Christmas pair, twin of #247).
- 2026-10-16 22:28 UTC builder [A]: DRAFT gid://shopify/Product/15362387607856 (Gildan 18000; White, Sand, Light Pink, Ash, Sport Grey x S-3XL = 30; no Red or Forest Green because the plaid red would fade; $34.99/$39.99; tags + christmas), #247's file 1087865069 (no new art), Printful sync 482337267 queued (FORCE=1 FW=1500 setfile 482337267 1087865069 1080398177). Primary snowflake sweatshirt 320/KD48 in map. Cover #424 from the White mockup (try 1, kept #1 of 3, hands in pockets), 5 fronts + back, variant images, audit above, docs/review/248.jpg. REVIEW once synced = 30.
- 2026-10-17 01:36 UTC builder [A]: Printful sync complete; REVIEW.
- 2026-10-17 02:14 UTC director: approved from docs/review/248.jpg; ACTIVE + Online Store + Headless + Google; cohesion-audit --handle PASS (0 warn). LIVE.
- 2026-10-18 02:55 UTC Claude: REDO, lettering only (R5.3.10, Sam 2026-10-18: pattern-filled letters read as clip-art). Keep the art and the line. Re-set the words in a bold real font, solid ink with at most a keyline, via compose-print.py; new Printful file + mockups on the SAME product; stays ACTIVE (never unpublish). No fal needed. Twins share the new file.
- 2026-10-18 07:20 UTC builder [A]: REDO lettering done (R5.3.10), no fal spend, product stays ACTIVE. Plaid fill removed: SNOW / PROBLEM re-set in Fraunces Black as SOLID red (#b81c2c) with a cream keyline (real font via PIL, the same face as the original letter shapes). The bow and the snowflakes are the originals, cut out of the live print and re-stacked taller (bow on top, words, flakes below) so the print fills the chest: 3163x2887, Printful file 1088698518, FW 1650. Sync 482337267 re-link to the new file is queued behind the other REDOs (check default file = 1088698518 on every variant; until then Printful still has the old file, so the order of publishing vs. fulfillment matters: fulfillment uses the Printful file, the storefront photos are already new). New mockups for all colors + back replace the crewneck media (created before deleting the old ones so the live page never lacked photos), variants re-linked per color. Cover: the new print composited onto the same live photo (R6.9, nothing near hair or hands), old print cleaned.
- 2026-10-18 05:21 UTC director: REDO (stays ACTIVE). (1) R7.7: Printful still serves the OLD pattern-filled file on every variant (checked 1087865069 on all 30 variants of sync 482337267 at 2026-10-18 05:21 UTC), so buyers of this ACTIVE product still get the plaid/gingham print the mockups no longer show. Finish the re-link to 1088698518 on every variant and confirm with GET /sync/products/482337267 before REVIEW. (2) R6.8: the cover shows a stray red mark after PROBLEM (left over from the old print, reads like a registered sign); paint it out. (3) R5.1: docs/review/248.jpg was not regenerated after the REDO (it still shows the pattern-filled print); remake it from the new print, the new cover and two new mockups. The director checked this round from the live cover and Shopify mockups instead.
- 2026-10-18 06:56 UTC builder [A]: re-link verified: sync 482337267 30/30 variants on the new solid-ink file 1088698518 (default file checked on every variant, back logo kept). Printful fulfillment now matches the storefront photos; the product stays ACTIVE.
- 2026-10-18 06:45 UTC builder [A]: REVIEW: sync 482337267 verified 30/30 on 1088698518; stray red mark (a ® after PROBLEM, cover only) inpainted out; sheet remade.
