status: REVIEW
lane: B
type: twin
id: 585
handle: mens-drummer-the-neighbors-love-me-hoodie
kd: 33
shopify: gid://shopify/Product/15364755521840
---
## Men's Drummer – The Neighbors Love Me Hoodie
- **Blank:** Gildan 18500 pullover hoodie (Printful #146), handle ends -hoodie, launch colors Sand + Navy (R7.2 cold-weather rule). Copy facts from the Printful spec only (R7.1).
- **Style:** inherited from the source item; twin, no new art (R6.2).
- **Text on shirt (real fonts via scripts/compose-print.py, never drawn by the image model; spelled exactly):** Same art and lines as #583 (build #583's art first; no new art generation, R6.2). Lettering check first (R6.2).
- **Hook:** Hoodie twin of #583: the street of slammed windows around one loud garage, THE NEIGHBORS LOVE ME. A cold-garage practice layer.
- **Three lines considered (R3.1):** Inherited from #583.
- **Joke QC (R3.7) / R3.12:** Inherited from #583.
- **Why it's not taken:** Drummer hoodies on Etsy are stick graphics and names; same gap as #583.
- **Design gate (5 parts, docs/research/how-to-research-a-design.md):** search: drummer hoodie 210 / KD 33 (RankHero 2026-10-18) · proof and joke as #583 · gift test: Christmas for the teen drummer.
- **Art prompt (Recraft v4, one image per call):** None: reuse #583's print file.
- **Colors (R7.2):** Sand + Navy (R7.2).
- **Primary keyword:** drummer hoodie: 210 / KD 33 (RankHero via scripts/keyword-gap.py, 2026-10-18, director). KD 21–35 band. Unowned. Primary in the first sentence and once in the meta.
- **Print size:** FW 1500 minimum, ends above the pouch seam (R5.3.2); never shrink for the pouch.
- **Copy:** line one = the line + who wears it + when (R9.11), said plainly: no superlative opener built around the keyword (R8.3, 2026-10-18 line). Describe only what is in the art; never say we drew it ("Original art, made for Graphic Tees Co."). Answer-first FAQs per R8.7: 4–6 at 40–60 words (fit, weight, wash care, gift fit, Christmas order-by about Dec 8, free size exchange).
- **Cover:** registry #925 (Black man, about 19, short twists, small silver hoop earring, slim build), CLAIMED. Alt starts 'Man'. Scene: an open garage practice space at night with a drum kit and string lights; hood visible behind the neck, hands in the pouch, nothing over the print; Printful mockup as `--design` (R6.9). Max 2 attempts.
- **Title / handle:** "Men's Drummer – The Neighbors Love Me Hoodie" / `mens-drummer-the-neighbors-love-me-hoodie` (R7.4; the suffix sets the audit price, R12.1).
- **Tags:** graphic-hoodies-for-men, hoodie, ai-art, intake-done.
- **Price:** $39.99 (R12.1 pullover sale tier), NO compare-at.
- **After publish:** design-crops.py and variant-photo-audit.py (builder 7c/7d).
---
## Log
- 2026-10-18 04:27 UTC director: brief written, READY (lane B; KD ≤ 20 band empty in the sweep, so KD 21–35 buyer phrases, measured this run; proof seller named under the gate).
- 2026-10-18 05:37 UTC builder [B]: WIP: twin of #583 built. R6.2 lettering check on the source (#583 print files 1088712563 / 1088712589): THE NEIGHBORS and LOVE ME. are Alfa Slab One set by compose-print, the art is a Recraft picture with ragged edges, no ring, panel or typeset line; reused unchanged. DRAFT gid://shopify/Product/15364755521840 (Gildan 18500 #146, Sand + Navy x S-3XL = 12, $39.99 no compare-at, category hoodies, tags per brief, keyword drummer hoodie in line one and meta, 6 FAQs 46-55 words incl. Dec 8). Print FW 1500 TOP 75 above the pouch seam on both mockups (Sand dark-ink file, Navy cream-halo file); mockups Sand + Navy + back read. Cover registry 925, try 1: hood down and visible, hands in the pouch, every word reads. Audit-local PASS. Sync queued; status goes to REVIEW at 12/12.
- 2026-10-18 07:03 UTC builder [B]: REVIEW. Sync finished 12/12 (earlier run died with the link at 0/12; re-linked), review sheet docs/review/585.jpg, design crop added, variant-photo audit clean, audit --handle only 'not visible'. fal $0.
