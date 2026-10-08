# Market research: what's actually selling (2026-10-08)

This covers the three bottom-KD collections. Per store-rules "Design art", each design should trace to **demand** (a measured keyword) and to **proof** (sales signals in the market). The briefs in `docs/design-briefs.md` were reordered and rewritten from this file.

## Method and how much to trust each signal

| Source | What it gives | How it was read | Caveats |
|---|---|---|---|
| **RankHero** keyword pages (`https://www.rankhero.com/keywords/<slug>`) | Etsy-search monthly volume, KD, competing-listing count, median price, and a sample of up to 12 top Etsy listings with **favorites** and **views** | Public page, fetched with curl on 2026-10-08. Each page has its own "Updated" date, mostly Aug–Oct 2026 | Volume and KD are **Etsy-search** numbers. Favorites and views are the best sales proxy we can get without a paid tool; they are not sales. "vol --" means RankHero has a KD/competition figure but no volume. |
| **Etsy** directly | Bestseller badges, review counts, "in N carts" | **Blocked.** Etsy returns a DataDome bot check (CAPTCHA) both to curl and to the browser. Not bypassed, per rules | Badge and cart data is missing. RankHero favorites/views and Google's Etsy rich results stand in for it. |
| **Google** (`site:etsy.com/listing`, plus Google Shopping filtered to Etsy) | Which motifs fill the Etsy shelf, plus the rating counts Google shows for Etsy results | Read in Sam's Chrome, logged out, 2026-10-08 | Google's rating count on an Etsy result is usually the **shop's** review total, not the listing's. Treat it as "a high-volume seller is pushing this motif". |
| **Amazon** search ("N+ bought in past month") | Real purchase counts for each motif query (sum across the first results page, non-sponsored) | Read in Chrome, 2026-10-08 | It's early October, so Christmas counts are still low. Results mix in generic and licensed apparel. Use it to compare motifs within one niche, not as an absolute number. |
| **EtsyHunt** best-selling Christmas shirts (updated 2026-10-01) | Weekly and total sales for the top 10 | https://etsyhunt.com/best-etsy-christmas-shirts | Top 10 is all **family-matching / personalized / licensed** (e.g. #9 "Most Likely To" 12,568 total sales). This confirms Christmas demand, but none of it is a women's graphic motif we can use. |
| **Trends** | Seasonality and direction | RankHero 12-month series (Google/Etsy volume per month); Gymshark and Gym Generation pump-cover explainers; Boot Barn's women's western tee shelf | No paid trend tools were used. Pinterest and TikTok were checked through search only: the coquette-bow Christmas look shows up all over Walmart and Etsy listings. |

**Seasonality (RankHero monthly series):** `christmas shirts for women` runs 1,900 (Sep) → 6,600 (Oct) → 22,200 (Nov) → **40,500 (Dec)**, then falls to 590 in Jan. Christmas products need to be live and indexed by early November. `pump cover` is flat at 22,200–27,100 all year (−18% YoY). Western terms peak Mar–Aug, which matches rodeo season.

**Brand-safety filter applied to every winner below.** Many top listings are licensed or lift titles: Disney/Mickey nutcracker and gingerbread (965 and 985 favs), Toy Story "Let's Go Girls", "Save a Horse" (song), "Long Live Cowgirls" (song), "Two Dozen Roses" (song), "Play Something Country" (song), "Cowboy Carter" (album), "Cowboy Killer" (cigarette slang), Sam Sulek, Berserk, Dragon Ball, Grinch, Home Alone, Nakatomi. **None of these were used.** We only take the generic motif underneath each one: a nutcracker, a gingerbread man, a bull skull, a rodeo cowgirl.

---

## 1. Christmas shirts for women (`/christmas-shirts-for-women/`, 5,400 / KD 14)

### Winning themes, ranked

| # | Theme / motif | Typical phrase | Style | Palette / shirt | Evidence (signal) | Keyword (RankHero vol / KD) |
|---|---|---|---|---|---|---|
| 1 | **Retro / vintage Santa**: round-faced mid-century Santa, often pink, sometimes leopard | "Retro Santa", "Ho Ho Ho" | 1950s greeting-card print, distressed | red/cream, or pink-on-cream; Comfort Colors ivory, pink, white | Top listing **3,509 favs / 89,812 views** ([etsy 1072389662](https://www.etsy.com/listing/1072389662)); 568 / 14,494 ([1115125629](https://www.etsy.com/listing/1115125629)); 205 / 6,719; pink retro Santa 85 / 4,665. Retro Santa was the most frequent motif on Google Shopping's Etsy results ("Vintage Santa", "Pink Retro Santa", "Western Santa") | retro santa shirt 390 / 60 · vintage santa shirt 390 / 60 · santa shirt 8,100 / 55 |
| 2 | **Snowman**: classic or vintage snowman | none, or "Snow Day" | flat vintage illustration | white / red / pine on ash or cream | **6,460 favs / 494,443 views** ([1596268722](https://www.etsy.com/listing/1596268722), a sweatshirt, but the same art sells as a tee); Amazon "snowman shirt women" ~1,100 bought / mo (highest of the Christmas motifs, though mostly thermals) | snowman shirt **1,600 / 46** |
| 3 | **Nutcracker**: preppy, pastel, or with a pink bow; sugar-plum ballet crossover | "Nutcracker", "Sugar Plum" | preppy watercolor, chinoiserie, coquette | pink/red/green on white or ivory | 482 / 17,781 ([1597682796](https://www.etsy.com/listing/1597682796)); 311 / 12,863 ([1313242640](https://www.etsy.com/listing/1313242640)); Google shows Etsy nutcracker shops at 4.9 (4,603), 4.8 (6,534) and 4.9 (5,338) ratings; "Preppy Nutcracker" and "Coquette Pink Bow Ballet" were frequent in Shopping | nutcracker shirt **1,000 / 42** |
| 4 | **Candy cane / peppermint**: often with a coquette bow | "Candy Cane Crew", "Sweeter Than…" | girly retro, bow | red/white/pink | Google Etsy results include "Candy Cane Crew" (seller 4.8 / 11,983), "Candy Cane Shirt" (4.9 / 9,674), "Candy Canes and Cocktails" (4.9 / 5,260); "Peppermint Princess" coquette tee in Shopping | candy cane shirt **1,900 / 34** (lowest Christmas KD) · peppermint shirt 170 / 34 |
| 5 | **Coquette bow Christmas**: bows made of ribbon or of Christmas lights, pink | "Merry Christmas", "Tis the season" | coquette / girly aesthetic | pink, red, cream | Many listings ([1778188484](https://www.etsy.com/listing/1778188484), [1832925867](https://www.etsy.com/listing/1832925867)); pink coquette Santa/gingerbread 55 / 765; Walmart is full of coquette-bow tees and sweatshirts (trend is mainstream). Signal is breadth, not a single big listing | christmas bow shirt 210 / 70 · coquette christmas shirt vol -- / 83 · pink christmas shirt 590 / 66 (all saturated) |
| 6 | **Christmas trees**: minimal pine rows, brushstroke, pink-striped or leopard trees | "Merry", "Tis the season" | minimal line, brushstroke, preppy | pink/green, leopard | Leopard Christmas tree 67 / 2,361; faux-glitter pink tree 82 / 3,355; "Pink Striped Brushstroke Tree", "Minimal Christmas Tree", "Vintage Pine Tree" frequent in Shopping; Amazon "christmas tree shirt women" ~300 bought / mo | christmas tree shirt **27,100 / 46** |
| 7 | **Reindeer**: funny or cute, group/family, pink "bubble-gum" reindeer | "Oh Deer" | cartoon, retro | brown/red, pink | Funny reindeer 876 / 36,644 ([1541197364](https://www.etsy.com/listing/1541197364)); 237 / 11,630; "Pink Bubble Gum Reindeer" coquette and "Neon Reindeer" in Shopping | reindeer shirt **1,300 / 52** |
| 8 | **Vintage Christmas collage / stamps / nostalgia** (postage stamps, VHS, record player, "Merrier in the 90s") | "Tis the Season", "Christmas Vibes" | vintage collage | muted red/green/cream | Christmas stamps collage **1,882 / 46,789** ([1820952985](https://www.etsy.com/listing/1820952985)); "Merrier in the 90s VHS", "Retro Record Player", "Tinsel Club" in Shopping | retro christmas shirt 260 / 75 (saturated) |
| 9 | **Christmas cats**: cats in lights, cats in wreaths, "Meowy" | "Meowy Christmas" | cartoon | varies | Christmas cats 215 / 4,442 ([1800596564](https://www.etsy.com/listing/1800596564)); Amazon ~150 bought / mo; Shopping "Christmas Cat in sunglasses" | christmas cat shirt **880 / 56** |
| 10 | **Holly Jolly** lettering: retro, patchwork, pennant | "Holly Jolly" | groovy / retro type, pennant, truck | red/green/pink | Google Etsy "Holly Jolly Coquette" (seller 4.8 / 7,338); "Holly Jolly Comfort Colors" (4.9 / 394); "Holly Jolly Vintage Christmas Truck", "Holly Jolly Pennant" in Shopping | holly jolly shirt **210 / 33** · jolly shirt 140 / 36 |
| 11 | **Christmas lights** strand / lights tied in a bow | "Let's Get Lit", "Leave the lights up" | retro bulb | multicolor on dark | Lights family tee 200 / 7,234; "We Can Leave the Lights Up 'til January" (seller 4.9 / 162); lights-bow coquette 17 / 699; Amazon ~200 bought / mo | christmas lights shirt 320 / 60 |
| 12 | **Gingerbread**: cookies, gingerbread house | "Smart Cookie", "Oh Snap" | cartoon | brown/cream/red | Generic winners are small (46 / 580, 49 / 2,288); the big ones are Disney (985 favs). **We already have Gingerbread Lane live** | gingerbread shirt 1,900 / 46 (covered by live product) |
| 13 | **Western / cowboy Santa** (country Christmas) | "Howdy Ho Ho" style puns, "North Pole Rodeo" | retro western | red/tan/turquoise | Retro cowboy Christmas "Howdy" 182 / 2,377 ([1293708652](https://www.etsy.com/listing/1293708652)); "Howdy Hos Santa Cowboy", "Holly Dolly", "Merry Christmas Y'all Cowboy" in Shopping; cross-sells our western collection | country christmas shirt 170 / 56 · cowboy santa shirt 90 / 57 · western christmas shirt 390 / 78 |
| 14 | **Faith / nativity Christmas** | "O Holy Night", "Greatest Gift", "Be the Light" | reverent linocut | navy/gold/cream | Christian Christmas 65 / 2,922 and 56 / 3,040 (modest favs, but steady volume) | christian christmas shirt **880 / 60** · nativity shirt 140 / 54 |
| 15 | **Bookish Christmas** ("North Pole Book Club") | "Book Club" | cute | varies | 182 / 5,159; 163 / 3,122 | bookish christmas shirt 30 / 67 (too little demand) |

**Not used:** Christmas movie (the winners are all Home Alone / Grinch / Nakatomi, licensed); "Merry and Bright" (KD 84, and we already have a live product with it); `christmas cookie shirt` (210 / 56, generic winners are weak); the hot cocoa *club* angle (hot cocoa shirt 170 / 51, hot chocolate shirt 170 / 34; folded into the snowman instead).

### What we should make: 11 concepts (all original art)

Every Christmas long-tail is KD 33–60. These products exist to **deepen `/christmas-shirts-for-women/` (KD 14)**, not to rank on their own. Build order follows proof × keyword.

| Order | Concept (our take) | Primary (vol / KD) | Brief |
|---|---|---|---|
| 1 | **Retro Santa**: our own round-faced 1950s Santa with a wink, in pink-and-red off-register print with tiny stars. No brand mascots | retro Santa shirt 390 / 60 | **Confirms #6** (restyled pink + red, "Ho Ho Ho") |
| 2 | **Candy Cane Club**: a bundle of striped candy canes tied with a big satin bow, peppermint swirls, coquette style | candy cane shirt 1,900 / 34 | **Replaces #1** Cookie Swap |
| 3 | **Nutcracker Bow**: our own toy-soldier nutcracker in pastel pink and red with a bow on his hat, preppy watercolor-to-screen-print | nutcracker shirt 1,000 / 42 | **Confirms #3** (restyled preppy pink) |
| 4 | **Vintage Snowman**: a 1950s storybook snowman in a plaid scarf holding a steaming cocoa mug, snowflakes | snowman shirt 1,600 / 46 | **Replaces #2** Hot Cocoa Club (keeps the cocoa as a prop) |
| 5 | **Pink Christmas Trees**: three brushstroke trees (pink stripe, red, green) in a row, each topped with a tiny bow | Christmas tree shirt 27,100 / 46 | **Replaces #4** Glass Ornaments (the swap table already pointed this slot at the tree keyword) |
| 6 | **Oh Deer**: a cute vintage reindeer with a red bow on one antler, pink-and-brown palette | reindeer shirt 1,300 / 52 | **Confirms #8** (primary moves back to reindeer shirt, measured 1,300 / 52; better than the dog swap at 880 / 63) |
| 7 | **Holly Jolly**: stacked groovy "HOLLY JOLLY" lettering with holly sprigs and a pennant flag. The phrase only, never the song lyric line | holly jolly shirt 210 / 33 | **Replaces #9** Christmas Movie Night (licensed-dominated niche) |
| 8 | **Christmas Cats**: two cats tangled in a string of lights inside a wreath | Christmas cat shirt 880 / 56 | **Confirms #5** swap (Home for the Holidays → cat in wreath) |
| 9 | **Lit Up Bow**: a strand of vintage C9 bulbs tied into a coquette bow. Text "Tis the Season", never "Merry & Bright" | Christmas lights shirt 320 / 60 | **Confirms #7** (restyled from loose strand to bow) |
| 10 | **O Holy Night**: star over stable, linocut. "O Holy Night" is a public-domain carol title | Christian Christmas shirt 880 / 60 | **Confirms #10** (primary changed from "religious Christmas shirt", which has no volume and KD 84) |
| 11 | **Ho Ho Howdy**: our own cowboy Santa tipping a felt hat, a lasso of lights, retro western type | country Christmas shirt 170 / 56 | **New #34** (cross-links to Western) |
| (backlog) | Vintage stamps collage "Postmarked North Pole" | retro Christmas shirt 260 / 75 | Not briefed: KD too high, keep as a later depth add |

---

## 2. Men's gym shirts + pump covers (`mens gym shirts` 18,100 / KD 10 · `pump cover` 22,200 / KD 28)

**Format finding (most important):** the pump-cover market is about the **blank first**. Amazon's top sellers for "pump cover" and "oversized gym shirt men" are plain **acid-wash / vintage-washed oversized heavy-cotton tees**: Arssm 2K+ bought / mo, ADOREJOY 3K+, KEEPSHOWING acid-wash 1K+; "acid wash gym shirt men" sums to ~8,800 bought / mo. On Etsy, almost every pump-cover winner is printed on **Comfort Colors** (garment-dyed, heavyweight) and priced around $33 (RankHero median $33.37; oversized gym shirt median $29.99). So our pump covers need an **oversized, garment-dyed or faded heavyweight blank**, not the 4.2 oz 3001. Confirm a Printful option (for example Comfort Colors 1717, or Printful's oversized faded tee) and its real spec before writing copy, and check the margin at $29.99. Related keywords: oversized gym shirt **5,400 / 30**, pump cover shirt 2,400 / 32, gym pump cover 1,900 / 35, acid wash shirt 6,600 / 32, heavyweight shirt 2,400 / 16.

### Winning themes, ranked

| # | Theme / motif | Typical phrase | Style | Palette / shirt | Evidence (signal) | Keyword (vol / KD) |
|---|---|---|---|---|---|---|
| 1 | **Medieval knight / renaissance gym humor** | old-English joke lines | woodcut, illuminated manuscript | black/cream, parchment | **1,670 / 23,458** ([4297457627](https://www.etsy.com/listing/4297457627)); copy 257 / 2,073 | funny gym shirt **3,600 / 45** (medieval gym shirt vol -- / 50) |
| 2 | **Greek mythology: Sisyphus pushing the weight uphill** | "One must imagine…" style | vintage engraving, distressed | cream/black, garment-dyed | **1,583 / 18,480** ([1508894524](https://www.etsy.com/listing/1508894524)), $41 | pump cover **22,200 / 28** · sisyphus shirt 110 / 40 |
| 3 | **Skeleton lifting (deadlift skeleton), retro cartoon** | "Dead Lift" pun | 1930s rubber-hose / retro cartoon | cream/black/orange | **1,338 / 15,163** ([1573037360](https://www.etsy.com/listing/1573037360)), $47.99; 41 / 740 | deadlift shirt **210 / 33** |
| 4 | **Christian gym: Bible verse + lifting** | "Iron Sharpens Iron" (Prov. 27:17), "Strong and Courageous" (Josh. 1:9) | streetwear / back print | black, cream, sand | Iron Sharpens Iron **836 / 15,998** ([1660216654](https://www.etsy.com/listing/1660216654)); Strong and Courageous pump cover **455 / 7,830** ([1702670168](https://www.etsy.com/listing/1702670168)); 201 / 3,886 | **iron sharpens iron shirt 720 / 27** · jesus gym shirt 320 / 32 · christian gym shirt 480 / 45 |
| 5 | **Tarot-card parody ("The Deadlift" card)** | card title | tarot/occult card frame | black/cream/gold | **683 / 9,512** ([1741201523](https://www.etsy.com/listing/1741201523)) | powerlifting shirt **880 / 42** |
| 6 | **Classical-art parody (Renaissance painting or statue lifting)** | pun title | museum art + gym | cream/marble | Mona Lisa parody 374 / 5,903 ([1797502137](https://www.etsy.com/listing/1797502137)). We redraw a generic marble statue, not a specific artwork | vintage gym shirt **480 / 30** · retro gym shirt 210 / 33 |
| 7 | **Halloween/horror gym crossover** (seasonal) | "We're going lifting" | retro horror poster | black/orange | **3,571 / 45,359** ([1567838615](https://www.etsy.com/listing/1567838615)) | weightlifting shirt 880 / 47 (seasonal, Oct only, skip this year) |
| 8 | **Bookish / nerd lifting** (crossover) | "Bookish" | cute | varies | 857 / 6,674 ([1771998109](https://www.etsy.com/listing/1771998109)) (women's-leaning) | pump cover (shared) |
| 9 | **Funny gym one-liners** ("Quiet I'm doing math", "Practice safe sets", "Lift heavy or die trying") | short pun | bold type | any | 417 / 10,096; 117 / 1,826; 181 / 2,783 | funny gym shirt 3,600 / 45 · gym bro shirt 260 / 32 |
| 10 | **Golden-era bodybuilding** (posing, physique) | "Golden Era" | 70s photo-to-print, halftone | sepia/cream | Amazon "bodybuilding shirt men" ~3,050 bought / mo (mostly muscle-fit/tanks); Etsy "Mona Lifta bodybuilding" 374 | bodybuilding shirt **1,600 / 36** |
| 11 | **Vintage / retro 90s gym graphic on washed oversized** (spider, gym rat) | none / "Gym Rat" | 90s bootleg, washed | faded black, sand | Spider 90s pump cover 219 / 2,770 and 99 / 1,498; "Gym Rat Vintage 90s" 102 / 864; Amazon "vintage gym shirt men" ~1,350 bought / mo | gym rat shirt 720 / 43 · vintage gym shirt 480 / 30 |
| 12 | **Funny food / cheat day** | "Low Carb Day", "Nachos" | flat cartoon | bright | 258 / 2,523; 81 / 798 | funny gym shirt (shared) |
| 13 | **Powerlifting / big three** | "Squat Bench Deadlift" | meet-program | navy/cream | Amazon "powerlifting shirt" ~1,600 bought / mo (mostly performance tanks) | powerlifting shirt 880 / 42 |
| 14 | **Leg day humor** | "Leg day" | comic | any | "Leg Day pump cover" 56 / 768; Amazon ~0 bought / mo | leg day shirt 260 / 42 (weak) |
| 15 | **Boxing gym / strongman** | — | fight poster / circus engraving | rust/cream | No standout listing found | boxing gym shirt 210 / 40 · strongman shirt 170 / 34 (weak) |

**Not used:** Disney "Maui's Gym" (1,299 favs, licensed), Berserk, Dragon Ball, Sam Sulek, Spider-Man-adjacent spider art (we skip the spider motif entirely), "muscle mommy" (women's, wrong collection), Spartan helmet (spartan shirt 1,300 / 32 has demand, but a helmet-crest look sits too close to a university's mark; revisit only as a full classical scene). Weak-proof motifs were dropped: bench press (no measured volume), kettlebell, garage gym, early-morning, rest day.

### What we should make: 12 concepts

| Order | Concept (our take) | Primary (vol / KD) | Brief |
|---|---|---|---|
| 1 | **Uphill**: an original engraved Greek figure rolling a giant iron plate up a mountain, laurel border, oversized garment-dyed blank | pump cover 22,200 / 28 | **Replaces #12** Garage Gym (the pump-cover keyword was already assigned to this slot) |
| 2 | **Iron Sharpens Iron**: two crossed vintage barbells forged on an anvil with sparks, verse ref "Proverbs 27:17" | iron sharpens iron shirt 720 / 27 | **Replaces #13** Swing Heavy |
| 3 | **Deadlift Skeleton**: a 1930s rubber-hose skeleton pulling a bent bar, our own character | deadlift shirt 210 / 33 | **Confirms #11** slot (Deadlift Society restyled from crest to skeleton) |
| 4 | **Marble Statue Curl**: an original classical marble statue doing a dumbbell curl, museum-plaque type | vintage gym shirt 480 / 30 | **Replaces #14** Before Sunrise |
| 5 | **Knight Lifting**: a woodcut knight in armor pressing a barbell, with our own mock-Old-English line "Lifteth Heavy, Complaineth Not" | funny gym shirt 3,600 / 45 | **New #35** |
| 6 | **The Lifter card**: an original tarot-style card, a robed figure holding a loaded bar overhead, sun and stars, card number "XXI" | powerlifting shirt 880 / 42 | **Replaces #20** Squat Bench Deadlift |
| 7 | **Strong & Courageous**: a lion head over a barbell, "Joshua 1:9" | jesus gym shirt 320 / 32 | **Replaces #19** Rest Day Champion |
| 8 | **Golden Era Pose**: an anonymous 1970s-style bodybuilder silhouette posing on a beach stage, halftone sunset. No real athlete likeness | bodybuilding shirt 1,600 / 36 | **Replaces #16** Bench Press Club |
| 9 | **Gym Rat**: our original rubber-hose rat, now on a washed oversized blank with a 90s bootleg layout | gym rat shirt 720 / 43 | **Confirms #21** (restyled) |
| 10 | **Old School Strength**: original 1900s strongman, faded print | strongman shirt 170 / 34 | **Confirms #15** (lower in the queue) |
| 11 | **Leg Day Survivor** | leg day shirt 260 / 42 | **Confirms #18** (lower in the queue, weak proof) |
| 12 | **Heavy Bag Dept.** | boxing gym shirt 210 / 40 | **Confirms #17** (last, weak proof) |

---

## 3. Western graphic tees + rodeo t-shirts (`western graphic tees` 2,400 / KD 16 · `rodeo t shirt` 5,400 / KD 32)

### Winning themes, ranked

| # | Theme / motif | Typical phrase | Style | Palette / shirt | Evidence (signal) | Keyword (vol / KD) |
|---|---|---|---|---|---|---|
| 1 | **Boho cow / bull skull with wildflowers** (longhorn skull, florals) | none, or "Howdy", "Wild West" | boho line + floral, distressed | terracotta/sage/cream on ivory, pepper | **2,803 / 85,483** (with "Howdy") ([1401541611](https://www.etsy.com/listing/1401541611)); **2,240 / 32,660** ([1272697716](https://www.etsy.com/listing/1272697716)); 1,831 / 18,683; 1,503 / 36,502; 810 / 16,715; 646 / 13,584; 492 / 9,242. Amazon "cow skull shirt women" ~900 bought / mo; Boot Barn's shelf has a "Steerhead" tee | cow skull shirt **480 / 46** · bull skull shirt 390 / 44 · longhorn shirt 880 / 42 |
| 2 | **Howdy** lettering (bubble, retro, preppy) | "Howdy" | 70s bubble, preppy | pink/tan/cream | 435 / 9,083; 376 / 8,434; 364 / 5,848; 361 / 4,256; plus the 2,803 above; Amazon "howdy shirt women" ~750 bought / mo | howdy shirt 480 / 53 |
| 3 | **Retro Wild West / vintage cowgirl rider** on an oversized tee | "Wild West" | 70s–90s vintage poster | rust/cream, faded | **904 / 10,295** and 843 / 9,649 ([4476708855](https://www.etsy.com/listing/4476708855)); Amazon "cowgirl shirt women" ~5,850 bought / mo and "retro cowgirl shirt" ~1,250 / mo | wild west shirt **590 / 49** · cowgirl shirt 8,100 / 52 |
| 4 | **Vintage rodeo poster / "American Rodeo"** | rodeo event type | woodtype poster | red/navy/cream | Vintage American Rodeo 239 / 4,398 ([1342726520](https://www.etsy.com/listing/1342726520)); Amazon "vintage rodeo shirt" ~1,200 / mo, "rodeo t shirt women" ~1,850 / mo; Boot Barn sells "Retro Rodeo" and "American Rodeo" tees | **rodeo t shirt 5,400 / 32** · vintage rodeo shirt 320 / 32 |
| 5 | **Southwest / "Aztec" blanket geometry** | none | saddle-blanket stripe, geometric | turquoise/rust/cream | **1,540 / 31,809** ([1414527139](https://www.etsy.com/listing/1414527139)); 76 / 1,665; 55 / 626 | aztec shirt **1,300 / 38** · turquoise shirt 4,400 / 34 (ambiguous intent) |
| 6 | **Embroidered boot stitch / cowboy boots** | none | boot-stitch pattern, embroidery look | tan/brown/cream | Boot stitch **1,390 / 23,615** ([1726720316](https://www.etsy.com/listing/1726720316)); Amazon "cowboy boots shirt women" ~1,600 / mo | cowboy boots shirt 590 / 48 · boot stitch shirt 110 / 40 |
| 7 | **Funny horse-girl / equestrian** | horse-training jokes | simple type + horse | any | **1,850 / 23,381** ([1678027775](https://www.etsy.com/listing/1678027775)); "Life happens, horses help" 483 / 5,205; Amazon "horse shirt women western" ~1,400 / mo | horse shirt 2,900 / 51 · wild horse shirt 140 / 36 |
| 8 | **Bison / buffalo, vintage** | none / "Roam" | vintage national-park print | brown/rust/cream | Bison vintage 248 / 2,857 ([4341198994](https://www.etsy.com/listing/4341198994)); Wild West buffalo 203 / 4,780; buffalo 153 / 2,047 | **bison shirt 1,900 / 34** · buffalo shirt 2,900 / 42 |
| 9 | **Cattle brands / ranch** | brand marks, ranch jokes | branding-iron chart | tan/black | Cattle brands sweatshirt 507 / 6,454; tee 224 / 4,378; ranch gate-opener joke 208 / 3,434 and 107 / 2,242 | ranch shirt 720 / 52 · cattle brand shirt 50 / 50 |
| 10 | **Country-music floral / leopard rocker** | genre words only | rock-tee + florals | leopard/pink | 500 / 21,159 ([1196481940](https://www.etsy.com/listing/1196481940)); several are song-title tees (excluded) | country music shirt 1,300 / 54 (saturated) |
| 11 | **Bull riding** | "8 seconds" ideas | gritty rodeo flyer | rust/cream | Amazon "bull riding shirt" ~1,300 bought / mo; Etsy best is a licensed-adjacent tee (261 favs); thin Etsy competition (1,009 listings) | **bull riding shirt 720 / 30** |
| 12 | **Barrel racing** | — | rodeo-program illustration | — | 106 / 750; 78 / 555 (niche but steady) | barrel racing shirt 390 / 38 |
| 13 | **Rattlesnake, vintage desert** | — | 90s bootleg / watercolor | tan/olive | Small favs (7–27) but very low competition (777 listings) | rattlesnake shirt 260 / 35 |
| 14 | **Lady Luck / casino cowgirl, horseshoe** | "Lucky" | retro motel/casino sign | red/cream | Lady Luck 47 / 677 | horseshoe shirt 210 / 42 |
| 15 | **Coastal cowgirl** (trend micro-niche) | "Coastal Cowgirl" | beachy western | blue/sand | 295 / 3,313; 169 / 2,984 | coastal cowgirl shirt 110 / 58 (skip) |

**Not used:** "Save a Horse" (song, 455 and 528 favs), "Long Live Cowgirls" (song), "Two Dozen Roses" (song), "Play Something Country" (song), Toy Story Jessie (1,298 favs, licensed), "Cowboy Carter" (album), "Cowboy Killer" (cigarette slang), "Tennessee / Nashville" place tees (real-place-led; skip), "Palm Springs Rodeo Club" (real place), Thunderbird and other Native sacred symbols (cultural-appropriation risk). Cactus (720 / 50, weak proof) and desert (590 / 60) were dropped.

### What we should make: 12 concepts

| Order | Concept (our take) | Primary (vol / KD) | Brief |
|---|---|---|---|
| 1 | **Steer Skull & Wildflowers**: our own long-horn skull over prairie wildflowers, boho line + woodcut. Terracotta/sage/dusty-rose, never orange-and-white | cow skull shirt 480 / 46 | **Confirms #24** (moved to the front: strongest proof in the niche) |
| 2 | **Saturday Night Rodeo**: an original woodtype rodeo poster, bronc rider silhouette | **rodeo t shirt 5,400 / 32** | **Confirms #28** (primary upgraded from vintage rodeo shirt 320 / 32; that keyword becomes a variant) |
| 3 | **Hold On Eight**: an original bull rider in a riveted chute-gate circle | bull riding shirt 720 / 30 | **Confirms #32** |
| 4 | **Vintage Bison**: a lone bison on open range in a 1960s park-poster style, "Roam" small | bison shirt 1,900 / 34 | **Replaces #33** Cowboy Coffee (was swapped to cactus, which has weak proof) |
| 5 | **Saddle Blanket Steer**: a steer head centered on a woven saddle-blanket geometric band (trade-blanket stripes, no sacred symbols) | aztec shirt 1,300 / 38 | **Replaces #30** Hat on the Post (its rodeo-t-shirt swap moves to #28) |
| 6 | **Howdy**: puffy 70s bubble "HOWDY" under a tipped cowgirl hat, plus a small skull-and-daisy accent | howdy shirt 480 / 53 (depth for KD 16 hub) | **Confirms #27** |
| 7 | **Kick Up Dust**: tall boots with boot-stitch scrollwork mid-step in a dust-star cloud | cowboy boots shirt 590 / 48 | **Confirms #25** (restyled around boot-stitch, the 1,390-fav motif) |
| 8 | **Wild West Rider**: an original 70s-poster cowgirl on a running horse, big sun, faded print | wild west shirt 590 / 49 | **Replaces #23** Hold On Tight (cowgirl graphic tee was 480 / 56, over the KD line) |
| 9 | **Barrel Racer** | barrel racing shirt 390 / 38 | **Confirms #22** |
| 10 | **Desert Rattler**: a coiled rattlesnake around a boot with desert marigolds, 90s bootleg print | rattlesnake shirt 260 / 35 | **Replaces #31** Ranch Hand (ranch hand shirt 30 / 50, no demand) |
| 11 | **Run Free**: wild horses | wild horse shirt 140 / 36 | **Confirms #26** |
| 12 | **Lucky Horseshoe**: restyled toward the Lady Luck motel-sign look | horseshoe shirt 210 / 42 | **Confirms #29** (last) |

---

## RankHero measurements used (fetched 2026-10-08)

Christmas: christmas shirts for women 5,400 / 14 · christmas tree shirt 27,100 / 46 · candy cane shirt 1,900 / 34 · gingerbread shirt 1,900 / 46 · snowman shirt 1,600 / 46 · reindeer shirt 1,300 / 52 · nutcracker shirt 1,000 / 42 · christmas cat shirt 880 / 56 · christmas dog shirt 880 / 63 · christian christmas shirt 880 / 60 · santa shirt 8,100 / 55 · santa claus shirt 880 / 54 · pink christmas shirt 590 / 66 · christmas movie shirt 480 / 60 · retro santa shirt 390 / 60 · western christmas shirt 390 / 78 · christmas lights shirt 320 / 60 · retro christmas shirt 260 / 75 · holly jolly shirt 210 / 33 · christmas cookie shirt 210 / 56 · christmas bow shirt 210 / 70 · country christmas shirt 170 / 56 · hot chocolate shirt 170 / 34 · peppermint shirt 170 / 34 · hot cocoa shirt 170 / 51 · jolly shirt 140 / 36 · mrs claus shirt 140 / 36 · nativity shirt 140 / 54 · cowboy santa shirt 90 / 57 · funny christmas shirt 8,100 / 58.

Gym: pump cover 22,200 / 28 · mens gym shirts 18,100 / 10 · gym shirt 33,100 / 46 · gym tshirt 14,800 / 46 · workout shirt 12,540 / 48 · mens workout shirt 9,900 / 44 · acid wash shirt 6,600 / 32 · oversized gym shirt 5,400 / 30 · funny gym shirt 3,600 / 45 · pump cover shirt 2,400 / 32 · heavyweight shirt 2,400 / 16 · gym pump cover 1,900 / 35 · lifting shirt 1,900 / 40 · bodybuilding shirt 1,600 / 36 · spartan shirt 1,300 / 32 · powerlifting shirt 880 / 42 · weightlifting shirt 880 / 47 · iron sharpens iron shirt 720 / 27 · gym rat shirt 720 / 43 · christian gym shirt 480 / 45 · vintage gym shirt 480 / 30 · jesus gym shirt 320 / 32 · gym bro shirt 260 / 32 · leg day shirt 260 / 42 · retro gym shirt 210 / 33 · deadlift shirt 210 / 33 · sisyphus shirt 110 / 40.

Western: western shirt 27,100 / 52 · western tshirt 27,100 / 50 · cowboy shirt 27,100 / 50 · cowgirl shirt 8,100 / 52 · rodeo t shirt 5,400 / 32 · rodeo shirt 5,400 / 50 · turquoise shirt 4,400 / 34 · vintage western shirt 3,600 / 52 · horse shirt 2,900 / 51 · buffalo shirt 2,900 / 42 · western graphic tees 2,400 / 16 · western graphic tee 2,400 / 54 · bison shirt 1,900 / 34 · aztec shirt 1,300 / 38 · country music shirt 1,300 / 54 · longhorn shirt 880 / 42 · bull riding shirt 720 / 30 · cactus shirt 720 / 50 · ranch shirt 720 / 52 · wild west shirt 590 / 49 · cowboy boots shirt 590 / 48 · cow skull shirt 480 / 46 · howdy shirt 480 / 53 · cowgirl graphic tee 480 / 56 · bull skull shirt 390 / 44 · barrel racing shirt 390 / 38 · vintage rodeo shirt 320 / 32 · rattlesnake shirt 260 / 35 · horseshoe shirt 210 / 42 · wild horse shirt 140 / 36 · boot stitch shirt 110 / 40 · coastal cowgirl shirt 110 / 58.

No RankHero page (404) or no volume: christmas tree truck shirt, red truck christmas shirt, christmas ornament shirt, christmas wreath shirt, bench press shirt, tarot gym shirt, greek gym shirt.
