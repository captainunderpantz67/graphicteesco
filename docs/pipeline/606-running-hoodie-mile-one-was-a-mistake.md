status: REVIEW
shopify: gid://shopify/Product/15364900913456
lane: C
type: new
id: 606
handle: unisex-running-mile-one-was-a-mistake-hoodie
kd: 22
---
## Unisex Running – Mile One Was a Mistake Hoodie
- **Blank:** Gildan 18500 pullover hoodie (Printful #146), 8 oz, 50/50 cotton-poly fleece, double-lined hood, pouch pocket; handle ends -hoodie. Copy facts from the Printful spec only (R7.1).
- **Style:** A (R4.2), vintage to the edges, no badge, frame, border, rounded scene card or dark patch (R4.1, including the 2026-10-18 rounded-card line). New art: one Recraft v4 illustration call (--n 1), picture only, no words; at most 3 tries; if all are weak, PARK it and say why.
- **Text on shirt (real fonts via scripts/compose-print.py, never drawn by the image model; spelled exactly):** MILE ONE (Alfa Slab One, cream, above the art) / WAS A MISTAKE. (Alfa Slab One, faded red with a cream keyline, below, at least 85% of the art's width). Solid ink. Light-ink and dark-ink files as needed.
- **Hook:** A 1970s jogger in a sweatband and tube socks, barely past a plain mile-marker post, looks back over his shoulder with pure regret while the road ahead goes on forever. MILE ONE WAS A MISTAKE. Self-aware, deadpan, for every runner's first ten minutes.
- **Three lines considered (R3.1):** "Mile One Was a Mistake" · "Running for the Snacks" · "Slow Runners Club" (picked: self-aware statement; the second is a mug joke; the third is everywhere). Different from #312 Pace: Leisurely (a calm runner); this one is regret.
- **Joke QC (R3.7) / R3.12:** Outsider gets it in 3 seconds (a runner regretting it already); family-clean; no race marks; 5 words. R3.12 passes.
- **Why it's not taken:** runner hoodie listings are run-club logos and mileage typography (Christian Running Hoodie 142 favorites); no regret-at-mile-one line. Builder checks under 50 listings (R3.7.2).
- **Design gate (5 parts, docs/research/how-to-research-a-design.md):** search: runner hoodie 5,400 / KD 22 (RankHero 2026-10-18; competition 2,622; KD 21–35 band, the easiest unowned running phrase) · proof: 'Relax the Drummer's Here' 829 favorites (hobby statement tee, same format), running hoodie listings 142 / 53 favorites (runners buy hoodies) · insider: the first mile is the worst · joke type: self-aware statement · look: 1970s race-poster print, faded red, navy, mustard, cream · gift test: the friend who signed up for a 10K.
- **Art prompt (Recraft v4, one image per call):** Vintage 1970s race-poster screen-print illustration: a jogger in a sweatband, short shorts and striped tube socks, just past a plain wooden mile-marker post with no numbers, looking back over his shoulder with an exaggerated face of regret, sweat drops flying, a long empty road stretching ahead to the horizon. Faded red, navy, mustard yellow, cream, soft black linework, halftone shading, worn screen-print texture, ragged broken edges, the jogger, post and road are the shape. No text, no letters, no numbers, no logos, no background shape, no frame, no border, no badge, no rounded rectangle, no dark patch.
- **Colors (R7.2):** Sand + Navy (R7.2 cold-weather launch colors); cream lettering gets a dark keyline on Sand if it sinks.
- **Primary keyword:** runner hoodie: 5,400 / KD 22 (RankHero via scripts/keyword-gap.py, 2026-10-18, director). KD 21–35 band. Unowned ('running hoodie' is #312's, never used here). Supporting: none.
- **Print size:** FW 1500 TOP 0 on the 18500, every word above the pouch (R5.3.2).
- **Copy:** line one = the line + who wears it + when (R9.11), said plainly: no superlative opener built around the keyword (R8.3). Primary keyword in the title or SEO title, the first sentence and once in the meta; at most 3 times in all (the audit warns at 4). Describe only what is in the art; never say we drew it ("Original art, made for Graphic Tees Co."). Answer-first FAQs per R8.7: 4–6 at 40–60 words (fit, weight, wash care, gift fit, Christmas order-by about Dec 8, free size exchange).
- **Cover:** registry #942 (man AND woman together: Nigerian-American man, early 30s, close-cropped hair, lean runner build; Chinese-American woman, early 30s, long black hair in a high ponytail tied back), CLAIMED. Scene: a park running path at dawn, both in the hoodie (hood visible on both), water bottles at their sides, hands empty. Alt starts 'Man and woman'. Props never over the print (R6.5); hair tied back or behind the shoulders, first word of the top line checked letter by letter (R6.9). Printful mockup as `--design` (--n 1). Max 2 attempts.
- **Title / handle:** "Unisex Running – Mile One Was a Mistake Hoodie" / `unisex-running-mile-one-was-a-mistake-hoodie` (R7.4; the suffix sets the audit price, R12.1).
- **Tags:** graphic-hoodies-for-men, graphic-hoodies-for-women, hoodie, ai-art, intake-done
- **Price:** $39.99 pullover sale tier (R12.1), NO compare-at.
- **After publish:** design-crops.py and variant-photo-audit.py (builder 7c/7d). Before REVIEW: Printful default file checked on every variant and logged (R7.7, 2026-10-18 line); cover chest zoomed to 200% (R6.9 clean-erase line).
---
## Log
- 2026-10-18 06:26 UTC director: brief written, READY (lane C; kd 22; KD ≤ 20 band empty for these niches in this run's sweep, so KD 21–35 first, then measured KD 36+ phrases over 1,000 a month or with a measured December surge; proof named under the gate).
- 2026-10-18 07:43 UTC builder [C]: art 1 Recraft call kept (jogger, regret face, plain post, no text). print-prep --holes 4000 then compose-print: MILE ONE Alfa Slab cream (navy keyline on Sand file), WAS A MISTAKE. Alfa Slab faded red with keyline, wider than the art; Navy file has a cream halo around the art (Printful 1088757556), Sand file none (1088757560); docs/print-files/606-running-hoodie-*.png. FW 1500 TOP 0, 1,979 px high, clears the pouch on both mockups. DRAFT gid 15364900913456 (12 variants, $39.99, no compare-at, hoodies category, tags per brief). FAQs 5 x 52-54 words, order-by Dec 8. fal $0.04 art.
- 2026-10-18 07:46 UTC builder [C]: mockups Navy + Sand + back (cream neck logo on Navy). Cover: 2 fal images (registry #942 pair); both times the model garbled WAS A MISTAKE., so the exact print was composited onto BOTH chests from the Printful file (R6.9; ponytail stays off the letters, no smear at zoom). Keyword runner hoodie 5,400/KD 22 in map. audit-local PASS 0 warn. fal total about $0.14. Sync 482704439 running; REVIEW at 12/12.
- 2026-10-18 07:52 UTC builder [C]: Printful relink verified 12/12 (6 Sand on 1088757560, 6 Navy on 1088757556, back logo on all); REVIEW.
