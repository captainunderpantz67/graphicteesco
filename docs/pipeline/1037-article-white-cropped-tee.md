---
status: REDO
lane: W
type: article
cluster: cropped
keyword: white cropped tee
volume: 1900
kd: 15
slug: white-cropped-tee
---
## White Cropped Tee: 5 Graphic Picks, Fit & How to Wear One
- `draft: true`, `cluster: 'cropped'` in src/data/guides.ts, appended at the end of allGuides. 2 pick groups (5 products), 7 sections, 6 FAQs, roughly 950 words.
- Keyword: white cropped tee 1,900 / KD 15 (RankHero page pull, measured 2026-11-12 via curl). Unowned in collections.ts, guides.ts and product-keyword-map.json. Chosen because the cropped cluster has the fewest articles. Also measured: black cropped tee 1,600 / KD 16 (next sibling), pink cropped tee 320 / KD 30. "pink cropped hoodie" 1,600 / KD 16 not usable: no cropped hoodie comes in pink; "cropped hoodie men" 12,100 / KD 28 not usable (women's cut).
- Picks (all ACTIVE, White offered, XS-XL, $24.99; Stories/colors/sizes read from live Shopify 2026-11-12): Wildflower Club, Matcha Made in Heaven, Espresso Yourself, Book Buying Ban, Can't Talk. Deadlifting. Grades not checked in fresh-designs.json: director to confirm A-grade.
- Facts only from live Stories and site.ts. No photos of the White colorway are claimed. FAQ questions not from PAA/GSC (unavailable unattended). Tee price shown as the live $24.99; no sale step stated.
- Links: /cropped-graphic-tees/, /hoodies/cropped-hoodies/, /mens-gym-shirts/; guides how-to-style-graphic-tees, black-cropped-hoodie, gym-cropped-hoodie, hoodie-sizing, how-to-wash-graphic-tees. Planned siblings black-cropped-tee, cropped-hoodie-outfits not linked. Director: confirm /mens-gym-shirts/ is an apt link for a women's piece, or swap.
- `npx astro build` result: passes (139 pages; drafts are not built).
## Log
- 2026-11-12 UTC writer: drafted.
- 2026-11-12 23:30 UTC director: REDO. Keyword is fine (white cropped tee 1,900 / KD 15, unowned). The picks are not:
  1. Writer card (A-grade picks only, fresh-designs.json) / R5.1: none of the 5 cropped tees is on the A list. Book Buying Ban (#547) is graded for a type fix in docs/backlog/quality-reset.md (script second line).
  2. R4.1: Wildflower Club is a scalloped navy patch with a border, the badge look we no longer show off. It also runs to 2XL and is an older blank (created 2026-10-05), so 'XS to XL' and '5.3 oz combed cotton' may not hold for it; read its live Details before claiming fabric.
  3. Wrong link: /mens-gym-shirts/ on a women's piece. Use a women's gym page or /cropped-graphic-tees/.
  Fix: use only white-available cropped tees that are in fresh-designs.json (or that the director grades A in a note first). If fewer than 3 qualify, PARK this topic and write black cropped tee or another measured cropped phrase whose picks pass; re-read fabric facts per pick from the live Story.
