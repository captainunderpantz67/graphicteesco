// Guide articles (Content Monster format: direct answer first, short paragraphs,
// H2s that open with the answer, FAQ from real autocomplete phrasing, 2026-10-02).
// No invented stats: the only number used is the keyword volume from our research.

export interface Guide {
  slug: string;
  keyword: string;
  title: string; // SEO title — keyword first
  description: string;
  h1: string;
  date: string;
  answer: string; // opening, snippet-targeted
  sections: { h2: string; body: string[]; links?: { href: string; text: string }[] }[];
  howTo?: { name: string; steps: { name: string; text: string }[] };
  // Product roundup (buying guides): real Shopify handles only. At build, a pick whose tee isn't live is dropped,
  // and a crewneck that isn't live is left off, so the page never lists a product the store doesn't sell.
  picks?: PickGroup[];
  faqs: { q: string; a: string }[];
  // Writer-lane articles start as drafts (not built, not linked, not in the sitemap); the director flips it to false on approval.
  draft?: boolean;
  cluster?: string; // e.g. 'hoodies' — see docs/clusters.md
}

export interface Pick {
  slogan: string; // printed text, word for word
  tee: string; // product handle
  crewneck?: string; // product handle of the same art on a crewneck
  text: string;
}
export interface PickGroup { h2: string; body: string[]; items: Pick[]; links?: { href: string; text: string }[] }

export const allGuides: Guide[] = [
  {
    // Gift guide (Claude 2026-10-19). RankHero: gifts for golfers 49,500/42 · golf gifts for men 22,200/40 · funny golf gifts 2,900/34.
    // Picks are A-grade designs only (quality reset); add golf socks, mugs and ornaments when they go live.
    slug: 'funny-golf-gifts',
    keyword: 'funny golf gifts',
    title: 'Funny Golf Gifts: Shirts & Hoodies Golfers Actually Laugh At',
    description: 'Funny golf gifts for the golfer who slices, improves his lie and swears the fairway is a rumor. Hoodies, crewnecks and half zips, printed to order.',
    h1: 'Funny Golf Gifts for Golfers Who Laugh at Their Own Game',
    date: '2026-10-19',
    answer: 'The best funny golf gifts poke fun at the golfer\'s own game: the slice that broke a windshield, the "improved" lie, the fairway he never finds. Graphic Tees Co. makes original golf hoodies, crewnecks and half zips with those jokes printed big on the front, starting at $34.99, with one free size exchange.',
    picks: [
      {
        h2: 'Funny golf hoodies and sweatshirts',
        body: ['Golf season runs into fall and winter, so a warm hoodie or crewneck gets worn on the course, at the range and at the 19th hole.'],
        items: [
          { slogan: 'Sorry About Your Windshield.', tee: 'unisex-golf-sorry-about-your-windshield-hoodie', crewneck: 'unisex-golf-sorry-about-your-windshield-crewneck-sweatshirt',
            text: 'For the golfer whose slice has hit a parked car (or should have). The apology is printed big across the chest, so everyone in the foursome gets it before the first tee.' },
          { slogan: 'Not Cheating. Improving My Lie.', tee: 'unisex-golf-not-cheating-improving-my-lie-hoodie',
            text: 'A raccoon nudging a golf ball into a better spot, for the friend who rolls it over in the rough when nobody is looking. The double meaning of "lie" does the rest.' },
          { slogan: 'Fairways Are a Rumor.', tee: 'mens-golf-fairways-are-a-rumor-half-zip',
            text: 'For the golfer who plays most of his round from the trees. It comes on a half zip, the classic golf layer.' },
        ],
      },
    ],
    sections: [
      { h2: 'What makes a golf gift funny instead of corny?', body: ['The joke has to be about the golfer\'s actual game. Lines about slices, lies and missed fairways land because every golfer has been there; generic "golf is life" slogans do not.', 'Pick the joke that matches his worst habit and he will wear it to prove he can take it.'],
        links: [{ href: '/hoodies/golf-hoodies/', text: 'Shop all golf hoodies' }] },
      { h2: 'When to order golf gifts for Christmas', body: ['Every piece is printed after you order it, then shipped. Order by early December to have it under the tree, and earlier is safer during the holiday rush.'] },
    ],
    faqs: [
      { q: 'What is a good funny gift for a golfer?', a: 'A golf hoodie or crewneck with a joke about his own game, like "Sorry About Your Windshield" or "Not Cheating. Improving My Lie." It gets worn on the course and makes the foursome laugh.' },
      { q: 'What do you get a golfer who has everything?', a: 'Something he would not buy himself: a funny golf hoodie or half zip with an original joke. Equipment is personal; a laugh is not.' },
      { q: 'Are these golf gifts good for women golfers too?', a: 'Yes. The hoodies and crewnecks come in unisex sizes, and the jokes work for any golfer who has sliced one into the parking lot.' },
      { q: 'Can I exchange the size if it does not fit?', a: 'Yes. Graphic Tees Co. offers one free size exchange within 30 days of delivery.' },
    ],
  },
  {
    // Gift guide (Claude 2026-10-19). RankHero: white elephant gifts 33,100/44 (78K listings); funny white elephant gifts 22,200/9 has no competition count (blended, R2.10), used once in copy only.
    // A-grade Christmas designs only; "I Stole It. I'm Keeping It." added 2026-10-19 (director) when its redesign went LIVE; add ornaments/mugs when live.
    slug: 'white-elephant-gifts',
    keyword: 'white elephant gifts',
    title: 'White Elephant Gifts People Actually Fight Over (Under $40)',
    description: 'Funny white elephant gifts under $40 that get stolen: Christmas shirts and crewnecks about tree fails, bike assembly at 2 a.m. and attending under protest.',
    h1: 'White Elephant Gifts People Actually Fight Over',
    date: '2026-10-19',
    answer: 'The white elephant gifts that get stolen are funny and actually usable. A Christmas shirt or crewneck with a joke everyone recognizes, like a tree that looked smaller at the farm or a bike assembled at 2 a.m., gets a laugh when it is opened and gets worn after. Graphic Tees Co. tees are $24.99 and crewnecks $34.99, inside most white elephant budgets.',
    picks: [
      {
        h2: 'Funny Christmas shirts that get stolen',
        body: ['These are jokes the whole room recognizes, so the gift gets a laugh the moment it is unwrapped.'],
        items: [
          { slogan: 'It Looked Smaller at the Farm', tee: 'mens-christmas-it-looked-smaller-at-the-farm-graphic-tee', crewneck: 'mens-christmas-it-looked-smaller-at-the-farm-crewneck-sweatshirt',
            text: 'Every family has bought the tree that did not fit through the door. Universal, clean and funny enough for the office party.' },
          { slogan: 'Some Assembly Regretted', tee: 'mens-christmas-some-assembly-regretted-graphic-tee', crewneck: 'mens-christmas-some-assembly-regretted-crewneck-sweatshirt',
            text: 'For whoever built the bike, the dollhouse or the trampoline at 2 a.m. on Christmas Eve. A twist on "some assembly required" that every parent gets.' },
          { slogan: 'Attending Under Protest', tee: 'mens-christmas-attending-under-protest-hoodie', crewneck: 'mens-christmas-attending-under-protest-crewneck-sweatshirt',
            text: 'A grumpy reindeer with crossed arms, for the coworker who did not want to come to the party but came anyway.' },
          { slogan: 'Allegedly.', tee: 'womens-christmas-cat-allegedly-graphic-tee',
            text: 'A guilty-looking cat next to a knocked-over ornament. One word, instant laugh, and every cat owner wants it.' },
          { slogan: "I Stole It. I'm Keeping It.", tee: 'mens-christmas-white-elephant-champion-graphic-tee',
            text: 'A proud man on a podium hugging the gift he just stole. It says out loud what every white elephant winner is thinking.' },
        ],
      },
    ],
    sections: [
      { h2: 'What makes a good white elephant gift?', body: ['A good white elephant gift is funny when it is opened and still useful after. Gag gifts that end up in the trash rarely get stolen; a funny Christmas shirt someone will wear to the next party does.', 'Keep it inside the group budget, usually $20 to $40, and pick a joke the whole room understands.'],
        links: [{ href: '/funny-christmas-shirts/', text: 'Shop all funny Christmas shirts' }, { href: '/group-shirts/', text: 'Buying for the whole office? Save 15% on 10+' }] },
      { h2: 'When to order', body: ['Each shirt is printed to order and then shipped, so order about two weeks before the party.'] },
    ],
    faqs: [
      { q: 'What is a good white elephant gift under $30?', a: 'A funny Christmas tee at $24.99, like "It Looked Smaller at the Farm" or "Some Assembly Regretted." It gets a laugh and gets worn, which is why it gets stolen.' },
      { q: 'What white elephant gifts get stolen the most?', a: 'Gifts that are funny and useful at the same time. A Christmas shirt or crewneck with a joke everyone recognizes usually beats a gag gift nobody wants to take home.' },
      { q: 'Is a funny shirt a good white elephant gift for coworkers?', a: 'Yes, as long as the joke is clean. Every design here works at an office party: tree fails, holiday assembly and attending under protest.' },
      { q: 'Can I buy white elephant gifts in bulk for a group?', a: 'Yes. Order 10 or more items in one cart, any designs and sizes, and 15% comes off automatically at checkout.' },
    ],
  },
  {
    slug: 'how-to-wash-graphic-tees',
    keyword: 'how to wash graphic tees',
    title: 'How to Wash Graphic Tees Without Cracking or Fading',
    description: 'Wash graphic tees inside out, in cold water, on gentle — then hang dry. Step-by-step care to keep prints from cracking, peeling and fading.',
    h1: 'How to Wash Graphic Tees (Without Cracking or Fading)',
    date: '2026-10-02',
    answer: 'Turn the tee inside out, wash it in cold water on a gentle cycle with mild detergent, skip bleach and fabric softener, then hang it dry or tumble dry on low. Never iron directly on the print.',
    howTo: {
      name: 'How to wash a graphic tee',
      steps: [
        { name: 'Turn it inside out', text: 'Turning the tee inside out keeps the print from rubbing against other clothes and the drum.' },
        { name: 'Wash cold on gentle', text: 'Use cold water and a gentle or delicate cycle. Heat and agitation are what crack prints.' },
        { name: 'Use mild detergent', text: 'Skip bleach and fabric softener — both break down printed ink over time.' },
        { name: 'Wash with similar colors', text: 'Wash darks with darks so nothing transfers onto the print.' },
        { name: 'Hang dry or tumble low', text: 'Air drying is best. If you use the dryer, choose the lowest heat setting and take it out promptly.' },
        { name: 'Iron inside out — never on the print', text: 'If it needs ironing, turn it inside out and iron on low, or put a cloth between the iron and the design.' },
      ],
    },
    sections: [
      { h2: 'Why do graphic tees crack?', body: ['Prints crack from heat and friction. Hot water, high dryer heat and rough cycles stretch and dry out the ink until it splits.', 'Cold water, a gentle cycle and low heat avoid all three.'] },
      { h2: 'Can you put graphic tees in the washing machine?', body: ['Yes. Machine washing is fine as long as the tee is inside out, the water is cold and the cycle is gentle.', 'Hand washing is gentler still, but it isn’t necessary for everyday wear.'] },
      { h2: 'How to keep graphic tees from fading', body: ['Fading comes from hot water, harsh detergent and sunlight. Wash cold, use a mild detergent, and dry indoors or in the shade.', 'Washing less often helps too — a tee worn for a few hours can usually be aired out and worn again.'] },
      { h2: 'How to store graphic tees', body: ['Fold graphic tees rather than hanging them on thin hangers, which stretch the shoulders. Avoid folding directly across the print when you can.'],
        links: [{ href: '/graphic-tees-for-men/', text: 'Shop graphic tees for men' }, { href: '/graphic-tees-for-women/', text: 'Shop graphic tees for women' }] },
    ],
    faqs: [
      { q: 'How do you wash graphic tees without cracking?', a: 'Inside out, cold water, gentle cycle, then hang dry or tumble dry on low. Heat and friction are what crack prints.' },
      { q: 'Should graphic tees be washed in cold water?', a: 'Yes. Cold water protects the print and the fabric and reduces shrinking.' },
      { q: 'Can you put a graphic tee in the dryer?', a: 'You can on the lowest heat setting, but hang drying is better for the print.' },
      { q: 'How do you stop graphic tees from peeling?', a: 'Avoid high heat in the wash, dryer and iron. Peeling usually starts after a hot dryer cycle.' },
      { q: 'How long do graphic tees last?', a: 'With cold washes and low or no dryer heat, a quality graphic tee lasts for years of regular wear.' },
    ],
  },
  {
    slug: 'how-to-style-graphic-tees',
    keyword: 'how to style graphic tees',
    title: 'How to Style Graphic Tees — Men, Women, Over 40 & Winter',
    description: 'Let the graphic tee lead and keep the rest simple. Outfit ideas for men and women, for work, for over 40 and for winter layering.',
    h1: 'How to Style Graphic Tees',
    date: '2026-10-02',
    answer: 'Make the graphic tee the focal point and keep everything around it simple: straight-leg jeans and sneakers for every day, a blazer or denim jacket to dress it up, and a front tuck to give it shape.',
    sections: [
      { h2: 'How to style graphic tees for women', body: ['Tuck the front into high-rise jeans or a denim skirt and finish with sneakers or boots. A knotted hem works with skirts and shorts.', 'For a cropped look, choose a cropped tee rather than tying a standard one.'],
        links: [{ href: '/graphic-tees-for-women/', text: 'Graphic tees for women' }, { href: '/cropped-graphic-tees/', text: 'Cropped graphic tees' }] },
      { h2: 'How to style graphic tees for men', body: ['Pick a tee that fits the shoulders, then wear it with straight or slim jeans or chinos and clean sneakers or boots.', 'An overshirt, flannel or denim jacket left open is the easiest upgrade.'],
        links: [{ href: '/graphic-tees-for-men/', text: 'Graphic tees for men' }] },
      { h2: 'How to wear a graphic tee over 40', body: ['Choose a classic fit that skims rather than clings, and a design about something you’re into. A blazer, cardigan or denim jacket makes it polished.', 'Smaller chest prints read dressier than full-front designs.'],
        links: [{ href: '/graphic-tees-for-women-over-40/', text: 'Graphic tees for women over 40' }] },
      { h2: 'How to style graphic tees for work', body: ['In casual workplaces, a graphic tee under a blazer with dark jeans or trousers works. Choose a simple design and a tee with no wear.', 'In business-casual offices, save it for casual Fridays unless the dress code says otherwise.'] },
      { h2: 'How to style graphic tees in winter', body: ['Layer: graphic tee under an open flannel, shacket or zip-up hoodie, or over a thermal long sleeve. The design stays visible and you stay warm.'],
        links: [{ href: '/hoodies/zip-up-hoodies/', text: 'Zip-up hoodies' }, { href: '/hoodies/', text: 'Graphic hoodies' }] },
      { h2: 'How to wear an oversized graphic tee', body: ['Balance the volume: pair an oversized tee with bike shorts, leggings or slim jeans, and tuck one side of the front for shape.'],
        links: [{ href: '/oversized-graphic-tees/', text: 'Oversized graphic tees' }] },
    ],
    faqs: [
      { q: 'How do you style a graphic tee with a skirt?', a: 'Tuck the tee into the waistband or tie a knot at the hip. It works with denim, midi and pleated skirts.' },
      { q: 'Can you wear a graphic tee with a blazer?', a: 'Yes. A fitted graphic tee under a structured blazer with dark jeans is a classic smart-casual outfit.' },
      { q: 'How do you style a graphic tee if you’re plus size?', a: 'Choose a fit that skims the body, try a front tuck or a long open layer like a cardigan or kimono, and go with a design you love.' },
      { q: 'What shoes go with graphic tees?', a: 'Clean sneakers are the default. Boots work with western and country tees; loafers work when you add a blazer.' },
    ],
  },
  {
    slug: 'are-graphic-tees-in-style',
    keyword: 'are graphic tees in style 2026',
    title: 'Are Graphic Tees Still in Style in 2026? Yes — Here’s What’s In',
    description: 'Graphic tees are still in style in 2026. Here’s what’s in — vintage prints, oversized and cropped fits, western designs — and whether they’re business casual.',
    h1: 'Are Graphic Tees Still in Style in 2026?',
    date: '2026-10-02',
    answer: 'Yes. "Graphic tees" averages about 301,000 US Google searches a month, and interest peaked in July 2026. What’s in right now: vintage-inspired prints, oversized and cropped fits, and western designs.',
    sections: [
      { h2: 'What graphic tees are in style right now?', body: ['Vintage-inspired prints with faded colors and retro type, oversized fits, cropped fits for women, and western and country designs are all popular in 2026.', 'Designs about real interests — fishing, hunting, faith, the gym — have stayed steady because they aren’t tied to a trend.'],
        links: [{ href: '/vintage-graphic-tees/', text: 'Vintage graphic tees' }, { href: '/western-graphic-tees/', text: 'Western graphic tees' }, { href: '/oversized-graphic-tees/', text: 'Oversized graphic tees' }] },
      { h2: 'Are graphic tees business casual?', body: ['Usually not on their own. Under a blazer with tailored trousers, a simple graphic tee can work in a relaxed office — check your dress code.'] },
      { h2: 'Are graphic tees childish?', body: ['Not inherently. Fit and design decide it: a tee that fits well, with art about something you genuinely like, reads grown-up at any age.'],
        links: [{ href: '/graphic-tees-for-women-over-40/', text: 'Graphic tees for women over 40' }] },
      { h2: 'Are graphic tees Y2K or 90s?', body: ['Both eras leaned on graphic tees, and both looks are back: Y2K brings bubble letters and fitted or cropped tees, while 90s style brings oversized fits and vintage-band-style prints.'],
        links: [{ href: '/y2k-graphic-tees/', text: 'Y2K graphic tees' }] },
    ],
    faqs: [
      { q: 'Are graphic tees out of style?', a: 'No. Search interest in graphic tees peaked in July 2026, and they remain a wardrobe staple.' },
      { q: 'Are graphic tees still in style for women?', a: 'Yes. Cropped, oversized, western and vintage-inspired graphic tees are all current for women.' },
      { q: 'Are graphic tees immature?', a: 'Not when they fit well and the design reflects a real interest. Styling with a jacket or blazer makes them look more polished.' },
    ],
  },
  {
    // Content plan piece #1 (docs/research/aeo-landscape-2026-10-16.md §4): slogans quoted word for word with the occasion,
    // price line, gift timing and fit facts taken from the live product copy and /shipping-returns/. Ship before about Nov 10.
    slug: 'best-funny-thanksgiving-shirts',
    keyword: 'best funny thanksgiving shirts',
    title: 'Funny Thanksgiving Shirts: 8 Jokes for Dinner & the Trot',
    description: 'Eight funny Thanksgiving shirts by occasion: Mash Hour, Pie Oh My, Nap Queen, Turkey Trot and more. Tees $24.99, crewnecks $34.99 through Nov 30.',
    h1: 'Funny Thanksgiving Shirts: 8 Turkey-Day Jokes for Dinner, Friendsgiving and the Turkey Trot',
    date: '2026-10-16',
    answer: 'Graphic Tees Co. sells eight funny Thanksgiving shirts, each with the joke printed on the front: Mash Hour, Pie Oh My, Totally a Pilgrim, Here for the Scraps, Leftovers Club, Nap Queen, Turkey Trot and Turkey Day Crew. Every design comes as a tee for $24.99 and a crewneck sweatshirt for $34.99 in the holiday sale through November 30, 2026.',
    picks: [
      {
        h2: 'Funny shirts for Thanksgiving dinner',
        body: ['These three are clean jokes about the table itself, so they work at Grandma’s house.'],
        items: [
          { slogan: 'Mash Hour', tee: 'unisex-thanksgiving-mash-hour-graphic-tee', crewneck: 'unisex-thanksgiving-mash-hour-crewneck-sweatshirt',
            text: 'MASH HOUR is printed in diner block letters over a heaped bowl of mashed potatoes with a melting butter pat and a gravy boat. It is for whoever reaches the potato bowl first. The tee is a unisex cut in XS–4XL and 12 light colors.' },
          { slogan: 'Totally a Pilgrim', tee: 'unisex-thanksgiving-totally-a-pilgrim-graphic-tee', crewneck: 'unisex-thanksgiving-totally-a-pilgrim-crewneck-sweatshirt',
            text: 'TOTALLY A PILGRIM sits over an engraved turkey in a black pilgrim hat with a gold buckle and a white collar, glancing sideways. It is a dry joke for dads, teachers and kids’-table veterans. The tee is a unisex cut in XS–4XL and 8 light colors.' },
          { slogan: 'Here for the Scraps', tee: 'womens-thanksgiving-here-for-the-scraps-graphic-tee', crewneck: 'womens-thanksgiving-here-for-the-scraps-crewneck-sweatshirt',
            text: 'HERE FOR THE SCRAPS is lettered above a beagle with both paws on a gingham tablecloth, eyes on the roast turkey and the pumpkin pie. It is for dog moms who slip a little turkey under the table. The tee is a relaxed women’s cut in S–3XL and 9 colors.' },
        ],
      },
      {
        h2: 'Funny Friendsgiving shirts',
        body: ['Friendsgiving is usually a potluck, so the jokes here are about pie and leftovers.'],
        items: [
          { slogan: 'Pie Oh My', tee: 'womens-thanksgiving-pie-oh-my-graphic-tee', crewneck: 'womens-thanksgiving-pie-oh-my-crewneck-sweatshirt',
            text: 'PIE OH MY is printed over a cherry lattice pie stacked on a pumpkin pie and a pecan pie. It is for the guest who brings three pies, just in case. The tee is a relaxed women’s cut in S–3XL and 8 light colors.' },
          { slogan: 'Leftovers Club', tee: 'unisex-thanksgiving-leftovers-club-graphic-tee', crewneck: 'unisex-thanksgiving-leftovers-club-crewneck-sweatshirt',
            text: 'Leftovers Club runs across a 1950s diner sign in retro script, with OPEN ALL WEEKEND underneath and a turkey sandwich stacked about a foot tall. It suits a Friendsgiving potluck, a cousins’ game night or the fridge raid the day after. The tee is a unisex cut in XS–4XL.' },
        ],
        links: [{ href: '/products/womens-thanksgiving-friendsgiving-graphic-tee/', text: 'Women’s Friendsgiving tee (the word, no joke)' }],
      },
      {
        h2: 'A funny turkey trot shirt',
        body: ['For the Thanksgiving-morning 5K, the fun run or the family walk after dinner.'],
        items: [
          { slogan: 'Turkey Trot', tee: 'unisex-thanksgiving-turkey-trot-graphic-tee', crewneck: 'unisex-thanksgiving-turkey-trot-crewneck-sweatshirt',
            text: 'TURKEY TROT arches over a turkey in a striped headband and orange running shoes, a 5K bib on its chest, with THANKSGIVING MORNING 5K underneath. The tee is soft cotton, not moisture-wicking race gear. The crewneck is for the cold start line. The tee is a unisex cut in XS–4XL.' },
        ],
      },
      {
        h2: 'A funny shirt for the family photo',
        body: ['One unisex design in a wide size range lets everyone in the photo match.'],
        items: [
          { slogan: 'Turkey Day Crew', tee: 'unisex-thanksgiving-turkey-day-crew-graphic-tee', crewneck: 'unisex-thanksgiving-turkey-day-crew-crewneck-sweatshirt',
            text: 'TURKEY DAY CREW is set in arched collegiate letters over a roast turkey on a platter, with EST. AT GRANDMA’S underneath. The tee is a unisex cut in XS–4XL and 12 light colors, and the crewneck runs S–5XL, so the whole table can wear the same art.' },
        ],
      },
      {
        h2: 'A funny shirt for the nap after dinner',
        body: ['For the person who skips the dishes.'],
        items: [
          { slogan: 'Nap Queen', tee: 'womens-thanksgiving-nap-queen-graphic-tee', crewneck: 'womens-thanksgiving-nap-queen-crewneck-sweatshirt',
            text: 'NAP QUEEN sits above a wingback armchair with a knitted throw, a tabby cat asleep on the cushion and a slice of pie on the side table. It is for the one who claims the good chair by 3 p.m. The tee is a relaxed women’s cut in S–3XL and 11 light colors.' },
        ],
        links: [{ href: '/funny-thanksgiving-shirts/', text: 'Shop funny Thanksgiving shirts' }, { href: '/thanksgiving-shirts/', text: 'All Thanksgiving shirts' }, { href: '/thanksgiving-sweatshirts/', text: 'Thanksgiving sweatshirts' }],
      },
    ],
    sections: [
      { h2: 'Prices and free shipping', body: ['Tees are $24.99 (regularly $29.99) and crewneck sweatshirts are $34.99 (regularly $39.99) in the holiday sale, which runs through November 30, 2026.', 'US shipping is free on orders of $45 or more, which is two tees, or a crewneck and a tee. Under $45, US shipping is a flat $4.95 for tees and $8.79 for crewneck sweatshirts.'] },
      { h2: 'When to order a Thanksgiving shirt so it arrives in time', body: ['Each shirt is printed after you order it, in 2–5 business days, and then arrives in about 3–8 business days. That is up to 13 business days in total.', 'Thanksgiving is Thursday, November 26, 2026. To allow for the longest estimate, order by Friday, November 6. Exact estimates show at checkout.'],
        links: [{ href: '/shipping-returns/', text: 'Shipping and returns' }] },
      { h2: 'How the tees and crewnecks fit', body: ['The unisex tees are a classic fit (Bella+Canvas 3001) in XS–4XL. The women’s tees are a relaxed women’s cut (Bella+Canvas 6400) in S–3XL. Both are 100% combed, ring-spun cotton at 4.2 oz/yd², pre-shrunk, and the heather colors contain polyester. Lighter colors on the unisex tee are slightly sheer.', 'The crewneck sweatshirts are a classic unisex fit (Gildan 18000) in 8 oz fleece, 50% cotton and 50% polyester, with a ribbed collar, cuffs and hem. They run S–5XL, depending on the color. Order your usual size, or one size up for a looser fit.', 'If the size is wrong, we send one replacement in a new size free within 30 days of delivery, and you don’t have to mail the first one back.'] },
    ],
    faqs: [
      { q: 'What are some funny sayings for Thanksgiving shirts?', a: 'The eight sayings at Graphic Tees Co. are Mash Hour, Pie Oh My, Totally a Pilgrim, Here for the Scraps, Leftovers Club (Open All Weekend), Nap Queen, Turkey Trot (Thanksgiving Morning 5K) and Turkey Day Crew (Est. at Grandma’s).' },
      { q: 'What are some good Thanksgiving family shirts?', a: 'Turkey Day Crew is made for matching: one unisex design in tee sizes XS–4XL and crewneck sizes S–5XL. Mash Hour also comes in the same unisex sizes, so a family can mix the two.' },
      { q: 'Are these Thanksgiving jokes family-friendly?', a: 'Yes. All eight jokes are about food, naps, pilgrims, dogs and the turkey trot, with no swearing or innuendo.' },
      { q: 'How much do the shirts cost?', a: 'Tees are $24.99 and crewneck sweatshirts are $34.99 in the holiday sale through November 30, 2026. US shipping is free on orders of $45 or more.' },
      { q: 'When should I order a Thanksgiving shirt?', a: 'Order by Friday, November 6, 2026. Printing takes 2–5 business days and delivery about 3–8 business days, and Thanksgiving is Thursday, November 26.' },
      { q: 'Does each design come as a sweatshirt?', a: 'Yes. All eight designs are printed on a crewneck sweatshirt as well as a tee.' },
      { q: 'What if the shirt doesn’t fit?', a: 'Within 30 days of delivery we send one replacement in a new size free, and you don’t have to mail the first one back.' },
    ],
  },
  {
    // Writer lane W (2026-10-20), hoodies cluster. Keyword: hoodies for teens, 27,100/18 (RankHero via docs/clusters.md, 2026-10-20). Draft until the director approves.
    // Planned siblings (not live yet): best-funny-hoodies-for-men, camo-hoodies-guide, how-to-pick-a-zip-up-hoodie. Picks are live A-grade hoodies only.
    slug: 'hoodies-for-teens',
    keyword: 'hoodies for teens',
    title: 'Hoodies for Teens: Funny Designs They’ll Wear',
    description: 'Funny hoodies for teens with dry one-line jokes: I Have Plans, Mile One Was a Mistake and more. Pullovers $39.99 on sale, printed to order.',
    h1: 'Hoodies for Teens: Funny Designs They’ll Actually Wear',
    date: '2026-10-20',
    cluster: 'hoodies',
    answer: 'Graphic Tees Co. sells hoodies for teens with a dry one-line joke and original art on the front, like I Have Plans over a hermit crab or Mile One Was a Mistake over a 1970s jogger. Pullover hoodies are $39.99 in the holiday sale through November 30, 2026 ($44.99 regular), and each one is printed after you order it.',
    picks: [
      {
        h2: 'Which funny hoodies work for teens?',
        body: ['Teens wear the joke they would say out loud, so these six are short, dry and a little self-aware, with no swearing. Every one is a pullover with a hood and front pouch pocket.'],
        items: [
          { slogan: 'I Have Plans', tee: 'unisex-introvert-i-have-plans-hoodie',
            text: 'I HAVE PLANS is printed in one heavy coral line over a hermit crab tucked into its shell with a tiny blanket, a book and a steaming mug beside it. The plans are staying in. It comes in Sand and Navy on a unisex pullover.' },
          { slogan: 'Plans Canceled. Mood Improved.', tee: 'unisex-homebody-plans-canceled-mood-improved-hoodie',
            text: 'PLANS CANCELED. MOOD IMPROVED. runs in two lines of bold condensed capitals around a cat melting into a blanket. It is for the moment a friend texts “rain check?” and you are secretly thrilled. It comes in Sand and Navy on a unisex pullover.' },
          { slogan: 'Mile One Was a Mistake', tee: 'unisex-running-mile-one-was-a-mistake-hoodie',
            text: 'MILE ONE WAS A MISTAKE. is set in heavy slab letters around a 1970s jogger in a sweatband and tube socks, looking back with pure regret at a plain mile marker. It suits a cross-country team or anyone who has ever started a run too fast. Unisex pullover, Sand and Navy.' },
          { slogan: 'The Neighbors Love Me', tee: 'mens-drummer-the-neighbors-love-me-hoodie',
            text: 'THE NEIGHBORS LOVE ME is the joke on a street of slammed windows around one loud garage. It is made for a drummer who practices in a cold garage. Pullover in Sand and Navy.' },
          { slogan: 'Do Not Disturb. Biscuits in Progress.', tee: 'womens-cat-making-biscuits-hoodie',
            text: 'DO NOT DISTURB. is printed in heavy cream slab letters above a fluffy calico kneading a chunky pink-and-blue knit blanket with her eyes squeezed shut, with BISCUITS IN PROGRESS. underneath in pink. Every cat person knows the kneading trance. It is listed as a women’s design on the same pullover, in Sand and Navy.' },
          { slogan: 'Sharing Is Not My Love Language', tee: 'unisex-anime-sharing-is-not-my-love-language-oversized-hoodie',
            text: 'SHARING IS NOT MY LOVE LANGUAGE sits under a round little samurai cat in full armor guarding a single dumpling in a steamer basket with chopsticks drawn like a sword. This one is the oversized heavyweight hoodie, which hangs boxy and loose, in Dust and Navy.' },
        ],
        links: [{ href: '/hoodies/', text: 'All graphic hoodies' }, { href: '/hoodies/graphic-hoodies-for-men/', text: 'Graphic hoodies for men' }, { href: '/hoodies/graphic-hoodies-for-women/', text: 'Graphic hoodies for women' }],
      },
    ],
    sections: [
      { h2: 'What kind of hoodie do teens actually wear?',
        body: ['The one they would pick off the rack: a plain color, a loose fit and one design that says something without shouting. Graphic Tees Co. hoodies are built that way, with a single original print on the front in vintage-style art and the joke in one or two lines of lettering.',
          'The pullovers launch in Sand and Navy, so the art reads on both a light and a dark hoodie. The oversized heavyweight hoodie, which is the roomier cut, launches in Dust and Navy.'],
        links: [{ href: '/hoodies/oversized-hoodies/', text: 'Oversized hoodies' }, { href: '/hoodies/anime-hoodies/', text: 'Anime-style hoodies' }] },
      { h2: 'What are the hoodies made of, and how do they fit?',
        body: ['The pullover is a Gildan 18500: 8 oz fleece, 50% cotton and 50% polyester, with a double-lined hood and a front pouch pocket. It is a regular unisex fit, so order your usual size, or one size up for a looser look.',
          'The oversized hoodie is a Bella+Canvas 4719 heavyweight cut that is made to hang loose, so most people order their usual size. Every product page lists the exact sizes and a size chart. If the size is wrong, we send one replacement in a new size free within 30 days of delivery, and you don’t have to mail the first one back.'] },
      { h2: 'How much do hoodies for teens cost?',
        body: ['Pullover hoodies are $39.99 in the holiday sale through November 30, 2026, and $44.99 after. The oversized hoodie is $54.99 on sale and $59.99 regular. From December 1 hoodies go to their regular price.',
          'US shipping is free on orders of $45 or more, so a hoodie plus a tee clears it. Each hoodie is printed after you order it, so the price covers one made-to-order piece, not a warehouse leftover.'],
        links: [{ href: '/shipping-returns/', text: 'Shipping and returns' }] },
      { h2: 'When should you order a hoodie so it arrives for Christmas?',
        body: ['Order by Friday, December 4, 2026 to leave a margin. Printing takes 2–5 business days and delivery about 3–8 business days, which is up to 13 business days in total, and Christmas is Friday, December 25. Exact estimates show at checkout.',
          'Order before November 30 and the sale price holds. If you are buying for a group of friends or a team, there is a crew order discount on the group shirts page.'],
        links: [{ href: '/group-shirts/', text: 'Group and crew orders' }] },
      { h2: 'How do you style a graphic hoodie?',
        body: ['Keep the rest of the outfit plain and let the print lead: jeans or joggers and clean sneakers. Wear it over a tee on cold mornings, and wear the tee underneath so you can shed the hoodie when the room warms up.',
          'We have a full guide on getting the rest of the outfit right.'],
        links: [{ href: '/guides/how-to-style-graphic-tees/', text: 'How to style graphic tees' }, { href: '/guides/how-to-wash-graphic-tees/', text: 'How to wash graphic tees so the print lasts' }] },
    ],
    faqs: [
      { q: 'What are good hoodies for teens?', a: 'Graphic Tees Co. makes pullover hoodies with one funny line and original art, like I Have Plans, Mile One Was a Mistake and Plans Canceled. Mood Improved. Pullovers are $39.99 in the holiday sale through November 30, 2026, printed after you order.' },
      { q: 'What funny hoodies can a teen wear to school?', a: 'The six designs on this page have no swearing or innuendo, just dry jokes about staying in, running, cats and drumming. School dress codes differ, so check yours before ordering.' },
      { q: 'How much are hoodies for teens?', a: 'Pullover hoodies at Graphic Tees Co. are $39.99 in the holiday sale through November 30, 2026 and $44.99 regular. The oversized hoodie is $54.99 on sale and $59.99 regular. US shipping is free on orders of $45 or more.' },
      { q: 'What size hoodie should I order for a teen?', a: 'Compare the size chart on the product page with a hoodie they already wear. The pullover is a regular unisex fit, so order the usual size, or one size up for a looser look. If it is wrong, one replacement in a new size is free within 30 days.' },
      { q: 'When should I order a hoodie for Christmas?', a: 'Order by Friday, December 4, 2026. Printing takes 2–5 business days and delivery about 3–8 business days, up to 13 business days in total, and Christmas is Friday, December 25.' },
      { q: 'What are the hoodies made of?', a: 'The pullover is an 8 oz fleece that is 50% cotton and 50% polyester, with a double-lined hood and a front pouch pocket. The oversized one is a heavyweight Bella+Canvas 4719 cut that hangs loose.' },
    ],
  },
  {
    // Writer lane W (2026-10-20), hoodies cluster. Keyword: funny hoodies, 2,900 / KD 51 (RankHero keyword page, 2026-10-20). Unowned in docs/product-keyword-map.json and src/data/collections.ts. Draft until the director approves.
    // Planned siblings (not live yet): best-funny-hoodies-for-men, camo-hoodies-guide, how-to-pick-a-zip-up-hoodie. Picks are live A-grade hoodies only; each description was checked against its pipeline file on 2026-10-20.
    slug: 'funny-hoodies',
    keyword: 'funny hoodies',
    title: 'Funny Hoodies: Dry One-Line Jokes, Original Art',
    description: 'Funny hoodies with one dry line and original art: Sisyphus Had Bad Programming, Lone Wolf. Early Bedtime. and more. Pullovers $39.99 on sale.',
    h1: 'Funny Hoodies With One Good Line and Art Worth Wearing',
    date: '2026-10-20',
    cluster: 'hoodies',
    answer: 'Funny hoodies work when the joke is one dry line the wearer already says out loud. Graphic Tees Co. prints original art with a single line on the front of a pullover hoodie, like Sisyphus Had Bad Programming or Lone Wolf. Early Bedtime. Pullovers are $39.99 in the holiday sale through November 30, 2026 ($44.99 regular), printed after you order.',
    picks: [
      {
        h2: 'Which funny hoodies are worth buying?',
        body: ['These six are live today. Each one is a pullover with a hood and a front pouch pocket, with the joke in big letters so it reads from across the room. Every line is a complaint, a boast or an excuse the wearer would actually say.'],
        items: [
          { slogan: 'Sisyphus Had Bad Programming', tee: 'mens-gym-sisyphus-had-bad-programming-hoodie',
            text: 'SISYPHUS HAD / BAD PROGRAMMING sits over a Greek-vase figure rolling a weight plate uphill, printed in black and terracotta ink. It is for the lifter who has opinions about your split. Sand and Ash.' },
          { slogan: 'No, I Can’t Just Take a Quick Look', tee: 'mens-mechanic-no-i-cant-just-take-a-quick-look-hoodie',
            text: 'NO, I CAN’T JUST / TAKE A QUICK LOOK. is set heavy, with the punchline in red, around a mechanic and a line of people holding out their keys. Anyone who fixes things for a living knows the line. Sand and Navy.' },
          { slogan: 'Lone Wolf. Early Bedtime.', tee: 'mens-wolf-lone-wolf-early-bedtime-hoodie',
            text: 'LONE WOLF. in brick red and EARLY BEDTIME. in navy sit over a grey wolf asleep on a rock under a patchwork quilt, nightcap on, with a big soft moon behind him. It is the howling-wolf shirt for someone who is in bed by nine. Sand and Sport Grey.' },
          { slogan: 'Technically Still Fishing', tee: 'mens-fishing-technically-still-fishing-hoodie',
            text: 'TECHNICALLY STILL FISHING is arched in big worn capitals over a man dozing on a dock at sunrise while a bass jumps right past his line. It is the angler’s excuse for a nap at the lake. Sand and Navy.' },
          { slogan: 'Calm Face. Loud Brain.', tee: 'unisex-nurse-calm-face-loud-brain-hoodie',
            text: 'CALM FACE. / LOUD BRAIN. runs under a heart-rate line that tangles into a scribble, in red and cream line art. It is a unisex design for anyone who looks unbothered while their head runs six alarms. Sand and Navy.' },
          { slogan: 'If You Can Step Over It, I Can Fill It', tee: 'mens-welder-if-you-can-step-over-it-hoodie',
            text: 'IF YOU CAN / STEP OVER IT is in cream capitals above a 1950s welder with his arms crossed beside two steel beams, and I CAN FILL IT. closes the joke below. The cream letters need a dark hoodie, so it comes in Navy and Dark Heather. It is casual wear, not welding protection.' },
        ],
        links: [{ href: '/hoodies/', text: 'All graphic hoodies' }, { href: '/hoodies/graphic-hoodies-for-men/', text: 'Graphic hoodies for men' }, { href: '/hoodies/gym-hoodies/', text: 'Gym hoodies' }, { href: '/hoodies/fishing-hoodies/', text: 'Fishing hoodies' }],
      },
    ],
    sections: [
      { h2: 'What makes a hoodie funny instead of corny?',
        body: ['A funny hoodie states one thing the wearer already says, in as few words as possible, and lets the art finish the joke. “Early bedtime” works because every adult has defended theirs. “Live, laugh, love” does not, because nobody says it out loud.',
          'Every design at Graphic Tees Co. is original art with the line printed large on the front, so a stranger gets the joke in a few seconds without a backstory. We do not use movie quotes or other people’s logos.'],
        links: [{ href: '/hoodies/graphic-hoodies-for-men/', text: 'Browse graphic hoodies for men' }] },
      { h2: 'What are Graphic Tees Co. hoodies made of?',
        body: ['The pullover is a Gildan 18500: 8 oz fleece that is 50% cotton and 50% polyester, with a double-lined hood and a front pouch pocket. It is a regular unisex fit, so order your usual size, or one size up for a looser look.',
          'Sizes on these hoodies run S–3XL. Every product page lists the exact sizes and a size chart. If the size is wrong, we send one replacement in a new size free within 30 days of delivery, and you don’t have to mail the first one back.'],
        links: [{ href: '/hoodies/heavyweight-hoodies/', text: 'Heavyweight hoodies' }, { href: '/shipping-returns/', text: 'Shipping and returns' }] },
      { h2: 'How much do funny hoodies cost?',
        body: ['Pullover hoodies are $39.99 in the holiday sale through November 30, 2026, and $44.99 after. Heavyweight and oversized hoodies cost more, and their prices are on each product page.',
          'US shipping is free on orders of $45 or more, so one hoodie clears it. Each hoodie is printed after you order it, so the price covers one made-to-order piece.'] },
      { h2: 'Which funny hoodie fits which person?',
        body: ['Match the joke to the person’s job or habit. The gym line suits a lifter, the quick-look line a mechanic or anyone who gets asked for free favors, and the fishing line an angler who naps at the lake. The wolf suits anyone who leaves the party early.',
          'For hoodies built around one hobby, the sub-pages group them by interest.'],
        links: [{ href: '/hoodies/gym-hoodies/', text: 'Gym hoodies' }, { href: '/hoodies/fishing-hoodies/', text: 'Fishing hoodies' }, { href: '/hoodies/golf-hoodies/', text: 'Golf hoodies' }, { href: '/guides/hoodies-for-teens/', text: 'Hoodies for teens' }] },
      { h2: 'When should you order a funny hoodie for Christmas?',
        body: ['Order by Friday, December 4, 2026 to leave a margin. Printing takes 2–5 business days and delivery about 3–8 business days, up to 13 business days in total, and Christmas is Friday, December 25. Exact estimates show at checkout.',
          'Order before November 30 and the sale price holds.'] },
      { h2: 'How do you keep the print looking good?',
        body: ['Turn the hoodie inside out, wash it cold and tumble dry low. That keeps the ink from cracking or fading. We have a full guide on washing printed shirts, and the same steps apply to hoodies.'],
        links: [{ href: '/guides/how-to-wash-graphic-tees/', text: 'How to wash graphic tees so the print lasts' }, { href: '/guides/how-to-style-graphic-tees/', text: 'How to style graphic tees' }] },
    ],
    faqs: [
      { q: 'What are the best funny hoodies?', a: 'The funniest hoodies state one thing the wearer already says, like Lone Wolf. Early Bedtime. or No, I Can’t Just Take a Quick Look. Graphic Tees Co. prints original art with that one line on a pullover hoodie, $39.99 in the holiday sale through November 30, 2026.' },
      { q: 'Where can I buy funny hoodies with original designs?', a: 'Graphic Tees Co. sells funny hoodies with original art, not memes or borrowed logos. Each one is printed after you order it. Pullovers are $39.99 on sale and $44.99 regular, and US shipping is free on orders of $45 or more.' },
      { q: 'What size funny hoodie should I order?', a: 'Compare the size chart on the product page with a hoodie you already wear. The pullover is a regular unisex fit, so order your usual size, or one size up for a looser look. If it is wrong, one replacement in a new size is free within 30 days.' },
      { q: 'What are the hoodies made of?', a: 'The pullover is a Gildan 18500: an 8 oz fleece that is 50% cotton and 50% polyester, with a double-lined hood and a front pouch pocket. Heavyweight and oversized styles are thicker or roomier, and each product page says which blank it uses.' },
      { q: 'Is a funny hoodie a good gift?', a: 'Yes, if the joke matches the person’s job or hobby, like the gym, fishing or mechanic lines on this page. One free size exchange within 30 days covers a size guess. Order by Friday, December 4, 2026 for Christmas.' },
      { q: 'How long does a funny hoodie take to arrive?', a: 'Each hoodie is printed after you order it. Printing takes 2–5 business days and delivery about 3–8 business days, up to 13 business days in total. Exact delivery estimates show at checkout.' },
    ],
  },
  {
    // Writer lane W (2026-10-20 run), hoodies cluster. Keyword: aesthetic hoodies, 8,100 / KD 35 (RankHero keyword page, 2026-10-20). Unowned in docs/product-keyword-map.json and src/data/collections.ts. Draft until the director approves.
    // Planned siblings (not live yet): best-funny-hoodies-for-men, camo-hoodies-guide, how-to-pick-a-zip-up-hoodie. Picks checked against live Shopify listings (get-product) on 2026-10-20, not old briefs.
    slug: 'aesthetic-hoodies',
    keyword: 'aesthetic hoodies',
    title: 'Aesthetic Hoodies: Vintage-Style Art, Soft Colors',
    description: 'Aesthetic hoodies with vintage-style art in soft colors: a sleeping mothman, a soaking capybara and more. Pullovers $39.99 on sale, made to order.',
    h1: 'Aesthetic Hoodies: Vintage-Style Art, Soft Colors, One Dry Line',
    date: '2026-10-20',
    cluster: 'hoodies',
    draft: true,
    answer: 'An aesthetic hoodie is a hoodie chosen for its look: a soft color, a simple shape and one piece of art that sets a mood. Graphic Tees Co. makes them as original vintage-style screen-print illustrations, like a sleeping mothman or a capybara soaking in a hot spring, in Sand, Dust, Navy and other soft colors. Pullovers are $39.99 in the holiday sale through November 30, 2026 ($44.99 regular), and each one is printed after you order it.',
    picks: [
      {
        h2: 'Which aesthetic hoodies does Graphic Tees Co. sell?',
        body: ['“Aesthetic” means different things to different people, so here is ours: a muted color, a quiet scene drawn like a 1970s screen print and a short line of lettering. These six are live now. Each one is original art made for Graphic Tees Co.'],
        items: [
          { slogan: 'Sightings By Appointment Only.', tee: 'unisex-mothman-light-sleeper-hoodie',
            text: 'A mothman sleeps wrapped in its red-veined wings around a glowing porch lamp, red eyes shut and a little grey nightcap on its head, with feathers and stars drifting by. It is cream and mustard lettering on Navy and dark red and slate teal on Sand. Classic pullover, $39.99.' },
          { slogan: 'Per My Last Email, I’m Soaking.', tee: 'womens-capybara-out-of-office-soaking-oversized-hoodie',
            text: 'A calm capybara sits up to its chin in a steaming hot spring ringed with smooth stones, a small mandarin orange balanced on its head. It is drawn in warm brown, terracotta, sage and cream on the oversized hoodie, in Dust and Navy. $54.99.' },
          { slogan: 'I’m Fine. Just a Little Rain.', tee: 'womens-axolotl-smiling-through-it-oversized-hoodie',
            text: 'A pink axolotl grins in a striped teacup while a storm cloud rains on its head and a few small daisies sit around the cup. It is drawn in axolotl pink, sage, mustard and cream on the oversized hoodie, in Dust and Navy. $54.99.' },
          { slogan: 'University of Staying In', tee: 'unisex-homebody-university-of-staying-in-oversized-hoodie',
            text: 'A worn armchair with a patterned knit blanket, a steaming mug on a small round table and a pair of fuzzy slippers, under EST. WHENEVER. The oversized hoodie comes in Navy and Asphalt, a soft mid grey. $54.99.' },
          { slogan: 'Don’t Talk to Me. I’m Counting.', tee: 'womens-knitting-one-more-row-hoodie',
            text: 'A floral armchair, a lamp, a mantel clock and a tabby cat asleep on a basket of yarn, with a half-knit striped scarf on the floor. It is red and navy lettering on an 8 oz pullover in Sand or Light Pink. $39.99.' },
          { slogan: 'On My Own Time', tee: 'womens-embroidered-on-my-own-time-snail-hoodie',
            text: 'This one is embroidered, not printed: a small snail with a spiral shell is stitched in navy thread on the chest above the words “on my own time”, and the word “eventually” is stitched on the left cuff. Sand or Light Pink pullover, $47.99.' },
        ],
        links: [{ href: '/hoodies/', text: 'All graphic hoodies' }, { href: '/hoodies/graphic-hoodies-for-women/', text: 'Graphic hoodies for women' }, { href: '/hoodies/capybara-hoodies/', text: 'Capybara hoodies' }],
      },
    ],
    sections: [
      { h2: 'What makes a hoodie aesthetic?',
        body: ['There is no official rule, but the look comes down to three things: a calm color, a clean shape and one picture that sets a mood. The art does the work, so the hoodie itself stays plain.',
          'At Graphic Tees Co. that means a single illustration drawn in a few muted inks, like a 1970s screen print, with the joke in one or two lines of lettering. There are no logos and no borrowed characters.'],
        links: [{ href: '/hoodies/', text: 'Browse all hoodies' }] },
      { h2: 'What colors look best on an aesthetic hoodie?',
        body: ['Soft, light or muted colors show the illustration best. The hoodies on this page come in Sand, Dust, Light Pink, Asphalt and Navy, and each color has its own photo on the product page.',
          'The colors were picked to fit the art. The University of Staying In listing says the cream and orange lettering needs a darker fabric, so it comes in Navy and Asphalt. The knitting hoodie’s black linework and red and navy lettering need a light fabric, so it comes in Sand and Light Pink.'] },
      { h2: 'Should you pick a pullover, an oversized hoodie or an embroidered one?',
        body: ['Pick the pullover for a classic fit, the oversized hoodie for a roomy boxy one and the embroidered one if you like stitching more than ink. The pullover is a classic unisex fit in 8 oz fleece, 50% cotton and 50% polyester, with a double-lined hood and a front pouch pocket.',
          'The oversized hoodie is a 10 oz fleece, 60% combed ring-spun cotton and 40% polyester, with a brushed interior, a double-layered hood without a drawcord and a front pocket. It is cut roomy on purpose, so keep your usual size for the slouchy look or size down one for a closer fit. The embroidered snail hoodie uses the same 8 oz pullover blank, with the design stitched in navy thread.'],
        links: [{ href: '/hoodies/oversized-hoodies/', text: 'Oversized hoodies' }, { href: '/hoodies/embroidered-hoodies/', text: 'Embroidered hoodies' }] },
      { h2: 'How much do aesthetic hoodies cost?',
        body: ['Pullover hoodies are $39.99 in the holiday sale through November 30, 2026 and $44.99 after. Oversized hoodies are $54.99 on sale and $59.99 regular. The embroidered snail hoodie is $47.99.',
          'US shipping is free on orders of $45 or more, so any hoodie here clears it. Each one is printed or stitched after you order it, so you are buying one made-to-order piece.'],
        links: [{ href: '/shipping-returns/', text: 'Shipping and returns' }] },
      { h2: 'How do you style an aesthetic hoodie?',
        body: ['Keep everything else plain so the picture leads. Jeans, leggings or joggers and clean sneakers work with every hoodie on this page, and the oversized ones sit well over leggings.',
          'We also have a guide to the rest of the outfit, and one on keeping the print looking good wash after wash.'],
        links: [{ href: '/guides/how-to-style-graphic-tees/', text: 'How to style graphic tees' }, { href: '/guides/how-to-wash-graphic-tees/', text: 'How to wash graphic tees so the print lasts' }] },
      { h2: 'Are these hoodies good for teens and for gifts?',
        body: ['Yes, the jokes are dry and family-clean. If you are buying for a teen, our guide to hoodies for teens has a different set of designs, and our funny hoodies guide covers the joke-first ones.',
          'For Christmas, order by Friday, December 4, 2026. Printing takes 2–5 business days and delivery about 3–8 business days, up to 13 business days in total. If the size is wrong, one replacement in a new size is free within 30 days of delivery, and you do not mail the first one back.'],
        links: [{ href: '/guides/hoodies-for-teens/', text: 'Hoodies for teens' }, { href: '/guides/funny-hoodies/', text: 'Funny hoodies' }] },
    ],
    faqs: [
      { q: 'What is an aesthetic hoodie?', a: 'It is a hoodie chosen for its look: a soft color, a simple shape and one illustration that sets a mood. Graphic Tees Co. makes them with original vintage-style art in colors like Sand, Dust and Navy. Pullovers are $39.99 in the holiday sale through November 30, 2026.' },
      { q: 'What are the best aesthetic hoodies?', a: 'The ones where the art and the color agree. At Graphic Tees Co., try Sightings By Appointment Only (a sleeping mothman, $39.99) or Per My Last Email, I’m Soaking (a capybara in a hot spring, $54.99 oversized). Each is printed after you order it.' },
      { q: 'What colors do aesthetic hoodies come in?', a: 'The hoodies on this page come in Sand, Dust, Light Pink, Asphalt and Navy. Each design is offered in two colors picked to keep its lettering and linework readable, and each color has its own photo on the product page.' },
      { q: 'Are oversized hoodies more aesthetic?', a: 'Not always, but many people like the slouchy shape. The Graphic Tees Co. oversized hoodie is a 10 oz fleece cut roomy on purpose, $54.99 on sale. Keep your usual size for the boxy look or size down one for a closer fit.' },
      { q: 'How much are aesthetic hoodies?', a: 'Graphic Tees Co. pullovers are $39.99 in the holiday sale through November 30, 2026 and $44.99 regular. Oversized hoodies are $54.99 on sale and $59.99 regular. The embroidered snail hoodie is $47.99. US shipping is free on orders of $45 or more.' },
      { q: 'When should I order an aesthetic hoodie for Christmas?', a: 'Order by Friday, December 4, 2026. Graphic Tees Co. prints each hoodie after you order, which takes 2–5 business days, and delivery takes about 3–8 business days, up to 13 business days in total. Christmas is Friday, December 25.' },
    ],
  },
];

// Only approved guides are built and linked.
export const guides: Guide[] = allGuides.filter((g) => !g.draft);
