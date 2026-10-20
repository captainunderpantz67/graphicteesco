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
];

// Only approved guides are built and linked.
export const guides: Guide[] = allGuides.filter((g) => !g.draft);
