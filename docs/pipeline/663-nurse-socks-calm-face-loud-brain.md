status: READY
lane: B
type: addon
id: 663
handle: unisex-nurse-calm-face-loud-brain-socks
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
