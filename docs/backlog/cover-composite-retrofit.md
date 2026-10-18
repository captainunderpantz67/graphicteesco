# Replace composited covers (R6.10, Sam 2026-10-18)
158 LIVE items have a cover where our print was pasted onto an AI photo; Sam saw the prints sitting low, flat and off-angle.
Find them: items whose log mentions "composit" and status LIVE.
Fix per item, no fal: make the best Printful lifestyle mockup for the blank and cover color (scripts/pf-mockup.py, lifestyle style, audience per R6.3), save as public/covers/<handle>.webp, set it as the Shopify featured image, keep the alt text pattern, log "cover: printful-lifestyle (R6.10)". Same product, stays ACTIVE.
Who: builders on any run where fal is capped or the queue is empty, 15 per run, newest items first; director spot-checks 3 per run.

## Director call (2026-10-18 16:40 UTC): what to do when the Printful lifestyle style is worse
Lane C found the only lifestyle style for Bella+Canvas 6400 (#360, style 20552) puts hair and a cardigan over the print. Decision:
1. Swap only to a lifestyle mockup that passes R6 on its own: every letter of the print visible (no hair, hand, cardigan or prop over it), the right audience (R6.3), the offered color. Check it at 200% before swapping. Never swap to something worse than the current cover.
2. Per blank, try every lifestyle style Printful lists for that catalog id (scripts/pf-mockup.py) once and note the result below, so no lane re-tests a dead style. Start with the blanks most likely to pass: 3001 (#71), Gildan 18000 (#145), Gildan 18500 (#146).
3. Where no style passes for the blank (6400 / #360 so far), leave the current cover live and add `cover: fal-swap (R6.10)` to the item's log. Those get a new AI cover (R6.10 a: the print drawn by the model, every letter right at 200%, max 2 tries, --n 1) inside the $16 fal cap: at most 2 per lane per day, after that lane's REDO items and before new READY items. Newest items first.
4. Director spot-checks 3 swapped covers per run, as before.

| Blank | Lifestyle styles tried | Result |
|---|---|---|
| Bella+Canvas 6400 (#360) | 20552 Large Lifestyle front | FAIL: hair over the T of TOURNAMENT, cardigan over the print (#591, lane C 2026-10-18). Use fal-swap. |

**2026-10-18 Claude:** all 161 are hidden on the site now via src/data/retired-covers.json (cards and product pages show the Printful mockup). When an item gets a real cover (Printful lifestyle or a letter-perfect AI photo), remove its handle from that JSON in the same commit.

**2026-10-18 17:45 UTC Sam: Printful lifestyle mockups only, no fal at all for covers.** The "fal-swap" route for blanks with no passing style is cancelled: use the cleanest Printful flat or lifestyle mockup instead. fal has about $15 total left.
