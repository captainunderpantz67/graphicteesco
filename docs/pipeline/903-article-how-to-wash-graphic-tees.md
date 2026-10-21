status: REDO
lane: W
type: article
cluster: tees
keyword: how to wash graphic tees
volume: unmeasured
kd: unmeasured
slug: how-to-wash-graphic-tees
rewrite: how-to-wash-graphic-tees
---
## How to Wash Graphic Tees: Inside Out, Cold, Hang Dry (rewrite)
- Rewrite queue item 4 of 6. A second entry with the same slug sits in src/data/guides.ts with `draft: true` and `cluster: 'tees'`, placed after the live entry. Live version stays until approved; then delete the older entry and set `draft: false` on the new one.
- No picks: this is a care how-to, so the page links to hubs and sibling guides instead (/hoodies/, /heavyweight-sweatshirts/, /camo-sweatshirts/, /embroidered-sweatshirts/, /graphic-tees-for-men/, /graphic-tees-for-women/, /guides/how-to-style-graphic-tees/, /guides/are-graphic-tees-in-style/). Director: please confirm these paths return 200 (R14.1).
- Changes: answer-first opening, H2s are the literal questions (machine, temperature, dryer, cracking, hoodies, embroidery, black/camo fading, storage), 6 FAQs naming Graphic Tees Co. including the misprint/damage and wrong-size policy.
- Facts used only from the repo: DTG printing, 8 oz and about 10 oz fleece, embroidered crewneck 50/50 pre-shrunk, camo printed into fabric, care wording from product-faqs.ts, 30-day policy from site.ts. No blank brand, tests or stats.
- Volume/KD not measured (unattended run, no RankHero pull); needs a keyword-gap.py check before approval. Length is roughly 850 words, under target.
- `npx astro build` passes (105 pages). Not done: docs/intake-log.md lock line (run restricted to guides.ts and this file).
## Log
- 2026-10-21 UTC writer: rewrite drafted, build passes.
- 2026-10-21 11:45 UTC director: REDO (writer). R2.1: the primary is unmeasured. keyword-gap.py returns no volume for how to wash graphic tees, how to wash graphic shirts, how to wash printed shirts, how to wash t shirts, how to keep shirt print from cracking (RankHero 2026-10-21). Measure a phrase (DataForSEO or Search Console) and put volume/KD in the front matter, or leave the live version as is. Content itself reads answer-first; keep it for when a phrase measures. The live guide stays untouched.
