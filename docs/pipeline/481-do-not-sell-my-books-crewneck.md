status: BUILDING [A] 2026-10-19 20:59 UTC
shopify: gid://shopify/Product/15363978068272
lane: A
type: new
id: 481
handle: womens-bookish-do-not-sell-my-books-crewneck-sweatshirt
kd: 20
---
## Women's Bookish – Do Not Sell My Books Crewneck Sweatshirt
- **Gate (docs/research/how-to-research-a-design.md): PASSED, Sam approved the art and the mockups 2026-10-17 ("ship it, make it all live").** Art is FINAL and already made by Claude: do NOT generate new art and do NOT redraw lettering. Use the print file below as-is (words are set in real fonts).
- **Blank:** Gildan 18000 crewneck (Printful #145), printed: `designs/first5/books-print.png` (2974×4157, burgundy ink), FW 1500, TOP 75.
- **Joke / format:** BookTok's "at my funeral: 'I guess we can sell her books now' — NOT TODAY" (540K likes) as an elegant deadpan engraving: book stack with lilies and a candle, "do not sell my books / AT MY FUNERAL." Proof: bookish crewnecks at $36–54 with 2,500–9,000 Etsy favorites.
- **Colors:** Sand, Sport Grey (mocked up), plus White and Ash if the burgundy reads. Not on dark colors (burgundy ink sinks).
- **Audience / cover:** women 25–55 readers, cozy reading nook or bookstore; alt starts 'Woman'.
- **Tags:** graphic-sweatshirts, sweatshirt, ai-art, intake-done. Gift angle: for the friend with the TBR pile.
- **Title / handle:** "Women's Bookish – Do Not Sell My Books Crewneck Sweatshirt" / `womens-bookish-do-not-sell-my-books-crewneck-sweatshirt` (R7.4).
- **Copy:** R8 + R9.11 (joke and occasion in line one), answer-first FAQs per R8.7 (4–6, 40–60 words: fit, care, sizing, weight/warmth, gift timing with an order-by date). Describe only what is in the art. Primary keyword: measure 2–3 product-level long tails for this design with RankHero (lowest KD with buyer intent wins, R11/R5 of the director role), record it in docs/product-keyword-map.json; supporting phrases at most once.
- **Cover:** next registry model per R6.3 (audience below), real garment from the product's own Printful mockup as `--design` (--n 1), nothing over the print, read every word (R6.7–R6.9). One image per call; max 2 attempts.
- **After mockups:** run `python3 scripts/design-crops.py` (rule 7d) and `python3 scripts/variant-photo-audit.py`; every offered color needs its own mockup (rule 7c).
- **Price (R12.1):** the current tier for this blank, no compare-at.
- **Priority:** build before anything else in your lane; flip to REVIEW only when Printful synced = variant count.
---
## Log
- 2026-10-17 Claude: brief + final art + approved mockups (designs/first5/); READY, top priority (Sam: ship it).
- 2026-10-17 18:12 UTC builder [A]: Shopify DRAFT gid://shopify/Product/15363978068272 created (24 variants, $34.99 no compare-at, Sand/Sport Grey/White/Ash S-3XL, aa-1-13-14). Keyword: every bookish term measured is KD>=54 (bookish sweatshirt 1600/54 owned; reading sweatshirt 390/66; book lover sweatshirt 320/68; bookworm sweatshirt 170/63); claimed 'bookworm sweatshirt' 170/63, lowest unowned.
- 2026-10-17 18:37 UTC builder [A]: REVIEW. Printful sync pid 482544992 synced 24/24 (print file 1088388692, FW 1500/TOP 75; AT MY FUNERAL. is small but legible at 400 px, art unchanged per Sam's approval). Every color has its own mockup attached to its variants + back logo view. FAQ 5 x 48-53 words incl. Dec 8 order-by. Registry #685; Sand cover try 1 (1 fal image ~$0.04): all words read, garment reads cream (Sand is pale). Audit passes except not-active; sheet docs/review/481.jpg. design-crops/variant-photo scripts cover published products only, rerun when ACTIVE.
- 2026-10-17 19:13 UTC director: approved. ACTIVE, published to Online Store + Headless + Google & YouTube; audit --handle PASS (0 warn). LIVE.
  - Watch item: on the cover the bottom line may read 'AT MY FUNERAL..' (an extra dot, maybe a JPEG artifact at sheet size). Lane A: on the next cover pass, check the full-size cover. If the dot is really there, composite the exact print per R6.9.
- 2026-10-18 17:22 UTC director: QUALITY RESET grade B (type only), REDO. The product stays ACTIVE (same handle, URL, title keyword). Keep the line "do not sell my books / AT MY FUNERAL." and the art. 1. Type: Thin lowercase italic serif headline; thin spaced serif bottom line, neither heavy. 2. Quality reset type bar (docs/backlog/quality-reset.md, 'The new bar'): headline at least 90% of the art width, heavy, colors pulled from the art; second line at least 45% of the headline's height, never a thin script on a dark or mid garment; use the lettering as a shape (arch, stacked lockup, words breaking into the art), not a plain bar above and a script line below; no font used on more than 1 in 6 of the last 30 designs. 3. New print file means a new cover per R6.10 and a fresh review sheet (R7.7). While quality-reset.md says PAUSED, only lane A builds, and only the samples step 2 names.
