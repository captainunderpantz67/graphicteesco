status: BUILDING [B] 2026-10-16 21:14
lane: B
type: redo
id: 164
handle: mens-gym-old-school-strength-graphic-tee
---
## Men's Gym – Old School Strength Tee — men's redo (R11.4)
- **Existing product:** gid://shopify/Product/15346015994160. Same product, handle, URL, title and collections. Replace: front art, Printful print file on every variant, flat mockups + variant images, cover, copy line one (the hook). Keep the back logo.
- **Why:** a curved banner over the strongman (R4.1) and a generic line, "Old School Strength" (R3.1). Director looked at the current front mockup 2026-10-16.
- **Text on shirt:** PEAKED IN 1898 — exactly those three words, circus-poster caps under the figure.
- **Hook:** "Peaked in 1898": the Victorian mustached strongman with the globe barbell, plus a dry line that every lifter over 35 feels in his knees. Contrast joke (R3.3).
- **Why it's not taken:** strongman tees are plain circus-poster art with "Strongman" or a gym name; the deadpan 'peaked' line isn't on page 1. Not re-checked live on Etsy this run.
- **Style:** A, vintage to the edges (R4.2).
- **Art prompt (Recraft v4):** "Vintage 1890s circus engraving of a mustached strongman in a leopard-print singlet holding a round globe barbell overhead, standing on a small wooden stage plank. Hand-lettered circus-poster capitals under him reading exactly 'PEAKED IN 1898', no banner, no ribbon. Palette: rust red, mustard, cream, soft black engraving lines. Worn screen-print texture; the figure is the shape and its edges break up into texture. Isolated on plain background, no background shape, no frame, no border, no badge, no circle, no dark patch."
- **Colors:** keep the product's current colors; drop any where the new art loses legibility (R7.2) and log it.
- **Keyword:** keep the claimed set (strongman shirt, weightlifter shirt, mustache shirt). Keep the existing primary; refresh copy line one with the hook in the men's dry voice (R3.4).
- **Popularity evidence (R5.2):** Boxing gym / strongman engraving theme (docs/market-research.md Gym #15, weak); funny gym one-liners 417 / 10,096 (Gym #9) carry it.
- **Cover:** registry #234 — Man; an old brick weightlifting gym with chalk dust and iron plates, morning light, chalk on his hands. Replace the old cover in covers.ts.
- **Price (R12.1):** $24.99, compare-at $29.99 (set it while you're in there).
---
## Log
- 2026-10-16 10:24 UTC director: brief written, READY.
- 2026-10-16 12:53 UTC [B]: run stopped by fal.ai lock (TOP_UP): file hosting + cover generation blocked. Nothing changed on the live product. Note: Shopify draft products for 167 (15360931430704) and 168 (15360933036336) already exist with copy and no media; Printful sync products 482163651 / 482163786 exist (168 variants unmapped, needs catalog variant mapping).
- 2026-10-16 14:26 UTC director: PARKED for the cold-weather push (R11.5).
- 2026-10-16 16:39 UTC Claude: Sam wants every weak men's shirt redone now; READY for lane B alongside cold-weather.
- 2026-10-16 18:37 UTC [B]: REDO done: in-place redo of the ACTIVE product: new Recraft art (Peaked in 1898, try 1), single original-ink file for all 4 light colors (this product has no dark colors), 30 variants re-syncing, new mockups + variant images + cover (#234; the cover took 3 prompts, using the Printful mockup as the reference photo with 3 images per call fixed the garbled lettering), copy updated (no headband in the new art). Review sheet docs/review/164.jpg.
- 2026-10-16 19:15 UTC director: REDO (product stays ACTIVE with the new art; fix it soon). Notes:
  1. R5.3.4 (reads instantly): the barbell has ONE big globe in the middle, resting on his head, with two round holes that read as a face/eyes (sea mine or robot head). Draw a classic circus globe barbell: a globe on EACH end of the bar, bar held overhead, nothing touching the head (regeneration 1 of 2).
  2. R5.3.6/R4.2 (finish): the legs are half-rendered: grey shows through the tights with loose red streaks, so the lower body looks unfinished next to the engraved torso. Render the tights fully in the same engraving style (solid ink with hatching).
  3. R5.3.8 (prints clean): stray specks to the right of the figure (right edge, shoulder height); clean them in print-prep.
  4. Keep the hook PEAKED IN 1898, the leopard singlet, palette, light colors and copy (update the copy only if the barbell description changes: "a globe barbell" stays true). New Printful file, re-sync, mockups, variant images; cover: same registry row, hands chalked at the sides is fine.
- 2026-10-16 21:19 UTC [B]: REDO round 2: new Recraft art (globe on each end of the bar, nothing touching the head, fully rendered tights, clean edges; try 1), Printful file 1087830991, 30 variants resyncing (FORCE setfile, log in scratch), 4 new front mockups + back swapped in place with alts, new cover (registry #234, image 2 of 3, chalk hands at sides, every word readable), copy updated (red tights, globe on each end). Audit PASS. Review sheet docs/review/164.jpg. Set REVIEW when synced 30/30.
