// Collection pages. Keyword data: RankHero estimates pulled 2026-10-02
// (see ~/.claude/data/local-seo/reports/2026-10-02-graphic-tee-collections.md).
// FAQ questions come from real Google autocomplete phrasing for each keyword (2026-10-02).
// Answers are facts-only: anything depending on an unconfirmed fact uses `needs`
// and stays hidden until that fact is set in site.ts.
// Order within each section = easiest to rank first (build order).
import type { Faq } from './site';

export type Section = 'tees' | 'hoodies';

export interface Collection {
  slug: string;
  section: Section;
  audience?: 'women' | 'men';
  name: string;
  keyword: string;
  volume: number; // est. US monthly searches (0 = no data)
  kd: number;
  seasonal?: 'halloween' | 'thanksgiving' | 'christmas';
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: { h2: string; body: string }[];
  faqs: Faq[];
  shopifyHandle: string;
  twin?: string;
}

type Niche = { label: string; who: string; themes: string; style?: string; faqs?: (P: string, section: Section) => Faq[] };

// Questions every product-type page can carry, phrased from autocomplete ("for men", "for women", "for kids", "3xl"…)
const audienceFaqs = (P: string): Faq[] => [
  { q: `Do you have ${P} for women?`, a: (f) => `Yes. Every design is available in a women's fit${f.sizeRange ? `, sizes ${f.sizeRange}` : ''}.`, needs: 'womensFit' },
  { q: `Do you have ${P} for kids?`, a: `Yes. Most designs also come in kids' sizes.`, needs: 'kidsSizes' },
  { q: `What sizes do your ${P} come in?`, a: (f) => `Sizes run ${f.sizeRange}. Check the size chart on each product before you order.`, needs: 'sizeRange' },
];

const N: Record<string, Niche> = {
  fishing: {
    style: "How to wear a fishing t-shirt: on the boat with board shorts and a cap, at the bait shop with jeans, or layered under an open flannel when the morning's cold. Because they're cotton graphic tees rather than performance shirts, they work just as well at a cookout as on the water.",
    label: 'Fishing', who: 'anglers who fish lakes, rivers and the coast', themes: 'bass, catfish and redfish art, lake-life humor and early-morning-on-the-water scenes',
    faqs: (_P, s) => [
      { q: s === 'hoodies' ? 'Are these UPF sun-protection fishing hoodies?' : 'Are these UPF or performance fishing shirts?',
        a: `No. These are graphic ${s === 'hoodies' ? 'hoodies' : 'tees'} with original fishing art — made for the boat ramp, the bait shop and everywhere after. They are not rated for sun protection.` },
      { q: 'Do you have funny fishing shirts?', a: 'Yes. A lot of the designs lean into lake-life and fishing humor.' },
      { q: 'Do you have long sleeve fishing shirts?', a: 'Yes. Most designs also come on long sleeve tees.', needs: 'longSleeve' },
    ],
  },
  hunting: {
    style: 'Hunting tees are for everything around the hunt — the drive to the lease, deer camp, the processor and the diner after. Wear one under a flannel or a hoodie on cold mornings, and with jeans and boots in town.',
    label: 'Hunting', who: 'hunters who spend opening weekend in a blind or a stand', themes: 'whitetail, duck and turkey art, deer-camp humor and dawn-in-the-field scenes',
    faqs: (_P, s) => [
      { q: s === 'hoodies' ? 'Are these camo hunting hoodies with a face mask?' : 'Are these camo hunting shirts for the field?',
        a: `No. These are graphic ${s === 'hoodies' ? 'hoodies' : 'tees'} with original hunting art — for deer camp, the drive in and town. They are not field camouflage.` },
      { q: 'Do you have funny hunting shirts?', a: 'Yes. Deer-camp humor shows up across the collection.' },
    ],
  },
  western: {
    style: 'Western graphic tees pair best with denim and boots. Tuck the front into a belted pair of jeans for a rodeo or a concert, or wear it loose with a trucker cap for an everyday ranch look.',
    label: 'Western', who: 'people who grew up around ranches, rodeos and dirt roads', themes: 'cowboy, desert and rodeo art with a worn-in, vintage feel',
    faqs: () => [
      { q: 'Do you have cowboy graphic tees?', a: 'Yes. This collection covers cowboy, rodeo, ranch and desert designs.' },
      { q: 'What do you wear with a western graphic tee?', a: 'Jeans and boots are the classic pairing. Tuck the front of the tee and add a belt to dress it up.' },
    ],
  },
  gym: {
    style: 'A gym tee should move with you: wear it with joggers or shorts on lifting days and over a hoodie on the walk in. Size up for a looser pump-cover fit.',
    label: 'Gym', who: 'lifters who train early and train often', themes: 'barbell, plate and grind-culture art with gym humor',
    faqs: (_P, s) => [
      { q: s === 'hoodies' ? 'Are these gym hoodies oversized?' : 'Are these graphic gym shirts or performance shirts?',
        a: s === 'hoodies' ? 'Some designs come on an oversized hoodie — see our oversized hoodies collection.' : 'They are graphic tees with original gym art, built for lifting days and rest days. They are not moisture-wicking performance shirts.' },
    ],
  },
  football: {
    style: 'Game-day tees go with jeans and sneakers in the stands, or under a hoodie or quarter-zip once the sun drops on a Friday night.',
    label: 'Football', who: 'fans who plan their weekends around kickoff', themes: 'game-day, tailgate and Friday-night-lights art — original designs, no team marks',
    faqs: () => [
      { q: 'Do you have football shirts for moms?', a: 'Yes — see our football mom shirts collection.' },
      { q: 'Do your football shirts have team logos?', a: 'No. Every design is original game-day art with no team or league marks.' },
    ],
  },
  soccermom: {
    style: 'Soccer mom tees are made for the sideline: pair one with leggings or shorts, sneakers and a folding chair. Layer a zip-up hoodie for early-morning games.',
    label: 'Soccer Mom', who: 'moms who spend Saturdays on the sideline', themes: 'sideline, cleat and orange-slice art for game day',
    faqs: () => [
      { q: 'Can I put my player’s number on a soccer mom shirt?', a: 'Yes. Add your player’s number and name before checkout.', needs: 'personalization' },
      { q: 'Are these soccer jerseys?', a: 'No. They are graphic tees for the sideline, not team jerseys.' },
    ],
  },
  anime: {
    style: 'Anime-style tees work with wide-leg jeans, cargo pants or shorts and chunky sneakers. Layer one under an open overshirt for a streetwear look.',
    label: 'Anime-Style', who: 'fans of anime and manga art styles', themes: 'original anime-style characters and scenes — no licensed characters',
    faqs: () => [{ q: 'Do you sell licensed anime characters?', a: 'No. Every design is original anime-style art made for this shop.' }],
  },
  y2k: {
    style: 'Y2K tees are meant to be fitted or cropped: pair them with low-rise or wide-leg jeans, a mini skirt or cargo pants, and platform sneakers.',
    label: 'Y2K', who: 'anyone into early-2000s style', themes: 'chrome type, bubble letters and baby-tee-era graphics',
    faqs: () => [{ q: 'What is Y2K fashion?', a: 'Y2K fashion borrows from late-1990s and early-2000s style: bold logos, bubble lettering, chrome effects and fitted or cropped tees.' }],
  },
  vintage: {
    style: 'Vintage-inspired tees look best a little lived-in: wear one with straight-leg jeans, a denim jacket and worn-in boots or sneakers.',
    label: 'Vintage', who: 'people who dig through thrift racks for the perfect worn-in tee', themes: 'retro type, faded colorways and 70s–90s-inspired art',
    faqs: () => [{ q: 'Are these real vintage tees?', a: 'No. They are new tees with vintage-inspired designs — the look of a thrifted find, printed to order.' }],
  },
  heavyweight: {
    style: "Heavyweight hoodies hold their shape, so they work as an outer layer on cool days. Pair one with jeans or joggers, or layer it under a jacket when it's cold.",
    label: 'Heavyweight', who: 'anyone who wants a thick hoodie that holds its shape', themes: 'our original designs printed on a heavier blank',
    faqs: () => [
      { q: 'What does heavyweight hoodie mean?', a: 'A heavyweight hoodie is made from thicker fleece than a standard hoodie, so it feels warmer and holds its shape.' },
      { q: 'What fabric are your heavyweight hoodies?', a: (f) => `${f.hoodieBlank}.`, needs: 'hoodieBlank' },
    ],
  },
  zipup: {
    style: 'A zip-up hoodie layers over anything: wear it open over a graphic tee so the design shows, or zipped up on cold mornings.',
    label: 'Zip-Up', who: 'anyone who wants a hoodie they can throw on over anything', themes: 'our original designs on full-zip hoodies',
    faqs: () => [{ q: 'Where is the design on a zip-up hoodie?', a: 'Zip-ups split down the front, so designs sit on the back or as a smaller chest print.' }],
  },
  cropped: {
    style: 'Cropped graphic tees pair with high-rise jeans, skirts and shorts so the hem meets the waistband. Add a denim jacket or an oversized flannel as a layer.',
    label: 'Cropped', who: 'anyone who wants a shorter, fitted graphic tee', themes: 'our original designs on a cropped cut that pairs with high-rise jeans and skirts',
    faqs: () => [{ q: 'What is a cropped tee?', a: 'A cropped tee is cut shorter than a standard tee, so the hem lands at or just above the waist. It pairs well with high-rise jeans, skirts and shorts.' }],
  },
  country: {
    style: 'Country graphic tees go with jeans or a denim skirt and boots. For a country concert, knot or tuck the hem, add a belt and a hat.',
    label: 'Country', who: 'women who grew up on country radio, dirt roads and rodeo weekends', themes: 'boots, desert florals, cowgirl humor and rodeo art',
    faqs: () => [
      { q: 'What graphic tee should I wear to a country concert?', a: 'A country or western graphic tee with jeans or a denim skirt and boots is the go-to. Tie or tuck the hem to fit the outfit.' },
      { q: 'Do you have western graphic tees for women?', a: 'Yes. See our western graphic tees for more cowgirl and rodeo designs.' },
    ],
  },
  footballmom: {
    style: 'Wear your football mom tee with jeans or leggings and sneakers in the bleachers, and layer a hoodie or puffer vest for night games.',
    label: 'Football Mom', who: 'moms who spend Friday nights in the bleachers', themes: "game-day art for the bleachers",
    faqs: () => [
      { q: 'Can I put my player’s number and name on a football mom shirt?', a: 'Yes. Add your player’s number and name before checkout.', needs: 'personalization' },
      { q: 'Do you have a football mom shirt for 2 players?', a: 'Yes. Add both numbers when you personalize your shirt.', needs: 'personalization' },
    ],
  },
  baseballmom: {
    style: 'Baseball mom tees go with shorts or jeans, sneakers and a cap for long days at the ballpark. Bring a light layer for night games.',
    label: 'Baseball Mom', who: 'moms who live at the ballpark all spring', themes: 'diamond, bat and bleacher art',
    faqs: () => [
      { q: 'Can I put my player’s number on a baseball mom shirt?', a: 'Yes. Add your player’s number and name before checkout.', needs: 'personalization' },
      { q: 'Do you have a baseball mom shirt for 2 kids?', a: 'Yes. Add both numbers when you personalize your shirt.', needs: 'personalization' },
    ],
  },
  nurse: {
    style: 'Nurse tees are for off the clock: wear one with jeans or joggers on days off, at a Nurses Week event or a hospital fundraiser.',
    label: 'Nurse', who: 'nurses who want something to wear off the clock', themes: 'nurse humor and appreciation designs',
    faqs: () => [
      { q: 'Can I wear these nurse shirts to work?', a: 'They are graphic tees, not scrubs. Many nurses wear them on days off, at events and for Nurses Week — check your workplace dress code before wearing one on shift.' },
      { q: 'Are these good gifts for nurses?', a: 'Yes. Nurse humor and appreciation designs make an easy gift for Nurses Week, graduation or the holidays.' },
    ],
  },
  christian: {
    style: 'Christian graphic tees work everywhere — church events, youth group, mission trips or everyday wear with jeans and sneakers.',
    label: 'Christian', who: 'people who want to wear their faith', themes: 'faith and scripture-inspired original art',
    faqs: () => [{ q: 'Are your Christian shirts original designs?', a: 'Yes. Every faith design is original art made for this shop.' }],
  },
  oversized: {
    style: 'Oversized graphic tees balance best with slimmer bottoms: bike shorts, leggings or straight-leg jeans. Tuck one side of the front for shape.',
    label: 'Oversized', who: 'anyone who wants a relaxed, boxy fit', themes: 'big front and back prints made for a roomy fit',
    faqs: (_P, s) => [
      { q: s === 'hoodies' ? 'How should an oversized hoodie fit?' : 'How should an oversized graphic tee fit?',
        a: 'Shoulder seams sit below your shoulders and the body hangs loose. If you want the oversized look from a standard fit, size up one or two.' },
      { q: 'What do you wear with an oversized graphic tee?', a: 'Bike shorts, straight-leg jeans or joggers. Tuck one side of the front for shape.' },
    ],
  },
};

const titleCase = (s: string) => s.replace(/\b\w/g, (c) => c.toUpperCase());

function niche(
  n: Niche,
  section: Section,
  o: { slug: string; keyword: string; volume: number; kd: number; product: string; twin?: string; audience?: 'women' | 'men'; name?: string },
): Collection {
  const P = o.product;
  const item = section === 'hoodies' ? 'hoodie' : 'tee';
  return {
    slug: o.slug,
    section,
    audience: o.audience,
    name: o.name ?? `${n.label} ${section === 'hoodies' ? 'Hoodies' : 'Tees'}`,
    keyword: o.keyword,
    volume: o.volume,
    kd: o.kd,
    title: `${titleCase(P)} — Original Graphic Designs`,
    description: `Original ${P} for ${n.who}. ${n.themes.charAt(0).toUpperCase() + n.themes.slice(1)}. Printed to order.`.slice(0, 158),
    h1: titleCase(P),
    intro: `Our ${P} are original graphic designs for ${n.who}. Expect ${n.themes}.`,
    sections: [
      { h2: `What makes these ${P} different?`, body: `Every ${item} in this collection is an original design, printed when you order it. That means no warehouse of leftovers — and new designs added every month.` },
      section === 'hoodies'
        ? { h2: `Same designs as our ${n.label.toLowerCase()} tees`, body: 'Every design here started as a tee. Grab the tee for warm days and the hoodie when it turns cold.' }
        : { h2: 'Want it warmer? It comes as a hoodie too', body: 'Most designs in this collection are also printed on hoodies, so the same art works when the weather turns.' },
      ...(n.style ? [{ h2: `How to wear ${P}`, body: n.style }] : []),
    ],
    faqs: [
      ...(n.faqs?.(P, section) ?? []),
      { q: `Are these ${P} original designs?`, a: "Yes. Every design is drawn for this shop. We don't resell stock art or use licensed characters." },
      { q: `How are the ${P} made?`, a: 'Each one is printed when you order it, then shipped to you.' },
      { q: `How long do ${P} take to ship?`, a: (f) => `Printing takes ${f.productionDays}, then your order ships. Delivery estimates are shown at checkout.`, needs: 'productionDays' },
      ...audienceFaqs(P),
    ],
    shopifyHandle: o.slug,
    twin: o.twin,
  };
}

function seasonal(
  season: 'halloween' | 'thanksgiving' | 'christmas',
  section: Section,
  o: { slug: string; keyword: string; volume: number; kd: number; product: string; twin?: string; blurb: string; extra?: Faq[] },
): Collection {
  const label = titleCase(season);
  return {
    slug: o.slug,
    section,
    name: `${label} ${section === 'hoodies' ? 'Hoodies' : 'Tees'}`,
    keyword: o.keyword,
    volume: o.volume,
    kd: o.kd,
    seasonal: season,
    title: `${titleCase(o.product)} — Original ${label} Designs`,
    description: `Original ${o.product}: ${o.blurb} Printed to order — new designs every season.`.slice(0, 158),
    h1: titleCase(o.product),
    intro: `Our ${o.product} are original designs: ${o.blurb}`,
    sections: [{ h2: `A new ${label} drop every year`, body: 'This collection gets new designs each season. Order early — printed-to-order items take time to make and ship.' }],
    faqs: [
      { q: `When should I order ${o.product}?`, a: (f) => `Order at least two weeks before you need it. Printing takes ${f.productionDays} before shipping.`, needs: 'productionDays' },
      { q: `Are your ${o.product} licensed characters?`, a: 'No. Every design is original art made for this shop.' },
      ...(o.extra ?? []),
      ...audienceFaqs(o.product),
    ],
    shopifyHandle: o.slug,
    twin: o.twin,
  };
}

export const tees: Collection[] = [
  {
    slug: 'graphic-tees-for-women', section: 'tees', audience: 'women', name: "Women's Graphic Tees",
    keyword: 'graphic tees for women', volume: 27100, kd: 9,
    title: 'Graphic Tees for Women — Original Designs, New Every Month',
    description: 'Original graphic tees for women: country, western, fishing, cropped and seasonal designs. Printed to order, with a new collection every month.',
    h1: 'Graphic Tees for Women',
    intro: 'Original graphic tees for women — country and western, fishing, faith, football-mom and seasonal designs, with a new collection every month.',
    sections: [
      { h2: 'Shop by what you love', body: 'Country, western, fishing, nurse, faith and seasonal drops — every collection is original art, not stock graphics.' },
      { h2: 'Graphic tees for women over 40 and over 50', body: 'Graphic tees aren’t an age thing. Pick a design you like and a fit you’re comfortable in — see our graphic tees for women over 40 for styling ideas.' },
      { h2: 'Printed when you order', body: 'Each tee is printed after you order it, so the catalog keeps growing without leftovers.' },
    ],
    faqs: [
      { q: 'Are these graphic tees original designs?', a: 'Yes. Every design is made for this shop — no licensed characters or resold stock art.' },
      { q: 'Do you have graphic tees for women over 40 or over 50?', a: 'Yes. Our designs aren’t made for one age group. See our graphic tees for women over 40 page for fit and styling ideas.' },
      { q: 'Do you have oversized or cropped graphic tees for women?', a: 'Yes — see our oversized graphic tees and cropped graphic tees collections.' },
      { q: 'Do you have plus size graphic tees for women?', a: (f) => `Sizes run ${f.sizeRange}. Check the size chart on each product.`, needs: 'sizeRange' },
      { q: 'Do the designs come on hoodies too?', a: 'Yes. Most designs are also printed on hoodies.' },
    ],
    shopifyHandle: 'graphic-tees-for-women',
  },
  niche(N.country, 'tees', { slug: 'country-graphic-tees', keyword: 'country graphic tees', volume: 1000, kd: 24, product: 'country graphic tees', audience: 'women', name: 'Country Graphic Tees' }),
  niche(N.cropped, 'tees', { slug: 'cropped-graphic-tees', keyword: 'cropped graphic tee', volume: 6600, kd: 38, product: 'cropped graphic tees', audience: 'women', name: 'Cropped Graphic Tees' }),
  {
    slug: 'graphic-tees-for-women-over-40', section: 'tees', audience: 'women', name: 'Women Over 40',
    keyword: 'graphic tees for women over 40', volume: 0, kd: 0,
    title: 'Graphic Tees for Women Over 40 & 50 — Fit and Style Guide',
    description: 'Graphic tees for women over 40, 50 and 60: original designs, flattering fits and easy ways to style them. Printed to order.',
    h1: 'Graphic Tees for Women Over 40 & 50',
    intro: 'Graphic tees work at any age — the difference is fit and styling. These are our original designs on cuts that look put-together, with ideas for wearing them at 40, 50 and beyond.',
    sections: [
      { h2: 'Which fit looks best?', body: 'A classic or relaxed fit that skims the body works for most people. Avoid very boxy tees if you want shape, or tuck the front of an oversized tee into high-rise jeans.' },
      { h2: 'How to style a graphic tee over 40', body: 'Pair it with dark jeans and a blazer or denim jacket for errands and dinner, or a midi skirt and sneakers for the weekend. A smaller chest design reads more polished than a full-front print.' },
      { h2: 'Designs that aren’t made for 19-year-olds', body: 'Country, fishing, faith and seasonal designs — art about what you actually do, not trend slogans.' },
    ],
    faqs: [
      { q: 'Can women over 50 wear graphic tees?', a: 'Yes. Choose a fit you’re comfortable in and style it with a blazer, cardigan or denim jacket for a more polished look.' },
      { q: 'How do you style a graphic tee over 40?', a: 'Tuck the front into high-rise jeans, layer a blazer or denim jacket, and finish with clean sneakers or ankle boots.' },
      { q: 'Are graphic tees age-appropriate after 60?', a: 'They can be. Pick designs that reflect your interests and a fit that skims rather than clings.' },
      ...audienceFaqs('graphic tees'),
    ],
    shopifyHandle: 'graphic-tees-for-women',
  },
  niche(N.footballmom, 'tees', { slug: 'football-mom-shirts', keyword: 'football mom shirts', volume: 3600, kd: 50, product: 'football mom shirts', audience: 'women', name: 'Football Mom Shirts' }),
  niche(N.baseballmom, 'tees', { slug: 'baseball-mom-shirts', keyword: 'baseball mom shirts', volume: 3600, kd: 50, product: 'baseball mom shirts', audience: 'women', name: 'Baseball Mom Shirts' }),
  niche(N.nurse, 'tees', { slug: 'nurse-shirts', keyword: 'nurse shirts', volume: 9900, kd: 55, product: 'nurse shirts', audience: 'women', name: 'Nurse Shirts' }),
  niche(N.christian, 'tees', { slug: 'christian-shirts', keyword: 'christian shirts', volume: 12100, kd: 58, product: 'Christian shirts', audience: 'women', name: 'Christian Shirts' }),
  niche(N.gym, 'tees', { slug: 'mens-gym-shirts', keyword: 'mens gym shirts', volume: 18100, kd: 10, product: "men's gym shirts", twin: 'gym-hoodies', audience: 'men', name: "Men's Gym Shirts" }),
  niche(N.western, 'tees', { slug: 'western-graphic-tees', keyword: 'western graphic tees', volume: 2400, kd: 16, product: 'western graphic tees', twin: 'western-hoodies' }),
  niche(N.fishing, 'tees', { slug: 'fishing-t-shirts', keyword: 'fishing t shirts', volume: 6600, kd: 46, product: 'fishing t-shirts', twin: 'fishing-hoodies' }),
  niche(N.hunting, 'tees', { slug: 'hunting-t-shirts', keyword: 'hunting t shirts', volume: 0, kd: 0, product: 'hunting t-shirts', twin: 'hunting-hoodies' }) /* volume n/a; SERP = small tee brands (2026-10-02) */,
  niche(N.soccermom, 'tees', { slug: 'soccer-mom-shirts', keyword: 'soccer mom shirts', volume: 2900, kd: 42, product: 'soccer mom shirts', audience: 'women', name: 'Soccer Mom Shirts' }),
  niche(N.oversized, 'tees', { slug: 'oversized-graphic-tees', keyword: 'oversized graphic tee', volume: 27100, kd: 48, product: 'oversized graphic tees', twin: 'oversized-hoodies' }),
  niche(N.football, 'tees', { slug: 'football-shirts', keyword: 'football shirts', volume: 74000, kd: 51, product: 'football shirts' }),
  niche(N.anime, 'tees', { slug: 'anime-shirts', keyword: 'anime shirts', volume: 18100, kd: 51, product: 'anime-style shirts', twin: 'anime-hoodies' }),
  niche(N.y2k, 'tees', { slug: 'y2k-graphic-tees', keyword: 'y2k graphic tees', volume: 4400, kd: 52, product: 'Y2K graphic tees', twin: 'y2k-hoodies' }),
  niche(N.vintage, 'tees', { slug: 'vintage-graphic-tees', keyword: 'vintage graphic tees', volume: 22200, kd: 57, product: 'vintage graphic tees' }),
  {
    slug: 'graphic-tees-for-men', section: 'tees', audience: 'men', name: "Men's Graphic Tees",
    keyword: 'graphic tees for men', volume: 90500, kd: 64,
    title: 'Graphic Tees for Men — Original Designs, New Every Month',
    description: 'Original graphic tees for men: fishing, hunting, western, gym and seasonal designs. Printed to order, with a new collection every month.',
    h1: 'Graphic Tees for Men',
    intro: 'Original graphic tees for men — fishing, hunting, western, gym and seasonal designs. New collections drop every month.',
    sections: [
      { h2: 'Shop by what you do', body: 'Pick the collection that fits your weekends: the lake, the deer stand, the gym or the ranch.' },
      { h2: 'Graphic tees for men over 40', body: 'Original designs about real interests — fishing, hunting, ranch life — wear better than trend slogans at any age. Go with a classic fit and a tee that fits your shoulders.' },
      { h2: 'Printed when you order', body: 'Each tee is printed after you order it, so the catalog keeps growing without leftovers.' },
    ],
    faqs: [
      { q: 'Are these graphic tees original designs?', a: 'Yes. Every design is made for this shop — no licensed characters or resold stock art.' },
      { q: 'Do you have graphic tees for men over 40 or over 50?', a: 'Yes. Fishing, hunting, western and gym designs are made for grown men with real hobbies, not one age group.' },
      { q: 'Do you have big and tall or 3XL graphic tees?', a: (f) => `Sizes run ${f.sizeRange}. Check the size chart on each product.`, needs: 'sizeRange' },
      { q: 'Do the designs come on hoodies too?', a: 'Yes. Most designs are also printed on hoodies.' },
    ],
    shopifyHandle: 'graphic-tees-for-men',
  },
  seasonal('halloween', 'tees', { slug: 'halloween-shirts', keyword: 'halloween shirts', volume: 22200, kd: 58, product: 'Halloween shirts', twin: 'halloween-hoodies', blurb: 'horror-movie-night, spooky-season and costume-optional designs.',
    extra: [{ q: 'Do you have horror movie shirts?', a: 'We make original horror-inspired designs. We don’t use movie names, characters or logos.' }] }),
  seasonal('thanksgiving', 'tees', { slug: 'thanksgiving-shirts', keyword: 'thanksgiving shirts', volume: 8100, kd: 57, product: 'Thanksgiving shirts', blurb: 'fall, football-and-turkey and family-table designs.',
    extra: [{ q: 'Do you have matching Thanksgiving shirts for family?', a: 'Yes. Any design can be ordered in several sizes so the whole family matches.' }] }),
  seasonal('christmas', 'tees', { slug: 'christmas-shirts', keyword: 'christmas shirts', volume: 33100, kd: 58, product: 'Christmas shirts', twin: 'christmas-hoodies', blurb: 'holiday designs that work for the party, the family photo and the gift exchange.',
    extra: [
      { q: 'Do you have matching Christmas shirts for family or couples?', a: 'Yes. Any design can be ordered in several sizes so the whole family — or the two of you — match.' },
      { q: 'Do you have funny Christmas shirts?', a: 'Yes. The collection mixes funny and classic holiday designs.' },
    ] }),
];

export const hoodies: Collection[] = [
  niche(N.heavyweight, 'hoodies', { slug: 'heavyweight-hoodies', keyword: 'heavyweight hoodie', volume: 14800, kd: 20, product: 'heavyweight hoodies' }),
  niche(N.zipup, 'hoodies', { slug: 'zip-up-hoodies', keyword: 'zip-up hoodie', volume: 135000, kd: 28, product: 'zip-up hoodies' }),
  niche(N.fishing, 'hoodies', { slug: 'fishing-hoodies', keyword: 'fishing hoodie', volume: 6600, kd: 30, product: 'fishing hoodies', twin: 'fishing-t-shirts' }),
  niche(N.gym, 'hoodies', { slug: 'gym-hoodies', keyword: 'gym hoodie', volume: 18100, kd: 30, product: 'gym hoodies', twin: 'mens-gym-shirts' }),
  niche(N.hunting, 'hoodies', { slug: 'hunting-hoodies', keyword: 'hunting hoodie', volume: 3600, kd: 32, product: 'hunting hoodies', twin: 'hunting-t-shirts' }),
  niche(N.y2k, 'hoodies', { slug: 'y2k-hoodies', keyword: 'y2k hoodie', volume: 14800, kd: 35, product: 'Y2K hoodies', twin: 'y2k-graphic-tees' }),
  niche(N.western, 'hoodies', { slug: 'western-hoodies', keyword: 'western hoodie', volume: 3600, kd: 36, product: 'western hoodies', twin: 'western-graphic-tees' }),
  niche(N.oversized, 'hoodies', { slug: 'oversized-hoodies', keyword: 'oversized hoodie', volume: 165000, kd: 38, product: 'oversized hoodies', twin: 'oversized-graphic-tees' }),
  niche(N.anime, 'hoodies', { slug: 'anime-hoodies', keyword: 'anime hoodie', volume: 22200, kd: 38, product: 'anime-style hoodies', twin: 'anime-shirts' }),
  seasonal('halloween', 'hoodies', { slug: 'halloween-hoodies', keyword: 'halloween hoodie', volume: 5400, kd: 48, product: 'Halloween hoodies', twin: 'halloween-shirts', blurb: 'horror-movie-night and spooky-season designs for cold October nights.' }),
  seasonal('christmas', 'hoodies', { slug: 'christmas-hoodies', keyword: 'christmas hoodie', volume: 9900, kd: 52, product: 'Christmas hoodies', twin: 'christmas-shirts', blurb: 'holiday designs warm enough for the tree lot and the family photo.',
    extra: [{ q: 'Do you have matching Christmas hoodies for family?', a: 'Yes. Any design can be ordered in several sizes so the whole family matches.' }] }),
];

export const all = [...tees, ...hoodies];
export const pathFor = (c: Collection) => (c.section === 'hoodies' ? `/hoodies/${c.slug}/` : `/${c.slug}/`);
export const bySlug = (slug: string) => all.find((c) => c.slug === slug);
