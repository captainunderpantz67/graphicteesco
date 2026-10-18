status: READY
lane: C
type: twin
id: 605
handle: womens-gym-lift-heavy-reply-later-cropped-hoodie
kd: 32
---
## Women's Gym – Lift Heavy. Reply Later. Cropped Hoodie
- **Blank:** Women's cropped hoodie Bella+Canvas 7502 (Printful #317), handle ends -cropped-hoodie. Print area 1500 x 1500 px. Copy facts from the Printful spec only (R7.1).
- **Style:** Twin: reuses the source art (no new art generation, R6.2); its own cover, copy and long-tail. R6.2 lettering check on the source print before linking, and log it.
- **Text on shirt (real fonts via scripts/compose-print.py, never drawn by the image model; spelled exactly):** Twin of #574 (LIVE 2026-10-18): reuse its final prints (Printful 1088691210 dark ink for light colors, 1088691233 cream halo for dark). The print is 1.19 tall-to-wide, so at FW 1500 it overflows the 1500 x 1500 area: tighten the gaps between LIFT HEAVY., the scene and Reply Later. in compose-print so it fits at full width, never under about 1300 px wide; Reply Later. reads at phone size (R3.7.6).
- **Hook:** Same as #574: a 1960s lifter mid-deadlift ignoring a ringing rotary phone. LIFT HEAVY. Reply Later. Cropped, it is the gym-to-coffee layer.
- **Three lines considered (R3.1):** see #574.
- **Joke QC (R3.7) / R3.12:** see #574.
- **Why it's not taken:** our own art; gym crop hoodie listings are plain logos.
- **Design gate (5 parts, docs/research/how-to-research-a-design.md):** search: gym crop hoodie 480 / KD 32 (RankHero 2026-10-18; competition 865; KD 21–35 band) · proof: #574's gate (857/1,670-favorite gym-culture proof) · cropped hoodie 40,500 / 30 (R11.5).
- **Art prompt (Recraft v4, one image per call):** none (twin).
- **Colors (R7.2):** Peach + Storm (R7.1, the 7502 has 4 colors); if Reply Later. (navy) sinks on Storm, use the cream-halo file there and log it. Mockup per color.
- **Primary keyword:** gym crop hoodie: 480 / KD 32 (RankHero via scripts/keyword-gap.py, 2026-10-18, director). KD 21–35 band. Unowned. Supporting: none.
- **Print size:** FW 1500 (or as wide as fits 1500 x 1500, never under 1300), above the raw hem.
- **Copy:** line one = the line + who wears it + when (R9.11), said plainly: no superlative opener built around the keyword (R8.3). Primary keyword in the title or SEO title, the first sentence and once in the meta; at most 3 times in all (the audit warns at 4). Describe only what is in the art; never say we drew it ("Original art, made for Graphic Tees Co."). Answer-first FAQs per R8.7: 4–6 at 40–60 words (fit, weight, wash care, gift fit, Christmas order-by about Dec 8, free size exchange).
- **Cover:** registry #941 (Colombian-American woman, about 21, dark wavy hair in a high ponytail, small silver hoops, athletic build), CLAIMED. Scene: a sunlit gym with racks behind her, high-rise leggings, hood visible, cropped hem at the waist, a water bottle on the bench beside her, phone face-down on the bench (never in hand). Props never over the print (R6.5); hair tied back or behind the shoulders, first word of the top line checked letter by letter (R6.9). Printful mockup as `--design` (--n 1). Max 2 attempts.
- **Title / handle:** "Women's Gym – Lift Heavy. Reply Later. Cropped Hoodie" / `womens-gym-lift-heavy-reply-later-cropped-hoodie` (R7.4; the suffix sets the audit price, R12.1).
- **Tags:** cropped-hoodies, cropped-sweatshirts, gym-hoodies, graphic-hoodies-for-women, hoodie, ai-art, intake-done (R11.5; copy says it has a hood).
- **Price:** $44.99 cropped (R12.1), NO compare-at.
- **After publish:** design-crops.py and variant-photo-audit.py (builder 7c/7d). Before REVIEW: Printful default file checked on every variant and logged (R7.7, 2026-10-18 line); cover chest zoomed to 200% (R6.9 clean-erase line).
---
## Log
- 2026-10-18 06:26 UTC director: brief written, READY (lane C; kd 32; KD ≤ 20 band empty for these niches in this run's sweep, so KD 21–35 first, then measured KD 36+ phrases over 1,000 a month or with a measured December surge; proof named under the gate).
