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
  retro: {
    about: (item) => `Retro here means the look of a specific decade: 70s bubble letters and striped sunsets, 80s gym and VHS art, 90s cel anime and Y2K flip phones. Each ${item} is printed when you order it, so the throwback is in the drawing, not a faded blank.`,
    original: 'Yes. Every retro design is original art drawn for this shop. No reprinted old logos, brands or licensed characters.',
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
        : site.facts.hoodiesLive ? { h2: 'Want it warmer? Look for the hoodie', body: 'A growing number of our designs are also printed on hoodies with the same art, so it still works when the weather turns. Hoodie versions live in our hoodie collections.' } : null,
      ...(n.style ? [{ h2: `How to wear ${P}`, body: n.style }] : []),
    ].filter(Boolean) as { h2: string; body: string }[],
    faqs: [
      ...(n.faqs?.(P, section) ?? []),
      ...(n.original ? [{ q: 'Are these original designs?', a: n.original }] : []),
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
  o: { slug: string; keyword: string; volume: number; kd: number; product: string; twin?: string; blurb: string; extra?: Faq[]; intro?: string; sections?: { h2: string; body: string }[]; title?: string; description?: string; name?: string },
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
      { q: 'Do the designs come on hoodies too?', a: 'Some do, and more are added every week. Hoodie versions use the same art and are listed in our hoodie collections.', needs: 'hoodiesLive' },
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
  niche(N.retro, 'tees', { slug: 'retro-graphic-tees', keyword: 'retro graphic tees', volume: 22200, kd: 54, product: 'retro graphic tees' }) /* RankHero 2026-10-16; R11.6 style collection, hub fed by the retro-graphic-tees tag */,
  niche(N.funny, 'tees', { slug: 'funny-graphic-tees', keyword: 'funny graphic tees', volume: 5400, kd: 58, product: 'funny graphic tees' }) /* RankHero 2026-10-16; R11.6 style collection, hub fed by the funny-graphic-tees tag */,
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
      { q: 'Do the designs come on hoodies too?', a: 'Some do, and more are added every week. Hoodie versions use the same art and are listed in our hoodie collections.', needs: 'hoodiesLive' },
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
      { h2: 'Matching funny shirts for the family photo', body: 'Give everyone their own joke: Light Show Manager for Dad, Sleigh Queen for Mom, Jolly-ish for the teenager. They share one vintage look, so they still read as a set in the Christmas card photo.' },
      { h2: 'When to order', body: 'Each shirt is printed after you order it, which takes 2–5 business days, then arrives in about 3–8 business days. Order by early December for Christmas; delivery estimates show at checkout.' },
    ],
    extra: [
      { q: 'What is a good funny Christmas shirt for an office party?', a: 'Pick a clean one-liner that works on anyone: Jolly-ish, Snow Problem or Light Show Manager from Graphic Tees Co. all get a laugh without crossing a line. Every design is family-clean, with no profanity, innuendo or movie quotes, so it is safe for coworkers and the boss.' },
      { q: 'How much are your funny Christmas shirts?', a: 'Graphic Tees Co. funny Christmas tees are $24.99 (regular $29.99) during the holiday sale through November 30, and US shipping is free on orders over $45. Crewneck sweatshirt versions are $34.99 on sale.' },
      { q: 'Do these designs come on sweatshirts too?', a: 'Most of them do. The crewneck sweatshirt versions use the same art and live in our Christmas sweatshirts collection, and a few, like Define Naughty and Light Show Manager, also come as hoodies in our Christmas hoodies collection.' },
      { q: 'What if the size is wrong?', a: 'Every shirt is printed to order, so instead of a return you get one free size exchange within 30 days of delivery: we print the new size and you keep nothing to mail back. Misprints or damage are reprinted or refunded within 30 days.' },
    ] }),
  // Buy-the-bottom build #1 (RankHero 2026-10-06): "christmas shirts for women" 5,400 / KD 14 — the easy modifier of "christmas shirts" (33,100 / KD 58).
  {
    slug: 'christmas-shirts-for-women', section: 'tees', audience: 'women', name: "Women's Christmas Shirts", seasonal: 'christmas',
    keyword: 'christmas shirts for women', volume: 5400, kd: 14,
    title: 'Christmas Shirts for Women — Original Holiday Graphic Tees',
    description: 'Original Christmas shirts for women: vintage holiday art and clean jokes for the party, the cookie swap and the photo. Tees $24.99 through Nov 30.',
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
      { q: 'Can I return a Christmas shirt if the size is wrong?', a: 'Yes, in a way. Every Graphic Tees Co. shirt is printed to order, so instead of a return you get one free size exchange within 30 days of delivery: we print the new size and you keep nothing to mail back. Misprints or damage are reprinted or refunded within 30 days.' },
      ...audienceFaqs('Christmas shirts'),
    ],
    shopifyHandle: 'christmas-shirts-for-women',
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
      { h2: 'Matching Christmas shirts', body: 'Pick one design in several sizes for the family photo, or let everyone choose their own scene and let the shared vintage style tie them together. The unisex designs make it easy for couples to match.' },
      { h2: 'Order before December gets busy', body: 'Each shirt is printed after you order it and then shipped, so order early in the season. Delivery estimates show at checkout, and new holiday designs join the collection as they’re drawn.' },
    ] }),
  // Holiday crewnecks (Sam, 2026-10-13; KD exception approved): Gildan 18000 crewneck sweatshirts, $39.99. RankHero 2026-10-13:
  // christmas sweatshirt 22,200/57 · merry christmas sweatshirt 2,400/56 · christmas crewneck 1,900/60 · christmas tree sweatshirt 390/70.
  seasonal('christmas', 'tees', { slug: 'christmas-sweatshirts', name: 'Christmas Sweatshirts', keyword: 'christmas sweatshirt', volume: 22200, kd: 57, product: 'Christmas sweatshirts', blurb: 'vintage holiday art on soft crewneck fleece, for the tree farm, the cabin and the family photo.',
    title: 'Christmas Sweatshirts — Vintage Santa & Tree Crewnecks',
    description: 'Original Christmas sweatshirts: a cracked-paint vintage Santa and a row of hand-drawn trees on soft crewneck fleece. Printed to order, $39.99.',
    intro: 'Our Christmas sweatshirts carry the same original holiday art as the tees, printed on a soft, warm crewneck for the cold half of December. Vintage illustration and simple line art, no ugly-sweater gags.',
    sections: [
      { h2: 'Two kinds of Christmas art', body: 'One side of the collection is vintage illustration: a 1950s-style Santa face with rosy cheeks and a cracked, worn finish over MERRY CHRISTMAS in faded red type. The other is quiet line art: a row of five thin evergreen trees under a star and a few snowflakes, with Merry & Bright in a small script line. Both sit straight on the fabric with no badge or box behind them.' },
      { h2: 'What the crewneck is like', body: 'Each one is printed on a classic-fit crewneck sweatshirt: 50% cotton, 50% polyester fleece with air-jet spun yarn, pre-shrunk, with a ribbed collar, cuffs and hem. It is a sweatshirt, not a hoodie, so it layers under a coat or over a collared shirt.' },
      { h2: 'Where to wear a Christmas crewneck', body: 'The tree farm, a cold walk to see the neighborhood lights, a cabin weekend, the school concert or Christmas morning on the couch. The light Santa design reads well in the family photo; the tree line art on forest green or maroon is the one to wear all winter.' },
      { h2: 'Matching sweatshirts', body: 'Every design comes in a wide size run, so a family or a group of friends can order the same Christmas crewneck. The same art also comes on tees if someone at the table runs warm.' },
      { h2: 'When to order', body: 'Each sweatshirt is printed after you order it, then shipped. Order early in December so it arrives before your plans; delivery estimates show at checkout.' },
    ],
    extra: [
      { q: 'Are these sweatshirts or hoodies?', a: 'Crewneck sweatshirts, with no hood. They are cotton-polyester fleece with a ribbed collar, cuffs and hem.' },
      { q: 'Do the Christmas sweatshirts match your Christmas tees?', a: 'Yes. Each sweatshirt uses the same art as one of our Christmas tees, so you can mix the two in a family photo.' },
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
      { h2: 'What makes these cropped sweatshirts different?', body: 'Every design is drawn for this shop: retro coffee machines, kaiju naps, wildflowers and holiday art, never a stock graphic. Right now the cropped fleece we print on is a cropped hoodie, so every piece here has a hood.' },
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
      { h2: 'What makes these embroidered sweatshirts different?', body: 'The designs are drawn for this shop as clean single-line art, then stitched in thread instead of printed, so the design has a raised, textured feel. They sit small on the chest, about the size of a hand.' },
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
      { h2: 'What makes these oversized sweatshirts different?', body: 'Every design is drawn for this shop, never stock art, and sized up to suit a big, boxy sweatshirt. Each one is printed after you order it.' },
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
      { h2: 'What is on these sweatshirts?', body: 'Every design is drawn for this shop in a vintage screen-print style: holiday scenes, Bible verses, western, anime-style and retro 70s art. Many of them match one of our tees or hoodies, so you can pick the weight that suits the weather.' },
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
    intro: 'Camo sweatshirts with a camo pattern we drew ourselves, printed edge to edge, and a hunting joke on the chest for deer camp, the duck blind and the drive home.',
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
  },
];

export const hoodies: Collection[] = [
  {
    slug: 'cropped-hoodies', section: 'hoodies', audience: 'women', name: 'Cropped Hoodies',
    keyword: 'cropped hoodie', volume: 40500, kd: 30,
    title: 'Cropped Hoodies — Original Graphic Designs for Women',
    description: 'Cropped hoodies for women with original graphic art. Cut to meet high-rise jeans and skirts, printed to order.',
    h1: 'Cropped Hoodies',
    intro: 'Cropped hoodies for women with original art on the front: the same designs as our cropped tees, on a short fleece hoodie for cold days.',
    sections: [
      { h2: 'What makes these cropped hoodies different?', body: 'Every design is drawn for this shop, never stock art. Each hoodie is printed after you order it on a women\'s cropped fleece hoodie.' },
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
  niche(N.heavyweight, 'hoodies', { slug: 'heavyweight-hoodies', keyword: 'heavyweight hoodie', volume: 14800, kd: 20, product: 'heavyweight hoodies' }),
  niche(N.zipup, 'hoodies', { slug: 'zip-up-hoodies', keyword: 'zip-up hoodie', volume: 135000, kd: 28, product: 'zip-up hoodies' }),
  niche(N.fishing, 'hoodies', { slug: 'fishing-hoodies', keyword: 'fishing hoodie', volume: 6600, kd: 30, product: 'fishing hoodies', twin: 'fishing-t-shirts' }),
  niche(N.gym, 'hoodies', { slug: 'gym-hoodies', keyword: 'gym hoodie', volume: 18100, kd: 30, product: 'gym hoodies', twin: 'mens-gym-shirts' }),
  niche(N.hunting, 'hoodies', { slug: 'hunting-hoodies', keyword: 'hunting hoodie', volume: 3600, kd: 32, product: 'hunting hoodies', twin: 'hunting-t-shirts' }),
  niche(N.y2k, 'hoodies', { slug: 'y2k-hoodies', keyword: 'y2k hoodie', volume: 14800, kd: 35, product: 'Y2K hoodies', twin: 'y2k-graphic-tees' }),
  niche(N.western, 'hoodies', { slug: 'western-hoodies', keyword: 'western hoodie', volume: 3600, kd: 36, product: 'western hoodies', twin: 'western-graphic-tees' }),
  niche(N.oversized, 'hoodies', { slug: 'oversized-hoodies', keyword: 'oversized hoodie', volume: 165000, kd: 38, product: 'oversized hoodies', twin: 'oversized-graphic-tees' }),
  niche(N.christian, 'hoodies', { slug: 'christian-hoodies', keyword: 'christian hoodie', volume: 18100, kd: 44, product: 'Christian hoodies', twin: 'christian-shirts' }) /* RankHero 2026-10-16 */,
  niche(N.camo, 'hoodies', { slug: 'camo-hoodies', keyword: 'camo hoodie', volume: 74000, kd: 23, product: 'camo hoodies' }) /* RankHero 2026-10-16; R11.5 sweep */,
  niche(N.zipup, 'hoodies', { slug: 'zip-up-hoodies-for-men', keyword: 'mens zip up hoodie', volume: 74000, kd: 6, product: "men's zip-up hoodies", audience: 'men', name: "Men's Zip-Up Hoodies" }) /* RankHero 2026-10-16 */,
  niche(N.oversized, 'hoodies', { slug: 'oversized-hoodies-for-men', keyword: 'oversized hoodie men', volume: 18100, kd: 10, product: "men's oversized hoodies", audience: 'men', name: "Men's Oversized Hoodies" }) /* RankHero 2026-10-16 */,
  niche(N.gym, 'hoodies', { slug: 'gym-hoodies-for-men', keyword: 'mens gym hoodie', volume: 9900, kd: 31, product: "men's gym hoodies", audience: 'men', name: "Men's Gym Hoodies" }) /* RankHero 2026-10-16 */,
  niche(N.halfzip, 'hoodies', { slug: 'half-zip-pullovers', keyword: 'half zip pullover', volume: 5400, kd: 14, product: 'half zip pullovers', name: 'Half Zip Pullovers' }) /* RankHero 2026-10-16; Bella+Canvas 4740 */,
  niche(N.womenshoodies, 'hoodies', { slug: 'graphic-hoodies-for-women', keyword: 'graphic hoodies for women', volume: 8100, kd: 12, product: 'graphic hoodies for women', audience: 'women', name: "Women's Graphic Hoodies" }) /* R11.5 sweep 2026-10-16 */,
  niche(N.menshoodies, 'hoodies', { slug: 'graphic-hoodies-for-men', keyword: 'graphic hoodie men', volume: 27100, kd: 9, product: 'graphic hoodies for men', audience: 'men', name: "Men's Graphic Hoodies" }) /* RankHero 2026-10-17, director low-KD sweep */,
  {
    // RankHero 2026-10-16: zip up hoodie women 14,800 / KD 32. R9.11 lists it as brand-owned: we list products here, no extra page effort.
    slug: 'zip-up-hoodies-for-women', section: 'hoodies', audience: 'women', name: "Women's Zip-Up Hoodies",
    keyword: 'zip up hoodie women', volume: 14800, kd: 32,
    title: "Women's Zip-Up Hoodies — Original Graphic Designs",
    description: "Zip-up hoodies for women with original art: a big print on the back and a small one on the chest. Fleece full-zip hoodies, printed to order.",
    h1: "Women's Zip-Up Hoodies",
    intro: 'Zip-up hoodies for women with original art: the full design on the back and a small version on the left chest, so it still shows when you wear it open.',
    sections: [
      { h2: 'What makes these zip-up hoodies different?', body: 'Every design is drawn for this shop, with the joke on the back where people actually see it. Each hoodie is printed after you order it.' },
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
      { h2: 'What makes these embroidered hoodies different?', body: 'Each design is drawn for this shop as clean line art and hand lettering, then stitched in thread instead of printed, so it has a raised, textured feel. Some sit centered on the chest, others small on the left chest like a logo would.' },
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
  niche(N.anime, 'hoodies', { slug: 'anime-hoodies', keyword: 'anime hoodie', volume: 22200, kd: 38, product: 'anime-style hoodies', twin: 'anime-shirts' }),
  seasonal('halloween', 'hoodies', { slug: 'halloween-hoodies', keyword: 'halloween hoodie', volume: 5400, kd: 48, product: 'Halloween hoodies', twin: 'halloween-shirts', blurb: 'horror-movie-night and spooky-season designs for cold October nights.' }),
  seasonal('christmas', 'hoodies', { slug: 'christmas-hoodies', keyword: 'christmas hoodie', volume: 9900, kd: 52, product: 'Christmas hoodies', twin: 'christmas-shirts', blurb: 'holiday designs warm enough for the tree lot and the family photo.',
    extra: [{ q: 'Do you have matching Christmas hoodies for family?', a: 'Yes. Any design can be ordered in several sizes so the whole family matches.' }] }),
];

export const all = [...tees, ...hoodies];
export const pathFor = (c: Collection) => (c.section === 'hoodies' ? `/hoodies/${c.slug}/` : `/${c.slug}/`);
export const bySlug = (slug: string) => all.find((c) => c.slug === slug);
