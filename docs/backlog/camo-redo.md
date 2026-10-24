# Camo hoodie redo (Sam 2026-10-22)

Sam looked at every camo hoodie: 27 of 29 are the same template (cream box badge, tall condensed sans, orange second line) and all print at TOP 0, jammed under the collar. Verdict: "we can't have them that high and we can't have all look the same." Each one must be its own design, still on brand: the snarky joke stays, with a picture that makes the joke land (cute and funny, or cinematic and deadpan).

## Rules for every item below (and every new camo or hoodie build from now on)
1. **Placement (Sam picked from mockups, 2026-10-22).** Never TOP 0 on a hoodie or sweatshirt. IND4000 #1543 (print area 2100 x 2100 px): center chest at FW 1500 (10 in), TOP 400, and the art's height must fit (TOP + height <= 2100; at 11 in a tall badge ran off the bottom). Design lockups wider than tall so 10-11 in fits; up to FW 1650 when it fits. Placement B3 (half the items, see A/B test) is a small left chest pushed all the way out toward the side seam: FW 600-650, TOP 300, left = 2100 - FW (wearer's left; Sam said the first try sat too close to center). Check the front mockup at phone size: the art clears the collar by about 3 in and nothing is clipped.
2. **No template.** No cream box or patch frame behind the art, no tall condensed sans (Oswald, Bebas, Anton, League Gothic), no default orange second line. Colors come from the art. The cream contour halo (camo-halo.py) for legibility is fine; a box is not.
3. **Each item uses its assigned style and a font no other item in the same run uses.** The picture must act out the joke (the bear asleep at his post, the elk mid-bellow), never a generic animal next to words.
4. Keep the existing joke unless a better one in the same idea comes up; if the line changes, 7i applies (title, SEO).
5. Redo in place on the existing product (builder step 2, type redo): new art, new Printful file and position, re-sync, new mockups, new cover, never a new product. Twins (#830-834, #900-902, #955) get their own camo art; the parent product stays as is.
6. Review sheet shows the front mockup at phone size. The director sends back anything that looks like a sibling of another item in this list.

## Lifestyle photos (Sam 2026-10-22: "Even the lifestyles of the camo are too high... worth getting right and using fal credit... one of our biggest gaps")
The old camo covers copied the collar-high print. Every redo gets **two new AI lifestyle photos** (fal, scripts/fal-photo.py, seedream), image 1 (cover) and image 2. Old covers are replaced, never kept.
1. **Only after the new print is synced.** Pass the NEW Printful front mockup (placement above) as `--design`. Never the old mockup or the old cover.
2. **Prompt the placement:** "the print is centered on the chest, its top about three inches below the collar seam, about ten inches wide, hood visible behind the neck". For S8: "small print on the left chest near the side, about four inches wide".
3. **Scenes that sell the joke, shot like a campaign:** real places at real light (deer stand at first light, duck blind in fog, tailgate at dusk, campfire at night, barn door, a fishing dock). Each of the 27 gets its own scene. One person or a couple from docs/model-registry.md never used before (R6.11), the audience the title names (Men's = man, Women's = woman, Unisex = man and woman). The garment's camo must be the blank's own pattern and color (Forest, Darkwood, Black, Duck), with the hood visible.
4. **Reject and retry (up to 3 calls per photo)** if the top of the print is within about 2 in of the collar, if the print is clearly bigger or smaller than the mockup, if any letter is wrong at 200%, if a hand or hair touches the print, or if the camo is the wrong pattern. After 3 failed calls use the clean Printful flat shot for that slot and log it. Never a composite (R6.10).
5. **Spend:** about $0.40 per hoodie (2 photos x up to 3 calls x $0.065), about $11 for all 27 plus art. Log every call; fal_budget.py stops you at the wallet limit.
6. **Image order (R6.13):** cover, second lifestyle, front mockup per color, logo back last.

## Placement A/B test (Sam 2026-10-22)
Half the redos print **A+** (center chest, FW 1500 = 10 in, TOP 400) and half print **B3** (small left chest at the side seam, FW 600-650, TOP 300, left = 2100 - FW). Sales decide; the winner then becomes the standard and the losing half gets redone. The arm is in the Placement column below (alternating down the list, so every style shows up in both arms).
- Tag each product `placement-a` or `placement-b` in Shopify so sales, add-to-carts and clicks can be split by arm.
- B3 art is designed for 4 in: one big, simple picture and a joke of 6 words or fewer, bold enough to read on the phone mockup. If the joke is longer, shorten it in the same idea (7i applies).
- Lifestyle prompts follow the arm (A: centered, 10 in; B: small left chest near the side).
- S8 (left chest minimal) items follow the arm too; on an A item, S8 becomes a bold one-icon center print.

## Size and read checks (Sam 2026-10-23, after redos #1 and #2; required before REVIEW on every remaining item)
- **A+ (center 10 in):** the print must read as 10 in wide. Ink bounding box at least 85% of FW at its widest row, main art at least 75%. No tall narrow scene blocks: recompose landscape or square. Punch line cap height at least 0.6 in (90 px at 150 dpi), solid, heavy.
- **B3 (left chest):** the icon plus ONE short line, at most 3 words, cap height at least 0.35 in (53 px). Longer setup lines go in the title and copy, not on the chest. Art at least 70% of print height.
- **Every item:** 2 fal lifestyle photos before REVIEW (an item with none is not done).
- **B3 photos (director 2026-10-24; 3rd B3 item whose every photo came back with a garbled caption: #303, #289, #233):** the photo model cannot draw a 2 in caption legibly, so stop asking it to. Frame B3 photos waist-up from a few steps back, body turned three-quarters so the left chest faces the camera, and prompt "small left-chest graphic near the side seam, its lettering too small to read" with the flattened print as --design. A caption that is a soft blur at that size passes; letters that read as wrong words fail (R6.8). Check the icon matches the art (same character, colors and pose). Cans, cups and bottles must read as soda, water or coffee, never beer.
- **Sheet:** a phone-size crop of the chest; every printed word must be readable in it.
- **Director:** reject at REVIEW if any check above fails.

## Styles
- **S1 Cinematic:** painted film-still scene, dramatic light (dawn fog, golden hour, flash at night), title in a poster serif.
- **S2 Field guide:** vintage engraving or naturalist plate, serif or typewriter caption like a specimen label.
- **S3 Cute cartoon:** chunky, round character with big expression, bouncy hand-lettering.
- **S4 70s retro:** sunset stripes or rainbow arcs, arched rounded type, no box.
- **S5 Sketchbook:** loose ink and watercolor, handwritten marker lettering.
- **S6 Varsity:** collegiate arched type with a mascot illustration.
- **S7 Sign painter:** brush script plus block letters with a drop shadow.
- **S8 Left chest minimal:** small line icon plus a one-line joke, small left-chest placement.
- **S9 Woodcut:** two-color linocut with carved lettering.

## Order (take in this order, 2 per run; styles are interleaved so a run never repeats one)
| # | Item | Style | Placement |
|---|---|---|---|
| 1 | 830 Sasquatch Camera Shy | S1 | A+ |
| 2 | 303 Camp Security On Break | S4 | B3 |
| 3 | 292 Fluent in Honk | S8 | A+ |
| 4 | 289 Fake Friends (decoys) | S2 | B3 |
| 5 | 300 Doe Not Disturb | S5 | A+ |
| 6 | 233 Professional Tree Sitter | S6 | B3 |
| 7 | 290 Long Beard Short Temper | S9 | A+ |
| 8 | 288 Sit Wait Snack | S3 | B3 |
| 9 | 496 Not Lost Scouting | S7 | A+ |
| 10 | 224 Quack of Dawn | S1 | B3 |
| 11 | 901 Treat Me Like Wildlife | S4 | A+ |
| 12 | 301 I Saw You Move | S8 | B3 |
| 13 | 302 Antler Envy | S2 | A+ |
| 14 | 304 Playing Dead Till Friday | S5 | B3 |
| 15 | 831 Bald by Choice | S6 | A+ |
| 16 | 832 No Days Off (cows) | S9 | B3 |
| 17 | 299 Ducks in a Row (Mostly) | S3 | A+ |
| 18 | 230 Kick Up Dust | S7 | B3 |
| 19 | 231 Opening Day | S1 | A+ |
| 20 | 293 Full Draw Zero Deer | S4 | B3 |
| 21 | 834 Papa Has a Spot | S8 | A+ |
| 22 | 833 Catfish Caught Something Ugly | S2 | B3 |
| 23 | 900 Lone Wolf Early Bedtime | S5 | A+ |
| 24 | 902 Mountains Left on Read | S9 | B3 |
| 25 | 232 No Deer Today | S3 | A+ |
| 26 | 955 Running Late Bison Traffic | S7 | B3 |
| 27 | 291 Not Yelling I'm Bugling | S1 | A+ |

Not in this redo: #295 Deer Stand Princess and the pink AOP zip (all-over prints, already their own look; the AOP sweatshirts #296-306 sit at top 1700+, fine).
