// Collection pages. Keyword data: RankHero estimates pulled 2026-10-02
// (see ~/.claude/data/local-seo/reports/2026-10-02-graphic-tee-collections.md).
// FAQ questions come from real Google autocomplete phrasing for each keyword (2026-10-02).
// Answers are facts-only: anything depending on an unconfirmed fact uses `needs`
// and stays hidden until that fact is set in site.ts.
// Order within each section = easiest to rank first (build order).
import type { Faq } from './site';
import { site } from './site';

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

// about/original/made replace the boilerplate that used to repeat on every niche page (SEO audit 2026-10-06, P1 #10).
type Niche = {
  label: string; who: string; themes: string; style?: string; faqs?: (P: string, section: Section) => Faq[];
  about: (item: string) => string; // "What makes these different?" body
  original: string; // answer to "Are these original designs?"
  made: string; // answer to "How are they made?"
};

// Questions every product-type page can carry, phrased from autocomplete ("for men", "for women", "for kids", "3xl"…)
const audienceFaqs = (P: string): Faq[] => [
  { q: `Do you have ${P} for women?`, a: (f) => `Yes. Every design is available in a women's fit${f.sizeRange ? `, sizes ${f.sizeRange}` : ''}.`, needs: 'womensFit' },
  { q: `Do you have ${P} for kids?`, a: `Yes. Most designs also come in kids' sizes.`, needs: 'kidsSizes' },
  { q: `What sizes do your ${P} come in?`, a: (f) => `Sizes run ${f.sizeRange}. Check the size chart on each product before you order.`, needs: 'sizeRange' },
];

const N: Record<string, Niche> = {
  fishing: {
    about: (item) => `Every design here starts on the water: a bass hitting a lure at sunrise, a trout rising to a dry fly under the peaks. Each ${item} is printed after you order it, in colors picked to look right at the ramp and the bait shop.`,
    original: 'Yes. The fish, lures and lake scenes are drawn for this shop, with no tackle-brand logos or licensed marks.',
    made: 'Each one is printed after you order it, then shipped straight to you, so nothing sits on a rack from last season.',
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
    about: (item) => `These designs come from the hours before shooting light: a whitetail buck in a frosty clearing, mallards low over the cattails. Each ${item} is printed to order in faded field colors, not camouflage.`,
    original: 'Yes. The deer, ducks and marsh scenes are original illustrations, with no outfitter or ammo-brand logos.',
    made: 'Printed when you order it and shipped from there. Nothing sits in a warehouse waiting for opening day.',
    style: 'Hunting tees are for everything around the hunt — the drive to the lease, deer camp, the processor and the diner after. Wear one under a flannel or a hoodie on cold mornings, and with jeans and boots in town.',
    label: 'Hunting', who: 'hunters who spend opening weekend in a blind or a stand', themes: 'whitetail, duck and turkey art, deer-camp humor and dawn-in-the-field scenes',
    faqs: (_P, s) => [
      { q: s === 'hoodies' ? 'Are these camo hunting hoodies with a face mask?' : 'Are these camo hunting shirts for the field?',
        a: `No. These are graphic ${s === 'hoodies' ? 'hoodies' : 'tees'} with original hunting art — for deer camp, the drive in and town. They are not field camouflage.` },
      { q: 'Do you have funny hunting shirts?', a: 'Yes. Deer-camp humor shows up across the collection.' },
    ],
  },
  western: {
    about: (item) => `Western art here is drawn like an old roadside sign: a lone rider crossing a desert sunset, a cowgirl boot full of blooming prickly pear. Each ${item} is printed after you order it.`,
    original: 'Yes. The cowboys, boots and desert scenes are drawn for this shop. No rodeo association or western-wear brand marks.',
    made: 'Each one is printed to order with the art on the front, then shipped to you.',
    style: 'Western graphic tees pair best with denim and boots. Tuck the front into a belted pair of jeans for a rodeo or a concert, or wear it loose with a trucker cap for an everyday ranch look.',
    label: 'Western', who: 'people who grew up around ranches, rodeos and dirt roads', themes: 'cowboy, desert and rodeo art with a worn-in, vintage feel',
    faqs: () => [
      { q: 'Do you have cowboy graphic tees?', a: 'Yes. This collection covers cowboy, rodeo, ranch and desert designs.' },
      { q: 'What do you wear with a western graphic tee?', a: 'Jeans and boots are the classic pairing. Tuck the front of the tee and add a belt to dress it up.' },
    ],
  },
  gym: {
    about: (item) => `The gym art borrows from old strongman badges and cinderblock-wall posters: crossed barbells, stacked plates, a dumbbell-and-lightning-bolt shield. Each ${item} is printed when you order it.`,
    original: 'Yes. Every gym badge is drawn in-house. No supplement brands, gym chains or federation logos.',
    made: 'Printed after you order it, then shipped. The art is the same old-school badge style on every color.',
    style: 'A gym tee should move with you: wear it with joggers or shorts on lifting days and over a hoodie on the walk in. Size up for a looser pump-cover fit.',
    label: 'Gym', who: 'lifters who train early and train often', themes: 'barbell, plate and grind-culture art with gym humor',
    faqs: (_P, s) => [
      { q: s === 'hoodies' ? 'Are these gym hoodies oversized?' : 'Are these graphic gym shirts or performance shirts?',
        a: s === 'hoodies' ? 'Some designs come on an oversized hoodie — see our oversized hoodies collection.' : 'They are graphic tees with original gym art, built for lifting days and rest days. They are not moisture-wicking performance shirts.' },
    ],
  },
  football: {
    about: (item) => `Football art here is about the game around the game: backyard kickoffs, mascots and Friday nights, drawn with no team or league marks. Each ${item} is printed when you order it.`,
    original: 'Yes. Mascots and game-day scenes are invented for this shop, so there are no NFL, college or school logos.',
    made: 'Each one is printed to order and shipped to you.',
    style: 'Game-day tees go with jeans and sneakers in the stands, or under a hoodie or quarter-zip once the sun drops on a Friday night.',
    label: 'Football', who: 'fans who plan their weekends around kickoff', themes: 'game-day, tailgate and Friday-night-lights art — original designs, no team marks',
    faqs: () => [
      { q: 'Do you have football shirts for moms?', a: 'Yes — see our football mom shirts collection.' },
      { q: 'Do your football shirts have team logos?', a: 'No. Every design is original game-day art with no team or league marks.' },
    ],
  },
  soccermom: {
    about: (item) => `Sideline designs built around the soccer ball, daisies and bubbly retro lettering, made for Saturday-morning games. Each ${item} is printed after you order it.`,
    original: 'Yes. The soccer-mom art is drawn for this shop, with no club, league or jersey branding.',
    made: 'Printed when you order it, then shipped, so the design is fresh off the press for the season.',
    style: 'Soccer mom tees are made for the sideline: pair one with leggings or shorts, sneakers and a folding chair. Layer a zip-up hoodie for early-morning games.',
    label: 'Soccer Mom', who: 'moms who spend Saturdays on the sideline', themes: 'sideline, cleat and orange-slice art for game day',
    faqs: () => [
      { q: 'Can I put my player’s number on a soccer mom shirt?', a: 'Yes. Add your player’s number and name before checkout.', needs: 'personalization' },
      { q: 'Are these soccer jerseys?', a: 'No. They are graphic tees for the sideline, not team jerseys.' },
    ],
  },
  anime: {
    about: (item) => `Original anime-style characters and scenes, drawn in-house rather than licensed. Each ${item} is printed when you order it.`,
    original: 'Yes. Characters here are original anime-style art; nothing is taken from a show or manga.',
    made: 'Each one is printed to order and shipped from there.',
    style: 'Anime-style tees work with wide-leg jeans, cargo pants or shorts and chunky sneakers. Layer one under an open overshirt for a streetwear look.',
    label: 'Anime-Style', who: 'fans of anime and manga art styles', themes: 'original anime-style characters and scenes — no licensed characters',
    faqs: () => [{ q: 'Do you sell licensed anime characters?', a: 'No. Every design is original anime-style art made for this shop.' }],
  },
  y2k: {
    about: (item) => `Early-2000s graphics redrawn from scratch: chrome type, bubble letters and baby-tee-era shapes. Each ${item} is printed after you order it.`,
    original: 'Yes. The Y2K lettering and graphics are drawn for this shop, not copied from old brand logos.',
    made: 'Printed to order, then shipped to you.',
    style: 'Y2K tees are meant to be fitted or cropped: pair them with low-rise or wide-leg jeans, a mini skirt or cargo pants, and platform sneakers.',
    label: 'Y2K', who: 'anyone into early-2000s style', themes: 'chrome type, bubble letters and baby-tee-era graphics',
    faqs: () => [{ q: 'What is Y2K fashion?', a: 'Y2K fashion borrows from late-1990s and early-2000s style: bold logos, bubble lettering, chrome effects and fitted or cropped tees.' }],
  },
  vintage: {
    about: (item) => `These are new shirts drawn to look like thrift-rack finds: faded colorways, distressed texture, badge layouts from the 1950s to the 1990s. Each ${item} is printed when you order it, so the worn look is in the art, not the fabric.`,
    original: 'Yes. Every vintage-style badge and scene is original art. Nothing is a reprint of an old logo or a licensed character.',
    made: 'Each one is printed new after you order it, then shipped. The vintage look comes from the illustration.',
    style: 'Vintage-inspired tees look best a little lived-in: wear one with straight-leg jeans, a denim jacket and worn-in boots or sneakers.',
    label: 'Vintage', who: 'people who dig through thrift racks for the perfect worn-in tee', themes: 'retro type, faded colorways and 70s–90s-inspired art',
    faqs: () => [{ q: 'Are these real vintage tees?', a: 'No. They are new tees with vintage-inspired designs — the look of a thrifted find, printed to order.' }],
  },
  heavyweight: {
    about: (item) => `Our original designs on a thicker hoodie blank that holds its shape. Each ${item} is printed after you order it.`,
    original: 'Yes. The art is the same original work as our tees, drawn for this shop.',
    made: 'Printed to order on the heavyweight blank, then shipped.',
    style: "Heavyweight hoodies hold their shape, so they work as an outer layer on cool days. Pair one with jeans or joggers, or layer it under a jacket when it's cold.",
    label: 'Heavyweight', who: 'anyone who wants a thick hoodie that holds its shape', themes: 'our original designs printed on a heavier blank',
    faqs: () => [
      { q: 'What does heavyweight hoodie mean?', a: 'A heavyweight hoodie is made from thicker fleece than a standard hoodie, so it feels warmer and holds its shape.' },
      { q: 'What fabric are your heavyweight hoodies?', a: (f) => `${f.hoodieBlank}.`, needs: 'hoodieBlank' },
    ],
  },
  zipup: {
    about: (item) => `Our original designs on full-zip hoodies, placed to show with the zipper open or closed. Each ${item} is printed when you order it.`,
    original: 'Yes. Zip-up designs use the same original art as our tees.',
    made: 'Printed to order, then shipped to you.',
    style: 'A zip-up hoodie layers over anything: wear it open over a graphic tee so the design shows, or zipped up on cold mornings.',
    label: 'Zip-Up', who: 'anyone who wants a hoodie they can throw on over anything', themes: 'our original designs on full-zip hoodies',
    faqs: () => [{ q: 'Where is the design on a zip-up hoodie?', a: 'Zip-ups split down the front, so designs sit on the back or as a smaller chest print.' }],
  },
  cropped: {
    about: (item) => `Original art on a cropped cut that meets high-rise jeans and skirts, like a hand-drawn wildflower bouquet in a scalloped varsity patch. Each ${item} is printed after you order it.`,
    original: 'Yes. The cropped designs are drawn for this shop. No brand logos or licensed characters.',
    made: 'Each one is printed to order on a cropped blank, then shipped.',
    style: 'Cropped graphic tees pair with high-rise jeans, skirts and shorts so the hem meets the waistband. Add a denim jacket or an oversized flannel as a layer.',
    label: 'Cropped', who: 'anyone who wants a shorter, fitted graphic tee', themes: 'our original designs on a cropped cut that pairs with high-rise jeans and skirts',
    faqs: () => [{ q: 'What is a cropped tee?', a: 'A cropped tee is cut shorter than a standard tee, so the hem lands at or just above the waist. It pairs well with high-rise jeans, skirts and shorts.' }],
  },
  country: {
    about: (item) => `Country designs here sound like the radio on a gravel road: a truck dial over the hills at sunset, a porch with sweet tea and fireflies, a boot full of desert blooms. Each ${item} is printed when you order it.`,
    original: 'Yes. The porches, back roads and boots are original illustrations. No artist names, song lyrics or tour logos.',
    made: 'Printed after you order it and shipped, so the design is ready for concert season.',
    style: 'Country graphic tees go with jeans or a denim skirt and boots. For a country concert, knot or tuck the hem, add a belt and a hat.',
    label: 'Country', who: 'women who grew up on country radio, dirt roads and rodeo weekends', themes: 'boots, desert florals, cowgirl humor and rodeo art',
    faqs: () => [
      { q: 'What graphic tee should I wear to a country concert?', a: 'A country or western graphic tee with jeans or a denim skirt and boots is the go-to. Tie or tuck the hem to fit the outfit.' },
      { q: 'Do you have western graphic tees for women?', a: 'Yes. See our western graphic tees for more cowgirl and rodeo designs.' },
    ],
  },
  footballmom: {
    about: (item) => `Bleacher-ready art in 1970s screen-print style, with lightning bolts, stars and varsity lettering and no team marks. Each ${item} is printed after you order it.`,
    original: 'Yes. The football-mom badges are drawn in-house and work for any team because they carry no school or league logos.',
    made: 'Each one is printed to order, then shipped.',
    style: 'Wear your football mom tee with jeans or leggings and sneakers in the bleachers, and layer a hoodie or puffer vest for night games.',
    label: 'Football Mom', who: 'moms who spend Friday nights in the bleachers', themes: "game-day art for the bleachers",
    faqs: () => [
      { q: 'Can I put my player’s number and name on a football mom shirt?', a: 'Yes. Add your player’s number and name before checkout.', needs: 'personalization' },
      { q: 'Do you have a football mom shirt for 2 players?', a: 'Yes. Add both numbers when you personalize your shirt.', needs: 'personalization' },
    ],
  },
  baseballmom: {
    about: (item) => `Ballpark art built around the stitched baseball: hearts, stars, daisies and distressed varsity letters. Each ${item} is printed when you order it.`,
    original: 'Yes. The baseball-mom designs are drawn for this shop, with no MLB, travel-ball or school logos.',
    made: 'Printed after you order it and shipped to you.',
    style: 'Baseball mom tees go with shorts or jeans, sneakers and a cap for long days at the ballpark. Bring a light layer for night games.',
    label: 'Baseball Mom', who: 'moms who live at the ballpark all spring', themes: 'diamond, bat and bleacher art',
    faqs: () => [
      { q: 'Can I put my player’s number on a baseball mom shirt?', a: 'Yes. Add your player’s number and name before checkout.', needs: 'personalization' },
      { q: 'Do you have a baseball mom shirt for 2 kids?', a: 'Yes. Add both numbers when you personalize your shirt.', needs: 'personalization' },
    ],
  },
  nurse: {
    about: (item) => `Nurse designs about the life around the shift: coffee, a stethoscope looped into a heart, 70s bubble lettering. Each ${item} is printed when you order it.`,
    original: 'Yes. The nurse art is original. No hospital, school or scrub-brand logos.',
    made: 'Each one is printed to order, then shipped. They\'re graphic tees, not scrubs.',
    style: 'Nurse tees are for off the clock: wear one with jeans or joggers on days off, at a Nurses Week event or a hospital fundraiser.',
    label: 'Nurse', who: 'nurses who want something to wear off the clock', themes: 'nurse humor and appreciation designs',
    faqs: () => [
      { q: 'Can I wear these nurse shirts to work?', a: 'They are graphic tees, not scrubs. Many nurses wear them on days off, at events and for Nurses Week — check your workplace dress code before wearing one on shift.' },
      { q: 'Are these good gifts for nurses?', a: 'Yes. Nurse humor and appreciation designs make an easy gift for Nurses Week, graduation or the holidays.' },
    ],
  },
  christian: {
    about: (item) => `Faith designs drawn as quiet scenes rather than slogans: a sunrise and a small cross over a wildflower field. Each ${item} is printed after you order it.`,
    original: 'Yes. Every faith design is original art made for this shop.',
    made: 'Printed to order, then shipped to you.',
    style: 'Christian graphic tees work everywhere — church events, youth group, mission trips or everyday wear with jeans and sneakers.',
    label: 'Christian', who: 'people who want to wear their faith', themes: 'faith and scripture-inspired original art',
    faqs: () => [{ q: 'Are your Christian shirts original designs?', a: 'Yes. Every faith design is original art made for this shop.' }],
  },
  oversized: {
    about: (item) => `Big front and back prints sized for a roomy fit, using our original art. Each ${item} is printed when you order it.`,
    original: 'Yes. The oversized designs are original art, not stock graphics.',
    made: 'Each one is printed to order, then shipped.',
    style: 'Oversized graphic tees balance best with slimmer bottoms: bike shorts, leggings or straight-leg jeans. Tuck one side of the front for shape.',
    label: 'Oversized', who: 'anyone who wants a relaxed, boxy fit', themes: 'big front and back prints made for a roomy fit',
    faqs: (_P, s) => [
      { q: s === 'hoodies' ? 'How should an oversized hoodie fit?' : 'How should an oversized graphic tee fit?',
        a: 'Shoulder seams sit below your shoulders and the body hangs loose. If you want the oversized look from a standard fit, size up one or two.' },
      { q: 'What do you wear with an oversized graphic tee?', a: 'Bike shorts, straight-leg jeans or joggers. Tuck one side of the front for shape.' },
    ],
  },
};

const titleCase = (s: string) => s.replace(/(^|[\s-])(\w)/g, (_m, pre, c) => pre + c.toUpperCase());

// Meta descriptions: keep whole sentences under 155 chars, never cut a word in half.
function metaTrim(text: string, max = 155): string {
  if (text.length <= max) return text;
  const sentences = text.match(/[^.!?]+[.!?]+/g) ?? [text];
  let out = '';
  for (const s of sentences) { if ((out + s).trim().length > max) break; out += s; }
  if (out.trim()) return out.trim();
  return text.slice(0, max).replace(/\s+\S*$/, '').replace(/[,;:—–-]\s*$/, '') + '…';
}

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
    description: metaTrim(`${titleCase(P)} for ${n.who}. ${n.themes.charAt(0).toUpperCase() + n.themes.slice(1)}. Printed to order.`),
    h1: titleCase(P),
    intro: `Our ${P} are original graphic designs for ${n.who}. Expect ${n.themes}.`,
    sections: [
      { h2: `What makes these ${P} different?`, body: n.about(item) },
      section === 'hoodies'
        ? { h2: `Same designs as our ${n.label.toLowerCase()} tees`, body: 'Every design here started as a tee. Grab the tee for warm days and the hoodie when it turns cold.' }
        : site.facts.hoodiesLive ? { h2: 'Want it warmer? It comes as a hoodie too', body: 'Most designs in this collection are also printed on hoodies, so the same art works when the weather turns.' } : null,
      ...(n.style ? [{ h2: `How to wear ${P}`, body: n.style }] : []),
    ].filter(Boolean) as { h2: string; body: string }[],
    faqs: [
      ...(n.faqs?.(P, section) ?? []),
      { q: 'Are these original designs?', a: n.original },
      { q: 'How are they made?', a: n.made },
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
  o: { slug: string; keyword: string; volume: number; kd: number; product: string; twin?: string; blurb: string; extra?: Faq[]; intro?: string; sections?: { h2: string; body: string }[]; title?: string; description?: string },
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
    title: o.title ?? `${titleCase(o.product)} — Original ${label} Designs`,
    description: o.description ?? `Original ${o.product}: ${o.blurb} Printed to order — new designs every season.`.slice(0, 158),
    h1: titleCase(o.product),
    intro: o.intro ?? `Our ${o.product} are original designs: ${o.blurb}`,
    sections: o.sections ?? [{ h2: `A new ${label} drop every year`, body: 'This collection gets new designs each season. Order early — printed-to-order items take time to make and ship.' }],
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
      { h2: 'Graphic tees for every age', body: 'Graphic tees aren’t an age thing. Pick a design about something you love and a fit you’re comfortable in.' },
      { h2: 'Printed when you order', body: 'Each tee is printed after you order it, so the catalog keeps growing without leftovers.' },
    ],
    faqs: [
      { q: 'Are these graphic tees original designs?', a: 'Yes. Every design is made for this shop — no licensed characters or resold stock art.' },
      { q: 'Do you have graphic tees for women over 40 or over 50?', a: 'Yes. Our designs aren’t made for one age group — they’re about what you love, from country and faith to game day and the holidays.' },
      { q: 'Do you have cropped graphic tees for women?', a: 'Yes — see our cropped graphic tees collection.' },
      { q: 'Do you have plus size graphic tees for women?', a: (f) => `Sizes run ${f.sizeRange}. Check the size chart on each product.`, needs: 'sizeRange' },
      { q: 'Do the designs come on hoodies too?', a: 'Yes. Most designs are also printed on hoodies.', needs: 'hoodiesLive' },
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
    shopifyHandle: 'graphic-tees-for-women-over-40',
  },
  niche(N.footballmom, 'tees', { slug: 'football-mom-shirts', keyword: 'football mom shirts', volume: 3600, kd: 50, product: 'football mom shirts', audience: 'women', name: 'Football Mom Shirts' }),
  niche(N.baseballmom, 'tees', { slug: 'baseball-mom-shirts', keyword: 'baseball mom shirts', volume: 3600, kd: 50, product: 'baseball mom shirts', audience: 'women', name: 'Baseball Mom Shirts' }),
  niche(N.nurse, 'tees', { slug: 'nurse-shirts', keyword: 'nurse shirts', volume: 9900, kd: 55, product: 'nurse shirts', audience: 'women', name: 'Nurse Shirts' }),
  niche(N.christian, 'tees', { slug: 'christian-shirts', keyword: 'christian shirts', volume: 12100, kd: 58, product: 'Christian shirts', audience: 'women', name: 'Christian Shirts' }),
  niche(N.gym, 'tees', { slug: 'mens-gym-shirts', keyword: 'mens gym shirts', volume: 18100, kd: 10, product: "men's gym shirts", twin: 'gym-hoodies', audience: 'men', name: "Men's Gym Shirts" }),
  niche(N.western, 'tees', { slug: 'western-graphic-tees', keyword: 'western graphic tees', volume: 2400, kd: 16, product: 'western graphic tees', twin: 'western-hoodies' }),
  niche(N.fishing, 'tees', { slug: 'fishing-t-shirts', keyword: 'fishing t shirts', volume: 6600, kd: 46, product: 'fishing t-shirts', twin: 'fishing-hoodies' }),
  niche(N.hunting, 'tees', { slug: 'hunting-t-shirts', keyword: 'hunting shirts', volume: 14800, kd: 44, product: 'hunting shirts', twin: 'hunting-hoodies' }) /* RankHero 2026-10-06: "hunting shirts" 14,800 / KD 44; "hunting t shirts" unmeasured */,
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
      { q: 'Do the designs come on hoodies too?', a: 'Yes. Most designs are also printed on hoodies.', needs: 'hoodiesLive' },
    ],
    shopifyHandle: 'graphic-tees-for-men',
  },
  seasonal('halloween', 'tees', { slug: 'halloween-shirts', keyword: 'halloween shirts', volume: 22200, kd: 58, product: 'Halloween shirts', twin: 'halloween-hoodies', blurb: 'horror-movie-night, spooky-season and costume-optional designs.',
    extra: [{ q: 'Do you have horror movie shirts?', a: 'We make original horror-inspired designs. We don’t use movie names, characters or logos.' }],
    // Facts only: every line below describes a design that's in the Shopify collection (2026-10-09, 6 designs).
    // Phrases claimed (RankHero/Etsy, 2026-10-09): halloween shirts 22,200/58 · horror movie shirt 6,600/43 · ghost shirt 2,900/60 ·
    // vintage halloween shirt 1,600/60 · retro halloween shirt 1,600/61 · halloween graphic tee 1,300/64 · witchy shirt 1,000/65 ·
    // pumpkin patch shirt 390/65 · haunted house shirt 320/53 · cute ghost shirt 320/76 · spooky season shirt 320/76.
    title: 'Halloween Shirts — Vintage & Retro Halloween Graphic Tees',
    description: 'Original Halloween shirts: retro horror-movie art, cute ghost and witchy designs, a pumpkin patch tee and a haunted house. Printed to order, $29.99.',
    intro: 'Our Halloween shirts are original vintage-style designs for people who plan October around scary movies, pumpkin patches and porch-light trick-or-treat nights. Some lean spooky, some lean cute, and none of them use a movie name or a licensed character.',
    sections: [
      { h2: 'Spooky, retro and cute Halloween designs', body: 'The collection runs from horror-movie-night art to soft, playful prints. On the spooky side there’s a crooked haunted house under a full moon, a drive-in screen showing a moon and a bat, and a beat-up VHS cover with a glowing jack-o’-lantern. On the cute side there are groovy ghosts in sunglasses, a little ghost hugging a pumpkin, and a black cat asleep on a witch hat. Everything is drawn in a vintage screen-print style, so each Halloween graphic tee reads like a thrift-store find rather than a costume.' },
      { h2: 'For horror movie night', body: 'If your October is a stack of slashers and a bowl of popcorn, start with the two retro horror designs. Night Shift is a worn video-store VHS cover with a jack-o’-lantern glowing on the box, and Midnight Feature puts a bat and a full moon on a drive-in screen. They’re horror movie shirts without the movie: original art, no titles, no famous masks, so they work for anyone who loves the genre rather than one franchise. Haunted Hollow, the crooked haunted house shirt, fits the same double-feature mood.' },
      { h2: 'Ghosts, witches and the pumpkin patch', body: 'Ghost Club is a group of groovy ghosts in sunglasses, the most retro Halloween shirt in the lineup, and Pumpkin Patch Ghost is a small ghost hugging a pumpkin: a cute ghost shirt for the patch, the hayride or a fall photo. For the witchy crowd, Witchy Season has a black cat curled up asleep on a witch hat. All three are drawn for spooky season but soft enough to keep wearing into November.' },
      { h2: 'Unisex and women’s fits', body: 'The haunted-house, drive-in and VHS designs are printed on unisex tees, so they work for men and women. The ghost, pumpkin-patch and black-cat designs come on a relaxed women’s cut. Sizes and colors are listed on each product, and every shirt is printed after you order it.' },
      { h2: 'Where to wear a Halloween shirt', body: 'A horror double feature, a haunted hayride, the pumpkin patch, a costume-optional party, handing out candy on the porch, or the office on October 31st when you don’t want a full costume. Layer one under a flannel or a denim jacket once the nights get cold. Most of these designs still look right in November. Pair the cute designs with a cardigan for a pumpkin-patch photo; the horror ones go with jeans and a dark flannel.' },
      { h2: 'Matching shirts for a group', body: 'Haunted house for one friend, ghosts for another: because the designs share the same vintage look, a group can each pick a different shirt and still look like they planned it. Or order one design in several sizes for the whole family.' },
      { h2: 'Order early for October', body: 'Each shirt is printed to order and then shipped, so give yourself time before the party or the 31st. Delivery estimates show at checkout, and new Halloween designs are added as they’re drawn.' },
    ] }),
  seasonal('thanksgiving', 'tees', { slug: 'thanksgiving-shirts', keyword: 'thanksgiving shirts', volume: 8100, kd: 57, product: 'Thanksgiving shirts', blurb: 'fall, football-and-turkey and family-table designs.',
    extra: [{ q: 'Do you have matching Thanksgiving shirts for family?', a: 'Yes. Any design can be ordered in several sizes so the whole family matches.' }],
    // Phrases claimed (RankHero/Etsy, 2026-10-09): thanksgiving shirts 8,100/57 · turkey shirt 2,900/48 · thanksgiving shirts for women 2,400/58 ·
    // give thanks shirt 170/52 · turkey bowl shirt 110/40 · fall graphic tee 390/75.
    title: 'Thanksgiving Shirts — Turkey Bowl & Give Thanks Graphic Tees',
    description: 'Original Thanksgiving shirts: a Turkey Bowl football turkey for the backyard game and a Give Thanks harvest tee for women. Printed to order, $29.99.',
    intro: 'Our Thanksgiving shirts are original designs for the day itself: the backyard football game, the parade on TV and the long table that follows. Vintage-style art in warm fall colors, printed when you order it.',
    sections: [
      { h2: 'Football, turkey and the family table', body: 'There are two sides to the collection. For the game, a helmeted turkey mascot runs the ball inside a 1950s-style shield badge marked TURKEY BOWL. For the table, GIVE THANKS sits in chunky 1970s lettering over a cornucopia of pumpkins, apples, corn and sunflowers. Both are printed in burnt orange, mustard, rust, navy and cream, so they look right from October through the end of November.' },
      { h2: 'A turkey shirt for the backyard game', body: 'Turkey Bowl is the turkey shirt for the people who play before they eat: the cousins’ flag-football game, the Thanksgiving-morning turkey trot or the couch for the afternoon football on TV. The turkey wears a helmet and carries the ball, drawn like an old team crest, so it reads as a Thanksgiving football shirt rather than a cartoon gag.' },
      { h2: 'Thanksgiving shirts for women', body: 'Give Thanks is the Thanksgiving shirt for women in the collection: a relaxed women’s cut with a harvest cornucopia under 1970s GIVE THANKS lettering. It’s a fall graphic tee you can wear to Friendsgiving, a pumpkin-pie bake, the kids’ school feast or the long table itself, then keep wearing through the season.' },
      { h2: 'Fits for everyone at the table', body: 'The Turkey Bowl design is printed on a unisex classic tee in sizes XS–5XL. Give Thanks comes on a relaxed women’s cut in S–3XL. Both are printed on soft, lightweight cotton, so they’re comfortable through a long afternoon of football and food. Each product page lists its colors.' },
      { h2: 'What to wear on Thanksgiving', body: 'Something you can play a down of backyard football in and still sit through dinner. A soft cotton graphic tee with jeans does both. Add a flannel or a quarter-zip for the cold walk out to the yard, and take it off before the pie.' },
      { h2: 'Why vintage-style Thanksgiving art', body: 'A lot of holiday shirts are a pun and a clip-art turkey. These are illustrations instead: a mascot badge that could have come from an old high-school program, and a harvest still life in 1970s type. They’re made to come out of the drawer every November, not once.' },
      { h2: 'Matching shirts for the family', body: 'Order one design in several sizes and the whole family matches in the photo, or split it: Turkey Bowl for the players, Give Thanks for the hosts. They share the same vintage look, so they sit well side by side.' },
      { h2: 'When to order', body: 'Every shirt is printed after you order it, then shipped. Order early in November so it arrives before the holiday; delivery estimates show at checkout.' },
    ] }),
  // Buy-the-bottom build #1 (RankHero 2026-10-06): "christmas shirts for women" 5,400 / KD 14 — the easy modifier of "christmas shirts" (33,100 / KD 58).
  {
    slug: 'christmas-shirts-for-women', section: 'tees', audience: 'women', name: "Women's Christmas Shirts", seasonal: 'christmas',
    keyword: 'christmas shirts for women', volume: 5400, kd: 14,
    title: 'Christmas Shirts for Women — Original Holiday Graphic Tees',
    description: 'Original Christmas shirts for women: vintage holiday art for the party, the cookie swap and the family photo. Printed to order, $29.99.',
    h1: 'Christmas Shirts for Women',
    // Also claimed (RankHero/Etsy, 2026-10-09): christmas tree shirt 27,100/46 · gingerbread shirt 1,900/46 · retro santa shirt 390/60 ·
    // vintage santa shirt 390/60 · retro christmas shirt 260/75.
    intro: 'Christmas shirts for women that look like the season you actually live: gingerbread-house afternoons, tree-lot trips, a retro Santa on the mantel and lights on the porch. Every design is original holiday art, printed when you order it.',
    sections: [
      { h2: 'Holiday art, not ugly-sweater gags', body: 'These are vintage-style illustrations — a laughing 1950s Santa, a gingerbread street, a red truck hauling a fresh-cut tree, a snowed-in cabin, "Merry & Bright" lettering — the kind of Christmas graphic tee you can wear all December, not just to one party. Soft cotton tees in relaxed women’s and unisex fits.' },
      { h2: 'Find your Christmas shirt', body: 'Retro Santa is a round-faced, mid-century Santa mid-laugh with a sack of pink-wrapped gifts under bubbly HO HO HO letters: a retro Santa shirt in red, pink and cream that looks lifted from an old greeting card. Gingerbread Lane is the gingerbread shirt, a candy-cane-trimmed house with two waving gingerbread people. Fresh Cut Christmas Trees is the Christmas tree shirt, a red pickup hauling a tree down a snowy road, and Cabin Christmas is a log cabin glowing under a crescent moon. Merry & Bright spells it out in 1970s bubble letters ringed with vintage ornaments, the most retro Christmas shirt of the five.' },
      { h2: 'Where to wear a Christmas shirt', body: 'Cookie swaps, the school holiday program, a Christmas-movie night, the tree farm, a white-elephant exchange or the family photo. Layer one under an open flannel or a cardigan with jeans; tuck the front of a relaxed fit into high-rise denim to dress it up.' },
      { h2: 'Matching for the family photo', body: 'Every design comes in a full run of sizes, so you can order the same Christmas shirt for the whole family, a group of friends or your coworkers. The unisex designs fit men too.' },
      { h2: 'When to order', body: 'Each shirt is printed after you order it, then shipped. Order early in December so it arrives before your plans — delivery estimates show at checkout.' },
    ],
    faqs: [
      { q: 'What do you wear to a Christmas party if you don’t want an ugly sweater?', a: 'A Christmas graphic tee under an open flannel or cardigan with jeans is festive without being a costume.' },
      { q: 'Do you have matching Christmas shirts for family?', a: 'Yes. Any design can be ordered in several sizes, and the unisex designs fit men and women.' },
      { q: 'Are these licensed Christmas characters?', a: 'No. Every design is original holiday art made for this shop.' },
      { q: 'Can I return a Christmas shirt if the size is wrong?', a: 'Each shirt is printed to order, so returns are for misprints or damage only. Check the size chart before you order.' },
      ...audienceFaqs('Christmas shirts'),
    ],
    shopifyHandle: 'christmas-shirts-for-women',
  },
  seasonal('christmas', 'tees', { slug: 'christmas-shirts', keyword: 'christmas shirts', volume: 33100, kd: 58, product: 'Christmas shirts', twin: 'christmas-hoodies', blurb: 'holiday designs that work for the party, the family photo and the gift exchange.',
    extra: [
      { q: 'Do you have matching Christmas shirts for family or couples?', a: 'Yes. Any design can be ordered in several sizes so the whole family — or the two of you — match.' },
      { q: 'Do you have funny Christmas shirts?', a: 'Not right now. The current designs are illustrated holiday scenes rather than jokes or puns.' },
    ],
    // Phrases claimed (RankHero/Etsy, 2026-10-09): christmas shirts 33,100/58 · christmas tree shirt 27,100/46 · christmas tee shirts 27,100/59 ·
    // gingerbread shirt 1,900/46 · vintage/retro santa shirt 390/60 · retro christmas shirt 260/75. Women's modifier lives on the child page.
    title: 'Christmas Shirts — Vintage Santa, Tree & Gingerbread Tees',
    description: 'Original Christmas shirts: a retro Santa, a Christmas tree truck, a gingerbread house, a snowy cabin and Merry & Bright. Printed to order, $29.99.',
    intro: 'Our Christmas shirts are original holiday designs for the tree farm, the cabin weekend and the family photo. Vintage-style illustrations instead of ugly-sweater gags, printed when you order them.',
    sections: [
      { h2: 'Five kinds of Christmas', body: 'A red pickup hauling a fresh-cut tree down a snowy back road. A log cabin glowing under a crescent moon with a deer nearby. A gingerbread house with candy-cane trim and two waving gingerbread people. MERRY & BRIGHT in groovy 1970s bubble letters, ringed with vintage ornaments. And a round, rosy 1950s Santa laughing HO HO HO with a sack of pink-wrapped gifts. Each one is drawn as its own scene, so you can pick the December that looks like yours.' },
      { h2: 'Christmas tree, gingerbread or Santa', body: 'If you want a Christmas tree shirt, Fresh Cut Christmas Trees is the one: the truck, the tree and the snowy road, heading home for the living room. Gingerbread Lane is the gingerbread shirt for cookie-decorating season. Retro Santa is the vintage Santa shirt, a mid-century greeting-card Santa in red, pink and cream. These Christmas tee shirts share one vintage style, so they look good side by side in a photo.' },
      { h2: 'Unisex and women’s Christmas shirts', body: 'The tree-truck and cabin designs are printed on unisex classic tees in sizes up to 5XL, so they fit men and women. Retro Santa, Gingerbread Lane and Merry & Bright come on a relaxed women’s cut in S–3XL; all five also live on our Christmas shirts for women page.' },
      { h2: 'Where to wear them', body: 'A cabin weekend, a holiday open house, decorating the tree, a neighborhood lights walk, the office party or Christmas morning itself. On a tree-farm trip the red-truck design is the obvious pick; for a quiet night in, the cabin. Layer one under a flannel, or over a long-sleeve thermal when it’s cold out.' },
      { h2: 'Not an ugly sweater', body: 'These are soft cotton tees with illustrated art, not novelty knits or light-up gags. They’re meant to be worn all December and pulled out again next year. Lightweight cotton also means you won’t overheat in a crowded living room with the fire going.' },
      { h2: 'Matching Christmas shirts', body: 'Pick one design in several sizes for the family photo, or let everyone choose their own scene and let the shared vintage style tie them together. The unisex designs make it easy for couples to match.' },
      { h2: 'Order before December gets busy', body: 'Each shirt is printed after you order it and then shipped, so order early in the season. Delivery estimates show at checkout, and new holiday designs join the collection as they’re drawn.' },
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
