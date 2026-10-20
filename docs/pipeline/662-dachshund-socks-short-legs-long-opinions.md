status: REDO
lane: B
type: addon
id: 662
handle: unisex-dachshund-short-legs-long-opinions-socks
shopify: gid://shopify/Product/15365986615600
kd: 18
---
## Unisex Dachshund – Short Legs, Long Opinions Socks
- **Gift add-on (docs/backlog/gift-addons.md, Sam approved 2026-10-18).** Allowed during the quality reset: no new design, no new line, no fal. Source design: #327 (A grade; art from Printful file 1088483823). Pull the art layer from that Printful file (or the lane's designs/ folder), never regenerate it.
- **Blank:** Printful #882 Sublimation Socks (all-over print, white base). Copy facts (material, sizes, cushioning) from the Printful #882 spec only (R7.1); never say compression, cotton or one size unless the spec says so. Confirm the Printful base cost leaves at least $6 profit at $18.99 and log the number.
- **Layout:** the #327 dachshund as the leg motif, running long down the leg (the sock shape suits the dog), small paw prints on the foot. Lettering stays solid ink, read at phone size on the Printful mockup (R3.7.8, R5.3.10). Use Printful's #882 template for the leg and foot panels so nothing lands on the heel or toe seam. Light background (cream or a pale color pulled from the art) so the sublimation white base doesn't show as a blank band.
- **Text on socks (real fonts via scripts/compose-print.py, spelled exactly):** SHORT LEGS, / LONG OPINIONS (the #327 retro capitals, re-set in compose-print if the source lettering is hand-drawn: the art layer only, words in a real font per R3.7.8).
- **Hook:** The dachshund in one line, and on socks the short legs are the joke twice over. Dachshund owners say it about their dog every day.
- **Lines considered (R3.1):** the line is the A-grade print already approved in the quality-reset grading; no new lines on add-ons.
- **Why it's not taken:** RankHero top 12 for dachshund socks are plain dachshund patterns and a Halloween pun; no attitude line.
- **Popularity (R5.2):** "Dachshund Socks, Christmas Gift, Dachshund Gift, Stocking Filler" (DaisyDotFlamingo) 207 favorites, top RankHero listing for dachshund socks (demand for the niche sock); format proof "Mozzarella Sticks Funny Socks" (PyknicOfficial) 2,257 favorites under funny socks (printed novelty sock).
- **Primary keyword:** dachshund socks: 1,600 / KD 18 (RankHero 2026-10-18, competition 491). Unowned (checked docs/product-keyword-map.json this run); record it with this handle when built.
- **Supporting:** none measured that the sock fits; do not stretch for one.
- **Copy:** line one = the joke + who wears it + when, plainly (R9.11): no superlative opener (R8.3). Primary keyword in the SEO title, H1 subline, first sentence and once in the meta; at most 3 times in all. 300+ words of real copy in the SOP's three sections; 4–6 answer-first FAQs at 40–60 words: what the socks are made of, sizes, washing (inside out, cold, no tumble-dry if the spec says so), gift timing with the order-by date (Christmas: about Dec 8), and that they match the Short Legs, Long Opinions shirt (link the source product). Never say we drew it.
- **Cover:** the nicest Printful lifestyle mockup for #882 (R6.10 update, Sam 2026-10-18: no AI covers). If a person shows, match the audience (R6.3) and grep the pipeline logs for the style ID (R6.6). If none passes, the cleanest flat mockup, logged.
- **Title / handle:** "Unisex Dachshund – Short Legs, Long Opinions Socks" / `unisex-dachshund-short-legs-long-opinions-socks` (the -socks suffix sets the audit kind and the $18.99 price).
- **Tags:** socks, dachshund, gift-addon, intake-done. Never a tee, sweatshirt or hoodie collection tag (the audit fails socks in garment grids). The /socks/ hub (funny socks 33,100 / KD 34) is built by the director when 3 socks are live.
- **Price:** $18.99, no compare-at (docs/backlog/gift-addons.md; the audit checks it).
- **Before REVIEW:** `python3 scripts/review-sheet.py 662 <art> <cover> <mockup>`; every variant on the new file id, logged (R7.7); `node scripts/cohesion-audit.mjs --handle unisex-dachshund-short-legs-long-opinions-socks` passes except "not active".
---
## Log
- 2026-10-18 director: brief written, READY (gift add-on, socks first; source design A grade).
- 2026-10-18 director: Sam put funny boxers first, so build the boxer briefs #666–#669 before this one.
- 2026-10-18 [B]: built. DRAFT gid 15365986615600, Printful #882 sync (3/3 S/M/L) on file 1089180782 (scripts/sock-print.py, spec designs/s662/spec.json): dachshund from Printful file 1088483823 on cream, Alfa Slab red lockup SHORT / LEGS, / (dog) / LONG / OPINIONS in a real font, foot repeat (brief asked for paw prints; the art has none, so the foot repeats the dog). Cost 7.14, $18.99. Keyword dachshund socks 1,600/KD 18 (brief), recorded. FAQ 44-59 words. Cover: Printful flat sock mockup. Exchange FAQ quotes store policy. fal 0.
- 2026-10-18 22:53 UTC [B] REVIEW #662 boxer briefs (unisex-dachshund-short-legs-long-opinions-socks); sheet docs/review/662.jpg
- 2026-10-18 23:25 UTC director: REDO (director review of docs/review/662.jpg; quality reset PAUSED, so nothing goes live before RESUME anyway; add-ons may be fixed during the pause):
  1. R13.3 / R5.3.5: on the Printful front view (left sock in every mockup) the lockup sits upside down at the bottom of the leg, and the shin shows only the small foot motifs. The front placement gets the panel rotated 180° (or its own placement file) so the joke reads upright on the shin, top of the leg, on every view. Check each mockup view: the line must read upright on the leg on all of them, upside down nowhere.
  2. New-bar type (docs/backlog/quality-reset.md): the lockup fills only the top quarter of the leg and leaves an empty cream band to the heel. Scale the lockup and art up so they fill the leg from just under the cuff to about 1 in above the heel; headline at least 90% of the leg panel width; the foot keeps the small repeat.
  3. Copy: the Story's 'lockup and the main art on the leg' line stays true only after fix 1; re-read it against the new mockups. Exchange FAQ is right (R12.2 covers socks: S/M/L are sizes). Missing golf balls/paw prints are fine: the foot repeating the main art is accepted.
  4. Remake docs/review/662.jpg from the new mockups and log the sync file ids (R7.7) before REVIEW.
- 2026-10-18 23:33 UTC [B] REDO fixes done: panel rebuilt with every line at full leg width (>=90% of 820 px), lockup+art fill cuff to ~1 in above heel; front placements use a 180-degree-rotated file (v2: 1089204665 back, 1089204672 rotated front), all 3 variants relinked (R7.7); mockup checked on both views, line reads upright on both socks. New Printful mockup replaces the Shopify image, cover 'front and back view', sheet docs/review/662.jpg. Story line 'lockup and main art on the leg' is true now. fal 0.
- 2026-10-19 00:25 UTC director: APPROVED on docs/review/662.jpg (line upright on both mockup views, every word reads at phone size, lockup + art fill the leg; title, tags, $18.99 with no compare-at and FAQ checked in Shopify). Stays DRAFT at status REVIEW until the quality reset says RESUME; the director publishes it then without a second review. One copy fix before publish (builder or director, R8.3 no production words): in The Story, "with the lockup and the main art on the leg" -> "with the words and the main art on the leg".
- 2026-10-20 18:45 UTC director: REDO (still DRAFT). R3.7.8 (punchline never the smallest line, 2026-10-20, newer than the 10-19 approval): on the leg OPINIONS is the smallest word, about half the width of LONG, so the punch reads as a caption on the mockup. Re-set LONG / OPINIONS. so OPINIONS is at least as wide as SHORT and LEGS, (it is the longest word: let it set the leg width, the others no bigger). Same font and red. New mockup + sheet.
