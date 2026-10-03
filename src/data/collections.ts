// Collection pages. Keyword data: RankHero estimates pulled 2026-10-02
// (see ~/.claude/data/local-seo/reports/2026-10-02-graphic-tee-collections.md).
// Order within each section = easiest to rank first (build order).

export type Section = 'tees' | 'hoodies';

export interface Collection {
  slug: string; // URL segment, keyword-matched
  section: Section;
  name: string; // short nav label
  keyword: string; // primary target keyword
  volume: number; // est. US monthly searches
  kd: number; // difficulty /100
  seasonal?: 'halloween' | 'thanksgiving' | 'christmas';
  title: string; // <title>, ~60 chars
  description: string; // meta description, ~155 chars
  h1: string;
  intro: string; // direct answer, 2–3 sentences
  sections: { h2: string; body: string }[];
  faqs: { q: string; a: string }[];
  shopifyHandle: string; // Shopify collection handle to pull products from
  twin?: string; // slug of the matching tee/hoodie collection
}

type Niche = {
  key: string;
  label: string; // "fishing"
  who: string; // who it's for
  themes: string; // what the designs are about
};

const N: Record<string, Niche> = {
  fishing: { key: 'fishing', label: 'Fishing', who: 'anglers who fish lakes, rivers and the coast', themes: 'bass, catfish and redfish art, lake-life humor and early-morning-on-the-water scenes' },
  hunting: { key: 'hunting', label: 'Hunting', who: 'hunters who spend opening weekend in a blind or a stand', themes: 'whitetail, duck and turkey art, deer-camp humor and dawn-in-the-field scenes' },
  western: { key: 'western', label: 'Western', who: 'people who grew up around ranches, rodeos and dirt roads', themes: 'cowboy, desert and rodeo art with a worn-in, vintage feel' },
  gym: { key: 'gym', label: 'Gym', who: 'lifters who train early and train often', themes: 'barbell, plate and grind-culture art with gym humor' },
  football: { key: 'football', label: 'Football', who: 'fans who plan their weekends around kickoff', themes: 'game-day, tailgate and Friday-night-lights art — original designs, no team marks' },
  soccer: { key: 'soccer', label: 'Soccer', who: 'players and fans of the beautiful game', themes: 'pitch, boot and match-day art — original designs, no club marks' },
  anime: { key: 'anime', label: 'Anime-Style', who: 'fans of anime and manga art styles', themes: 'original anime-style characters and scenes — no licensed characters' },
  y2k: { key: 'y2k', label: 'Y2K', who: 'anyone into early-2000s style', themes: 'chrome type, bubble letters and baby-tee-era graphics' },
  vintage: { key: 'vintage', label: 'Vintage', who: 'people who dig through thrift racks for the perfect worn-in tee', themes: 'retro type, faded colorways and 70s–90s-inspired art' },
  heavyweight: { key: 'heavyweight', label: 'Heavyweight', who: 'anyone who wants a thick hoodie that holds its shape', themes: 'our original designs printed on a heavier blank' },
  zipup: { key: 'zipup', label: 'Zip-Up', who: 'anyone who wants a hoodie they can throw on over anything', themes: 'our original designs on full-zip hoodies' },
  oversized: { key: 'oversized', label: 'Oversized', who: 'anyone who wants a relaxed, boxy fit', themes: 'big front and back prints made for a roomy fit' },
};

const pd = (n: Niche, product: string) =>
  `Every ${product} in this collection is an original design, printed when you order it. ` +
  `That means no warehouse of leftovers — and designs we can keep adding to every month.`;

function niche(
  n: Niche,
  section: Section,
  o: { slug: string; keyword: string; volume: number; kd: number; product: string; twin?: string; extraFaq?: { q: string; a: string }[] },
): Collection {
  const P = o.product; // e.g. "fishing shirts"
  const Pc = P.replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    slug: o.slug,
    section,
    name: `${n.label} ${section === 'hoodies' ? 'Hoodies' : 'Tees'}`,
    keyword: o.keyword,
    volume: o.volume,
    kd: o.kd,
    title: `${Pc} — Original Graphic Designs`,
    description: `Original ${P} for ${n.who}. ${n.themes.charAt(0).toUpperCase() + n.themes.slice(1)}. Printed to order.`.slice(0, 158),
    h1: Pc,
    intro: `Our ${P} are original graphic designs for ${n.who}. Expect ${n.themes}.`,
    sections: [
      { h2: `What makes these ${P} different?`, body: pd(n, section === 'hoodies' ? 'hoodie' : 'shirt') },
      {
        h2: section === 'hoodies' ? `Same designs as our ${n.label.toLowerCase()} tees` : `Want it warmer? It comes as a hoodie too`,
        body:
          section === 'hoodies'
            ? `Every design here started as a tee. If you like it, you can wear it all year: grab the tee for summer and the hoodie when it turns cold.`
            : `Every design in this collection is also printed on hoodies, so the same art works when the weather turns.`,
      },
    ],
    faqs: [
      { q: `Are these ${P} original designs?`, a: `Yes. Every design is drawn for this shop. We don't resell stock art or licensed characters.` },
      { q: `How are the ${P} made?`, a: `Each one is printed when you order it, then shipped to you. Nothing sits in a warehouse.` },
      ...(o.extraFaq ?? []),
    ],
    shopifyHandle: o.slug,
    twin: o.twin,
  };
}

function seasonal(
  season: 'halloween' | 'thanksgiving' | 'christmas',
  section: Section,
  o: { slug: string; keyword: string; volume: number; kd: number; product: string; twin?: string; blurb: string },
): Collection {
  const label = season.charAt(0).toUpperCase() + season.slice(1);
  const Pc = o.product.replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    slug: o.slug,
    section,
    name: `${label} ${section === 'hoodies' ? 'Hoodies' : 'Tees'}`,
    keyword: o.keyword,
    volume: o.volume,
    kd: o.kd,
    seasonal: season,
    title: `${Pc} — Original ${label} Graphic Designs`,
    description: `Original ${o.product}: ${o.blurb} Printed to order — new designs every season.`.slice(0, 158),
    h1: Pc,
    intro: `Our ${o.product} are original designs: ${o.blurb}`,
    sections: [{ h2: `A new ${label} drop every year`, body: `This collection gets new designs each season. Order early — printed-to-order items take time to make and ship.` }],
    faqs: [
      { q: `When should I order ${o.product}?`, a: `Order a couple of weeks ahead of the day you need it. Each item is printed after you order.` },
      { q: `Are these designs licensed characters?`, a: `No. Every design is original art made for this shop.` },
    ],
    shopifyHandle: o.slug,
    twin: o.twin,
  };
}

export const tees: Collection[] = [
  {
    slug: 'graphic-tees-for-women',
    section: 'tees',
    name: "Women's Graphic Tees",
    keyword: 'graphic tees for women',
    volume: 27100,
    kd: 9,
    title: 'Graphic Tees for Women — Original Designs',
    description: 'Original graphic tees for women: fishing, western, vintage and seasonal designs. Printed to order, with new collections every month.',
    h1: 'Graphic Tees for Women',
    intro: 'Original graphic tees for women, from lake-day fishing art to western and vintage designs. New collections drop every month.',
    sections: [
      { h2: 'Shop by what you love', body: 'Fishing, western, gym, vintage and seasonal drops — every collection is original art, not stock graphics.' },
      { h2: 'Printed when you order', body: 'Each tee is printed after you order it, so we can keep the catalog growing without leftovers.' },
    ],
    faqs: [
      { q: 'Are these graphic tees original designs?', a: 'Yes. Every design is made for this shop — no licensed characters or resold stock art.' },
      { q: 'Do the designs come on hoodies too?', a: 'Yes. Most designs are also printed on hoodies, so the same art works when it gets cold.' },
    ],
    shopifyHandle: 'graphic-tees-for-women',
  },
  niche(N.gym, 'tees', { slug: 'mens-gym-shirts', keyword: 'mens gym shirts', volume: 18100, kd: 10, product: "men's gym shirts", twin: 'gym-hoodies' }),
  niche(N.western, 'tees', { slug: 'western-graphic-tees', keyword: 'western graphic tees', volume: 2400, kd: 16, product: 'western graphic tees', twin: 'western-hoodies',
    extraFaq: [{ q: 'Do you have cowboy shirts?', a: 'Yes — this collection covers cowboy and western graphic tees: rodeo, ranch and desert designs.' }] }),
  niche(N.fishing, 'tees', { slug: 'fishing-shirts', keyword: 'fishing shirts', volume: 40500, kd: 44, product: 'fishing shirts', twin: 'fishing-hoodies',
    extraFaq: [{ q: 'Do you have funny fishing shirts?', a: 'Yes. Plenty of the designs lean into lake-life and fishing humor.' }] }),
  niche(N.hunting, 'tees', { slug: 'hunting-shirts', keyword: 'hunting shirts', volume: 14800, kd: 44, product: 'hunting shirts', twin: 'hunting-hoodies' }),
  niche(N.soccer, 'tees', { slug: 'soccer-shirts', keyword: 'soccer shirts', volume: 14800, kd: 46, product: 'soccer shirts' }),
  niche(N.oversized, 'tees', { slug: 'oversized-graphic-tees', keyword: 'oversized graphic tee', volume: 27100, kd: 48, product: 'oversized graphic tees', twin: 'oversized-hoodies' }),
  niche(N.football, 'tees', { slug: 'football-shirts', keyword: 'football shirts', volume: 74000, kd: 51, product: 'football shirts' }),
  niche(N.anime, 'tees', { slug: 'anime-shirts', keyword: 'anime shirts', volume: 18100, kd: 51, product: 'anime-style shirts', twin: 'anime-hoodies' }),
  niche(N.y2k, 'tees', { slug: 'y2k-graphic-tees', keyword: 'y2k graphic tees', volume: 4400, kd: 52, product: 'Y2K graphic tees', twin: 'y2k-hoodies' }),
  niche(N.vintage, 'tees', { slug: 'vintage-graphic-tees', keyword: 'vintage graphic tees', volume: 22200, kd: 57, product: 'vintage graphic tees' }),
  {
    slug: 'graphic-tees-for-men',
    section: 'tees',
    name: "Men's Graphic Tees",
    keyword: 'graphic tees for men',
    volume: 90500,
    kd: 64,
    title: 'Graphic Tees for Men — Original Designs',
    description: 'Original graphic tees for men: fishing, hunting, western, gym and seasonal designs. Printed to order, with new collections every month.',
    h1: 'Graphic Tees for Men',
    intro: 'Original graphic tees for men — fishing, hunting, western, gym and seasonal designs. New collections drop every month.',
    sections: [
      { h2: 'Shop by what you do', body: 'Pick the collection that fits your weekends: the lake, the deer stand, the gym or the ranch.' },
      { h2: 'Printed when you order', body: 'Each tee is printed after you order it, so the catalog keeps growing without leftovers.' },
    ],
    faqs: [
      { q: 'Are these graphic tees original designs?', a: 'Yes. Every design is made for this shop — no licensed characters or resold stock art.' },
      { q: 'Do the designs come on hoodies too?', a: 'Yes. Most designs are also printed on hoodies.' },
    ],
    shopifyHandle: 'graphic-tees-for-men',
  },
  // Seasonal, calendar order
  seasonal('halloween', 'tees', { slug: 'halloween-shirts', keyword: 'halloween shirts', volume: 22200, kd: 58, product: 'Halloween shirts', twin: 'halloween-hoodies', blurb: 'horror-movie-night, spooky-season and costume-optional designs.' }),
  seasonal('thanksgiving', 'tees', { slug: 'thanksgiving-shirts', keyword: 'thanksgiving shirts', volume: 8100, kd: 57, product: 'Thanksgiving shirts', blurb: 'fall, football-and-turkey and family-table designs.' }),
  seasonal('christmas', 'tees', { slug: 'christmas-shirts', keyword: 'christmas shirts', volume: 33100, kd: 58, product: 'Christmas shirts', twin: 'christmas-hoodies', blurb: 'holiday designs that work for the party, the family photo and the gift exchange.' }),
];

export const hoodies: Collection[] = [
  niche(N.heavyweight, 'hoodies', { slug: 'heavyweight-hoodies', keyword: 'heavyweight hoodie', volume: 14800, kd: 20, product: 'heavyweight hoodies' }),
  niche(N.zipup, 'hoodies', { slug: 'zip-up-hoodies', keyword: 'zip-up hoodie', volume: 135000, kd: 28, product: 'zip-up hoodies' }),
  niche(N.fishing, 'hoodies', { slug: 'fishing-hoodies', keyword: 'fishing hoodie', volume: 6600, kd: 30, product: 'fishing hoodies', twin: 'fishing-shirts' }),
  niche(N.gym, 'hoodies', { slug: 'gym-hoodies', keyword: 'gym hoodie', volume: 18100, kd: 30, product: 'gym hoodies', twin: 'mens-gym-shirts' }),
  niche(N.hunting, 'hoodies', { slug: 'hunting-hoodies', keyword: 'hunting hoodie', volume: 3600, kd: 32, product: 'hunting hoodies', twin: 'hunting-shirts' }),
  niche(N.western, 'hoodies', { slug: 'western-hoodies', keyword: 'western hoodie', volume: 3600, kd: 36, product: 'western hoodies', twin: 'western-graphic-tees',
    extraFaq: [{ q: 'Do you have cowboy hoodies?', a: 'Yes — this collection covers cowboy and western hoodies.' }] }),
  niche(N.y2k, 'hoodies', { slug: 'y2k-hoodies', keyword: 'y2k hoodie', volume: 14800, kd: 35, product: 'Y2K hoodies', twin: 'y2k-graphic-tees' }),
  niche(N.oversized, 'hoodies', { slug: 'oversized-hoodies', keyword: 'oversized hoodie', volume: 165000, kd: 38, product: 'oversized hoodies', twin: 'oversized-graphic-tees' }),
  niche(N.anime, 'hoodies', { slug: 'anime-hoodies', keyword: 'anime hoodie', volume: 22200, kd: 38, product: 'anime-style hoodies', twin: 'anime-shirts' }),
  seasonal('halloween', 'hoodies', { slug: 'halloween-hoodies', keyword: 'halloween hoodie', volume: 5400, kd: 48, product: 'Halloween hoodies', twin: 'halloween-shirts', blurb: 'horror-movie-night and spooky-season designs for cold October nights.' }),
  seasonal('christmas', 'hoodies', { slug: 'christmas-hoodies', keyword: 'christmas hoodie', volume: 9900, kd: 52, product: 'Christmas hoodies', twin: 'christmas-shirts', blurb: 'holiday designs warm enough for the tree lot and the family photo.' }),
];

export const all = [...tees, ...hoodies];
export const pathFor = (c: Collection) => (c.section === 'hoodies' ? `/hoodies/${c.slug}/` : `/${c.slug}/`);
export const bySlug = (slug: string) => all.find((c) => c.slug === slug);
