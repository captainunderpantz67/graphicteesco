status: LIVE
lane: B
type: addon
id: 663
handle: unisex-nurse-calm-face-loud-brain-socks
shopify: gid://shopify/Product/15365986746672
kd: 22
---
## Unisex Nurse – Calm Face, Loud Brain Socks
- **Gift add-on (docs/backlog/gift-addons.md, Sam approved 2026-10-18).** Allowed during the quality reset: no new design, no new line, no fal. Source design: #493 / #515 (A grade, calibration design; art from Printful file 1088550199). Pull the art layer from that Printful file (or the lane's designs/ folder), never regenerate it.
- **Blank:** Printful #882 Sublimation Socks (all-over print, white base). Copy facts (material, sizes, cushioning) from the Printful #882 spec only (R7.1); never say compression, cotton or one size unless the spec says so. Confirm the Printful base cost leaves at least $6 profit at $18.99 and log the number.
- **Layout:** the heart-rate-to-scribble line as a repeat band around the ankle, the lockup on the leg. Lettering stays solid ink, read at phone size on the Printful mockup (R3.7.8, R5.3.10). Use Printful's #882 template for the leg and foot panels so nothing lands on the heel or toe seam. Light background (cream or a pale color pulled from the art) so the sublimation white base doesn't show as a blank band.
- **Text on socks (real fonts via scripts/compose-print.py, spelled exactly):** CALM FACE. / LOUD BRAIN. (the #493 condensed caps and colors) with the heart-rate line that turns into a scribble between them.
- **Hook:** How every nurse looks at 3 a.m. versus what is going on inside. Nurses buy it for each other; families buy it for nurses.
- **Lines considered (R3.1):** the line is the A-grade print already approved in the quality-reset grading; no new lines on add-ons.
- **Why it's not taken:** Nurse sock listings are compression socks and stethoscope patterns; no deadpan line.
- **Popularity (R5.2):** Design proof is #493's own (A grade, calibration bar); format proof "Mozzarella Sticks Funny Socks" (PyknicOfficial) 2,257 favorites under funny socks. RankHero shows no listing sample for nurse socks, so this one leans on the format.
- **Primary keyword:** nurse socks: 2,400 / KD 22 (RankHero 2026-10-18, competition 1,754, US 42%). Unowned (checked docs/product-keyword-map.json this run); record it with this handle when built.
- **Supporting:** none measured; never say compression (Printful #882 is not a compression sock).
- **Copy:** line one = the joke + who wears it + when, plainly (R9.11): no superlative opener (R8.3). Primary keyword in the SEO title, H1 subline, first sentence and once in the meta; at most 3 times in all. 300+ words of real copy in the SOP's three sections; 4–6 answer-first FAQs at 40–60 words: what the socks are made of, sizes, washing (inside out, cold, no tumble-dry if the spec says so), gift timing with the order-by date (Christmas: about Dec 8), and that they match the Calm Face, Loud Brain shirt (link the source product). Never say we drew it.
- **Cover:** the nicest Printful lifestyle mockup for #882 (R6.10 update, Sam 2026-10-18: no AI covers). If a person shows, match the audience (R6.3) and grep the pipeline logs for the style ID (R6.6). If none passes, the cleanest flat mockup, logged.
- **Title / handle:** "Unisex Nurse – Calm Face, Loud Brain Socks" / `unisex-nurse-calm-face-loud-brain-socks` (the -socks suffix sets the audit kind and the $18.99 price).
- **Tags:** socks, nurse, gift-addon, intake-done. Never a tee, sweatshirt or hoodie collection tag (the audit fails socks in garment grids). The /socks/ hub (funny socks 33,100 / KD 34) is built by the director when 3 socks are live.
- **Price:** $18.99, no compare-at (docs/backlog/gift-addons.md; the audit checks it).
- **Before REVIEW:** `python3 scripts/review-sheet.py 663 <art> <cover> <mockup>`; every variant on the new file id, logged (R7.7); `node scripts/cohesion-audit.mjs --handle unisex-nurse-calm-face-loud-brain-socks` passes except "not active".
---
## Log
- 2026-10-18 director: brief written, READY (gift add-on, socks first; source design A grade).
- 2026-10-18 director: Sam put funny boxers first, so build the boxer briefs #666–#669 before this one.
- 2026-10-18 [B]: built. DRAFT gid 15365986746672, Printful #882 sync 482876994 (3/3 S/M/L) on file 1089182002 (scripts/sock-print.py, spec designs/s663/spec.json): heart-rate-to-scribble band from Printful file 1088550199 on cream, Anton lockup CALM FACE. above, LOUD BRAIN. below (black / red), foot repeat. Cost 7.14, $18.99. Keyword nurse socks 2,400/KD 22 (brief), recorded. FAQ 44-58 words; copy avoids 'compression' (R7.1) and 'badge'. Cover: Printful flat sock mockup. Exchange FAQ quotes store policy. fal 0.
- 2026-10-18 22:55 UTC [B] REVIEW #663 boxer briefs (unisex-nurse-calm-face-loud-brain-socks); sheet docs/review/663.jpg
- 2026-10-18 23:25 UTC director: REDO (director review of docs/review/663.jpg; quality reset PAUSED, so nothing goes live before RESUME anyway; add-ons may be fixed during the pause):
  1. R13.3 / R5.3.5: on the Printful front view (left sock in every mockup) the lockup sits upside down at the bottom of the leg, and the shin shows only the small foot motifs. The front placement gets the panel rotated 180° (or its own placement file) so the joke reads upright on the shin, top of the leg, on every view. Check each mockup view: the line must read upright on the leg on all of them, upside down nowhere.
  2. New-bar type (docs/backlog/quality-reset.md): the lockup fills only the top quarter of the leg and leaves an empty cream band to the heel. Scale the lockup and art up so they fill the leg from just under the cuff to about 1 in above the heel; headline at least 90% of the leg panel width; the foot keeps the small repeat.
  3. Copy: the Story's 'lockup and the main art on the leg' line stays true only after fix 1; re-read it against the new mockups. Exchange FAQ is right (R12.2 covers socks: S/M/L are sizes). Missing golf balls/paw prints are fine: the foot repeating the main art is accepted.
  4. Remake docs/review/663.jpg from the new mockups and log the sync file ids (R7.7) before REVIEW.
- 2026-10-18 23:33 UTC [B] REDO fixes done: panel rebuilt with every line at full leg width (>=90% of 820 px), lockup+art fill cuff to ~1 in above heel; front placements use a 180-degree-rotated file (v2: 1089204685 back, 1089204704 rotated front), all 3 variants relinked (R7.7); mockup checked on both views, line reads upright on both socks. New Printful mockup replaces the Shopify image, cover 'front and back view', sheet docs/review/663.jpg. Story line 'lockup and main art on the leg' is true now. fal 0.
- 2026-10-19 00:25 UTC director: APPROVED on docs/review/663.jpg (line upright on both mockup views, every word reads at phone size, lockup + art fill the leg; title, tags, $18.99 with no compare-at and FAQ checked in Shopify). Stays DRAFT at status REVIEW until the quality reset says RESUME; the director publishes it then without a second review. One copy fix before publish (builder or director, R8.3 no production words): in The Story, "with the lockup and the main art on the leg" -> "with the words and the main art on the leg".
- 2026-10-20 18:45 UTC director: found ACTIVE in Shopify on 5 channels with no pipeline record (published outside a director run, probably during the 06c6ed6 rollback window); audit --handle PASS, status set LIVE to match the store. Approval of 2026-10-19 stands.
