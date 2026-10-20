status: PARKED
lane: E
type: new
id: 709
handle: unisex-skiing-green-runs-big-talk-graphic-tee
kd: 38
---
## Unisex Skiing – Green Runs, Big Talk Tee
- **Why now:** lane E queue refill; skiing shirt is 3,600 searches with a winter peak; the ski hoodie and sweatshirt phrases are ours, the shirt phrase is not.
- **Blank:** Tee Bella+Canvas 3001, lightweight 4.2 oz (never 'midweight'); handle ends -graphic-tee; colors the art reads on, max 100 variants (3001 at 8 sizes: max 12 colors). Copy facts from the Printful spec only.
- **Style:** A (R4.2), vintage to the edges, no badge, frame, rounded scene card or dark patch (R4.1). New art: one Recraft v4 call (--n 1), picture only, no words; at most 3 tries (R5.4: 2 regenerations), then PARK and say why. fal wallet only (scripts/fal_budget.py).
- **Art prompt:** Vintage 1960s ski-resort poster illustration: a skier in a puffy retro jacket and goggles proudly snowplowing down a very gentle, almost flat slope, poles out wide like a champion, a small wooden trail sign with a green circle beside him, a big mountain with steep runs behind, a chairlift line, pines. Muted 1960s-70s screen-print palette (faded red, cream, sage, mustard, soft navy linework), halftone, worn edges; every side ends where its own objects end. No background shape, no frame, no border, no badge, no dark patch, no text.
- **Text on shirt (real fonts via scripts/compose-print.py, spelled exactly):** GREEN RUNS. (headline, heavy, faded red or navy, arched over the mountain) / BIG TALK. (second line, heavy, mustard or cream). Headline heavy, at least 90% of the art width, colors pulled from the art, in a display font not used on more than 1 in 6 of the last 30 designs (add an OFL Google font to designs/fonts if the kit feels repetitive); second line at least 45% of the headline's height, heavy, never a thin script. Use the lettering as a shape (arched, stacked lockup or breaking into the art), not a bar above and a caption below. Solid ink, open counters; dark-ink file for every light blank (R5.3.8, R5.3.10).
- **Five lines considered (R3.13, compared with "Politely, No.", "Plot Twist: I Stayed In", "Oops. Anyway."; men's: "Short Legs, Long Opinions"):** Green Runs. Big Talk. · Here for the Lodge Fries. · Pizza, Not French Fries. · I Ski Like I Text: Slowly. · Mostly Après. Picked the first: the same contrast shape as 'Short Legs, Long Opinions', 4 words, and the proud snowplow sells it. Runner-up: "Here for the Lodge Fries." "Mostly Après" is #460's territory; "Pizza, Not French Fries" needs ski-school backstory.
- **Hook:** the skier who sticks to the easy runs and tells the story like it was a black diamond; family ski-trip crowd laughs first.
- **Why it's not taken:** Etsy ski tees are mostly resort-name retro badges and 'Après Ski Club'; a self-aware beginner line is uncommon.
- **Joke QC (R3.7):** family clean, no trademark, brand or place name, not a sound-alike pun (R3.1), gets it in 3 seconds without backstory (R3.12). Builder: confirm under 50 Etsy listings carry the exact line before art (R3.7.2); if 50+, use the runner-up line named above.
- **Design gate (docs/research/how-to-research-a-design.md):** search: skiing shirt: 3,600 / KD 38 (competition 25,081) · proof: RankHero keyword pages no longer show the listing grid (R5.2, 2026-10-19), so before spending fal the builder logs one same-format listing with 500+ favorites for this niche (RankHero or Etsy search, favorites not views); none found = PARKED · joke type: contrast pair (the 'Short Legs, Long Opinions' shape) · look: 1960s ski poster, faded red/navy/mustard/cream · gift test: the family member on their second ski trip.
- **Primary keyword:** skiing shirt: 3,600 / KD 38 (competition 25,081) (RankHero keyword page via scripts/keyword-gap.py, 2026-10-20, director). KD 36+ band, allowed above 1,000 searches a month (R2.5); winter peak. The phrase names the garment (R2.11) and has a competition count (R2.10). Unowned in docs/product-keyword-map.json, every brief and src/data/collections.ts; record it with this handle. Primary in the SEO title, the first sentence and once in the meta, at most 3 times. Builder: add 2–4 measured long-tails from keyword-gap.py that describe the art, each once (R2.7).
- **Colors:** White, Natural, Heather Dust (dark-ink file) and Navy, Black, Heather Forest (light-ink file), R5.3.8. Mockup per color; read every word at phone size on the lightest and darkest.
- **Print size:** full chest print, art plus lockup at least 11 in wide.
- **Copy:** line one plainly: "Green runs, big talk: a skiing shirt for the skier whose stories are steeper than the slope." No superlative or keyword-brag opener (R8.3). Answer-first FAQs (R8.7): fit, fabric and weight from the spec, sizing, wash care, gift timing (order by about Dec 8 for Christmas), free size exchange. Describe only what is in the art the model actually drew.
- **Cover:** none for now (RESUME terms 2026-10-19, R6.11): plain Printful product shot. No registry row claimed until Sam decides on photos.
- **Title / handle:** "Unisex Skiing – Green Runs, Big Talk Tee" / `unisex-skiing-green-runs-big-talk-graphic-tee`. SEO title ≤ 60 characters, e.g. "Green Runs, Big Talk – Funny Skiing Shirt".
- **Tags:** graphic-tees-for-men, graphic-tees-for-women, funny-graphic-tees, retro-graphic-tees, ai-art, intake-done (unisex: both hubs; 1960s ski-poster look, R7.5).
- **Price:** $24.99 (R12.1 tee), NO compare-at.
---
## Log
- 2026-10-20 03:20 UTC director: brief written, READY (lane E queue refill to 12; skiing shirt: 3,600 / KD 38; 5 lines tested against R3.13).
- 2026-10-20 14:55 UTC director: PARKED: the R5.2 proof gate (one same-format listing with 500+ favorites) cannot be met from a cloud run (Etsy search returns 403; RankHero keyword pages no longer list listings), so builders skip this item. Asked Sam on 2026-10-20 whether measured volume + KD + competition count may stand in for the favorites number; back to READY on his yes.
