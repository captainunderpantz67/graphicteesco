# Design briefs: build queue for the three bottom-KD collections (2026-10-06, re-ordered from market research 2026-10-08)

Goal: fill each of the three lowest-KD collections to **14 products**. Counts read live from Shopify (read-only) on 2026-10-06:

| Collection | Keyword (vol / KD, RankHero 2026-10-02/06) | Live now | Briefs here | Blank |
|---|---|---|---|---|
| Christmas shirts for women | christmas shirts for women — 5,400 / KD 14 | 4 (Gingerbread Lane, Merry & Bright, Cabin Christmas, Fresh Cut Christmas Trees) | **11 — build first (season)** | Bella+Canvas 6400 women's relaxed |
| Men's gym shirts | mens gym shirts — 18,100 / KD 10 | 3 (Iron & Sweat, Barbell Club, Plate Club) | 12 | Bella+Canvas 3001; #12 on an oversized garment-dyed blank (pump cover) |
| Western graphic tees | western graphic tees — 2,400 / KD 16 | 2 (Desert Rider, Desert Bloom) | 12 (7 women's 6400, 5 unisex 3001) | 6400 / 3001 |

**Order:** Christmas first. Search volume goes 6,600 (Oct) → 22,200 (Nov) → 40,500 (Dec), so these need to be live and indexed by early November. Gym next (highest volume, lowest KD), then western.

**Queue order = physical order in this file.** Brief numbers are stable IDs: `docs/model-registry.md` rows point at them, so they were **not** renumbered when the queue was re-ordered. New briefs take the next free numbers (#34, #35).

## Market research pass (2026-10-08)
Evidence for every brief is in **`docs/market-research.md`**: winning themes per niche, Etsy favorites/views from RankHero's top-listing samples, Amazon "bought in past month", and Google/Etsy shelf scans. In this pass:
- **Christmas:** 6 confirmed (#3, #5, #6, #7, #8, #10, some restyled), 4 replaced (#1 → Candy Cane Club, #2 → Vintage Snowman, #4 → Pink Christmas Trees, #9 → Holly Jolly), 1 new (#34 Ho Ho Howdy).
- **Gym:** 6 replaced (#12 → Uphill pump cover, #13 → Iron Sharpens Iron, #14 → Marble Statue Curl, #16 → Golden Era Pose, #19 → Strong & Courageous, #20 → The Lifter Card), #11 restyled to Deadlift Skeleton, 1 new (#35 Knight Lifting). #15, #17, #18 and #21 were kept and moved down the queue.
- **Western:** 4 replaced (#23 → Wild West Rider, #30 → Saddle Blanket Steer, #31 → Desert Rattler, #33 → Vintage Bison), #28's primary upgraded to `rodeo t shirt`, and the queue re-ordered (#24 cow skull first).

## Keyword check: RankHero, re-measured 2026-10-08 (supersedes the 2026-10-06 table and every "unmeasured" mark)
Every primary below now carries its measured Etsy-search volume / KD from `https://www.rankhero.com/keywords/<slug>`, fetched 2026-10-08. The full list is in `docs/market-research.md`.

**Christmas long-tails are KD 33–60.** They exist to deepen `/christmas-shirts-for-women/` (KD 14), not to rank alone. Lowest-KD Christmas finds: **candy cane shirt 1,900 / 34**, holly jolly shirt 210 / 33, nutcracker shirt 1,000 / 42.

**Gym:** pump cover **22,200 / 28** · oversized gym shirt 5,400 / 30 · **iron sharpens iron shirt 720 / 27** · vintage gym shirt 480 / 30 · jesus gym shirt 320 / 32 · deadlift 210 / 33 · bodybuilding 1,600 / 36 · powerlifting 880 / 42 · funny gym shirt 3,600 / 45 (KD 36–50 is fine here: the collection has 6+ designs and 400+ words).

**Western:** **rodeo t shirt 5,400 / 32** · **bison shirt 1,900 / 34** · aztec shirt 1,300 / 38 · bull riding 720 / 30 · rattlesnake 260 / 35 · cow skull 480 / 46 · howdy 480 / 53 (KD > 50: kept only as depth for the KD 16 hub, because its proof is the strongest in the niche).

**Dropped for no measurable demand or weak proof:** Christmas cookie (210 / 56), hot cocoa (170 / 51), Christmas movie (licensed-dominated), garage gym, early-morning workout, rest day, kettlebell (140 / 36, no standout seller), bench press (no volume), ranch hand (30 / 50), cowboy hat graphic tee (110 / 58), cactus (720 / 50, weak proof).

## Rules every brief follows
- **Art:** original, vintage screen-print look, 3–4 ink limited palette. **Recreate the winning theme, never a listing's art** (store-rules "Design art"). No licensed characters, brands, sports teams, associations, gym chains, film/song titles or real places' trademarks. Excluded on purpose: Disney/Toy Story, Grinch, Home Alone, "Save a Horse", "Long Live Cowgirls", "Two Dozen Roses", "Cowboy Carter", "Cowboy Killer", "Candy Cane Lane" (a film title), the "holly jolly Christmas" lyric line, Spartan-helmet crests, and real athletes' likenesses. Designs that echo an existing product (barbell/plate crests, desert scenes, dirt roads, gingerbread, cabins, tree trucks, "Merry & Bright") were left out.
- **Title / handle:** SOP convention `<Audience> <Niche> – <Design> Tee`; handle `<audience>-<niche>-<design>-graphic-tee`. $29.99 flat.
- **Blank facts:** Bella+Canvas 3001 and 6400 are lightweight 4.2 oz. Shirt colors listed are targets; confirm each is stocked on that blank in Printful before publishing, and only list colors actually offered. **Pump-cover blank — DECIDED (Sam, 2026-10-09):** Printful #1482 All-Over Print Oversized Cotton T-Shirt (pump cover, $39.99). Heavyweight 8.85 oz, 95% cotton / 5% elastane, oversized boxy fit, all-over print (the art + background wrap the whole shirt, so there are no blank colors: the design's own background IS the shirt color — options are Size only, 2XS–5XL). $39.99 flat on every size. #12, #11, #21 and #35 are all pump covers on this blank. Make them special: full-bleed art front, a back panel design (not just the neck logo), and the colorway written into the art (e.g. washed black, bone, sand).
- **Keyword gate:** every primary is measured (RankHero, 2026-10-08). Variants are measured where a number is shown; otherwise they are bank phrases (`src/data/keyword-bank.json`, unmeasured). Each variant is assigned to one product only. No primary repeats a primary already used on a live product.
- **Cover photo:** one `scripts/fal-photo.py` run per product, `--model seedream`, design file at `designs/<slug>.png` (the exact print file). Each person is new and is reserved in `docs/model-registry.md` (rows 11–43, 65–66). Eyeball every result against the imagery rules (whole face + headroom, print unchanged and unobstructed, real ink on fabric, props at the hip) before adding it to `src/data/covers.ts`.
- **Product photos (Printful flats per image standard v2):** front, back logo, 2–3 colors, print close-up. No Printful stock models.


## Christmas shirts for women — 11 briefs (list these first, in this order)

### 6. Women's Christmas – Retro Santa Tee
- **Handle:** `womens-christmas-retro-santa-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** An original round-faced 1950s-style Santa (not any soda or brand mascot), mid-wink, with a sack of wrapped gifts, drawn like a mid-century greeting card with off-register print texture and a few tiny stars. Restyled to the winning pink-and-red retro look. Palette: tomato red, bubblegum pink, cream, black.
- **Text on shirt:** HO HO HO (stacked retro script)
- **Shirt colors:** White, Heather Peach or Pink (whichever 6400 offers), Heather Red (confirm)
- **Primary keyword:** retro Santa shirt — 390 / KD 60 (RankHero 2026-10-08)
- **Variants:** vintage Santa shirt — 390 / 60; christmas shirt ho ho ho (bank)
- **Proof:** top Etsy listing 3,509 favs / 89,812 views; 568 / 14,494; most frequent motif on Etsy Google Shopping results (market-research.md, Christmas #1)
- **Cover model:** registry #16 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/retro-santa.png --name retro-santa --model seedream \
    --person "White woman in her mid-40s, chin-length auburn hair with a side part, light freckles, average build" \
    --scene "at a cut-your-own Christmas tree farm holding a cup of hot cider beside rows of fir trees, light snow, a hand saw leaning on a tree to the side" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-retro-santa-graphic-tee
```

### 1. Women's Christmas – Candy Cane Club Tee  *(replaces Cookie Swap)*
- **Handle:** `womens-christmas-candy-cane-club-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** A bundle of five striped candy canes tied with a big floppy satin bow, round peppermint swirls scattered around, a few sparkle stars. Coquette-meets-1950s-candy-shop print, flat inks with a soft halftone. Palette: cherry red, soft pink, cream, pine green.
- **Text on shirt:** CANDY CANE CLUB (arched retro serif above) / "Est. December" (small below)
- **Shirt colors:** White, Heather Mauve, Black (confirm on the 6400 in Printful)
- **Primary keyword:** candy cane shirt — 1,900 / KD 34 (RankHero 2026-10-08)
- **Variants:** peppermint shirt — 170 / 34; cute christmas shirts for women (bank)
- **Proof:** Etsy candy-cane sellers show 4.9 (9,674) and 4.8 (11,983) ratings on Google; "Peppermint/Candy Cane coquette" tees all over Etsy Shopping (market-research.md, Christmas #4)
- **Cover model:** registry #11 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/candy-cane-club.png --name candy-cane-club --model seedream \
    --person "Black woman in her late 50s, grey locs pinned up in a high bun, warm round face, reading glasses on a beaded chain" \
    --scene "in a warm home kitchen during a Christmas cookie swap, jars of peppermint candy and cooling racks of iced cookies on the counter behind her, afternoon window light" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-candy-cane-club-graphic-tee
```

### 3. Women's Christmas – Nutcracker Bow Tee
- **Handle:** `womens-christmas-nutcracker-bow-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** An original toy-soldier nutcracker in a tall shako hat with a pink bow tied on it, red coat, standing at attention, drawn as preppy watercolor translated to flat screen-print shapes; small holly sprigs either side. Restyled from "march" to the winning preppy-pink nutcracker look. No ballet company names or film references. Palette: cranberry, blush pink, pine green, mustard gold.
- **Text on shirt:** none (art only)
- **Shirt colors:** White, Heather Mauve, Black (confirm)
- **Primary keyword:** nutcracker shirt — 1,000 / KD 42 (RankHero 2026-10-08)
- **Variants:** vintage christmas shirts for women (bank)
- **Proof:** 482 / 17,781 and 311 / 12,863 favs/views; Etsy nutcracker shops at 4.9 (4,603), 4.8 (6,534) and 4.9 (5,338) on Google (market-research.md, Christmas #3)
- **Cover model:** registry #13 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/nutcracker-bow.png --name nutcracker-bow --model seedream \
    --person "White woman in her early 60s, short white pixie cut, slim build, light smile lines, small gold hoop earrings" \
    --scene "browsing a Christmas market stall lined with wooden nutcrackers and ornaments, late afternoon, cold air, warm stall lights" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-nutcracker-bow-graphic-tee
```

### 2. Women's Christmas – Vintage Snowman Tee  *(replaces Hot Cocoa Club)*
- **Handle:** `womens-christmas-vintage-snowman-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** A 1950s storybook snowman with coal buttons, a plaid scarf and a knit cap, holding a steaming mug of cocoa piled with marshmallows; simple 6-point snowflakes around. Flat screen-print shading with a little halftone. Palette: cherry red, pine green, cream, cocoa brown.
- **Text on shirt:** SNOW DAY (small arched caps over the hat)
- **Shirt colors:** Athletic Heather, Heather Navy, White (confirm)
- **Primary keyword:** snowman shirt — 1,600 / KD 46 (RankHero 2026-10-08)
- **Variants:** hot chocolate shirt — 170 / 34; christmas shirts cute (bank)
- **Proof:** snowman listing 6,460 favs / 494,443 views (sweatshirt; same art sells as a tee); Amazon "snowman shirt women" ~1,100 bought/mo (market-research.md, Christmas #2)
- **Cover model:** registry #12 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/vintage-snowman.png --name vintage-snowman --model seedream \
    --person "Vietnamese-American woman in her early 40s, shoulder-length layered dark hair with caramel highlights, slim build" \
    --scene "at an outdoor Christmas market cocoa stand at dusk, wooden stalls with pine garland and warm string lights blurred behind her, a paper cocoa cup held at her side" \
    --shirt "athletic heather" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-vintage-snowman-graphic-tee
```

### 4. Women's Christmas – Pink Christmas Trees Tee  *(replaces Glass Ornaments)*
- **Handle:** `womens-christmas-pink-christmas-trees-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** Three hand-brushed Christmas trees in a row, one pink-and-cream striped, one solid red, one pine green, each topped with a tiny bow instead of a star; dry-brush texture kept in the screen-print. No truck, no cabin (live products already cover those). Palette: bubblegum pink, cherry red, pine green, cream.
- **Text on shirt:** 'TIS THE SEASON (small caps under the trees)
- **Shirt colors:** White, Heather Mauve, Black (confirm)
- **Primary keyword:** Christmas tree shirt — 27,100 / KD 46 (RankHero 2026-10-08)
- **Variants:** pink christmas shirt — 590 / 66; christmas shirts vintage (bank)
- **Proof:** pink/leopard/brushstroke tree tees lead the tree shelf (82 / 3,355; 67 / 2,361); Amazon "christmas tree shirt women" ~300 bought/mo (market-research.md, Christmas #6)
- **Cover model:** registry #14 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/pink-christmas-trees.png --name pink-christmas-trees --model seedream \
    --person "Latina woman in her late 20s, long straight black hair with blunt bangs, petite build" \
    --scene "on a farmhouse front porch at blue hour beside a small potted Christmas tree with pink and red ornaments, porch light glowing" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-pink-christmas-trees-graphic-tee
```

### 8. Women's Christmas – Oh Deer Tee
- **Handle:** `womens-christmas-oh-deer-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** A cute vintage reindeer with a red bow tied on one antler and a sprig of holly, standing in light snow, woodcut texture with simple 6-point snowflakes. Restyled toward the winning cute/pink reindeer. Palette: warm brown, blush pink, cranberry, cream.
- **Text on shirt:** Oh Deer (playful retro script under the reindeer)
- **Shirt colors:** Heather Forest, Athletic Heather, White (confirm)
- **Primary keyword:** reindeer shirt — 1,300 / KD 52 (RankHero 2026-10-08; better than the 10-06 swap to "Christmas dog shirt" 880 / 63)
- **Variants:** christmas shirts reindeer (bank)
- **Proof:** funny reindeer 876 / 36,644 and 237 / 11,630; "pink bubble-gum reindeer" coquette tees on Etsy Shopping (market-research.md, Christmas #7)
- **Cover model:** registry #18 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/oh-deer.png --name oh-deer --model seedream \
    --person "Black woman in her mid-20s, short platinum-dyed buzz cut, tall slim build, small gold nose stud" \
    --scene "walking through a snowy Christmas tree farm between rows of noble firs, a red wagon of cut trees at her side, soft falling snow" \
    --shirt "heather forest" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-oh-deer-graphic-tee
```

### 9. Women's Christmas – Holly Jolly Tee  *(replaces Christmas Movie Night)*
- **Handle:** `womens-christmas-holly-jolly-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** Big stacked groovy 1970s lettering "HOLLY / JOLLY" with a holly sprig and berries tucked into the letters, set on a little felt-pennant shape with stitched edge. Only the two words, never the song's lyric line. Palette: cherry red, pine green, pink, cream.
- **Text on shirt:** HOLLY JOLLY
- **Shirt colors:** White, Heather Mauve, Athletic Heather (confirm)
- **Primary keyword:** holly jolly shirt — 210 / KD 33 (RankHero 2026-10-08)
- **Variants:** jolly shirt — 140 / 36; christmas shirts sayings (bank)
- **Proof:** Etsy "Holly Jolly" sellers at 4.8 (7,338) and 4.9 (394) on Google; retro, patchwork and pennant Holly Jolly tees all over Etsy Shopping (market-research.md, Christmas #10)
- **Cover model:** registry #19 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/holly-jolly.png --name holly-jolly --model seedream \
    --person "White woman in her early 50s, long straight grey-blonde hair, reading glasses pushed up on her head, soft build" \
    --scene "at a small-town Christmas parade on a main street at dusk, bundled crowd and lit garland on the lampposts behind her, a cup of cocoa at her side" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-holly-jolly-graphic-tee
```

### 5. Women's Christmas – Christmas Cats Tee  *(confirms the 10-06 swap)*
- **Handle:** `womens-christmas-christmas-cats-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** Two cats (one orange tabby, one tuxedo) tangled in a strand of colored bulbs inside a round evergreen wreath with a plaid bow, one batting an ornament. Flat cartoon screen-print. Palette: pine green, cranberry, mustard, cream.
- **Text on shirt:** none (art only)
- **Shirt colors:** Athletic Heather, White, Heather Mauve (confirm)
- **Primary keyword:** Christmas cat shirt — 880 / KD 56 (RankHero 2026-10-08)
- **Variants:** christmas shirts country (bank)
- **Proof:** Christmas cats 215 / 4,442; Amazon "christmas cat shirt women" ~150 bought/mo (market-research.md, Christmas #9)
- **Cover model:** registry #15 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/christmas-cats.png --name christmas-cats --model seedream \
    --person "Native American woman in her mid-30s, long straight black hair worn down past her shoulders, medium build, small silver stud earrings" \
    --scene "in a cozy living room decorated for Christmas, a lit tree and a cat curled on an armchair behind her, warm lamp light, snow outside the window" \
    --shirt "athletic heather" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-christmas-cats-graphic-tee
```

### 7. Women's Christmas – Lit Up Bow Tee
- **Handle:** `womens-christmas-lit-up-bow-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** A strand of oversized vintage C9 bulbs tied into one big coquette bow, each bulb a different color with glow rays, cord drawn as a single flowing line. Restyled from a loose strand to the trending bow shape. Palette: red, green, mustard, pink, cream on dark.
- **Text on shirt:** 'Tis the Season (small script under the bow; never "Merry & Bright", which is a live product)
- **Shirt colors:** Black, Heather Navy (confirm)
- **Primary keyword:** Christmas lights shirt — 320 / KD 60 (RankHero 2026-10-08)
- **Variants:** christmas bow shirt — 210 / 70; christmas shirts lights (bank)
- **Proof:** lights tee 200 / 7,234; lights-bow coquette tees across Etsy and Walmart; Amazon "christmas lights shirt women" ~200 bought/mo (market-research.md, Christmas #5 + #11)
- **Cover model:** registry #17 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/lit-up-bow.png --name lit-up-bow --model seedream \
    --person "Middle Eastern woman in her early 30s, long dark wavy hair worn down, medium build" \
    --scene "on a front porch at dusk, eaves and railings wrapped in big colored string lights, a wreath on the porch post, cold evening air" \
    --shirt "black" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-lit-up-bow-graphic-tee
```

### 10. Women's Christmas – O Holy Night Tee
- **Handle:** `womens-christmas-o-holy-night-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** A single bright star over a simple wooden stable on a hill, rays fanning down, a few sheep in silhouette, night sky in deep navy. Reverent, vintage Christmas-card linocut. ("O Holy Night" is a public-domain 1847 carol title.) Palette: navy, gold, cream.
- **Text on shirt:** O Holy Night (elegant serif) / "Luke 2:11" (small)
- **Shirt colors:** Heather Navy, Black, White (confirm)
- **Primary keyword:** Christian Christmas shirt — 880 / KD 60 (RankHero 2026-10-08; replaces "religious Christmas shirt", vol -- / KD 84)
- **Variants:** nativity shirt — 140 / 54; christmas shirts christian (bank)
- **Proof:** Christian Christmas tees 65 / 2,922 and 56 / 3,040; steady 880/mo demand (market-research.md, Christmas #14)
- **Cover model:** registry #20 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/o-holy-night.png --name o-holy-night --model seedream \
    --person "Filipina woman in her late 40s, shoulder-length straight black hair with a side part, petite build, simple cross necklace" \
    --scene "on the steps of a small white country church on Christmas Eve, candle lanterns along the path and a wreath on the door, early evening" \
    --shirt "heather navy" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-o-holy-night-graphic-tee
```

### 34. Women's Christmas – Ho Ho Howdy Tee  *(new)*
- **Handle:** `womens-christmas-ho-ho-howdy-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** An original cowboy Santa tipping a red felt cowboy hat, white beard, swinging a lasso made of a string of Christmas lights; a pair of tooled boots and a sprig of holly below. Retro western print with a rope-border frame. No brand or song references. Palette: cherry red, tan, turquoise, cream.
- **Text on shirt:** HO HO HOWDY (western slab serif, arched)
- **Shirt colors:** White, Heather Mauve, Athletic Heather (confirm)
- **Primary keyword:** country Christmas shirt — 170 / KD 56 (RankHero 2026-10-08)
- **Variants:** cowboy santa shirt — 90 / 57
- **Proof:** retro cowboy-Christmas "Howdy" tee 182 / 2,377; "Howdy Hos Santa Cowboy", "Western Santa", "Merry Christmas Y'all Cowboy" all on Etsy Shopping; cross-links the Western collection (market-research.md, Christmas #13)
- **Cover model:** registry #65 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/ho-ho-howdy.png --name ho-ho-howdy --model seedream \
    --person "Greek-American woman in her early 50s, short dark curly hair cropped close, olive skin, soft build, small gold stud earrings" \
    --scene "at a ranch Christmas party in a decorated wooden barn, hay bales with red bows and strings of warm lights behind her, a horse looking over a stall door in the background" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-ho-ho-howdy-graphic-tee
```


## Men's gym shirts + pump covers — 12 briefs (in this order)

### 12. Men's Gym – Uphill Pump Cover Tee  *(replaces Garage Gym)*
- **Handle:** `mens-gym-uphill-pump-cover-graphic-tee` · **Blank:** Printful #1482 All-Over Print Oversized Cotton T-Shirt (pump cover, $39.99) — see Rules
- **Art:** An original engraved Greek figure in a short tunic rolling a giant cast-iron weight plate up a steep rocky mountain, laurel border, cracked-marble texture, like an old book engraving. Our own take on the myth; no copied composition. Palette: black, bone cream, faded terracotta.
- **Text on shirt:** KEEP PUSHING (small serif caps under the scene)
- **Shirt colors:** none (all-over print) — print the art on a washed-black background; back panel: a large cracked plate + KEEP PUSHING
- **Primary keyword:** pump cover — 22,200 / KD 28 (RankHero 2026-10-08)
- **Variants:** oversized gym shirt — 5,400 / 30; sisyphus shirt — 110 / 40
- **Proof:** "Sisyphus Gym Pump Cover" 1,583 favs / 18,480 views at $41; pump-cover winners are on Comfort Colors; Amazon washed oversized tees 2K–3K+ bought/mo (market-research.md, Gym #2 + format finding)
- **Cover model:** registry #22 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/uphill-pump-cover.png --name uphill-pump-cover --model seedream \
    --person "White man in his mid-50s, shaved head, short grey goatee, stocky barrel-chested build" \
    --scene "in a gritty warehouse strength gym between sets, chalk on his hands, a loaded barbell on the floor and plate racks behind him, roll-up door light" \
    --shirt "black garment-dyed" --fit "oversized boxy heavyweight cotton t-shirt" \
    --cover mens-gym-uphill-pump-cover-graphic-tee
```

### 13. Men's Gym – Iron Sharpens Iron Tee  *(replaces Swing Heavy)*
- **Handle:** `mens-gym-iron-sharpens-iron-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee, listed as men's)
- **Art:** Two vintage barbells crossed over a blacksmith's anvil, sparks flying from the contact point, hammer resting at the side; heavy woodcut lines. Verse reference only, no church or ministry names. Palette: charcoal, burnt orange, bone cream.
- **Text on shirt:** IRON SHARPENS IRON (arched slab serif) / "Proverbs 27:17" (small)
- **Shirt colors:** Black, Heather Navy, Vintage White (confirm)
- **Primary keyword:** iron sharpens iron shirt — 720 / KD 27 (RankHero 2026-10-08)
- **Variants:** christian gym shirt — 480 / 45
- **Proof:** "Iron Sharpens Iron Christian Gym Shirt" 836 favs / 15,998 views (market-research.md, Gym #4)
- **Cover model:** registry #23 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/iron-sharpens-iron.png --name iron-sharpens-iron --model seedream \
    --person "Korean-American man in his early 30s, short black undercut hair, lean athletic build, clean-shaven" \
    --scene "in a small church-run community gym after an early morning session, squat racks and a hand-painted wall verse blurred behind him, window daylight" \
    --shirt "black" --fit "classic-fit cotton t-shirt" \
    --cover mens-gym-iron-sharpens-iron-graphic-tee
```

### 11. Men's Gym – Deadlift Skeleton Tee  *(Deadlift Society restyled)*
- **Handle:** `mens-gym-deadlift-skeleton-graphic-tee` · **Blank:** Printful #1482 All-Over Print Oversized Cotton T-Shirt (pump cover, $39.99) — see Rules
- **Art:** An original 1930s rubber-hose-cartoon skeleton in a headband, mid-deadlift, the bar bending under huge plates, sweat drops and chalk puff. Our own character, distressed print. Palette: bone cream, black, burnt orange.
- **Text on shirt:** DEAD LIFT (bold retro caps under the skeleton)
- **Shirt colors:** Black, Vintage White, Heather Navy (confirm)
- **Primary keyword:** deadlift shirt — 210 / KD 33 (RankHero 2026-10-08)
- **Variants:** mens vintage gym t shirts (bank)
- **Proof:** "Dead Lift Skeleton Pump Cover" 1,338 favs / 15,163 views at $47.99 (market-research.md, Gym #3)
- **Cover model:** registry #21 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/deadlift-skeleton.png --name deadlift-skeleton --model seedream \
    --person "Black man in his late 20s, close-cropped fade haircut, clean-shaven, heavy muscular build" \
    --scene "on a deadlift platform in a no-frills powerlifting gym, chalk bucket and loaded bar on the floor beside him, rubber flooring, overhead fluorescent light" \
    --shirt "black" --fit "classic-fit cotton t-shirt" \
    --cover mens-gym-deadlift-skeleton-graphic-tee
```

### 14. Men's Gym – Marble Statue Curl Tee  *(replaces Before Sunrise)*
- **Handle:** `mens-gym-marble-statue-curl-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee, listed as men's)
- **Art:** An original classical marble statue (no specific real artwork) mid-dumbbell-curl on a museum plinth, cracked-stone texture, museum-placard type underneath. Palette: marble grey, bone cream, black, faded gold.
- **Text on shirt:** "Study in Hypertrophy, c. 400 B.C." (small museum-placard serif)
- **Shirt colors:** Vintage White, Black, Athletic Heather (confirm)
- **Primary keyword:** vintage gym shirt — 480 / KD 30 (RankHero 2026-10-08)
- **Variants:** retro gym shirt — 210 / 33
- **Proof:** classical-art gym parody "Mona Lifta" 374 / 5,903; Greek-myth gym 1,583 favs; Amazon "vintage gym shirt men" ~1,350 bought/mo (market-research.md, Gym #6)
- **Cover model:** registry #24 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/marble-statue-curl.png --name marble-statue-curl --model seedream \
    --person "Mexican-American man in his early 40s, slicked-back black hair with grey temples, broad build, short trimmed mustache" \
    --scene "in a classic old-school iron gym with chrome dumbbell racks, worn leather benches and big mirrors, warm overhead light" \
    --shirt "vintage white" --fit "classic-fit cotton t-shirt" \
    --cover mens-gym-marble-statue-curl-graphic-tee
```

### 35. Men's Gym – Knight Lifting Tee  *(new)*
- **Handle:** `mens-gym-knight-lifting-graphic-tee` · **Blank:** Printful #1482 All-Over Print Oversized Cotton T-Shirt (pump cover, $39.99) — see Rules
- **Art:** An original armored knight overhead-pressing a barbell, drawn like a medieval woodcut / illuminated-manuscript marginal doodle, with a little snail and a banner. Our own mock-Old-English line, not the meme phrase other sellers use. Palette: parchment cream, black, oxblood, faded gold.
- **Text on shirt:** "Lifteth Heavy, Complaineth Not" (blackletter on a banner)
- **Shirt colors:** Vintage White, Black, Military Green (confirm)
- **Primary keyword:** funny gym shirt — 3,600 / KD 45 (RankHero 2026-10-08)
- **Variants:** gym bro shirt — 260 / 32; funny mens gym shirts (bank)
- **Proof:** medieval-knight gym tee 1,670 favs / 23,458 views; a copy at 257 / 2,073 (market-research.md, Gym #1)
- **Cover model:** registry #66 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/knight-lifting.png --name knight-lifting --model seedream \
    --person "Brazilian man in his early 30s, shoulder-length wavy brown hair, short stubble, tall athletic build" \
    --scene "in a stone-walled basement strength gym with iron plates on wooden pegs and a power rack behind him, warm Edison-bulb light" \
    --shirt "vintage white" --fit "classic-fit cotton t-shirt" \
    --cover mens-gym-knight-lifting-graphic-tee
```

### 20. Men's Gym – The Lifter Card Tee  *(replaces Squat Bench Deadlift)*
- **Handle:** `mens-gym-the-lifter-card-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee, listed as men's)
- **Art:** An original tarot-style card: a robed figure holding a loaded barbell overhead under a radiant sun, stars and moon in the corners, ornate card border, roman numeral "XXI" at the top. Our own card, not a copy of any deck. Palette: black, mustard gold, bone cream, oxblood.
- **Text on shirt:** THE LIFTER (card footer)
- **Shirt colors:** Black, Vintage White (confirm)
- **Primary keyword:** powerlifting shirt — 880 / KD 42 (RankHero 2026-10-08)
- **Variants:** weightlifting shirt — 880 / 47
- **Proof:** "The Deadlift Tarot Card" 683 favs / 9,512 views; Amazon "powerlifting shirt" ~1,600 bought/mo (market-research.md, Gym #5)
- **Cover model:** registry #30 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/the-lifter-card.png --name the-lifter-card --model seedream \
    --person "Middle Eastern man in his mid-40s, thick dark hair, full dark beard, no hat, barrel-chested heavy build" \
    --scene "in a powerlifting meet warm-up room, monolift and chalk bowl behind him, other lifters blurred in the background" \
    --shirt "black" --fit "classic-fit cotton t-shirt" \
    --cover mens-gym-the-lifter-card-graphic-tee
```

### 19. Men's Gym – Strong & Courageous Tee  *(replaces Rest Day Champion)*
- **Handle:** `mens-gym-strong-and-courageous-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee, listed as men's)
- **Art:** A roaring lion head in bold vintage engraving set above a horizontal loaded barbell, a small cross in the lion's mane highlights, simple badge frame. Palette: mustard gold, black, bone cream.
- **Text on shirt:** STRONG & COURAGEOUS (badge) / "Joshua 1:9" (small)
- **Shirt colors:** Black, Military Green, Vintage White (confirm)
- **Primary keyword:** jesus gym shirt — 320 / KD 32 (RankHero 2026-10-08)
- **Variants:** mens workout shirts graphic (bank)
- **Proof:** "Strong and Courageous Christian Pump Cover" 455 / 7,830; Christian gym tees 201 / 3,886 (market-research.md, Gym #4)
- **Cover model:** registry #29 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/strong-and-courageous.png --name strong-and-courageous --model seedream \
    --person "Filipino man in his late 30s, buzz cut, compact stocky build, clean-shaven, easy grin" \
    --scene "in a busy commercial gym at lunchtime, cable machines and dumbbell racks blurred behind him, a water bottle in his hand at his side" \
    --shirt "black" --fit "classic-fit cotton t-shirt" \
    --cover mens-gym-strong-and-courageous-graphic-tee
```

### 16. Men's Gym – Golden Era Pose Tee  *(replaces Bench Press Club)*
- **Handle:** `mens-gym-golden-era-pose-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee, listed as men's)
- **Art:** An anonymous 1970s-style bodybuilder silhouette hitting a double-biceps pose on a beach stage, halftone sunset with horizon stripes and palm shapes. No real athlete's likeness, no named beach or gym. Palette: burnt orange, mustard, sepia brown, cream.
- **Text on shirt:** GOLDEN ERA (retro 70s script) / "Built the Old Way" (small)
- **Shirt colors:** Vintage White, Heather Navy, Black (confirm)
- **Primary keyword:** bodybuilding shirt — 1,600 / KD 36 (RankHero 2026-10-08)
- **Variants:** lifting shirt — 1,900 / 40
- **Proof:** Amazon "bodybuilding shirt men" ~3,050 bought/mo; bodybuilding-parody tee 374 / 5,903 (market-research.md, Gym #10)
- **Cover model:** registry #26 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/golden-era-pose.png --name golden-era-pose --model seedream \
    --person "Indian man in his late 20s, short wavy black hair, clean-shaven, lean muscular build" \
    --scene "at an outdoor beach-side workout pen with iron weights on sand and palm trees behind him, late afternoon golden light" \
    --shirt "vintage white" --fit "classic-fit cotton t-shirt" \
    --cover mens-gym-golden-era-pose-graphic-tee
```

### 21. Men's Gym – Gym Rat Tee
- **Handle:** `mens-gym-gym-rat-graphic-tee` · **Blank:** Printful #1482 All-Over Print Oversized Cotton T-Shirt (pump cover, $39.99) — see Rules
- **Art:** An original cartoon rat in a sweatband and tank top curling a tiny dumbbell, drawn like a 1950s rubber-hose cartoon, laid out like a faded 90s bootleg tee (the winning look). No studio characters. Palette: grey, rust, mustard, cream.
- **Text on shirt:** GYM RAT (bubbly retro caps)
- **Shirt colors:** Athletic Heather, Black, Military Green (confirm)
- **Primary keyword:** gym rat shirt — 720 / KD 43 (RankHero 2026-10-08)
- **Variants:** fun mens gym shirts (bank)
- **Proof:** "Gym Rat Vintage 90s" pump cover 102 / 864; washed 90s gym graphics 219 / 2,770 (market-research.md, Gym #11)
- **Cover model:** registry #31 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/gym-rat.png --name gym-rat --model seedream \
    --person "Irish-American white man in his early 30s, short red hair, short trimmed red beard, freckles, medium build" \
    --scene "in an old-school basement gym with worn dumbbells, a chalkboard of lifts on the cinderblock wall and a single high window" \
    --shirt "athletic heather" --fit "classic-fit cotton t-shirt" \
    --cover mens-gym-gym-rat-graphic-tee
```

### 15. Men's Gym – Old School Strength Tee
- **Handle:** `mens-gym-old-school-strength-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee, listed as men's)
- **Art:** An original turn-of-the-century strongman with a handlebar mustache and leopard-print singlet hoisting a globe barbell overhead, drawn like a 1900s circus-poster engraving, printed faded. Palette: rust, mustard, cream, black.
- **Text on shirt:** OLD SCHOOL STRENGTH (curved banner) / "Est. Long Before Machines" (small)
- **Shirt colors:** Vintage White, Black, Military Green (confirm)
- **Primary keyword:** strongman shirt — 170 / KD 34 (RankHero 2026-10-06)
- **Variants:** mens retro gym shirts (bank)
- **Proof:** weak (no standout listing); kept lower in the queue for depth
- **Cover model:** registry #25 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/old-school-strength.png --name old-school-strength --model seedream \
    --person "Samoan man in his mid-30s, long black hair tied in a bun, big powerful build, broad smile" \
    --scene "in an outdoor strongman training yard with atlas stones, a log bar and a tire on the gravel behind him, late afternoon sun" \
    --shirt "vintage white" --fit "classic-fit cotton t-shirt" \
    --cover mens-gym-old-school-strength-graphic-tee
```

### 18. Men's Gym – Leg Day Survivor Tee
- **Handle:** `mens-gym-leg-day-survivor-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee, listed as men's)
- **Art:** A cartoon pair of wobbly legs in tube socks walking away from a squat rack, sweat drops and stars, drawn in a 1970s comic-strip style. Palette: mustard, navy, red, cream.
- **Text on shirt:** I SURVIVED LEG DAY (bold retro caps) / "Barely" (small script)
- **Shirt colors:** Heather Navy, Athletic Heather (confirm)
- **Primary keyword:** leg day shirt — 260 / KD 42 (RankHero 2026-10-08)
- **Variants:** mens gym shirts cotton (bank)
- **Proof:** weak ("Leg Day pump cover" 56 / 768); lower in the queue
- **Cover model:** registry #28 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/leg-day-survivor.png --name leg-day-survivor --model seedream \
    --person "White man in his early 20s, shaggy blond hair, clean-shaven, tall lanky build" \
    --scene "sitting on a weight bench next to a squat rack in a college-town gym after leg day, catching his breath, rubber floor and racks behind him" \
    --shirt "heather navy" --fit "classic-fit cotton t-shirt" \
    --cover mens-gym-leg-day-survivor-graphic-tee
```

### 17. Men's Gym – Heavy Bag Dept. Tee
- **Handle:** `mens-gym-heavy-bag-dept-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee, listed as men's)
- **Art:** A worn leather heavy bag hanging on a chain with a pair of laced vintage gloves draped on the hook, drawn like a 1940s fight-gym poster. No promotions, belts or fighter names. Palette: oxblood, mustard, cream, black.
- **Text on shirt:** BOXING CLUB / HEAVY BAG DEPT. (stacked condensed caps)
- **Shirt colors:** Black, Vintage White (confirm)
- **Primary keyword:** boxing gym shirt — 210 / KD 40 (RankHero 2026-10-06)
- **Variants:** mens vintage gym shirts (bank)
- **Proof:** weak; last in the queue
- **Cover model:** registry #27 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/heavy-bag-dept.png --name heavy-bag-dept --model seedream \
    --person "Black man in his early 60s, short grey hair, neatly trimmed grey mustache, wiry fit build" \
    --scene "in an old boxing gym with a row of heavy bags on chains, a ring rope corner in the background, brick walls and window light" \
    --shirt "black" --fit "classic-fit cotton t-shirt" \
    --cover mens-gym-heavy-bag-dept-graphic-tee
```


## Western graphic tees + rodeo — 12 briefs (in this order)

### 24. Women's Western – Steer Skull & Wildflowers Tee
- **Handle:** `womens-western-steer-skull-wildflowers-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** A sun-bleached steer skull with long curved horns resting on a bed of prairie wildflowers (paintbrush, coneflower, sage), boho fine-line mixed with woodcut texture, which is the niche's winning look. Palette: terracotta, sage, dusty rose, cream (never orange-and-white, so it reads as no team).
- **Text on shirt:** none (art only)
- **Shirt colors:** White, Heather Mauve, Black (confirm)
- **Primary keyword:** cow skull shirt — 480 / KD 46 (RankHero 2026-10-08)
- **Variants:** bull skull shirt — 390 / 44; retro western graphic tees (bank)
- **Proof:** boho cow/bull skull tees 2,803 / 85,483 · 2,240 / 32,660 · 1,831 / 18,683 · 1,503 / 36,502 favs/views; Amazon "cow skull shirt women" ~900 bought/mo (market-research.md, Western #1)
- **Cover model:** registry #34 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/steer-skull-wildflowers.png --name steer-skull-wildflowers --model seedream \
    --person "Mexican-American woman in her mid-50s, dark hair in a low chignon, laugh lines, sturdy build, turquoise earrings" \
    --scene "on the porch of a working ranch house, a wooden corral and cattle in the pasture behind her, golden late-day light" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-western-steer-skull-wildflowers-graphic-tee
```

### 28. Women's Western – Saturday Night Rodeo Tee
- **Handle:** `womens-western-saturday-night-rodeo-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** A vintage letterpress rodeo poster: saddle-bronc rider in silhouette, woodtype headlines, star rules and a worn paper texture. No real towns or associations named. Palette: red, navy, mustard, cream.
- **Text on shirt:** SATURDAY NIGHT RODEO / "Gates Open at Six" (woodtype poster type)
- **Shirt colors:** White, Athletic Heather (confirm)
- **Primary keyword:** rodeo t shirt — 5,400 / KD 32 (RankHero 2026-10-08; moved here from #30)
- **Variants:** vintage rodeo shirt — 320 / 32; women's vintage western graphic tees (bank)
- **Proof:** "Vintage Western Graphic Tee: American Rodeo" 239 / 4,398; Amazon "rodeo t shirt women" ~1,850 and "vintage rodeo shirt" ~1,200 bought/mo; Boot Barn's shelf leads with "Retro Rodeo" and "American Rodeo" (market-research.md, Western #4)
- **Cover model:** registry #38 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/saturday-night-rodeo.png --name saturday-night-rodeo --model seedream \
    --person "White woman in her early 60s, short silver hair, tanned weathered skin, lean build" \
    --scene "in the grandstand of an evening rodeo, arena lights and dust behind her, a program rolled in her hand at her side" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-western-saturday-night-rodeo-graphic-tee
```

### 32. Unisex Western – Hold On Eight Tee
- **Handle:** `unisex-western-hold-on-eight-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee)
- **Art:** A bull rider on a spinning bull, free hand high, framed by a circular chute-gate border with rivets. Gritty 1970s rodeo-flyer texture. No association logos. Palette: rust, cream, navy.
- **Text on shirt:** HOLD ON EIGHT (around the circle)
- **Shirt colors:** Vintage White, Heather Navy (confirm)
- **Primary keyword:** bull riding shirt — 720 / KD 30 (RankHero 2026-10-08)
- **Variants:** cowboy graphic tee vintage (bank)
- **Proof:** Amazon "bull riding shirt" ~1,300 bought/mo; thin Etsy competition (1,009 listings) (market-research.md, Western #11)
- **Cover model:** registry #42 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/hold-on-eight.png --name hold-on-eight --model seedream \
    --person "Mexican-American man in his mid-20s, short black hair, thin mustache, wiry build" \
    --scene "behind the bucking chutes at a rodeo, metal gates and a rider climbing the rails blurred behind him, arena dust and lights" \
    --shirt "vintage white" --fit "unisex classic-fit cotton t-shirt" \
    --cover unisex-western-hold-on-eight-graphic-tee
```

### 33. Unisex Western – Vintage Bison Tee  *(replaces Cowboy Coffee)*
- **Handle:** `unisex-western-vintage-bison-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee)
- **Art:** A lone bison standing in tall prairie grass, a big setting sun and layered hills behind, drawn as a 1960s park-poster screen print (flat shapes, 3 inks, light grain). No park names or agency marks. Palette: rust, mustard, brown, cream.
- **Text on shirt:** ROAM (small spaced caps under the scene)
- **Shirt colors:** Vintage White, Black, Heather Clay (confirm)
- **Primary keyword:** bison shirt — 1,900 / KD 34 (RankHero 2026-10-08)
- **Variants:** buffalo shirt — 2,900 / 42
- **Proof:** vintage bison tee 248 / 2,857; "Wild West Buffalo" 203 / 4,780; buffalo 153 / 2,047 (market-research.md, Western #8)
- **Cover model:** registry #43 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/vintage-bison.png --name vintage-bison --model seedream \
    --person "Japanese-American man in his late 30s, medium-length black hair swept back, short stubble, medium build" \
    --scene "at a pull-off on an open prairie road at golden hour, tall grass and rolling hills behind him, a pickup parked to the side" \
    --shirt "vintage white" --fit "unisex classic-fit cotton t-shirt" \
    --cover unisex-western-vintage-bison-graphic-tee
```

### 30. Unisex Western – Saddle Blanket Steer Tee  *(replaces Hat on the Post)*
- **Handle:** `unisex-western-saddle-blanket-steer-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee)
- **Art:** A steer head centered on a wide woven saddle-blanket band of stepped diamonds and stripes (trade-blanket geometry only: no thunderbirds, feathers or other sacred symbols), soft distressing. Palette: turquoise, rust, cream, black.
- **Text on shirt:** none (art only)
- **Shirt colors:** Vintage White, Heather Navy, Black (confirm)
- **Primary keyword:** aztec shirt — 1,300 / KD 38 (RankHero 2026-10-08)
- **Variants:** cowboy graphic tees women (bank)
- **Proof:** "Aztec Shirt, Women's Country Shirt" 1,540 favs / 31,809 views; southwest geometric tees across the shelf (market-research.md, Western #5)
- **Cover model:** registry #40 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/saddle-blanket-steer.png --name saddle-blanket-steer --model seedream \
    --person "Puerto Rican woman in her early 20s, shoulder-length wavy dark hair, medium build" \
    --scene "in a ranch tack room with saddle blankets folded over wooden racks and saddles on the wall behind her, warm afternoon light through the door" \
    --shirt "vintage white" --fit "unisex classic-fit cotton t-shirt" \
    --cover unisex-western-saddle-blanket-steer-graphic-tee
```

### 27. Women's Western – Howdy Tee
- **Handle:** `womens-western-howdy-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** A pink-and-tan cowgirl hat tipped over puffy 1970s bubble letters, sparkles and tiny stars around it, a small steer-skull-and-daisy accent tucked under the "Y" (the top Howdy listing pairs it with a skull). Fun but still screen-print flat. Palette: dusty pink, mustard, tan, cream.
- **Text on shirt:** HOWDY (bubble letters)
- **Shirt colors:** White, Heather Mauve (confirm)
- **Primary keyword:** howdy shirt — 480 / KD 53 (RankHero 2026-10-08; KD > 50, so this is depth for the KD 16 hub, kept because the proof is strong)
- **Variants:** punchy western graphic tees (bank)
- **Proof:** "Boho Cow Skull … Howdy" 2,803 / 85,483; Howdy tees 435 / 9,083 · 376 / 8,434 · 364 / 5,848 · 361 / 4,256 (market-research.md, Western #2)
- **Cover model:** registry #37 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/howdy.png --name howdy --model seedream \
    --person "Korean woman in her mid-30s, shoulder-length straight hair with curtain bangs, slim build" \
    --scene "by the ticket gate of a county rodeo at dusk, wooden grandstand and arena lights behind her, a paper ticket held at her hip" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-western-howdy-graphic-tee
```

### 25. Women's Western – Kick Up Dust Tee
- **Handle:** `womens-western-kick-up-dust-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** A pair of tall cowgirl boots mid-step, the shafts covered in ornate boot-stitch scrollwork drawn large (the winning motif), kicking up a cloud of dust shaped into little stars. 1970s iron-on transfer look. Palette: tan, burnt orange, turquoise, cream.
- **Text on shirt:** KICK UP DUST (wavy 1970s caps)
- **Shirt colors:** White, Black (confirm)
- **Primary keyword:** cowboy boots shirt — 590 / KD 48 (RankHero 2026-10-08)
- **Variants:** boot stitch shirt — 110 / 40; cute western graphic tees (bank)
- **Proof:** embroidered boot-stitch tee 1,390 / 23,615; Amazon "cowboy boots shirt women" ~1,600 bought/mo (market-research.md, Western #6)
- **Cover model:** registry #35 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/kick-up-dust.png --name kick-up-dust --model seedream \
    --person "White woman in her early 20s, long dark brown hair worn straight, petite build" \
    --scene "on a ranch gravel road beside an old pickup and a barbed-wire fence at golden hour, hay bales in the field behind" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-western-kick-up-dust-graphic-tee
```

### 23. Women's Western – Wild West Rider Tee  *(replaces Hold On Tight)*
- **Handle:** `womens-western-wild-west-rider-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** An original cowgirl at full gallop on a paint horse, hat brim up, scarf flying, against a huge striped 1970s sun and a mesa line, framed like a faded concert-tee/poster. Our own rider and composition. Palette: rust, mustard, turquoise, cream.
- **Text on shirt:** WILD WEST (big retro serif, arched)
- **Shirt colors:** Vintage White, Black, Heather Mauve (confirm)
- **Primary keyword:** wild west shirt — 590 / KD 49 (RankHero 2026-10-08; replaces cowgirl graphic tee, 480 / 56)
- **Variants:** women's cowgirl graphic tees (bank)
- **Proof:** "Retro Wild West Shirt" 904 / 10,295 and 843 / 9,649; "Wild West … Bull Skull" 810 / 16,715; Amazon "cowgirl shirt women" ~5,850 bought/mo (market-research.md, Western #3)
- **Cover model:** registry #33 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/wild-west-rider.png --name wild-west-rider --model seedream \
    --person "Black woman in her early 40s, long box braids pulled back, medium build" \
    --scene "in the bleachers of a small-town rodeo at dusk, arena lights coming on, bucking chutes blurred in the background" \
    --shirt "vintage white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-western-wild-west-rider-graphic-tee
```

### 22. Women's Western – Barrel Racer Tee
- **Handle:** `womens-western-barrel-racer-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** A cowgirl and her quarter horse cutting tight around a barrel, dirt spraying, drawn as a 1950s rodeo-program illustration with halftone shading. No association logos. Palette: burnt orange, mustard, navy, cream.
- **Text on shirt:** BARREL RACER (arched slab serif)
- **Shirt colors:** White, Heather Mauve, Black (confirm)
- **Primary keyword:** barrel racing shirt — 390 / KD 38 (RankHero 2026-10-08)
- **Variants:** western cowgirl graphic tee (bank)
- **Proof:** steady niche (106 / 750; 78 / 555) (market-research.md, Western #12)
- **Cover model:** registry #32 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/barrel-racer.png --name barrel-racer --model seedream \
    --person "White woman in her late 20s, long sandy-blonde waves, athletic build, sun-tanned" \
    --scene "leaning on the rail of a dirt rodeo arena at a barrel racing practice, barrels and a horse and rider blurred behind her, late afternoon dust in the light" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-western-barrel-racer-graphic-tee
```

### 31. Unisex Western – Desert Rattler Tee  *(replaces Ranch Hand)*
- **Handle:** `unisex-western-desert-rattler-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee)
- **Art:** A coiled diamondback rattlesnake wrapped around a worn cowboy boot, desert marigolds and a small prickly pear around the base, drawn like a faded 90s bootleg tee print. No flags or slogans. Palette: tan, olive, rust, cream.
- **Text on shirt:** none (art only)
- **Shirt colors:** Black, Vintage White, Military Green (confirm)
- **Primary keyword:** rattlesnake shirt — 260 / KD 35 (RankHero 2026-10-08)
- **Variants:** mens western graphic tees (bank); funny western graphic tees (bank)
- **Proof:** low competition (777 listings); vintage-rattlesnake tees present but small (7–27 favs); fills the unisex/men's gap (market-research.md, Western #13)
- **Cover model:** registry #41 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/desert-rattler.png --name desert-rattler --model seedream \
    --person "White man in his early 60s, white mustache, weathered sun-lined face, lean wiry build, felt cowboy hat pushed back off his forehead" \
    --scene "at the cattle pens of a working ranch in dry desert country at dawn, steers and wooden gates behind him, mesquite and cold morning light" \
    --shirt "black" --fit "unisex classic-fit cotton t-shirt" \
    --cover unisex-western-desert-rattler-graphic-tee
```

### 26. Women's Western – Run Free Tee
- **Handle:** `womens-western-run-free-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** Three wild horses running across open range, manes streaming, mesas faint behind, drawn as a two-color 1960s screen print with a sun circle. Palette: navy, burnt orange, cream.
- **Text on shirt:** Run Free (loose brush script)
- **Shirt colors:** Heather Mauve, Athletic Heather, White (confirm)
- **Primary keyword:** wild horse shirt — 140 / KD 36 (RankHero 2026-10-08)
- **Variants:** womens western graphic tees (bank)
- **Proof:** horse tees are a big shelf (Amazon "horse shirt women western" ~1,400 bought/mo; Etsy horse tees 1,850 / 23,381 and 483 / 5,205), but horse shirt itself is KD 51 (market-research.md, Western #7)
- **Cover model:** registry #36 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/run-free.png --name run-free --model seedream \
    --person "Mixed-race Black and white woman in her late 20s, sleek high ponytail, light freckles, tall athletic build" \
    --scene "standing at a weathered wooden fence on open rangeland at sunset with horses grazing in the distance" \
    --shirt "heather mauve" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-western-run-free-graphic-tee
```

### 29. Unisex Western – Lucky Horseshoe Tee
- **Handle:** `unisex-western-lucky-horseshoe-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee)
- **Art:** A worn iron horseshoe, open end up, with a rope loop and two crossed branding irons behind, inside a ranch-gate arch; a few retro motel-sign stars nod to the "Lady Luck" look. 1950s feed-sack print style. Palette: rust, mustard, navy, cream.
- **Text on shirt:** LUCKY HORSESHOE RANCH (gate arch)
- **Shirt colors:** Vintage White, Black, Heather Clay (confirm)
- **Primary keyword:** horseshoe shirt — 210 / KD 42 (RankHero 2026-10-08)
- **Variants:** vintage western graphic tees (bank)
- **Proof:** small ("Lady Luck" retro cowgirl 47 / 677); last in the queue (market-research.md, Western #14)
- **Cover model:** registry #39 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/lucky-horseshoe.png --name lucky-horseshoe --model seedream \
    --person "Black man in his mid-40s, shaved head, neat short beard, broad build, straw cowboy hat pushed back off his face" \
    --scene "inside a weathered wooden horse barn, tack hanging on the wall and a horse looking over a stall door behind him, warm afternoon light through the slats" \
    --shirt "vintage white" --fit "unisex classic-fit cotton t-shirt" \
    --cover unisex-western-lucky-horseshoe-graphic-tee
```

## Christmas shirts for women — rolling queue batch 1 (2026-10-10, toward 28)
Written by the builder from RankHero measurements (2026-10-10). Proof = RankHero monthly series and competing-listing counts (top-listing samples weren't available on these pages; Etsy is bot-blocked). All on Bella+Canvas 6400, $29.99. Shirt colors are targets; the builder drops colors the art can't read on.

### 36. Women's Christmas – Christmas Dogs Tee  *(new)*
- **Handle:** `womens-christmas-christmas-dogs-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** Three happy mixed-breed dogs (a scruffy terrier, a floppy-eared hound, a curly doodle) in Santa hats and knit scarves, piled together with a string of vintage bulbs tangled around them. Our own dogs, cartoon-vintage linework. Palette: cranberry red, pine green, tan, cream.
- **Text on shirt:** MERRY WOOFMAS (retro rounded caps)
- **Shirt colors:** White, Natural, Heather Stone, Athletic Heather
- **Primary keyword:** christmas dog shirt — 880 / KD 63 (Nov–Dec peak 4,400/mo)
- **Variants:** dog mom christmas shirt, christmas dog lover shirt (measure via keyword-gap)
- **Proof:** Christmas cats proved the pet-Christmas angle (Christmas cats 215 / 4,442); christmas dog shirt peaks at 4,400/mo in Nov–Dec with 107K listings (RankHero monthly series, 2026-10-10)
- **Cover model:** registry #68 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/christmas-dogs-art.jpg --name christmas-dogs --model seedream \
    --person "Sri Lankan-American woman in her late 30s, short wavy black bob, petite build" \
    --scene "on a snowy suburban sidewalk at dusk walking a scruffy terrier on a leash at her side, houses with Christmas lights behind her" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-christmas-dogs-graphic-tee
```

### 37. Women's Christmas – Christmas Nurse Tee  *(new)*
- **Handle:** `womens-christmas-christmas-nurse-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** A vintage nurse cap with a holly sprig tucked in the band, a stethoscope looped into a wreath shape with red bulbs on it, small candy-cane and star accents. Clean retro illustration. Palette: red, pine green, cream, navy.
- **Text on shirt:** NICE LIST NURSE (playful retro caps; avoids the 'Jingle All the Way' film title)
- **Shirt colors:** White, Natural, Heather Mauve, Athletic Heather
- **Primary keyword:** christmas nurse shirt — 880 / KD 56 (Nov peak 4,400/mo)
- **Variants:** nurse christmas shirt (measure)
- **Proof:** christmas nurse shirt 880 / 56, Nov 4,400 / Dec 3,600; cross-sells /nurse-shirts/ (RankHero 2026-10-10)
- **Cover model:** registry #69 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/christmas-nurse-art.jpg --name christmas-nurse --model seedream \
    --person "Black woman in her early 50s, short tapered grey natural hair, round tortoiseshell glasses, soft build" \
    --scene "outside a small-town hospital entrance at dusk after a shift, a lit Christmas wreath on the glass doors behind her, a travel mug at her side" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-christmas-nurse-graphic-tee
```

### 38. Women's Christmas – Christmas Teacher Tee  *(new)*
- **Handle:** `womens-christmas-christmas-teacher-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** A vintage chalkboard framed in pine garland with a red apple wearing a tiny Santa hat, pencils tied with a bow, little stars. Retro school-supply illustration. Palette: red, green, chalkboard black, cream.
- **Text on shirt:** MERRY TEACHER (chalk-style caps)
- **Shirt colors:** White, Natural, Heather Stone, Athletic Heather
- **Primary keyword:** christmas teacher shirt — 720 / KD 62 (Nov peak 4,400/mo)
- **Variants:** teacher christmas shirt (measure)
- **Proof:** christmas teacher shirt Nov 4,400 / Dec 2,900, 75K listings (RankHero 2026-10-10); teachers buy for class parties and dress-up days
- **Cover model:** registry #70 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/christmas-teacher-art.jpg --name christmas-teacher --model seedream \
    --person "White woman in her late 30s, red curly hair in a low ponytail, freckles, medium build" \
    --scene "in an elementary classroom decorated for Christmas, paper snowflakes on the windows and a small tree in the corner, afternoon light" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-christmas-teacher-graphic-tee
```

### 39. Women's Christmas – Mrs. Claus Bakery Tee  *(new)*
- **Handle:** `womens-christmas-mrs-claus-bakery-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** An original rosy-cheeked Mrs. Claus in a vintage apron and round glasses, holding up a tray of fresh cookies, steam swirls, drawn like a 1950s kitchen ad. No real brand. Palette: cherry red, mint green, cream, warm brown.
- **Text on shirt:** MRS. CLAUS BAKERY / 'Est. North Pole' (retro script + small caps)
- **Shirt colors:** White, Natural, Pink, Heather Mauve
- **Primary keyword:** mrs claus shirt — 140 / KD 36 (Dec peak 880/mo)
- **Variants:** christmas baking shirt — 50 / 66
- **Proof:** mrs claus shirt Dec 880/mo, KD 36 (lowest-KD unclaimed Christmas term found, RankHero 2026-10-10); baking/cookie motifs sell in coquette kitchen looks (market-research #1)
- **Cover model:** registry #71 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/mrs-claus-bakery-art.jpg --name mrs-claus-bakery --model seedream \
    --person "Japanese-American woman in her early 60s, silver bob with blunt bangs, slim build, small pearl earrings" \
    --scene "in a warm home kitchen during Christmas baking, cooling racks of cookies on the counter behind her, flour on the counter, window light" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-mrs-claus-bakery-graphic-tee
```

### 40. Women's Christmas – Santa's Sleigh Tee  *(new)*
- **Handle:** `womens-christmas-santas-sleigh-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** A vintage silhouette of Santa's sleigh pulled by reindeer flying across a huge full moon over snowy rooftops and pine trees, starry sky, 1940s Christmas-card style. Palette: midnight navy, gold, cream, red.
- **Text on shirt:** none (art only; no song lines)
- **Shirt colors:** White, Natural, Athletic Heather, Heather Stone
- **Primary keyword:** sleigh shirt — 140 / KD 36 (Dec peak 720/mo)
- **Variants:** santa shirt — 8,100 / 55 (hub depth)
- **Proof:** sleigh shirt KD 36 with Dec 720/mo; santa shirt 18,100/mo in Dec (RankHero 2026-10-10); vintage Christmas-card art is a steady Etsy shelf (market-research #8)
- **Cover model:** registry #72 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/santas-sleigh-art.jpg --name santas-sleigh --model seedream \
    --person "Latina woman in her mid-40s, long dark hair with grey streaks in a side braid, medium build" \
    --scene "on a snowy front porch at night under a full moon, rooftops dusted with snow and string lights behind her, a mug of cocoa at her side" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-santas-sleigh-graphic-tee
```

### 41. Women's Christmas – Polar Bear Cocoa Tee  *(new)*
- **Handle:** `womens-christmas-polar-bear-cocoa-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** A cuddly polar bear in a red knit scarf and earmuffs holding a mug of hot cocoa with marshmallows, snowflakes falling, vintage winter-card style. Palette: icy blue, cherry red, cream, navy.
- **Text on shirt:** none, or small 'Cozy Season'
- **Shirt colors:** White, Natural, Athletic Heather, Heather Blue Lagoon
- **Primary keyword:** polar bear shirt — 720 / KD 38 (Nov–Dec 880/mo)
- **Variants:** (measure via keyword-gap)
- **Proof:** polar bear shirt KD 38 with only 3,394 competing listings (RankHero 2026-10-10) — thin competition
- **Cover model:** registry #73 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/polar-bear-cocoa-art.jpg --name polar-bear-cocoa --model seedream \
    --person "Ukrainian-American woman in her mid-20s, long straight light-blonde hair, tall slim build" \
    --scene "at an outdoor ice rink at dusk with string lights and a small Christmas tree behind her, skates slung at her side" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-polar-bear-cocoa-graphic-tee
```

## Christmas shirts for women — rolling queue batch 2 (2026-10-10, toward 28)
Same method as batch 1. Public-domain carol titles only (Deck the Halls 1862; 'Peace on Earth' from Luke 2:14). No song titles still in copyright ('Let It Snow', 'Jingle Bell Rock', 'Holly Jolly Christmas').

### 42. Women's Christmas – Fa La La Tee  *(new)*
- **Handle:** `womens-christmas-fa-la-la-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** Groovy 1970s bubble lettering 'Fa La La La La' with vintage glass ornaments, a holly sprig and little sparkles bouncing between the words. Deck the Halls is an 1862 public-domain carol; only the refrain syllables are used. Palette: cherry red, pine green, pink, cream.
- **Text on shirt:** FA LA LA LA LA (groovy bubble letters)
- **Shirt colors:** White, Natural, Pink, Heather Mauve
- **Primary keyword:** fa la la shirt — 210 / KD 44
- **Variants:** deck the halls shirt 70 / 54 is its own brief (#46)
- **Proof:** fa la la shirt 210 / 44 with only 3.7K competing listings (RankHero 2026-10-10)
- **Cover model:** registry #74 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/fa-la-la-art.jpg --name fa-la-la --model kontext \
    --person "Filipino-American woman in her early 30s, long straight black hair with a center part, petite build" \
    --scene "at a holiday house party by a decorated tree with friends blurred behind her, warm lamp light" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-fa-la-la-graphic-tee
```

### 43. Women's Christmas – Peace on Earth Tee  *(new)*
- **Handle:** `womens-christmas-peace-on-earth-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** A white dove carrying an olive branch with a sprig of holly, flying over a quiet snowy village and a single star, drawn like a vintage linocut Christmas card. Palette: navy, gold, cream, deep red.
- **Text on shirt:** PEACE ON EARTH (classic serif caps; Luke 2:14 phrase, public domain)
- **Shirt colors:** White, Natural, Athletic Heather, Heather Stone
- **Primary keyword:** peace on earth shirt — 260 / KD 39
- **Variants:** (measure via keyword-gap)
- **Proof:** peace on earth shirt 260 / 39, 2.2K listings; faith Christmas proved by O Holy Night (christian christmas shirt 880 / 60)
- **Cover model:** registry #75 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/peace-on-earth-art.jpg --name peace-on-earth --model kontext \
    --person "Ethiopian-American woman in her late 30s, short natural curls, slim build, small gold hoops" \
    --scene "outside a small stone church on a snowy evening with candlelit windows behind her" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-peace-on-earth-graphic-tee
```

### 44. Women's Christmas – Hello Winter Snowflakes Tee  *(new)*
- **Handle:** `womens-christmas-hello-winter-snowflakes-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** Three big vintage-style snowflakes of different sizes, intricate and geometric, with a scatter of tiny flakes, over a soft icy-blue circle. Clean winter-card look. Palette: icy blue, navy, cream, silver-grey.
- **Text on shirt:** HELLO WINTER (small spaced caps under the snowflakes; avoids the 'Let It Snow' song title)
- **Shirt colors:** White, Natural, Athletic Heather, Heather Blue Lagoon
- **Primary keyword:** snowflake shirt — 480 / KD 52
- **Variants:** (measure via keyword-gap)
- **Proof:** snowflake shirt 480 / 52 (RankHero 2026-10-10); snow motifs proved by the snowman (6,460 favs, market-research #2)
- **Cover model:** registry #76 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/hello-winter-snowflakes-art.jpg --name hello-winter-snowflakes --model kontext \
    --person "Scandinavian-American woman in her early 40s, long straight ash-blonde hair, tall slim build, light freckles" \
    --scene "on a snowy forest trail at midday with snow falling and evergreens behind her" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-hello-winter-snowflakes-graphic-tee
```

### 45. Women's Christmas – Joy Tee  *(new)*
- **Handle:** `womens-christmas-joy-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** Big vintage JOY lettering where the O is a glass Christmas ornament, wrapped in pine garland with red berries and a ribbon, little stars. Palette: red, pine green, gold, cream.
- **Text on shirt:** JOY (ornament O)
- **Shirt colors:** White, Natural, Heather Stone, Athletic Heather
- **Primary keyword:** joy shirt — 320 / KD 60
- **Variants:** (measure via keyword-gap)
- **Proof:** joy shirt 320 / 60 (RankHero 2026-10-10); single-word Christmas lettering is a steady shelf
- **Cover model:** registry #77 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/joy-art.jpg --name joy --model kontext \
    --person "Haitian-American woman in her mid-50s, short silver natural hair, soft build, red lipstick" \
    --scene "at a Christmas tree lot at night under string lights, rows of trees behind her" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-joy-graphic-tee
```

### 46. Women's Christmas – Deck the Halls Tee  *(new)*
- **Handle:** `womens-christmas-deck-the-halls-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** A vintage garland of holly, pine and berries swagged across a fireplace mantel with three stockings and brass candlesticks, drawn like a 1950s greeting card. Public-domain carol title. Palette: holly green, cherry red, cream, gold.
- **Text on shirt:** DECK THE HALLS (retro script)
- **Shirt colors:** White, Natural, Heather Mauve, Athletic Heather
- **Primary keyword:** deck the halls shirt — 70 / KD 54
- **Variants:** (measure via keyword-gap)
- **Proof:** deck the halls shirt 70 / 54, 3.7K listings (RankHero 2026-10-10)
- **Cover model:** registry #78 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/deck-the-halls-art.jpg --name deck-the-halls --model kontext \
    --person "Puerto Rican woman in her late 50s, shoulder-length dyed burgundy hair, round face, medium build" \
    --scene "in a living room decorated with garland on the mantel and stockings, fire glowing behind her" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-deck-the-halls-graphic-tee
```

### 47. Women's Christmas – Christmas Golf Tee  *(new)*
- **Handle:** `womens-christmas-christmas-golf-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** A golf ball wearing a tiny Santa hat on a tee, a candy-cane-striped golf flag and a small Christmas tree in the putting green hole, snowflakes. Original, no brands or tournaments. Palette: kelly green, red, cream, navy.
- **Text on shirt:** HOLIDAY GOLF CLUB (retro collegiate caps)
- **Shirt colors:** White, Natural, Athletic Heather, Pink
- **Primary keyword:** christmas golf shirt — 720 / KD 27 (near-zero listings)
- **Variants:** golf shirt women (measure)
- **Proof:** christmas golf shirt 720 / 27 with almost no competing listings (RankHero 2026-10-10) — a gap; women golfers buy for holiday scrambles
- **Cover model:** registry #79 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/christmas-golf-art.jpg --name christmas-golf --model kontext \
    --person "Korean-American woman in her mid-40s, sleek chin-length bob, athletic build" \
    --scene "on a golf course putting green on a crisp winter morning with a decorated clubhouse behind her, a putter at her side" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-christmas-golf-graphic-tee
```

## Christmas shirts for women — rolling queue batch 3 (2026-10-10, toward 28)
One brief closes the collection at 28. Measured on RankHero 2026-10-10; Christmas pickleball / tennis / camping / reading / choir and cardinal / wreath had no volume.

### 48. Women's Christmas – Highland Cow Christmas Tee  *(new)*
- **Handle:** `womens-christmas-highland-cow-christmas-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** A shaggy highland cow with long bangs over its eyes wearing a knit red scarf and a sprig of holly between its horns, standing in front of a snowy farm fence with a small wreath on the post. Vintage farmhouse Christmas-card style. Palette: rust-orange, pine green, cream, deep red.
- **Text on shirt:** MOOEY CHRISTMAS (retro rounded caps; original pun, no song title)
- **Shirt colors:** White, Natural, Heather Stone, Athletic Heather
- **Primary keyword:** cow christmas shirt — 140 / KD 36 (0 competing listings)
- **Variants:** highland cow shirt 1,600 / 44 · christmas cow shirt 140 / 55
- **Proof:** highland cow shirt 1,600 / 44 with 34K listings shows steady demand; the Christmas version has no listings on RankHero (a gap)
- **Cover model:** registry #80 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/highland-cow-christmas-art.jpg --name highland-cow-christmas --model kontext \
    --person "Mexican-American woman in her early 30s, long dark wavy hair in a low braid, medium build, small stud earrings" \
    --scene "at a snowy farm fence with a red barn and a wreath on the gate behind her, overcast winter afternoon" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-highland-cow-christmas-graphic-tee
```

## Thanksgiving shirts — rolling queue batch 1 (2026-10-10, toward 14)
Written by the builder from RankHero measurements (2026-10-10, volume / KD / competing listings). Seasonal: stop adding after Nov 15. Collection head (thanksgiving shirts 8,100/57, turkey shirt, thanksgiving shirts for women) stays on the collection page; each design gets its own long-tail. Avoided: phrases with likely trademark filings ('Gobble Till You Wobble', 'Thankful Grateful Blessed'), any NFL/parade marks.

### 49. Unisex Thanksgiving – Turkey Trot Tee  *(new)*
- **Handle:** `unisex-thanksgiving-turkey-trot-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee)
- **Art:** A determined turkey in running shoes and a sweatband, mid-stride, wearing a race bib numbered 5K, with fall leaves kicking up behind. Vintage 1970s race-poster style. Palette: burnt orange, mustard, brown, cream.
- **Text on shirt:** TURKEY TROT (retro athletic arch) · THANKSGIVING MORNING 5K (small)
- **Shirt colors:** Natural, Vintage White, Athletic Heather, Heather Dust
- **Primary keyword:** turkey trot shirt — 720 / KD 32 (only 1.6K listings)
- **Variants:** (measure via keyword-gap)
- **Proof:** turkey trot shirt 720 / 32 with thin competition; Turkey Bowl proved the sporty-turkey angle
- **Cover model:** registry #81 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/turkey-trot-art.jpg --name turkey-trot --model seedream \
    --person "Nigerian-American man in his late 20s, close-cropped fade with a thin mustache, lean runner's build" \
    --scene "at the start area of a small-town Thanksgiving morning fun run, runners and fall trees blurred behind him, crisp morning light" \
    --shirt "natural" --fit "unisex classic-fit cotton t-shirt" \
    --cover unisex-thanksgiving-turkey-trot-graphic-tee
```

### 50. Unisex Thanksgiving – Leftovers Club Tee  *(new)*
- **Handle:** `unisex-thanksgiving-leftovers-club-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee)
- **Art:** A retro diner-sign badge: a turkey sandwich stacked high with a toothpick flag, a slice of pie and a gravy boat, inside a 1950s starburst sign. Palette: tomato red, mustard, teal, cream.
- **Text on shirt:** LEFTOVERS CLUB (diner script) · OPEN ALL WEEKEND (small caps)
- **Shirt colors:** Natural, Vintage White, Athletic Heather, Ash
- **Primary keyword:** funny thanksgiving shirt — 4,400 / KD 48
- **Variants:** leftovers shirt 50 / 47
- **Proof:** funny thanksgiving shirt 4,400 / 48 — the largest measured design-level Thanksgiving phrase
- **Cover model:** registry #82 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/leftovers-club-art.jpg --name leftovers-club --model seedream \
    --person "Greek-American man in his late 30s, thick dark curly hair, full dark beard, stocky build" \
    --scene "in a home kitchen the day after Thanksgiving, foil-covered dishes on the counter behind him, warm window light" \
    --shirt "natural" --fit "unisex classic-fit cotton t-shirt" \
    --cover unisex-thanksgiving-leftovers-club-graphic-tee
```

### 51. Women's Thanksgiving – Pumpkin Pie Tee  *(new)*
- **Handle:** `womens-thanksgiving-pumpkin-pie-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** A vintage pumpkin pie with a crimped crust and a swirl of whipped cream, one slice lifted out on a server, with cinnamon sticks and small autumn leaves around it. 1960s recipe-card illustration. Palette: pumpkin orange, golden brown, cream, rust.
- **Text on shirt:** PIE SEASON (retro rounded script)
- **Shirt colors:** White, Natural, Heather Stone, Athletic Heather
- **Primary keyword:** pumpkin pie shirt — 110 / KD 58
- **Variants:** pie shirt 260 / 52
- **Proof:** pie shirt 260 / 52 and pumpkin pie shirt 110 / 58 (RankHero 2026-10-10); bakers buy for Thanksgiving and Friendsgiving
- **Cover model:** registry #83 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/pumpkin-pie-art.jpg --name pumpkin-pie --model kontext \
    --person "Vietnamese-American woman in her late 40s, shoulder-length straight black hair with bangs, slim build, thin gold glasses" \
    --scene "in a warm home kitchen with pies cooling on the counter and fall leaves outside the window behind her" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-thanksgiving-pumpkin-pie-graphic-tee
```

### 52. Women's Thanksgiving – Friendsgiving Tee  *(new)*
- **Handle:** `womens-thanksgiving-friendsgiving-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** A long table seen from above with mismatched plates, a roast turkey, a pie, candles and wine-free mugs of cider, framed by an oval of autumn leaves. 1970s groovy illustration. Palette: burnt orange, olive, mustard, cream.
- **Text on shirt:** FRIENDSGIVING (groovy 70s letters)
- **Shirt colors:** White, Natural, Heather Stone, Athletic Heather
- **Primary keyword:** friendsgiving shirt — 480 / KD 54
- **Variants:** (measure via keyword-gap)
- **Proof:** friendsgiving shirt 480 / 54 (RankHero 2026-10-10); groovy 70s lettering proved by Give Thanks
- **Cover model:** registry #84 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/friendsgiving-art.jpg --name friendsgiving --model kontext \
    --person "Black woman in her mid-20s, shoulder-length locs, slim build, small gold nose stud" \
    --scene "at a candlelit Friendsgiving dinner table in a small apartment with friends blurred behind her" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-thanksgiving-friendsgiving-graphic-tee
```

### 53. Women's Thanksgiving – Gobble Gobble Turkey Tee  *(built 2026-10-15, style v3; primary changed to turkey t shirt 3,600/KD14)*
- **Handle:** `womens-thanksgiving-gobble-gobble-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** A cute retro turkey with a fanned tail of rainbow-striped feathers (orange, mustard, rust, olive), standing among small daisies and acorns. 1970s sticker style. Palette: burnt orange, mustard, olive, cream.
- **Text on shirt:** GOBBLE GOBBLE (chunky bubble letters)
- **Shirt colors:** White, Natural, Heather Mauve, Athletic Heather
- **Primary keyword:** gobble gobble shirt — 210 / KD 54
- **Variants:** (measure via keyword-gap)
- **Proof:** gobble gobble shirt 210 / 54 (RankHero 2026-10-10)
- **Cover model:** registry #85 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/gobble-gobble-art.jpg --name gobble-gobble --model kontext \
    --person "Indian-American woman in her mid-30s, long wavy dark-brown hair, medium build, small gold hoops" \
    --scene "at a farm stand with pumpkins, hay bales and gourds behind her on a sunny fall afternoon" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-thanksgiving-gobble-gobble-graphic-tee
```

### 54. Unisex Thanksgiving – Turkey Day Crew Tee  *(built 2026-10-15, style v3)*
- **Handle:** `unisex-thanksgiving-turkey-day-crew-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee)
- **Art:** A vintage roast turkey on a platter with sprigs of rosemary, cranberries and a carving fork, inside a scalloped badge with wheat stalks. Reads as a matching family shirt. 1950s menu style. Palette: rust, mustard, brown, cream.
- **Text on shirt:** TURKEY DAY CREW (arched collegiate caps) · EST. AT GRANDMA'S (small)
- **Shirt colors:** Natural, Vintage White, Athletic Heather, Heather Dust
- **Primary keyword:** family thanksgiving shirt — 1,600 / KD 51
- **Variants:** (measure via keyword-gap)
- **Proof:** family thanksgiving shirt 1,600 / 51 (RankHero 2026-10-10); matching-family buys are the Thanksgiving collection's FAQ
- **Cover model:** registry #86 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/turkey-day-crew-art.jpg --name turkey-day-crew --model seedream \
    --person "Filipino-American man in his early 50s, short salt-and-pepper hair, round glasses, medium build" \
    --scene "in a backyard on Thanksgiving afternoon with family blurred around a long table under fall trees behind him" \
    --shirt "natural" --fit "unisex classic-fit cotton t-shirt" \
    --cover unisex-thanksgiving-turkey-day-crew-graphic-tee
```

## Approved batch 1 — style v3 (Sam approved in session 2026-10-13; art supplied, no new art generation)
Art QC v3: batch 1 is the minimum bar. Keywords measured with scripts/keyword-gap.py + RankHero on 2026-10-13.

### 55. Unisex Christmas – Vintage Santa Tee  *(batch 1)*
- **Handle:** `unisex-christmas-vintage-santa-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee), $29.99
- **Art:** Vintage Santa face, rosy cheeks, red cap, full beard with crackled worn-paint texture, no backing shape; MERRY CHRISTMAS in faded red distressed block caps. Style v3 A (vintage to the edges). Source: https://v3b.fal.media/files/b/0aae3bd4/DR4Z7WNpuNoDoRgzryr4A_BZ3b6G2r.webp → designs/vintage-santa.png
- **Text on shirt:** MERRY CHRISTMAS
- **Shirt colors:** Natural, Soft Cream, Heather Dust, Athletic Heather
- **Primary keyword:** merry christmas shirt — 880 / KD 73
- **Variants:** santa face shirt 70 / 60
- **Proof:** approved by Sam 2026-10-13 against the Etsy style study (docs/style-study-2026-10-13.md)
- **Cover model:** registry #87 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/vintage-santa.png --name santa-u --model seedream \
    --person "Cuban-American man in his early 40s, short black hair and a neat salt-and-pepper beard, medium build" \
    --scene "on a small-town main street at dusk with wreaths on the lampposts and shop windows lit for Christmas behind him" \
    --shirt "natural" --fit "unisex classic-fit cotton t-shirt" \
    --cover unisex-christmas-vintage-santa-graphic-tee
```

### 56. Women's Christmas – Vintage Santa Tee  *(batch 1)*
- **Handle:** `womens-christmas-vintage-santa-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee), $29.99
- **Art:** Vintage Santa face, rosy cheeks, red cap, full beard with crackled worn-paint texture, no backing shape; MERRY CHRISTMAS in faded red distressed block caps. Style v3 A (vintage to the edges). Source: https://v3b.fal.media/files/b/0aae3bd4/DR4Z7WNpuNoDoRgzryr4A_BZ3b6G2r.webp → designs/vintage-santa.png
- **Text on shirt:** MERRY CHRISTMAS
- **Shirt colors:** White, Natural, Heather Stone, Athletic Heather
- **Primary keyword:** vintage christmas shirt — 1,000 / KD 68
- **Variants:** classic santa shirt 10 / 49
- **Proof:** approved by Sam 2026-10-13 against the Etsy style study (docs/style-study-2026-10-13.md)
- **Cover model:** registry #88 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/vintage-santa.png --name santa-w --model seedream \
    --person "Irish-American woman in her early 30s, shoulder-length wavy auburn hair, light freckles, slim build" \
    --scene "at an outdoor Christmas market at night with wooden stalls, string lights and pine garlands behind her" \
    --shirt "natural" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-vintage-santa-graphic-tee
```

### 57. Unisex Christmas – Vintage Santa Crewneck Sweatshirt  *(batch 1)*
- **Handle:** `unisex-christmas-vintage-santa-crewneck-sweatshirt` · **Blank:** Gildan 18000 crewneck sweatshirt (Printful #145), $39.99
- **Art:** Vintage Santa face, rosy cheeks, red cap, full beard with crackled worn-paint texture, no backing shape; MERRY CHRISTMAS in faded red distressed block caps. Style v3 A (vintage to the edges). Source: https://v3b.fal.media/files/b/0aae3bd4/DR4Z7WNpuNoDoRgzryr4A_BZ3b6G2r.webp → designs/vintage-santa.png
- **Text on shirt:** MERRY CHRISTMAS
- **Shirt colors:** Sand, White, Sport Grey
- **Primary keyword:** merry christmas sweatshirt — 2,400 / KD 56
- **Variants:** santa sweatshirt 880 / 66
- **Proof:** approved by Sam 2026-10-13 against the Etsy style study (docs/style-study-2026-10-13.md)
- **Cover model:** registry #89 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/vintage-santa.png --name santa-c --model seedream \
    --person "Japanese-American woman in her late 20s, straight black hair in a low ponytail, slim build" \
    --scene "in a cabin living room with a lit Christmas tree and a stone fireplace behind her, holding a mug of hot cocoa at her side" \
    --shirt "sand-colored" --fit "unisex crewneck sweatshirt" \
    --cover unisex-christmas-vintage-santa-crewneck-sweatshirt
```

### 58. Women's Christmas – Merry & Bright Trees Tee  *(batch 1)*
- **Handle:** `womens-christmas-merry-bright-trees-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee), $29.99
- **Art:** Row of five thin-line evergreen trees, small star and snowflakes above, single-weight cream line (embroidery look). Style v3 B. Green preview background keyed out to cream-on-transparent. Source: https://v3b.fal.media/files/b/0aae3f0a/dUNz9PsVnYRNuxb1OHBBW_np13dVx7.webp → designs/merry-bright-trees.png
- **Text on shirt:** Merry & Bright (script)
- **Shirt colors:** Military Green, Maroon, Navy, Black
- **Primary keyword:** evergreen shirt — 390 / KD 31
- **Variants:** pine tree shirt 170 / 52
- **Proof:** approved by Sam 2026-10-13 against the Etsy style study (docs/style-study-2026-10-13.md)
- **Cover model:** registry #90 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/merry-bright-trees.png --name trees-w --model seedream \
    --person "Lebanese-American woman in her mid-30s, long dark-brown hair with soft waves worn behind her shoulders, medium build" \
    --scene "at the edge of a snowy pine forest beside a small wooden cabin with smoke rising from the chimney" \
    --shirt "military green" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-merry-bright-trees-graphic-tee
```

### 59. Women's Christmas – Merry & Bright Trees Crewneck Sweatshirt  *(batch 1)*
- **Handle:** `womens-christmas-merry-bright-trees-crewneck-sweatshirt` · **Blank:** Gildan 18000 crewneck sweatshirt (Printful #145), $39.99
- **Art:** Row of five thin-line evergreen trees, small star and snowflakes above, single-weight cream line (embroidery look). Style v3 B. Green preview background keyed out to cream-on-transparent. Source: https://v3b.fal.media/files/b/0aae3f0a/dUNz9PsVnYRNuxb1OHBBW_np13dVx7.webp → designs/merry-bright-trees.png
- **Text on shirt:** Merry & Bright (script)
- **Shirt colors:** Forest Green, Military Green, Maroon, Navy
- **Primary keyword:** christmas tree sweatshirt — 390 / KD 70
- **Variants:** christmas sweatshirt women 5,400 / 62
- **Proof:** approved by Sam 2026-10-13 against the Etsy style study (docs/style-study-2026-10-13.md)
- **Cover model:** registry #91 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/merry-bright-trees.png --name trees-c --model seedream \
    --person "Samoan-American woman in her early 40s, thick wavy black hair pulled into a low bun, broad build" \
    --scene "at a Christmas tree farm at dusk with rows of trees and string lights behind her, holding a mug of hot cocoa at her side" \
    --shirt "maroon" --fit "crewneck sweatshirt" \
    --cover womens-christmas-merry-bright-trees-crewneck-sweatshirt
```

### 60. Unisex Thanksgiving – Give Thanks Harvest Tee  *(batch 1)*
- **Handle:** `unisex-thanksgiving-give-thanks-harvest-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee), $29.99
- **Art:** Woven harvest basket of pumpkins, gourds, berries, leaves and wheat; GIVE THANKS in sun-faded distressed block letters. Style v3 A. Source: https://v3b.fal.media/files/b/0aae3edf/iJaFc_0m2VATBuBVyXjb9_HBBA4J1b.webp → designs/give-thanks-harvest.png
- **Text on shirt:** GIVE THANKS
- **Shirt colors:** Natural, Soft Cream, Heather Dust, Athletic Heather
- **Primary keyword:** harvest t shirt — 170 / KD 34
- **Variants:** thankful t shirt 90 / 42, pumpkin shirt 2,900 / 61
- **Proof:** approved by Sam 2026-10-13 against the Etsy style study (docs/style-study-2026-10-13.md)
- **Cover model:** registry #92 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/give-thanks-harvest.png --name thanks-u --model seedream \
    --person "Black man in his mid-50s, short grey hair and a trimmed grey beard, broad build" \
    --scene "at a farm stand on a sunny fall afternoon with crates of pumpkins, hay bales and corn stalks behind him" \
    --shirt "natural" --fit "unisex classic-fit cotton t-shirt" \
    --cover unisex-thanksgiving-give-thanks-harvest-graphic-tee
```

### 61. Unisex Thanksgiving – Give Thanks Harvest Crewneck Sweatshirt  *(batch 1)*
- **Handle:** `unisex-thanksgiving-give-thanks-harvest-crewneck-sweatshirt` · **Blank:** Gildan 18000 crewneck sweatshirt (Printful #145), $39.99
- **Art:** Woven harvest basket of pumpkins, gourds, berries, leaves and wheat; GIVE THANKS in sun-faded distressed block letters. Style v3 A. Source: https://v3b.fal.media/files/b/0aae3edf/iJaFc_0m2VATBuBVyXjb9_HBBA4J1b.webp → designs/give-thanks-harvest.png
- **Text on shirt:** GIVE THANKS
- **Shirt colors:** Sand, White, Sport Grey
- **Primary keyword:** thankful sweatshirt — 390 / KD 60
- **Variants:** pumpkin sweatshirt 1,000 / 62, fall sweatshirt 1,900 / 61
- **Proof:** approved by Sam 2026-10-13 against the Etsy style study (docs/style-study-2026-10-13.md)
- **Cover model:** registry #93 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/give-thanks-harvest.png --name thanks-c --model seedream \
    --person "Polish-American woman in her early 60s, short spiky white hair, soft build, red-framed glasses" \
    --scene "on a farmhouse porch in late fall with pumpkins on the steps and bare trees behind her, holding a mug of coffee at her side" \
    --shirt "sand-colored" --fit "unisex crewneck sweatshirt" \
    --cover unisex-thanksgiving-give-thanks-harvest-crewneck-sweatshirt
```

### 62. Unisex Fishing – Lake Life Tee  *(batch 1)*
- **Handle:** `unisex-fishing-lake-life-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee), $29.99
- **Art:** Largemouth bass leaping from a splash, dock, cabin and pines behind under a hazy sun; LAKE LIFE in heavy worn block caps. Style v3 A. Source: https://v3b.fal.media/files/b/0aae3f0b/8UGpjsi97M-YJ0BhRU_EJ_eDYIg10r.webp → designs/lake-life.png
- **Text on shirt:** LAKE LIFE
- **Shirt colors:** White, Natural, Athletic Heather, Ash
- **Primary keyword:** lake shirt — 1,300 / KD 55
- **Variants:** lake life shirt 260 / 63, bass shirt 720 / 52, largemouth bass shirt 140 / 36
- **Proof:** approved by Sam 2026-10-13 against the Etsy style study (docs/style-study-2026-10-13.md)
- **Cover model:** registry #94 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/lake-life.png --name bass --model seedream \
    --person "white man in his early 30s, short sandy-blond hair, light stubble, lean build" \
    --scene "on a wooden dock at a lake at sunrise with pines on the far shore behind him and a fishing rod leaning against the dock post at his side" \
    --shirt "white" --fit "unisex classic-fit cotton t-shirt" \
    --cover unisex-fishing-lake-life-graphic-tee
```

### 63. Men's Hunting – Opening Day Tee  *(batch 1)*
- **Handle:** `mens-hunting-opening-day-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee), $29.99
- **Art:** Whitetail buck with a heavy rack standing in a fall meadow with wildflowers, hills and bare trees fading out; OPENING DAY in sun-faded orange block caps. Style v3 A. Source: https://v3b.fal.media/files/b/0aae3ee2/P0OpWshK8zVs_dNu-MXzB_tOkORWBk.webp → designs/opening-day.png
- **Text on shirt:** OPENING DAY
- **Shirt colors:** Natural, Vintage White, Heather Dust, Athletic Heather
- **Primary keyword:** whitetail shirt — 320 / KD 32
- **Variants:** deer shirt men 260 / 32, buck shirt 720 / 46, opening day shirt 20 / 48
- **Proof:** approved by Sam 2026-10-13 against the Etsy style study (docs/style-study-2026-10-13.md)
- **Cover model:** registry #95 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/opening-day.png --name buck --model seedream \
    --person "Salvadoran-American man in his late 40s, shaved head, short black goatee, stocky build" \
    --scene "outside a rustic hunting cabin at dawn at the edge of a frosty field with fall trees behind him, holding a thermos cup of coffee at his side" \
    --shirt "natural" --fit "unisex classic-fit cotton t-shirt" \
    --cover mens-hunting-opening-day-graphic-tee
```

### 64. Women's Christian – Amazing Grace Tee  *(batch 1)*
- **Handle:** `womens-christian-amazing-grace-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee), $29.99
- **Art:** Wooden cross on a wildflower hill with fine rays of light, single-weight cream line (embroidery look). Style v3 B. Sage preview background keyed out. Source: https://v3b.fal.media/files/b/0aae3ee3/8BPkoRZUZMceoeAaxm0rR_p8HMwl1K.webp → designs/amazing-grace.png
- **Text on shirt:** Amazing Grace (script)
- **Shirt colors:** Black, Navy, Maroon, Military Green
- **Primary keyword:** amazing grace shirt — 70 / KD 49
- **Variants:** cross shirt 3,600 / 51, minimalist christian shirt 140 / 68
- **Proof:** approved by Sam 2026-10-13 against the Etsy style study (docs/style-study-2026-10-13.md)
- **Cover model:** registry #96 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/amazing-grace.png --name grace --model seedream \
    --person "Ghanaian-American woman in her late 20s, short natural curls, slim build, small gold stud earrings" \
    --scene "outside a small white country church on a sunny fall morning with a gravel path and maple trees behind her" \
    --shirt "black" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christian-amazing-grace-graphic-tee
```

## Christmas men's/unisex — autopilot batch A (2026-10-13; Sam: half of the 14 new Christmas designs men's/unisex)

### 65. Unisex Christmas – Deer Camp Christmas Tee  *(new)*
- **Handle:** `unisex-christmas-deer-camp-christmas-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee, men's cut), $29.99
- **Art:** Snowed-in log hunting cabin at dusk in dark pines, wreath with red bow on the door, antlers over it, glowing windows, chimney smoke, whitetail buck by the porch; DEER CAMP CHRISTMAS in faded red distressed block caps. Style v3 A. Recraft v4 (1 gen, QC v3 pass): https://v3b.fal.media/files/b/0aae404a/exom9ETN8yQI9769l1kaz_vPTbk0cy.webp → designs/deer-camp.png (--solid)
- **Text on shirt:** DEER CAMP CHRISTMAS
- **Shirt colors:** Natural, Heather Dust, Athletic Heather, Forest
- **Primary keyword:** deer camp shirt — 90 / KD 42
- **Variants:** hunting season shirt 40 / 64
- **Proof:** style study 2026-10-13 (winter cabin/village scenes in Etsy top listings); Sam's rugged men's themes list (hunting-camp Christmas, cabin)
- **Cover model:** registry #97 (reserved)

### 66. Unisex Christmas – Deer Camp Christmas Crewneck Sweatshirt  *(new)*
- **Handle:** `unisex-christmas-deer-camp-christmas-crewneck-sweatshirt` · **Blank:** Gildan 18000 crewneck sweatshirt (Printful #145), $39.99
- **Art:** Snowed-in log hunting cabin at dusk in dark pines, wreath with red bow on the door, antlers over it, glowing windows, chimney smoke, whitetail buck by the porch; DEER CAMP CHRISTMAS in faded red distressed block caps. Style v3 A. Recraft v4 (1 gen, QC v3 pass): https://v3b.fal.media/files/b/0aae404a/exom9ETN8yQI9769l1kaz_vPTbk0cy.webp → designs/deer-camp.png (--solid)
- **Text on shirt:** DEER CAMP CHRISTMAS
- **Shirt colors:** Forest Green, Sand, White, Sport Grey
- **Primary keyword:** buck sweatshirt — 1,000 / KD 24
- **Variants:** hunting sweatshirt 3,600 / 34, deer sweatshirt 590 / 47
- **Proof:** style study 2026-10-13 (winter cabin/village scenes in Etsy top listings); Sam's rugged men's themes list (hunting-camp Christmas, cabin)
- **Cover model:** registry #98 (reserved)

*Christmas Tree Farm (brief A2) was dropped after 3 failed art generations (truck too close to Fresh Cut Christmas Trees; ornamental lettering; wheeled sled). Sam asked on Telegram.*

## Christmas men's/unisex — batch A, design 2 (Sam approved the truck version on Telegram 2026-10-13)

### 67. Unisex Christmas – Christmas Tree Farm Tee  *(new)*
- **Handle:** `unisex-christmas-christmas-tree-farm-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee), $29.99
- **Art:** Snowy Christmas tree farm: red barn with a wreath, snow-heavy pines, vintage red pickup with a cut tree in the bed, OPEN FOR CUTTING sign; CHRISTMAS TREE FARM arched in faded red block caps. Style v3 A. Recraft v4 try 1 (https://v3b.fal.media/files/b/0aae404a/uBytZTCXf_ArUAROi8cn__kt92MpGz.webp) — QC flagged the truck as close to Fresh Cut Christmas Trees; Sam reviewed and approved it → designs/tree-farm.png
- **Text on shirt:** CHRISTMAS TREE FARM · OPEN FOR CUTTING
- **Shirt colors (all legible, Sam's all-colors rule):** Natural, White, Vintage White, Soft Cream, Heather Natural, Heather Dust, Tan, Ash, Silver, Athletic Heather, Solid White Blend, Heather Ice Blue, Heather Prism Ice Blue, Light Blue, Baby Blue, Soft Pink
- **Primary keyword:** christmas tree farm shirt — 90 / KD 61
- **Variants:** tree farm shirt 30 / 72
- **Proof:** style study 2026-10-13 (winter scene + red truck motifs in Etsy top listings); Sam's approval
- **Cover model:** registry #99 (reserved)

### 68. Unisex Christmas – Christmas Tree Farm Crewneck Sweatshirt  *(new)*
- **Handle:** `unisex-christmas-christmas-tree-farm-crewneck-sweatshirt` · **Blank:** Gildan 18000 crewneck sweatshirt (Printful #145), $39.99
- **Art:** Snowy Christmas tree farm: red barn with a wreath, snow-heavy pines, vintage red pickup with a cut tree in the bed, OPEN FOR CUTTING sign; CHRISTMAS TREE FARM arched in faded red block caps. Style v3 A. Recraft v4 try 1 (https://v3b.fal.media/files/b/0aae404a/uBytZTCXf_ArUAROi8cn__kt92MpGz.webp) — QC flagged the truck as close to Fresh Cut Christmas Trees; Sam reviewed and approved it → designs/tree-farm.png
- **Text on shirt:** CHRISTMAS TREE FARM · OPEN FOR CUTTING
- **Shirt colors (all legible, Sam's all-colors rule):** White, Sand, Ash, Sport Grey, Light Blue, Light Pink
- **Primary keyword:** christmas crewneck — 1,900 / KD 60
- **Variants:** winter sweatshirt 2,900 / 55
- **Proof:** style study 2026-10-13 (winter scene + red truck motifs in Etsy top listings); Sam's approval
- **Cover model:** registry #100 (reserved)

## Christmas — autopilot batch B (2026-10-13; women's + men's pairs, style v3)

### 69. Women's Christmas – Cardinal Christmas Tee  *(built 2026-10-13)*
- **Handle:** `womens-christmas-cardinal-christmas-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee), $29.99
- **Art:** Plump red cardinal on a snow-covered pine branch with red winterberries and two pinecones, soft snow; "Season's Greetings" in one vintage serif script line above. Style v3 A (no frame, edges break up). Recraft v4 try 1 (https://v3b.fal.media/files/b/0aae45a4/jTONp4VMtbd2at2TvaB7e_JrvFnz6R.webp) → designs/cardinal.png
- **Text on shirt:** Season's Greetings
- **Shirt colors (all legible — black lettering + red bird on light blanks):** White, Natural, Vintage White, Heather Stone, Athletic Heather, Pink, Light Violet, Heather Blue Lagoon
- **Primary keyword:** cardinal t shirt — 880 / KD 26 (RankHero 2026-10-13)
- **Variants:** cardinal shirt 880 / 46
- **Proof:** winter-bird / cardinal Christmas art is a long-running Etsy staple (cardinal sweatshirt 480 searches, 5,014 listings); muted vintage Christmas-card look from the 2026-10-13 style study
- **Cover model:** registry #101 (reserved)

### 70. Women's Christmas – Cardinal Christmas Crewneck Sweatshirt  *(built 2026-10-13)*
- **Handle:** `womens-christmas-cardinal-christmas-crewneck-sweatshirt` · **Blank:** Gildan 18000 crewneck sweatshirt (Printful #145), $39.99
- **Art:** same file as #69 (no new generation)
- **Shirt colors:** White, Ash, Sport Grey, Sand, Light Pink, Light Blue
- **Primary keyword:** cardinal sweatshirt — 480 / KD 46
- **Variants:** vintage christmas sweatshirt 5,400 / 52
- **Cover model:** registry #102 (reserved)

### 71. Unisex Christmas – Christmas Ski Lodge Tee  *(built 2026-10-13)*
- **Handle:** `unisex-christmas-christmas-ski-lodge-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee, men's cut), $29.99
- **Art:** 1960s retro skier in knit cap and sweater carving past a snowy A-frame lodge with a wreath, snowy pines and peaks; SKI LODGE in faded red block caps, small "Christmas" script. Style v3 A. Recraft v4 try 1 (https://v3b.fal.media/files/b/0aae4636/q-9GbmqK938siXNf7dArO_2nER5PLq.webp) → designs/ski-lodge.png
- **Shirt colors:** every legible light/mid 3001 color (≤100 variants)
- **Primary keyword:** vintage ski shirt — 590 / KD 41
- **Variants:** ski shirt 3,600 / 33
- **Proof:** vintage ski-resort tees are a steady Etsy/Amazon winter seller (ski sweatshirt 1,600 searches); rugged men's winter theme per Sam's list
- **Cover model:** registry #103 (reserved)

### 72. Unisex Christmas – Christmas Ski Lodge Crewneck Sweatshirt  *(built 2026-10-14)*
- **Handle:** `unisex-christmas-christmas-ski-lodge-crewneck-sweatshirt` · **Blank:** Gildan 18000 (Printful #145), $39.99
- **Art:** same file as #71
- **Primary keyword:** ski sweatshirt — 1,600 / KD 38
- **Cover model:** registry #104 (reserved)

### 73. Unisex Christmas – North Woods Moose Tee  *(built 2026-10-14)*
- **Handle:** `unisex-christmas-north-woods-moose-graphic-tee` · **Blank:** Bella+Canvas 3001 (men's cut), $29.99
- **Art:** Bull moose in deep snow by a frozen lake with a small wreath hanging from one antler, snowy pines, log cabin with chimney smoke, mountains; NORTH WOODS CHRISTMAS arched in faded red block caps. Style v3 A. Recraft v4 try 1 (https://v3b.fal.media/files/b/0aae46ca/Fk1tjUkyeyJTPZP1snAs5_H1OQzU9o.webp) → designs/moose.png
- **Shirt colors:** every legible light 3001 color (dark moose + red lettering), ≤100 variants
- **Primary keyword:** moose t shirt — 1,600 / KD 31 (RankHero 2026-10-13)
- **Variants:** moose shirt 590 / 46
- **Proof:** north-woods wildlife tees are a steady men's seller (moose sweatshirt 590 searches, KD 28); Sam's rugged men's Christmas list (cabin, hunting camp)
- **Cover model:** registry #105 (reserved)

### 74. Unisex Christmas – North Woods Moose Crewneck Sweatshirt  *(built 2026-10-14)*
- **Handle:** `unisex-christmas-north-woods-moose-crewneck-sweatshirt` · **Blank:** Gildan 18000 (#145), $39.99 · art = #73
- **Primary keyword:** moose sweatshirt — 590 / KD 28
- **Cover model:** registry #106 (reserved)

### 75. Women's Christmas – Winter Woods Fox Tee  *(built 2026-10-14)*
- **Handle:** `womens-christmas-winter-woods-fox-graphic-tee` · **Blank:** Bella+Canvas 6400, $29.99
- **Art:** Red fox curled asleep in fresh snow under snowy pine boughs with holly and red berries, snowflakes, tracks; "Winter Woods" in vintage serif above. Style v3 A. Recraft v4 try 1 (https://v3b.fal.media/files/b/0aae46ca/vQgJOtLyTL7xSYzKjyQ53_8WJbmTet.webp) → designs/fox.png
- **Shirt colors:** every legible light 6400 color
- **Primary keyword:** fox t shirt — 5,400 / KD 34
- **Proof:** fox sweatshirt 9,900 searches / KD 29 with only 6,782 listings — strong winter-animal demand; woodland-animal Christmas art in the 2026-10-13 style study
- **Cover model:** registry #107 (reserved)

### 76. Women's Christmas – Winter Woods Fox Crewneck Sweatshirt  *(built 2026-10-14)*
- **Handle:** `womens-christmas-winter-woods-fox-crewneck-sweatshirt` · **Blank:** Gildan 18000 (#145), $39.99 · art = #75
- **Primary keyword:** fox sweatshirt — 9,900 / KD 29
- **Cover model:** registry #108 (reserved)

### 77. Unisex Christmas – Mountain Christmas Bear Tee  *(built 2026-10-14)*
- **Handle:** `unisex-christmas-mountain-christmas-bear-graphic-tee` · **Blank:** Bella+Canvas 3001 (men's cut), $29.99
- **Art:** Black bear walking through deep snow toward the viewer between snow-heavy pines, log cabin with a wreath and lit windows behind, jagged peaks; MOUNTAIN CHRISTMAS in faded red block caps. Style v3 A. Recraft v4 try 2 (try 1 rejected: rounded sky dome read as a badge) (https://v3b.fal.media/files/b/0aae4726/xS59LcBdhavL09JYO_Cvn_BW5skmEy.webp) → designs/bear.png
- **Primary keyword:** bear t shirt — 4,400 / KD 50
- **Variants:** vintage bear shirt 720 / 52
- **Proof:** bear sweatshirt 8,100 searches / KD 40; wildlife-cabin winter art repeats across top Etsy listings (style study 2026-10-13)
- **Cover model:** registry #109 (reserved)

### 78. Unisex Christmas – Mountain Christmas Bear Crewneck Sweatshirt  *(built 2026-10-14)*
- **Handle:** `unisex-christmas-mountain-christmas-bear-crewneck-sweatshirt` · **Blank:** Gildan 18000 (#145), $39.99 · art = #77
- **Primary keyword:** bear sweatshirt — 8,100 / KD 40
- **Cover model:** registry #110 (reserved)

### 79. Women's Christmas – Golden Retriever Christmas Tee  *(built 2026-10-14)*
- **Handle:** `womens-christmas-golden-retriever-christmas-graphic-tee` · **Blank:** Bella+Canvas 6400, $29.99
- **Art:** Golden retriever sitting in snow in a red plaid scarf beside a wreath with a red bow, pine and holly with berries; "Merry Christmas" in vintage serif above. Style v3 A. Recraft v4 try 1 (https://v3b.fal.media/files/b/0aae4722/J-lnKmqonWvl9W5llkN6v_HTI5szUM.webp) → designs/golden.png
- **Primary keyword:** golden retriever shirt — 2,400 / KD 42
- **Proof:** golden retriever sweatshirt 1,300 / KD 38 with 6,095 listings; breed-specific Christmas dog art is a top Etsy gift category (distinct from the existing mixed-breed Christmas Dogs tee)
- **Cover model:** registry #111 (reserved)

### 80. Women's Christmas – Golden Retriever Christmas Crewneck Sweatshirt  *(built 2026-10-14)*
- **Handle:** `womens-christmas-golden-retriever-christmas-crewneck-sweatshirt` · **Blank:** Gildan 18000 (#145), $39.99 · art = #79
- **Primary keyword:** golden retriever sweatshirt — 1,300 / KD 38
- **Cover model:** registry #112 (reserved)

### 81. Unisex Christmas – Christmas on the Lake Tee  *(built 2026-10-14)*
- **Handle:** `unisex-christmas-christmas-on-the-lake-graphic-tee` · **Blank:** Bella+Canvas 3001 (men's cut), $29.99
- **Art:** Fisherman in a red plaid wool jacket standing in a wooden rowboat, rod bent as a largemouth bass leaps; a fresh-cut Christmas tree in the bow; snowy shore with pines and a cabin; CHRISTMAS ON THE LAKE arched in faded red block caps. Style v3 A. Recraft v4 try 1 (https://v3b.fal.media/files/b/0aae47ad/vm1u1rKZnKBvB8fF38m2f_xNcbOHAi.webp) → designs/xfish.png
- **Primary keyword:** christmas fishing — 1,900 / KD 16 (RankHero 2026-10-14)
- **Proof:** leaping-bass art is a proven seller (batch-1 Lake Life); fishing-gift Christmas searches with low KD
- **Cover model:** registry #113 (reserved)

### 82. Unisex Christmas – Christmas on the Lake Crewneck Sweatshirt  *(built 2026-10-14)*
- **Handle:** `unisex-christmas-christmas-on-the-lake-crewneck-sweatshirt` · **Blank:** Gildan 18000 (#145), $39.99 · art = #81
- **Primary keyword:** fishing sweatshirt — 390 / KD 50
- **Cover model:** registry #114 (reserved)

### 83. Women's Christmas – Winter Skate Club Penguins Tee  *(built 2026-10-14)*
- **Handle:** `womens-christmas-winter-skate-club-penguins-graphic-tee` · **Blank:** Bella+Canvas 6400, $29.99
- **Art:** Two penguins ice skating on a frozen pond in red and green knit scarves (one in a bobble hat), snowy pines, snowflakes; "Winter Skate Club" in vintage serif above. Style v3 A. Recraft v4 try 1 (https://v3b.fal.media/files/b/0aae47ad/54pRLS1suAaEs7uYmZjIK_mOkhoE7k.webp) → designs/penguin.png
- **Primary keyword:** penguin t shirt — 5,400 / KD 32
- **Variants:** skating shirt 5,400 / 40
- **Proof:** penguin shirt 6,600 searches / KD 32; cute winter animals are a top women's Christmas motif (style study)
- **Cover model:** registry #115 (reserved)

### 84. Women's Christmas – Winter Skate Club Penguins Crewneck Sweatshirt  *(built 2026-10-14)*
- **Handle:** `womens-christmas-winter-skate-club-penguins-crewneck-sweatshirt` · **Blank:** Gildan 18000 (#145), $39.99 · art = #83
- **Primary keyword:** penguin sweatshirt — 880 / KD 42
- **Cover model:** registry #116 (reserved)

### 85. Unisex Christmas – Upland Christmas Pheasant Tee  *(built 2026-10-15)*
- **Handle:** `unisex-christmas-upland-christmas-pheasant-graphic-tee` · **Blank:** Bella+Canvas 3001 (men's cut), $29.99
- **Art:** Ringneck rooster pheasant flushing from a snowy cornfield, English setter below, red barn and bare trees; UPLAND CHRISTMAS arched in faded red block caps. Style v3 A. Recraft v4 try 1 (https://v3b.fal.media/files/b/0aae47f3/uDUIWJT49vVFXs4A3o2Bx_d67uRho7.webp) → designs/pheasant.png
- **Primary keyword:** pheasant shirt — 390 / KD 34
- **Variants:** bird hunting shirt 260 / 32
- **Proof:** upland/bird-dog art is a steady men's hunting seller; Sam's hunting-camp Christmas theme
- **Cover model:** registry #117 (reserved)

### 86. Unisex Christmas – Upland Christmas Pheasant Crewneck Sweatshirt  *(built 2026-10-15)*
- **Handle:** `unisex-christmas-upland-christmas-pheasant-crewneck-sweatshirt` · Gildan 18000 (#145), $39.99 · art = #85
- **Primary keyword:** pheasant sweatshirt — 210 / KD 33
- **Cover model:** registry #118 (reserved)

### 87. Women's Christmas – Christmas on the Farm Horse Tee  *(built 2026-10-15)*
- **Handle:** `womens-christmas-christmas-on-the-farm-horse-graphic-tee` · **Blank:** Bella+Canvas 6400, $29.99
- **Art:** Chestnut horse with a flaxen mane in a snowy pasture, wreath with a red bow on the split-rail fence, red barn and snowy pines; "Christmas on the Farm" in vintage serif above. Style v3 A. Recraft v4 try 1 (https://v3b.fal.media/files/b/0aae47f4/tfuuED0WZoRwTL7EwfNoS_Rao042Mc.webp) → designs/horse.png
- **Primary keyword:** horse t shirt — 3,600 / KD 46
- **Proof:** christmas horse 4,400 searches; horse sweatshirt 1,600 / KD 38; farm Christmas scenes in the 2026-10-13 style study (distinct from the western Run Free tee)
- **Cover model:** registry #119 (reserved)

### 88. Women's Christmas – Christmas on the Farm Horse Crewneck Sweatshirt  *(built 2026-10-15)*
- **Handle:** `womens-christmas-christmas-on-the-farm-horse-crewneck-sweatshirt` · Gildan 18000 (#145), $39.99 · art = #87
- **Primary keyword:** horse sweatshirt — 1,600 / KD 38
- **Cover model:** registry #120 (reserved)

### 89. Women's Thanksgiving – Gobble Gobble Turkey Crewneck Sweatshirt  *(built 2026-10-15)*
- **Handle:** `womens-thanksgiving-gobble-gobble-crewneck-sweatshirt` · Gildan 18000 (#145), $39.99 · art = #53
- **Primary keyword:** turkey sweatshirt — 390 / KD 56
- **Cover model:** registry #126

### 90. Unisex Thanksgiving – Turkey Day Crew Crewneck Sweatshirt  *(built 2026-10-15)*
- **Handle:** `unisex-thanksgiving-turkey-day-crew-crewneck-sweatshirt` · Gildan 18000 (#145), $39.99 · art = #54
- **Primary keyword:** turkey day sweatshirt — 10 / KD 49 (+ fall sweatshirt 1,900 / 61)
- **Cover model:** registry #128 (man + woman)

## Whimsy-first batch (Sam, 2026-10-15)

### 91. Women's Christmas – Sleigh Queen Tee  *(built 2026-10-15)*
- **Handle:** `womens-christmas-sleigh-queen-graphic-tee` · **Blank:** Bella+Canvas 6400, $29.99
- **Hook:** "Sleigh Queen" — slay/sleigh wordplay, 2-second read, family-table clean, no trademark
- **Art:** Vintage sleigh with curled runners, plaid blanket and a stack of gifts in falling snow, holly and stars above, SLEIGH QUEEN in faded red + sage. Style v3 A, Recraft v4 try 1.
- **Primary keyword:** sleigh all day shirt — 110 / KD 42 (also claims funny christmas shirt 8,100 / 58)
- **Cover model:** registry #129

### 92. Women's Christmas – Sleigh Queen Crewneck Sweatshirt  *(built 2026-10-15)*
- **Handle:** `womens-christmas-sleigh-queen-crewneck-sweatshirt` · Gildan 18000 (#145), $39.99 · art = #91
- **Hook:** "Sleigh Queen" (same joke, fleece edition)
- **Primary keyword:** sleigh sweatshirt — 590 / KD 28 (also claims funny christmas sweater 18,100 / 52)
- **Cover model:** registry #130

### 93. Women's Thanksgiving – Nap Queen Tee  *(built 2026-10-15)*
- **Handle:** `womens-thanksgiving-nap-queen-graphic-tee` · **Blank:** Bella+Canvas 6400, $29.99
- **Hook:** "Nap Queen" — whoever claims the good chair after Thanksgiving dinner
- **Art:** Wingback armchair with a knitted throw, sleeping tabby, pie on a side table, steaming mug, fall leaves; NAP QUEEN in faded block caps. Style v3 A, Recraft v4 try 1.
- **Primary keyword:** nap queen shirt — 140 / KD 40
- **Cover model:** registry #131
- **Next:** crewneck version built as #94

### 94. Women's Thanksgiving – Nap Queen Crewneck Sweatshirt  *(built 2026-10-15)*
- **Handle:** `womens-thanksgiving-nap-queen-crewneck-sweatshirt` · Gildan 18000 (#145), $39.99 · art = #93
- **Hook:** "Nap Queen" (same joke, fleece edition)
- **Colors:** White, Sand, Ash, Sport Grey, Light Pink, Light Blue
- **Primary keyword:** nap sweatshirt — 720 / KD 27 (also claims nap queen sweatshirt 110 / 40)
- **Cover model:** registry #132

## Thanksgiving whimsy batch — lane A (2026-10-15; thanksgiving-shirts 10 → 14, each tee + crewneck)

### 95. Unisex Thanksgiving – Mash Hour Tee  *(BUILDING [A])*
- **Handle:** `unisex-thanksgiving-mash-hour-graphic-tee` · **Blank:** Bella+Canvas 3001, $29.99
- **Hook:** "Mash Hour" — happy hour, but it's the mashed potatoes. Whoever guards the potato bowl laughs.
- **Why it's not taken:** Etsy mashed-potato shirts are "mashed potato enthusiast"/"potato queen" text-only; no MASH HOUR scene print.
- **Art:** Style v3 A — an overflowing vintage bowl of mashed potatoes with a melting butter pat, a gravy boat pouring, a wooden spoon, steam curls; MASH HOUR in faded retro diner caps. Burnt orange, butter yellow, cream, soft brown linework.
- **Primary keyword:** mashed potato shirt — 320 / KD 32 (also potato shirt 880 / 42)
- **Cover model:** registry #166 (man + woman)

### 96. Unisex Thanksgiving – Mash Hour Crewneck Sweatshirt  *(built 2026-10-15)*
- **Handle:** `unisex-thanksgiving-mash-hour-crewneck-sweatshirt` · Gildan 18000 (#145), $39.99 · art = #95
- **Cover model:** registry #167 (man + woman)

### 97. Unisex Thanksgiving – Totally a Pilgrim Tee  *(BUILDING [A])*
- **Handle:** `unisex-thanksgiving-totally-a-pilgrim-graphic-tee` · **Blank:** Bella+Canvas 3001, $29.99
- **Hook:** "Totally a Pilgrim" — a turkey in a too-big pilgrim hat and buckle collar, hoping nobody checks. Dads and kids both get it in a second.
- **Why it's not taken:** turkey-in-disguise is a classroom craft theme, but Etsy shirts are cartoon clip-art; no vintage engraved version with this line.
- **Art:** Style v3 A — a vintage engraved turkey standing proud in a black pilgrim hat with a buckle and a white collar, fall leaves at its feet; TOTALLY A PILGRIM in faded slab caps. Faded red, mustard, cream, soft black linework.
- **Primary keyword:** pilgrim shirt — 480 / KD 30
- **Cover model:** registry #168 (man + woman)

### 98. Unisex Thanksgiving – Totally a Pilgrim Crewneck Sweatshirt  *(BUILDING [A])*
- **Handle:** `unisex-thanksgiving-totally-a-pilgrim-crewneck-sweatshirt` · Gildan 18000 (#145), $39.99 · art = #97
- **Cover model:** registry #169 (man + woman)

### 99. Women's Thanksgiving – Here for the Scraps Tee  *(BUILDING [A])*
- **Handle:** `womens-thanksgiving-here-for-the-scraps-graphic-tee` · **Blank:** Bella+Canvas 6400, $29.99
- **Hook:** "Here for the Scraps" — the dog under the Thanksgiving table, chin on the tablecloth. Every dog mom has this dog.
- **Why it's not taken:** Etsy dog-Thanksgiving shirts are paw-print text; no vintage illustrated begging dog with this line.
- **Art:** Style v3 A — a hopeful beagle peeking over the edge of a table with a roast turkey, a pie and fall leaves, paws on the tablecloth; HERE FOR THE SCRAPS in faded retro script + caps. Burnt orange, sage, cream, brown linework.
- **Primary keyword:** thanksgiving dog shirt — 170 / KD 34
- **Cover model:** registry #170

### 100. Women's Thanksgiving – Here for the Scraps Crewneck Sweatshirt  *(BUILDING [A])*
- **Handle:** `womens-thanksgiving-here-for-the-scraps-crewneck-sweatshirt` · Gildan 18000 (#145), $39.99 · art = #99
- **Cover model:** registry #171

### 101. Women's Thanksgiving – Pie Oh My Tee  *(BUILDING [A])*
- **Handle:** `womens-thanksgiving-pie-oh-my-graphic-tee` · **Blank:** Bella+Canvas 6400, $29.99
- **Hook:** "Pie Oh My" — the house pun (pie / oh my) for whoever brings three pies.
- **Why it's not taken:** "oh my pie" exists as text; no vintage windowsill-pies scene print.
- **Art:** Style v3 A — three vintage pies cooling on a windowsill (lattice cherry, pumpkin, pecan) with a gingham cloth and falling leaves; PIE OH MY in faded rounded retro letters. Faded red, pumpkin, cream, brown linework.
- **Primary keyword:** funny pie shirt — 20 / KD 48 (small but measured and unclaimed)
- **Cover model:** registry #172

### 102. Women's Thanksgiving – Pie Oh My Crewneck Sweatshirt  *(BUILDING [A])*
- **Handle:** `womens-thanksgiving-pie-oh-my-crewneck-sweatshirt` · Gildan 18000 (#145), $39.99 · art = #101
- **Cover model:** registry #173

## Evergreen whimsy batch — lane B (2026-10-15; emptiest collections first: soccer mom 1, football mom 1, baseball mom 1, nurse 2, fishing 4, hunting 5)

### 110. Women's Soccer Mom – Goal Digger Tee  *(built 2026-10-15)*
- **Handle:** `womens-soccer-mom-goal-digger-graphic-tee` · **Blank:** Bella+Canvas 6400, $29.99 · tags soccer-mom-shirts, graphic-tees-for-women, vintage-graphic-tees
- **Hook:** "Professional Goal Digger" — the gold-digger wink, but she's only after goals. Every sideline mom grins.
- **Why it's not taken:** Etsy "goal digger" listings are plain text in trendy fonts; no vintage scene print with the line.
- **Art:** Style v3 A — a scuffed vintage leather soccer ball resting in grass with daisies and a cooler of orange slices, PROFESSIONAL GOAL DIGGER in faded retro caps. Faded orange, sage, cream, navy linework.
- **Primary keyword:** soccer shirt for mom — 2,900 / KD 16 (also funny soccer shirt 390 / 48)
- **Cover model:** registry #180

### 111. Women's Football Mom – Hut Hut Hooray Tee  *(built 2026-10-15)*
- **Handle:** `womens-football-mom-hut-hut-hooray-graphic-tee` · **Blank:** Bella+Canvas 6400, $29.99 · tags football-mom-shirts, graphic-tees-for-women, vintage-graphic-tees
- **Hook:** "Hut Hut Hooray" — hip hip hooray with a snap count. Reads in a second from the bleachers.
- **Why it's not taken:** Etsy football mom shirts are "Football Mom" + number/leopard text; the line shows on a few text-only listings, none with a vintage scene.
- **Art:** Style v3 A — a vintage leather football on a kicking tee with pennant flags and a megaphone, HUT HUT HOORAY in faded collegiate caps. Faded red, mustard, cream, brown linework.
- **Primary keyword:** game day shirt women — 880 / KD 26 (also funny football shirt 880 / 54)
- **Cover model:** registry #181

### 112. Women's Baseball Mom – Pitch Please Tee  *(built 2026-10-15)*
- **Handle:** `womens-baseball-mom-pitch-please-graphic-tee` · **Blank:** Bella+Canvas 6400, $29.99 · tags baseball-mom-shirts, graphic-tees-for-women, vintage-graphic-tees
- **Hook:** "Pitch, Please" — sass at the umpire, aimed at the pitch. Bleacher moms laugh.
- **Why it's not taken:** Etsy shows it as script text only; no vintage ballpark print.
- **Art:** Style v3 A — a scuffed vintage baseball with red stitches, crossed wooden bats, a bag of sunflower seeds and a mitt, PITCH, PLEASE in faded varsity script/caps. Faded red, navy, cream, tan.
- **Primary keyword:** funny baseball shirt — 880 / KD 49
- **Cover model:** registry #182

### 113. Women's Nurse – Charting Is My Cardio Tee  *(built 2026-10-15)*
- **Handle:** `womens-nurse-charting-is-my-cardio-graphic-tee` · **Blank:** Bella+Canvas 6400, $29.99 · tags nurse-shirts, graphic-tees-for-women, vintage-graphic-tees
- **Hook:** "Charting Is My Cardio" — every nurse who's typed notes for an hour after shift laughs.
- **Why it's not taken:** Etsy nurse humor leans on "nurse life"/coffee lines; this line is rare and never with a vintage scene.
- **Art:** Style v3 A — a vintage clipboard chart with a heart-rate line running off it like a jogging track, a stethoscope and running sneakers, CHARTING IS MY CARDIO in faded retro caps. Faded teal, coral, cream, navy.
- **Primary keyword:** funny nurse shirt — 1,300 / KD 56
- **Cover model:** registry #183

### 114. Men's Fishing – Reel Talk Tee  *(built 2026-10-15)*
- **Handle:** `mens-fishing-reel-talk-graphic-tee` · **Blank:** Bella+Canvas 3001, $29.99 · tags fishing-t-shirts, graphic-tees-for-men, vintage-graphic-tees
- **Hook:** "Reel Talk" — real talk, from the guy who only wants to talk fishing. Dry, dad-friendly.
- **Why it's not taken:** Etsy "reel" puns are mostly "reel cool dad"; REEL TALK with a vintage bass/reel scene isn't there.
- **Art:** Style v3 A — a vintage baitcasting reel and rod with a largemouth bass leaping beside it, lily pads and splash, REEL TALK in faded 70s caps. Sage, rust, cream, navy.
- **Primary keyword:** funny fishing shirt — 3,600 / KD 40
- **Cover model:** registry #184

### 115. Men's Hunting – Deer Diary Tee  *(built 2026-10-15)*
- **Handle:** `mens-hunting-deer-diary-graphic-tee` · **Blank:** Bella+Canvas 3001, $29.99 · tags hunting-t-shirts, graphic-tees-for-men, vintage-graphic-tees
- **Hook:** "Deer Diary" — the hunting log as a teenage diary. Deer camp chuckles.
- **Why it's not taken:** Etsy has "dear diary" girl shirts; a whitetail field-journal version is not there.
- **Art:** Style v3 A — an open vintage field journal with a whitetail buck stepping out of the page, a pencil and oak leaves, DEER DIARY in faded block caps. Forest green, rust, cream, brown.
- **Primary keyword:** funny hunting shirt — 590 / KD 48
- **Cover model:** registry #185

## Evergreen whimsy batch 2 — lane B (2026-10-15; anime 0, christian 2, football mom 2, nurse 3, fishing 5)

### 116. Women's Christian – Back Pew Crew Tee  *(built 2026-10-15)*
- **Handle:** `womens-christian-back-pew-crew-graphic-tee` · **Blank:** Bella+Canvas 6400, $29.99 · tags christian-shirts, graphic-tees-for-women, vintage-graphic-tees
- **Hook:** "Back Pew Crew" — the family that slides in at 10:02 every Sunday. Church ladies laugh, nobody's offended.
- **Why it's not taken:** Etsy has a handful of plain-text "back pew" shirts; none with a vintage country-church scene.
- **Art:** Style v3 A — little white country church with open doors, the last wooden pew with a hymnal, church fan and reading glasses, wildflowers; BACK PEW CREW in faded navy block caps. Navy, dusty rose, cream. Recraft v4 try 1 (QC v3 pass).
- **Primary keyword:** funny christian shirt — 1,600 / KD 50 (also church shirts 2,400 / 41)
- **Cover model:** registry #186

### 117. Men's Fishing – Fisher of Men (Mostly Bass) Tee  *(BUILDING [B])*
- **Handle:** `mens-fishing-fisher-of-men-graphic-tee` · **Blank:** Bella+Canvas 3001, $29.99 · tags fishing-t-shirts, graphic-tees-for-men, vintage-graphic-tees
- **Hook:** "Fisher of Men (Mostly Bass)" — the verse, with an honest footnote. Church-going fishermen grin.
- **Why it's not taken:** Etsy "fishers of men" shirts are the verse in script over a cross; nobody adds the bass punchline.
- **Art:** Style v3 A — wooden rowboat on a calm lake, rod bent over the side, largemouth bass leaping at the line, cattails and pines; FISHER OF MEN in faded block caps, (MOSTLY BASS) below. Sage, rust, cream, navy. Recraft v4 try 2 (try 1 rejected: sunburst read as a badge, footnote too thin).
- **Primary keyword:** fishers of men shirt — 390 / KD 31
- **Cover model:** registry #187

### 118. Women's Nurse – IV League Tee  *(BUILDING [B])*
- **Handle:** `womens-nurse-iv-league-graphic-tee` · **Blank:** Bella+Canvas 6400, $29.99 · tags nurse-shirts, graphic-tees-for-women, vintage-graphic-tees
- **Hook:** "IV League" — Ivy League varsity lettering, but the only drip is from the IV bag. Nursing students and new grads get it instantly.
- **Why it's not taken:** a few text-only listings use the pun; none in a vintage varsity print with the IV pole.
- **Art:** vintage collegiate varsity — IV bag on a pole with a drip line, stethoscope looped on the pole, laurel sprigs; IV LEAGUE arched in navy/crimson varsity caps. Recraft v4 try 1 (QC v3 pass).
- **Primary keyword:** funny nursing shirt — 1,300 / KD 44 (also nursing school shirt 880 / 58)
- **Cover model:** registry #188

### 119. Women's Football Mom – Down, Set, Snacks Tee  *(BUILDING [B])*
- **Handle:** `womens-football-mom-down-set-snacks-graphic-tee` · **Blank:** Bella+Canvas 6400, $29.99 · tags football-mom-shirts, graphic-tees-for-women, vintage-graphic-tees
- **Hook:** "Down, Set, Snacks" — the snap count, as heard by the mom running the snack cooler.
- **Why it's not taken:** Etsy football mom shirts are "Football Mom" + number/leopard; this line isn't there.
- **Art:** Style v3 A — leather football on a bleacher with popcorn, a juice box, orange slices, a small cooler and a pennant; DOWN, SET, SNACKS in faded red/mustard collegiate caps. Recraft v4 try 1 (QC v3 pass).
- **Primary keyword:** snack shirt — 140 / KD 65 (small, measured, describes the art; football mom terms are owned by the collection)
- **Cover model:** registry #189

### 120. Men's Fishing – Cheaper Than Therapy (Barely) Tee  *(BUILDING [B])*
- **Handle:** `mens-fishing-cheaper-than-therapy-graphic-tee` · **Blank:** Bella+Canvas 3001, $29.99 · tags fishing-t-shirts, graphic-tees-for-men, vintage-graphic-tees
- **Hook:** "Cheaper Than Therapy (Barely)" — the classic line plus the footnote every spouse who has seen the tackle receipts adds.
- **Why it's not taken:** "cheaper than therapy" is common; the "(barely)" twist with an overflowing tackle box is not.
- **Art:** Style v3 A — open tackle box overflowing with lures, two rods, a reel and a very long receipt, bass jumping behind; CHEAPER THAN THERAPY in faded caps, (BARELY) below. Forest green, rust, cream, navy.
- **Primary keyword:** daddy fishing shirt — 140 / KD 36
- **Cover model:** registry #190

### 121. Unisex Anime – Slurp Responsibly Tee  *(BUILDING [B])*
- **Handle:** `unisex-anime-slurp-responsibly-graphic-tee` · **Blank:** Bella+Canvas 3001, $29.99 · tags anime-shirts, graphic-tees-for-men, graphic-tees-for-women
- **Hook:** "Slurp Responsibly" — a drink-responsibly warning for ramen, from an original calico cat chef mid-slurp.
- **Why it's not taken:** ramen-cat shirts exist, but as cute kawaii art without a line; this one is a retro 90s cel-style print with the joke. Original character only.
- **Art:** retro 90s anime cel style — chubby calico cat chef in a headband slurping a huge bowl of ramen, noodles flying, lantern and steam; SLURP RESPONSIBLY in faded retro caps. Coral, mustard, teal, cream.
- **Primary keyword:** ramen t shirt — 1,300 / KD 38 (also ramen shirt 1,000 / 42, noodle shirt 320 / 50)
- **Cover model:** registry #191 (unisex: man AND woman together)

## Evergreen whimsy batch 3 — lane B (2026-10-15; y2k 0, cropped 1, anime 1, christian 3, baseball mom 3, soccer mom 3)

### 122. Women's Cropped – Matcha Made in Heaven Tee  *(BUILDING [B])*
- **Handle:** `womens-cropped-matcha-made-in-heaven-graphic-tee` · **Blank:** AS Colour 4062 crop top (Printful #636), $29.99 · tags cropped-graphic-tees, graphic-tees-for-women
- **Hook:** "Matcha Made in Heaven" — match made in heaven, for the girl whose love story is with her oat-milk matcha.
- **Why it's not taken:** the pun shows on a few kawaii-cartoon listings; none as a vintage cafe illustration.
- **Art:** vintage cafe illustration — a whisked matcha latte in a ceramic cup with a bamboo whisk, a little cloud and sunrays above, MATCHA MADE IN HEAVEN in faded retro script/caps. Sage, cream, soft pink.
- **Primary keyword:** matcha shirt — 3,600 / KD 32 (also matcha t shirt 3,600 / 31)
- **Cover model:** registry #192

### 123. Women's Y2K – Low Battery, High Standards Tee  *(BUILDING [B])*
- **Handle:** `womens-y2k-low-battery-high-standards-graphic-tee` · **Blank:** Bella+Canvas 6400, $29.99 · tags y2k-graphic-tees, graphic-tees-for-women
- **Hook:** "Low Battery, High Standards" — a flip phone at 1 bar, still not texting him back.
- **Why it's not taken:** "low battery" shirts are generic battery icons; the flip-phone + standards twist isn't there.
- **Art:** Y2K look — a glittery flip phone with a low-battery bar, butterflies and sparkles, LOW BATTERY / HIGH STANDARDS in chrome bubble letters. Pink, lilac, silver.
- **Primary keyword:** low battery shirt — 90 / KD 54 (y2k shirt 22,200/50 is the collection's)
- **Cover model:** registry #193

### 124. Unisex Anime – Mecha Mondays Tee  *(BUILDING [B])*
- **Handle:** `unisex-anime-mecha-mondays-graphic-tee` · **Blank:** Bella+Canvas 3001, $29.99 · tags anime-shirts, graphic-tees-for-men, graphic-tees-for-women
- **Hook:** "Mecha Mondays" — a giant battle robot slumped at a tiny office desk with a coffee. Everyone has piloted that Monday.
- **Why it's not taken:** mecha shirts are action poses; no tired office-robot joke. Original robot, no known designs.
- **Art:** retro 80s anime cel style — big original mecha hunched over a small desk with a steaming mug and a stack of papers, city skyline at sunset behind; MECHA MONDAYS in faded retro caps. Teal, coral, mustard, cream.
- **Primary keyword:** retro anime shirt — 1,600 / KD 37 (also robot shirt 720 / 46)
- **Cover model:** registry #194 (unisex: man AND woman)

### 125. Women's Baseball Mom – Bases Loaded, Mom Exhausted Tee  *(BUILDING [B])*
- **Handle:** `womens-baseball-mom-bases-loaded-graphic-tee` · **Blank:** Bella+Canvas 6400, $29.99 · tags baseball-mom-shirts, graphic-tees-for-women, vintage-graphic-tees
- **Hook:** "Bases Loaded, Mom Exhausted" — three games this weekend, two fields, one mom.
- **Why it's not taken:** Etsy baseball mom shirts are leopard/number text; this line isn't there.
- **Art:** Style v3 A — a vintage ballpark diamond with a ball on every base, a folding stadium chair holding a coffee thermos, a mitt and sunflower seeds; BASES LOADED / MOM EXHAUSTED in faded red/navy varsity caps.
- **Primary keyword:** baseball mom tshirt — 880 / KD 60
- **Cover model:** registry #195

### 126. Women's Soccer Mom – Official Orange Slice Supplier Tee  *(BUILDING [B])*
- **Handle:** `womens-soccer-mom-orange-slice-supplier-graphic-tee` · **Blank:** Bella+Canvas 6400, $29.99 · tags soccer-mom-shirts, graphic-tees-for-women, vintage-graphic-tees
- **Hook:** "Official Orange Slice Supplier" — her real position on the team.
- **Why it's not taken:** halftime orange slices show up as clip art, not as a vintage print with a job title.
- **Art:** Style v3 A — a vintage cooler overflowing with orange slices beside a scuffed soccer ball and a whistle; OFFICIAL ORANGE SLICE SUPPLIER in faded orange/navy caps.
- **Primary keyword:** soccer mom tshirt — 2,900 / KD 38
- **Cover model:** registry #196

### 127. Women's Christian – Casserole Ministry Tee  *(BUILDING [B])*
- **Handle:** `womens-christian-casserole-ministry-graphic-tee` · **Blank:** Bella+Canvas 6400, $29.99 · tags christian-shirts, graphic-tees-for-women, vintage-graphic-tees
- **Hook:** "Casserole Ministry" — the church ladies who show up with a 9×13 for every birth, funeral and move.
- **Why it's not taken:** no vintage casserole/potluck Christian print with this line on Etsy.
- **Art:** Style v3 A — a vintage casserole dish in quilted oven mitts with a wooden spoon, a little steeple and wildflowers behind; CASSEROLE MINISTRY in faded 1950s script/caps. Dusty rose, sage, cream, navy.
- **Primary keyword:** casserole shirt — 20 / KD 48 (small, measured, describes the art)
- **Cover model:** registry #197

## Evergreen whimsy batch 4 — lane B (2026-10-15; y2k 1, cropped 2, anime 3, hunting 6, nurse 5)

### 128. Women's Y2K – Still Loading Since 1999 Tee  *(BUILDING [B])*
- **Handle:** `womens-y2k-still-loading-graphic-tee` · **Blank:** Bella+Canvas 6400, $29.99 · tags y2k-graphic-tees, graphic-tees-for-women
- **Hook:** "Still Loading Since 1999" — a translucent candy-colored desktop computer with an hourglass cursor; anyone who heard dial-up laughs.
- **Why it's not taken:** Etsy y2k tees are butterflies and slogans; the dial-up computer joke isn't there.
- **Art:** Y2K — a translucent teal desktop computer with a CRT screen showing a loading bar and hourglass, a floppy disk and sparkles; STILL LOADING / SINCE 1999 in chrome bubble letters. Teal, lilac, silver.
- **Primary keyword:** computer shirt — 390 / KD 50 (also loading shirt 140 / 54)
- **Cover model:** registry #198

### 129. Women's Y2K – Hot Mess Express Tee  *(BUILDING [B])*
- **Handle:** `womens-y2k-hot-mess-express-graphic-tee` · **Blank:** Bella+Canvas 6400, $29.99 · tags y2k-graphic-tees, graphic-tees-for-women
- **Hook:** "Hot Mess Express" — a glittery pink toy train running late, iced coffee spilling. Self-roast, cheerful.
- **Why it's not taken:** text-only "hot mess" listings everywhere; a Y2K glitter-train illustration isn't.
- **Art:** Y2K — a sparkly pink retro toy train puffing heart-shaped smoke, an iced coffee sloshing in the coal car, butterflies; HOT MESS EXPRESS in chrome bubble letters. Pink, lilac, silver.
- **Primary keyword:** hot mess shirt — 320 / KD 42
- **Cover model:** registry #199

### 130. Women's Cropped – Espresso Yourself Tee  *(BUILDING [B])*
- **Handle:** `womens-cropped-espresso-yourself-graphic-tee` · **Blank:** AS Colour 4062 crop top (Printful #636), $29.99 · tags cropped-graphic-tees, graphic-tees-for-women
- **Hook:** "Espresso Yourself" — express yourself, one shot at a time.
- **Why it's not taken:** a handful of text listings; no vintage espresso-machine illustration with the line.
- **Art:** vintage cafe illustration — a little retro espresso machine pulling a shot into a tiny cup with steam hearts, coffee beans; ESPRESSO YOURSELF in chunky retro letters. Brown, cream, terracotta.
- **Primary keyword:** espresso yourself shirt — 90 / KD 44 (also espresso shirt 390 / 56, coffee crop top 50 / 45)
- **Cover model:** registry #200

### 131. Men's Hunting – Professional Tree Sitter Tee  *(BUILDING [B])*
- **Handle:** `mens-hunting-professional-tree-sitter-graphic-tee` · **Blank:** Bella+Canvas 3001, $29.99 · tags hunting-t-shirts, graphic-tees-for-men, vintage-graphic-tees
- **Hook:** "Professional Tree Sitter" — the bowhunter's actual job description: sit in a tree, don't move, for hours.
- **Why it's not taken:** tree stand humor exists as text; a vintage bowhunter-in-the-stand scene with the job title isn't.
- **Art:** Style v3 A — a hunter with a compound bow sitting in a ladder tree stand high in an oak, a whitetail far below, fall leaves; PROFESSIONAL TREE SITTER in faded block caps. Forest green, rust, cream, brown.
- **Primary keyword:** bowhunting shirt — 260 / KD 32 (also bow hunting shirt 260 / 38)
- **Cover model:** registry #201

### 132. Women's Nurse – Don't Say the Q Word Tee  *(BUILDING [B])*
- **Handle:** `womens-nurse-dont-say-the-q-word-graphic-tee` · **Blank:** Bella+Canvas 6400, $29.99 · tags nurse-shirts, graphic-tees-for-women, vintage-graphic-tees
- **Hook:** "Don't Say the Q Word" — every ER nurse knows saying "quiet" summons chaos.
- **Why it's not taken:** the superstition shows on a few text tees; none with a vintage ER illustration.
- **Art:** Style v3 A — a vintage ambulance with lights flashing, a coffee cup and a stethoscope, a little "shh" finger sign; DON'T SAY THE Q WORD in faded retro caps. Red, teal, cream, navy.
- **Primary keyword:** er nurse shirt — 720 / KD 53
- **Cover model:** registry #202

### 133. Unisex Anime – Destroyer of Cities, Lover of Naps Tee  *(BUILDING [B])*
- **Handle:** `unisex-anime-kaiju-naps-graphic-tee` · **Blank:** Bella+Canvas 3001, $29.99 · tags anime-shirts, graphic-tees-for-men, graphic-tees-for-women
- **Hook:** "Destroyer of Cities, Lover of Naps" — an original chubby kaiju curled up asleep on a skyscraper.
- **Why it's not taken:** kaiju tees are rampage poses; this soft-monster joke isn't there. Original creature, no known monsters.
- **Art:** retro 80s anime cel style — a chubby original green kaiju napping curled around a skyscraper top under a crescent moon, little "z z z"; DESTROYER OF CITIES / LOVER OF NAPS in faded retro caps. Green, coral, mustard, cream.
- **Primary keyword:** kaiju t shirt — 260 / KD 32 (also vintage anime shirt 1,600 / 40, kaiju shirt 110 / 40)
- **Cover model:** registry #203 (unisex: man AND woman)
