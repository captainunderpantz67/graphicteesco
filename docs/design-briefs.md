# Design briefs — build queue for the three bottom-KD collections (2026-10-06)

Goal: fill each of the three lowest-KD collections to **14 products**. Counts read live from Shopify (read-only) on 2026-10-06:

| Collection | Keyword (vol / KD, RankHero 2026-10-02/06) | Live now | Briefs here | Blank |
|---|---|---|---|---|
| Christmas shirts for women | christmas shirts for women — 5,400 / KD 14 | 4 (Gingerbread Lane, Merry & Bright, Cabin Christmas, Fresh Cut Christmas Trees) | **10 — build first (season)** | Bella+Canvas 6400 women's relaxed |
| Men's gym shirts | mens gym shirts — 18,100 / KD 10 | 3 (Iron & Sweat, Barbell Club, Plate Club) | 11 | Bella+Canvas 3001 |
| Western graphic tees | western graphic tees — 2,400 / KD 16 | 2 (Desert Rider, Desert Bloom) | 12 (7 women's 6400, 5 unisex 3001) | 6400 / 3001 |

**Order:** Christmas briefs 1–10 first — they need to be live and indexed before December. Then gym (highest volume, lowest KD), then western.


## Keyword check — RankHero, measured 2026-10-06 (supersedes the "unmeasured" marks below)

**Keep (measured demand):** bull riding shirt 720/KD30 · vintage rodeo shirt 320/32 · deadlift shirt 210/33 · strongman shirt 170/34 · kettlebell shirt 140/36 · wild horse shirt 140/36 · barrel racing shirt 390/38 · boxing gym shirt 210/40 · leg day shirt 260/42 · horseshoe shirt 210/42 · gym rat shirt 720/43 · cow skull shirt 480/46 · cowboy boots shirt 590/48 · howdy shirt 480/53 · cowgirl graphic tee 480/56 · Christmas cookie shirt 210/56 · Christmas movie shirt 480/60 · retro Santa shirt 390/60 · Christmas lights shirt 320/60 · ranch hand shirt 30/50 (weak)
Christmas long-tails are all KD 56+: those products exist to deepen `/christmas-shirts-for-women/` (KD 14), not to rank alone.

**Swap (no measurable demand) → replacement primary:**
| Brief | Old primary (dead) | New primary | Vol / KD |
|---|---|---|---|
| Hot Cocoa Club | hot cocoa Christmas shirt | snowman shirt (redesign around a vintage snowman) | 1,600 / 46 |
| Vintage ornament | vintage ornament Christmas shirt | Christmas tree shirt (a decorated vintage tree) | 27,100 / 46 |
| Wreath | Christmas wreath shirt | Christmas cat shirt (cat in the wreath) | 880 / 56 |
| Reindeer | reindeer Christmas shirt | Christmas dog shirt (dog in reindeer antlers) | 880 / 63 |
| Garage gym | garage gym shirt | **pump cover** (oversized gym tee) | **22,200 / 28** |
| Early morning workout | early morning workout shirt | lifting shirt | 1,900 / 40 |
| Rest day | rest day shirt | bodybuilding shirt | 1,600 / 36 |
| Cowboy hat | cowboy hat graphic tee | **rodeo t shirt** | **5,400 / 32** |
| Cowboy coffee | cowboy coffee shirt | cactus shirt | 720 / 50 |

**New collection-level opportunities found:** `pump cover` 22,200 / KD 28 (oversized gym shirts — candidate collection `/pump-covers/` on an oversized blank) · `rodeo t shirt` 5,400 / KD 32 (candidate collection or western sub-page) · `christmas tree shirt` 27,100 / KD 46 · `bodybuilding shirt` 1,600 / 36 · `lifting shirt` 1,900 / 40.

## Rules every brief follows
- **Art:** original, vintage screen-print look, 3–4 ink limited palette (burnt orange, mustard, navy, cream, plus a seasonal accent). No licensed characters, brands, sports teams, associations, gym chains, film/song titles or real places' trademarks. Designs that echo an existing product (barbell/plate crests, desert scenes, dirt roads, gingerbread, cabins, tree trucks, "Merry & Bright") were left out.
- **Title / handle:** SOP convention `<Audience> <Niche> – <Design> Tee`; handle `<audience>-<niche>-<design>-graphic-tee`. $29.99 flat.
- **Blank facts:** Bella+Canvas 3001 and 6400 are lightweight 4.2 oz. Shirt colors listed are targets; confirm each is stocked on that blank in Printful before publishing, and only list colors actually offered.
- **Keyword gate:** the bank (`src/data/keyword-bank.json`) has **no measured design-level long-tails** for these three collections (only the head terms are measured). So every primary below is marked *unmeasured - verify*: run it through RankHero/DataForSEO before the product is built and swap it if it comes back at zero volume or KD > 35 (store-rules Keyword gate #1). Variants are real bank phrases (also unmeasured), each assigned to one product only. No primary repeats a primary already used on a live product.
- **Cover photo:** one `scripts/fal-photo.py` run per product, `--model seedream`, design file at `designs/<slug>.png` (the exact print file). Each person is new and is reserved in `docs/model-registry.md` (rows 11–43). Eyeball every result against the imagery rules (whole face + headroom, print unchanged and unobstructed, real ink on fabric, props at the hip) before adding it to `src/data/covers.ts`.
- **Product photos (Printful):** men's products 4+ different men; women's 4+ different women; unisex men and women of different ethnicities.


## Christmas shirts for women — 10 briefs (list these first)

### 1. Women's Christmas – Cookie Swap Tee
- **Handle:** `womens-christmas-cookie-swap-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** A round vintage cookie tin, lid off, packed with iced sugar cookies (star, stocking, mitten, tree shapes) and a rolling pin crossed behind it. 1950s cookbook-illustration feel, flat screen-print shading with halftone dots. Palette: cherry red, pine green, cream, mustard.
- **Text on shirt:** COOKIE SWAP (arched above, chunky retro serif) / "Bring a Dozen" (small script below)
- **Shirt colors:** Heather Mauve, Black, White (confirm on the 6400 in Printful)
- **Primary keyword:** Christmas cookie shirt — unmeasured - verify
- **Variants (bank):** cute christmas shirts for women — unmeasured - verify
- **Cover model:** registry #11 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/cookie-swap.png --name cookie-swap --model seedream \
    --person "Black woman in her late 50s, grey locs pinned up in a high bun, warm round face, reading glasses on a beaded chain" \
    --scene "in a warm home kitchen during a Christmas cookie swap, cooling racks of iced cookies on the counter behind her, flour on the counter, afternoon window light" \
    --shirt "heather mauve" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-cookie-swap-graphic-tee
```

### 2. Women's Christmas – Hot Cocoa Club Tee
- **Handle:** `womens-christmas-hot-cocoa-club-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** An oversized enamel camp mug of cocoa piled with marshmallows, a candy-cane stir stick and a curl of steam forming a loose snowflake. Badge layout like a 1960s ski-lodge patch. Palette: cocoa brown, cream, cranberry, navy.
- **Text on shirt:** HOT COCOA CLUB (around the badge) / "Members Since December" (bottom banner)
- **Shirt colors:** Black, Heather Navy, Athletic Heather (confirm)
- **Primary keyword:** hot cocoa Christmas shirt — unmeasured - verify
- **Variants (bank):** christmas shirts cute — unmeasured - verify
- **Cover model:** registry #12 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/hot-cocoa-club.png --name hot-cocoa-club --model seedream \
    --person "Vietnamese-American woman in her early 40s, shoulder-length layered dark hair with caramel highlights, slim build" \
    --scene "at an outdoor Christmas market cocoa stand at dusk, wooden stalls with pine garland and warm string lights blurred behind her" \
    --shirt "black" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-hot-cocoa-club-graphic-tee
```

### 3. Women's Christmas – Nutcracker March Tee
- **Handle:** `womens-christmas-nutcracker-march-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** An original toy-soldier nutcracker in a tall shako hat and red coat, mid-march, drawn like a 1940s storybook plate; a ring of tiny holly berries and a sugar-plum swirl behind. No ballet company names or film references. Palette: cranberry, navy, mustard gold, cream.
- **Text on shirt:** none (art only)
- **Shirt colors:** White, Heather Red, Black (confirm)
- **Primary keyword:** nutcracker Christmas shirt — unmeasured - verify
- **Variants (bank):** vintage christmas shirts for women — unmeasured - verify
- **Cover model:** registry #13 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/nutcracker-march.png --name nutcracker-march --model seedream \
    --person "White woman in her early 60s, short white pixie cut, slim build, light smile lines, small gold hoop earrings" \
    --scene "browsing a Christmas market stall lined with wooden nutcrackers and ornaments, late afternoon, cold air, warm stall lights" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-nutcracker-march-graphic-tee
```

### 4. Women's Christmas – Glass Ornaments Tee
- **Handle:** `womens-christmas-glass-ornaments-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** Five mid-century glass ornaments (striped, indented, teardrop) hanging at staggered heights from thin ribbons, with soft star glints. Retro 1950s department-store ad style, no brand names. Palette: teal, pink, mustard, cream on dark.
- **Text on shirt:** 'TIS THE SEASON (small caps under the ornaments)
- **Shirt colors:** Black, Heather Forest (confirm both on 6400)
- **Primary keyword:** vintage ornament Christmas shirt — unmeasured - verify
- **Variants (bank):** christmas shirts vintage — unmeasured - verify
- **Cover model:** registry #14 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/glass-ornaments.png --name glass-ornaments --model seedream \
    --person "Latina woman in her late 20s, long straight black hair with blunt bangs, petite build" \
    --scene "on a farmhouse front porch at blue hour hanging the last glass ornament on a small potted Christmas tree, porch light glowing" \
    --shirt "black" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-glass-ornaments-graphic-tee
```

### 5. Women's Christmas – Home for the Holidays Tee
- **Handle:** `womens-christmas-home-for-the-holidays-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** A red farmhouse door with a big evergreen wreath and plaid bow, a pair of rubber boots and a stack of firewood on the stoop, snow on the step. Linocut-style lines. Palette: barn red, pine green, cream, navy.
- **Text on shirt:** Home for the Holidays (hand-lettered script under the door)
- **Shirt colors:** Athletic Heather, White, Heather Mauve (confirm)
- **Primary keyword:** Christmas wreath shirt — unmeasured - verify
- **Variants (bank):** christmas shirts country — unmeasured - verify
- **Cover model:** registry #15 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/home-for-the-holidays.png --name home-for-the-holidays --model seedream \
    --person "Native American woman in her mid-30s, long straight black hair worn down past her shoulders, medium build, small silver stud earrings" \
    --scene "stepping onto a farmhouse front porch with a fresh evergreen wreath on the door and a snowy yard behind her, overcast winter daylight" \
    --shirt "athletic heather" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-home-for-the-holidays-graphic-tee
```

### 6. Women's Christmas – Retro Santa Tee
- **Handle:** `womens-christmas-retro-santa-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** An original round-faced 1950s-style Santa (not any soda or brand mascot), waving, with a sack of wrapped gifts, drawn like a mid-century greeting card with off-register print texture. Palette: tomato red, cream, mint, black.
- **Text on shirt:** HO HO HO (stacked retro script)
- **Shirt colors:** White, Heather Red (confirm)
- **Primary keyword:** retro Santa shirt — unmeasured - verify
- **Variants (bank):** christmas shirt ho ho ho — unmeasured - verify
- **Cover model:** registry #16 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/retro-santa.png --name retro-santa --model seedream \
    --person "White woman in her mid-40s, chin-length auburn hair with a side part, light freckles, average build" \
    --scene "at a cut-your-own Christmas tree farm holding a cup of hot cider beside rows of fir trees, light snow, a hand saw leaning on a tree to the side" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-retro-santa-graphic-tee
```

### 7. Women's Christmas – All Lit Up Tee
- **Handle:** `womens-christmas-all-lit-up-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** A loose strand of oversized vintage C9 bulbs looping across the chest, each bulb a different color with glow rays, cord drawn as a single flowing line. Palette: red, green, mustard, blue, cream on dark.
- **Text on shirt:** ALL LIT UP (bold condensed caps under the strand)
- **Shirt colors:** Black, Heather Navy (confirm)
- **Primary keyword:** Christmas lights shirt — unmeasured - verify
- **Variants (bank):** christmas shirts lights — unmeasured - verify
- **Cover model:** registry #17 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/all-lit-up.png --name all-lit-up --model seedream \
    --person "Middle Eastern woman in her early 30s, long dark wavy hair worn down, medium build" \
    --scene "on a front porch at dusk, eaves and railings wrapped in big colored string lights, a wreath on the porch post, cold evening air" \
    --shirt "black" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-all-lit-up-graphic-tee
```

### 8. Women's Christmas – Oh Deer Tee
- **Handle:** `womens-christmas-oh-deer-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** A vintage reindeer standing in a snowy pine wood with a small wreath around its neck and a red scarf, woodcut texture, snowflakes as simple 6-point stars. Palette: brown, cranberry, pine, cream.
- **Text on shirt:** Oh Deer (playful retro script under the reindeer)
- **Shirt colors:** Heather Forest, Athletic Heather, White (confirm)
- **Primary keyword:** reindeer Christmas shirt — unmeasured - verify
- **Variants (bank):** christmas shirts reindeer — unmeasured - verify
- **Cover model:** registry #18 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/oh-deer.png --name oh-deer --model seedream \
    --person "Black woman in her mid-20s, short platinum-dyed buzz cut, tall slim build, small gold nose stud" \
    --scene "walking through a snowy Christmas tree farm between rows of noble firs, a red wagon of cut trees at her side, soft falling snow" \
    --shirt "heather forest" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-oh-deer-graphic-tee
```

### 9. Women's Christmas – Christmas Movie Night Tee
- **Handle:** `womens-christmas-christmas-movie-night-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** A 1960s wood-cabinet TV with snowflakes on the screen, a bowl of popcorn, a knitted blanket and two mugs in front. No film titles or characters. Palette: mustard, teal, red, cream.
- **Text on shirt:** CHRISTMAS MOVIES & BLANKETS (curved over the TV)
- **Shirt colors:** White, Heather Mauve, Black (confirm)
- **Primary keyword:** Christmas movie shirt — unmeasured - verify
- **Variants (bank):** christmas shirts sayings — unmeasured - verify
- **Cover model:** registry #19 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/christmas-movie-night.png --name christmas-movie-night --model seedream \
    --person "White woman in her early 50s, long straight grey-blonde hair, reading glasses pushed up on her head, soft build" \
    --scene "in a cozy kitchen popping popcorn on the stovetop on a December evening, a plate of cookies and two mugs on the counter, warm lamp light" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-christmas-movie-night-graphic-tee
```

### 10. Women's Christmas – O Holy Night Tee
- **Handle:** `womens-christmas-o-holy-night-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** A single bright star over a simple wooden stable on a hill, rays fanning down, a few sheep in silhouette, night sky in deep navy. Reverent, vintage Christmas-card linocut. Palette: navy, gold, cream.
- **Text on shirt:** O Holy Night (elegant serif) / "Luke 2:11" (small)
- **Shirt colors:** Heather Navy, Black, White (confirm)
- **Primary keyword:** religious Christmas shirt — unmeasured - verify
- **Variants (bank):** christmas shirts christian — unmeasured - verify
- **Cover model:** registry #20 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/o-holy-night.png --name o-holy-night --model seedream \
    --person "Filipina woman in her late 40s, shoulder-length straight black hair with a side part, petite build, simple cross necklace" \
    --scene "on the steps of a small white country church on Christmas Eve, candle lanterns along the path and a wreath on the door, early evening" \
    --shirt "heather navy" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-christmas-o-holy-night-graphic-tee
```


## Men's gym shirts — 11 briefs

### 11. Men's Gym – Deadlift Society Tee
- **Handle:** `mens-gym-deadlift-society-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee, listed as men's)
- **Art:** A loaded barbell mid-lift from the floor, bent slightly under the plates, framed in a 1930s athletic-club crest with laurel sprigs and chalk dust. Distressed screen-print texture. Palette: burnt orange, cream, navy.
- **Text on shirt:** DEADLIFT SOCIETY (crest banner) / "Pick It Up, Put It Down" (small)
- **Shirt colors:** Black, Heather Navy, Vintage White (confirm)
- **Primary keyword:** deadlift shirt — unmeasured - verify
- **Variants (bank):** mens vintage gym t shirts — unmeasured - verify
- **Cover model:** registry #21 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/deadlift-society.png --name deadlift-society --model seedream \
    --person "Black man in his late 20s, close-cropped fade haircut, clean-shaven, heavy muscular build" \
    --scene "on a deadlift platform in a no-frills powerlifting gym, chalk bucket and loaded bar on the floor beside him, rubber flooring, overhead fluorescent light" \
    --shirt "black" --fit "classic-fit cotton t-shirt" \
    --cover mens-gym-deadlift-society-graphic-tee
```

### 12. Men's Gym – Garage Gym Tee
- **Handle:** `mens-gym-garage-gym-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee, listed as men's)
- **Art:** A home garage with the roll-up door half open: squat rack, plate tree, a radio on the workbench and a pickup bumper peeking in. Drawn like a 1970s hardware-store ad. Palette: mustard, rust, navy, cream.
- **Text on shirt:** GARAGE GYM (bold slab) / "Open 24 Hours · Members Only" (small)
- **Shirt colors:** Heather Navy, Military Green, Black (confirm)
- **Primary keyword:** garage gym shirt — unmeasured - verify
- **Variants (bank):** mens gym shirts cotton — unmeasured - verify
- **Cover model:** registry #22 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/garage-gym.png --name garage-gym --model seedream \
    --person "White man in his mid-50s, shaved head, short grey goatee, stocky barrel-chested build" \
    --scene "in his home garage gym with the roll-up door open on an autumn morning, squat rack and plate tree behind him, pegboard tools on the wall" \
    --shirt "heather navy" --fit "classic-fit cotton t-shirt" \
    --cover mens-gym-garage-gym-graphic-tee
```

### 13. Men's Gym – Swing Heavy Tee
- **Handle:** `mens-gym-swing-heavy-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee, listed as men's)
- **Art:** A cast-iron kettlebell with motion arcs showing the swing, inside a round hand-painted sign shape with speed lines. 1960s physical-culture poster style. Palette: rust, cream, charcoal.
- **Text on shirt:** SWING HEAVY (around the circle)
- **Shirt colors:** Black, Athletic Heather (confirm)
- **Primary keyword:** kettlebell shirt — unmeasured - verify
- **Variants (bank):** mens workout shirts graphic — unmeasured - verify
- **Cover model:** registry #23 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/swing-heavy.png --name swing-heavy --model seedream \
    --person "Korean-American man in his early 30s, short black undercut hair, lean athletic build, clean-shaven" \
    --scene "in a functional-fitness warehouse gym with rows of kettlebells on the floor and climbing ropes hanging behind him, large roll-up door letting in daylight" \
    --shirt "black" --fit "classic-fit cotton t-shirt" \
    --cover mens-gym-swing-heavy-graphic-tee
```

### 14. Men's Gym – Before Sunrise Tee
- **Handle:** `mens-gym-before-sunrise-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee, listed as men's)
- **Art:** A dumbbell rack silhouetted in front of a huge rising sun with horizon stripes, a coffee thermos on the end of the rack. Retro 1980s sunset-stripe style. Palette: burnt orange, mustard, navy, cream.
- **Text on shirt:** BEFORE SUNRISE LIFTING (arched) / "Doors Open at 4:30" (small)
- **Shirt colors:** Heather Navy, Black (confirm)
- **Primary keyword:** early morning workout shirt — unmeasured - verify
- **Variants (bank):** vintage mens workout shirts — unmeasured - verify
- **Cover model:** registry #24 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/before-sunrise.png --name before-sunrise --model seedream \
    --person "Mexican-American man in his early 40s, slicked-back black hair with grey temples, broad build, short trimmed mustache" \
    --scene "inside a commercial gym before dawn, the big front windows still dark blue, rows of dumbbells and benches lit by overhead lights" \
    --shirt "heather navy" --fit "classic-fit cotton t-shirt" \
    --cover mens-gym-before-sunrise-graphic-tee
```

### 15. Men's Gym – Old School Strength Tee
- **Handle:** `mens-gym-old-school-strength-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee, listed as men's)
- **Art:** An original turn-of-the-century strongman with a handlebar mustache and leopard-print singlet hoisting a globe barbell overhead, drawn like a 1900s circus-poster engraving. Palette: rust, mustard, cream, black.
- **Text on shirt:** OLD SCHOOL STRENGTH (curved banner) / "Est. Long Before Machines" (small)
- **Shirt colors:** Vintage White, Black, Military Green (confirm)
- **Primary keyword:** strongman shirt — unmeasured - verify
- **Variants (bank):** mens retro gym shirts — unmeasured - verify
- **Cover model:** registry #25 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/old-school-strength.png --name old-school-strength --model seedream \
    --person "Samoan man in his mid-30s, long black hair tied in a bun, big powerful build, broad smile" \
    --scene "in an outdoor strongman training yard with atlas stones, a log bar and a tire on the gravel behind him, late afternoon sun" \
    --shirt "vintage white" --fit "classic-fit cotton t-shirt" \
    --cover mens-gym-old-school-strength-graphic-tee
```

### 16. Men's Gym – Bench Press Club Tee
- **Handle:** `mens-gym-bench-press-club-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee, listed as men's)
- **Art:** A flat bench and loaded bar on J-hooks seen from the side, with a pair of spotter hands drawn as a simple badge icon above. 1950s bowling-shirt-patch layout. Palette: navy, cream, burnt orange.
- **Text on shirt:** BENCH PRESS CLUB (patch) / "Monday Is Chest Day" (small)
- **Shirt colors:** Athletic Heather, Black, Heather Navy (confirm)
- **Primary keyword:** bench press shirt — unmeasured - verify
- **Variants (bank):** mens gym shirts graphic — unmeasured - verify
- **Cover model:** registry #26 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/bench-press-club.png --name bench-press-club --model seedream \
    --person "Indian man in his late 20s, short wavy black hair, clean-shaven, lean muscular build" \
    --scene "beside a bench press station in a busy commercial gym, plates stacked on the bar, mirrors and racks softly blurred behind" \
    --shirt "athletic heather" --fit "classic-fit cotton t-shirt" \
    --cover mens-gym-bench-press-club-graphic-tee
```

### 17. Men's Gym – Heavy Bag Dept. Tee
- **Handle:** `mens-gym-heavy-bag-dept-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee, listed as men's)
- **Art:** A worn leather heavy bag hanging on a chain with a pair of laced vintage gloves draped on the hook, drawn like a 1940s fight-gym poster. No promotions, belts or fighter names. Palette: oxblood, mustard, cream, black.
- **Text on shirt:** BOXING CLUB / HEAVY BAG DEPT. (stacked condensed caps)
- **Shirt colors:** Black, Vintage White (confirm)
- **Primary keyword:** boxing gym shirt — unmeasured - verify
- **Variants (bank):** mens vintage gym shirts — unmeasured - verify
- **Cover model:** registry #27 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/heavy-bag-dept.png --name heavy-bag-dept --model seedream \
    --person "Black man in his early 60s, short grey hair, neatly trimmed grey mustache, wiry fit build" \
    --scene "in an old boxing gym with a row of heavy bags on chains, a ring rope corner in the background, brick walls and window light" \
    --shirt "black" --fit "classic-fit cotton t-shirt" \
    --cover mens-gym-heavy-bag-dept-graphic-tee
```

### 18. Men's Gym – Leg Day Survivor Tee
- **Handle:** `mens-gym-leg-day-survivor-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee, listed as men's)
- **Art:** A cartoon pair of wobbly legs in tube socks walking away from a squat rack, sweat drops and stars, drawn in a 1970s comic-strip style. Palette: mustard, navy, red, cream.
- **Text on shirt:** I SURVIVED LEG DAY (bold retro caps) / "Barely" (small script)
- **Shirt colors:** Heather Navy, Athletic Heather (confirm)
- **Primary keyword:** leg day shirt — unmeasured - verify
- **Variants (bank):** funny mens gym shirts — unmeasured - verify
- **Cover model:** registry #28 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/leg-day-survivor.png --name leg-day-survivor --model seedream \
    --person "White man in his early 20s, shaggy blond hair, clean-shaven, tall lanky build" \
    --scene "sitting on a weight bench next to a squat rack in a college-town gym after leg day, catching his breath, rubber floor and racks behind him" \
    --shirt "heather navy" --fit "classic-fit cotton t-shirt" \
    --cover mens-gym-leg-day-survivor-graphic-tee
```

### 19. Men's Gym – Rest Day Champion Tee
- **Handle:** `mens-gym-rest-day-champion-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee, listed as men's)
- **Art:** A vintage trophy cup with a tiny recliner and a TV remote on top instead of a lifter, ribbon banner and laurels. Mock-serious 1960s award-plaque style. Palette: gold, navy, cream, rust.
- **Text on shirt:** REST DAY CHAMPION (ribbon banner)
- **Shirt colors:** Black, Heather Navy (confirm)
- **Primary keyword:** rest day shirt — unmeasured - verify
- **Variants (bank):** mens funny gym t shirts — unmeasured - verify
- **Cover model:** registry #29 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/rest-day-champion.png --name rest-day-champion --model seedream \
    --person "Filipino man in his late 30s, buzz cut, compact stocky build, clean-shaven, easy grin" \
    --scene "doing light mobility work on a foam roller area of a gym, sitting on a plyo box with a water bottle beside him, stretching mats behind" \
    --shirt "black" --fit "classic-fit cotton t-shirt" \
    --cover mens-gym-rest-day-champion-graphic-tee
```

### 20. Men's Gym – Squat Bench Deadlift Tee
- **Handle:** `mens-gym-squat-bench-deadlift-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee, listed as men's)
- **Art:** Three simple athletic pictograms (squat, bench, deadlift) in a row inside a long horizontal 1960s meet-program frame with stars. No federation logos. Palette: navy, burnt orange, cream.
- **Text on shirt:** SQUAT · BENCH · DEADLIFT (under the pictograms) / "The Big Three" (small)
- **Shirt colors:** Vintage White, Black, Athletic Heather (confirm)
- **Primary keyword:** powerlifting t-shirt — unmeasured - verify
- **Variants (bank):** mens gym t shirts graphic — unmeasured - verify
- **Cover model:** registry #30 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/squat-bench-deadlift.png --name squat-bench-deadlift --model seedream \
    --person "Middle Eastern man in his mid-40s, thick dark hair, full dark beard, no hat, barrel-chested heavy build" \
    --scene "in a powerlifting meet warm-up room, monolift and chalk bowl behind him, other lifters blurred in the background" \
    --shirt "vintage white" --fit "classic-fit cotton t-shirt" \
    --cover mens-gym-squat-bench-deadlift-graphic-tee
```

### 21. Men's Gym – Gym Rat Tee
- **Handle:** `mens-gym-gym-rat-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee, listed as men's)
- **Art:** An original cartoon rat in a sweatband and tank top curling a tiny dumbbell, drawn like a 1950s rubber-hose cartoon. No studio characters. Palette: grey, rust, mustard, cream.
- **Text on shirt:** GYM RAT (bubbly retro caps)
- **Shirt colors:** Athletic Heather, Black, Military Green (confirm)
- **Primary keyword:** gym rat shirt — unmeasured - verify
- **Variants (bank):** fun mens gym shirts — unmeasured - verify
- **Cover model:** registry #31 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/gym-rat.png --name gym-rat --model seedream \
    --person "Irish-American white man in his early 30s, short red hair, short trimmed red beard, freckles, medium build" \
    --scene "in an old-school basement gym with worn dumbbells, a chalkboard of lifts on the cinderblock wall and a single high window" \
    --shirt "athletic heather" --fit "classic-fit cotton t-shirt" \
    --cover mens-gym-gym-rat-graphic-tee
```


## Western graphic tees — 12 briefs

### 22. Women's Western – Barrel Racer Tee
- **Handle:** `womens-western-barrel-racer-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** A cowgirl and her quarter horse cutting tight around a barrel, dirt spraying, drawn as a 1950s rodeo-program illustration with halftone shading. No association logos. Palette: burnt orange, mustard, navy, cream.
- **Text on shirt:** BARREL RACER (arched slab serif)
- **Shirt colors:** White, Heather Mauve, Black (confirm)
- **Primary keyword:** barrel racing shirt — unmeasured - verify
- **Variants (bank):** western cowgirl graphic tee — unmeasured - verify
- **Cover model:** registry #32 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/barrel-racer.png --name barrel-racer --model seedream \
    --person "White woman in her late 20s, long sandy-blonde waves, athletic build, sun-tanned" \
    --scene "leaning on the rail of a dirt rodeo arena at a barrel racing practice, barrels and a horse and rider blurred behind her, late afternoon dust in the light" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-western-barrel-racer-graphic-tee
```

### 23. Women's Western – Hold On Tight Tee
- **Handle:** `womens-western-hold-on-tight-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** A cowgirl on a bucking bronc, hat flying, one arm up, framed by a horseshoe-shaped rope border. 1940s pulp-western cover style. Palette: rust, mustard, turquoise, cream.
- **Text on shirt:** Hold On Tight (rope-style script)
- **Shirt colors:** Black, Heather Mauve (confirm)
- **Primary keyword:** cowgirl graphic tee — unmeasured - verify
- **Variants (bank):** women's cowgirl graphic tees — unmeasured - verify
- **Cover model:** registry #33 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/hold-on-tight.png --name hold-on-tight --model seedream \
    --person "Black woman in her early 40s, long box braids pulled back, medium build" \
    --scene "in the bleachers of a small-town rodeo at dusk, arena lights coming on, bucking chutes blurred in the background" \
    --shirt "black" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-western-hold-on-tight-graphic-tee
```

### 24. Women's Western – Steer Skull & Wildflowers Tee
- **Handle:** `womens-western-steer-skull-wildflowers-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** A sun-bleached steer skull with long curved horns resting on a bed of prairie wildflowers (paintbrush, coneflower, sage). Woodcut texture. Palette: mustard, navy, dusty rose, cream (not orange-and-white, so it reads as no team).
- **Text on shirt:** none (art only)
- **Shirt colors:** Heather Mauve, White, Black (confirm)
- **Primary keyword:** cow skull shirt — unmeasured - verify
- **Variants (bank):** retro western graphic tees — unmeasured - verify
- **Cover model:** registry #34 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/steer-skull-wildflowers.png --name steer-skull-wildflowers --model seedream \
    --person "Mexican-American woman in her mid-50s, dark hair in a low chignon, laugh lines, sturdy build, turquoise earrings" \
    --scene "on the porch of a working ranch house, a wooden corral and cattle in the pasture behind her, golden late-day light" \
    --shirt "heather mauve" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-western-steer-skull-wildflowers-graphic-tee
```

### 25. Women's Western – Kick Up Dust Tee
- **Handle:** `womens-western-kick-up-dust-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** A pair of tall stitched cowgirl boots with spurs mid-step, kicking up a cloud of dust shaped into little stars. 1970s iron-on transfer look. Palette: tan, burnt orange, turquoise, cream.
- **Text on shirt:** KICK UP DUST (wavy 1970s caps)
- **Shirt colors:** White, Black (confirm)
- **Primary keyword:** cowboy boots shirt — unmeasured - verify
- **Variants (bank):** cute western graphic tees — unmeasured - verify
- **Cover model:** registry #35 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/kick-up-dust.png --name kick-up-dust --model seedream \
    --person "White woman in her early 20s, long dark brown hair worn straight, petite build" \
    --scene "on a ranch gravel road beside an old pickup and a barbed-wire fence at golden hour, hay bales in the field behind" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-western-kick-up-dust-graphic-tee
```

### 26. Women's Western – Run Free Tee
- **Handle:** `womens-western-run-free-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** Three wild horses running across open range, manes streaming, mesas faint behind, drawn as a two-color 1960s screen print with a sun circle. Palette: navy, burnt orange, cream.
- **Text on shirt:** Run Free (loose brush script)
- **Shirt colors:** Heather Mauve, Athletic Heather, White (confirm)
- **Primary keyword:** wild horse shirt — unmeasured - verify
- **Variants (bank):** womens western graphic tees — unmeasured - verify
- **Cover model:** registry #36 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/run-free.png --name run-free --model seedream \
    --person "Mixed-race Black and white woman in her late 20s, sleek high ponytail, light freckles, tall athletic build" \
    --scene "standing at a weathered wooden fence on open rangeland at sunset with horses grazing in the distance" \
    --shirt "heather mauve" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-western-run-free-graphic-tee
```

### 27. Women's Western – Howdy Tee
- **Handle:** `womens-western-howdy-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** A pink-and-tan cowgirl hat tipped over puffy 1970s bubble letters, sparkles and tiny stars around it. Fun but still screen-print flat. Palette: dusty pink, mustard, tan, cream.
- **Text on shirt:** HOWDY (bubble letters)
- **Shirt colors:** White, Heather Mauve (confirm)
- **Primary keyword:** howdy shirt — unmeasured - verify
- **Variants (bank):** punchy western graphic tees — unmeasured - verify
- **Cover model:** registry #37 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/howdy.png --name howdy --model seedream \
    --person "Korean woman in her mid-30s, shoulder-length straight hair with curtain bangs, slim build" \
    --scene "by the ticket gate of a county rodeo at dusk, wooden grandstand and arena lights behind her, a paper ticket held at her hip" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-western-howdy-graphic-tee
```

### 28. Women's Western – Saturday Night Rodeo Tee
- **Handle:** `womens-western-saturday-night-rodeo-graphic-tee` · **Blank:** Bella+Canvas 6400 (women's relaxed tee)
- **Art:** A vintage letterpress rodeo poster: saddle-bronc rider in silhouette, woodtype headlines, star rules and a worn paper texture. No real towns or associations named. Palette: red, navy, mustard, cream.
- **Text on shirt:** SATURDAY NIGHT RODEO / "Gates Open at Six" (woodtype poster type)
- **Shirt colors:** White, Athletic Heather (confirm)
- **Primary keyword:** vintage rodeo shirt — unmeasured - verify
- **Variants (bank):** women's vintage western graphic tees — unmeasured - verify
- **Cover model:** registry #38 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/saturday-night-rodeo.png --name saturday-night-rodeo --model seedream \
    --person "White woman in her early 60s, short silver hair, tanned weathered skin, lean build" \
    --scene "in the grandstand of an evening rodeo, arena lights and dust behind her, a program rolled in her hand at her side" \
    --shirt "white" --fit "relaxed-fit women's cotton t-shirt" \
    --cover womens-western-saturday-night-rodeo-graphic-tee
```

### 29. Unisex Western – Lucky Horseshoe Tee
- **Handle:** `unisex-western-lucky-horseshoe-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee)
- **Art:** A worn iron horseshoe, open end up, with a rope loop and two crossed branding irons behind, inside a ranch-gate arch. 1950s feed-sack print style. Palette: rust, mustard, navy, cream.
- **Text on shirt:** LUCKY HORSESHOE RANCH (gate arch)
- **Shirt colors:** Vintage White, Black, Heather Clay (confirm)
- **Primary keyword:** horseshoe shirt — unmeasured - verify
- **Variants (bank):** vintage western graphic tees — unmeasured - verify
- **Cover model:** registry #39 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/lucky-horseshoe.png --name lucky-horseshoe --model seedream \
    --person "Black man in his mid-40s, shaved head, neat short beard, broad build, straw cowboy hat pushed back off his face" \
    --scene "inside a weathered wooden horse barn, tack hanging on the wall and a horse looking over a stall door behind him, warm afternoon light through the slats" \
    --shirt "vintage white" --fit "unisex classic-fit cotton t-shirt" \
    --cover unisex-western-lucky-horseshoe-graphic-tee
```

### 30. Unisex Western – Hat on the Post Tee
- **Handle:** `unisex-western-hat-on-the-post-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee)
- **Art:** A sweat-stained felt cowboy hat hung on a fence post with a coiled rope, wide prairie and a low sun behind. Quiet, painterly two-tone screen print. Palette: navy, mustard, burnt orange, cream.
- **Text on shirt:** none (art only)
- **Shirt colors:** Heather Navy, Vintage White (confirm)
- **Primary keyword:** cowboy hat graphic tee — unmeasured - verify
- **Variants (bank):** cowboy graphic tees women — unmeasured - verify
- **Cover model:** registry #40 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/hat-on-the-post.png --name hat-on-the-post --model seedream \
    --person "Puerto Rican woman in her early 20s, shoulder-length wavy dark hair, medium build" \
    --scene "leaning on a split-rail fence at a ranch at golden hour, pasture and a red barn behind her" \
    --shirt "heather navy" --fit "unisex classic-fit cotton t-shirt" \
    --cover unisex-western-hat-on-the-post-graphic-tee
```

### 31. Unisex Western – Ranch Hand Tee
- **Handle:** `unisex-western-ranch-hand-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee)
- **Art:** A cowboy on horseback swinging a loop over a running calf, drawn like a 1950s ranch-supply catalog plate. Palette: brown, mustard, navy, cream.
- **Text on shirt:** RANCH HAND (slab serif) / "Up Before the Rooster" (small)
- **Shirt colors:** Black, Military Green, Vintage White (confirm)
- **Primary keyword:** ranch hand shirt — unmeasured - verify
- **Variants (bank):** mens western graphic tees — unmeasured - verify
- **Cover model:** registry #41 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/ranch-hand.png --name ranch-hand --model seedream \
    --person "White man in his early 60s, white mustache, weathered sun-lined face, lean wiry build, felt cowboy hat pushed back off his forehead" \
    --scene "at the cattle pens of a working ranch at dawn, steers and wooden gates behind him, cold morning mist" \
    --shirt "black" --fit "unisex classic-fit cotton t-shirt" \
    --cover unisex-western-ranch-hand-graphic-tee
```

### 32. Unisex Western – Hold On Eight Tee
- **Handle:** `unisex-western-hold-on-eight-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee)
- **Art:** A bull rider on a spinning bull, free hand high, framed by a circular chute-gate border with rivets. Gritty 1970s rodeo-flyer texture. No association logos. Palette: rust, cream, navy.
- **Text on shirt:** HOLD ON EIGHT (around the circle)
- **Shirt colors:** Vintage White, Heather Navy (confirm)
- **Primary keyword:** bull riding shirt — unmeasured - verify
- **Variants (bank):** cowboy graphic tee vintage — unmeasured - verify
- **Cover model:** registry #42 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/hold-on-eight.png --name hold-on-eight --model seedream \
    --person "Mexican-American man in his mid-20s, short black hair, thin mustache, wiry build" \
    --scene "behind the bucking chutes at a rodeo, metal gates and a rider climbing the rails blurred behind him, arena dust and lights" \
    --shirt "vintage white" --fit "unisex classic-fit cotton t-shirt" \
    --cover unisex-western-hold-on-eight-graphic-tee
```

### 33. Unisex Western – Cowboy Coffee Tee
- **Handle:** `unisex-western-cowboy-coffee-graphic-tee` · **Blank:** Bella+Canvas 3001 (unisex classic tee)
- **Art:** A blue enamel coffee pot on a campfire grate with two tin cups, smoke curling into a horseshoe shape, under a big night sky. Camp-cook-book illustration style. Palette: navy, burnt orange, mustard, cream.
- **Text on shirt:** COWBOY COFFEE (arched) / "Strong Enough to Float a Horseshoe" (small)
- **Shirt colors:** Black, Heather Navy (confirm)
- **Primary keyword:** cowboy coffee shirt — unmeasured - verify
- **Variants (bank):** funny western graphic tees — unmeasured - verify
- **Cover model:** registry #43 (reserved)
```bash
python3 scripts/fal-photo.py --design designs/cowboy-coffee.png --name cowboy-coffee --model seedream \
    --person "Japanese-American man in his late 30s, medium-length black hair swept back, short stubble, medium build" \
    --scene "at a ranch cow camp at dawn crouched by a campfire with an enamel coffee pot, saddles and a horse tied up in the background" \
    --shirt "black" --fit "unisex classic-fit cotton t-shirt" \
    --cover unisex-western-cowboy-coffee-graphic-tee
```
