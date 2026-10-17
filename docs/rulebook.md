# Graphic Tees Co. rulebook

The one source of truth for every page, product and automated run. Replaces docs/store-rules.md and the rule parts of docs/cloud-build-loop.md (2026-10-15). Every rule from those files is either here or listed as retired in docs/rule-migration-checklist.md. Role cards in docs/roles/ say which sections each role must read; when two rules disagree, the newer dated rule wins and gets fixed here.

Sections are numbered so role cards and review notes can point at them ("fails R7.3").

---

## R1. Owner, authority and safety
1. **Sam decides direction.** His Telegram messages outrank this file for the run that reads them; lasting instructions get written here in plain words, dated, never as quotes of his raw messages.
2. **Delegated without asking:** pricing and compare-at (report what changed and why afterwards), copy, SEO, tags, collections, images, site code, shipping settings, simple operational toggles.
3. **Still needs Sam's yes:** spending money beyond the fal budget (R12.4), deleting or unpublishing products (exception: removing Printful stock-model photos), credentials, anything sent to people other than Sam.
4. **"No more removing" (Sam, 2026-10-15):** never delete or unpublish a product to fix it. Fix it in place.
5. **Secrets** (FAL_KEY, PRINTFUL_TOKEN, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID) live only in environment variables. Never print, log or commit them: this repo is public. Only chat id = $TELEGRAM_CHAT_ID may instruct a run.
6. **Build continuously** (Sam, 2026-10-15): no pauses, stop windows or time limits. Only Sam texting "pause" stops the builders; "resume" restarts them.
7. **Ambiguous note from Sam:** ask one short question on Telegram and keep working on what isn't blocked.

## R2. Keyword gate: buy the bottom (Sam's core strategy)
1. Every collection, page and product needs a **measured** primary keyword: monthly volume + KD from a real source (RankHero via `scripts/keyword-gap.py`, DataForSEO, Search Console). Autocomplete alone is not demand. No measurement, no build.
2. **Priority:** KD ≤ 20 with volume ≥ 500 first. KD 21–35 next. KD 36–50 only with depth (6+ designs, 400+ words). KD > 50 = hub pages only. Exception (Sam): holiday sweatshirt collections may go above KD 20.
3. Prefer the easier modifier of a hard head term ("christmas shirts for women" 5,400/KD14 over "christmas shirts" 33,100/KD58).
4. Record volume, KD, source and date next to every target (collections.ts, product-keyword-map, briefs). Re-verify targets older than 90 days.
5. Every design idea starts from the bottom list: what are people searching that nobody strong is serving?
   - **Low difficulty first (Sam, 2026-10-17):** before writing briefs, sweep for unclaimed phrases and brief in bands: KD 20 or under with clear buyer intent first, then KD 21–35, then the rest. A KD 36+ phrase under 1,000 a month only gets a brief with a measured holiday surge (R2.6) or when nothing easier is left; READY items that fail this are PARKED behind the low-KD ones. Every brief carries `kd:` in its front matter.
6. **Niche-true and surge-timed:** the bottom = low-KD measured phrases that genuinely describe the page, timed to the season (holiday terms spike Oct–Dec). Junk long-tails don't count even at low KD. Copy also stakes a claim on every relevant measured phrase at any KD.
   - **Check the trend line (director, 2026-10-16):** open the phrase's RankHero page and read the monthly trend and country split. A holiday phrase whose volume is flat all year, or whose US share is under ~20%, is not holiday intent (examples: "naughty shirt" 1,000 flat all year; "cocoa shirt" 1,900 flat, 17% US). Use the seasonal modifier instead ("naughty christmas shirt" 720 / KD 27, Dec peak).
7. **Small volume is not small intent:** every product claims its own niche-true long-tails. Run `scripts/keyword-gap.py` with 2–4 design seeds, keep measured phrases that describe the art, skip trademarks/off-intent/generic, check `docs/product-keyword-map.json` so no other page owns them, work them into the Story and 1–2 Questions naturally, record them in the map.
8. **One measured keyword per page.** No two pages claim the same phrase (the audit flags collisions).
9. Never build a page for a phrase with no measured search value (example: no christmas-shirts-for-men page or tag).
   - **Re-measured (director, 2026-10-17):** men's Christmas now measures: "christmas shirt men" 18,100 / KD 10 (Dec peak 135,000, 36% US) and "mens christmas sweater" 33,100 / KD 8 (Dec peak 246,000). The old example no longer holds: men's Christmas pages may be built once enough men's Christmas products are LIVE (3+ to index). Products #453/#454 claim the two phrases until a page exists; the page then takes the head term and the products move to their own long-tails (R8.8). **Built 2026-10-17:** /christmas-shirts-for-men/ (christmas shirt men) and /christmas-sweatshirts-for-men/ (mens christmas sweater) now own those head terms. Also measured: ugly christmas sweater men 22,200 / KD 10 (an ugly-sweater-look men's crewneck brief can claim it).

## R3. House voice and whimsy (every new design)
1. **Whimsy first** (Sam, 2026-10-15): graphic tees win on the reaction. Every new design needs a HOOK: a pun, a dry one-liner or a funny visual twist a stranger would grin at, ask about or photograph. A pretty scene with the niche name on it is not enough.
   - **Cheeky, not cheesy** (Sam, 2026-10-17, after reviewing the women's cropped hoodies: "more cheesy than cheeky and I don't like it"). Cheeky = a little sly, confident, said with a straight face, slightly self-aware ("Emotionally Attached to My Leftovers", "Low Battery, High Standards"). Cheesy = a groan pun that explains itself, greeting-card sweetness, a word swapped for a sound-alike with no second meaning, or the niche name plus an exclamation. Test before briefing: would the target buyer say it out loud to a friend, or roll their eyes? If you have to explain the joke, or it would fit on a mug in a gas station, cut it. Briefs carry 3 candidate lines; the director picks the cheekiest, never the safest.
2. **The vibe:** confident, a little cheeky wordplay: slay/sleigh ("Sleigh Queen"), yule/you'll, pie/oh my, gobble. It's the voice of the prints AND the first line of product copy.
3. **Contrast joke formula:** wholesome vintage art + a dry deadpan line (storybook Santa → "Define Naughty"; serene lake → "Mentally Fishing"; 1960s cartoon kitten lifting → "Leg Day Survivor").
4. **By audience:**
   - **Women's:** full sass.
   - **Men's:** dry and deadpan, turned up a notch (Sam, 2026-10-15), a little bite, still family-clean.
   - **Christian:** 50/50. Half honest, simple, scripture-based and quietly emotional (verse reference + a few plain words, clean vintage type). Half witty yet respectful, colorful, vintage. Never mock faith, never cheesy.
5. **The joke is the design; the measured keyword is the page.** Puns rarely have volume, so never name a page after a pun. Title/handle/SEO = measured keyword ("Funny Thanksgiving Shirt – Stuffed Since 1621"); the pun goes on the print and in copy line one.
6. **Measured funny anchors (RankHero 2026-10-15):**

   | Phrase | Volume / KD |
   |---|---|
   | funny christmas sweater (→ crewnecks) | 18,100 / 52 |
   | funny christmas shirt | 8,100 / 58 |
   | family christmas shirts | 8,100 / 56 |
   | funny thanksgiving shirt | 4,400 / 48 |
   | funny fishing shirts | 3,600 / 37 |
   | funny gym shirts | 3,600 / 41 |
   | ugly christmas shirt | 2,900 / 52 |
   | matching christmas shirts | 1,900 / 58 |
   | funny christmas sweatshirt | 1,000 / 65 |
   | ironic shirts | 1,000 / 24 |
   | turkey trot shirt | 720 / 32 |
   | ho ho ho shirt | 390 / 54 |
   | christmas lights shirt | 320 / 60 |
   | pie shirt | 260 / 52 |
   | feliz navidad shirt | 260 / 41 |
   | fa la la shirt | 210 / 44 |
   | gobble gobble shirt | 210 / 54 |
   | christmas cookie shirt | 210 / 56 |
   | hot cocoa shirt | 170 / 52 |
   | sleigh shirt | 140 / 36 |
   | sleigh all day shirt | 110 / 42 |
   | leftovers shirt | 50 / 47 |

   For evergreen niches, run `keyword-gap.py "funny <niche> shirt"` and use the measured phrase when it exists.
7. **Joke QC (all must pass):**
   1. Gets it in under 2 seconds from 6 feet.
   2. Original: if the exact line is on 50+ Etsy listings, twist it.
   3. Family-table clean: no profanity, "AF", innuendo, or meanness about a group.
   4. No trademarks or film/TV/brand quotes: no Grinch, Elf, Christmas Vacation/Griswold, Home Alone, Charlie Brown, Rudolph, Peanuts, Disney, Starbucks or sports leagues.
   5. The buyer would wear it to the real event: Friendsgiving, family dinner, turkey trot, office party, deer camp.
   6. One joke, 2–6 words, hand-drawn vintage lettering, never a default font.
      - **Every line of text, small ones too (director, 2026-10-16 night; 4th and 5th hits: "Iron & Sweat Dept." sub-line, the "Study in Hypertrophy" museum caption, after two pilot sends):** sub-lines, captions, dates and "(unpaid)" asides count. If any line looks typeset (clean sans or book serif, even letter spacing), erase it in print-prep or re-letter it by hand before REVIEW. A caption that carries the joke must read at phone size on the mockup (at least about 60% of the art's width).
   7. Read it aloud: if it sounds like a generic AI slogan ("Festive Vibes Only", "Holiday Mode: On"), throw it out.
8. **Brief lines:** every brief carries `Hook:` (the joke + who laughs) and `Why it's not taken:` (what Etsy shows for it).
9. **Already-built products stay.** Exception: the men's redo (R11.4).

## R4. Art style
1. **No badge look, ever:** no circle, shield, banner, frame, border, outline box or dark patch/splotch behind the art. Prompts say "no background shape, no frame, no border, no badge, no dark patch".
2. **Style A, vintage to the edges:**
   - The subject or scene is the shape.
   - Edges fade, crack or break up into worn screen-print texture.
   - Muted 3–5 ink palette (faded red, cream, sage, navy, soft black linework), 1950s–70s print feel.
3. **Style B, simple embroidery look:** thin single-weight line art in one ink, small and centered, optional small script line. Still sized as a real chest print.
4. **Style C, boutique** (women's holiday; alternate with A/B, from the Born To Be Sassy study):
   - One big word or short pun in pattern-filled letters: buffalo plaid, leopard, gingham, candy stripe, tartan.
   - Or coquette ribbon bows, a faux chenille/embroidery/latch-hook look, or a cluster of 3 tiny motifs.
   - Centered, about 10 inches wide.
   - Palettes: pink+green or red+green Christmas; rust/cream/sage Thanksgiving.
   - The pun lives inside it ("Sleigh Queen" in plaid letters with a bow). Never claim real chenille or glitter.
5. **Recreate proven ideas, never art:** reuse winning themes, motifs, phrases, layouts and palettes as our own original artwork. Never trace or near-copy a seller's composition. Never use their names, logos or photos.
6. **Anime:** original anime-style art only. Invented characters; no real characters, series names, logos, catchphrases or lookalikes. Retro 80s/90s cel look, sunset cityscapes, mecha and ramen shops all work.
7. **Tools:** Recraft v4 (`fal-ai/recraft/v4/text-to-image`) for all art. Then `scripts/print-prep.py`: transparent PNG, 3600 px, 300 DPI, under 10 MB. Back logo `back-logo-company.png`, 3 inches wide, top center.

8. **Real embroidery (Sam, 2026-10-16: "a real step up, and the wrist is awesome"):** Printful embroiders on every blank we use (tees, Gildan 18000 crewneck, all five hoodies, cropped hoodie).
   - **Placements:** chest center, left chest, wrist cuffs (left/right), crewneck neckline, tee sleeve tops. Each embroidery placement costs about $2.95 extra at Printful.
   - **Go big on the chest (Sam, 2026-10-17: "the embroidered ones are actually kind of cute, but I wish the embroidery was a little bigger"):** use the largest chest placement Printful allows for that blank, filling at least 90% of the allowed width; never a small centered motif with empty space around it. Left-chest marks only when a large back or cuff element carries the look.
   - **Art for thread:** simple line art and lettering only, within Printful's embroidery limits: about 4 in wide on the chest, a handful of thread colors, no gradients, no worn texture, no tiny gaps. Style B designs and short script words are the natural fit; vintage full-bleed art stays printed.
   - **Wrist cuffs:** a small script word or tiny motif ("Merry", a single tree, a pie, "Gobble") on one cuff, often paired with a chest piece. Women's crewnecks, hoodies and cropped hoodies first.
   - **Use:** the embroidered-sweatshirts collection (12,100/56) is real embroidery only. Embroidered hoodies are welcome too, tagged into their hoodie collection plus embroidered-sweatshirts. The audit now allows it for handles containing "embroidered" (director, 2026-10-16), so builders tag embroidered hoodies with embroidered-sweatshirts again.
   - **Pilot result (director, 2026-10-16):** 3 of 5 passed review and went live (#192 crewneck chest + cuff, #196 hoodie chest center, #197 cropped hoodie chest + cuff word); Printful accepts embroidery plus the printed back-neck logo on the same item, so the back logo stays. Two sent back for art only (default font; a steam swirl that read as a question mark). Scale embroidery now: thread art must use hand-drawn lettering, even line weight, and cuff text at least 0.25 in tall (one short word). Real per-placement cost: confirm on the first order. **Pilot complete (director, 2026-10-16 evening): 5 of 5 live** after one art redo each for #198 (hand-lettered deer) and #199 (wavy steam, one cuff word 'extra' at about 0.47 in tall). Embroidery briefs no longer wait on the pilot.
   - **Pilot:** build 5 first. Check Printful's embroidery mockups and the real cost, and confirm whether Printful allows the printed back-neck logo on an embroidered product. If not, skip the back logo on embroidered items. Then scale.
   - **Title and copy:** say "Embroidered" in the title and first line (it's the search term). Copy facts: embroidered, stitched thread. Never call a printed item embroidered.

## R5. Art QC v3: rigid, every design
1. **The floor:** batch 1 (approved 2026-10-13, docs/reference/batch-1/) is the minimum. Compare every new design side by side with 2–3 sheets from docs/reference/best/ (or batch-1). If it's weaker in polish, coverage, legibility or vintage finish, redo it. A design that beats the floor gets added to docs/reference/best/, and the bar rises.
2. **Popularity evidence before art:** a measured keyword AND proof people buy the theme (RankHero top-listing favorites/views, the Etsy style study, docs/market-research.md). Record the evidence per design.
3. **Pass all eight:**
   1. Looks like it belongs on Etsy's page 1 for the niche.
   2. Fills the chest print area (Style B excepted, but still chest-sized).
      - **Hoodie and sweatshirt print width (director, 2026-10-17; 4 sent back in one run for a small print or a joke line unreadable on the mockup: Totally a Pilgrim FW 1151, Full Draw FW 1200, Antler Envy FW 1300, Ducks in a Row):** chest prints on hoodies and sweatshirts start at FW 1500 (about 10 in). Tall, narrow art gets its lettering widened or moved beside the art rather than the whole print shrunk. Before REVIEW, read every word of the joke on the darkest mockup at phone size; if any word needs a squint, widen or thicken it first.
        - **The pouch is never a reason to go under FW 1500 (director, 2026-10-17 midday; Bah Humbug hoodie at FW 1320, 5th width hit):** if the art is too tall to sit above the pouch seam at FW 1500, change the art's shape in print-prep (crop the bottom with a worn edge, move a side object up beside the subject, widen the lettering), never shrink the print. An item under FW 1500 comes straight back.
   3. No badge look.
   4. Every element reads instantly, with correct anatomy.
   5. Lettering spelled exactly right and readable at phone size.
   6. Vintage finish.
   7. Brand-safe and original.
   8. Prints clean: background fully removed, light art on dark blanks, dark art on light blanks.
      - **Twins too (director, 2026-10-17 morning; 4 more sent back at FW 1200–1400):** a twin sets its own width for its blank and never copies the source's FW. Crewnecks (no pouch) go to FW 1650.
      - **Letter and shape fills (director, 2026-10-16):** before Printful upload, preview the print on mid grey AND on the darkest offered color. Any white-filled letter counter (an O, A, P), white blob, or white disc inside a wreath/frame that isn't meant to be ink gets knocked out in print-prep. Recurring: Pitch Please, Casserole Ministry, Christmas Cats. Twins too (director, 2026-10-16 evening, Ski Lodge hoodie): approved tee art is not pre-cleared for a new garment color; check every closed letter counter on the twin's darkest color before linking.
      - **Self-check before REVIEW (director, 2026-10-16, 5th hit: Espresso Yourself, Professional Tree Sitter):** zoom the grey ART panel of your own review sheet to 200%. Any pure white that is not a planned cream ink (sky gaps between branches, behind ladder rungs, inside letters, highlights) means the item is not ready. Also check every held object is attached to a hand or a surface (a floating bow sent Tree Sitter back).
      - **Camo and patterned garments (director, 2026-10-17; Fluent in Honk, Doe-Eyed & Dangerous, Full Draw sent back):** judge every word on the busiest color's mockup at phone size. Lettering gets the camo-halo cream backing too (or cream ink with a dark outline); mid-tone ink on camo (mustard on Duck Camo, pale pink on pink camo) disappears. Run camo-halo.py with a close value small enough that open shapes (between a bowstring and limbs, under legs, inside a wreath) stay garment, not a solid cream plate. Scene grounds get ragged edges before the halo, never straight canvas cuts.
4. **Max 2 regenerations,** then skip and Telegram Sam.

## R6. Photos and covers
1. **Carousel:**
   - Slide 1 = the product's fal lifestyle cover, the only human.
   - Then the product alone, no people: one Printful flat/ghost front view per offered color.
   - Then ONE back view showing the neck logo.
   - Never Printful stock models.
   - Pump covers: cover + front + back + 2 detail shots.
2. **Image budget:** two fal generations per product (art + cover), max 2 retries each. A crewneck or hoodie twin reuses the tee's art (no new art generation) and gets its own cover.
   - **Twins only from art that passes today's rules (director, 2026-10-16 night; Ghost Club badge and Midnight Showing VHS box sent back):** before briefing or building a twin, check the source art against R4.1 and R5.3. Older live art with a badge, frame, box or default-font line is not twinned as is: the twin gets a frameless redraw (one new generation) or isn't made.
   - **Lettering check is the builder's first step on every twin (director, 2026-10-16 late night; 7 of 15 twins in one batch sent back: Season's Greetings, Winter Woods, North Woods Christmas, Snow Day, Merry Christmas, Christmas on the Farm, Conflict Resolution):** before linking any twin, read every text line of the source art. A typeset line (book serif, clean sans, condensed font, even spacing) gets erased in print-prep when the art reads without it, or re-lettered by hand with one lettering-only Recraft generation composed in print-prep (the #234 method). A straight-edged cream ground or panel behind a scene gets broken up into worn edges (R4.1). Log what you checked. A twin sheet that still shows a typeset line comes straight back.
     - **In-flight twins too (director, 2026-10-17; 4 more sent back: Hello Winter, Ho Ho Howdy, Pink Christmas Trees, O Holy Night, all briefed before the rule):** the check runs before REVIEW on every twin, including ones claimed or synced before 2026-10-16 night. A ring, arch, disc, box or typeset line in the source art means fix and re-link first, then REVIEW. Common cases: rope or wreath rings with a filled disc, arched sky panels, small clean-sans taglines under the art, book-serif verse lines.
3. **The cover matches the audience** (Sam: "that's a man in the women section"):
   - Women's → a woman.
   - Men's → a man.
   - Unisex → a man AND a woman together; alt starts "Man and woman …".
4. **Scene = the shirt's world:** stadium, ballpark, river, deer camp, ranch, gym, church, porch, decorated holiday room or market. Never a studio or couch.
5. **Styling:**
   - Women's covers get festive props: cocoa mug, statement earrings, bracelet stack, shopping bags, ornaments.
   - Unisex covers: a couple or friend group in matching shirts.
   - Props sit at the hip or to the side, never over the print.
   - Allowed: cocoa, coffee, pumpkin, a fishing rod at the side. Not allowed: alcohol, tools, weapons, anything odd in hand.
6. **People:**
   - Whole face and hair in frame with headroom; candid, natural skin.
   - Age fits the audience: moms 30s–40s, Mimi 50s–60s, college-age for cropped.
   - Never the same face twice: check and log `docs/model-registry.md`.
     - **Temp covers too (director, 2026-10-17; 3 pairs in one batch shared a Printful model: #347/#349, #351/#352, #348/#350):** Printful lifestyle styles reuse the same model, so a temp cover's style ID counts as a face. Before using one, grep the pipeline logs for that style ID; if it's already on a live item, pick another style for that garment, or use it and mark the item `cover: temp (swap)` so it gets a fal cover first.
   - Mix ethnicities and ages across a grid.
7. **Print fidelity:** the exact design, real ink on fabric (folds, matte), nothing covering it. On non-white garments, flatten the art onto the garment color (JPEG) before passing `--design`, or Seedream paints a dark patch.
8. **Reject:** warped hands, garbled text, changed or redrawn print, background logos, a repeated face, a missing print.
   - **Hoodie covers (director, 2026-10-16, 6 of 8 hoodie covers sent back in one batch):** the garment must be the product: a visible hood on every hoodie (zip-ups zip at the FRONT, never a back seam or collar-only jacket), the blank's real color, no lighter panel or dark rectangle behind the print. Always flatten the art onto the garment color before `--design` (R6.7). Hands and mugs stay off the print, including the bottom word line. Before saving, read every word of the print on the cover against the art.
9. **Max 2 cover attempts:** keep the better one and log why.
   - **One extra cover attempt on a director REDO (director, 2026-10-16; held props over the print 4 times, a dropped word, a wrong hood):** when review sends a cover back, the builder gets one more try: generate it with the product's own Printful mockup in the cover color as the `--design` reference, hands empty (in pockets or at the sides), no cups or drinks on any cover where the print reaches the waist. If that fails too, keep the best, mark it in the log and the director decides.
   - **Small script the cover model keeps misspelling (director, 2026-10-17; Doe-Eyed & Dangerous read DOE-WED on 3 attempts):** after 2 failed attempts, composite the exact front print from the product's Printful mockup onto the best cover's chest in print-prep (perspective fit, multiply blend so folds show through), then read every word. This is a fix to the photo's print only; the person, scene and garment stay as generated.
   - **Before saving any cover:** read every word of the print aloud against the art, check nothing (hand, cup, hair, hood, another person) overlaps any part of it, and check the garment is the real blank (no sherpa or lined hood, no jacket collar, the offered color).
10. **Site images** (Image standard v2):
    - Homepage hero and holiday photos.
    - Men's/women's cards, collection cards and headers.
    - Seasonal banner.
    - Guides and OG images.

    All lifestyle photos in the subject's world, no stock models. Icons: photo-real objects on brand cream, about 70% of a 5:4 oval.

**AI image labels (2026-10-17, Google Merchant Center + Search):** every AI-generated image we publish carries IPTC DigitalSourceType = trainedAlgorithmicMedia (XMP). scripts/fal-photo.py and scripts/b-cover.py label covers automatically via scripts/label-ai.py; any other AI image (banners, cards, hero, About page) gets `python3 scripts/label-ai.py <file>` before commit. Printful mockups are not AI and are not labeled. Never strip metadata when resizing.

## R7. Product build standard
1. **Blanks and facts** (copy facts only from the supplier spec):
   - **Tee:** Bella+Canvas 3001 (unisex/men's), lightweight 4.2 oz. Never "midweight".
   - **Women's relaxed tee:** Bella+Canvas 6400.
   - **Crewneck:** Gildan 18000 (Printful #145), 8 oz, 50/50 cotton-poly fleece. Never "garment-dyed" or "Comfort Colors".
   - **Pump cover:** Printful #1482 all-over-print oversized tee: heavyweight 8.85 oz, 95% cotton / 5% elastane, boxy fit, sizes 2XS–5XL, Size option only.
   - **Hoodies (chosen 2026-10-16).** Handle suffix names the blank, and the audit prices by it. Copy facts from the Printful spec only.

     | Blank | Printful # | Handle ends | Launch colors |
     |---|---|---|---|
     | Pullover Gildan 18500 | 146 | -hoodie | Sand + Navy |
     | Zip-up Gildan 18600 | 692 | -zip-hoodie | Ash + Navy (no sand) |
     | Heavyweight Independent Trading IND4000 | 1543 | -heavyweight-hoodie | Sandstone + Storm Blue; camo options for hunting |
     | Oversized heavyweight Bella+Canvas 4719 | 892 | -oversized-hoodie | Dust + Navy |
     | Women's cropped hoodie Bella+Canvas 7502 | 317 | -cropped-hoodie | Peach + Storm (only 4 colors exist) |

     Crop sweatshirts: pick a Printful cropped crewneck when briefing (verify it exists; else use Bella+Canvas 7502 hoodie only). Never claim hoodies on a page until hoodie products exist.
2. **COLD-WEATHER LAUNCH COLORS (Sam, 2026-10-16), overrides the bullets below for hoodies and cold-weather items until the store is fully built:** launch each product in just 2 colors, Sand + Navy (or the blank's nearest light + dark, per the table in R7.1), so Printful sync is fast and every searched product gets a page sooner. The art must read on both; if it can't, pick the closest pair it reads on. A full-color backfill comes after the build (R11.6).
   **Colors (normal rule):**
   - Offer every Printful color the art prints legibly on (light art → dark and mid colors; dark linework → light and mid). Legibility beats count. Skip out-of-stock colors.
   - Women's products include at least 2 bold colors (hot pink, kelly green, red, chocolate, light pink) when the blank has them.
   - **Printful imports max 100 variants per product,** so count colors × sizes before productSet (3001 at 8 sizes → max 12 colors).
3. **Holiday pairs:** every new Christmas/Thanksgiving design ships as a tee AND a crewneck, each with its own page, cover, copy and measured long-tail. Crewneck title "<Women's|Unisex> Christmas – <Design> Crewneck Sweatshirt", handle ending "-crewneck-sweatshirt".
4. **Names:**
   - Title "<Women's|Men's|Unisex> <Niche> – <Design> <Tee|Crewneck Sweatshirt|…>".
   - Handle mirrors it.
   - SKU = <slug>-<Printful catalog variant id>.
5. **Tags:**
   - Tees: collection tags from the brief + intake-map tags + ai-art + intake-done.
   - Crewnecks: only the *-sweatshirts collection tag + "sweatshirt" + the holiday tag. NEVER christmas-shirts, christmas-shirts-for-women, thanksgiving-shirts, graphic-tees-for-men/women or niche *-t-shirts tags (those are tee pages).
   - Unisex tees may carry both graphic-tees-for-men and graphic-tees-for-women, so their cover MUST show a man and a woman.
   - Men's holiday designs: christmas-shirts + graphic-tees-for-men + christmas-shirts-for-men (tees); men's and unisex Christmas crewnecks also get christmas-sweatshirts-for-men (director, 2026-10-17: both men's Christmas pages are LIVE, 14 tees / 11 crewnecks; a unisex item joins only if its cover shows a man and a woman).
   - **Hoodie and funny-holiday hub tags (director, 2026-10-17):** every men's or unisex hoodie (any blank) also gets graphic-hoodies-for-men (new hub, graphic hoodie men 27,100 / KD 9, the easiest big head term we have measured; women's and unisex already take graphic-hoodies-for-women). Every Christmas tee whose print carries a joke also gets funny-christmas-shirts (slogan-first page, R9.11; crewnecks stay in christmas-sweatshirts).
   - **Style tags (director, 2026-10-16):** every tee whose print carries a joke (R3 hook) also gets funny-graphic-tees; every tee drawn in a specific decade's look (70s bubble letters, 80s gym/VHS, 90s anime, Y2K) also gets retro-graphic-tees. Both collections are hubs fed by these tags.
6. **Never half-visible:** create the Shopify product as DRAFT. It goes ACTIVE only after review approval (docs/pipeline/README.md) and a PASS from `node scripts/cohesion-audit.mjs --handle <h>`.
7. **Printful link:**
   - Map every variant to its catalog variant: front = print file, back = logo file.
   - `PUT /sync/variant` is limited to 10 per minute per store, shared by all lanes. Pace about 6 seconds apart, honor 429 retry-after, sync only unsynced variants.
   - Mockups via the free Printful mockup generator, flat/ghost templates only.
8. **Variant images:** each variant points at its color's front shot. Alt text "<Design> <niche> <graphic tee|crewneck sweatshirt>, <color>, front view".
9. **Pipeline, never wait:** start Printful sync and mockup jobs in the background and work on the next item. No sleep-polling while there's other work.

## R8. Copy and on-page SEO
1. Product description = the SOP's three h3 sections (docs/product-intake-sop.md). Line one carries the hook in the house voice (R3).
2. **One primary keyword,** used naturally. 4–6 supporting measured phrases, each once.
3. **No keyword stuffing:** no word-salad exact matches, no keyword-string questions, no "one of our ___ shirts", no superlatives. No stock AI phrasing ("elevate", "look no further", "must-have", "whether you're…"). Primary keyword at most 3 times.
   - **No production notes in shopper copy (director, 2026-10-16):** never write our own rule words into a description ("no badge or frame", "original art, no frame", "flat/ghost", "Style A"). Shoppers don't care; it reads machine-made. Describe only what is actually in the art, and check every object you name is really in the print (6 of 8 tees in one batch said "no badge or frame"; three named things the art doesn't show).
4. **Lengths:** SEO title ≤ 60 characters; meta description hand-written ≤ 155, never cut mid-word. Product H1 includes the niche keyword.
5. Proper nouns capitalized: Christian, Christmas, Thanksgiving, men's, women's.
6. Never claim something the store doesn't have.
7. FAQ answers stay in the HTML as h2 + p, even when shown as swipeable cards.
   **FAQ standard (2026-10-17):** Google only shows FAQ rich results for government and health sites (since Aug 2023), so FAQPage markup is for AI answers and Bing, not for stars in Google. Google says AI Overviews need no special markup: the visible question-and-answer text is what gets quoted, and the schema confirms it. Refresh each page's FAQs every 90 days from new data. Questions come from the last 90 days of search data, most-asked first: (a) Search Console queries for that page from the last 3 months once it has impressions (question-shaped ones beat everything, they are our real askers); (b) live Google "People also ask" and autocomplete for the page's keyword; (c) RankHero question keywords (who/what/how/does/can/will) with the trend checked for the last 3 months; (d) live ChatGPT/Perplexity/Gemini follow-up questions for the page's keyword. Each question carries one of the page's measured long-tails where it reads naturally (it never steals another page's primary, R8.8). Typical topics (fit, sizing, warmth/weight, wash care, delivery by a holiday date, gift fit, price, returns), worded as the buyer would type them. Answers are 40–60 words, complete on their own (name the product and the brand, give the number: oz, sizes, days, $45 free shipping), first sentence answers the question outright. 4–6 per page, every one visible on the page and word-for-word the same in the markup. No made-up questions about how great we are.
8. Every product targets its own design long-tail, never the collection's head term.

## R9. AEO: rank in every AI answer engine (Sam is an AEO specialist; this is half the job)
Goal: ChatGPT, Perplexity, Google AI Overviews / AI Mode, Gemini, Copilot and Claude name and link us for our target questions. Research basis 2026-10-15; re-check quarterly.
1. **Crawler access:** robots.txt allows GPTBot, ChatGPT-User, OAI-SearchBot, PerplexityBot, ClaudeBot, Claude-SearchBot, Google-Extended, Applebot-Extended and CCBot. Never block them in Cloudflare bot settings. Pages are static HTML (Astro), readable without JavaScript.
2. **One brand story:** the same brand sentence everywhere (site, llms.txt, schema, feeds, socials), so models learn one clear entity.
3. **Feed = site, always:** price, compare-at, availability, colors and sizes must match exactly across the site, schema, /feeds/products.xml, Merchant Center and every AI shopping surface. A mismatch makes AI systems trust the listing less. Any price change re-checks the feed.
4. **Complete product data:**
   - Product schema with brand, SKU, offers (price, availability), shipping and return policy.
   - Variants modeled as ProductGroup / hasVariant / variesBy.
   - Feed fields: sale_price, shipping, product_highlight, item_group_id, color, size, gender, age_group.
   - No GTINs (print-on-demand): identifier_exists = no.
   - Reviews/AggregateRating only when real reviews exist.
5. **Answer-first content:** every collection and product page answers the real buyer questions (who it's for, fit, care, sizing, gift timing, shipping) in plain sentences an AI can quote. Buying guides ("best funny Christmas shirts for a family photo") are citation bait. Specific facts beat marketing copy.
6. **Conversational feed attributes** (Google Merchant Center, 2026): question_and_answer, related_product (tee ↔ crewneck twin), item_group_title, variant_option, popularity_rank. Fill them once Merchant Center is connected.
7. **Bing matters:** ChatGPT search and Copilot lean on Bing. Use Bing Webmaster Tools + IndexNow so new pages are pushed the moment they publish.
8. **Third-party proof:** reviews, Reddit, gift guides, roundups and creators. AIs trust brands other sites talk about. Plan these after launch; never fake them.
10. **Standing research (Sam, 2026-10-16: "leave no stone unturned"):** every 3 days, alongside the citation check, scan for anything new: Google Search Central blog and "What's new" docs changelog, Merchant Center announcements, product structured-data docs, Microsoft/Bing webmaster + Merchant, OpenAI and Perplexity merchant docs, schema.org Product changes. Anything that applies to ecommerce becomes a dated rulebook line and a fix ticket. One-time backlog: a 2-year backtrack of all of the above (since Oct 2024), written to docs/research/ecom-search-backtrack.md as a gap checklist against our site (done in a session with Claude, not by the builders).
9. **Measure (Sam: every 3 days):** a citation check every 3 days asks the main AIs our target questions and logs whether we're named and linked (planned; see the Content Monster AEO method).

11. **What wins in AI answers for our queries (research 2026-10-16, docs/research/aeo-landscape-2026-10-16.md):**
    - AI Overviews quote **slogans word for word and name the store** on funny-occasion queries. Every product title and the first sentence of its description name the joke and the occasion ("Sleigh All Day – Funny Christmas Tee for Women"; "Stuffed Since 1621 – Funny Thanksgiving Shirt"). AI Mode writes "The Joke:" / "Best For:" from that text.
    - **Depth wins:** small brands get cited by catalog size and price ("27 designs at $34.95"). Funny and niche pages need 12+ designs before they're pushed.
    - **Slogan-first funny collections:** /funny-thanksgiving-shirts/, /funny-christmas-shirts/, /funny-fishing-shirts/ (exact-match H1, price line, 12+ designs, joke on every card).
    - **Brand-owned queries we deprioritize for new pages** (Hollister/AE/Gap/Nike/Amazon own them): custom photo shirt, quarter zip, zip up hoodie women, oversized hoodie men, head term "cropped hoodie". We still list products there, but don't spend new-page effort.
    - **Empty collections stay noindex until stocked** (camo, half-zip, etc.).
    - **Content that gets cited:** gift guides and "best of" roundups (including a few outside picks), fit/size guides, comparisons, direct PAA answers, plus short vertical videos. The plan is in the research doc, section 4.

## R10. Technical SEO and site
1. **Ship, then test:** copy, SEO and template changes go straight live. Verify with build, the cohesion audit and curl, then fix forward. Screenshot first only for brand-new visual directions.
2. **Speed:** keep Lighthouse 100s; static HTML; lazy images below the fold; eager hero.
3. Structured data on every page (Organization/OnlineStore, BreadcrumbList, Product/AggregateOffer, FAQPage, MerchantReturnPolicy). Validate new templates in the Rich Results Test.
4. Sitemap index at /sitemap-index.xml; noindex pages are pruned from it. Search Console and Bing get new key pages through docs/computer-jobs.md.
5. Collection pages: brand-color frame, real lifestyle photo, dark bottom gradient for the label. Cards show color dots, a NEW badge (under 14 days) and a MATCHING SET badge.
6. Hub pages (graphic tees for women/men, vintage, christmas-shirts) fill themselves from niche tags.
7. Empty collections stay switched off (hoodiesLive=false and similar) until they have products.

## R11. Catalog plan
1. **Goal:** every measured collection reaches 14 products (phase 1), then 28. Holiday first while in season; Thanksgiving stops after Nov 15; Halloween resumes Aug 2027.
2. **Skip:** graphic-tees-for-women-over-40 (no measured demand); football-shirts (hold).
3. **New collections ready to fill** (create the Shopify smart collection by tag + a collections.ts entry with hand-written copy and FAQs before the first product):
   - funny-fishing-shirts: 3,600 / 37
   - funny-gym-shirts: 3,600 / 41
   - pump covers: 22,200 / 28
   - rodeo t shirt: 5,400 / 32
   - christian shirts men: 12,100 / 12
   - mom shirts funny: 1,900 / 16
   - mimi shirts: 1,300 / 20
4. **Men's redo** (Sam, 2026-10-15): older men's shirts with a weak or generic line ("Gym Life", "Born to Fish") get new art in place.
   - Same product, handle, URL, title keyword and collections.
   - New front art, Printful file, mockups and cover; refreshed copy line one.
   - Candidates are listed in docs/mens-redo.md first.
   - Products built after 2026-10-15 are not redone.
5. **BUILD ORDER (Sam, 2026-10-16), target: everything done by Sunday 2026-10-18 evening, leaving credits for the configurator, UI fixes, AEO and Google Shopping:**
   - **Lane A:** finish holiday (men's/unisex Christmas pairs, Thanksgiving to its cap) plus Christmas hoodies (9,900/52) as twins of the best holiday designs. When holiday is done, join cold-weather.
   - **Lane B: COLD-WEATHER NOW.** Every measured cold-weather search gets a product, no matter how many types.

     | Collection | Volume / KD |
     |---|---|
     | zip-up hoodie | 135,000 / 28 |
     | oversized hoodie | 165,000 / 38 |
     | cropped hoodie | 40,500 / 30 |
     | anime hoodie | 22,200 / 38 |
     | gym hoodie | 18,100 / 30 |
     | heavyweight hoodie | 14,800 / 20 |
     | y2k hoodie | 14,800 / 35 |
     | embroidered sweatshirt | 12,100 / 56 |
     | cropped sweatshirt | 8,100 / 41 |
     | fishing hoodie | 6,600 / 30 |
     | hunting hoodie | 3,600 / 32 |
     | western hoodie | 3,600 / 36 |

     **Added 2026-10-16 (cold-weather search sweep, Sam: "build for the search, leave no stone unturned"):**

     | New page | Volume / KD |
     |---|---|
     | camo hoodies (IND4000 camo colors: Duck, Forest, Darkwood/Deadwood Tree, Black Camo) | 74,000 / 23 |
     | graphic hoodies (hub) | 60,500 / 49 |
     | graphic hoodies for women | 8,100 / 12 |
     | oversized sweatshirts (Bella+Canvas 4711, Printful #897) | 40,500 / 47 |
     | oversized hoodies for men (subset of oversized) | 18,100 / 10 |
     | quarter zip sweatshirts / pullovers (Comfort Colors 1580 #1591, Lane Seven LS14014 #1473 or Sport-Tek ST357 #903) | 14,800/30 + 9,900/31 |
     | half zip pullovers (Bella+Canvas 4740, Printful #1631) | 5,400 / 14 |
     | zip up hoodies for women | 14,800 / 32 |
     | zip up hoodies for men | 5,400 / 14 |
     | embroidered hoodies (real embroidery, R4.8) | 14,800 / 49 |
     | vintage hoodies | 12,100 / 53 |
     | vintage sweatshirts | 9,900 / 60 |
     | comfort colors sweatshirts (Comfort Colors 1566, Printful #839; say "Comfort Colors" only on these) | 12,100 / 56 |
     | mama sweatshirts | 6,600 / 55 |
     | christian sweatshirts | 6,600 / 52 |
     | nurse sweatshirts | 5,400 / 51 |
     | christmas sweatshirts for women | 5,400 / 62 |
     | heavyweight sweatshirts | 2,900 / 34 |
     | gym hoodies for men | 1,000 / 24 |

     Order: volume ÷ difficulty (camo hoodies, graphic hoodie women, oversized hoodie men, half zip and men's zip-up first). Subset pages (men's/women's) can fill from tagging the parent's products plus their own designs. Price new blanks per R12.1's pattern: about $14–16 profit after Printful base and fees, regular price ending .99, sale $5 lower with that compare-at.
     **Beanies: NO for now (Sam, 2026-10-17).** Do not brief. Measured for later: custom beanie 8,100/36, cuffed beanie 5,400/34, pom pom beanie 5,400/42, embroidered beanie 2,400/43, christmas beanie 2,400/51, hunting beanie 880/26. "beanie" 450,000/45 is a hub only.
     **Depth goes by search (Sam, 2026-10-17):** every hoodie collection to 14 first. Then the big pages climb to 24: camo, oversized, zip-up, cropped, anime, gym, heavyweight, Y2K (and any page whose head term is 10,000+). A page only goes past 14 while there are distinct measured long-tails left to claim (R2.7): one product, one real search, no near-copies to hit a number. Small pages (western, hunting, fishing, christian hoodies) stay at 14 until a sweep measures enough distinct searches to justify more. Run a keyword sweep for each big page before briefing items 15–24.
     Each to 14, highest volume ÷ difficulty first. Hoodie twins of strong existing designs reuse approved art (no new art generation).
   - Evergreen tees pause until cold-weather reaches 14 each.
   - The director creates missing collections first (cropped-hoodies, cropped-sweatshirts, embroidered-sweatshirts: Shopify smart collection by tag + collections.ts with hand-written copy and FAQs) and switches each hoodie collection on (hoodiesLive / the collection's flag) the run its first product goes LIVE.
   - Director reviews hourly-equivalent: when 6+ items wait in REVIEW, review them before writing briefs.
   - **Collections added 2026-10-16 (director):** cropped-hoodies, cropped-sweatshirts, embroidered-sweatshirts, christian-hoodies (christian hoodie 18,100 / KD 44). Printful has no cropped crewneck, so cropped-sweatshirts carries the cropped hoodies (tag both cropped-hoodies and cropped-sweatshirts; copy says they have a hood). Embroidered sweatshirts use Printful embroidery on Gildan 18000 with new Style B line art (R4.3), not a reused print file.
6. **Styles (Sam, 2026-10-16):** the shop-by-style section gets every style with measured volume and low enough KD to claim quickly (retro 22,200/54, embroidered 12,100/56, funny 5,400/58, boho 260/32, plus any the director measures), each as its own collection with hand-written copy and FAQs. Vintage stays.
   - **Built (director, 2026-10-16):** retro-graphic-tees (22,200/54, 27 tees tagged) and funny-graphic-tees (5,400/58, 51 tees tagged) are live hubs on the homepage style row, with embroidered-sweatshirts. Boho (boho graphic tees 260/32) waits until we have 6+ boho designs; minimalist graphic tee (1,000/24) is the next style to brief (Style B line art fits it).
7. **Men's redo (Sam, 2026-10-16: "redo all the lame men's shirts"):** every older men's design with a weak or generic line gets redone in place (R11.4), alongside cold-weather in lane B.
8. **After the build: color backfill** on every hoodie and cold-weather product to the full legible range (≤100 variants), then evergreen tees to 28.
9. **Coming:** hoodie pages (zip-up 135,000/KD28, heavyweight 14,800/KD20, oversized hoodie 165,000/KD38, plus niche hoodies); crop tops and cropped sweatshirts; custom "___ shirt" configurator pages (pets first, then football mom name/number; max 2 regenerations; order handoff tested with a 100% discount code + Printful draft orders only).

## R12. Pricing and shipping
1. **PRICING v2:** holiday sale through Nov 30, 2026.
   - Tees $24.99, compare-at $29.99.
   - Crewnecks $34.99, compare-at $39.99.
   - Pump covers $39.99, no compare-at.
   - Hoodies, sale / regular (compare-at), by blank (margins after Printful base and fees about $12–15):

     | Blank | Sale | Regular |
     |---|---|---|
     | Pullover | $39.99 | $44.99 |
     | Zip-up | $44.99 | $49.99 |
     | Heavyweight | $49.99 | $54.99 |
     | Oversized | $54.99 | $59.99 |
     | Cropped | $44.99 | $49.99 |

   - **New blanks (director, 2026-10-16, R11.5 sweep):** camo hoodies on IND4000 camo colors use the heavyweight price ($49.99 / $54.99) with handle ending -camo-hoodie; half zip pullovers (Bella+Canvas 4740, Printful #1631, base about $39) $54.99 / $59.99 with handle ending -half-zip; oversized sweatshirts (Bella+Canvas 4711, Printful #897, base about $33) $49.99 / $54.99, handle ending -oversized-sweatshirt (audit support to add with the first one).
   - **All-over-print camo (director, 2026-10-17, Sam's camo push):** Printful has no camo-dyed crewneck or pink camo hoodie, so pink camo hoodies are the all-over-print hoodie #1419 (base about $46.40): $64.99 / $69.99, handle ending -pink-camo-hoodie; camo sweatshirts are the all-over-print sweatshirt #1418 (base about $39.77): $56.99 / $61.99, handle ending -camo-sweatshirt. Both print one shared original camo pattern (never a Realtree/Mossy Oak pattern or name) with the chest art on the front panel. The audit prices both suffixes. #294 is the pilot.
   - **Embroidered items:** the garment's price above + $5 for a chest piece, + $3 more for each cuff detail (covers Printful's $2.95 per placement). Same sale/regular split.
   - From Dec 1: tees $29.99, crewnecks $39.99, hoodies at their regular price above, no compare-at. The audit flips automatically.
   - **Honest compare-at (Claude, 2026-10-17, FTC 16 CFR 233.1 former-price rule + Google sale_price: "the original base price that you charged previously"):** a compare-at ("was" price) is allowed ONLY on products that were on sale at their regular price before the sale began (created before 2026-10-15). Every product created since sells at the sale-tier price with NO compare-at: no strikethrough, no "Holiday sale" label, no feed sale_price. On Dec 1 they move up to the regular price like everything else. The audit enforces this from createdAt. Builders: never set a compare-at on a new product.
2. **Returns (Sam, 2026-10-16, best practice):** one free size exchange within 30 days of delivery (we print the new size; nothing to mail back); misprints/damage reprinted or refunded within 30 days. Site copy, schema (src/lib/schema.ts), Shopify refund policy and Search Console settings must all say the same thing.
3. **Free US shipping on $45+** (automatic Shopify discount). Under $45, the Printful profile rates apply (tees $4.95 flat).
4. The announcement bar says "Holiday sale: tees $24.99 · Free US shipping on $45+" only once the audit shows zero price errors. Until then it says the shipping line only.
5. **fal budget:** about $0.15 per product is normal. **One image per call, always (2026-10-17):** lane B's b-photo.sh asked Seedream for 3 covers per call ($0.09) with up to 3 retries; 234 calls burned about $21 of the $26 spent on Oct 16. scripts/fal-photo.py now forces --n 1 unless FAL_ALLOW_MULTI=1 (Sam only). Never write a wrapper that asks for more than one image or loops paid calls; retry only when the call returned nothing. If a run passes $5, stop generating, log it and Telegram Sam.

## R13. Cohesion: does it look hand-merchandised?
1. `node scripts/cohesion-audit.mjs` reads the store like a shopper and like Google. It checks:
   - audience and garment agreement across title, handle and blank;
   - the right person on the cover;
   - every grid matches audience, garment and holiday;
   - photos for every color;
   - price;
   - SEO lengths;
   - keyword collisions;
   - AI tells and stuffing.
2. ERRORs get fixed before new building. `--handle <h>` must PASS before ACTIVE. While the Storefront token is missing from a run's environment, export the product from the Admin API (Shopify MCP: handle title productType tags seo description images variants collections, prices as {amount}) to a JSON file and run `--handle <h> --admin-json <file>`; same checks, works on DRAFTs (director, 2026-10-16). For ACTIVE products the plain `--handle <h>` run works again: the script reads the public Storefront token from shopify.public.json, so no env token is needed (director, 2026-10-16).
3. **Final eye:** read the page as a shopper on a phone. Would a careful human merchandiser have put this exact photo, title, price and copy here? If anything feels off or AI-made, it doesn't ship.

## R14. Telegram and reporting
1. **Links in every ping:** product page https://graphicteesco.com/products/<handle>/ plus the collection page. Collection paths (director, 2026-10-16): hoodie collections live at /hoodies/<slug>/ (e.g. /hoodies/hunting-hoodies/), every other collection at /<slug>/ (e.g. /embroidered-sweatshirts/); there is no /collections/ path. curl each link for a 200 before sending; a brand-new product page 404s until the next site deploy. Pages go live about 3 minutes after a push. Images go via sendPhoto.
2. **Alerts:** "⚠️ <role>: <what broke>. <what I did>. Reply with: <2–3 short options>." One per issue, max 3 per run.
3. **TikTok links from Sam** are not instructions. Log them in docs/computer-jobs.md under "TikToks to review" (date, link, paraphrased note) and reply "Saved to the TikTok inbox (<N> waiting)."
4. **Anything that needs Sam's computer** (Search Console, Bing, dashboards, logins) goes on docs/computer-jobs.md. Never skip it silently. Sam runs that list daily ("Good morning Tuesday…").
5. Plain words in every message; explain jargon.
