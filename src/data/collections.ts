// Collection pages. Keyword data: RankHero estimates pulled 2026-10-02
// (see ~/.claude/data/local-seo/reports/2026-10-02-graphic-tee-collections.md).
// FAQ questions come from real Google autocomplete phrasing for each keyword (2026-10-02).
// Answers are facts-only: anything depending on an unconfirmed fact uses `needs`
// and stays hidden until that fact is set in site.ts.
// Order within each section = easiest to rank first (build order).
import type { Faq, Facts } from './site';
import { site } from './site';
import { repriceDeep, onSale } from '../lib/price';

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
  orderBy?: string;
  sections: { h2: string; body: string; links?: { href: string; label: string }[] }[];
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
    original: 'Yes. The fish, lures and lake scenes are designed for this shop, with no tackle-brand logos or licensed marks.',
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
    original: 'Yes. The cowboys, boots and desert scenes are designed for this shop. No rodeo association or western-wear brand marks.',
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
    original: 'Yes. Every gym badge is designed in-house. No supplement brands, gym chains or federation logos.',
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
    original: 'Yes. The soccer-mom art is designed for this shop, with no club, league or jersey branding.',
    made: 'Printed when you order it, then shipped, so the design is fresh off the press for the season.',
    style: 'Soccer mom tees are made for the sideline: pair one with leggings or shorts, sneakers and a folding chair. Layer a zip-up hoodie for early-morning games.',
    label: 'Soccer Mom', who: 'moms who spend Saturdays on the sideline', themes: 'sideline, cleat and orange-slice art for game day',
    faqs: () => [
      { q: 'Can I put my player’s number on a soccer mom shirt?', a: 'Yes. Add your player’s number and name before checkout.', needs: 'personalization' },
      { q: 'Are these soccer jerseys?', a: 'No. They are graphic tees for the sideline, not team jerseys.' },
    ],
  },
  anime: {
    about: (item) => `Original anime-style characters and scenes, designed in-house rather than licensed. Each ${item} is printed when you order it.`,
    original: 'Yes. Characters here are original anime-style art; nothing is taken from a show or manga.',
    made: 'Each one is printed to order and shipped from there.',
    style: 'Anime-style tees work with wide-leg jeans, cargo pants or shorts and chunky sneakers. Layer one under an open overshirt for a streetwear look.',
    label: 'Anime-Style', who: 'fans of anime and manga art styles', themes: 'original anime-style characters and scenes — no licensed characters',
    faqs: () => [{ q: 'Do you sell licensed anime characters?', a: 'No. Every design is original anime-style art made for this shop.' }],
  },
  y2k: {
    about: (item) => `Early-2000s graphics redrawn from scratch: chrome type, bubble letters and baby-tee-era shapes. Each ${item} is printed after you order it.`,
    original: 'Yes. The Y2K lettering and graphics are designed for this shop, not copied from old brand logos.',
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
    original: 'Yes. The art is the same original work as our tees, designed for this shop.',
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
    about: (item) => `Original art on a cropped cut that meets high-rise jeans and skirts, like a hand-drawn-style wildflower bouquet in a scalloped varsity patch. Each ${item} is printed after you order it.`,
    original: 'Yes. The cropped designs are designed for this shop. No brand logos or licensed characters.',
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
    original: 'Yes. The football-mom badges are designed in-house and work for any team because they carry no school or league logos.',
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
    original: 'Yes. The baseball-mom designs are designed for this shop, with no MLB, travel-ball or school logos.',
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
  retro: {
    about: (item) => `Retro here means the look of a specific decade: 70s bubble letters and striped sunsets, 80s gym and VHS art, 90s cel anime and Y2K flip phones. Each ${item} is printed when you order it, so the throwback is in the drawing, not a faded blank.`,
    original: 'Yes. Every retro design is original art designed for this shop. No reprinted old logos, brands or licensed characters.',
    made: 'Printed to order on a new tee, then shipped. The worn, retro look comes from the illustration.',
    style: 'Retro tees look right with straight-leg or mom jeans, a denim jacket and clean sneakers. Tuck the front for a 70s look, or wear it loose with cargo pants for 90s.',
    label: 'Retro', who: 'anyone who loves a 70s, 80s, 90s or Y2K throwback', themes: '70s bubble type, 80s gym and VHS art, 90s anime and Y2K sparkle',
    faqs: () => [
      { q: 'What is the difference between retro and vintage tees?', a: 'In this shop, vintage tees have a worn, old-print finish from any era. Retro tees copy the look of a specific decade, like 70s bubble letters or Y2K chrome.' },
      { q: 'Which decades do your retro tees cover?', a: 'Mostly the 1970s through the early 2000s: groovy 70s lettering, 80s gym and horror-movie art, 90s anime and Y2K designs.' },
    ],
  },
  funny: {
    about: (item) => `Every design here is built around one joke you get in two seconds: a pun, a deadpan line or a funny picture, drawn as real vintage-style art instead of plain text on a shirt. Each ${item} is printed when you order it.`,
    original: 'Yes. The jokes and the art are original to this shop. No movie quotes, brand slogans or licensed characters.',
    made: 'Printed to order, then shipped to you.',
    style: 'A funny tee does the talking, so keep the rest simple: jeans or joggers and sneakers. Wear it to the event the joke is about, from leg day to the cookie swap.',
    label: 'Funny', who: 'people who want a shirt that gets a laugh from across the room', themes: 'puns and deadpan one-liners for the gym, the lake, the deer stand, the holidays and the sideline',
    faqs: () => [
      { q: 'Are your funny shirts family-friendly?', a: 'Yes. Every joke is clean enough for the family table: no profanity and no put-downs.' },
      { q: 'Do funny graphic tees make good gifts?', a: 'Yes. Pick the joke that matches their hobby, like fishing, lifting, nursing or Thanksgiving dinner, and it is a gift they will actually wear.' },
    ],
  },
  camo: {
    about: (item) => `Our original hunting and outdoor art printed on real camo heavyweight hoodies: duck camo, tree-bark camo, forest camo and black camo. Each ${item} is printed when you order it, with the art in light ink so it reads on the pattern.`,
    original: '', // folded into 'Are camo hoodies in style?' to keep the page at 6 FAQs (R8.7)
    made: 'Each camo hoodie is printed after you order it, with the art on a cream backing that follows its outline so every line reads on the pattern. Most are $49.99 on holiday sale, all-over pink camo hoodies are $64.99, US shipping is free on orders of $45 or more, and a wrong size gets one free exchange within 30 days.',
    style: 'A camo hoodie works in the blind, at deer camp and in town: wear it over a thermal on cold mornings, or with jeans and boots on the weekend.',
    label: 'Camo', who: 'hunters and anyone who lives in camo from October to February', themes: 'duck, deer and upland art on duck camo, tree camo, forest camo and black camo',
    // FAQ standard R8.7 (director, 2026-10-17): questions from Google autocomplete/PAA for "camo hoodie" (in style, what to wear, hunting, duck camo, fit); 40-60 word answers.
    faqs: () => [
      { q: 'Are camo hoodies in style?', a: 'Yes. Camo hoodies are worn far beyond the woods now: with jeans and boots in town, over leggings, and at tailgates and deer camp. Graphic Tees Co. prints original hunting and outdoor art on real camo fleece, never a licensed hunting-brand pattern or logo, so each one reads as a statement piece.' },
      { q: 'What do you wear with a camo hoodie?', a: 'Keep the rest simple so the camo leads. Dark or light-wash jeans, black joggers or khaki work pants pair best, with boots or clean sneakers. Women often wear a camo hoodie with black leggings and a cap. Skip other loud patterns: one solid color like cream, black or olive keeps the outfit clean.' },
      { q: 'Can you wear these camo hoodies hunting?', a: 'Yes, as a layer. Our heavyweight camo hoodies are 10 oz/yd² cotton-poly fleece with a fleece-lined hood, warm in the blind, the stand or around deer camp. They are not waterproof or scent-control hunting gear, so on wet or bitter mornings wear one under a shell jacket.' },
      { q: 'What is duck camo?', a: 'Duck camo is the old-school waterfowl pattern of brown, tan and dark green blotches, first worn by duck hunters hiding in marsh grass and cattails. Several of our hoodies come in Duck Camo; others use Forest Camo, Darkwood or Deadwood tree camo, Black Camo, or our own all-over pink camo print.' },
      { q: 'How do camo hoodies fit?', a: 'Our heavyweight camo hoodies have a relaxed unisex fit in sizes XS to 3XL, roomy enough for a thermal underneath. Order your usual size for a standard fit or one size up for an oversized look. The all-over pink camo hoodies run 2XS to 6XL; every product page has its exact size chart.' },
    ],
  },
  halfzip: {
    about: (item) => `Our original designs on a heavyweight half zip pullover with a stand-up collar. Each ${item} is printed when you order it.`,
    original: 'Yes. Every design on our half zips is original art made for this shop.',
    made: 'Printed to order, then shipped to you.',
    style: 'A half zip pullover dresses up a little more than a hoodie: wear it over a tee with chinos or jeans, zip it up on cold mornings, or open at the collar indoors.',
    label: 'Half Zip', who: 'anyone who wants a pullover that looks sharper than a hoodie', themes: 'outdoor, gym and holiday art on heavyweight half zips',
    faqs: () => [{ q: 'Is a half zip warm?', a: 'Yes. It is a heavyweight fleece pullover with a stand-up collar you can zip to the chin.' }],
  },
  womenshoodies: {
    about: (item) => `Every hoodie in the shop that is cut or styled for women: cropped, embroidered, Y2K, Christmas, western and faith designs. Each ${item} is printed or stitched when you order it.`,
    original: 'Yes. Every design is original art made for this shop.',
    made: 'Printed or embroidered to order, then shipped.',
    style: 'Graphic hoodies for women look best a little relaxed: leggings or high-rise jeans, sneakers or boots, and a cropped fit for a shorter top.',
    label: "Women's Graphic", who: 'women who want a hoodie with real art on it', themes: 'cropped, embroidered, Y2K, Christmas, western and faith designs',
  },
  menshoodies: {
    about: (item) => `Every hoodie in the shop cut or styled for men: camo hunting hoodies, gym hoodies, zip-ups, oversized anime and fishing designs, each with a dry joke in the art. Each ${item} is printed or stitched when you order it.`,
    original: 'Yes. Every design is original art made for this shop.',
    made: 'Printed or embroidered to order, then shipped.',
    style: 'Graphic hoodies for men work with jeans, work pants or joggers; size up one for a looser layer over a tee or under a jacket.',
    label: "Men's Graphic", who: 'men who want a hoodie with a real joke and real art on it', themes: 'camo hunting, gym, fishing, zip-up, oversized and anime designs',
    faqs: () => [
      { q: 'What are the best graphic hoodies for men?', a: "Graphic Tees Co. men's graphic hoodies pair original vintage-style art with a dry one-line joke: camo hunting hoodies, gym and oversized hoodies, fishing zip-ups and anime pullovers. Prices start at $39.99 on sale, US shipping is free on orders over $45, and every hoodie is printed to order." },
      { q: "How do men's graphic hoodies fit?", a: 'Our pullover and zip-up hoodies are classic unisex fits in S to 5XL, the heavyweight and camo hoodies run XS to 3XL with a relaxed cut, and the oversized hoodies hang loose with dropped shoulders. Keep your usual size for a regular fit or go up one for a looser layer.' },
      { q: "Which men's hoodie is warmest?", a: 'The heavyweight and camo hoodies are the warmest at about 10 oz fleece with a lined hood, made for the deer stand and cold mornings. The classic pullover is 8 oz cotton-poly fleece for everyday wear, and the oversized hoodie is heavyweight cotton with a roomy cut.' },
      { q: 'Will a hoodie arrive in time for a gift?', a: 'Each hoodie is printed when you order it, which takes about 2 to 5 business days, then arrives in about 3 to 8 business days in the US. Order by early December for Christmas. If the size is wrong, you get one free size exchange within 30 days.' },
    ],
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
  o: { slug: string; keyword: string; volume: number; kd: number; product: string; twin?: string; audience?: 'women' | 'men'; name?: string; guideSection?: { h2: string; body: string; links: { href: string; label: string }[] } },
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
        : site.facts.hoodiesLive ? { h2: 'Want it warmer? Look for the hoodie', body: 'A growing number of our designs are also printed on hoodies with the same art, so it still works when the weather turns. Hoodie versions live in our hoodie collections.' } : null,
      ...(n.style ? [{ h2: `How to wear ${P}`, body: n.style }] : []),
      ...(o.guideSection ? [o.guideSection] : []),
    ].filter(Boolean) as { h2: string; body: string; links?: { href: string; label: string }[] }[],
    faqs: [
      ...(n.faqs?.(P, section) ?? []),
      ...(n.original ? [{ q: 'Are these original designs?', a: n.original }] : []),
      { q: 'How are they made?', a: n.made },
      { q: `How long do ${P} take to ship?`, a: (f) => `Printing takes ${f.productionDays}, then your order ships. Delivery estimates are shown at checkout.`, needs: 'productionDays' },
      ...audienceFaqs(P),
    ],
    shopifyHandle: o.slug,
    twin: o.twin,
    orderBy: o.orderBy,
  };
}

function seasonal(
  season: 'halloween' | 'thanksgiving' | 'christmas',
  section: Section,
  o: { slug: string; keyword: string; volume: number; kd: number; product: string; twin?: string; blurb: string; extra?: Faq[]; intro?: string; orderBy?: string; sections?: { h2: string; body: string; links?: { href: string; label: string }[] }[]; title?: string; description?: string; name?: string },
): Collection {
  const label = titleCase(season);
  return {
    slug: o.slug,
    section,
    name: o.name ?? `${label} ${section === 'hoodies' ? 'Hoodies' : 'Tees'}`,
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
      // A page with its own dated 'When should I order…' answer in `extra` skips this generic one (no near-duplicate FAQs).
      ...(o.extra?.some((f) => /^when should i order/i.test(f.q)) ? [] : [{ q: `When should I order ${o.product}?`, a: (f: Facts) => `Order at least two weeks before you need it. Printing takes ${f.productionDays} before shipping.`, needs: 'productionDays' as const }]),
      { q: `Are your ${o.product} licensed characters?`, a: 'No. Every design is original art made for this shop.' },
      ...(o.extra ?? []),
      ...audienceFaqs(o.product),
    ],
    shopifyHandle: o.slug,
    twin: o.twin,
  };
}

const rawTees: Collection[] = [
  (() => {
    // Google push #1081 (R0 item 5, 2026-11-24): answer-first intro, cat and dog section, 8 FAQs, inbound guide links. Facts from the live collection (170 products, 168 at $24.99, Bella+Canvas 6400 relaxed and 3001, 4.2 oz) read 2026-11-24. Last known position: unknown. Keyword graphic tees for women 27,100 / KD 9 (RankHero, re-check before 2027).
    const c: Collection = {
    slug: 'graphic-tees-for-women', section: 'tees', audience: 'women', name: "Women's Graphic Tees",
    keyword: 'graphic tees for women', volume: 27100, kd: 9,
    title: 'Graphic Tees for Women — Original Designs, New Every Month',
    description: 'Original graphic tees for women: country, western, fishing, cropped and seasonal designs. Printed to order, with a new collection every month.',
    h1: 'Graphic Tees for Women',
    intro: 'Original graphic tees for women — country and western, fishing, faith, football-mom and seasonal designs, with a new collection every month.',
    sections: [
      { h2: 'Shop by what you love', body: 'Country, western, fishing, nurse, faith and seasonal drops — every collection is original art, not stock graphics.' },
      { h2: 'Graphic tees for every age', body: 'Graphic tees aren’t an age thing. Pick a design about something you love and a fit you’re comfortable in. Trail days too: see our guide to hiking shirts for women.', links: [{ href: '/guides/hiking-shirts-for-women/', label: 'Hiking shirts for women' }] },
      { h2: 'Printed when you order', body: 'Each tee is printed after you order it, so the catalog keeps growing without leftovers. For the holidays, see our Christmas shirts for women.', links: [{ href: '/christmas-shirts-for-women/', label: 'Christmas shirts for women' }] },
      { h2: 'Want it warmer?', body: 'Many of these designs also come as hoodies. Our graphic hoodies for women cover pullover, cropped, zip-up and oversized blanks from $39.99.', links: [{ href: '/hoodies/graphic-hoodies-for-women/', label: 'Graphic hoodies for women' }] },
    ],
    faqs: [
      { q: 'Are these graphic tees original designs?', a: 'Yes. Every design is made for this shop — no licensed characters or resold stock art.' },
      { q: 'Do you have graphic tees for women over 40 or over 50?', a: 'Yes. Our designs aren’t made for one age group — they’re about what you love, from country and faith to game day and the holidays.' },
      { q: 'Do you have cropped graphic tees for women?', a: 'Yes — see our cropped graphic tees collection.' },
      { q: 'Do you have plus size graphic tees for women?', a: (f) => `Sizes run ${f.sizeRange}. Check the size chart on each product.`, needs: 'sizeRange' },
      { q: 'Do the designs come on hoodies too?', a: 'Some do, and more are added every week. Hoodie versions use the same art and are listed in our hoodie collections.', needs: 'hoodiesLive' },
    ],
    shopifyHandle: 'graphic-tees-for-women',
    };
    c.title = 'Graphic Tees for Women: Funny, Vintage & Cute, $24.99';
    c.description = "Women's graphic tees: Cat Allegedly., Built Like a Dinner Roll, Scary Dog Afraid of the Vacuum. 170 original designs, $24.99, printed to order.";
    c.intro = "We sell 170 original graphic tees for women, mostly a Bella+Canvas relaxed women's tee or the classic 3001 (100% combed ring-spun cotton, 4.2 oz): $24.99 through November 30, then $29.99 from December 1. Every tee is printed to order; order by Friday, December 4, 2026 for Christmas delivery in the US, and you get one free size exchange with nothing to mail back.";
    c.sections = [
      ...c.sections,
      { h2: 'Cat and dog tees', body: "For the cat mom: Cat Allegedly. is a tuxedo cat beside a smashed ornament, and Christmas Cats is the full holiday crowd. For the dog mom: Built Like a Dinner Roll is a corgi, Scary Dog, Afraid of the Vacuum is a pitbull, and there are three French bulldog Christmas tees. Want it as a hoodie? See our cat hoodies, or our gift guide for cat moms.",
        links: [{ href: '/hoodies/cat-hoodies/', label: 'Cat hoodies' }, { href: '/guides/gifts-for-cat-moms/', label: 'Gifts for cat moms' }] },
    ];
    c.faqs = [
      { q: 'How do the graphic tees for women fit?', a: 'Most are a relaxed women\'s cut in sizes S to 3XL; the classic unisex ones run S to 4XL. Order your usual size for an easy fit or one size up for a roomier look. Graphic Tees Co. offers one free size exchange within 30 days of delivery.' },
      { q: 'What are the tees made of?', a: 'Each tee is 100% combed, ring-spun cotton at a lightweight 4.2 oz per square yard, pre-shrunk with side seams. Heather colors contain some polyester. It is soft, breathable and light enough to wear under a cardigan or a denim jacket all year.' },
      { q: 'How do I wash a printed graphic tee?', a: 'Turn the tee inside out and wash in cold water with similar colors, then tumble dry low or hang to dry. Skip bleach and fabric softener, and never iron over the print. Cold washing keeps the ink sharp through many washes.' },
      { q: 'What kinds of designs do you have?', a: 'Graphic Tees Co. has 170 original women\'s tees: funny and vintage storybook art, cat and dog designs, Christian, country and western, nurse, football mom and Christmas. Every design is made for this shop, with no licensed characters or stock art.' },
      { q: 'When should I order for Christmas?', a: 'Order by Friday, December 4, 2026 to leave a safe margin for Christmas delivery in the US. Each tee is printed to order in 2–5 business days, then ships in about 3–8 business days. Orders over $45 ship free, and checkout shows a delivery estimate.' },
      { q: 'What is the size exchange?', a: 'If a tee does not fit, Graphic Tees Co. sends one replacement in a new size free within 30 days of delivery, and you do not mail the first one back. Compare the size chart with a tee you already own before ordering.' },
      { q: 'Are the tees $24.99 all year?', a: (f) => `The tees are $24.99 through November 30, 2026 and $29.99 from December 1. Every one is printed after you order, in sizes ${f.sizeRange}. The price you see at checkout is the price you pay.`, needs: 'sizeRange' },
      ...c.faqs.filter(x => !/plus size/i.test(x.q)),
    ];
    return c;
  })(),
  (() => {
    // Google push #1106 (R0 item 5, 2026-11-27): answer-first intro, concert and gift sections, 8 FAQs. Facts from the live Shopify collection read 2026-11-27 (15 products, all active, all $24.99; unisex tees XS to 4XL, women's S to 3XL; colors White, Vintage White, Natural, Athletic Heather, Heather Dust, Heather Clay, Heather Stone, Heather Mauve, Black, Navy, Heather Navy, Maroon, Military Green, Pink, Ash). country graphic tees 1,000 / KD 24 (RankHero, per brief; not re-measured, RankHero answers nothing unattended). Last known position: unknown.
    const c = niche(N.country, 'tees', { slug: 'country-graphic-tees', keyword: 'country graphic tees', volume: 1000, kd: 24, product: 'country graphic tees', audience: 'women', name: 'Country Graphic Tees' });
    c.title = 'Country Graphic Tees: Dirt Road Radio, Sweet Tea & Sunsets';
    c.description = 'Country graphic tees: Dirt Road Radio, Sweet Tea & Sunsets, Saturday Night Rodeo. $24.99 through Nov 30, printed to order. Free US shipping $45+.';
    c.intro = 'We sell 15 original country graphic tees, from Dirt Road Radio and Sweet Tea & Sunsets to Saturday Night Rodeo, Howdy and Hold On Eight, in sizes XS to 4XL on the unisex ones and S to 3XL on the women\'s. They are $24.99 through November 30, then $29.99, on a Bella+Canvas 3001 tee (4.2 oz lightweight cotton) or the relaxed women\'s Bella+Canvas 6400. Every tee is printed to order; {{order by Friday, December 4, 2026 for Christmas delivery in the US||Christmas delivery in the US is no longer guaranteed}}, and you get one free size exchange with nothing to mail back.';
    c.sections = [
      ...c.sections,
      { h2: 'What to wear to a country concert, rodeo or barn dance', body: 'For a country concert, pair Dirt Road Radio with jeans and boots. For the rodeo or a barn dance, Saturday Night Rodeo and Howdy look right tucked into denim, and Natural or Vintage White hides the dust. Cold evening? Add a flannel or a denim jacket over the tee, or pull a hoodie on top.', links: [{ href: '/products/womens-country-dirt-road-radio-graphic-tee/', label: 'Dirt Road Radio' }, { href: '/products/womens-western-saturday-night-rodeo-graphic-tee/', label: 'Saturday Night Rodeo' }, { href: '/products/womens-western-howdy-graphic-tee/', label: 'Howdy' }] },
      { h2: 'Country gifts for her', body: 'For the friend who lives for Saturday night, Sweet Tea & Sunsets and Run Free are easy gifts, and Hold On Eight suits the rodeo fan on any list. Every tee is printed to order and includes one free size exchange. For more cowgirl and cowboy art, see our western graphic tees and western hoodies.', links: [{ href: '/products/womens-country-sweet-tea-sunsets-graphic-tee/', label: 'Sweet Tea & Sunsets' }, { href: '/products/womens-western-run-free-graphic-tee/', label: 'Run Free' }, { href: '/products/unisex-western-hold-on-eight-graphic-tee/', label: 'Hold On Eight' }, { href: '/western-graphic-tees/', label: 'Western graphic tees' }, { href: '/hoodies/western-hoodies/', label: 'Western hoodies' }] },
    ];
    c.faqs = [
      ...c.faqs,
      { q: 'How do the country graphic tees fit?', a: 'The unisex tees are a classic fit in sizes XS to 4XL, and the women\'s tees are a relaxed cut in sizes S to 3XL. Order your usual size for an easy fit or one size up for a roomier look. Each product page has a size chart in inches, and Graphic Tees Co. gives you one free size exchange.' },
      { q: 'What are the country tees made of?', a: 'Graphic Tees Co. country tees are Bella+Canvas 3001, a soft 4.2 oz lightweight tee of combed ring-spun cotton, or the relaxed Bella+Canvas 6400 for women\'s cuts. Heather colors blend in some polyester. The design is printed on the front when you order, so it feels soft rather than stiff.' },
      { q: 'How do I wash a country graphic tee?', a: 'Turn it inside out, wash cold with similar colors, and tumble dry low or hang dry. Skip bleach and fabric softener, and never iron directly over the print. Cold water keeps the country art sharp wash after wash, and the cotton stays soft after a long night of dancing.' },
      { q: 'What colors do the country tees come in?', a: 'Colors vary by design and include White, Vintage White, Natural, Black, Navy, Maroon, Military Green, Pink, Heather Stone, Heather Navy and Athletic Heather. We offer a color only where the art reads clearly, so each product page lists its colors with a photo of every one.' },
      { q: 'How much are the country graphic tees?', a: 'Country graphic tees at Graphic Tees Co. [[are $24.99 through November 30, then $29.99.||are $29.99.]] Each tee is printed to order with original art, sizes run XS to 4XL on the unisex tees and S to 3XL on the women\'s, and orders of $45 or more ship free in the US.' },
      { q: 'When should I order a country tee for Christmas?', a: '{{Order by Friday, December 4, 2026 for Christmas delivery in the US. Each tee is printed in 2–5 business days, then ships in about 3–8 business days. Orders of $45 or more ship free, and checkout shows a delivery estimate.||Christmas delivery in the US is no longer guaranteed. Each tee is printed in 2–5 business days, then ships in about 3–8 business days, so it may arrive after December 25. Orders of $45 or more ship free, and checkout shows a delivery estimate.}}' },
    ];
    return c;
  })(),
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
  (() => {
    const c = niche(N.christian, 'tees', { slug: 'christian-shirts', keyword: 'christian shirts', volume: 12100, kd: 58, product: 'Christian shirts', audience: 'women', name: 'Christian Shirts' });
    // #1074 inbound link: one natural sentence to the men's page.
    c.sections = [...c.sections, { h2: 'Christian shirts for him', body: 'Shopping for a husband, dad or men\'s group? Our Christian shirts for men page has the three tees made for him, from Short Grace. Hot Food. to Still Under Construction.', links: [{ href: '/christian-shirts-for-men/', label: 'Christian shirts for men' }] }];
    return c;
  })(),
  (() => {
    // #1074 (2026-11-23): men's Christian tee page. christian shirts men 12,100 / KD 11-12 (RankHero 2026-10-17, valid to 2027-01-15). Three tees tagged christian-shirts-for-men; Holy Ghost cover shows a man and a woman (covers.ts), so it qualifies (R7.5). Tees only; hoodies stay on /hoodies/christian-hoodies/.
    const c = niche(N.christian, 'tees', { slug: 'christian-shirts-for-men', keyword: 'christian shirts men', volume: 12100, kd: 12, product: "men's Christian shirts", audience: 'men', name: "Men's Christian Shirts" }) /* RankHero 2026-10-17 */;
    c.title = "Christian Shirts for Men: Funny & Sincere Tees, $24.99";
    c.description = "Christian shirts men will wear: Short Grace. Hot Food., Still Under Construction and Holy Ghost, Friendly Edition. 4.2 oz tees, $24.99 through Nov 30.";
    c.intro = "We sell 3 Christian shirts for men, each a Bella+Canvas 3001 tee (100% combed ring-spun cotton, 4.2 oz) in sizes S to 4XL: $24.99 through November 30, then $29.99 from December 1. Every shirt is printed to order; order by Friday, December 4, 2026 for Christmas delivery in the US, and you get one free size exchange with nothing to mail back.";
    c.sections = [
      ...c.sections,
      { h2: 'The three Christian tees', body: "Short Grace. Hot Food. is the joke the church already makes: a 1950s dinner table, a dad with his head bowed and a pot roast going cold, for the man who keeps the blessing short. Still Under Construction. is sincere: Jesus the carpenter at a workbench mending a chair, with Philippians 1:6 underneath, for the men's Bible study. Holy Ghost, Friendly Edition. is a church-kid joke, a small sheet ghost with a halo hugging a worn book." },
      { h2: 'Where to wear them', body: "Sunday service, the men's group, small group, a church fall festival or Sunday dinner. They are lightweight unisex tees, so a man and a woman can both wear the Holy Ghost, Friendly Edition design." },
      { h2: 'Want it warmer?', body: "The same designs also come as hoodies, including Short Grace and Still Under Construction. See our Christian hoodies, or our Christian shirts for her.",
        links: [{ href: '/hoodies/christian-hoodies/', label: 'Christian hoodies' }, { href: '/christian-shirts/', label: 'Christian shirts for her' }] },
    ];
    c.faqs = [
      ...c.faqs,
      { q: 'How do the Christian shirts for men fit?', a: 'They are a classic unisex crew neck in sizes S through 4XL. Order your usual size for a regular fit, or size up one for a looser, roomier fit. Compare the size chart with a tee you already own; Graphic Tees Co. offers one free size exchange within 30 days of delivery.' },
      { q: 'What are the Christian tees made of?', a: 'Each one is a Bella+Canvas 3001, 100% combed, ring-spun cotton at a lightweight 4.2 oz per square yard, pre-shrunk with side seams. Heather colors contain some polyester. It is soft and breathable enough for a Sunday service, small group or a church fall festival.' },
      { q: 'What does Still Under Construction mean?', a: 'The Still Under Construction tee shows Jesus the carpenter at a workbench mending a worn chair, with Philippians 1:6 below: God who began a good work in you will carry it on to completion. It is a sincere design for men who know they are works in progress.' },
      { q: 'How do I wash a printed Christian tee?', a: 'Turn the tee inside out and wash in cold water with similar colors, then tumble dry low or hang to dry. Skip bleach and fabric softener, and never iron over the print. Cold washing keeps the inks looking sharp longer through plenty of Sunday mornings.' },
      { q: 'When should I order for Christmas?', a: 'Order by Friday, December 4, 2026 to leave a safe margin for Christmas delivery in the US. Each tee is printed to order in 2–5 business days, then ships in about 3–8 business days. Orders over $45 ship free, and checkout shows a delivery estimate.' },
      { q: 'Are these good gifts for a pastor, dad or church group?', a: 'Yes. Short Grace. Hot Food. suits any dad who says the family blessing, and Still Under Construction suits a husband or a men\'s group friend. Every design is family-clean original art, and the free size exchange within 30 days covers a sizing guess for the recipient.' },
    ];
    return c;
  })(),
  (() => {
    // Google push #1077 (R0 item 5, 2026-11-23): answer-first intro, hoodie-for-cold-walks section, guide links, 8 FAQs. Facts from the live grid (20 designs, $24.99 sale tee, Bella+Canvas 3001 4.2 oz). Last position unknown.
    const c = niche(N.gym, 'tees', { slug: 'mens-gym-shirts', keyword: 'mens gym shirts', volume: 18100, kd: 10, product: "men's gym shirts", twin: 'gym-hoodies', audience: 'men', name: "Men's Gym Shirts" });
    c.title = "Men's Gym Shirts: Funny Lifting Tees, $24.99";
    c.description = "Men's gym shirts: Twelve Labors. Zero Cardio., Sisyphus Had Bad Programming, Rack Your Weights Respectfully. 20 original tees, $24.99, printed to order.";
    c.intro = "We sell 20 original gym shirts for men, each a Bella+Canvas 3001 tee (100% combed ring-spun cotton, 4.2 oz) in sizes S to 4XL: $24.99 through November 30, then $29.99 from December 1. Every shirt is printed to order; order by Friday, December 4, 2026 for Christmas delivery in the US, and you get one free size exchange with nothing to mail back.";
    c.sections = [
      ...c.sections,
      { h2: 'Gym hoodies for cold walks to the gym', body: "The same lifting jokes come on hoodies for the walk in and the drive home. Pick the tee for the set and the hoodie for the layers either side.",
        links: [{ href: '/hoodies/gym-hoodies/', label: 'Gym hoodies' }] },
      { h2: 'Guides for lifters', body: "Not sure which design to pick? Our guide to workout shirts for men sorts the fits and fabrics, and our gifts for gym rats guide covers the lifter who has everything.",
        links: [{ href: '/guides/workout-shirts-for-men/', label: 'Workout shirts for men' }, { href: '/guides/gifts-for-gym-rats/', label: 'Gifts for gym rats' }] },
    ];
    c.faqs = [
      ...c.faqs,
      { q: 'Can you lift in a cotton gym tee?', a: 'Yes, though it is cotton, not moisture-wicking performance fabric. Graphic Tees Co. gym shirts are Bella+Canvas 3001 tees in 100% combed ring-spun cotton at a light 4.2 oz, so they breathe well for a lift but will not wick sweat like polyester.' },
      { q: 'How do the men\'s gym shirts fit?', a: 'They are a classic unisex fit with a crew neck, in sizes S through 4XL. Order your usual size for a regular fit or go up one for a looser lifting fit. Compare the size chart with a tee you already own, and the first size exchange is free.' },
      { q: 'How do I wash a gym shirt so the print lasts?', a: 'Turn the shirt inside out, wash it cold with similar colors, then tumble dry low or hang it to dry. Skip bleach and fabric softener, and never iron directly over the print. Graphic Tees Co. prints each shirt to order, and that care keeps the ink bright.' },
      { q: 'Is a gym shirt a good gift for a lifter?', a: 'Yes. Graphic Tees Co. gym shirts suit the gym buddy, the brother who never skips leg day and the dad with a garage gym. Pick a line he will recognize, like Twelve Labors. Zero Cardio., and add a size exchange in case the fit is off.' },
    ];
    return c;
  })(),
  (() => {
    // Google push #1098 (R0 item 5, 2026-11-26): answer-first intro, wear section, 8 FAQs. Facts from the live Shopify collection read 2026-11-26 (15 products, all active, all $24.99; unisex tees XS to 4XL, women's S to 3XL; colors White, Vintage White, Natural, Heather Stone, Athletic Heather, Heather Mauve, Heather Clay, Heather Dust, Light Violet, Black, Military Green, Navy, Army, Soft Cream, Maroon, Ash). Last known position: unknown. western graphic tees 2,400 / KD 16 (RankHero, per brief; not re-measured, RankHero 403 unattended).
    const c = niche(N.western, 'tees', { slug: 'western-graphic-tees', keyword: 'western graphic tees', volume: 2400, kd: 16, product: 'western graphic tees', twin: 'western-hoodies' });
    c.title = 'Western Graphic Tees: Hold Your Horses, Run Free';
    c.description = 'Western graphic tees: Hold Your Horses, Kick Up Dust, Saturday Night Rodeo, Howdy. $24.99 through Nov 30, printed to order. Free US shipping $45+.';
    c.intro = 'We sell 15 original western graphic tees, from Hold Your Horses, I\'m Overstimulated and Run Free to Kick Up Dust, Saturday Night Rodeo and a Desert Rattler, in sizes XS to 4XL on the unisex ones and S to 3XL on the women\'s. They are $24.99 through November 30, then $29.99, on a Bella+Canvas 3001 tee (4.2 oz lightweight cotton) or the relaxed women\'s Bella+Canvas 6400. Every tee is printed to order; {{order by Friday, December 4, 2026 for Christmas delivery in the US||Christmas delivery in the US is no longer guaranteed}}, and you get one free size exchange with nothing to mail back.';
    c.sections = [
      ...c.sections,
      { h2: 'How to wear a western graphic tee', body: 'For the rodeo or a county fair, tuck the front of the tee into jeans, add a belt and boots, and pick a color like Natural or Vintage White that looks right in the dust. For a night out, knot the hem of a women\'s tee over a denim skirt. On a ranch or an ordinary Saturday, wear it loose with a trucker cap. Cold evening? Pull a western hoodie over it.', links: [{ href: '/hoodies/western-hoodies/', label: 'Western hoodies' }] },
    ];
    c.faqs = [
      ...c.faqs,
      { q: 'How do the western graphic tees fit?', a: 'The unisex tees are a classic fit in sizes XS to 4XL, and the women\'s tees are a relaxed cut in sizes S to 3XL. Order your usual size for an easy fit or one size up for a roomier look. Each product page has a size chart in inches, and Graphic Tees Co. gives you one free size exchange.' },
      { q: 'What are the western tees made of?', a: 'Graphic Tees Co. western tees are Bella+Canvas 3001, a soft 4.2 oz lightweight tee of combed ring-spun cotton, or the relaxed Bella+Canvas 6400 for women\'s cuts. Heather colors blend in some polyester. The design is printed on the front when you order, so it feels soft rather than stiff.' },
      { q: 'How do I wash a western graphic tee?', a: 'Turn it inside out, wash cold with similar colors, and tumble dry low or hang dry. Skip bleach and fabric softener, and never iron directly over the print. Cold water keeps the cowboy, horse or desert art sharp wash after wash, and the cotton stays soft.' },
      { q: 'What colors do the western tees come in?', a: 'Colors vary by design and include White, Vintage White, Natural, Heather Stone, Athletic Heather, Heather Mauve, Black, Navy, Army and Military Green. We offer a color only where the art reads clearly, so each product page lists its colors with a photo of every one.' },
      { q: 'When should I order a western tee for Christmas?', a: '{{Order by Friday, December 4, 2026 for Christmas delivery in the US. Each western tee is printed in 2–5 business days, then ships in about 3–8 business days. Orders of $45 or more ship free, and checkout shows a delivery estimate.||Christmas delivery in the US is no longer guaranteed. Each western tee is printed in 2–5 business days, then ships in about 3–8 business days, so it may arrive after December 25. Orders of $45 or more ship free, and checkout shows a delivery estimate.}}' },
      { q: 'What if the size is wrong?', a: 'Graphic Tees Co. offers one free size exchange within 30 days of delivery, with nothing to mail back. If your western tee arrives misprinted or damaged, we replace it. Check the size chart first, since the women\'s cut is relaxed and the unisex tee is a classic fit.' },
    ];
    return c;
  })(),
  niche(N.fishing, 'tees', { slug: 'fishing-t-shirts', keyword: 'fishing t shirts', volume: 6600, kd: 46, product: 'fishing t-shirts', twin: 'fishing-hoodies', guideSection: { h2: 'What to wear fishing', body: 'Not sure what to wear on a cold dock versus a warm one? Our guide to fishing shirts for men sorts the light tees from the fleece layers.', links: [{ href: '/guides/fishing-shirts-for-men/', label: 'Fishing shirts for men' }] } }),
  niche(N.hunting, 'tees', { slug: 'hunting-t-shirts', keyword: 'hunting shirts', volume: 14800, kd: 44, product: 'hunting shirts', twin: 'hunting-hoodies' }) /* RankHero 2026-10-06: "hunting shirts" 14,800 / KD 44; "hunting t shirts" unmeasured */,
  niche(N.soccermom, 'tees', { slug: 'soccer-mom-shirts', keyword: 'soccer mom shirts', volume: 2900, kd: 42, product: 'soccer mom shirts', audience: 'women', name: 'Soccer Mom Shirts' }),
  niche(N.oversized, 'tees', { slug: 'oversized-graphic-tees', keyword: 'oversized graphic tee', volume: 27100, kd: 48, product: 'oversized graphic tees', twin: 'oversized-hoodies' }),
  niche(N.football, 'tees', { slug: 'football-shirts', keyword: 'football shirts', volume: 74000, kd: 51, product: 'football shirts' }),
  niche(N.anime, 'tees', { slug: 'anime-shirts', keyword: 'anime shirts', volume: 18100, kd: 51, product: 'anime-style shirts', twin: 'anime-hoodies' }),
  (() => {
    // Google push #1066 (R0 item 5, 2026-11-22): answer-first intro, cross-garment section, 7 FAQs. Prices from the live store (tee $24.99, hoodie $39.99, embroidered zip $57.99).
    const c = niche(N.y2k, 'tees', { slug: 'y2k-graphic-tees', keyword: 'y2k graphic tees', volume: 4400, kd: 52, product: 'Y2K graphic tees', twin: 'y2k-hoodies' });
    c.title = 'Y2K Graphic Tees: Early-2000s Looks, $24.99';
    c.description = 'Y2K graphic tees with flip phones, chrome bubble letters and pink glitter art. Original designs, printed to order, $24.99, free size exchange.';
    c.intro = 'We sell 3 original Y2K graphic tees at $24.99 each, plus 5 Y2K designs in all once you count the hoodies and zip-ups. Every tee is printed to order, ships free in the US on $45 or more, and comes with one free size exchange within 30 days of delivery.';
    c.sections = [
      ...c.sections,
      { h2: 'Y2K hoodies and zip-ups with the same art', body: 'Prefer a layer? Hot Mess Express, Still Loading Since 1999 and Low Battery, High Standards are also printed on pullover hoodies at $39.99 and on embroidered zip hoodies at $57.99. Gold Star for Leaving the House and Main Quest Postponed live on the hoodie page too.',
        links: [{ href: '/hoodies/y2k-hoodies/', label: 'Y2K hoodies' }, { href: '/hoodies/y2k-zip-up-hoodies/', label: 'Y2K zip-up hoodies' }] },
    ];
    c.faqs = [
      ...c.faqs,
      { q: 'How do the Y2K tees fit?', a: 'The Y2K tees on this page are the Bella+Canvas 6400 women\'s relaxed tee in sizes S to 3XL, with a looser cut through the body. For a boxier, oversized look size up one; for a closer fit take your usual size. One free size exchange within 30 days covers a wrong guess.' },
      { q: 'What art is on the Y2K graphic tees?', a: 'Each Graphic Tees Co. Y2K tee pairs an early-2000s object with chrome bubble letters: a glittery pink toy train, a teal desktop computer with a progress bar, and a pink flip phone with a blinking battery. Butterflies and sparkles fill the space around each one.' },
      { q: 'When should I order a Y2K tee for Christmas?', a: 'Order by Friday, December 4, 2026 to leave a margin for Christmas delivery in the US; December 8 is the last realistic day. Each Y2K tee is printed to order in 2 to 5 business days, then ships in about 3 to 8 business days, and checkout shows a delivery estimate.' },
    ];
    return c;
  })(),
  niche(N.vintage, 'tees', { slug: 'vintage-graphic-tees', keyword: 'vintage graphic tees', volume: 22200, kd: 57, product: 'vintage graphic tees' }),
  niche(N.retro, 'tees', { slug: 'retro-graphic-tees', keyword: 'retro graphic tees', volume: 22200, kd: 54, product: 'retro graphic tees' }) /* RankHero 2026-10-16; R11.6 style collection, hub fed by the retro-graphic-tees tag */,
  (() => { const c = niche(N.funny, 'tees', { slug: 'funny-graphic-tees', keyword: 'funny graphic tees', volume: 5400, kd: 58, product: 'funny graphic tees' }); c.sections = [...c.sections, { h2: 'Funny Black Friday shirts', body: 'Shopping humor is its own corner of the funny tees: coupons, 4 a.m. lines and leftovers. Our funny Black Friday shirts put one clean joke on a $24.99 tee.', links: [{ href: '/black-friday-shirts/', label: 'Black Friday shirts' }] }]; return c; })() /* RankHero 2026-10-16; R11.6 style collection, hub fed by the funny-graphic-tees tag */,
  {
    slug: 'graphic-tees-for-men', section: 'tees', audience: 'men', name: "Men's Graphic Tees",
    keyword: 'graphic tees for men', volume: 90500, kd: 64,
    title: 'Graphic Tees for Men — Original Designs, New Every Month',
    description: 'Original graphic tees for men: fishing, hunting, western, gym and seasonal designs. Printed to order, with a new collection every month.',
    h1: 'Graphic Tees for Men',
    intro: 'Original graphic tees for men — fishing, hunting, western, gym and seasonal designs. New collections drop every month.',
    sections: [
      { h2: 'Shop by what you do', body: 'Pick the collection that fits your weekends: the lake, the deer stand, the gym or the ranch. For the lifters, our men\'s gym shirts page has 20 funny lifting tees from $24.99.', links: [{ href: '/mens-gym-shirts/', label: "Men's gym shirts" }] },
      { h2: 'Graphic tees for men over 40', body: 'Original designs about real interests — fishing, hunting, ranch life — wear better than trend slogans at any age. Go with a classic fit and a tee that fits your shoulders.' },
      { h2: 'Graphic hoodies for men', body: 'Many of these designs also come as hoodies. Our graphic hoodies for men cover pullover, zip-up, heavyweight and oversized blanks from $39.99, and the full-zip ones have their own page of men\'s zip-up hoodies.', links: [{ href: '/hoodies/graphic-hoodies-for-men/', label: 'Graphic hoodies for men' }, { href: '/hoodies/zip-up-hoodies-for-men/', label: "Men's zip-up hoodies" }] },
      { h2: 'Printed when you order', body: 'Each tee is printed after you order it, so the catalog keeps growing without leftovers. For faith designs, see our Christian shirts for men.', links: [{ href: '/christian-shirts-for-men/', label: 'Christian shirts for men' }] },
    ],
    faqs: [
      { q: 'Are these graphic tees original designs?', a: 'Yes. Every design is made for this shop — no licensed characters or resold stock art.' },
      { q: 'Do you have graphic tees for men over 40 or over 50?', a: 'Yes. Fishing, hunting, western and gym designs are made for grown men with real hobbies, not one age group.' },
      { q: 'Do you have big and tall or 3XL graphic tees?', a: (f) => `Sizes run ${f.sizeRange}. Check the size chart on each product.`, needs: 'sizeRange' },
      { q: 'Do the designs come on hoodies too?', a: 'Some do, and more are added every week. Hoodie versions use the same art and are listed in our hoodie collections.', needs: 'hoodiesLive' },
    ],
    shopifyHandle: 'graphic-tees-for-men',
  },
  {
    // Group / bulk-order hub (Sam 2026-10-18). Linked from the homepage and every product page via site.facts.crewOffer.
    // RankHero 2026-10-18: cousin crew shirts 4,400/35 (17.9K listings) · cousin shirts 1,600/38 · ugly christmas sweater party 5,400/38 ·
    // family thanksgiving shirts 1,600/51 · turkey trot shirts 720/27. "bulk t shirts" 22,200/10 has no competition count (blended, R2.10): not targeted.
    slug: 'group-shirts', section: 'tees', name: 'Group & Family Shirts',
    keyword: 'cousin crew shirts', volume: 4400, kd: 35,
    title: 'Cousin Crew Shirts & Group Shirts for Family Holidays',
    description: 'Funny cousin crew shirts, family Thanksgiving tees and ugly sweater party crewnecks for the whole group. Order 10+ items, mix designs and sizes, save 15%.',
    h1: 'Group & Family Shirts',
    intro: 'Cousin crew shirts, family Thanksgiving tees and Christmas party crewnecks, made for the whole group. Order 10 or more items, mix any designs and sizes, and 15% comes off automatically at checkout.',
    sections: [
      { h2: 'Cousin crew shirts', body: 'Kids Table Alumni is for the cousins who graduated from the folding table and never really left. It comes on a tee and a crewneck, so the whole crew can match without everyone wearing the same thing.' },
      { h2: 'Family Thanksgiving and turkey trot shirts', body: 'Running the turkey trot as a team, or just showing up for the pie? Mix the Turkey Trot hoodie with the Thanksgiving tees and everyone gets a joke that fits.' },
      { h2: 'Ugly sweater party and Christmas crew shirts', body: 'For the office party, the friends exchange or the family photo: Technically a Sweater, Attending Under Protest and White Elephant Champion are built for a room full of people who all get the joke.' },
      { h2: 'Shopping squad shirts for Black Friday', body: 'Going on the 4 a.m. run together? The Black Friday Shopping Squad tees give each person a job, one has the list and one is the driver, and they count toward the 15% crew discount.', links: [{ href: '/black-friday-shirts/', label: 'Black Friday shirts' }] },
      { h2: 'How crew orders work', body: 'Add 10 or more items to your cart, any designs, sizes and colors, and the 15% discount applies on its own. Each item is printed to order, so plan about two weeks for production and shipping before your event.' },
    ],
    faqs: [
      { q: 'How do I get the group discount?', a: 'Put 10 or more items in one cart. Any mix of designs, sizes and colors counts, and 15% comes off automatically at checkout. No code needed.' },
      { q: 'Can everyone in the group get a different size or design?', a: 'Yes. Each item is chosen separately, so the crew can mix tees, crewnecks and hoodies in any sizes and still count toward the 10.' },
      { q: 'How early should we order for Thanksgiving or Christmas?', a: 'Order about two weeks before your event. Every shirt is printed when you order it, then shipped, so earlier is safer during the holidays.' },
      { q: 'Can you put our family name or a custom line on the shirts?', a: 'Not yet. Custom names are coming in 2027. For now the crew shop has ready-made designs that work for any family or group.' },
    ],
    shopifyHandle: 'group-shirts',
  },
  {
    // Google push item 2 (Sam 2026-11-01, docs/backlog/google-push-nov.md). Google reads 'black friday t shirts' as shirts ABOUT Black Friday
    // (squad / crew tees, shopping humor), not a sale page; /black-friday/ stays the deals page and the two link each other.
    // RankHero 2026-11-02 (scripts/keyword-gap.py): black friday shirts 720 / KD 44 (competition 9,941); no Black Friday long-tail measures.
    // Tees only (the audit keeps crewnecks out of tee grids). Noindexed until 3 products are live (linkable.ts).
    slug: 'black-friday-shirts', section: 'tees', name: 'Black Friday Shirts',
    keyword: 'black friday shirts', volume: 720, kd: 44,
    title: 'Black Friday Shirts: Funny Shopping Squad Tees $24.99',
    description: 'Funny Black Friday shirts for the 4 a.m. shopping trip: matching shopping squad tees for the group and one-line jokes. Printed to order, tees $24.99.',
    h1: 'Black Friday Shirts',
    intro: 'Funny Black Friday shirts for the people who set an alarm for the doorbusters: matching shopping squad tees for the whole group and one-line jokes about coupons, carts and leftovers. Tees are $24.99 and printed after you order. [[Printing takes 2–5 business days and delivery 3–8 more, so an order placed now will most likely land after November 27: buy it for the Black Friday deals through Cyber Monday, the rest of the shopping season, or next year\'s 4 a.m. run.||Printing takes 2–5 business days and delivery 3–8 more. Black Friday 2026 has ended, so these are for the shopper in your life as a Christmas gift (order by Friday, December 4, 2026) or for next year\'s 4 a.m. run.]]',
    sections: [
      { h2: 'Matching shopping squad shirts', body: 'The squad shirts share one headline, BLACK FRIDAY SHOPPING SQUAD, and give each person a job: one has the list, one is just the driver. Mix them in one cart and the group matches without everyone wearing the same line.' },
      { h2: 'Funny Black Friday shirts for the 4 a.m. crowd', body: 'For the shopper who treats the doorbuster rack like a sport, the one who got up at 4 a.m. for a toaster, and the one still full from Thursday and already shopping. Every line is short enough to read across a parking lot.' },
      { h2: '[[Looking for Black Friday deals instead?||Looking for Black Friday favorites?]]', body: 'This page is shirts about Black Friday. [[Our Black Friday sale on tees, hoodies and sweatshirts runs November 8 to November 30, with bigger savings the more you mix, and no code needed.||Our Black Friday 2026 sale ran November 8 to November 30 and has ended; the deals return in November 2027. For Christmas gifts, see the Christmas shirts page.]]',
        links: [{ href: '/black-friday/', label: '[[Black Friday deals on graphic tees and hoodies||Black Friday 2026 favorites]]' }, ...(onSale() ? [] : [{ href: '/christmas-shirts/', label: 'Christmas shirts' }])] },
    ],
    faqs: [
      { q: 'When should I order a Black Friday shirt to have it in time?', a: 'The safe date to wear it on Black Friday, November 27, was about November 12. Each Black Friday shirt is printed in 2–5 business days after you order, then takes about 3–8 business days to arrive in the US, so an order now will most likely arrive after the day. [[It still works for Cyber Monday week, the holiday season and next year.||It still works as a Christmas gift for the shopper in your life (order by Friday, December 4, 2026) and for next year\'s Black Friday.]]' },
      { q: 'Do you have matching Black Friday shirts for a group?', a: 'Yes. The Black Friday Shopping Squad tees share one headline and give each person a role line, so a family or friend group can match. Ten or more items in one cart take 15% off automatically, with any mix of designs and sizes.' },
      { q: 'What are the Black Friday shirts made of?', a: 'Unisex Black Friday shirts are Bella+Canvas 3001 tees, lightweight 4.2 oz combed ring-spun cotton. Women\'s are the Bella+Canvas 6400 relaxed tee in the same weight with a looser cut. Heather colors contain some polyester.' },
      { q: 'How do the Black Friday tees fit?', a: 'The unisex tee has a classic fit that runs true to size for men and a little roomy for women. The women\'s relaxed tee has a softer, looser shape; take your usual size. Each product page has a size chart.' },
      { q: 'Are Black Friday shirts on sale for Black Friday?', a: '[[Yes. Our Black Friday deals run November 8 to November 30 and apply to these shirts too: mix several items and the discount comes off at checkout without a code. See the Black Friday deals page for the tiers.||The Black Friday 2026 deals ran November 8 to November 30 and have ended; they return in November 2027. These shirts stay in the shop at today\'s prices. For Christmas gifts, order by Friday, December 4, 2026 and see the Christmas shirts page.]]' },
      { q: 'Can I order a matching group of Black Friday shirts in one cart?', a: 'Yes. Mix the Shopping Squad tees (I Have the List, I\'m Just the Driver) with the other Black Friday designs in one cart. Ten or more items take 15% off automatically, any mix of designs and sizes, and the group page lists the rest of the crew shirts.' },
      { q: 'Which Black Friday shirt fits better, the unisex or the women\'s tee?', a: 'The unisex Bella+Canvas 3001 has a classic fit in S–4XL and runs true to size for men. The women\'s Bella+Canvas 6400 is a relaxed cut in S–3XL, looser through the body. Order your usual size in either; one free size exchange within 30 days covers a wrong guess.' },
      { q: 'What if my Black Friday shirt is the wrong size?', a: 'Within 30 days of delivery we send one replacement in a new size free, and you don\'t have to mail the first shirt back. Misprints and damage are reprinted or refunded within 30 days.' },
    ],
    shopifyHandle: 'black-friday-shirts',
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
      { h2: 'Ghosts, witches and the pumpkin patch', body: 'Ghost Club is a group of groovy ghosts in sunglasses, the most retro Halloween shirt in the lineup, and Pumpkin Patch Ghost is a small ghost hugging a pumpkin: a cute ghost shirt for the patch, the hayride or a fall photo. For the witchy crowd, Witchy Season has a black cat curled up asleep on a witch hat. All three are made for spooky season but soft enough to keep wearing into November.' },
      { h2: 'Unisex and women’s fits', body: 'The haunted-house, drive-in and VHS designs are printed on unisex tees, so they work for men and women. The ghost, pumpkin-patch and black-cat designs come on a relaxed women’s cut. Sizes and colors are listed on each product, and every shirt is printed after you order it.' },
      { h2: 'Where to wear a Halloween shirt', body: 'A horror double feature, a haunted hayride, the pumpkin patch, a costume-optional party, handing out candy on the porch, or the office on October 31st when you don’t want a full costume. Layer one under a flannel or a denim jacket once the nights get cold. Most of these designs still look right in November. Pair the cute designs with a cardigan for a pumpkin-patch photo; the horror ones go with jeans and a dark flannel.' },
      { h2: 'Matching shirts for a group', body: 'Haunted house for one friend, ghosts for another: because the designs share the same vintage look, a group can each pick a different shirt and still look like they planned it. Or order one design in several sizes for the whole family.' },
      { h2: 'Order early for October', body: 'Each shirt is printed to order and then shipped, so give yourself time before the party or the 31st. Delivery estimates show at checkout, and new Halloween designs are added as they’re designed.' },
    ] }),
  seasonal('thanksgiving', 'tees', { slug: 'thanksgiving-shirts', keyword: 'thanksgiving shirts', volume: 8100, kd: 57, product: 'Thanksgiving shirts', blurb: 'fall, football-and-turkey and family-table designs.',
    // Phrases claimed (RankHero/Etsy, 2026-10-09): thanksgiving shirts 8,100/57 · turkey shirt 2,900/48 · thanksgiving shirts for women 2,400/58 ·
    // give thanks shirt 170/52 · turkey bowl shirt 110/40 · fall graphic tee 390/75.
    // FAQ refresh (director, 2026-10-17, rulebook R8.7): questions from Google autocomplete for "thanksgiving shirts" (for family, funny,
    // for women, for men, for couples, what to wear on thanksgiving dinner); answers 40–60 words with real prices, sizes and dates.
    title: 'Thanksgiving Shirts — Turkey Trot, Pie & Family Table Tees',
    description: 'Original Thanksgiving shirts: Turkey Trot, Pie Oh My, Mash Hour, Give Thanks and more, for the game, the trot and the table. Tees $24.99 through Nov 30.',
    intro: 'Thanksgiving shirts for the whole day: the turkey trot in the morning, the backyard football game, the long table and the nap after pie. Seventeen original designs, from a quiet Give Thanks harvest to Mash Hour and Here for the Scraps, every tee $24.99 through November 30 and printed when you order it.',
    sections: [
      { h2: 'Funny or heartfelt: pick your table', body: 'Half the collection tells a joke: Mash Hour, Here for the Scraps, Pie Oh My, Totally a Pilgrim, Spill the Gravy, Cute But Corny, Nap Queen, Leftovers Club and Kids Table Alumni. The other half keeps it warm and simple: Give Thanks, the Give Thanks Harvest cornucopia, Pumpkin Pie, Gobble Gobble Turkey and Friendsgiving. All of it is vintage-style art in burnt orange, mustard, rust and cream.' },
      { h2: 'For the turkey trot and the backyard game', body: 'Turkey Trot is for the people who run before they eat, and Turkey Bowl puts a helmeted turkey on the ball for the cousins’ flag-football game. Turkey Day Crew is the group shirt for the whole kitchen team. Soft lightweight cotton, so you can run, play a down or two and still sit through dinner.' },
      { h2: 'Thanksgiving shirts for women', body: 'Most of the women’s designs come on a relaxed women’s cut in S–3XL: Pie Oh My, Here for the Scraps, Nap Queen, Spill the Gravy, Cute But Corny, Pumpkin Pie, Gobble Gobble Turkey, Friendsgiving and Give Thanks. Unisex designs fit women too if you like a looser, boxier tee.' },
      { h2: 'Matching shirts for the family', body: 'Give everyone their own line from the same vintage look: Mash Hour for the cook, Here for the Scraps for the dog person, Kids Table Alumni for the grown cousins, Turkey Trot for the runners. Or order one design in every size so the whole family matches in the photo.' },
      { h2: 'Want it warmer?', body: 'Many of these designs also come as crewneck sweatshirts in our Thanksgiving sweatshirts collection, on an 8 oz cotton-poly fleece, for a cold walk to the yard or an outdoor Friendsgiving.' },
    ],
    extra: [
      { q: 'What are good Thanksgiving shirts for the whole family?', a: 'Pick one design in every size so everyone matches in the photo, or mix jokes from the same vintage look: Mash Hour for the cook, Kids Table Alumni for the grown cousins, Turkey Trot for the runners. Graphic Tees Co. unisex tees run XS–5XL and every design is family-clean.' },
      { q: 'Do you have funny Thanksgiving shirts?', a: 'Yes. Nine of our Thanksgiving tees carry a clean one-liner, including Mash Hour, Here for the Scraps, Pie Oh My, Totally a Pilgrim and Spill the Gravy. They are all on our funny Thanksgiving shirts page, at $24.99 each during the holiday sale through November 30.' },
      { q: 'Are there Thanksgiving shirts for men?', a: 'Yes. Turkey Bowl is cut as a men’s tee, and the unisex designs (Turkey Trot, Mash Hour, Totally a Pilgrim, Leftovers Club, Turkey Day Crew, Kids Table Alumni and the Give Thanks Harvest) are sized for men in a classic fit up to 5XL.' },
      { q: 'What should I wear to Thanksgiving dinner?', a: 'Something you can sit, eat and nap in. A soft cotton Thanksgiving tee with jeans is enough for most family dinners; add a flannel or a crewneck sweatshirt for a cold drive or an outdoor game. Choose a family-clean joke if Grandma is hosting.' },
      { q: 'When should I order to get it before Thanksgiving?', a: 'Order by about November 12, 2026. Every Graphic Tees Co. shirt is printed after you order it, which takes 2–5 business days, and US delivery takes about 3–8 business days more. Thanksgiving is Thursday, November 26; checkout shows a delivery estimate.' },
      { q: 'What if the shirt doesn’t fit?', a: 'You get one free size exchange within 30 days of delivery: we print the new size and there is nothing to mail back. Misprints or damage are reprinted or refunded within 30 days. US shipping is free on orders of $45 or more.' },
    ] }),
  // AEO slogan-first page (rulebook R9.11, director 2026-10-16): "funny thanksgiving shirt" 4,400 / KD 48 (RankHero 2026-10-16).
  // Fed by the funny-thanksgiving-shirts tag (tees only; crewnecks stay in thanksgiving-sweatshirts). Exact-match H1, price line, joke first.
  seasonal('thanksgiving', 'tees', { slug: 'funny-thanksgiving-shirts', name: 'Funny Thanksgiving Shirts', keyword: 'funny thanksgiving shirt', volume: 4400, kd: 48, product: 'funny Thanksgiving shirts', twin: 'thanksgiving-shirts', blurb: 'one clean joke per shirt for the turkey trot, Friendsgiving and the long table.',
    title: 'Funny Thanksgiving Shirts — Here for the Scraps & More',
    description: 'Funny Thanksgiving shirts with one clean joke each: Here for the Scraps, Mash Hour, Totally a Pilgrim, Pie Oh My. Tees $24.99 through Nov 30.',
    intro: 'Funny Thanksgiving shirts, joke first: Here for the Scraps, Mash Hour, Totally a Pilgrim, Pie Oh My, Nap Queen, Leftovers Club and Turkey Trot. Every tee is $24.99 (regular $29.99) through November 30, drawn as vintage-style art and printed when you order it.',
    sections: [
      { h2: 'The jokes', body: 'Here for the Scraps is for the guest who only came for the leftovers. Mash Hour turns the potato course into happy hour. Totally a Pilgrim is for the cousin who has never once dressed up. Pie Oh My is the dessert-table shirt, Nap Queen is for the couch after dinner, Leftovers Club is for the Friday sandwich crowd, and Turkey Trot is for the people who run before they eat.' },
      { h2: 'Funny, but clean enough for the family table', body: 'Every line here gets a laugh from across the room without making anyone at the table wince: no profanity, no put-downs, no movie quotes. They are made to be worn at Grandma’s, not just at Friendsgiving.' },
      { h2: 'Price and fit', body: 'Tees are $24.99 during the holiday sale (regular $29.99), through November 30. Unisex designs are printed on a soft lightweight cotton tee in a classic fit; women’s designs come on a relaxed women’s cut. Each product page lists its sizes and colors.' },
      { h2: 'Matching funny shirts for the family', body: 'Give everyone a different joke: Mash Hour for the cook, Here for the Scraps for the dog person, Totally a Pilgrim for the uncle. They share the same vintage look, so they still read as a set in the photo.' },
      { h2: 'When to order', body: 'Each shirt is printed after you order it, then shipped. Order in early November so it arrives before the holiday; delivery estimates show at checkout.' },
    ],
    extra: [
      { q: 'What is a good funny Thanksgiving shirt for family dinner?', a: 'Pick a clean one-liner about the food: Mash Hour, Pie Oh My or Here for the Scraps all get a laugh at the table without offending anyone.' },
      { q: 'How much are your funny Thanksgiving shirts?', a: 'Tees are $24.99 (regular $29.99) during the holiday sale through November 30.' },
      { q: 'Do these designs come on sweatshirts too?', a: 'Most of them do. The crewneck versions are in our Thanksgiving sweatshirts collection.' },
    ] }),
  // AEO slogan-first page (rulebook R9.11, director 2026-10-17): "funny christmas shirt" 8,100 / KD 58 (RankHero 2026-10-15). Fed by the
  // funny-christmas-shirts tag (tees only; crewnecks stay in christmas-sweatshirts). Exact-match H1, price line, joke first.
  seasonal('christmas', 'tees', { slug: 'funny-christmas-shirts', name: 'Funny Christmas Shirts', keyword: 'funny christmas shirt', volume: 8100, kd: 58, product: 'funny Christmas shirts', twin: 'christmas-shirts', blurb: 'one clean joke per shirt for the office party, the white elephant and the family photo.',
    title: 'Funny Christmas Shirts — Sleigh Queen, Define Naughty & More',
    description: 'Funny Christmas shirts with one clean joke each: Sleigh Queen, Define Naughty, Jolly-ish, Snow Problem, Dough Ho Ho. Tees $24.99 through Nov 30.',
    intro: 'Funny Christmas shirts, joke first: Sleigh Queen, Define Naughty, Jolly-ish, Snow Problem, Sleighping In, Dough Ho Ho, Ho Ho Howdy and Light Show Manager. Every tee is $24.99 (regular $29.99) through November 30, drawn as vintage-style art and printed when you order it.',
    sections: [
      { h2: 'The jokes', body: 'Sleigh Queen is for the friend who runs the whole holiday. Define Naughty puts a storybook Santa next to a fair question. Jolly-ish is for anyone who is festive within limits. Snow Problem is the easygoing one, Sleighping In is for the late riser on Christmas morning, Dough Ho Ho is for the cookie baker, Ho Ho Howdy is the cowgirl Christmas, and Light Show Manager is for the dad on the ladder with the extension cords.' },
      { h2: 'Funny, but clean enough for the office party', body: 'Every line here gets a laugh from across the room without making anyone wince: no profanity, no innuendo, no movie or cartoon quotes. They work at the office party, the school concert and Grandma’s table.' },
      { h2: 'Price and fit', body: 'Tees are $24.99 during the holiday sale (regular $29.99), through November 30. Women’s designs come on a relaxed women’s cut in S–3XL; men’s and unisex designs are on a soft lightweight cotton tee up to 5XL. Each product page lists its sizes and colors.' },
      { h2: 'Matching funny shirts for the family photo', body: 'Give everyone their own joke: Light Show Manager for Dad, Sleigh Queen for Mom, Jolly-ish for the teenager. They share one vintage look, so they still read as a set in the Christmas card photo. If you would rather stay warm, the same jokes come on funny Christmas hoodies, with a hood and a pouch pocket.', links: [{ href: '/hoodies/christmas-hoodies/', label: 'Funny Christmas hoodies' }] },
      { h2: 'When to order', body: 'Each shirt is printed after you order it, which takes 2–5 business days, then arrives in about 3–8 business days. Order by early December for Christmas; delivery estimates show at checkout.' },
    ],
    extra: [
      { q: 'What is a good funny Christmas shirt for an office party?', a: 'Pick a clean one-liner that works on anyone: Jolly-ish, Snow Problem or Light Show Manager from Graphic Tees Co. all get a laugh without crossing a line. Every design is family-clean, with no profanity, innuendo or movie quotes, so it is safe for coworkers and the boss.' },
      { q: 'How much are your funny Christmas shirts?', a: 'Graphic Tees Co. funny Christmas tees are $24.99 (regular $29.99) during the holiday sale through November 30, and US shipping is free on orders over $45. Crewneck sweatshirt versions are $34.99 on sale.' },
      { q: 'Do these designs come on sweatshirts too?', a: 'Most of them do. The crewneck sweatshirt versions use the same art and live in our Christmas sweatshirts collection, and a few, like Define Naughty and Light Show Manager, also come as hoodies in our Christmas hoodies collection.' },
      { q: 'What if the size is wrong?', a: 'Every shirt is printed to order, so instead of a return you get one free size exchange within 30 days of delivery: we print the new size and there is nothing to mail back. Misprints or damage are reprinted or refunded within 30 days.' },
    ] }),
  // Buy-the-bottom build #1 (RankHero 2026-10-06): "christmas shirts for women" 5,400 / KD 14 — the easy modifier of "christmas shirts" (33,100 / KD 58).
  {
    slug: 'christmas-shirts-for-women', section: 'tees', audience: 'women', name: "Women's Christmas Shirts", seasonal: 'christmas',
    keyword: 'christmas shirts for women', volume: 5400, kd: 14,
    title: 'Christmas Shirts for Women: Funny & Vintage Tees, $24.99',
    description: 'Christmas shirts for women: Jolly-ish, Sleigh Queen, Santa Gets All the Credit and vintage Santa art. $24.99 through Nov 30. Free size exchange.',
    h1: 'Christmas Shirts for Women',
    // Also claimed (RankHero/Etsy, 2026-10-09): christmas tree shirt 27,100/46 · gingerbread shirt 1,900/46 · retro santa shirt 390/60 ·
    // vintage santa shirt 390/60 · retro christmas shirt 260/75.
    intro: 'We sell 65 Christmas shirts for women and unisex tees, most on a relaxed women\'s fit in sizes S to 3XL: $24.99 through November 30, then $29.99 from December 1. Every shirt is printed to order; order by Friday, December 4, 2026 for Christmas delivery in the US, and you get one free size exchange with nothing to mail back. Christmas shirts for women that look like the season you actually live: gingerbread-house afternoons, tree-lot trips, a retro Santa on the mantel and lights on the porch. Every design is original holiday art, printed when you order it.',
    sections: [
      { h2: 'Holiday art, not ugly-sweater gags', body: 'These are vintage-style illustrations — a laughing 1950s Santa, a gingerbread street, a red truck hauling a fresh-cut tree, a snowed-in cabin, "Merry & Bright" lettering — the kind of Christmas graphic tee you can wear all December, not just to one party. Soft cotton tees in relaxed women’s and unisex fits.' },
      { h2: 'Find your Christmas shirt', body: 'Retro Santa is a round-faced, mid-century Santa mid-laugh with a sack of pink-wrapped gifts under bubbly HO HO HO letters: a retro Santa shirt in red, pink and cream that looks lifted from an old greeting card. Gingerbread Lane is the gingerbread shirt, a candy-cane-trimmed house with two waving gingerbread people. Fresh Cut Christmas Trees is the Christmas tree shirt, a red pickup hauling a tree down a snowy road, and Cabin Christmas is a log cabin glowing under a crescent moon. Merry & Bright spells it out in 1970s bubble letters ringed with vintage ornaments, the most retro Christmas shirt of the five.' },
      { h2: 'Where to wear a Christmas shirt', body: 'Cookie swaps, the school holiday program, a Christmas-movie night, the tree farm, a white-elephant exchange or the family photo. Layer one under an open flannel or a cardigan with jeans; tuck the front of a relaxed fit into high-rise denim to dress it up.' },
      { h2: 'Matching for the family photo', body: 'Every design comes in a full run of sizes, so you can order the same Christmas shirt for the whole family, a group of friends or your coworkers. The unisex designs fit men too. Want something warmer? Browse our Christmas hoodies for women and men in the same original holiday art.', links: [{ href: '/hoodies/christmas-hoodies/', label: 'Christmas hoodies for women and men' }] },
      { h2: 'The funny ones', body: 'Jolly-ish is red and green plaid lettering with a pink bow for the woman who is in the spirit until the last gingerbread is gone. Sleigh Queen, Sleighping In, Dough Ho Ho and Nana\'s Cookies are the baking-and-napping lines, and Santa Gets All the Credit is for whoever actually did the shopping. For more one-liners, see our funny Christmas shirts.', links: [{ href: '/funny-christmas-shirts/', label: 'Funny Christmas shirts' }] },
      { h2: 'Matching with him', body: 'The unisex designs, like Christmas Tree Farm, Vintage Santa and Fresh Cut Christmas Trees, fit men and women, so a couple can match. Shopping for him? See our Christmas shirts for men.', links: [{ href: '/christmas-shirts-for-men/', label: 'Christmas shirts for men' }] },
      { h2: 'Want it warmer?', body: 'Many of these Christmas designs are also printed on hoodies. See our graphic hoodies for women, from $39.99, for the pullover, cropped, zip-up and oversized versions.', links: [{ href: '/hoodies/graphic-hoodies-for-women/', label: 'Graphic hoodies for women' }] },
      { h2: 'When to order', body: 'Each shirt is printed after you order it, then shipped. Order early in December so it arrives before your plans — delivery estimates show at checkout.' },
    ],
    faqs: [
      { q: 'What do you wear to a Christmas party if you don’t want an ugly sweater?', a: 'A Christmas graphic tee under an open flannel or cardigan with jeans is festive without being a costume.' },
      { q: 'Do you have matching Christmas shirts for family?', a: 'Yes. Any design can be ordered in several sizes, and the unisex designs fit men and women.' },
      { q: 'What is a good funny Christmas shirt for an office party?', a: 'Pick a clean one-liner like Jolly-ish, Snow Problem or Santa Gets All the Credit. Every Graphic Tees Co. design is family-clean, with no profanity or innuendo, so it works for coworkers and the boss, and each tee is $24.99 through November 30.' },
      { q: 'How do the women\'s Christmas tees fit?', a: 'The women\'s tees are a relaxed crew neck in lightweight 4.2 oz cotton, in sizes S to 3XL. Each product page has a size chart with chest and length measurements; size up for an oversized look or down to keep it closer to the body.' },
      { q: 'When should I order for Christmas delivery?', a: 'Order by Friday, December 4, 2026 to leave a safe margin in the US. Each shirt is printed to order in 2–5 business days and arrives in about 3–8 business days; delivery estimates show at checkout, and shipping is free over $45.' },
      { q: 'How should I wash a printed Christmas tee?', a: 'Turn the tee inside out, wash cold with like colors, and tumble dry low or hang dry. Skip bleach and never iron over the print. The ink holds up to regular washing with that care.' },
      { q: 'Are these licensed Christmas characters?', a: 'No. Every design is original holiday art made for this shop.' },
      { q: 'Can I return a Christmas shirt if the size is wrong?', a: 'Yes, in a way. Every Graphic Tees Co. shirt is printed to order, so instead of a return you get one free size exchange within 30 days of delivery: we print the new size and there is nothing to mail back. Misprints or damage are reprinted or refunded within 30 days.' },
      ...audienceFaqs('Christmas shirts'),
    ],
    shopifyHandle: 'christmas-shirts-for-women',
  },
  // Men's Christmas (director 2026-10-17, R2.9 re-measure): "christmas shirt men" 18,100 / KD 10 (Dec peak 135,000, 36% US).
  // Filled by tag christmas-shirts-for-men: the men's Christmas tees plus the unisex ones (unisex covers show a man and a woman).
  {
    slug: 'christmas-shirts-for-men', section: 'tees', audience: 'men', name: "Men's Christmas Shirts", seasonal: 'christmas',
    keyword: 'christmas shirt men', volume: 18100, kd: 10,
    title: "Christmas Shirts for Men: Funny Holiday Tees, $24.99",
    description: "26 Christmas shirts for men: Define Naughty, Light Show Manager, Bah Humbug, deer camp art. Soft 4.2 oz tees, $24.99 through Nov 30. Free size exchange.",
    h1: 'Christmas Shirts for Men',
    intro: "We sell 26 Christmas shirts for men, all printed on a soft Bella+Canvas 3001 tee (4.2 oz cotton): $24.99 through November 30, then $29.99 from December 1. Every shirt is printed to order; order by Friday, December 4, 2026 for Christmas delivery in the US, and you get one free size exchange with nothing to mail back. Christmas shirts for men who would rather not wear a costume: a dry one-liner like Define Naughty or Bah Humbug, or a vintage scene from the deer camp, the frozen lake or the ski lodge. Tees are $24.99, printed when you order them.",
    sections: [
      { h2: 'The funny ones', body: "Define Naughty puts a storybook Santa with a quill and one raised eyebrow over a fair question. Light Show Manager is for the man on the ladder with the extension cords, a job with no raise. Technically a Sweater is a printed fair-isle knit for the guy who found a loophole in the ugly-sweater dress code, and Bah Humbug is for the polite grump who still shows up on time with a casserole." },
      { h2: 'The outdoors ones', body: "Deer Camp Christmas is a snowed-in hunting cabin with a wreath on the door. Christmas on the Lake is an angler in a red plaid wool jacket in a wooden rowboat. Upland Christmas Pheasant is a rooster bursting out of a snowy cornfield, North Woods Moose stands by a frozen lake, Mountain Christmas Bear walks through deep snow, and Christmas Ski Lodge is a 1960s skier carving a turn. Fresh Cut Christmas Trees, Christmas Tree Farm, Cabin Christmas and Vintage Santa round it out." },
      { h2: 'Who buys them', body: "Mostly the people around him: a wife picking his shirt for the family photo, kids buying Dad the Light Show Manager tee, a hunting buddy grabbing Deer Camp Christmas for the cabin weekend. Every line is family-table clean, so it works at the office party and at his mother's house." },
      { h2: 'Fit and fabric', body: "Every tee here is a soft, lightweight 4.2 oz cotton classic fit, cut for men and roomy enough to layer over a thermal. The unisex designs fit women too, so a couple can match. The same art also comes on crewneck sweatshirts in our men's Christmas sweaters page. For colder nights the men's Christmas hoodies carry the same deadpan lines on a fleece pullover or zip-up.", links: [{ href: '/christmas-sweatshirts-for-men/', label: "Men's Christmas sweaters" }, { href: '/hoodies/christmas-hoodies/', label: 'Christmas hoodies for men' }] },
      { h2: 'Want it warmer?', body: 'Most of the men\'s Christmas designs are also printed on hoodies. See our graphic hoodies for men, from $39.99, for the pullover, zip-up, heavyweight and oversized versions.', links: [{ href: '/hoodies/graphic-hoodies-for-men/', label: 'Graphic hoodies for men' }] },
      { h2: 'When to order', body: "Each shirt is printed after you order it, which takes 2–5 business days, then arrives in about 3–8 business days. Order by early December for Christmas; delivery estimates show at checkout, and US shipping is free over $45." },
    ],
    faqs: [
      { q: 'What is a good funny Christmas shirt for a man?', a: "Pick a dry one-liner he would actually say. Graphic Tees Co. makes Define Naughty, Light Show Manager, Technically a Sweater and Bah Humbug for men: each is one clean joke on a vintage-style print, safe for the office party and the family table, and $24.99 a tee." },
      { q: "What do men wear to a Christmas party instead of an ugly sweater?", a: "A Christmas graphic tee under an open flannel or a quarter-zip with dark jeans is festive without being a costume. Our Technically a Sweater tee is the loophole option: a printed fair-isle knit on a lightweight cotton tee, so he meets the dress code and does not overheat in a crowded room." },
      { q: 'Do these Christmas shirts come in big and tall sizes?', a: "The unisex classic tee runs up to 4XL, and the men's Christmas crewneck sweatshirts run S–5XL. Each product page lists its exact sizes and a size chart with chest and length measurements, so check it before ordering." },
      { q: 'Can I get a matching Christmas shirt for my wife?', a: "Yes. The unisex designs, like Christmas Tree Farm, Fresh Cut Christmas Trees and Vintage Santa, fit men and women, and our Christmas shirts for women page has designs in the same vintage style, so a couple or a family still reads as a set in the photo." },
      { q: 'Are these funny Christmas shirts safe for the office party?', a: "Yes. Every Graphic Tees Co. men's Christmas shirt is one clean joke or one vintage scene, so Define Naughty, Bah Humbug and Light Show Manager work at the office party, the white elephant and his mother's table. Each is a soft 4.2 oz tee at $24.99 through November 30." },
      { q: 'Which Christmas shirt is best for the family photo?', a: "Pick one design in several sizes, or let everyone choose a scene from the same vintage style so the group still reads as a set. Graphic Tees Co. prints each shirt to order, so ordering by Friday, December 4 leaves a safe margin for Christmas delivery in the US." },
      { q: 'How should I wash a printed Christmas tee?', a: "Turn the tee inside out, wash cold with like colors, and tumble dry low or hang dry. Skip bleach and never iron over the print. Graphic Tees Co. prints each 4.2 oz Bella+Canvas 3001 tee to order, and the ink holds up to regular washing with that care." },
      { q: 'What if the size is wrong?', a: "Every Graphic Tees Co. shirt is printed to order, so instead of a return you get one free size exchange within 30 days of delivery: we print the new size and there is nothing to mail back. Misprints or damage are reprinted or refunded within 30 days." },
    ],
    shopifyHandle: 'christmas-shirts-for-men',
    twin: 'christmas-sweatshirts-for-men',
  },
  // "mens christmas sweater" 33,100 / KD 8 (RankHero 2026-10-17, Dec peak 246,000). Crewneck sweatshirts, not knits: copy says so (R8.6).
  {
    slug: 'christmas-sweatshirts-for-men', section: 'tees', audience: 'men', name: "Men's Christmas Sweaters", seasonal: 'christmas',
    keyword: 'mens christmas sweater', volume: 33100, kd: 8,
    title: "Men's Christmas Sweaters: Funny Crewnecks From $34.99",
    description: "21 men's Christmas sweaters as soft printed crewnecks, S to 5XL, $34.99. Resting My Eyes, Bah Humbug, deer camp art. Printed to order, free size exchange.",
    h1: "Men's Christmas Sweaters",
    intro: "We sell 21 men's Christmas sweaters, all printed Gildan 18000 crewneck sweatshirts (8 oz, 50/50 cotton-polyester fleece, never knit) in sizes S to 5XL at $34.99 each. Every one is printed to order; order by Friday, December 4, 2026 for Christmas delivery in the US, and you get one free size exchange with nothing to mail back. Men's Christmas sweaters that are really soft crewneck sweatshirts: no itchy knit, no blinking lights. Resting My Eyes, Bah Humbug, Define Naughty and Light Show Manager for the dry jokes; deer camp, the frozen lake and the ski lodge for the vintage scenes. $34.99 each, printed when you order.",
    sections: [
      { h2: 'A sweatshirt, not a knit', body: "Every piece here is an 8 oz cotton-polyester fleece crewneck with a ribbed collar, cuffs and hem. It is warm enough for a cold lights walk, soft enough to fall asleep in on Christmas afternoon, and it goes in the wash with everything else. Technically a Sweater prints a fair-isle snowflake knit on fleece for the man who wants the ugly-sweater look without the itch." },
      { h2: 'Are these knit sweaters?', body: "No. They are printed crewneck sweatshirts, which is what most shoppers mean by a Christmas sweater for a party: the same cozy look with original art printed on the front, and nothing itchy." },
      { h2: 'The dry jokes', body: "Resting My Eyes is for the dad three hours into Christmas afternoon who insists he is not asleep. Bah Humbug is the polite grump's sweatshirt. Define Naughty has a storybook Santa with one raised eyebrow, and Light Show Manager is for the man on the ladder with the extension cords." },
      { h2: 'The vintage scenes', body: "Deer Camp Christmas, Upland Christmas Pheasant and Christmas on the Lake are for the hunter and the angler who still go out in December. North Woods Moose, Mountain Christmas Bear and Christmas Ski Lodge are for the cabin crowd and read well side by side in the family photo." },
      { h2: 'When to order', body: "Each sweatshirt is printed after you order it, which takes 2–5 business days, then arrives in about 3–8 business days. Order by early December for Christmas; US shipping is free on orders over $45, so one sweatshirt and one tee ship free." },
    ],
    faqs: [
      { q: "Are these real knit Christmas sweaters?", a: "No. Graphic Tees Co. men's Christmas sweaters are crewneck sweatshirts: 8 oz cotton-polyester fleece with a ribbed collar, cuffs and hem, printed with original holiday art. They are softer and easier to wash than a knit, and the Technically a Sweater design prints a fair-isle pattern for the ugly-sweater party." },
      { q: "What is a good funny Christmas sweater for a man?", a: "Resting My Eyes and Bah Humbug are the two most giftable: one is for the dad who naps after dinner, the other for the polite grump. Both are family-clean crewneck sweatshirts from Graphic Tees Co. at $34.99, with Define Naughty and Light Show Manager as the other dry options." },
      { q: "What sizes do the men's Christmas sweatshirts come in?", a: "The crewneck runs S–5XL in a classic, roomy fit that layers over a tee or a collared shirt. Each product page has a size chart with chest and length measurements; if he is between sizes, size up for a relaxed fit after washing." },
      { q: 'Will it arrive before Christmas?', a: "Order by early December to be safe. Each Graphic Tees Co. sweatshirt is printed after you order it in 2–5 business days and then arrives in about 3–8 business days in the US; the delivery estimate shows at checkout, and shipping is free over $45." },
      { q: 'Are these good for an ugly Christmas sweater party?', a: "Yes. Graphic Tees Co. men's Christmas sweaters are printed crewneck sweatshirts, so they pass at an ugly sweater party for men without the itch of a knit. Pick Technically a Sweater for the fair-isle look, or a dry joke like Bah Humbug if you want to stand out." },
      { q: 'Are the men\'s Christmas sweatshirts warm?', a: "They are mid-weight, not a parka. Each is an 8 oz Gildan 18000 crewneck in 50/50 cotton-polyester fleece with a ribbed collar, cuffs and hem, warm enough for a cold lights walk or a family photo, and easy to layer over a tee or under a coat." },
      { q: 'How should I wash a printed Christmas sweatshirt?', a: "Turn the sweatshirt inside out, wash cold with like colors, and tumble dry low or hang dry. Skip bleach and never iron over the print. Graphic Tees Co. prints each sweatshirt to order, and the ink holds up to regular washing with that care." },
      { q: 'What if the size is wrong?', a: "Every sweatshirt is printed to order, so instead of a return you get one free size exchange within 30 days of delivery: we print the new size and there is nothing to mail back. Misprints or damage are reprinted or refunded within 30 days." },
    ],
    shopifyHandle: 'christmas-sweatshirts-for-men',
    twin: 'christmas-shirts-for-men',
  },
  seasonal('christmas', 'tees', { slug: 'christmas-shirts', keyword: 'christmas shirts', volume: 33100, kd: 58, product: 'Christmas shirts', twin: 'christmas-hoodies', blurb: 'holiday designs that work for the party, the family photo and the gift exchange.',
    extra: [
      // FAQ standard R8.7 (director 2026-10-17): questions from Google autocomplete ("christmas shirts for family/couples/work", "what to wear christmas party", "how to wash graphic tees without cracking").
      { q: 'Do you have matching Christmas shirts for family or couples?', a: 'Yes. Graphic Tees Co. Christmas shirts come in women’s S–3XL and unisex S–5XL, so a family or a couple can order one design in every size, or each pick a different joke in the same vintage style. Unisex designs fit men and women, and tees are $24.99 on sale through November 30.' },
      { q: 'Do you have funny Christmas shirts?', a: 'Yes. Our funny Christmas shirts carry one clean joke each, such as Sleigh Queen, Define Naughty, Jolly-ish, Snow Problem, Dough Ho Ho and Light Show Manager. They are family-table clean, with no profanity or movie quotes, and they all live on the funny Christmas shirts page.' },
      { q: 'What should I wear to a Christmas party?', a: 'A Christmas graphic tee under an open flannel or cardigan with dark jeans works for most office and family parties. Pick a funny one-liner for a white elephant or friends’ party and a vintage Santa or tree design for a dressier evening; a matching crewneck is warmer for an outdoor lights walk.' },
      { q: 'Are Christmas shirts OK to wear to work?', a: 'Most of ours are. Every Graphic Tees Co. design is family-clean, with no profanity, innuendo or put-downs, so the vintage scenes and gentle jokes suit an office party or a casual December Friday. If your workplace is formal, wear one under a blazer or cardigan.' },
      { q: 'How do I wash a Christmas graphic tee so the print does not crack?', a: 'Turn the shirt inside out, wash cold on a gentle cycle with like colors, and tumble dry low or hang dry. Never iron directly on the print and skip bleach and fabric softener. Our tees are printed directly into the cotton, so with cold washes the art stays bright for seasons.' },
    ],
    // Phrases claimed (RankHero/Etsy, 2026-10-09): christmas shirts 33,100/58 · christmas tree shirt 27,100/46 · christmas tee shirts 27,100/59 ·
    // gingerbread shirt 1,900/46 · vintage/retro santa shirt 390/60 · retro christmas shirt 260/75. Women's modifier lives on the child page.
    title: 'Christmas Shirts — Vintage Santa, Tree & Gingerbread Tees',
    description: 'Original Christmas shirts: vintage Santa, tree-truck and gingerbread art plus funny one-liners like Sleigh Queen. Tees $24.99 through Nov 30.',
    intro: 'Our Christmas shirts are original holiday designs for the tree farm, the cabin weekend and the family photo. Vintage-style illustrations instead of ugly-sweater gags, printed when you order them.',
    sections: [
      { h2: 'Five kinds of Christmas', body: 'A red pickup hauling a fresh-cut tree down a snowy back road. A log cabin glowing under a crescent moon with a deer nearby. A gingerbread house with candy-cane trim and two waving gingerbread people. MERRY & BRIGHT in groovy 1970s bubble letters, ringed with vintage ornaments. And a round, rosy 1950s Santa laughing HO HO HO with a sack of pink-wrapped gifts. Each one is drawn as its own scene, so you can pick the December that looks like yours.' },
      { h2: 'Christmas tree, gingerbread or Santa', body: 'If you want a Christmas tree shirt, Fresh Cut Christmas Trees is the one: the truck, the tree and the snowy road, heading home for the living room. Gingerbread Lane is the gingerbread shirt for cookie-decorating season. Retro Santa is the vintage Santa shirt, a mid-century greeting-card Santa in red, pink and cream. These Christmas tee shirts share one vintage style, so they look good side by side in a photo.' },
      { h2: 'Unisex and women’s Christmas shirts', body: 'The tree-truck and cabin designs are printed on unisex classic tees in sizes up to 5XL, so they fit men and women. Retro Santa, Gingerbread Lane and Merry & Bright come on a relaxed women’s cut in S–3XL; all five also live on our Christmas shirts for women page.' },
      { h2: 'Where to wear them', body: 'A cabin weekend, a holiday open house, decorating the tree, a neighborhood lights walk, the office party or Christmas morning itself. On a tree-farm trip the red-truck design is the obvious pick; for a quiet night in, the cabin. Layer one under a flannel, or over a long-sleeve thermal when it’s cold out.' },
      { h2: 'Not an ugly sweater', body: 'These are soft cotton tees with illustrated art, not novelty knits or light-up gags. They’re meant to be worn all December and pulled out again next year. Lightweight cotton also means you won’t overheat in a crowded living room with the fire going.' },
      { h2: 'Matching Christmas shirts', body: 'Pick one design in several sizes for the family photo, or let everyone choose their own scene and let the shared vintage style tie them together. The unisex designs make it easy for couples to match. The same family look works in fleece too: see the funny Christmas hoodies.', links: [{ href: '/hoodies/christmas-hoodies/', label: 'Funny Christmas hoodies' }] },
      { h2: 'Order before December gets busy', body: 'Each shirt is printed after you order it and then shipped, so order early in the season. Delivery estimates show at checkout, and new holiday designs join the collection as they’re designed.' },
    ] }),
  // Holiday crewnecks (Sam, 2026-10-13; KD exception approved): Gildan 18000 crewneck sweatshirts, $39.99. RankHero 2026-10-13:
  // christmas sweatshirt 22,200/57 · merry christmas sweatshirt 2,400/56 · christmas crewneck 1,900/60 · christmas tree sweatshirt 390/70.
  seasonal('christmas', 'tees', { slug: 'christmas-sweatshirts', name: 'Christmas Sweatshirts', keyword: 'christmas sweatshirt', volume: 22200, kd: 57, product: 'Christmas sweatshirts', blurb: 'vintage holiday art on soft crewneck fleece, for the tree farm, the cabin and the family photo.',
    // Google push #1099 (R0 item 5, 2026-11-26): live facts read from the Shopify collection 2026-11-26 (58 products, 56 active; Sweatshirt type; tier price $34.99, embroidered $39.99 and up; colors White, Sand, Ash, Sport Grey, Light Pink, Light Blue, Navy, Forest Green, Maroon, Black; S-3XL, many to 5XL). Last known position: unknown. christmas sweatshirt 22,200 / KD 57 (RankHero 2026-10-13).
    title: 'Christmas Sweatshirts: Funny Crewnecks Like Snow Problem',
    description: "Funny Christmas sweatshirts: Snow Problem, Nana's Cookies, We Said No Gifts and more. Crewnecks from $34.99 through Nov 30. Free US shipping on $45+.",
    intro: 'We sell 56 Christmas sweatshirts, each an original design printed on a Gildan 18000 crewneck: 8 oz 50% cotton, 50% polyester fleece with a ribbed collar, cuffs and hem, in sizes S to 3XL and up to 5XL on many. Most are $34.99 through November 30, then $39.99; embroidered ones cost more. Every sweatshirt is printed to order, and {{you should order by Friday, December 4, 2026 for Christmas delivery in the US||Christmas delivery in the US is no longer guaranteed, so it makes a good New Year\'s gift}}. You get one free size exchange with nothing to mail back.',
    sections: [
      { h2: 'Funny Christmas sweatshirts', body: 'The jokes are one-liners you can read across a room: We Said No Gifts, Define Naughty, Attending Under Protest and Technically a Sweater. Each is set in big type on the chest, so the line lands before anyone asks what it says.', links: [{ href: '/products/unisex-christmas-we-said-no-gifts-crewneck-sweatshirt/', label: 'We Said No Gifts' }, { href: '/products/unisex-christmas-define-naughty-crewneck-sweatshirt/', label: 'Define Naughty' }, { href: '/products/mens-christmas-attending-under-protest-crewneck-sweatshirt/', label: 'Attending Under Protest' }, { href: '/products/unisex-christmas-technically-a-sweater-crewneck-sweatshirt/', label: 'Technically a Sweater' }] },
      { h2: 'Christmas sweatshirts for women', body: 'Women\'s picks include Snow Problem, Nana\'s Cookies, Merry Woofmas and Sleighping In, in colors like White, Sand, Light Pink and Light Blue. Order your usual size for a classic fit, or one size up for a roomier layer.', links: [{ href: '/products/womens-christmas-snow-problem-crewneck-sweatshirt/', label: 'Snow Problem' }, { href: '/products/womens-christmas-nanas-cookies-crewneck-sweatshirt/', label: "Nana's Cookies" }, { href: '/products/womens-christmas-merry-woofmas-crewneck-sweatshirt/', label: 'Merry Woofmas' }, { href: '/products/womens-christmas-sleighping-in-crewneck-sweatshirt/', label: 'Sleighping In' }] },
      { h2: 'Christmas sweatshirts for men', body: 'For men we have Some Assembly Regretted, Resting My Eyes and White Elephant Champion, and the unisex designs fit men too. The full men\'s range is on its own page.', links: [{ href: '/christmas-sweatshirts-for-men/', label: "Men's Christmas sweaters" }, { href: '/products/mens-christmas-some-assembly-regretted-crewneck-sweatshirt/', label: 'Some Assembly Regretted' }, { href: '/products/mens-christmas-resting-my-eyes-crewneck-sweatshirt/', label: 'Resting My Eyes' }, { href: '/products/mens-christmas-white-elephant-champion-crewneck-sweatshirt/', label: 'White Elephant Champion' }] },
      { h2: 'Ugly sweater party picks', body: 'If the party has an ugly sweater theme but you would rather wear something you will keep, pick a line that gets the laugh: Bah Humbug, Light Show Manager or Card Photo Survivor. They are printed crewnecks, not knit novelty sweaters.', links: [{ href: '/products/unisex-christmas-bah-humbug-crewneck-sweatshirt/', label: 'Bah Humbug' }, { href: '/products/unisex-christmas-light-show-manager-crewneck-sweatshirt/', label: 'Light Show Manager' }, { href: '/products/unisex-christmas-card-photo-survivor-crewneck-sweatshirt/', label: 'Card Photo Survivor' }] },
      { h2: 'Matching family and couples', body: 'Each design comes in the same color run and sizes S to 3XL (up to 5XL on many), so a family can match or each person can pick a scene from the same style. For bigger crews see the group shirts page.', links: [{ href: '/group-shirts/', label: 'Group shirts' }, { href: '/products/unisex-christmas-christmas-tree-farm-crewneck-sweatshirt/', label: 'Christmas Tree Farm' }, { href: '/products/unisex-christmas-christmas-ski-lodge-crewneck-sweatshirt/', label: 'Christmas Ski Lodge' }] },
      { h2: 'Sweatshirt or hoodie?', body: 'A crewneck sweatshirt has no hood or pouch pocket, so it layers under a coat or over a collared shirt. A hoodie adds a hood and a pouch for colder days. If you want that, see our Christmas hoodies.', links: [{ href: '/hoodies/christmas-hoodies/', label: 'Christmas hoodies' }] },
      { h2: 'Vintage Christmas sweatshirts', body: 'Not every design is a joke. The quieter ones include a 1950s-style Santa face with rosy cheeks and a cracked, worn finish over MERRY CHRISTMAS in faded red type, and a row of five thin evergreen trees under a star with Merry & Bright in a small script line, plus woodland scenes like the North Woods moose and the Winter Woods fox.', links: [{ href: '/products/unisex-christmas-vintage-santa-crewneck-sweatshirt/', label: 'Vintage Santa' }, { href: '/products/womens-christmas-merry-bright-trees-crewneck-sweatshirt/', label: 'Merry & Bright Trees' }, { href: '/products/unisex-christmas-north-woods-moose-crewneck-sweatshirt/', label: 'North Woods Moose' }] },
      { h2: 'What the crewneck is like', body: 'Each one is printed on a classic-fit crewneck sweatshirt: 50% cotton, 50% polyester fleece with air-jet spun yarn, pre-shrunk, with a ribbed collar, cuffs and hem. It is a sweatshirt, not a hoodie, so it layers under a coat or over a collared shirt.' },
      { h2: 'Where to wear a Christmas crewneck', body: 'The tree farm, a cold walk to see the neighborhood lights, a cabin weekend, the school concert or Christmas morning on the couch. The light Santa design reads well in the family photo; the tree line art on forest green or maroon is the one to wear all winter.' },
      { h2: 'Matching sweatshirts', body: 'Every design comes in a wide size run, so a family or a group of friends can order the same Christmas crewneck. The same art also comes on tees if someone at the table runs warm. If you want a hood and a pouch pocket instead of a crewneck, browse the Christmas hoodies.', links: [{ href: '/hoodies/christmas-hoodies/', label: 'Christmas hoodies' }] },
      { h2: 'When to order', body: 'Each sweatshirt is printed after you order it, then shipped. Order early in December so it arrives before your plans; delivery estimates show at checkout.' },
    ],
    extra: [
      { q: 'Are these sweatshirts or hoodies?', a: 'Crewneck sweatshirts, with no hood. They are cotton-polyester fleece with a ribbed collar, cuffs and hem.' },
      { q: 'Do the Christmas sweatshirts match your Christmas tees?', a: 'Most do. Many of our Christmas sweatshirts share their art with one of our Christmas tees, so you can mix the two in a family photo.' },
      { q: 'Is a Christmas sweatshirt warmer than a hoodie?', a: 'A hoodie is usually warmer because of the hood and pouch pocket. Our Christmas sweatshirts are 8 oz 50% cotton, 50% polyester fleece crewnecks, which layer well under a coat and are comfortable indoors. If you run cold, choose a Christmas hoodie from Graphic Tees Co. instead.' },
      { q: 'How do the Christmas sweatshirts fit?', a: 'They are a classic crewneck fit in sizes S to 3XL, and up to 5XL on many designs. Order your usual size, or one size up for a looser layer. Each product page has a size chart in inches, and Graphic Tees Co. gives you one free size exchange with nothing to mail back.' },
      { q: 'How do I wash a Christmas sweatshirt?', a: 'Turn it inside out, wash cold with similar colors, and tumble dry low or hang dry. Skip bleach and never iron directly over the print. The 50/50 cotton-polyester fleece is pre-shrunk, so it keeps its shape and the design stays sharp through the season.' },
      { q: 'What colors do the Christmas sweatshirts come in?', a: 'Colors vary by design and include White, Sand, Ash, Sport Grey, Light Pink, Light Blue, Navy, Forest Green, Maroon and Black. We only offer a color where the art reads clearly, so the colors are listed on each product page, with a photo of each one.' },
      { q: 'When should I order a Christmas sweatshirt for Christmas?', a: '{{Order by Friday, December 4, 2026 for Christmas delivery in the US. Each sweatshirt is printed in 2–5 business days, then ships in about 3–8 business days. Orders of $45 or more ship free, and checkout shows a delivery estimate.||Christmas delivery in the US is no longer guaranteed. Each sweatshirt is printed in 2–5 business days, then ships in about 3–8 business days, so it may arrive after December 25. Orders of $45 or more ship free, and checkout shows a delivery estimate.}}' },
      { q: 'What if I guess the size wrong on a gift?', a: 'Graphic Tees Co. offers one free size exchange, and you do not mail anything back. The person picks the new size and we send it. That makes a Christmas sweatshirt a safe gift even when you are guessing, and a misprinted or damaged one is replaced.' },
    ] }),
  // RankHero 2026-10-13: thanksgiving sweatshirt 1,300/56 · thankful sweatshirt 390/60 · pumpkin sweatshirt 1,000/62 · fall sweatshirt 1,900/61.
  seasonal('thanksgiving', 'tees', { slug: 'thanksgiving-sweatshirts', name: 'Thanksgiving Sweatshirts', keyword: 'thanksgiving sweatshirt', volume: 1300, kd: 56, product: 'Thanksgiving sweatshirts', blurb: 'harvest art on soft crewneck fleece for cold November mornings and the long table.',
    title: 'Thanksgiving Sweatshirts — Vintage Harvest Crewnecks',
    description: 'Original Thanksgiving sweatshirts: a vintage harvest basket of pumpkins and wheat under GIVE THANKS on a soft crewneck. Printed to order, $39.99.',
    intro: 'Our Thanksgiving sweatshirts put original harvest art on a warm crewneck: something soft for the cold morning walk, the parade on TV and the long table that follows.',
    sections: [
      { h2: 'Harvest art, drawn like an old print', body: 'GIVE THANKS sits in worn, sun-faded block letters over a woven basket piled with pumpkins, gourds, wheat and autumn leaves. The edges break up like a screen print that has been through the wash a hundred times, so it reads as vintage rather than clip art.' },
      { h2: 'What the crewneck is like', body: 'Classic-fit crewneck sweatshirt in 50% cotton, 50% polyester fleece with air-jet spun yarn, pre-shrunk, with a ribbed collar, cuffs and hem. It is a sweatshirt, not a hoodie.' },
      { h2: 'Where to wear it', body: 'The turkey trot warm-up, the drive to the in-laws, the backyard football game, the pumpkin patch or the couch for the afternoon game. It keeps working as a fall sweatshirt well past the holiday.' },
      { h2: 'When to order', body: 'Each sweatshirt is printed after you order it, then shipped. Order in early November so it arrives before the holiday; delivery estimates show at checkout.' },
    ],
    extra: [
      { q: 'Are these sweatshirts or hoodies?', a: 'Crewneck sweatshirts, with no hood, in cotton-polyester fleece.' },
      { q: 'Does the design also come on a tee?', a: 'Yes. The harvest basket art is also printed on a unisex tee in our Thanksgiving shirts collection.' },
    ] }),
  // Cold-weather push (Sam, 2026-10-16). Hand-written copy; empty pages stay noindex until products exist.
  {
    slug: 'cropped-sweatshirts', section: 'tees', audience: 'women', name: 'Cropped Sweatshirts',
    keyword: 'cropped sweatshirt', volume: 8100, kd: 41,
    title: 'Cropped Sweatshirts — Original Graphic Designs',
    description: 'Cropped sweatshirts with original graphic art, cut to meet high-rise jeans. Printed to order in soft fleece.',
    h1: 'Cropped Sweatshirts',
    intro: 'Cropped sweatshirts with original art on the front, cut short so the hem meets high-rise jeans, leggings and skirts.',
    sections: [
      { h2: 'What makes these cropped sweatshirts different?', body: 'Every design is designed for this shop: retro coffee machines, kaiju naps, wildflowers and holiday art, never a stock graphic. Right now the cropped fleece we print on is a cropped hoodie, so every piece here has a hood.' },
      { h2: 'How to wear a cropped sweatshirt', body: 'Pair it with high-rise jeans, wide-leg pants or a pleated skirt so the hem lands at the waistband. Layer a long tank underneath on cold days.' },
    ],
    faqs: [
      { q: 'Are these cropped crewnecks or cropped hoodies?', a: 'They are cropped hoodies: a short fleece sweatshirt with a hood. We do not sell a cropped crewneck yet.' },
      { q: 'How cropped is a cropped sweatshirt?', a: 'The hem sits around the natural waist, so it meets high-rise jeans and skirts without showing much midriff.' },
      { q: 'Are these original designs?', a: 'Yes. Every design is original art made for this shop. No brand logos or licensed characters.' },
      { q: 'How are they made?', a: 'Each one is printed after you order it, then shipped to you.' },
      { q: 'How long do cropped sweatshirts take to ship?', a: (f) => `Printing takes ${f.productionDays}, then your order ships. Delivery estimates are shown at checkout.`, needs: 'productionDays' },
    ],
    shopifyHandle: 'cropped-sweatshirts',
    twin: 'cropped-hoodies',
  },
  {
    slug: 'embroidered-sweatshirts', section: 'tees', name: 'Embroidered Sweatshirts',
    keyword: 'embroidered sweatshirt', volume: 12100, kd: 56,
    title: 'Embroidered Sweatshirts — Original Stitched Designs',
    description: 'Embroidered crewneck sweatshirts with small original designs stitched in thread on the chest. Made to order in soft fleece.',
    h1: 'Embroidered Sweatshirts',
    intro: 'Embroidered sweatshirts with a small original design stitched on the chest: simple line art in thread, the kind of piece you wear all winter.',
    sections: [
      { h2: 'What makes these embroidered sweatshirts different?', body: 'The designs are designed for this shop as clean single-line art, then stitched in thread instead of printed, so the design has a raised, textured feel. They sit small on the chest, about the size of a hand.' },
      { h2: 'What the sweatshirt is like', body: 'A classic-fit crewneck in 50% cotton, 50% polyester fleece, 8 oz, pre-shrunk, with a ribbed collar, cuffs and hem.' },
      { h2: 'How to care for embroidery', body: 'Wash inside out on cold and tumble dry low or hang to dry. Do not iron directly on the stitching.' },
    ],
    faqs: [
      { q: 'Is the design stitched or printed?', a: 'Stitched. Each design is embroidered in thread on the chest, not printed.' },
      { q: 'Are embroidered sweatshirts warm?', a: 'Yes. They are made from 8 oz cotton-polyester fleece, warm on their own indoors and easy to layer under a coat.' },
      { q: 'Are these original designs?', a: 'Yes. Every design is original art made for this shop, with no brand logos or licensed characters.' },
      { q: 'How long do embroidered sweatshirts take to ship?', a: (f) => `Making one takes ${f.productionDays}, then your order ships. Delivery estimates are shown at checkout.`, needs: 'productionDays' },
    ],
    shopifyHandle: 'embroidered-sweatshirts',
  },
  // R11.5 sweep pages (director, 2026-10-16 late run). Hand-written copy; empty pages stay noindex until stocked (R9.11, R10.7).
  {
    // RankHero 2026-10-16: oversized sweatshirt 40,500 / KD 47. Blank: Bella+Canvas 4711 (Printful #897), 10 oz, 60/40 cotton-poly fleece.
    slug: 'oversized-sweatshirts', section: 'tees', name: 'Oversized Sweatshirts',
    keyword: 'oversized sweatshirt', volume: 40500, kd: 47,
    title: 'Oversized Sweatshirts — Heavyweight Graphic Crewnecks',
    description: 'Oversized sweatshirts with original graphic art on a heavyweight 10 oz fleece crewneck: boxy fit, dropped sleeves. Printed to order.',
    h1: 'Oversized Sweatshirts',
    intro: 'Oversized sweatshirts with original art on the front: a roomy, heavyweight crewneck with dropped sleeves, cut big on purpose.',
    sections: [
      { h2: 'What makes these oversized sweatshirts different?', body: 'Every design is designed for this shop, never stock art, and sized up to suit a big, boxy sweatshirt. Each one is printed after you order it.' },
      { h2: 'What the sweatshirt is like', body: 'A unisex oversized crewneck in 10 oz fleece, 60% combed ring-spun cotton and 40% polyester, soft on the inside, with slightly dropped sleeves and a relaxed fit.' },
      { h2: 'How to wear an oversized sweatshirt', body: 'Balance the volume with something slimmer: leggings, bike shorts or straight-leg jeans. Push the sleeves up, or tuck one side of the front into high-rise jeans for shape.' },
    ],
    faqs: [
      { q: 'Should I size up for an oversized sweatshirt?', a: 'No. These are already cut oversized, so take your usual size for the roomy look. Size down if you want it closer to a classic fit, and check the size chart on each product.' },
      { q: 'Are these sweatshirts heavyweight?', a: 'Yes. The fleece is 10 oz per square yard, heavier than a standard crewneck.' },
      { q: 'Are these crewnecks or hoodies?', a: 'Crewneck sweatshirts, with no hood. Our oversized hoodies are in their own collection.' },
      { q: 'Are these original designs?', a: 'Yes. Every design is original art made for this shop. No brand logos or licensed characters.' },
      { q: 'How long do oversized sweatshirts take to ship?', a: (f) => `Printing takes ${f.productionDays}, then your order ships. Delivery estimates are shown at checkout.`, needs: 'productionDays' },
    ],
    shopifyHandle: 'oversized-sweatshirts',
    twin: 'oversized-hoodies',
  },
  {
    // RankHero 2026-10-16: heavyweight sweatshirt 2,900 / KD 34. Same Bella+Canvas 4711 heavyweight oversized crewneck (Printful #897, 10 oz).
    slug: 'heavyweight-sweatshirts', section: 'tees', name: 'Heavyweight Sweatshirts',
    keyword: 'heavyweight sweatshirt', volume: 2900, kd: 34,
    title: 'Heavyweight Sweatshirts — 10 oz Graphic Crewnecks',
    description: 'Heavyweight sweatshirts in 10 oz fleece with original graphic art. A thick, boxy crewneck that holds its shape. Printed to order.',
    h1: 'Heavyweight Sweatshirts',
    intro: 'Heavyweight sweatshirts for people who want a crewneck with some weight to it: 10 oz fleece, a boxy cut and original art on the front.',
    sections: [
      { h2: 'How heavy is a heavyweight sweatshirt?', body: 'Ours are 10 oz per square yard, 60% combed ring-spun cotton and 40% polyester. A standard crewneck is about 8 oz, so you feel the difference when you pull it on.' },
      { h2: 'What makes these different?', body: 'Every design is original art made for this shop, from deadpan gym jokes to bookish one-liners, printed after you order it.' },
      { h2: 'How to wear a heavyweight sweatshirt', body: 'On its own over a tee on a cold morning, under an open jacket, or with joggers after the gym. The relaxed fit and dropped sleeves give it a boxy shape.' },
    ],
    faqs: [
      { q: 'Are heavyweight sweatshirts warmer?', a: 'Yes. Thicker fleece holds more warmth, so a 10 oz crewneck is warmer than a standard 8 oz one.' },
      { q: 'How do heavyweight sweatshirts fit?', a: 'Ours have a relaxed, oversized cut with slightly dropped sleeves. Take your usual size for a roomy fit and check the size chart on each product.' },
      { q: 'Are these original designs?', a: 'Yes. Every design is original art made for this shop. No brand logos or licensed characters.' },
      { q: 'How long do heavyweight sweatshirts take to ship?', a: (f) => `Printing takes ${f.productionDays}, then your order ships. Delivery estimates are shown at checkout.`, needs: 'productionDays' },
    ],
    shopifyHandle: 'heavyweight-sweatshirts',
    twin: 'heavyweight-hoodies',
  },
  {
    // Hub (R2.2: KD > 50 = hub only). RankHero 2026-10-17: graphic sweatshirts 12,100 / KD 58. Shopify smart collection by tag "sweatshirt", so every crewneck lands here.
    slug: 'graphic-sweatshirts', section: 'tees', name: 'Graphic Sweatshirts',
    keyword: 'graphic sweatshirts', volume: 12100, kd: 58,
    title: 'Graphic Sweatshirts — Original Art Crewnecks',
    description: 'Graphic sweatshirts with original vintage-style art and a real joke, from Christmas and western to anime and retro. Soft fleece crewnecks, printed to order.',
    h1: 'Graphic Sweatshirts',
    intro: 'Graphic sweatshirts with original art on the front and, most of the time, a joke you get in two seconds: Christmas and Thanksgiving crewnecks, Christian verses, a napping cowboy, a sleeping kaiju and a roller-skating goose.',
    sections: [
      { h2: 'What is on these sweatshirts?', body: 'Every design is designed for this shop in a vintage screen-print style: holiday scenes, Bible verses, western, anime-style and retro 70s art. Many of them match one of our tees or hoodies, so you can pick the weight that suits the weather.' },
      { h2: 'Crewneck, hoodie or tee?', body: 'A crewneck is the in-between layer: warmer than a tee, lighter than a hoodie, and easy under a jacket. If you want a hood, most designs here also come as a hoodie in our hoodie collections.' },
    ],
    faqs: [
      { q: 'What are graphic sweatshirts made of?', a: 'Most are Gildan 18000 crewnecks: 8 oz fleece, 50% cotton and 50% polyester, with ribbed cuffs and waistband. Heavyweight and oversized styles use thicker 10 oz fleece. The fabric and weight are listed on every product page.' },
      { q: 'How do graphic sweatshirts fit?', a: 'They are a classic unisex cut, so they run a little roomy on women. Take your usual size for a relaxed fit, size up for an oversized look, or size down for a closer fit. If it is wrong, we print you a new size once for free within 30 days.' },
      { q: 'How much are they?', a: 'Crewneck sweatshirts are $34.99 during the holiday sale through November 30, 2026, and US shipping is free on orders over $45. Heavyweight, oversized and embroidered styles cost a little more because the blank or the stitching does.' },
      { q: 'Are these original designs?', a: 'Yes. Every design is original art made for this shop, with no brand logos, licensed characters or movie quotes.' },
      { q: 'How long do graphic sweatshirts take to ship?', a: (f) => `Printing takes ${f.productionDays}, then your order ships. Delivery estimates are shown at checkout.`, needs: 'productionDays' },
    ],
    shopifyHandle: 'graphic-sweatshirts',
  },
  {
    // RankHero 2026-10-16: christian sweatshirt 6,600 / KD 52 (R9.11 depth target: 8+ designs before it is pushed). Voice 50/50 per R3.4.
    slug: 'christian-sweatshirts', section: 'tees', name: 'Christian Sweatshirts',
    keyword: 'christian sweatshirt', volume: 6600, kd: 52,
    title: 'Christian Sweatshirts — Scripture & Faith Crewnecks',
    description: 'Christian sweatshirts with original art: quiet scripture designs with the verse reference, and a few gentle church jokes. Soft crewnecks, printed to order.',
    h1: 'Christian Sweatshirts',
    intro: 'Christian sweatshirts in two moods: simple scripture designs with the verse reference printed small, and a few warm, respectful jokes from church life. All of them on a soft crewneck for Sunday mornings and Bible study.',
    sections: [
      { h2: 'Scripture you can wear', body: 'Half of these designs are quiet: a few plain words from a verse, the reference underneath, and vintage art that fits it. They are made to start a conversation, not to shout.' },
      { h2: 'And a little church humor', body: 'The other half smile at church life without poking fun at faith: the casserole that shows up for every new baby, a little lamb with a pun. Clean enough for the fellowship hall.' },
      { h2: 'What the sweatshirt is like', body: 'A classic-fit crewneck in 8 oz, 50% cotton, 50% polyester fleece, pre-shrunk, with a ribbed collar, cuffs and hem.' },
    ],
    faqs: [
      { q: 'Do your Christian sweatshirts include the Bible verse?', a: 'The scripture designs print the verse reference on the front, so anyone who asks can look it up.' },
      { q: 'Are these good gifts for church friends?', a: 'Yes. They work for a baptism, a Bible study group, a pastor’s family or a friend who just joined the church.' },
      { q: 'Are these original designs?', a: 'Yes. Every design is original art made for this shop.' },
      { q: 'How long do Christian sweatshirts take to ship?', a: (f) => `Printing takes ${f.productionDays}, then your order ships. Delivery estimates are shown at checkout.`, needs: 'productionDays' },
    ],
    shopifyHandle: 'christian-sweatshirts',
    twin: 'christian-hoodies',
  },
  {
    // RankHero 2026-10-16: nurse sweatshirt 5,400 / KD 51.
    slug: 'nurse-sweatshirts', section: 'tees', audience: 'women', name: 'Nurse Sweatshirts',
    keyword: 'nurse sweatshirt', volume: 5400, kd: 51,
    title: 'Nurse Sweatshirts — Funny Original Crewnecks for Nurses',
    description: 'Nurse sweatshirts with original art and jokes nurses actually tell: warm crewnecks for the break room, the drive home and days off. Printed to order.',
    h1: 'Nurse Sweatshirts',
    intro: 'Nurse sweatshirts with jokes from the floor, drawn as vintage-style art: something warm for the drive in, the break room and the first day off after a run of shifts.',
    sections: [
      { h2: 'Jokes nurses get right away', body: 'The designs come from real shift life: the word you never say out loud on a calm night, the coffee that keeps the unit running. Other nurses laugh first; everyone else asks.' },
      { h2: 'What the sweatshirt is like', body: 'A classic-fit crewneck in 8 oz, 50% cotton, 50% polyester fleece, pre-shrunk, with a ribbed collar, cuffs and hem. It goes over scrubs on a cold walk in from the parking garage.' },
    ],
    faqs: [
      { q: 'Can I wear a nurse sweatshirt over scrubs?', a: 'Yes. A classic-fit crewneck layers over a scrub top; check your unit’s dress code for patient-care areas.' },
      { q: 'Do nurse sweatshirts make good gifts?', a: 'Yes, for Nurses Week, graduation from nursing school, or a coworker who just survived a long stretch of nights.' },
      { q: 'Are these original designs?', a: 'Yes. Every design is original art made for this shop.' },
      { q: 'How long do nurse sweatshirts take to ship?', a: (f) => `Printing takes ${f.productionDays}, then your order ships. Delivery estimates are shown at checkout.`, needs: 'productionDays' },
    ],
    shopifyHandle: 'nurse-sweatshirts',
  },
  {
    // RankHero 2026-10-16: mama sweatshirt 6,600 / KD 55 (depth needed before it is pushed, R2.2).
    slug: 'mama-sweatshirts', section: 'tees', audience: 'women', name: 'Mama Sweatshirts',
    keyword: 'mama sweatshirt', volume: 6600, kd: 55,
    title: 'Mama Sweatshirts — Funny Original Crewnecks for Moms',
    description: 'Mama sweatshirts with original vintage-style art and a joke every mom gets. Soft crewnecks for school pickup and Saturday errands. Printed to order.',
    h1: 'Mama Sweatshirts',
    intro: 'Mama sweatshirts with a joke every mom gets in two seconds, drawn as vintage-style art on a soft crewneck for pickup lines, the park and the grocery run.',
    sections: [
      { h2: 'Made for real mom life', body: 'The designs are about the parts of motherhood nobody puts on a greeting card: the little line that follows you everywhere, room to room. Funny, warm and clean.' },
      { h2: 'What the sweatshirt is like', body: 'A classic-fit crewneck in 8 oz, 50% cotton, 50% polyester fleece, pre-shrunk, with a ribbed collar, cuffs and hem.' },
    ],
    faqs: [
      { q: 'Are mama sweatshirts a good gift?', a: 'Yes, for Mother’s Day, a baby shower, a birthday or a new mom who needs something soft for the first winter.' },
      { q: 'Are these original designs?', a: 'Yes. Every design is original art made for this shop.' },
      { q: 'How long do mama sweatshirts take to ship?', a: (f) => `Printing takes ${f.productionDays}, then your order ships. Delivery estimates are shown at checkout.`, needs: 'productionDays' },
    ],
    shopifyHandle: 'mama-sweatshirts',
  },
  {
    // RankHero 2026-10-17: camo sweatshirt 12,100 / KD 26 (camouflage sweatshirt 12,100/26, camo crewneck 2,400/16 go to products). Sam's camo push (24 camo pieces).
    // Printful has no camo-dyed crewneck, so these are the all-over-print sweatshirt (#1418) with an original camo pattern printed edge to edge.
    slug: 'camo-sweatshirts', section: 'tees', name: 'Camo Sweatshirts',
    keyword: 'camo sweatshirt', volume: 12100, kd: 26,
    title: 'Camo Sweatshirts — Original Hunting Crewnecks',
    description: 'Camo sweatshirts with our own camo pattern printed edge to edge and a dry hunting joke on the chest. Soft cotton crewnecks, printed to order.',
    h1: 'Camo Sweatshirts',
    intro: 'Camo sweatshirts with an original camo pattern printed edge to edge, and a hunting joke on the chest for deer camp, the duck blind and the drive home.',
    sections: [
      { h2: 'Our own camo, not a brand pattern', body: 'Each pattern is original art made for this shop, in woodland greens and browns or soft pinks, so it looks like camo without copying any hunting brand.' },
      { h2: 'What the sweatshirt is like', body: 'A relaxed crewneck in soft 9.7 oz cotton with a little stretch (90% cotton, 10% elastane). The pattern is printed into the fabric before the sweatshirt is sewn, so it covers the front, back and sleeves.' },
    ],
    faqs: [
      { q: 'Is this real hunting camo?', a: 'It is a printed camo pattern made for everyday wear: the cabin, the truck, the tailgate. For the stand itself, wear your usual hunting layers.' },
      { q: 'Are these original designs?', a: 'Yes. The camo patterns and the chest art are original to this shop. No hunting-brand patterns or logos.' },
      { q: 'How long do camo sweatshirts take to ship?', a: (f) => `Printing takes ${f.productionDays}, then your order ships. Delivery estimates are shown at checkout.`, needs: 'productionDays' },
    ],
    shopifyHandle: 'camo-sweatshirts',
  },  {
    // RankHero 2026-10-18: welder shirt 9,900 / KD 24 (welding shirts 9,900/12, welding tshirt 9,900/20 are the same search family; welding t shirts 720/27 and funny welder shirt 320/32 stay with products). Added 2026-10-18 at 4 live welder tees (R11.10).
    slug: 'welder-shirts', section: 'tees', audience: 'men', name: 'Welder Shirts',
    keyword: 'welder shirt', volume: 9900, kd: 24,
    title: 'Welder Shirts — Funny Vintage Welding Tees',
    description: 'Funny welder shirts drawn like 1950s shop posters: stacked dimes, gaps you can step over and the grinder crew. Cotton tees, S–4XL, $24.99.',
    h1: 'Welder Shirts',
    intro: 'Welder shirts with the jokes the shop already tells: the fitter who leaves a gap you could drive a truck through, TIG beads like a stack of dimes, and the grinder crew that makes every weld look good. Original 1950s trade-poster art, no brand logos.',
    sections: [
      { h2: 'Shop talk, drawn like an old safety poster', body: 'Each design is a scene from the shop floor drawn in the style of a 1950s company newsletter or safety poster: a welder kneeling on an I-beam with a hot glue gun hanging off his toolbox, two coworkers inspecting a lumpy bead with a grinder and a can of primer, a gloved hand laying a row of dimes with a TIG torch. The line is set in big block capitals so the crew can read it from across the bay.' },
      { h2: 'Who they are for', body: 'Pipeline and structural welders, fabricators, fitters, welding students and the shop guy who does the cleanup. The jokes are written for people who weld, but the family who buys the gift gets them too: no one needs to know what a fitter is to laugh at "If you can step over it, I can fill it."' },
      { h2: 'Not a work shirt', body: 'These are lightweight 4.2 oz cotton graphic tees, not flame-resistant welding shirts. Wear one under your FR jacket, at the shop on a slow day, to the union hall or the cookout, and leave the welding to your FR gear.' },
    ],
    faqs: [
      { q: 'Are these welder shirts flame resistant?', a: 'No. Graphic Tees Co. welder shirts are lightweight 4.2 oz cotton graphic tees, not FR-rated work shirts. Wear one under a leather or FR welding jacket, around the shop or off the clock, and keep proper flame-resistant gear between you and the arc whenever you weld.' },
      { q: 'What is a funny gift for a welder?', a: 'A welder shirt with a joke from the trade is an easy gift: lines like "Stacks Dimes, Wants More Dimes" or "I Basically Hot Glue Metal" land with anyone who welds. Graphic Tees Co. welder shirts are $24.99, and one free size exchange within 30 days covers a size guess.' },
      { q: 'What sizes do the welder shirts come in?', a: 'Every Graphic Tees Co. welder shirt is a classic unisex tee in sizes S through 4XL, cut like a regular crew-neck tee. Most welders keep their usual size; size up one for a looser fit over a thermal. Compare the size chart on each product with a tee you already own.' },
      { q: 'What does "stacking dimes" mean in welding?', a: 'Stacking dimes describes a TIG weld bead whose evenly spaced ripples look like a row of overlapping coins. It is the look welders aim for on a clean weld. Graphic Tees Co. turned it into a pay joke on the Stacks Dimes, Wants More Dimes welder shirt.' },
      { q: 'How long do welder shirts take to arrive?', a: (f) => `Each welder shirt is printed after you order it. Printing takes ${f.productionDays}, then your order ships. Orders of $45 or more ship free in the US, and delivery estimates are shown at checkout.`, needs: 'productionDays' },
    ],
    shopifyHandle: 'welder-shirts',
  },
  {
    // RankHero 2026-10-18: pickleball shirts 6,600/38 (29K listings); pickleball shirt 6,600/38 stays with product #608. Added 2026-10-19 by Claude (SEO audit: niche had 3+ live products, no page).
    slug: 'pickleball-shirts', section: 'tees', name: 'Pickleball Shirts',
    keyword: 'pickleball shirts', volume: 6600, kd: 38,
    title: 'Pickleball Shirts — Funny Tees, Crewnecks & Hoodies',
    description: 'Funny pickleball shirts for the kitchen-line regulars: line calls, third-shot manners and club gossip. Tees, crewnecks and hoodies, printed to order.',
    h1: 'Pickleball Shirts',
    intro: 'Pickleball shirts for the people who show up early, argue the line calls and stay for the gossip. Every design is an original joke from the court, on tees, crewnecks and hoodies.',
    sections: [
      { h2: 'Jokes from the court', body: '"My Partner Says It Was Out" is for every doubles player who has heard that call. "Polite Until the Third Shot" is for the friendly player with a killer drop. "Kitchen Gossip Club" and "Booked Solid" cover the social side of the game.' },
      { h2: 'Who they are for', body: "League regulars, open-play addicts, the friend who just discovered pickleball and won't stop talking about it, and anyone shopping for a pickleball gift." },
    ],
    faqs: [
      { q: 'What is a good gift for a pickleball player?', a: 'A funny pickleball shirt is an easy gift: a line about line calls or the kitchen lands with anyone who plays. Graphic Tees Co. pickleball tees start at $24.99, and one free size exchange within 30 days covers a size guess.' },
      { q: 'Can I play pickleball in these shirts?', a: 'Yes. The tees are soft cotton graphic tees that work for casual open play. For tournaments or hot days, a moisture-wicking athletic shirt may feel cooler; these are made for the court, the clubhouse and everywhere after.' },
      { q: 'How long do pickleball shirts take to arrive?', a: (f) => `Every design is printed after you order it. Printing takes ${f.productionDays}, then your order ships. Orders of $45 or more ship free in the US, and delivery estimates are shown at checkout.`, needs: 'productionDays' },
    ],
    shopifyHandle: 'pickleball-shirts',
  },
  {
    // RankHero 2026-10-18: hanukkah sweater 2,900/26 (3.9K listings), Dec peak 22,200. Product #457 moved to "funny hanukkah sweater". Added 2026-10-19 by Claude (SEO audit: niche had 3+ live products, no page).
    slug: 'hanukkah-sweaters', section: 'tees', name: 'Hanukkah Sweaters',
    keyword: 'hanukkah sweater', volume: 2900, kd: 26,
    title: 'Hanukkah Sweaters — Funny Hanukkah Crewnecks & Tees',
    description: 'Funny Hanukkah sweaters and tees: eight nights of fried food and a dreidel that spins responsibly. Crewneck sweatshirts and tees, printed to order.',
    h1: 'Hanukkah Sweaters',
    intro: 'Funny Hanukkah sweaters for the holiday party, the latke table and the family photo. The jokes are about what everyone loves about Hanukkah: the fried food and the dreidel games.',
    sections: [
      { h2: 'Designs', body: '"Eight Nights of Fried Food" has a golden stack of latkes and jelly donuts, because that is the holiday menu. "Spin Responsibly" has a dreidel mid-spin with a shower of gelt. Each comes on a crewneck sweatshirt and a tee.' },
      { h2: 'A sweater people actually wear', body: 'Instead of a scratchy knit, these are soft crewneck sweatshirts, the cozy version of a holiday sweater, good for the party and the rest of winter.' },
    ],
    faqs: [
      { q: 'When should I order a Hanukkah sweater?', a: 'Hanukkah 2026 runs from sundown on Friday, December 4, to Saturday, December 12. Every sweater is printed to order in 2–5 business days and US delivery takes about 3–8 business days more, so order as early as you can and check the delivery estimate at checkout.' },
      { q: 'Is a sweatshirt the same as a Hanukkah sweater?', a: 'Most people searching for a Hanukkah sweater want something cozy and festive to wear to a party. These are crewneck sweatshirts, softer and easier to wash than a knit sweater.' },
      { q: 'How long do Hanukkah sweaters take to arrive?', a: (f) => `Every design is printed after you order it. Printing takes ${f.productionDays}, then your order ships. Orders of $45 or more ship free in the US, and delivery estimates are shown at checkout.`, needs: 'productionDays' },
    ],
    shopifyHandle: 'hanukkah-sweaters',
  },
  {
    // RankHero 2026-10-18: grandpa sweatshirt 3,600/38. Product #361 moved to "funny grandpa sweatshirt". Added 2026-10-19 by Claude (SEO audit: niche had 3+ live products, no page).
    slug: 'grandpa-sweatshirts', section: 'tees', audience: 'men', name: 'Grandpa Sweatshirts',
    keyword: 'grandpa sweatshirt', volume: 3600, kd: 38,
    title: 'Grandpa Sweatshirts — Funny Grandpa Shirts & Gifts',
    description: 'Funny grandpa sweatshirts and tees: fixing things after naps, the original dad jokes and "ask your grandmother." Crewnecks, hoodies and tees, printed to order.',
    h1: 'Grandpa Sweatshirts',
    intro: 'Grandpa sweatshirts for the man who fixes everything right after his nap, told the dad jokes first, and sends every hard question to Grandma. Original designs on crewnecks, hoodies and tees.',
    sections: [
      { h2: 'The designs', body: '"I Fix Things. (After My Nap)" shows a grandpa asleep in his recliner with a wrench. "Papa: Where Dad Got His Jokes" settles where the family humor came from. "Ask Your Grandmother" is his answer to everything.' },
      { h2: 'An easy gift from the grandkids', body: "These are made to be given: for a birthday, Father's Day, Christmas or a new grandpa announcement." },
    ],
    faqs: [
      { q: 'What is a funny gift for a grandpa?', a: 'A grandpa sweatshirt with a joke he already lives, like fixing things after his nap, is an easy gift from the grandkids. Graphic Tees Co. crewnecks are $34.99, and one free size exchange within 30 days covers a size guess.' },
      { q: 'Do these come in big sizes?', a: 'Yes. The crewnecks and hoodies run in regular unisex sizes up to 3XL or more depending on the style; check the size chart on each product.' },
      { q: 'How long do grandpa sweatshirts take to arrive?', a: (f) => `Every design is printed after you order it. Printing takes ${f.productionDays}, then your order ships. Orders of $45 or more ship free in the US, and delivery estimates are shown at checkout.`, needs: 'productionDays' },
    ],
    shopifyHandle: 'grandpa-sweatshirts',
  },
  {
    // RankHero 2026-10-18: hockey shirt 8,100/46. Product #597 moved to "funny hockey shirt". Added 2026-10-19 by Claude (SEO audit: niche had 3+ live products, no page).
    slug: 'hockey-shirts', section: 'tees', name: 'Hockey Shirts',
    keyword: 'hockey shirt', volume: 8100, kd: 46,
    title: 'Hockey Shirts — Funny Hockey Tees, Crewnecks & Hoodies',
    description: 'Funny hockey shirts for players, goalies and hockey moms: cold rinks, hot takes and goalies who are not weird. Tees, crewnecks and hoodies.',
    h1: 'Hockey Shirts',
    intro: 'Hockey shirts for the rink regulars: the goalie everyone calls weird, and the parents in the stands with cold hands and hot takes. Original designs on tees, crewnecks and hoodies.',
    sections: [
      { h2: 'The designs', body: '"Not Weird, Just the Goalie" is for the player in the pads. "Cold Rink, Hot Takes" is for every hockey mom and dad with opinions about the refs, on a crewneck or a hoodie that stays warm in the stands.' },
      { h2: 'Warm enough for the rink', body: 'The crewnecks and hoodies are fleece, which matters at 6 a.m. practice.' },
    ],
    faqs: [
      { q: 'What is a good gift for a hockey mom?', a: 'A warm hockey hoodie or crewneck with a rink joke, like "Cold Rink, Hot Takes," works for long games in the stands. Graphic Tees Co. crewnecks are $34.99 and one free size exchange within 30 days covers a size guess.' },
      { q: 'Do you have goalie shirts?', a: 'Yes. "Not Weird, Just the Goalie" is made for goalies and the people who love them.' },
      { q: 'How long do hockey shirts take to arrive?', a: (f) => `Every design is printed after you order it. Printing takes ${f.productionDays}, then your order ships. Orders of $45 or more ship free in the US, and delivery estimates are shown at checkout.`, needs: 'productionDays' },
    ],
    shopifyHandle: 'hockey-shirts',
  },
  {
    // RankHero 2026-10-18: drummer shirt 1,900/33 (7K listings); drummer gifts 3,600/32 is gift-guide intent. Product #583 moved to "funny drummer shirt". Added 2026-10-19 by Claude (SEO audit: niche had 3+ live products, no page).
    slug: 'drummer-shirts', section: 'tees', audience: 'men', name: 'Drummer Shirts',
    keyword: 'drummer shirt', volume: 1900, kd: 33,
    title: 'Drummer Shirts — Funny Drummer Tees & Hoodies',
    description: 'Funny drummer shirts: professionally loud, and the neighbors absolutely love it. Tees and hoodies, printed to order, for drummers and their long-suffering families.',
    h1: 'Drummer Shirts',
    intro: 'Drummer shirts for the people who practice at full volume and the neighbors who hear every fill. Original designs on tees and hoodies.',
    sections: [
      { h2: 'The designs', body: '"Professionally Loud" says what every drummer already knows. "The Neighbors Love Me" pairs a drummer mid-solo with neighbors who clearly do not.' },
      { h2: 'Gifts for drummers', body: 'An easy gift for the drummer in the family, the church band or the garage band, and a fair warning to anyone who lives next door.' },
    ],
    faqs: [
      { q: 'What is a funny gift for a drummer?', a: 'A drummer shirt with a volume joke, like "The Neighbors Love Me," lands with any drummer and anyone who has lived with one. Graphic Tees Co. drummer tees are $24.99, and one free size exchange within 30 days covers a size guess.' },
      { q: 'Are these shirts good to wear on stage?', a: 'Yes. They are soft cotton tees and fleece hoodies; the bold lettering reads from across a room.' },
      { q: 'How long do drummer shirts take to arrive?', a: (f) => `Every design is printed after you order it. Printing takes ${f.productionDays}, then your order ships. Orders of $45 or more ship free in the US, and delivery estimates are shown at checkout.`, needs: 'productionDays' },
    ],
    shopifyHandle: 'drummer-shirts',
  },
  {
    // RankHero 2026-10-18: bookish sweatshirt 1,600/53. Product #12 (plot twist oversized) moved to "oversized bookish sweatshirt". Added 2026-10-19 by Claude (SEO audit: niche had 3+ live products, no page).
    slug: 'bookish-sweatshirts', section: 'tees', audience: 'women', name: 'Bookish Sweatshirts',
    keyword: 'bookish sweatshirt', volume: 1600, kd: 53,
    title: 'Bookish Sweatshirts — Cozy Hoodies for Book Lovers',
    description: 'Bookish sweatshirts and hoodies for readers: plot twists, staying in, and books that are not for sale. Crewnecks, hoodies and cropped hoodies, printed to order.',
    h1: 'Bookish Sweatshirts',
    intro: 'Bookish sweatshirts for readers who stay in on purpose, guard their shelves and live for a plot twist. Cozy crewnecks, hoodies and cropped hoodies with original designs.',
    sections: [
      { h2: 'The designs', body: '"Plot Twist: I Stayed In" is the reader\'s answer to weekend plans, on a hoodie, a cropped hoodie and an oversized sweatshirt. "Do Not Sell My Books" is for the reader whose shelves are not up for negotiation.' },
      { h2: 'Made for reading', body: 'Soft fleece for long chapters, the couch and the library run.' },
    ],
    faqs: [
      { q: 'What is a good gift for a book lover?', a: 'A bookish sweatshirt with a reader joke, like "Plot Twist: I Stayed In," is an easy gift for any book lover. Graphic Tees Co. crewnecks are $34.99, and one free size exchange within 30 days covers a size guess.' },
      { q: 'Do bookish sweatshirts come cropped or oversized?', a: 'Yes. Plot Twist comes as a regular hoodie, a cropped hoodie and an oversized sweatshirt, so you can pick the fit you like.' },
      { q: 'How long do bookish sweatshirts take to arrive?', a: (f) => `Every design is printed after you order it. Printing takes ${f.productionDays}, then your order ships. Orders of $45 or more ship free in the US, and delivery estimates are shown at checkout.`, needs: 'productionDays' },
    ],
    shopifyHandle: 'bookish-sweatshirts',
  },
];

const rawHoodies: Collection[] = [
  {
    // RankHero 2026-10-18: cat hoodie 14,800/42 (47K listings). Product purrsonal-space hoodie moved to "embroidered cat hoodie". Added 2026-10-19 by Claude (SEO audit: niche had 3+ live products, no page).
    slug: 'cat-hoodies', section: 'hoodies', name: 'Cat Hoodies',
    keyword: 'cat hoodie', volume: 14800, kd: 42,
    title: 'Cat Hoodies — Funny Cat Lover Hoodies & Sweatshirts',
    description: 'Funny cat hoodies for cat lovers: making biscuits, oops anyway, the one shared brain cell and purrsonal space. Hoodies, crewnecks and tees, printed to order.',
    h1: 'Cat Hoodies',
    intro: 'Cat hoodies for people whose cat runs the house: knocking things off tables, making biscuits on the blanket and taking turns with the brain cell. Original designs on hoodies, crewnecks and tees.',
    sections: [
      { h2: 'The designs', body: '"Do Not Disturb. Biscuits in Progress." has a calico kneading a pile of knit blankets. "Oops. Anyway." has a tabby watching a coffee mug fall. "Not My Turn With the Brain Cell" is for the orange-cat household, and "Purrsonal Space" is embroidered for introverts.' },
      { h2: 'For cat moms and cat dads', body: 'There are women\'s hoodies and crewnecks, a cropped hoodie, and "Can\'t, Cat\'s on Me" for the cat dad who cannot get up.' },
    ],
    faqs: [
      { q: 'What is a good gift for a cat lover?', a: 'A cat hoodie with a joke every cat owner knows, like a cat knocking a mug off the table, is an easy gift. Graphic Tees Co. hoodies start at $39.99, and one free size exchange within 30 days covers a size guess.' },
      { q: 'Are any of the cat designs embroidered?', a: 'Yes. "Purrsonal Space" is embroidered on a hoodie and a crewneck. The rest are printed.' },
      { q: 'How long do cat hoodies take to arrive?', a: (f) => `Every design is printed after you order it. Printing takes ${f.productionDays}, then your order ships. Orders of $45 or more ship free in the US, and delivery estimates are shown at checkout.`, needs: 'productionDays' },
    ],
    shopifyHandle: 'cat-hoodies',
  },
  {
    // RankHero 2026-10-18: pit bull hoodie 1,300/18 (553 listings). Product scary-dog zip hoodie moved to "pit bull zip hoodie". Added 2026-10-19 by Claude (SEO audit: niche had 3+ live products, no page).
    slug: 'pit-bull-hoodies', section: 'hoodies', name: 'Pit Bull Hoodies',
    keyword: 'pit bull hoodie', volume: 1300, kd: 18,
    title: 'Pit Bull Hoodies — Funny Pit Bull Lover Hoodies & Tees',
    description: 'Funny pit bull hoodies for pittie parents: 72-pound lap dogs, velvet hippos and scary dogs afraid of the vacuum. Hoodies, crewnecks and tees.',
    h1: 'Pit Bull Hoodies',
    intro: 'Pit bull hoodies for pittie parents who know the truth: the scary dog is a 72-pound lap dog who is afraid of the vacuum. Original designs on hoodies, crewnecks and tees.',
    sections: [
      { h2: 'The designs', body: '"Professional Lap Dog (72 lbs)" is for every pittie who thinks they are small. "Velvet Hippo Social Club" uses the nickname every pit bull owner knows. "Scary Dog, Afraid of the Vacuum" is the reputation versus the reality.' },
      { h2: 'For pittie parents', body: 'Made for owners, rescuers and fosters who are tired of the stereotype and want a laugh instead.' },
    ],
    faqs: [
      { q: 'What is a velvet hippo?', a: '"Velvet hippo" is a loving nickname for pit bulls, from their short, soft coat and broad, hippo-like heads. Graphic Tees Co. turned it into the Velvet Hippo Social Club design.' },
      { q: 'What is a good gift for a pit bull owner?', a: 'A pit bull hoodie that pokes fun at the scary-dog myth, like "Professional Lap Dog," is an easy gift for any pittie parent. Hoodies start at $39.99, and one free size exchange within 30 days covers a size guess.' },
      { q: 'How long do pit bull hoodies take to arrive?', a: (f) => `Every design is printed after you order it. Printing takes ${f.productionDays}, then your order ships. Orders of $45 or more ship free in the US, and delivery estimates are shown at checkout.`, needs: 'productionDays' },
    ],
    shopifyHandle: 'pit-bull-hoodies',
  },
  {
    // RankHero 2026-10-18: capybara hoodie 8,100/16 (1.2K listings). Product out-of-office oversized hoodie moved to "oversized capybara hoodie". Added 2026-10-19 by Claude (SEO audit: niche had 3+ live products, no page).
    slug: 'capybara-hoodies', section: 'hoodies', audience: 'women', name: 'Capybara Hoodies',
    keyword: 'capybara hoodie', volume: 8100, kd: 16,
    title: 'Capybara Hoodies — Funny Calm Capybara Hoodies & Tees',
    description: 'Funny capybara hoodies: out of office and soaking, and tangled in Christmas lights but unbothered. Oversized hoodies, zip hoodies and tees.',
    h1: 'Capybara Hoodies',
    intro: "Capybara hoodies for anyone who wants the capybara's calm: soaking in a hot spring with the out-of-office on, or wrapped in Christmas lights and completely unbothered.",
    sections: [
      { h2: 'The designs', body: '"Out of Office (Soaking)" shows a capybara in a hot spring, on an oversized hoodie. "Tangled. Unbothered." has a capybara wrapped in Christmas lights, on a tee and a zip hoodie.' },
      { h2: 'Why capybaras', body: 'Capybaras are famous for staying calm no matter what. These are for people who aspire to that.' },
    ],
    faqs: [
      { q: 'Why is everyone obsessed with capybaras?', a: 'Capybaras are calm, friendly and famously unbothered, often seen relaxing in hot springs with other animals around them. That chill attitude made them a favorite on social media.' },
      { q: 'What is a good gift for a capybara lover?', a: 'A capybara hoodie is an easy gift: the oversized "Out of Office (Soaking)" hoodie is the cozy pick. Hoodies start at $39.99, and one free size exchange within 30 days covers a size guess.' },
      { q: 'How long do capybara hoodies take to arrive?', a: (f) => `Every design is printed after you order it. Printing takes ${f.productionDays}, then your order ships. Orders of $45 or more ship free in the US, and delivery estimates are shown at checkout.`, needs: 'productionDays' },
    ],
    shopifyHandle: 'capybara-hoodies',
  },
  {
    slug: 'cropped-hoodies', section: 'hoodies', audience: 'women', name: 'Cropped Hoodies',
    keyword: 'cropped hoodie', volume: 40500, kd: 30,
    title: 'Cropped Hoodies — Original Graphic Designs for Women',
    description: 'Cropped hoodies for women with original graphic art. Cut to meet high-rise jeans and skirts, printed to order.',
    h1: 'Cropped Hoodies',
    intro: 'Cropped hoodies for women with original art on the front: the same designs as our cropped tees, on a short fleece hoodie for cold days.',
    sections: [
      { h2: 'What makes these cropped hoodies different?', body: 'Every design is designed for this shop, never stock art. Each hoodie is printed after you order it on a women\'s cropped fleece hoodie.' },
      { h2: 'Same designs as our cropped tees', body: 'Most cropped hoodie designs started as a cropped tee. Grab the tee for warm days and the hoodie when it turns cold.' },
      { h2: 'How to wear a cropped hoodie', body: 'Wear it with high-rise jeans, joggers or a pleated skirt so the hem meets the waistband. Add a long tank underneath when it is cold out.' },
    ],
    faqs: [
      { q: 'How cropped are these hoodies?', a: 'The hem sits around the natural waist, so it meets high-rise jeans and skirts.' },
      { q: 'Do cropped hoodies run small?', a: 'They are a women\'s fit. Take your usual size for the intended look, or size up for a roomier hoodie. Check the size chart on each product.' },
      { q: 'Are these original designs?', a: 'Yes. Every design is original art made for this shop. No brand logos or licensed characters.' },
      { q: 'How long do cropped hoodies take to ship?', a: (f) => `Printing takes ${f.productionDays}, then your order ships. Delivery estimates are shown at checkout.`, needs: 'productionDays' },
    ],
    shopifyHandle: 'cropped-hoodies',
    twin: 'cropped-sweatshirts',
  },
  (() => {
    // Google push #1090 (R0 item 5, 2026-11-25): answer-first intro, heavyweight-vs-regular section, 8 FAQs. Facts from the live collection and a live product page read 2026-11-25 (24 active of 30; every one $49.99; 10 oz/yd2 cotton-poly fleece, fleece-lined hood, ribbed cuffs and waistband, XS or S to 3XL; colors Sandstone, Storm Blue, Grey Heather, Black, Army plus Duck, Black, Forest and Darkwood Tree camo; standard pullover is 8 oz). Last known position: unknown. heavyweight hoodie 14,800 / KD 20 (RankHero 2026-10-16).
    const c = niche(N.heavyweight, 'hoodies', { slug: 'heavyweight-hoodies', keyword: 'heavyweight hoodie', volume: 14800, kd: 20, product: 'heavyweight hoodies' });
    c.title = 'Heavyweight Hoodies: 10 oz Funny Graphic Designs';
    c.description = 'Heavyweight 10 oz hoodies with a joke on the chest: Aim Small. Miss Anyway., Leg Day Survivor, Camera Shy. $49.99 through Nov 30, printed to order.';
    c.intro = 'We sell 25 heavyweight hoodies, each a 10 oz cotton and polyester fleece pullover with a fleece-lined hood, ribbed cuffs and waistband, in sizes XS to 3XL: $49.99 through November 30, then $54.99. That is a thicker fleece than our 8 oz everyday pullover, so it holds its shape and stays warm on cold mornings. The design prints on the center chest. Every hoodie is printed to order; order by Friday, December 4, 2026 for Christmas delivery in the US, and you get one free size exchange with nothing to mail back.';
    // We sell no heavyweight tees, so the template's 'Same designs as our heavyweight tees' section is dropped (R8.6, director 2026-11-25).
    c.sections = [
      ...c.sections.filter((x) => !x.h2.startsWith('Same designs as our')),
      { h2: 'Heavyweight vs regular hoodie', body: 'Our heavyweight hoodies are 10 oz per square yard fleece. Our standard pullover hoodies are 8 oz, so the heavyweight is about a quarter heavier. The extra weight means more warmth, a hood that stands up and a body that keeps its shape wash after wash. The regular pullover is lighter for indoors and mild days; the heavyweight is the one for the truck, the stand and the walk to the mailbox.' },
      { h2: 'Where to go next', body: 'Want the same fleece in a pattern? See our camo hoodies. Want a roomier cut? Browse the men\'s oversized hoodies. For the full range of designs on pullovers, see the men\'s graphic hoodies.',
        links: [{ href: '/hoodies/camo-hoodies/', label: 'Camo hoodies' }, { href: '/hoodies/oversized-hoodies-for-men/', label: "Men's oversized hoodies" }, { href: '/hoodies/graphic-hoodies-for-men/', label: "Men's graphic hoodies" }] },
    ];
    c.faqs = [
      ...c.faqs,
      { q: 'How warm are your heavyweight hoodies?', a: 'Each heavyweight hoodie is 10 oz per square yard cotton and polyester fleece with a fleece-lined hood, ribbed cuffs and a ribbed waistband. That is warm enough for a cold morning outdoors and works as a layer under a jacket. They are not waterproof, so wear a shell in rain.' },
      { q: 'How do Graphic Tees Co. heavyweight hoodies fit?', a: 'They are a relaxed fit with room for a shirt underneath, in sizes XS to 3XL on most designs. Order your usual size for a standard fit or one size up for a looser, layered fit. Each product page has a size chart in inches, and your first size exchange is free.' },
      { q: 'What colors do the heavyweight hoodies come in?', a: 'Most come in Sandstone and Storm Blue, with some in Grey Heather, Black or Army. The hunting designs also come in Duck, Black, Forest and Darkwood Tree camo. Each design is offered only in colors where the art reads clearly, so the colors are listed on each product page.' },
      { q: 'Will a heavyweight hoodie shrink?', a: 'Turn it inside out and wash cold with similar colors, then tumble dry low or hang dry to keep shrinking minimal. Cold water also protects the printed design on the chest. Avoid bleach and never iron directly over the print. The fleece stays thick and soft after repeated washes.' },
      { q: 'When should I order a heavyweight hoodie for Christmas?', a: 'Order by Friday, December 4, 2026 to leave a safe margin for Christmas delivery in the US. Each hoodie is printed to order in 2–5 business days, then ships in about 3–8 business days. Orders of $45 or more ship free, and checkout shows a delivery estimate.' },
      { q: 'What if the size is wrong?', a: 'Graphic Tees Co. offers one free size exchange within 30 days, with nothing to mail back. If your heavyweight hoodie arrives misprinted or damaged, we replace it. Check the size chart first, since heavyweight fleece fits roomier than a thin pullover.' },
    ];
    return c;
  })(),
  (() => {
    const c = niche(N.zipup, 'hoodies', { slug: 'zip-up-hoodies', keyword: 'zip-up hoodie', volume: 135000, kd: 28, product: 'zip-up hoodies' });
    // #1076 inbound link: one natural sentence to the men's page.
    c.sections = [...c.sections, { h2: "Zip-up hoodies for men", body: "Shopping for him? Our men's zip-up hoodies page collects the full-zip fleece designs with the joke on the back.", links: [{ href: '/hoodies/zip-up-hoodies-for-men/', label: "Men's zip-up hoodies" }] }];
    // Google push #1083 (R0 item 5, 2026-11-24): answer-first intro, spoke sections, 8 FAQs. Facts read 2026-11-24: 95 in the Shopify collection (about 85 active); live prices $49.99 printed zip, $57.99 embroidered zip (nearly all), $79.99 all-over-print. Position unknown. Camo zip-up spoke is noindexed, so it is not linked.
    c.title = 'Zip-Up Hoodies: Funny Back-Print Designs, $49.99+';
    c.description = 'Zip-up hoodies with the joke on the back: Catch and Release, Sisyphus Had Bad Programming and Calm Face, Loud Brain. Full-zip 8 oz fleece, from $49.99.';
    c.intro = 'We sell more than 80 original zip-up hoodies, each a full-zip fleece hoodie (50% cotton, 50% polyester, 8 oz, metal zipper) in sizes S to 3XL. Most are $57.99 ($62.99 from December 1) with the joke printed across the back and a small mark embroidered on the left chest; the plain Essentials zip with only an embroidered chest mark is $49.99, and the all-over-print zips are $79.99. Every hoodie is printed to order; order by Friday, December 4, 2026 for Christmas delivery in the US, and you get one free size exchange with nothing to mail back.';
    c.sections = [
      ...c.sections,
      { h2: 'Find your zip-up', body: "Shopping for him? Start with our men's zip-up hoodies. Shopping for her? See the women's zip-up hoodies. Want one color that goes with everything? Our black zip-up hoodies keep the same back-print jokes on black fleece. Our Y2K zip-up hoodies carry the early-2000s look.",
        links: [{ href: '/hoodies/zip-up-hoodies-for-men/', label: "Men's zip-up hoodies" }, { href: '/hoodies/zip-up-hoodies-for-women/', label: "Women's zip-up hoodies" }, { href: '/hoodies/black-zip-up-hoodies/', label: 'Black zip-up hoodies' }, { href: '/hoodies/y2k-zip-up-hoodies/', label: 'Y2K zip-up hoodies' }] },
      { h2: 'Zip-up or pullover?', body: 'A zip-up goes on and off over a tee, vents when you warm up and keeps the print on the back where the zipper cannot split it. A pullover puts the design on the front. If you are still choosing, our graphic zip-up hoodie guide walks through five picks.',
        links: [{ href: '/guides/graphic-zip-up-hoodie/', label: 'Graphic zip-up hoodie guide' }] },
    ];
    c.faqs = [
      ...c.faqs,
      { q: 'What is the difference between a zip-up hoodie and a pullover?', a: 'A zip-up opens down the front with a metal zipper, so you can layer it over a tee and take it off without messing up your hair. A pullover goes over the head. At Graphic Tees Co. the zip-up carries its big print on the back.' },
      { q: 'How do the zip-up hoodies fit?', a: 'They are a regular unisex fit in sizes S through 3XL, so most people order their usual size. Go up one size for room to layer a flannel underneath. Graphic Tees Co. offers one free size exchange within 30 days of delivery, with nothing to mail back.' },
      { q: 'How warm is a zip-up hoodie?', a: 'Each one is a 50% cotton, 50% polyester fleece at 8 oz per square yard, with a metal zipper and front pouch pockets. That is a midweight layer for fall mornings, the garage or the truck, not a heavy winter coat. Layer a tee under it.' },
      { q: 'Where does the print sit on a zip-up hoodie?', a: 'The big design is printed across the back, so nothing prints over the zipper and it shows whether the hoodie is open or closed. Most designs also have a small embroidered mark on the left chest, which is why they cost more than a print-only hoodie.' },
      { q: 'How do I wash a zip-up hoodie so the print lasts?', a: 'Zip it up, turn it inside out and wash cold with like colors, then tumble dry low or hang dry. Skip bleach and never iron over the print or the stitching. The printed back and the embroidered chest mark hold up to regular washing with that care.' },
      { q: 'When should I order a zip-up hoodie for Christmas?', a: 'Order by Friday, December 4, 2026 to leave a margin for Christmas delivery in the US. Each hoodie is printed to order in 2–5 business days, then ships in about 3–8 business days, and checkout shows a delivery estimate. Shipping is free on $45 or more.' },
    ];
    return c;
  })(),
  (() => {
    // Google push #1102 (R0 item 5, 2026-11-27): facts from the live Shopify collection read 2026-11-27 (21 products, all ACTIVE; 7 pullover $39.99 in Sand, Navy, Sport Grey; 2 heavyweight $49.99 in Black, Army, Sandstone, Storm Blue; 5 camo $49.99 in Duck, Forest, Black, Darkwood Tree, Deadwood Tree Camo; 7 embroidered zip $57.99 in Ash, Navy, Black, Forest Green, Dark Chocolate, Dark Heather, Royal, Carolina Blue; sizes S to 3XL, some XS and 4XL-5XL). Last known position: unknown. fishing hoodie 6,600 / KD 30 (RankHero, per brief; not re-measured, RankHero answers nothing unattended).
    const c = niche(N.fishing, 'hoodies', { slug: 'fishing-hoodies', keyword: 'fishing hoodie', volume: 6600, kd: 30, product: 'fishing hoodies', twin: 'fishing-t-shirts', guideSection: { h2: 'What to wear fishing', body: 'Not sure what to wear on a cold dock versus a warm one? Our guide to fishing shirts for men sorts the light tees from the fleece layers.', links: [{ href: '/guides/fishing-shirts-for-men/', label: 'Fishing shirts for men' }] } });
    c.title = 'Fishing Hoodies: Reel Talk, Catch and Release';
    c.description = 'Fishing hoodies: Reel Talk, Catch and Release, Technically Still Fishing, Fishing Is My Love Language. From $39.99 through Nov 30. Free US shipping $45+.';
    c.intro = 'We sell 21 original fishing hoodies, from Reel Talk, Catch and Release and Technically Still Fishing to Six Hours Staring at a Hole, in pullover, embroidered zip-up, heavyweight and camo styles, mostly in sizes S to 3XL. Pullovers are $39.99 through November 30, then $44.99. They are for the dad, the fly fisherman and anyone who calls a cold dock morning a good day. Every hoodie is printed to order; {{order by Friday, December 4, 2026 for Christmas delivery in the US||Christmas delivery in the US is no longer guaranteed}}, and you get one free size exchange with nothing to mail back.';
    c.sections = [
      ...c.sections,
      { h2: 'What to wear on a cold boat or dock morning', body: 'Wear the hoodie as a layer, not a shell: a tee underneath, the fleece on top, and a rain jacket over both if the sky looks wet. The pullover is an 8 oz cotton-poly fleece with a front pouch and a hood that blocks wind off the water; the heavyweight, like Six Hours Staring at a Hole, is a thicker fleece for frosty starts. Fleece is not waterproof, so it soaks through in rain and spray.', links: [{ href: '/products/mens-fishing-professionally-chilling-heavyweight-hoodie/', label: 'Six Hours Staring at a Hole' }, { href: '/products/mens-fishing-technically-still-fishing-hoodie/', label: 'Technically Still Fishing' }] },
      { h2: 'Fishing gifts for dad', body: 'For a dad who already owns every lure, pick the joke he tells at the ramp: Reel Talk, No Photos, Trust Me or Catch and Release. If he has a pullover already, an embroidered zip-up is a step up. More ideas are in our guide to fishing gifts for dad, and the matching tees are in fishing t-shirts.', links: [{ href: '/products/mens-fishing-reel-talk-hoodie/', label: 'Reel Talk' }, { href: '/products/mens-fishing-shouldve-been-here-yesterday-hoodie/', label: 'No Photos, Trust Me' }, { href: '/products/mens-fishing-catch-and-release-mostly-release-hoodie/', label: 'Catch and Release' }, { href: '/guides/fishing-gifts-for-dad/', label: 'Fishing gifts for dad' }, { href: '/fishing-t-shirts/', label: 'Fishing t-shirts' }] },
    ];
    c.faqs = [
      ...c.faqs,
      { q: 'Can you fish in a hoodie?', a: 'Yes, as a casual layer on a cool dock or boat morning. Graphic Tees Co. fishing hoodies are cotton-poly fleece, so they are warm but not waterproof or quick-drying performance wear. Wear a rain shell over one if spray or rain is coming, and keep a dry tee underneath.' },
      { q: 'How do the fishing hoodies fit?', a: 'The pullover is a relaxed fit in sizes S to 3XL, and some designs run XS or up to 5XL. Order your usual size to layer over a tee, or one size up for a looser fit. Each product page has a size chart in inches, and Graphic Tees Co. gives you one free size exchange.' },
      { q: 'Pullover or zip-up fishing hoodie?', a: 'The pullover is the classic: 8 oz fleece, a front pouch and the design printed on the chest. The zip-up carries the big print on the back, a small stitched mark on the left chest, opens fully for warm afternoons and sits easier over a shirt. Camo and heavyweight styles are pullovers in a thicker fleece for colder mornings.' },
      { q: 'What colors do the fishing hoodies come in?', a: 'Colors vary by design and include Sand, Navy, Sport Grey, Black, Army, Sandstone, Storm Blue, Ash, Forest Green and Royal, plus Duck Camo, Forest Camo and Black Camo on the camo styles. We only offer a color where the art reads clearly, and each product page photographs every color.' },
      { q: 'How do I wash a fishing hoodie?', a: 'Turn it inside out, wash cold with similar colors, and tumble dry low or hang dry. Skip bleach and fabric softener, and never iron directly over the print or embroidery. Wash out lake water and fish smell soon after the trip so it does not set into the fleece.' },
      { q: 'How much are the fishing hoodies?', a: 'Fishing hoodies at Graphic Tees Co. [[start at $39.99 for the pullover through November 30, then $44.99. The heavyweight and camo hoodies are $49.99 and the embroidered zip-up $57.99 through November 30.||start at $44.99 for the pullover. The heavyweight and camo hoodies are $54.99 and the embroidered zip-up $62.99.]] Orders of $45 or more ship free in the US, and each hoodie is printed to order.' },
      { q: 'When should I order a fishing hoodie for Christmas?', a: '{{Order by Friday, December 4, 2026 for Christmas delivery in the US. Each fishing hoodie is printed in 2–5 business days, then ships in about 3–8 business days. Orders of $45 or more ship free, and checkout shows a delivery estimate.||Christmas delivery in the US is no longer guaranteed. Each fishing hoodie is printed in 2–5 business days, then ships in about 3–8 business days, so it may arrive after December 25. Orders of $45 or more ship free, and checkout shows a delivery estimate.}}' },
    ];
    return c;
  })(),
  (() => {
    // Google push #1065 (R0 item 5, 2026-11-22): answer-first intro, men/women/vs-tee sections, 8 FAQs. Prices from the live grid (26 designs): pullover $39.99, cropped $44.99, heavyweight $49.99, oversized $54.99, embroidered zip $57.99.
    const c = niche(N.gym, 'hoodies', { slug: 'gym-hoodies', keyword: 'gym hoodie', volume: 18100, kd: 30, product: 'gym hoodies', twin: 'mens-gym-shirts' });
    c.title = 'Gym Hoodies: Funny Lifting Hoodies From $39.99';
    c.description = 'Gym hoodies with a joke: 26 original designs on pullover, cropped, heavyweight, oversized and embroidered zip hoodies. Printed to order, from $39.99.';
    c.intro = 'We sell 26 original gym hoodies on five blanks: the pullover at $39.99, the women\'s cropped hoodie at $44.99, the heavyweight at $49.99, the oversized at $54.99 and the embroidered zip-up at $57.99. Every hoodie is printed to order, ships free in the US on $45 or more, and comes with one free size exchange within 30 days of delivery.';
    c.sections = [
      ...c.sections,
      { h2: "Men's gym hoodies", body: "Most of the grid is for men: Sisyphus Had Bad Programming, Twelve Labors. Zero Cardio., Sore Since 1987 and Retired From Cardio, on pullover, heavyweight and oversized hoodies. Pick the heavyweight for cold garage gyms and the oversized for a roomy drop-shoulder fit.",
        links: [{ href: '/hoodies/gym-hoodies-for-men/', label: "Men's gym hoodies" }] },
      { h2: "Women's gym hoodies", body: "Lunges & Lattes and Lift Heavy. Reply Later. come as a pullover, a cropped hoodie that sits at the waist ($44.99) and an embroidered zip-up ($57.99), cut for women who train in leggings and a sports bra.",
        links: [{ href: '/hoodies/cropped-hoodies/', label: 'Cropped hoodies' }] },
      { h2: 'Gym hoodie vs workout tee', body: 'A hoodie is for the walk in, the warm-up and the drive home, while a tee is for the set itself. The same designs come on both, so pick the tee for lifting and the hoodie for the layers either side.',
        links: [{ href: '/mens-gym-shirts/', label: "Men's gym shirts" }] },
    ];
    c.faqs = [
      ...c.faqs,
      { q: 'How warm are the gym hoodies?', a: 'Graphic Tees Co. pullover gym hoodies are a midweight cotton-poly fleece for everyday wear. The heavyweight hoodie ($49.99) uses thicker fleece for cold mornings, and the oversized hoodie ($54.99) is heavyweight cotton with a roomy cut. Pick by how cold your gym or garage gets.' },
      { q: 'Are these hoodies for lifting in or for after?', a: 'They are cotton fleece hoodies, not moisture-wicking performance gear. Most lifters wear them for the warm-up, the walk in and the drive home, then take them off once they are moving. Graphic Tees Co. also sells the same designs as tees for the set.' },
      { q: 'How do I wash a gym hoodie so the print lasts?', a: 'Turn the hoodie inside out, wash cold with like colors, and tumble dry low or hang dry. Skip bleach and never iron over the print. Graphic Tees Co. prints direct to garment, and the ink holds up to regular washing with that care.' },
      { q: 'When should I order a gym hoodie as a Christmas gift?', a: 'Order by Friday, December 4, 2026 to leave a margin for Christmas delivery in the US; December 8 is the last day we recommend. Every hoodie is printed to order in 2–5 business days, then ships in about 3–8 business days, and checkout shows a delivery estimate.' },
    ];
    return c;
  })(),
  (() => {
    // Google push #1104 (R0 item 5, 2026-11-27): facts from the live Shopify collection read 2026-11-27 (25 in the collection, 24 ACTIVE, 1 DRAFT not counted; 1 pullover $39.99 in Dark Heather, Military Green; 1 heavyweight $49.99 in Sandstone, Storm Blue; 15 camo pullovers $49.99 in Duck, Forest, Black, Darkwood Tree, Deadwood Tree Camo and Sandstone; 3 zip-ups $57.99 in Ash, Black, Navy, Dark Heather, Royal; 1 pink camo hoodie; sizes S to 3XL, some XS and 4XL-6XL). Last known position: unknown. hunting hoodie 3,600 / KD 32 (RankHero, per brief; not re-measured, RankHero answers nothing unattended).
    const c = niche(N.hunting, 'hoodies', { slug: 'hunting-hoodies', keyword: 'hunting hoodie', volume: 3600, kd: 32, product: 'hunting hoodies', twin: 'hunting-t-shirts' });
    c.title = 'Hunting Hoodies: Tag Soup, Sat 11 Hours, Antler Envy';
    c.description = 'Hunting hoodies: Today\'s Special: Tag Soup, Sat 11 Hours. Saw a Squirrel., Antler Envy, Quack of Dawn. From $39.99 through Nov 30. Free US shipping $45+.';
    c.intro = 'We sell 24 original hunting hoodies, from Today\'s Special: Tag Soup and Sat 11 Hours. Saw a Squirrel. to Antler Envy and Quack of Dawn, in pullover, camo, heavyweight and zip-up styles, mostly in sizes S to 3XL. Pullovers are $39.99 through November 30, then $44.99. They are for the deer-stand regular, the duck-blind early riser and the wife who is tired of hearing about it. Every hoodie is printed to order; {{order by Friday, December 4, 2026 for Christmas delivery in the US||Christmas delivery in the US is no longer guaranteed}}, and you get one free size exchange with nothing to mail back.';
    c.sections = [
      ...c.sections,
      { h2: 'Hunting hoodies for women', body: 'Three designs are made for her: Doe Not Disturb and Ducks in a Row in camo, and Deer Stand Princess, a pink camo hoodie with The Throne Is 20 Ft Up printed on it. They are casual hunting hoodies for deer camp, the tailgate and town. More are in our women\'s camo hoodies.', links: [{ href: '/products/womens-hunting-doe-not-disturb-camo-hoodie/', label: 'Doe Not Disturb' }, { href: '/products/womens-hunting-ducks-in-a-row-camo-hoodie/', label: 'Ducks in a Row' }, { href: '/products/womens-hunting-deer-stand-princess-pink-camo-hoodie/', label: 'Deer Stand Princess' }, { href: '/hoodies/camo-hoodies-for-women/', label: "Women's camo hoodies" }] },
      { h2: 'Camo or a solid color?', body: 'Camo hoodies carry the joke in a light ink on Duck, Forest, Black, Darkwood Tree and Deadwood Tree Camo, and most of this page is camo. If you want the art to stand out, the Tag Soup pullover comes in Dark Heather and Military Green, and the Archery heavyweight in Sandstone and Storm Blue. Camo here is a pattern for casual wear, not a hunting-gear claim: it is not scent-control or blaze-orange clothing, so check your state rules before you wear it in the field. Browse all camo hoodies or the duck camo hoodies.', links: [{ href: '/products/mens-hunting-todays-special-tag-soup-hoodie/', label: 'Tag Soup pullover' }, { href: '/products/mens-hunting-archery-aim-small-miss-anyway-heavyweight-hoodie/', label: 'Archery heavyweight' }, { href: '/hoodies/camo-hoodies/', label: 'Camo hoodies' }, { href: '/hoodies/duck-camo-hoodies/', label: 'Duck camo hoodies' }] },
    ];
    c.faqs = [
      ...c.faqs,
      { q: 'Can you wear these hunting hoodies in the stand?', a: 'Yes, as a casual layer. Graphic Tees Co. hunting hoodies are soft fleece, warm but not waterproof, scent-control or blaze-orange safety gear. Wear one under your outer layer on a cold morning, and follow your state\'s blaze-orange rules whatever you have on.' },
      { q: 'How do the hunting hoodies fit?', a: 'The pullovers are a relaxed fit in sizes S to 3XL, and some designs run XS or up to 6XL. Order your usual size to layer over a tee, or one size up for a looser fit. Each product page has a size chart in inches, and Graphic Tees Co. gives you one free size exchange.' },
      { q: 'What sizes are the hunting hoodies?', a: 'Most hunting hoodies at Graphic Tees Co. come in S to 3XL, and some add XS and 4XL to 6XL. The women\'s pink camo hoodie starts at 2XS. The size chart on each product page lists chest measurements in inches, and your first size exchange is free with nothing to mail back.' },
      { q: 'How do I wash a hunting hoodie?', a: 'Turn it inside out, wash cold with similar colors, and tumble dry low or hang dry. Skip bleach and fabric softener, and never iron directly over the print. Washing with the hoodie inside out keeps the ink sharp on camo, and the design on the chest holds up through a season of weekends.' },
      { q: 'What camo colors do the hunting hoodies come in?', a: 'The camo hoodies come in Duck Camo, Forest Camo, Black Camo, Darkwood Tree Camo and Deadwood Tree Camo, and a few add Sandstone. The pullovers and zip-ups are also in solid colors such as Dark Heather, Military Green, Ash, Navy and Royal. Each product page photographs every color.' },
      { q: 'Do you have hunting hoodies for women?', a: 'Yes. Doe Not Disturb and Ducks in a Row are women\'s camo hoodies, and Deer Stand Princess is a pink camo hoodie. The men\'s designs are sold in the same hoodie fits, so she can also pick by the joke printed on it.' },
      { q: 'How much are the hunting hoodies?', a: 'Hunting hoodies at Graphic Tees Co. [[start at $39.99 for the pullover through November 30, then $44.99. The camo and heavyweight hoodies are $49.99 and the zip-up $57.99 through November 30.||start at $44.99 for the pullover. The camo and heavyweight hoodies are $54.99 and the zip-up $62.99.]] Orders of $45 or more ship free in the US, and each hoodie is printed to order.' },
      { q: 'When should I order a hunting hoodie for Christmas?', a: '{{Order by Friday, December 4, 2026 for Christmas delivery in the US. Each hunting hoodie is printed in 2–5 business days, then ships in about 3–8 business days. Orders of $45 or more ship free, and checkout shows a delivery estimate.||Christmas delivery in the US is no longer guaranteed. Each hunting hoodie is printed in 2–5 business days, then ships in about 3–8 business days, so it may arrive after December 25. Orders of $45 or more ship free, and checkout shows a delivery estimate.}}' },
    ];
    return c;
  })(),
  (() => {
    // Google push #1107 (R0 item 5, 2026-11-27): answer-first intro, styling and spoke sections, 8 FAQs. Facts from the live Shopify collection read 2026-11-27 (8 ACTIVE: 5 pullovers at $39.99 [Hot Mess Express Light Pink/White; Gold Star for Leaving the House, Main Quest Postponed, Still Loading Since 1999, Low Battery High Standards in Sand/Navy] and 3 embroidered zips at $57.99 [Hot Mess Express, Low Battery High Standards, Still Loading] in Ash, Navy, Black, Forest Green, Dark Chocolate, Dark Heather, Royal; pullover sizes S to 3XL, Low Battery to 5XL; zips S to 5XL). y2k hoodie 14,800 / KD 35 (RankHero, per brief; not re-measured, RankHero answers nothing unattended). Last known position: unknown.
    const c = niche(N.y2k, 'hoodies', { slug: 'y2k-hoodies', keyword: 'y2k hoodie', volume: 14800, kd: 35, product: 'Y2K hoodies', twin: 'y2k-graphic-tees' });
    c.title = 'Y2K Hoodies: Hot Mess Express, Still Loading Since 1999';
    c.description = 'Y2K hoodies: Hot Mess Express, Still Loading Since 1999, Low Battery High Standards. From $39.99 through Nov 30, printed to order. Free US shipping $45+.';
    c.intro = 'We sell 8 original Y2K hoodies, from Hot Mess Express, Still Loading Since 1999 and Low Battery High Standards to Gold Star for Leaving the House and Main Quest Postponed, in pullover and zip-up styles, in sizes S to 3XL (some go to 5XL). Pullovers are $39.99 through November 30, then $44.99. They are for anyone who misses flip phones, butterfly clips and dial-up, and every hoodie is printed to order; {{order by Friday, December 4, 2026 for Christmas delivery in the US||Christmas delivery in the US is no longer guaranteed}}, and you get one free size exchange with nothing to mail back.';
    c.sections = [
      ...c.sections,
      { h2: 'How to style a Y2K hoodie', body: 'Go baggy on purpose: wear a pullover over low-rise or baggy jeans, add platform sneakers or chunky sandals, and keep the hoodie slightly oversized by ordering one size up. Gold Star for Leaving the House and Main Quest Postponed suit an easy weekend with jeans, and Hot Mess Express in Light Pink goes with a mini skirt and a butterfly clip.', links: [{ href: '/products/womens-y2k-hot-mess-express-hoodie/', label: 'Hot Mess Express' }, { href: '/products/womens-y2k-gold-star-for-leaving-the-house-hoodie/', label: 'Gold Star for Leaving the House' }, { href: '/products/unisex-y2k-side-quests-only-hoodie/', label: 'Main Quest Postponed' }] },
      { h2: 'Y2K zip-ups and Y2K tees', body: 'Prefer a zip? Hot Mess Express, Low Battery High Standards and Still Loading are also zip-up hoodies with the big print on the back and a small stitched mark on the left chest. For a lighter layer, our Y2K graphic tees carry the same retro tech jokes.', links: [{ href: '/hoodies/y2k-zip-up-hoodies/', label: 'Y2K zip-up hoodies' }, { href: '/y2k-graphic-tees/', label: 'Y2K graphic tees' }, { href: '/products/womens-y2k-still-loading-hoodie/', label: 'Still Loading Since 1999' }, { href: '/products/womens-y2k-low-battery-high-standards-hoodie/', label: 'Low Battery High Standards' }] },
    ];
    c.faqs = [
      ...c.faqs,
      { q: 'How do the Y2K hoodies fit?', a: 'The pullovers are a relaxed unisex fit in sizes S to 3XL, and Low Battery High Standards also goes to 5XL. Order your usual size to layer over a tee, or one size up for the baggy Y2K look. Each product page has a size chart in inches, and Graphic Tees Co. gives you one free size exchange.' },
      { q: 'How do I wash a Y2K hoodie?', a: 'Turn it inside out, wash cold with similar colors, and tumble dry low or hang dry. Skip bleach and fabric softener, and never iron directly over the print. Cold water keeps the pink and retro tech art sharp wash after wash, and the fleece stays soft.' },
      { q: 'What colors do the Y2K hoodies come in?', a: 'The pullovers come in Sand and Navy, and Hot Mess Express also comes in Light Pink and White. The zip-ups come in Ash, Navy, Black, Forest Green, Dark Chocolate, Dark Heather and Royal. Each product page photographs every color, and we only offer a color where the art reads clearly.' },
      { q: 'How much are the Y2K hoodies?', a: 'Y2K hoodies at Graphic Tees Co. [[are $39.99 for the pullover through November 30, then $44.99, and the zip-up is $57.99 through November 30, then $62.99.||are $44.99 for the pullover and $62.99 for the zip-up.]] Each hoodie is printed to order with original art, and orders of $45 or more ship free in the US.' },
      { q: 'When should I order a Y2K hoodie for Christmas?', a: '{{Order by Friday, December 4, 2026 for Christmas delivery in the US. Each Y2K hoodie is printed in 2–5 business days, then ships in about 3–8 business days. Orders of $45 or more ship free, and checkout shows a delivery estimate.||Christmas delivery in the US is no longer guaranteed. Each Y2K hoodie is printed in 2–5 business days, then ships in about 3–8 business days, so it may arrive after December 25. Orders of $45 or more ship free, and checkout shows a delivery estimate.}}' },
    ];
    return c;
  })(),
  niche(N.western, 'hoodies', { slug: 'western-hoodies', keyword: 'western hoodie', volume: 3600, kd: 36, product: 'western hoodies', twin: 'western-graphic-tees' }),
  niche(N.oversized, 'hoodies', { slug: 'oversized-hoodies', keyword: 'oversized hoodie', volume: 165000, kd: 38, product: 'oversized hoodies', twin: 'oversized-graphic-tees' }),
  niche(N.christian, 'hoodies', { slug: 'christian-hoodies', keyword: 'christian hoodie', volume: 18100, kd: 44, product: 'Christian hoodies', twin: 'christian-shirts' }) /* RankHero 2026-10-16 */,
  (() => {
    // Google push #1085 (R0 item 5, 2026-11-24): answer-first intro, spoke links, 8 FAQs. Facts from the live collection read 2026-11-24 (38 camo hoodies, 36 at $49.99; Independent Trading heavyweight, 10 oz cotton-polyester fleece; Forest, Deadwood Tree, Duck, Black and Darkwood Tree camo; print about 10 in wide on the center chest). Pink camo and camo zip-up spokes are noindex, so not linked. Last known position: unknown. camo hoodie 74,000 / KD 23 (RankHero 2026-10-16).
    const c = niche(N.camo, 'hoodies', { slug: 'camo-hoodies', keyword: 'camo hoodie', volume: 74000, kd: 23, product: 'camo hoodies' }) /* RankHero 2026-10-16; R11.5 sweep */;
    c.title = 'Camo Hoodies: Funny Hunting & Fishing Designs';
    c.description = 'Camo hoodies with a joke: Sat 11 Hours. Saw a Squirrel., Fluent in Honk, Lone Wolf. Early Bedtime. 38 heavyweight 10 oz hoodies, printed to order.';
    c.intro = "We sell 38 original camo hoodies, each a heavyweight 10 oz cotton and polyester fleece hoodie, $49.99 through November 30, then $54.99, in Forest, Deadwood Tree, Duck, Black or Darkwood Tree camo, sizes XS to 3XL. The design prints about 10 inches wide on the center chest, with a fleece-lined hood and ribbed cuffs. Every hoodie is printed to order; order by Friday, December 4, 2026 for Christmas delivery in the US, and you get one free size exchange with nothing to mail back.";
    c.sections = [
      ...c.sections,
      { h2: 'Camo hoodies by who wears them', body: "Shopping for her? Our women's camo hoodies have the deer-stand, trail and fishing jokes. Prefer a single dark color or waterfowl colors? See our black camo hoodies and duck camo hoodies. For the full set of jokes about the blind and the tree stand, browse our hunting hoodies.",
        links: [{ href: '/hoodies/camo-hoodies-for-women/', label: "Women's camo hoodies" }, { href: '/hoodies/black-camo-hoodies/', label: 'Black camo hoodies' }, { href: '/hoodies/duck-camo-hoodies/', label: 'Duck camo hoodies' }, { href: '/hoodies/hunting-hoodies/', label: 'Hunting hoodies' }] },
    ];
    c.faqs = [
      ...c.faqs,
      { q: 'How warm are the camo hoodies?', a: 'Each one is a heavyweight cotton and polyester fleece hoodie at 10 oz per square yard, with a fleece-lined hood, ribbed cuffs and a waistband. That is warm enough for a chilly morning at the blind or the lake and made for layering under a jacket.' },
      { q: 'What camo colors do you offer?', a: 'Graphic Tees Co. camo hoodies come in Forest Camo, Deadwood Tree Camo, Duck Camo, Black Camo and Darkwood Tree Camo. Each design is offered only in the colors where the art and every letter read clearly, so not every hoodie comes in every pattern. The colors are listed on each product page.' },
      { q: 'Where does the print sit?', a: 'The design is printed on the front of the hoodie, about 10 inches wide on the center chest, or as a small left-chest mark on some designs. The hood and the pouch stay clear of the print, and each design sits on a cream backing that follows its outline so it stays readable on the busy camo pattern.' },
      { q: 'How do I wash a printed camo hoodie?', a: 'Turn the hoodie inside out and wash it in cold water with similar colors, then tumble dry low or hang to dry. Skip bleach and fabric softener, and never iron over the print. Cold washing keeps the ink sharp and the camo colors dark through a full hunting season.' },
      { q: 'When should I order a camo hoodie for Christmas?', a: 'Order by Friday, December 4, 2026 to leave a safe margin for Christmas delivery in the US. Each hoodie is printed to order in 2–5 business days, then ships in about 3–8 business days. Orders over $45 ship free, and checkout shows a delivery estimate.' },
    ];
    return c;
  })(),
  (() => {
    // Google push #1076 (R0 item 5, 2026-11-23): answer-first intro, zip-or-pullover section, 8 FAQs. Facts from live product pages (Catch and Release zip): 8 oz/yd2 50/50 cotton-poly fleece, metal zipper, S-3XL. Grid prices read 2026-11-23: zip-ups $49.99 to $57.99 (embroidered $57.99). Last position unknown.
    const c = niche(N.zipup, 'hoodies', { slug: 'zip-up-hoodies-for-men', keyword: 'mens zip up hoodie', volume: 74000, kd: 6, product: "men's zip-up hoodies", audience: 'men', name: "Men's Zip-Up Hoodies" }) /* RankHero 2026-10-16 */;
    c.title = "Men's Zip-Up Hoodies: Funny Back-Print Designs, $49.99+";
    c.description = "Men's zip-up hoodies with a joke on the back: Catch and Release, Twelve Labors. Zero Cardio. and Sisyphus Had Bad Programming. Full zip, 8 oz, from $49.99.";
    c.intro = "We sell 50 men's zip-up hoodies, each a full-zip fleece hoodie (50% cotton, 50% polyester, 8 oz, metal zipper) in sizes S to 3XL, from $49.99, with the embroidered ones at $57.99. The big print runs across the back, so nothing prints over the zipper, and many also carry a small stitched mark on the left chest. Every hoodie is printed to order; order by Friday, December 4, 2026 for Christmas delivery in the US, and you get one free size exchange with nothing to mail back.";
    c.sections = [
      ...c.sections,
      { h2: 'Zip-up or pullover?', body: "Pick the zip-up if you layer, run warm or want to open it over a tee; the print sits on the back so it shows either way. Pick a pullover if you want the design on the front with no zipper through it.",
        links: [{ href: '/hoodies/graphic-hoodies-for-men/', label: "Men's graphic hoodies" }] },
      { h2: 'Back print, stitched chest', body: "Catch and Release puts a leaping bass across the back with a small bass embroidered on the left chest. Twelve Labors. Zero Cardio. and Sisyphus Had Bad Programming. are for the gym, and Reel Talk and Casting Doubt are for the dock. The same back-print idea runs through the hunting, golf and trade designs." },
      { h2: 'Want it darker?', body: "Prefer a single dark color? Our black zip-up hoodies keep the same back-print designs on black fleece. For a full guide to picking one, read our graphic zip-up hoodie guide.",
        links: [{ href: '/hoodies/black-zip-up-hoodies/', label: 'Black zip-up hoodies' }, { href: '/guides/graphic-zip-up-hoodie/', label: 'Graphic zip-up hoodie guide' }] },
    ];
    c.faqs = [
      ...c.faqs,
      { q: 'How do the men\'s zip-up hoodies fit?', a: 'They are a regular unisex fit in sizes S through 3XL, so most men order their usual size. Go up one size if you want room for a flannel underneath. Graphic Tees Co. offers one free size exchange within 30 days of delivery, and there is nothing to mail back.' },
      { q: 'What are the zip-up hoodies made of, and how warm are they?', a: 'Each one is a 50% cotton, 50% polyester fleece zip-up at 8 oz per square yard, with a metal zipper, front pouch pockets and a color-matched drawcord hood. That is a midweight layer for fall mornings, the garage or the truck, not an arctic parka.' },
      { q: 'Where does the print sit on a zip-up hoodie?', a: 'The big design is printed across the back, so nothing prints over the zipper and it shows whether you wear the hoodie open or closed. Many also have a small embroidered mark on the left chest, like the bass on Catch and Release.' },
      { q: 'How do I wash a zip-up hoodie so the print lasts?', a: 'Zip it up, turn it inside out and wash cold with like colors, then tumble dry low or hang dry. Skip bleach and never iron over the print or the stitching. The printed back and the embroidered chest mark hold up to regular washing with that care.' },
      { q: 'When should I order a zip-up hoodie for Christmas?', a: 'Order by Friday, December 4, 2026 to leave a margin for Christmas delivery in the US. Each hoodie is printed to order in 2–5 business days, then ships in about 3–8 business days, and checkout shows a delivery estimate. Shipping is free on $45 or more.' },
      { q: 'What does a men\'s zip-up hoodie cost?', a: 'Zip-up hoodies here run from $49.99 for the printed designs to $57.99 for the embroidered ones, and shipping is free in the US on orders of $45 or more. Prices are on every product page, and they include the print, with no setup fees or extras.' },
    ];
    return c;
  })(),
  (() => {
    // Google push #1078 (R0 item 5, 2026-11-23): answer-first intro, sizing section, links, 8 FAQs. Facts read from live product pages 2026-11-23 (Sore Since 1987 oversized): 60% cotton / 40% polyester brushed fleece, 10 oz/yd2, double-layered hood with no drawcord, front pocket, S-3XL, Dust and Navy. Grid: 18 designs, oversized $54.99, heavyweight $49.99. No inch measurements quoted (read the size chart on each product). Last position unknown.
    const c = niche(N.oversized, 'hoodies', { slug: 'oversized-hoodies-for-men', keyword: 'oversized hoodie men', volume: 18100, kd: 10, product: "men's oversized hoodies", audience: 'men', name: "Men's Oversized Hoodies" }) /* RankHero 2026-10-16 */;
    c.title = "Men's Oversized Hoodies: Funny Fleece, $54.99";
    c.description = "Men's oversized hoodies with a joke: Sore Since 1987, Rack Your Weights Respectfully, Bulking Season. 10 oz brushed fleece, from $49.99. Printed to order.";
    c.intro = "We sell 18 original hoodies for men here, mostly on our oversized blank at $54.99 (60% cotton, 40% polyester brushed fleece, 10 oz, front pocket, sizes S to 3XL) plus a few heavyweight hoodies at $49.99. The cut is roomy with a dropped, slouchy feel. Every hoodie is printed to order; order by Friday, December 4, 2026 for Christmas delivery in the US, and you get one free size exchange with nothing to mail back.";
    c.sections = [
      ...c.sections,
      { h2: 'Oversized or regular? How to size', body: "The oversized hoodie is cut roomy on purpose, so most people keep their usual size for the slouchy look and size down only for a closer fit. Check the size chart on each product and compare it with a hoodie you already own. If the size is a guess, the first exchange is free.",
        links: [{ href: '/hoodies/oversized-hoodies/', label: 'All oversized hoodies' }, { href: '/guides/best-oversized-hoodies/', label: 'Best oversized hoodies' }] },
    ];
    c.faqs = [
      ...c.faqs,
      { q: 'Should I size down in an oversized hoodie?', a: 'Only if you want a closer fit. The Graphic Tees Co. oversized hoodie is cut roomy on purpose, so your usual size gives the slouchy look. Compare the size chart with a hoodie you own, and use the free size exchange if it is off.' },
      { q: 'How warm is the oversized hoodie?', a: 'It is a 10 oz brushed fleece in 60% cotton and 40% polyester, soft inside and warm enough for a cool evening or an indoor layer. For colder days, Graphic Tees Co. also sells heavyweight hoodies at $49.99 in this collection.' },
      { q: 'Does the hoodie have a pocket and drawstrings?', a: 'The oversized hoodie has a front pocket and a double-layered hood with no drawcord. That keeps the look clean and the print uninterrupted. Graphic Tees Co. prints each hoodie to order in sizes S through 3XL.' },
      { q: 'Will an oversized hoodie shrink in the wash?', a: 'Any cotton-blend fleece can shrink a little, so wash it inside out in cold water and hang it dry or tumble on low. Skip bleach and fabric softener, and never iron over the print. Graphic Tees Co. prints each hoodie to order.' },
    ];
    return c;
  })(),
  (() => {
    // Google push #1103 (R0 item 5, 2026-11-27): facts from the live Shopify collection read 2026-11-27 (20 products, all ACTIVE: 11 pullover $39.99 in Sand, Navy, Sport Grey, Ash, Light Blue; 2 heavyweight $49.99 in Grey Heather, Storm Blue, Black; 5 oversized $54.99 in Dust, Athletic Heather, Navy; 2 embroidered zip $57.99 in Black, Navy, Ash; sizes S to 3XL, some XS and 4XL-5XL). Last known position: unknown. mens gym hoodie 9,900 / KD 31 (RankHero 2026-10-16, per brief; not re-measured, RankHero answers nothing unattended).
    const c = niche(N.gym, 'hoodies', { slug: 'gym-hoodies-for-men', keyword: 'mens gym hoodie', volume: 9900, kd: 31, product: "men's gym hoodies", audience: 'men', name: "Men's Gym Hoodies" });
    c.title = "Men's Gym Hoodies: Twelve Labors. Zero Cardio.";
    c.description = "Men's gym hoodies: Twelve Labors. Zero Cardio., Sore Since 1987, Retired From Cardio, Leg Day Survivor. From $39.99 through Nov 30. Free US shipping $45+.";
    c.intro = 'We sell 20 original gym hoodies for men, from Twelve Labors. Zero Cardio. and Sore Since 1987 to Retired From Cardio and Leg Day Survivor, in pullover, oversized, heavyweight and embroidered zip-up styles, mostly in sizes S to 3XL. Pullovers are $39.99 through November 30, then $44.99. They are for the lifter, the gym dad and the friend who skips cardio on purpose. Every hoodie is printed to order; {{order by Friday, December 4, 2026 for Christmas delivery in the US||Christmas delivery in the US is no longer guaranteed}}, and you get one free size exchange with nothing to mail back.';
    c.sections = [
      ...c.sections,
      { h2: 'Wearing a hoodie to lift', body: 'Wear it as the warm-up layer you drop before the first working set, or the one you pull on after, not as lifting gear. These are cotton-poly fleece, not a compression or moisture-wicking performance fabric, so they trap heat once you sweat. The oversized cut leaves room across the shoulders for a loose, boxy look, and the zip-up opens fast when you warm up.', links: [{ href: '/products/mens-gym-twelve-labors-zero-cardio-embroidered-zip-hoodie/', label: 'Twelve Labors. Zero Cardio. zip-up' }, { href: '/products/mens-gym-sore-since-1987-oversized-hoodie/', label: 'Sore Since 1987 oversized' }, { href: '/products/mens-gym-leg-day-survivor-heavyweight-hoodie/', label: 'Leg Day Survivor heavyweight' }] },
      { h2: 'Gym gifts for men', body: 'For the lifter who has every strap and shaker, pick the line he would say himself: Twelve Labors. Zero Cardio., Retired From Cardio or Sore Since 1987. For a bigger gift choose the embroidered zip-up. More ideas are in our guide to gym gifts for men, with matching tees in men\'s gym shirts and more styles in gym hoodies.', links: [{ href: '/products/mens-gym-twelve-labors-zero-cardio-hoodie/', label: 'Twelve Labors. Zero Cardio.' }, { href: '/products/mens-gym-retired-from-cardio-hoodie/', label: 'Retired From Cardio' }, { href: '/guides/gym-gifts-for-men/', label: 'Gym gifts for men' }, { href: '/mens-gym-shirts/', label: "Men's gym shirts" }, { href: '/hoodies/gym-hoodies/', label: 'Gym hoodies' }] },
    ];
    c.faqs = [
      ...c.faqs,
      { q: 'Can you work out in a gym hoodie?', a: 'Yes, as a warm-up or cool-down layer. Graphic Tees Co. gym hoodies are cotton-poly fleece, not a compression or moisture-wicking fabric, so they hold heat and sweat during hard sets. Wear one to the gym, take it off for your working sets, and put it back on afterward.' },
      { q: 'How do the gym hoodies fit across the shoulders?', a: 'The pullover is a relaxed fit in sizes S to 3XL, and some designs run XS or up to 5XL. The oversized hoodie is boxy with a dropped shoulder, so it has the most room. If you are broad through the chest, order one size up. Each page has a size chart in inches.' },
      { q: 'Pullover, oversized, heavyweight or zip-up?', a: 'The pullover is an 8 oz fleece with a front pouch. The oversized is a boxy cut with a dropped shoulder, the heavyweight is a thicker fleece for cold gym mornings, and the zip-up has the big print on the back with a small stitched mark on the left chest. Each product page lists the styles that design comes in.' },
      { q: 'What colors do the gym hoodies come in?', a: 'Colors vary by design and include Sand, Navy, Sport Grey, Ash, Black, Dust, Athletic Heather, Grey Heather and Storm Blue. We only offer a color where the art reads clearly, and each product page photographs every color, so you can see the print on the hoodie you choose.' },
      { q: 'How do I wash a gym hoodie?', a: 'Turn it inside out, wash cold with similar colors, and tumble dry low or hang dry. Skip bleach and fabric softener, and never iron directly over the print or embroidery. Wash it soon after sweaty sessions; cold water keeps the print bright and the fleece soft.' },
      { q: 'How much are the gym hoodies?', a: "Gym hoodies at Graphic Tees Co. [[start at $39.99 for the pullover through November 30, then $44.99. The heavyweight is $49.99, the oversized $54.99 and the embroidered zip-up $57.99 through November 30.||start at $44.99 for the pullover. The heavyweight is $54.99, the oversized $59.99 and the embroidered zip-up $62.99.]] Orders of $45 or more ship free in the US, and each hoodie is printed to order." },
      { q: 'When should I order a gym hoodie for Christmas?', a: '{{Order by Friday, December 4, 2026 for Christmas delivery in the US. Each gym hoodie is printed in 2–5 business days, then ships in about 3–8 business days. Orders of $45 or more ship free, and checkout shows a delivery estimate.||Christmas delivery in the US is no longer guaranteed. Each gym hoodie is printed in 2–5 business days, then ships in about 3–8 business days, so it may arrive after December 25. Orders of $45 or more ship free, and checkout shows a delivery estimate.}}' },
    ];
    return c;
  })() /* RankHero 2026-10-16 */,
  niche(N.halfzip, 'hoodies', { slug: 'half-zip-pullovers', keyword: 'half zip pullover', volume: 5400, kd: 14, product: 'half zip pullovers', name: 'Half Zip Pullovers' }) /* RankHero 2026-10-16; Bella+Canvas 4740 */,
  (() => {
    // Google push #1062 (R0 item 5, 2026-11-22): answer-first intro, blank/niche sections, 7 FAQs. Prices from R12.1 (pullover $39.99, cropped $44.99, zip-up $44.99, heavyweight $49.99, oversized $54.99).
    const c = niche(N.womenshoodies, 'hoodies', { slug: 'graphic-hoodies-for-women', keyword: 'graphic hoodies for women', volume: 8100, kd: 12, product: 'graphic hoodies for women', audience: 'women', name: "Women's Graphic Hoodies" });
    c.title = 'Graphic Hoodies for Women: Funny, Cozy, From $39.99';
    c.description = 'Graphic hoodies for women: 200+ original designs on pullover, cropped, zip-up and oversized hoodies. Printed to order, from $39.99, free size exchange.';
    c.intro = 'We sell 200+ original graphic hoodies for women on four blanks: the pullover at $39.99, the cropped hoodie and the zip-up at $44.99, and the oversized at $54.99. Every hoodie is printed to order, ships free in the US on $45 or more, and comes with one free size exchange within 30 days of delivery.';
    c.sections = [
      ...c.sections,
      { h2: 'Cropped graphic hoodies for women', body: 'Our cropped hoodies ($44.99) are a women\'s cut fleece with a hem at the natural waist, made to meet high-rise jeans and skirts. The same art as the pullover, in a shorter, boxier shape.',
        links: [{ href: '/hoodies/cropped-hoodies/', label: 'Cropped hoodies' }] },
      { h2: 'Christmas graphic hoodies for women', body: 'The holiday designs are funny lines for the family photo, the office party and the cookie swap, from $39.99 on the pullover. Order by Friday, December 4, 2026 for Christmas delivery in the US.',
        links: [{ href: '/hoodies/christmas-hoodies/', label: 'Christmas hoodies' }] },
      { h2: 'Cat and gym graphic hoodies', body: 'Two big groups outside Christmas are cat and gym designs: cat hoodies for the one who ignores you, and gym hoodies for the lifter in your life, on the same pullover and zip-up blanks.',
        links: [{ href: '/hoodies/cat-hoodies/', label: 'Cat hoodies' }, { href: '/hoodies/gym-hoodies/', label: 'Gym hoodies' }] },
    ];
    c.faqs = [
      ...c.faqs,
      { q: 'How do cropped hoodies fit compared with a pullover?', a: 'Graphic Tees Co. cropped hoodies are a women\'s cut with the hem at the natural waist, so they sit shorter and boxier than the classic pullover. Take your usual size for the cropped look; the classic pullover is a unisex fit with a longer body.' },
      { q: 'Should I size up for an oversized hoodie look?', a: 'For a relaxed look in the pullover or zip-up, size up one from your usual size. The oversized hoodie ($54.99) is already cut roomy with dropped shoulders, so keep your usual size. If the fit is off, you get one free size exchange within 30 days.' },
      { q: 'How do I wash a graphic hoodie so the print lasts?', a: 'Turn the hoodie inside out, wash cold with like colors, and tumble dry low or hang dry. Skip bleach and never iron over the print. Graphic Tees Co. prints direct to garment, and the ink holds up to regular washing with that care.' },
      { q: 'When should I order a graphic hoodie as a Christmas gift?', a: 'Order by Friday, December 4, 2026 to leave a margin for Christmas delivery in the US; December 8 is the last day we recommend. Every hoodie is printed to order in 2–5 business days, then ships in about 3–8 business days, and checkout shows a delivery estimate.' },
    ];
    return c;
  })() /* R11.5 sweep 2026-10-16 */,
  (() => {
    // Google push #1061 (R0 item 5, 2026-11-21): answer-first intro, blank/niche sections, 9 FAQs. Prices from R12.1 (pullover $39.99, zip-up $44.99, heavyweight $49.99, oversized $54.99).
    const c = niche(N.menshoodies, 'hoodies', { slug: 'graphic-hoodies-for-men', keyword: 'graphic hoodie men', volume: 27100, kd: 9, product: 'graphic hoodies for men', audience: 'men', name: "Men's Graphic Hoodies" });
    c.title = 'Graphic Hoodies for Men: Funny Hoodies From $39.99';
    c.description = 'Graphic hoodies for men: 50+ original designs on pullover, zip-up, heavyweight and oversized hoodies. Printed to order, from $39.99, free size exchange.';
    c.intro = 'We sell 50+ original graphic hoodies for men on four blanks: the pullover at $39.99, the zip-up at $44.99, the heavyweight at $49.99 and the oversized at $54.99. Every hoodie is printed to order, ships free in the US on $45 or more, and comes with one free size exchange within 30 days of delivery.';
    c.sections = [
      ...c.sections,
      { h2: 'Zip-up, heavyweight and oversized graphic hoodies for men', body: 'Pick the blank by how you wear it. The pullover ($39.99) is the everyday hoodie with a pouch pocket. Zip-ups ($44.99) layer over a tee and come off in a warm truck. Heavyweight hoodies ($49.99) use thicker fleece and hold their shape, and oversized hoodies ($54.99) cut roomy through the body for a drop-shoulder look.',
        links: [{ href: '/hoodies/zip-up-hoodies-for-men/', label: 'Zip-up hoodies for men' }, { href: '/hoodies/heavyweight-hoodies/', label: 'Heavyweight hoodies' }, { href: '/hoodies/oversized-hoodies-for-men/', label: 'Oversized hoodies for men' }] },
      { h2: 'Graphic hoodies by what you do', body: 'The biggest groups on the grid are hunting and camo, fishing, gym and Christmas. Camo designs are printed on real camo heavyweight hoodies, and the Christmas designs are funny holiday lines for the family photo and the office party.',
        links: [{ href: '/hoodies/camo-hoodies/', label: 'Camo hoodies' }, { href: '/hoodies/fishing-hoodies/', label: 'Fishing hoodies' }, { href: '/hoodies/gym-hoodies-for-men/', label: "Men's gym hoodies" }, { href: '/hoodies/christmas-hoodies/', label: 'Christmas hoodies' }] },
    ];
    c.faqs = [
      ...c.faqs,
      { q: 'How warm are the graphic hoodies for men?', a: 'Graphic Tees Co. pullover hoodies are a midweight cotton-poly fleece, good for fall and mild winter days. For real cold, pick a heavyweight hoodie, which uses thicker fleece, or layer a zip-up over a tee. Camo heavyweight hoodies are 10 oz/yd² with a fleece-lined hood.' },
      { q: 'Will the print hold up in the wash?', a: 'Yes, if you wash it right. Turn the hoodie inside out, wash cold with like colors, and tumble dry low or hang dry. Skip bleach and never iron over the print. Graphic Tees Co. prints direct to garment, and the ink holds up to regular washing with that care.' },
      { q: 'When should I order a graphic hoodie as a Christmas gift?', a: 'Order by Friday, December 4, 2026 to leave a margin for Christmas delivery in the US; December 8 is the last day we recommend. Every hoodie is printed to order in 2–5 business days, then ships in about 3–8 business days, and checkout shows a delivery estimate.' },
    ];
    return c;
  })() /* RankHero 2026-10-17, director low-KD sweep */,
  {
    // RankHero 2026-10-21 (Claude, Nov-25 volume): black zip up hoodie 49,500 / KD 8. Spoke of the zip cluster (src/data/clusters.ts). Thin until 3 black zips are live (linkable.ts noindexes it).
    slug: 'black-zip-up-hoodies', section: 'hoodies', name: 'Black Zip-Up Hoodies',
    keyword: 'black zip up hoodie', volume: 49500, kd: 8,
    title: 'Black Zip-Up Hoodies: Funny Back-Print Designs, Under $65',
    description: 'Black zip-up hoodies with the joke on the back: Catch and Release, Twelve Labors. Zero Cardio. and Sisyphus Had Bad Programming. 8 oz fleece, S-3XL.',
    h1: 'Black Zip-Up Hoodies',
    intro: 'We sell 71 black zip-up hoodies, each a full-zip fleece hoodie (50% cotton, 50% polyester, 8 oz, metal zipper) in sizes S to 3XL at $57.99 ($62.99 from December 1). The joke is printed big across the back and a small mark is embroidered on the left chest, so the front stays clean when you wear it zipped. Every hoodie is printed to order; order by Friday, December 4, 2026 for Christmas delivery in the US, and you get one free size exchange with nothing to mail back.',
    sections: [
      { h2: 'Why black', body: 'Black is the zip-up most people reach for: it goes over anything, hides a coffee spill and looks the same after a hundred washes. Our designs on black use cream, bone and bright accent inks so every word reads from across a parking lot.' },
      { h2: 'What the hoodie is like', body: 'A full-zip hoodie in 8 oz fleece, 50% cotton and 50% polyester, with a metal zipper, two front pouch pockets and a hood with color-matched drawcords. It is a unisex regular fit: most people order their usual size.' },
      { h2: 'Does the print show on black?', body: 'Yes. The back prints use cream and light inks on black fleece, so the line reads from across a room: Catch and Release shows a leaping bass in light ink, and Twelve Labors. Zero Cardio. is set in bold cream type. Each product page shows the design on the black hoodie.' },
      { h2: 'Men, women and the zip cluster', body: 'Browse the same back-print designs by fit: our men\'s zip-up hoodies and women\'s zip-up hoodies pages sort them for him and for her, and our graphic zip-up hoodie guide covers how to pick one.',
        links: [{ href: '/hoodies/zip-up-hoodies-for-men/', label: "Men's zip-up hoodies" }, { href: '/hoodies/zip-up-hoodies-for-women/', label: "Women's zip-up hoodies" }, { href: '/guides/graphic-zip-up-hoodie/', label: 'Graphic zip-up hoodie guide' }] },
    ],
    faqs: [
      { q: 'Where is the design on a black zip-up hoodie?', a: 'On a Graphic Tees Co. black zip-up hoodie the main design is printed across the upper back, where the zipper cannot split it, and a small mark is embroidered on the left chest. Many also carry a one-word embroidered detail on the left cuff. The product page shows each placement.' },
      { q: 'Does the print fade on a black hoodie?', a: 'The print is direct-to-garment ink pressed into the fleece. Wash the hoodie inside out in cold water and tumble dry low or hang it to keep the ink and the black dye bright. Skip bleach and fabric softener, and do not iron over the print or the embroidery.' },
      { q: 'How do black zip-up hoodies fit?', a: 'Our black zip-up hoodies are a unisex regular fit in sizes S to 3XL on most designs. Women usually order one size down from their usual for a closer fit, or their usual size for a relaxed one. Every product page has its own size chart in inches.' },
      { q: 'How much is a black zip-up hoodie?', a: 'Black zip-up hoodies here are $57.99 through November 30 and $62.99 from December 1, and each one has the printed back design plus a small embroidered mark on the left chest. Orders of $45 or more ship free in the US, and a wrong size gets one free exchange within 30 days of delivery.' },
      { q: 'Is a black zip-up hoodie a good gift?', a: 'Yes. A black zip-up is the safest color to buy for someone else because it matches everything they own, and the joke on the back makes it more than a plain hoodie. For Christmas, order by about December 8. One free size exchange covers a wrong guess.' },
      { q: 'How warm is a black zip-up hoodie?', a: 'Each one is 8 oz per square yard fleece, 50% cotton and 50% polyester, with a metal zipper, front pouch pockets and a color-matched drawcord hood. That makes it a midweight layer for fall mornings, the garage or the truck. Graphic Tees Co. does not sell it as a winter parka.' },
      { q: 'Is the design printed or embroidered?', a: 'Both. The big joke is printed across the back, and a small mark is embroidered on the left chest, which is why it costs more than a print-only hoodie. The zipper never cuts through the print. The product page shows where each design and stitch sits on the hoodie.' },
      { q: 'When should I order a black zip-up hoodie for Christmas?', a: 'Order by Friday, December 4, 2026 to leave a margin for Christmas delivery in the US. Each hoodie is printed to order in 2–5 business days, then ships in about 3–8 business days, and checkout shows a delivery estimate. Shipping is free on $45 or more.' },
      { q: 'How long do black zip-up hoodies take to ship?', a: (f) => `Each black zip-up hoodie is made after you order it. Printing and embroidery take ${f.productionDays}, then your order ships. Delivery estimates are shown at checkout.`, needs: 'productionDays' },
    ],
    shopifyHandle: 'black-zip-up-hoodies',
  },
  {
    // RankHero 2026-10-21 (Claude, Nov-25 volume): y2k zip up hoodie 4,400 / KD 14. Spoke of the zip cluster. Tag y2k zip-ups 'y2k-zip-up-hoodies'.
    slug: 'y2k-zip-up-hoodies', section: 'hoodies', name: 'Y2K Zip-Up Hoodies',
    keyword: 'y2k zip up hoodie', volume: 4400, kd: 14,
    title: 'Y2K Zip-Up Hoodies — Early-2000s Graphic Designs',
    description: 'Y2K zip-up hoodies with early-2000s art: loading bars, low-battery icons and bubble letters on the back. Full-zip fleece, $44.99.',
    h1: 'Y2K Zip-Up Hoodies',
    intro: 'Y2K zip-up hoodies with the early-2000s look printed on the back: a loading bar stuck at 99%, a low-battery icon with high standards, chrome bubble letters and a flip-phone attitude.',
    sections: [
      { h2: 'The early-2000s look, on a zip-up', body: 'The art borrows from the screens and sticker sheets of the early 2000s: progress bars, battery icons, glossy bubble type and pastel-on-navy color. The joke sits on the back so it shows when the hoodie is zipped, and a small version sits on the chest.' },
      { h2: 'How to wear a Y2K zip-up', body: 'Wear it half-zipped over a baby tee with low-rise jeans or cargo pants, or open over a slip skirt with chunky sneakers. Ash reads soft and washed-out; Navy makes the pastel inks pop.' },
    ],
    faqs: [
      { q: 'What is a Y2K zip-up hoodie?', a: 'A Y2K zip-up hoodie is a full-zip hoodie styled like the early 2000s: loading bars, battery icons, bubble letters and pastel accents. Graphic Tees Co. prints original Y2K art on the back of a fleece zip-up, so the look shows whether you wear it zipped or open.' },
      { q: 'What do you wear with a Y2K zip-up hoodie?', a: 'Pair it with low-rise or baggy jeans, cargo pants or a mini skirt, plus chunky sneakers or platform boots. Wear it half-zipped over a fitted baby tee or a tank. Keep the rest of the outfit simple so the back print and the pastel inks lead.' },
      { q: 'How do Y2K zip-up hoodies fit?', a: 'Our Y2K zip-up hoodies are a unisex regular fit in 8 oz cotton-poly fleece, sizes S to 5XL on most designs. For the cropped, fitted early-2000s look, order one size down; for an oversized look, order one or two sizes up. Each product page has a size chart.' },
      { q: 'Are these Y2K designs original?', a: 'Yes. Every Y2K design at Graphic Tees Co. is original art made for this shop. There are no brand logos, phone makers, cartoon characters or song lyrics on them, just the look and the jokes of the era.' },
      { q: 'How much is a Y2K zip-up hoodie?', a: 'Y2K zip-up hoodies are $44.99. Orders of $45 or more ship free in the US, and a wrong size gets one free exchange within 30 days of delivery, with nothing to mail back.' },
      { q: 'How long do Y2K zip-up hoodies take to ship?', a: (f) => `Each Y2K zip-up hoodie is printed after you order it. Printing takes ${f.productionDays}, then your order ships. Delivery estimates are shown at checkout.`, needs: 'productionDays' },
    ],
    shopifyHandle: 'y2k-zip-up-hoodies',
  },
  {
    // Spoke shared by the zip and camo clusters (Claude 2026-10-21). No measured phrase of its own yet (camo zip up hoodie is unmeasured): page stays thin/noindexed until 3 camo zips (the #717 all-over-print pilots) are live. Do not target a head term here.
    slug: 'camo-zip-up-hoodies', section: 'hoodies', name: 'Camo Zip-Up Hoodies',
    keyword: 'camo zip up hoodie', volume: 0, kd: 0,
    title: 'Camo Zip-Up Hoodies — Original Hunting Designs',
    description: 'Camo zip-up hoodies with our own camo printed edge to edge and a dry outdoor joke on the back. Full-zip fleece, printed to order.',
    h1: 'Camo Zip-Up Hoodies',
    intro: 'Camo zip-up hoodies with an original camo pattern printed over the whole hoodie, front, back and sleeves, and a dry outdoor joke on the back for deer camp, the boat ramp and the drive home.',
    sections: [
      { h2: 'Our own camo, not a brand pattern', body: 'Each camo pattern is original art made for this shop. Some hide a joke in the pattern itself if you look closely. None copy a hunting-brand pattern or logo.' },
      { h2: 'Why a zip-up', body: 'A zip-up goes on and off over a thermal or a flannel without messing up your hat, and it vents when the sun comes up. The joke sits on the back, where the zipper cannot cut through it.' },
    ],
    faqs: [
      { q: 'Is a camo zip-up hoodie real hunting camo?', a: 'No. Graphic Tees Co. camo zip-up hoodies carry a printed camo pattern made for everyday wear: the truck, the cabin, the tailgate and the boat ramp. They are not scent-control or waterproof hunting gear, so in the stand wear one under your usual hunting layers.' },
      { q: 'Are these camo patterns original?', a: 'Yes. Every camo pattern and back design on a Graphic Tees Co. camo zip-up is original art made for this shop. None use a licensed hunting-brand pattern, name or logo.' },
      { q: 'How is the camo printed on a zip-up hoodie?', a: 'The all-over camo zip-ups are cut and sewn from fabric printed edge to edge before the hoodie is assembled, so the pattern runs across the front, back, hood and sleeves with no blank seams. The back joke is printed into the same fabric.' },
      { q: 'How do camo zip-up hoodies fit?', a: 'Camo zip-ups are a unisex regular fit with room for a thermal underneath. Order your usual size for a standard fit, or one size up for a looser one. Each product page has its own size chart in inches, and one free size exchange within 30 days covers a wrong guess.' },
      { q: 'Is a camo zip-up a good gift for a hunter?', a: 'Yes. A camo zip-up with a hunting joke on the back is an easy Christmas gift for the hunter who already owns all the gear. Order by about December 8 for Christmas. US shipping is free on orders of $45 or more.' },
      { q: 'How long do camo zip-up hoodies take to ship?', a: (f) => `Each camo zip-up hoodie is made after you order it. Production takes ${f.productionDays}, then your order ships. Delivery estimates are shown at checkout.`, needs: 'productionDays' },
    ],
    shopifyHandle: 'camo-zip-up-hoodies',
  },
  {
    // RankHero 2026-10-21 (Claude, Nov-25 volume): camo hoodie women 27,100 / KD 25. Spoke of the camo cluster. Women's and unisex camo only (tag camo-hoodies-for-women).
    slug: 'camo-hoodies-for-women', section: 'hoodies', audience: 'women', name: "Women's Camo Hoodies",
    keyword: 'camo hoodie women', volume: 27100, kd: 25,
    title: "Camo Hoodies for Women: Funny Hunting Designs",
    description: "Camo hoodies for women with a hunting joke: Doe Not Disturb, Ducks in a Row, Out-Fished Him Again. 12 designs in Forest, Duck and Black Camo, from $49.99.",
    h1: 'Camo Hoodies for Women',
    intro: 'We sell 12 original camo hoodies for women, each a heavyweight 10 oz fleece hoodie with a lined hood, printed to order with a joke she would actually say: Deer Stand Princess, Ducks in a Row, Doe Not Disturb, Out-Fished Him Again. They are cut unisex in XS to 3XL, so most women order one size down for a fitted look or their usual size for a roomy one. Dyed camo hoodies are $49.99 through November 30, then $54.99, and the pink camo is $64.99 through November 30, then $69.99. Order by Friday, December 4, 2026 for Christmas, and one size exchange is free within 30 days.',
    sections: [
      { h2: 'Real camo fleece, a joke on the chest', body: 'These are heavyweight hoodies dyed in real camo colors, Forest, Duck, Darkwood Tree or Black Camo, with original art printed on the chest. The hunting lines are Doe Not Disturb, Ducks in a Row and Deer Stand Princess; the rest take the same camo outdoors, to the lake, the trail and the campsite. The pink camo hoodie is printed edge to edge with our own pink camo pattern.' },
      { h2: 'Hunting, fishing and trail jokes', body: 'Doe Not Disturb and Ducks in a Row are for the blind and the stand. Out-Fished Him Again, Treat Me Like Wildlife and Switchbacks Build Character cover the boat and the trail, and Kick Up Dust is the western one. Unisex lines like Camp Security and Playing Dead Till Friday are in the grid too, and they fit her just as well.',
        links: [{ href: '/hoodies/hunting-hoodies/', label: 'Hunting hoodies' }] },
      { h2: 'How women wear a camo hoodie', body: 'Over black leggings with a ball cap and boots, with jeans and a puffer vest in town, or over a thermal in the blind. Keep the rest solid (cream, black or olive) so the camo leads.' },
      { h2: 'Pink camo and the rest of the camo hoodies', body: 'Want the pink one? It has its own page. Want every camo hoodie we make, men\'s and unisex included, in all the camo colors? The hub has them all.',
        links: [{ href: '/hoodies/pink-camo-hoodies/', label: 'Pink camo hoodies' }, { href: '/hoodies/camo-hoodies/', label: 'All camo hoodies' }] },
    ],
    faqs: [
      { q: 'Do camo hoodies for women fit differently?', a: "Graphic Tees Co. camo hoodies for women are cut unisex. The heavyweight camo hoodies run XS to 3XL; most women order one size down from their men's size, or their usual size for a roomy fit. The pink camo hoodies run 2XS to 6XL. Each product page has a size chart in inches." },
      { q: 'What size camo hoodie should a woman order?', a: 'Order your usual size for a roomy, layered fit over a thermal, or one size down for a closer fit. Sleeves and body run generous because the cut is unisex. Check the size chart in inches on the product page, and remember one size exchange is free within 30 days of delivery.' },
      { q: 'Are these camo hoodies warm enough for hunting?', a: 'The heavyweight camo hoodies are 10 oz/yd² cotton-poly fleece with a lined hood, warm in the blind or the stand on a cool morning. They are not waterproof or scent-control gear, so on wet or bitter days wear one under a shell jacket.' },
      { q: 'Do you have pink camo hoodies for women?', a: 'Yes. Our pink camo hoodies are printed edge to edge with an original pink camo pattern made for this shop, with a hunting joke on the chest. They are $64.99 through November 30, then $69.99. The other camo hoodies come in dyed Forest, Duck, Darkwood Tree and Black Camo at $49.99 through November 30, then $54.99.' },
      { q: 'How do I wash a camo hoodie?', a: 'Turn it inside out and wash cold with similar colors on a gentle cycle. Tumble dry low or hang dry, and skip bleach and fabric softener so the print and the dyed camo color last. Graphic Tees Co. prints each hoodie after you order it, so the print is fresh and holds up wash after wash.' },
      { q: 'What do you wear with a camo hoodie?', a: 'Pair a camo hoodie with black leggings or dark jeans, boots or clean white sneakers and a ball cap. A cream or black puffer vest dresses it up for town. Skip other loud prints so the camo and the joke on the chest lead the outfit.' },
      { q: 'Is a camo hoodie a good gift for a hunting girlfriend or wife?', a: 'Yes. A camo hoodie with a joke she already says, like Deer Stand Princess or Doe Not Disturb, is an easy gift for the woman who hunts or tags along. For Christmas, order by Friday, December 4, 2026; one free size exchange within 30 days covers a wrong guess.' },
      { q: 'How long do women’s camo hoodies take to ship?', a: (f) => `Each camo hoodie is printed after you order it. Printing takes ${f.productionDays}, then your order ships. Orders of $45 or more ship free in the US.`, needs: 'productionDays' },
    ],
    shopifyHandle: 'camo-hoodies-for-women',
  },
  {
    // RankHero 2026-10-21 (Claude, Nov-25 volume): pink camo hoodie 12,100 / KD 12. Spoke of the camo cluster. All-over-print #1419 hoodies and pink camo AOP zips.
    slug: 'pink-camo-hoodies', section: 'hoodies', audience: 'women', name: 'Pink Camo Hoodies',
    keyword: 'pink camo hoodie', volume: 12100, kd: 12,
    title: 'Pink Camo Hoodies — Original Pink Camo Pattern',
    description: 'Pink camo hoodies printed edge to edge with our own pink camo pattern and a hunting joke on the chest. Sizes 2XS–6XL, printed to order.',
    h1: 'Pink Camo Hoodies',
    intro: 'Pink camo hoodies printed edge to edge with an original pink camo pattern, front, back, hood and sleeves, with a hunting joke on the chest for the woman who hunts in pink on purpose.',
    sections: [
      { h2: 'Our own pink camo', body: 'The pink camo is original art made for this shop, in soft blush, rose and berry leaves, not a hunting-brand pattern. It is printed onto the fabric before the hoodie is sewn, so there are no blank seams or white creases.' },
      { h2: 'What the hoodie is like', body: 'An all-over-print pullover hoodie with a front pouch pocket and a lined hood, in a soft brushed fleece. Sizes run 2XS to 6XL, so it fits petite to plus.' },
    ],
    faqs: [
      { q: 'Is pink camo real hunting camo?', a: 'No. Pink camo is a fashion camo: the pattern copies the look of woodland camo in pinks, so it shows rather than hides. Graphic Tees Co. pink camo hoodies are for the truck, the cabin, the tailgate and town, and pair with your usual hunting layers in the stand.' },
      { q: 'How is the pink camo printed?', a: 'Each Graphic Tees Co. pink camo hoodie is printed edge to edge before it is sewn, so the pink camo pattern covers the front, back, hood and sleeves with no white seams. The hunting joke on the chest is printed into the same fabric, so it will not crack or peel.' },
      { q: 'What sizes do pink camo hoodies come in?', a: 'Pink camo hoodies run 2XS to 6XL in a unisex fit. Most women order their usual size for a relaxed fit, or one size down for a closer one. The product page has a size chart in inches, and one free size exchange within 30 days covers a wrong guess.' },
      { q: 'How much is a pink camo hoodie?', a: 'Pink camo hoodies are $64.99, because the whole hoodie is printed and sewn to order. Orders of $45 or more ship free in the US, so a pink camo hoodie ships free on its own.' },
      { q: 'How do I wash a pink camo hoodie?', a: 'Turn it inside out, wash cold with similar colors and tumble dry low or hang it. Skip bleach and fabric softener. The pattern is printed into the fabric, so cold washing keeps the pinks bright for seasons of wear.' },
      { q: 'How long do pink camo hoodies take to ship?', a: (f) => `Each pink camo hoodie is printed and sewn after you order it. Production takes ${f.productionDays}, then your order ships. Delivery estimates are shown at checkout.`, needs: 'productionDays' },
    ],
    shopifyHandle: 'pink-camo-hoodies',
  },
  {
    // RankHero 2026-10-21 (Claude, Nov-25 volume): duck camo hoodie 9,900 / KD 14. Spoke of the camo cluster. Tag any camo hoodie offered in Duck Camo.
    slug: 'duck-camo-hoodies', section: 'hoodies', name: 'Duck Camo Hoodies',
    keyword: 'duck camo hoodie', volume: 9900, kd: 14,
    title: 'Duck Camo Hoodies — Honk, Quack & Fake Friends',
    description: 'Duck camo hoodies in brown, tan and green waterfowl camo with real blind jokes: Fluent in Honk, Quack of Dawn, Fake Friends. Heavyweight 10 oz fleece.',
    h1: 'Duck Camo Hoodies',
    intro: 'We sell 14 duck camo hoodies, each a heavyweight 10 oz cotton-poly fleece pullover with a lined hood, dyed in brown, tan and green waterfowl blotches, in sizes XS to 3XL: $49.99 through November 30, then $54.99. The jokes come from the blind: Fluent in Honk, Quack of Dawn, Fake Friends and Ducks in a Row. Every hoodie is printed to order; order by Friday, December 4, 2026 for Christmas delivery in the US, and you get one free size exchange with nothing to mail back.',
    sections: [
      { h2: 'The old-school pattern', body: 'Duck camo is the classic waterfowl pattern of brown, tan and dark green blotches, first worn to hide in marsh grass and cattails. These hoodies are dyed in Duck Camo, with original art printed on the chest in light ink so every word reads on the pattern.' },
      { h2: 'What the hoodie is like', body: 'A heavyweight pullover in 10 oz/yd² cotton-poly fleece with a lined hood and a front pouch pocket, sizes XS to 3XL on most designs. Warm enough for a cold morning in the blind, soft enough for the drive home.' },
      { h2: 'More camo, and where else to wear it', body: 'Duck Camo sits in the same family as every other camo we sell: see all camo hoodies, the hunting hoodies built for the blind and stand, or the women\'s camo hoodies, which are the same unisex blank.', links: [{ href: '/hoodies/camo-hoodies/', label: 'Camo hoodies' }, { href: '/hoodies/hunting-hoodies/', label: 'Hunting hoodies' }, { href: '/hoodies/camo-hoodies-for-women/', label: "Women's camo hoodies" }] },
    ],
    faqs: [
      { q: 'What is duck camo?', a: 'Duck camo is the old-school waterfowl camo of brown, tan and dark green blotches, first worn by duck hunters hiding in marsh grass and cattails. Graphic Tees Co. duck camo hoodies are dyed in that pattern, with original art printed on the chest in light ink.' },
      { q: 'How is duck camo different from other camo hoodies?', a: 'Duck Camo is one color of the hoodie blank, with warm brown and tan blotches suited to marsh and cattails. Forest Camo leans green, Black Camo is charcoal and grey. Most duck camo designs come in two or three of these, so you can pick the pattern that fits your woods.' },
      { q: 'Are duck camo hoodies warm enough for the blind?', a: 'Our duck camo hoodies are heavyweight 10 oz/yd² cotton-poly fleece with a lined hood, warm on a cool morning in the blind. They are not waterproof, so on wet or bitter days wear one under a waders jacket or a shell.' },
      { q: 'How do duck camo hoodies fit?', a: 'They are a relaxed unisex fit in sizes XS to 3XL on most designs, roomy enough for a thermal underneath. Order your usual size for a standard fit or one size up for layering. Every product page has a size chart in inches.' },
      { q: 'How do I wash a duck camo hoodie?', a: 'Turn it inside out and wash cold with similar colors, then tumble dry low or hang dry. Cold water and an inside-out wash protect the printed art on the chest. Avoid bleach and ironing directly over the print. The fleece stays soft after repeated washes.' },
      { q: 'Is a duck camo hoodie a good gift for a duck hunter?', a: 'Yes. A duck camo hoodie with a waterfowl joke, like Fluent in Honk or Fake Friends, is an easy gift for the hunter who already owns every call. Duck camo hoodies are $49.99 through November 30, then $54.99. For Christmas delivery in the US, order by Friday, December 4, 2026.' },
      { q: 'Are the duck designs original?', a: 'Yes. Every duck and goose design is original art made for this shop. None use a hunting-brand pattern, name or logo; the Duck Camo is the color of the hoodie blank itself.' },
      { q: 'How long do duck camo hoodies take to ship?', a: (f) => `Each duck camo hoodie is printed after you order it. Printing takes ${f.productionDays}, then your order ships. Orders of $45 or more ship free in the US, and one size exchange is free within 30 days.`, needs: 'productionDays' },
    ],
    shopifyHandle: 'duck-camo-hoodies',
  },
  {
    // RankHero 2026-10-21 (Claude, Nov-25 volume): black camo hoodie 2,900 / KD 16. Spoke of the camo cluster. Tag any camo hoodie offered in Black Camo.
    slug: 'black-camo-hoodies', section: 'hoodies', name: 'Black Camo Hoodies',
    keyword: 'black camo hoodie', volume: 2900, kd: 16,
    title: 'Black Camo Hoodies: Funny Outdoor & Hunting Designs',
    description: 'Black camo hoodies with a joke on the chest: Camp Security, Fluent in Honk, Lone Wolf. Early Bedtime. Heavyweight 10 oz fleece, printed to order.',
    h1: 'Black Camo Hoodies',
    intro: 'We sell 11 black camo hoodies, each a heavyweight 10 oz cotton-poly fleece pullover with a lined hood and front pouch pocket, in a relaxed unisex fit, sizes XS to 3XL on most designs: $49.99 through November 30, then $54.99. The charcoal, grey and black camo works in town as well as at camp, with a dry joke on the chest: Camp Security, Fluent in Honk, No Deer Today. Every hoodie is printed to order; order by Friday, December 4, 2026 for Christmas delivery in the US, and you get one free size exchange with nothing to mail back.',
    sections: [
      { h2: 'Camo that goes to town', body: 'Black Camo is a charcoal, grey and black pattern: it reads as camo up close and as a dark hoodie from across the street, so it goes from the cabin to the grocery store. Our art is printed in light ink so every word reads on it.' },
      { h2: 'What the hoodie is like', body: 'A heavyweight pullover in 10 oz/yd² cotton-poly fleece with a lined hood and a front pouch pocket, sizes XS to 3XL on most designs, in a relaxed unisex fit.' },
      { h2: 'Black camo vs the other camo colors', body: 'Black Camo reads darker than Forest, Duck or Deadwood Tree camo, so it pairs with black jeans and works as an everyday hoodie, not only a hunting layer. The art prints in cream ink, which stands out sharply on the dark pattern. If you want a warmer, earthier look, see the camo hoodies hub or the duck camo hoodies; for plain black fleece with a back print, see the black zip-up hoodies.', links: [{ href: '/hoodies/camo-hoodies/', label: 'Camo hoodies' }, { href: '/hoodies/duck-camo-hoodies/', label: 'Duck camo hoodies' }, { href: '/hoodies/black-zip-up-hoodies/', label: 'Black zip-up hoodies' }] },
    ],
    faqs: [
      { q: 'What is black camo?', a: 'Black camo is a camouflage pattern in black, charcoal and grey instead of greens and browns. It reads as camo up close and as a plain dark hoodie from a distance, which is why people wear it in town. Graphic Tees Co. black camo hoodies are dyed in that pattern with original outdoor art on the chest.' },
      { q: 'What do you wear with a black camo hoodie?', a: 'Black jeans or joggers and black or white sneakers keep it street; dark denim and boots keep it outdoorsy. A cream or grey layer underneath softens it. Skip other patterns so the camo and the joke on the chest lead.' },
      { q: 'How do black camo hoodies fit?', a: 'They are a relaxed unisex fit in sizes XS to 3XL on most designs, roomy enough for a thermal underneath. Order your usual size for a standard fit or one size up for an oversized look. Every product page has a size chart in inches.' },
      { q: 'How much is a black camo hoodie?', a: 'Black camo hoodies are $49.99 through November 30, then $54.99. Orders of $45 or more ship free in the US, and a wrong size gets one free exchange within 30 days of delivery, with nothing to mail back. Each one is a heavyweight 10 oz fleece hoodie.' },
      { q: 'How warm is a black camo hoodie?', a: 'Each black camo hoodie is 10 oz per square yard cotton and polyester fleece with a fleece-lined hood, warm on a cold morning at camp or the walk to the truck. It is not waterproof, so wear a shell over it in rain or snow.' },
      { q: 'How do I wash a black camo hoodie?', a: 'Turn it inside out and wash cold with dark colors, then tumble dry low or hang dry. Cold water keeps the cream print sharp and the charcoal camo dark. Avoid bleach and never iron directly over the printed design on the chest.' },
      { q: 'Is a black camo hoodie a good Christmas gift?', a: 'Yes, for anyone who hunts, fishes, camps or just likes a dark hoodie with a joke. Lines like Camp Security and Lone Wolf. Early Bedtime. suit them well. For Christmas, order by Friday, December 4, 2026; each hoodie is printed to order.' },
      { q: 'Are the designs original?', a: 'Yes. Every design on our black camo hoodies is original art made for this shop. None use a hunting-brand pattern, name or logo; the Black Camo is the color of the hoodie blank itself.' },
      { q: 'How long do black camo hoodies take to ship?', a: (f) => `Each black camo hoodie is printed after you order it. Printing takes ${f.productionDays}, then your order ships. Delivery estimates are shown at checkout, and orders of $45 or more ship free in the US.`, needs: 'productionDays' },
    ],
    shopifyHandle: 'black-camo-hoodies',
  },
  {
    // RankHero 2026-10-16: zip up hoodie women 14,800 / KD 32. R9.11 lists it as brand-owned: we list products here, no extra page effort.
    slug: 'zip-up-hoodies-for-women', section: 'hoodies', audience: 'women', name: "Women's Zip-Up Hoodies",
    keyword: 'zip up hoodie women', volume: 14800, kd: 32,
    title: "Women's Zip-Up Hoodies — Original Graphic Designs",
    description: "Zip-up hoodies for women with original art: a big print on the back and a small one on the chest. Fleece full-zip hoodies, printed to order.",
    h1: "Women's Zip-Up Hoodies",
    intro: 'Zip-up hoodies for women with original art: the full design on the back and a small version on the left chest, so it still shows when you wear it open.',
    sections: [
      { h2: 'What makes these zip-up hoodies different?', body: 'Every design is designed for this shop, with the joke on the back where people actually see it. Each hoodie is printed after you order it.' },
      { h2: 'What the hoodie is like', body: 'A full-zip hoodie in 8 oz fleece, 50% cotton and 50% polyester, with a metal zipper, front pouch pockets and a hood with color-matched drawcords. It is a unisex regular fit, so it sits relaxed on women.' },
      { h2: 'How to wear a zip-up hoodie', body: 'Open over a tank or tee with leggings, zipped up over a crewneck on cold mornings, or tied at the waist once the day warms up.' },
    ],
    faqs: [
      { q: 'Do these zip-up hoodies run big on women?', a: 'They are a unisex cut, so they fit relaxed. Size down one for a closer fit, and check the size chart on each product.' },
      { q: 'Where is the design printed?', a: 'The full design is on the back, with a small version on the left chest.' },
      { q: 'Are these original designs?', a: 'Yes. Every design is original art made for this shop. No brand logos or licensed characters.' },
      { q: 'How long do zip-up hoodies take to ship?', a: (f) => `Printing takes ${f.productionDays}, then your order ships. Delivery estimates are shown at checkout.`, needs: 'productionDays' },
    ],
    shopifyHandle: 'zip-up-hoodies-for-women',
    twin: 'zip-up-hoodies',
  },
  {
    // RankHero 2026-10-16: embroidered hoodie 14,800 / KD 49 (embroidered hoodies 14,800 / 48). Real embroidery only (R4.8).
    slug: 'embroidered-hoodies', section: 'hoodies', name: 'Embroidered Hoodies',
    keyword: 'embroidered hoodie', volume: 14800, kd: 49,
    title: 'Embroidered Hoodies — Original Designs Stitched in Thread',
    description: 'Embroidered hoodies with small original designs stitched in thread on the chest, some with a word on the cuff. Made to order in soft fleece.',
    h1: 'Embroidered Hoodies',
    intro: 'Embroidered hoodies with a small original design stitched on the chest in thread, and on some, one little word on the cuff. Simple line art you can wear all winter.',
    sections: [
      { h2: 'What makes these embroidered hoodies different?', body: 'Each design is designed for this shop as clean line art and hand lettering, then stitched in thread instead of printed, so it has a raised, textured feel. Some sit centered on the chest, others small on the left chest like a logo would.' },
      { h2: 'Embroidered, not printed', body: 'Every hoodie in this collection is real embroidery. Our printed hoodies live in the other hoodie collections.' },
      { h2: 'How to care for embroidery', body: 'Wash inside out on cold and tumble dry low or hang to dry. Do not iron directly on the stitching.' },
    ],
    faqs: [
      { q: 'Is the design stitched or printed?', a: 'Stitched. Each design is embroidered in thread, not printed.' },
      { q: 'Will the embroidery hold up in the wash?', a: 'Yes. Wash inside out on cold and the stitching keeps its shape; skip the iron on the design.' },
      { q: 'Are these original designs?', a: 'Yes. Every design is original art made for this shop, with no brand logos or licensed characters.' },
      { q: 'How long do embroidered hoodies take to ship?', a: (f) => `Making one takes ${f.productionDays}, then your order ships. Delivery estimates are shown at checkout.`, needs: 'productionDays' },
    ],
    shopifyHandle: 'embroidered-hoodies',
    twin: 'embroidered-sweatshirts',
  },
  {
    // RankHero 2026-10-17 (catalog-expansion wave 1): golf hoodie 14,800 / KD 22. Added 2026-10-18 when the 3rd golf hoodie went live (R11.10).
    slug: 'golf-hoodies', section: 'hoodies', name: 'Golf Hoodies',
    keyword: 'golf hoodie', volume: 14800, kd: 22,
    // Google push #1092 (R0 item 5, 2026-11-26): facts from the live Shopify collection read 2026-11-26 (11 products, all active; pullover $39.99, cropped $44.99, heavyweight $49.99, embroidered zip $57.99, all-over print zip $79.99; colors Sand, Sport Grey, Navy, Black, Ash, Storm, Storm Blue, Sandstone). Last known position: unknown. golf hoodie 14,800 / KD 22 (RankHero 2026-10-17).
    title: 'Golf Hoodies: Funny Designs for the Course and Range',
    description: 'Golf hoodies: I Play Army Golf, Not Cheating. Improving My Lie., Sorry About Your Windshield. From $39.99 through Nov 30. Free US shipping $45+.',
    h1: 'Golf Hoodies',
    intro: 'We sell 11 golf hoodies, each an original joke every golfer has lived: pullovers (8 oz fleece, front pouch) at $39.99 through November 30, then $44.99, plus embroidered and all-over print zip-ups, a heavyweight and a women\'s cropped hoodie, in sizes S to 3XL on most. They are for the golf dad, the golf mom and anyone who plays the round for the cart. Every hoodie is printed to order; {{order by Friday, December 4, 2026 for Christmas delivery in the US||Christmas delivery in the US is no longer guaranteed}}, and you get one free size exchange with nothing to mail back.',
    sections: [
      { h2: 'Jokes from the first tee', body: 'Each design starts from something golfers really say: I Play Army Golf, Not Cheating. Improving My Lie., Fairways Are a Rumor, I Only Golf for the Outfits. The art is drawn in a 1950s and 60s country-club style, with the joke set in big type so it reads across the parking lot.' },
      { h2: 'Which hoodie to pick', body: 'The pullover is an 8 oz cotton-poly fleece with a front pouch, the heavyweight is a thicker fleece for cold early rounds, and the women\'s cropped hoodie ends at the waist for wearing with high-waisted pants or a golf skirt.' },
      { h2: 'Golf gifts for dad', body: 'For a golf dad the safest picks are the pullover with I Play Army Golf, the one that says Not Cheating. Improving My Lie. or the heavyweight that says My Swing Is Fine, the Trees Moved. If he already owns a pullover, an embroidered zip-up is a step up. For more men\'s designs browse the graphic hoodies for men, or the zip-up hoodies for men.', links: [{ href: '/products/mens-golf-i-play-army-golf-hoodie/', label: 'I Play Army Golf' }, { href: '/products/unisex-golf-not-cheating-improving-my-lie-hoodie/', label: 'Not Cheating. Improving My Lie.' }, { href: '/products/mens-golf-breakfast-ball-enthusiast-heavyweight-hoodie/', label: 'My Swing Is Fine, the Trees Moved' }, { href: '/hoodies/graphic-hoodies-for-men/', label: "Men's graphic hoodies" }, { href: '/hoodies/zip-up-hoodies-for-men/', label: "Men's zip-up hoodies" }] },
      { h2: 'Wearing it on the course', body: 'Layer it over a polo on a cold morning and pull it off by the turn. Most clubs allow hoodies on the range and in the cart; check your course\'s dress code before wearing one on the first tee.' },
    ],
    faqs: [
      { q: 'Can you wear a hoodie golfing?', a: 'Many public courses and driving ranges allow hoodies, and plenty of golfers wear one over a polo for cold early tee times. Private clubs often ask for a collar, so check the dress code first. Graphic Tees Co. golf hoodies come in pullover, zip-up, heavyweight and cropped styles.' },
      { q: 'Which golf hoodie is warmest?', a: 'The heavyweight golf hoodie is the warmest in the Graphic Tees Co. golf collection, made from a thicker cotton-poly fleece than the 8 oz pullover. Pick it for frosty morning rounds and late-season golf. The pullover is lighter for layering over a polo, and the cropped hoodie is a women\'s cut.' },
      { q: 'Is a golf hoodie a good gift for a golfer?', a: 'Yes. A funny golf hoodie from Graphic Tees Co. makes an easy birthday, Father\'s Day or Christmas gift because the joke is one every golfer recognizes. Orders over $45 ship free in the US, and one free size exchange within 30 days covers a size guess.' },
      { q: 'How much are the golf hoodies?', a: 'Golf hoodies at Graphic Tees Co. [[start at $39.99 for the pullover through November 30, then $44.99. The women\'s cropped hoodie is $44.99, the heavyweight $49.99 and the embroidered zip-up $57.99 through November 30.||start at $44.99 for the pullover. The women\'s cropped hoodie is $49.99, the heavyweight $54.99 and the embroidered zip-up $62.99.]] Orders of $45 or more ship free in the US, and each hoodie is printed to order with original art.' },
      { q: 'How do the golf hoodies fit?', a: 'The pullover is a relaxed fit in sizes S to 3XL. Order your usual size to wear it over a polo, or one size up for a looser layer. Each product page has a size chart in inches, and Graphic Tees Co. gives you one free size exchange with nothing to mail back.' },
      { q: 'How do I wash a golf hoodie?', a: 'Turn it inside out, wash cold with similar colors, and tumble dry low or hang dry. Skip bleach and never iron directly over the print or embroidery. Cold water protects the design on the chest, and the fleece stays soft and thick after repeated washes.' },
      { q: 'What colors do the golf hoodies come in?', a: 'Colors vary by design and include Sand, Sport Grey, Navy, Black, Ash, Storm and Sandstone. We only offer a color where the art reads clearly, so each product page lists its colors with a photo of each one. The all-over print zip-up comes in one print.' },
      { q: 'When should I order a golf hoodie for Christmas?', a: '{{Order by Friday, December 4, 2026 for Christmas delivery in the US. Each golf hoodie is printed in 2–5 business days, then ships in about 3–8 business days. Orders of $45 or more ship free, and checkout shows a delivery estimate.||Christmas delivery in the US is no longer guaranteed. Each golf hoodie is printed in 2–5 business days, then ships in about 3–8 business days, so it may arrive after December 25. Orders of $45 or more ship free, and checkout shows a delivery estimate.}}' },
      { q: 'How long do golf hoodies take to ship?', a: (f) => `Each golf hoodie is printed after you order it. Printing takes ${f.productionDays}, then your order ships. Delivery estimates are shown at checkout.`, needs: 'productionDays' },
    ],
    shopifyHandle: 'golf-hoodies',
  },
  {
    // RankHero 2026-10-17 (catalog-expansion wave 1): national park hoodie 720 / KD 32 (national park sweatshirt 1,000 / 46). Shopify tag is national-park-sweatshirts; every live product is a hoodie, so the page is a hoodie page. Added 2026-10-18 at 3 live (R11.10).
    slug: 'national-park-hoodies', section: 'hoodies', name: 'National Park Hoodies',
    keyword: 'national park hoodie', volume: 720, kd: 32,
    title: 'National Park Hoodies — Funny Vintage Travel-Poster Designs',
    description: 'National park hoodies with original 1930s travel-poster art and dry jokes about bison traffic and public land. Pullover, zip-up and heavyweight.',
    h1: 'National Park Hoodies',
    intro: 'National park hoodies drawn like old travel posters, with a joke for anyone who has sat in a bison jam or planned a whole vacation around a trailhead. Original art, no park logos.',
    sections: [
      { h2: 'Travel-poster art with a punchline', body: 'Each design is a 1930s-style travel poster of a park feeling, not a logo: bison crossing the road, a red-rock canyon, two friends roaming a wildflower valley. The joke sits in big type above and below the scene so it reads from across the trailhead.' },
      { h2: 'Pick your hoodie', body: 'Choose an 8 oz pullover with a front pouch, a full-zip hoodie with the art on the back, or a heavyweight hoodie in thicker fleece for cold mornings at the overlook. Every one is unisex or women\'s fit as named on the product.' },
      { h2: 'Made for the road trip', body: 'Wear it on the drive, at the visitor center and around the campfire. Wash inside out on cold so the print stays bright for the next trip. Heading out on foot? Our guide to hiking shirts for women covers what to layer on the trail.', links: [{ href: '/guides/hiking-shirts-for-women/', label: 'Hiking shirts for women' }] },
    ],
    faqs: [
      { q: 'Are these official National Park Service hoodies?', a: 'No. Graphic Tees Co. national park hoodies are original art made for this shop, drawn in a vintage travel-poster style. They do not use the National Park Service arrowhead or any official logo, and no park name is printed as a brand.' },
      { q: 'What should I wear to a national park in fall?', a: 'Layers work best: a tee, a warm hoodie and a light jacket you can shed as the day warms up. Mornings at overlooks are cold even when afternoons are mild. A heavyweight national park hoodie from Graphic Tees Co. covers the coldest part of the day.' },
      { q: 'Is a national park hoodie a good gift for a hiker?', a: 'Yes. A national park hoodie from Graphic Tees Co. suits the friend who plans trips around trailheads and bison sightings. Every hoodie is over $45, so it ships free in the US, and one free size exchange within 30 days covers a size guess.' },
      { q: 'How much are the national park hoodies?', a: 'National park hoodies at Graphic Tees Co. are $39.99 for the pullover, $44.99 for the zip-up and $49.99 for the heavyweight. Each is printed to order with original art and ships free in the US.' },
      { q: 'How long do national park hoodies take to ship?', a: (f) => `Each national park hoodie is printed after you order it. Printing takes ${f.productionDays}, then your order ships. Delivery estimates are shown at checkout.`, needs: 'productionDays' },
    ],
    shopifyHandle: 'national-park-sweatshirts',
  },
  {
    // RankHero 2026-10-18: running hoodie 5,400 / KD 26 (runner hoodie 5,400/22 and jogging hoodie 720/27 stay with products). Added 2026-10-18 at 3 live running hoodies (R11.10).
    slug: 'running-hoodies', section: 'hoodies', name: 'Running Hoodies',
    keyword: 'running hoodie', volume: 5400, kd: 26,
    title: 'Running Hoodies: Mile One Was a Mistake, Pace: Leisurely',
    description: 'Running hoodies: Mile One Was a Mistake, Pace: Leisurely, Run Club. For the Coffee., I Only Run Downhill. From $39.99 through Nov 30. Free US shipping $45+.',
    h1: 'Running Hoodies',
    intro: 'We sell 7 original running hoodies, from Mile One Was a Mistake and Pace: Leisurely to Run Club. For the Coffee., I Only Run Downhill and Here for the Free Banana, in pullover and zip-up styles, in sizes S to 3XL. Pullovers are $39.99 through November 30, then $44.99. They are for people who run for the bagel, the medal and the story afterwards, and they are warm enough for the start line and honest about the pace. Every hoodie is printed to order; {{order by Friday, December 4, 2026 for Christmas delivery in the US||Christmas delivery in the US is no longer guaranteed}}, and you get one free size exchange with nothing to mail back.',
    sections: [
      { h2: 'For the back of the pack', body: 'Most running clothes are about speed. These are about the rest of us: the turkey trot walker, the couch-to-5K graduate and the friend who signed up for a 10K and had second thoughts by the first mile marker. The art is drawn like a 1970s jogging magazine, with tube socks, terry sweatbands and big slab lettering.' },
      { h2: 'Pullover or zip-up', body: 'The pullover is an 8 oz cotton-poly fleece with a front pouch and the print across the chest. The zip-up puts the full print on the back, where the zipper cannot cut through it, with a small stitched mark on the left chest, so you can unzip it after the first mile.' },
      { h2: 'Before and after the run', body: 'These are cotton-blend fleece hoodies for the cold start line, the cool-down walk and brunch, not technical running layers. Shed it at the bag check, pull it back on at the finish.' },
      { h2: 'Wearing a hoodie to run', body: 'Wear it as a warm-up layer: cotton-poly fleece holds sweat and is not a technical running fabric, so most runners pull it off once they warm up. Pace: Leisurely and Mile One Was a Mistake suit the walker and the jogger at a turkey trot, and Run Club. For the Coffee. and I Only Run Downhill fit the weekly group run that ends at the cafe. For hoodies built for the gym, see our gym hoodies.', links: [{ href: '/products/unisex-running-pace-leisurely-hoodie/', label: 'Pace: Leisurely' }, { href: '/products/unisex-running-mile-one-was-a-mistake-hoodie/', label: 'Mile One Was a Mistake' }, { href: '/products/unisex-running-run-club-mostly-a-coffee-club-hoodie/', label: 'Run Club. For the Coffee.' }, { href: '/products/mens-running-i-only-run-downhill-hoodie/', label: 'I Only Run Downhill' }, { href: '/hoodies/gym-hoodies/', label: 'Gym hoodies' }] },
    ],
    faqs: [
      { q: 'Can you run in a cotton hoodie?', a: 'You can, but cotton-blend fleece holds sweat, so most runners wear one for the warm-up, the start line and the walk back rather than the whole run. Graphic Tees Co. running hoodies are 8 oz cotton-polyester fleece, made for before and after the miles.' },
      { q: 'Are these running hoodies good for a turkey trot?', a: 'Yes. A funny running hoodie from Graphic Tees Co. is warm enough for a cold Thanksgiving morning start line and comes off easily once you warm up. The Pace: Leisurely snail and Mile One Was a Mistake designs suit walkers and joggers alike.' },
      { q: 'Is a running hoodie a good gift for a runner?', a: 'Yes. A running hoodie with a joke about pace or mile one suits the slow runner, the new 5K runner and the marathon friend who takes it too seriously. Graphic Tees Co. running hoodies are printed to order, orders of $45 or more ship free in the US, and each one includes one free size exchange.' },
      { q: 'How much are the running hoodies?', a: 'Running hoodies at Graphic Tees Co. [[are $39.99 for the pullover through November 30, then $44.99, and the zip-up is $57.99 through November 30.||are $44.99 for the pullover and $62.99 for the zip-up.]] Sizes run S through 3XL, each hoodie is printed to order with original art, and orders of $45 or more ship free in the US.' },
      { q: 'How do the running hoodies fit?', a: 'The pullover is a relaxed unisex fit in sizes S to 3XL, and Pace: Leisurely in Light Blue also goes to 5XL. Order your usual size to layer over a tee, or one size up for a looser fit. Each product page has a size chart in inches, and Graphic Tees Co. gives you one free size exchange.' },
      { q: 'How do I wash a running hoodie?', a: 'Turn it inside out, wash cold with similar colors, and tumble dry low or hang dry. Skip bleach and fabric softener, and never iron directly over the print. Because cotton fleece holds sweat, wash it after a warm-up or race day, and the design on the chest stays sharp.' },
      { q: 'What colors do the running hoodies come in?', a: 'The pullovers come in Sand, Navy and Light Blue, depending on the design. The zip-ups come in Black, Navy and Ash, and Pace: Leisurely adds White, Forest Green, Dark Chocolate, Dark Heather and Royal. Each product page photographs every color, and we only offer a color where the art reads clearly.' },
      { q: 'When should I order a running hoodie for Christmas?', a: '{{Order by Friday, December 4, 2026 for Christmas delivery in the US. Each running hoodie is printed in 2–5 business days, then ships in about 3–8 business days. Orders of $45 or more ship free, and checkout shows a delivery estimate.||Christmas delivery in the US is no longer guaranteed. Each running hoodie is printed in 2–5 business days, then ships in about 3–8 business days, so it may arrive after December 25. Orders of $45 or more ship free, and checkout shows a delivery estimate.}}' },
      { q: 'How long do running hoodies take to ship?', a: (f) => `Each running hoodie is printed after you order it. Printing takes ${f.productionDays}, then your order ships. Delivery estimates are shown at checkout.`, needs: 'productionDays' },
    ],
    shopifyHandle: 'running-hoodies',
  },
  {
    // RankHero 2026-10-18: dachshund hoodie 1,900 / KD 26 (dachshund dog hoodie 880/34, wiener dog hoodie 320/34 stay with products). Added 2026-10-18 at 3 live dachshund hoodies (R11.10).
    slug: 'dachshund-hoodies', section: 'hoodies', name: 'Dachshund Hoodies',
    keyword: 'dachshund hoodie', volume: 1900, kd: 26,
    title: 'Dachshund Hoodies — Funny Wiener Dog Designs',
    description: 'Funny dachshund hoodies with vintage wiener dog art: banned from the stairs, burrowed under a quilt, full of opinions. Pullover hoodies, $39.99.',
    h1: 'Dachshund Hoodies',
    intro: 'Dachshund hoodies for people who live with a small, long dog and a large personality: one barking out its opinions, one buried in a quilt until spring, and one lounging on the pillows at the foot of the stairs it is banned from.',
    sections: [
      { h2: 'Drawn from real dachshund behavior', body: 'Every design starts with something dachshund owners see daily: the burrowing, the barking at nothing, the rules that stopped applying years ago. The dogs are drawn in worn vintage cartoon inks, red-brown with cream and mustard, so each one looks like a found 1960s print rather than clip art.' },
      { h2: 'Which one to pick', body: 'Short Legs, Long Opinions is for the dog that narrates the street. Currently Burrowed is the women\'s pick for winter couch days. Banned From Stairs is for every household whose dachshund has the best seat anyway. All three are 8 oz cotton-poly pullovers with a front pouch.' },
      { h2: 'For the walk and the couch', body: 'Warm enough for a cold morning dog walk, soft enough for the couch with a dachshund in your lap. Wash inside out in cold water so the print stays bright.' },
    ],
    faqs: [
      { q: 'Are these hoodies for people or for dachshunds?', a: 'For people. Graphic Tees Co. dachshund hoodies are human pullover hoodies with original wiener dog art on the chest, in unisex and women\'s sizes S through 3XL. They are not dog clothing, though the dog will probably try to sleep on yours.' },
      { q: 'What is a good gift for a dachshund owner?', a: 'A dachshund hoodie with a joke they recognize, like a wiener dog banned from the stairs or burrowed under a quilt, is an easy pick. Graphic Tees Co. dachshund hoodies are $39.99, ship free in the US over $45, and include one free size exchange within 30 days.' },
      { q: 'Why do dachshunds burrow?', a: 'Dachshunds were bred to dig into badger dens, so burrowing under blankets is instinct, and it keeps a short-coated dog warm. That habit is the joke behind the Currently Burrowed dachshund hoodie from Graphic Tees Co., drawn with only a nose and one ear showing.' },
      { q: 'How do the dachshund hoodies fit?', a: 'Each Graphic Tees Co. dachshund hoodie is an 8 oz cotton-polyester pullover in a classic relaxed fit, sizes S through 3XL. Most people keep their usual size; go up one for a roomier fit over a sweater. One free size exchange within 30 days covers a wrong guess.' },
      { q: 'How long do dachshund hoodies take to ship?', a: (f) => `Each dachshund hoodie is printed after you order it. Printing takes ${f.productionDays}, then your order ships. Delivery estimates are shown at checkout.`, needs: 'productionDays' },
    ],
    shopifyHandle: 'dachshund-hoodies',
  },
  niche(N.anime, 'hoodies', { slug: 'anime-hoodies', keyword: 'anime hoodie', volume: 22200, kd: 38, product: 'anime-style hoodies', twin: 'anime-shirts' }),
  seasonal('halloween', 'hoodies', { slug: 'halloween-hoodies', keyword: 'halloween hoodie', volume: 5400, kd: 48, product: 'Halloween hoodies', twin: 'halloween-shirts', blurb: 'horror-movie-night and spooky-season designs for cold October nights.' }),
  // Google push item 1 (Sam 2026-11-01, docs/backlog/google-push-nov.md): primary -> 'christmas hoodies' 9,900 / KD 58 (RankHero 2026-11-01;
  // Search Console avg spot 25, 73 impressions in 28 days); 'christmas hoodie' 9,900 / KD 52 stays as the second phrase in the copy.
  // Answer-first intro, sections with live product links, 8 FAQs (all reach the FAQPage schema: none gated on an unset fact).
  seasonal('christmas', 'hoodies', { slug: 'christmas-hoodies', orderBy: 'Order your Christmas hoodie by Friday, December 4, 2026 to leave a margin for Christmas delivery in the US; December 8 is the last realistic day.', keyword: 'christmas hoodies', volume: 9900, kd: 58, product: 'Christmas hoodies', twin: 'christmas-shirts', blurb: 'holiday designs warm enough for the tree lot and the family photo.',
    title: 'Christmas Hoodies: Funny Holiday Hoodies for Men & Women',
    description: 'Christmas hoodies with original funny art, printed to order for men, women and families. Pullovers from $39.99, zip-ups too. Free US shipping on $45+.',
    intro: 'Our Christmas hoodies are original holiday designs with a joke you can wear to the office party, the tree lot and the family photo. Pick a pullover from $39.99, an oversized fit or an embroidered zip-up; each one is printed after you order it and ships free in the US on orders over $45.',
    sections: [
      { h2: 'Funny Christmas hoodies', body: 'Most of these carry one dry line rather than a sweater pattern: a Santa who wants a definition of naughty, a guest attending under protest, a white elephant champion. They read from across the room and still look good in the family photo.',
        links: [{ href: '/products/unisex-christmas-define-naughty-hoodie/', label: 'Define Naughty hoodie' }, { href: '/products/mens-christmas-attending-under-protest-hoodie/', label: 'Attending Under Protest hoodie' }, { href: '/products/unisex-christmas-technically-a-sweater-hoodie/', label: 'Technically a Sweater hoodie' }, { href: '/products/womens-christmas-jolly-ish-hoodie/', label: 'Jolly-ish hoodie' }] },
      { h2: 'Christmas hoodies for women', body: 'The women\'s Christmas hoodies run from vintage storybook art (a highland cow in a wreath, a nutcracker with a bow, penguins on the pond) to cheeky lines like Sleigh Queen and Sleighping In. Each comes in a light and a dark color.',
        links: [{ href: '/products/womens-christmas-highland-cow-christmas-hoodie/', label: 'Highland Cow Christmas hoodie' }, { href: '/products/womens-christmas-sleigh-queen-hoodie/', label: 'Sleigh Queen hoodie' }, { href: '/products/womens-christmas-nutcracker-bow-hoodie/', label: 'Nutcracker Bow hoodie' }, { href: '/products/womens-christmas-sleighping-in-hoodie/', label: 'Sleighping In hoodie' }] },
      { h2: 'Christmas hoodies for men', body: 'The men\'s side keeps it deadpan: the light-show manager on the ladder, the tree that looked smaller at the farm, and a bulking-season hoodie for the guy who treats the holidays as a training block.',
        links: [{ href: '/products/mens-christmas-light-show-manager-hoodie/', label: 'Light Show Manager hoodie' }, { href: '/products/mens-christmas-white-elephant-champion-hoodie/', label: 'White Elephant Champion hoodie' }, { href: '/products/mens-christmas-it-looked-smaller-at-the-farm-oversized-hoodie/', label: 'It Looked Smaller at the Farm oversized hoodie' }, { href: '/products/mens-christmas-bulking-season-oversized-hoodie/', label: 'Bulking Season oversized hoodie' }] },
      { h2: 'Christmas zip-up hoodies', body: 'Prefer a zip? These Christmas zip-up hoodies carry the joke big on the back and a small embroidered mark on the left chest, so they work open over a tee at a party or zipped up outside.',
        links: [{ href: '/products/mens-christmas-attending-under-protest-embroidered-zip-hoodie/', label: 'Attending Under Protest zip-up' }, { href: '/products/mens-christmas-it-looked-smaller-at-the-farm-embroidered-zip-hoodie/', label: 'It Looked Smaller at the Farm zip-up' }, { href: '/products/womens-christmas-capybara-tangled-unbothered-zip-hoodie/', label: 'Capybara I\'m Not Stuck, I\'m Decorated zip-up' }] },
      { h2: 'Matching family Christmas hoodies', body: 'For a matching family look, pick one design and order it in everyone\'s size, or mix designs from the same holiday art. Ten or more items in one cart take 15% off automatically, and the family Christmas long sleeves give each person their own line.',
        links: [{ href: '/group-shirts/', label: 'Group & family shirts' }, { href: '/products/womens-christmas-family-credits-i-did-christmas-again-long-sleeve-tee/', label: 'I Did Christmas. Again. long sleeve' }, { href: '/products/mens-christmas-family-credits-i-carried-the-tree-long-sleeve-tee/', label: 'I Carried the Tree long sleeve' }] },
      { h2: 'Original Christmas hoodie designs', body: 'Our Christmas hoodies are original designs: holiday designs warm enough for the tree lot and the family photo. Every Christmas hoodie is printed to order, so nothing sits in a warehouse from last year.' },
      { h2: 'A new Christmas drop every year', body: 'This collection gets new designs each season. Order early — printed-to-order items take time to make and ship.' },
    ],
    extra: [
      { q: 'Do you have matching Christmas hoodies for family?', a: 'Yes. Any design can be ordered in several sizes so the whole family matches.' },
      { q: 'When should I order a Christmas hoodie to have it by Christmas?', a: 'Order by Friday, December 4, 2026 to leave a margin for US delivery before Christmas (December 8 is the last realistic day). Each Christmas hoodie is printed in 2–5 business days after you order, then spends about 3–8 business days in transit. Embroidered zip-ups can take a little longer, so order those first.' },
      { q: 'Is a Christmas sweatshirt or a Christmas hoodie better?', a: 'A Christmas hoodie is warmer and more casual, with a hood and a front pouch pocket, so it suits the tree lot, the game and the drive to the in-laws. A crewneck sweatshirt sits flatter and dresses up a little for the office party. We make both, often with the same art.' },
      { q: 'What are your Christmas hoodies made of?', a: 'Our pullover Christmas hoodies are Gildan 18500: 8 oz cotton-polyester fleece with a double-lined hood and a front pouch pocket. Zip-ups are Gildan 18600 with a full front zipper, and oversized hoodies are Bella+Canvas 4719 fleece with a roomier cut.' },
      { q: 'How do Christmas hoodies fit?', a: 'Our pullover and zip-up Christmas hoodies are a classic unisex fit: true to size for most men, and a little relaxed for women. Size up one for a slouchy look. Oversized hoodies are cut roomy already, so take your usual size. Each product page has a size chart.' },
      { q: 'What if the size is wrong?', a: 'Within 30 days of delivery we send one replacement in a new size free, and you don\'t have to mail the first hoodie back. Misprinted or damaged orders are reprinted or refunded within 30 days.' },
    ] }),
];

export const tees: Collection[] = repriceDeep(rawTees);
export const hoodies: Collection[] = repriceDeep(rawHoodies);
export const all = [...tees, ...hoodies];
export const pathFor = (c: Collection) => (c.section === 'hoodies' ? `/hoodies/${c.slug}/` : `/${c.slug}/`);
export const bySlug = (slug: string) => all.find((c) => c.slug === slug);
