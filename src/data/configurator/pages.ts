// Custom-shirt landing pages. One measured keyword each (rulebook R2), hand-written copy and FAQs (R3, R8).
// Every page runs the same configurator; `templates` decides which finished designs she can fill in, and
// `example` is the design shown before she types anything (never a blank shirt).
// Keyword data: RankHero, pulled 2026-10-16 (docs/backlog/configurator-research.md). noindex until Sam approves.
import type { DesignInput } from '../../lib/configurator/types';

export interface CustomPage {
  slug: string;
  keyword: string;
  volume: number;
  kd: number;
  measured: string; // source + date
  indexable: boolean;
  title: string; // ≤ 60 chars
  description: string; // ≤ 155 chars
  eyebrow: string;
  h1: string;
  intro: string; // one or two plain sentences under the H1
  templates: string[]; // first = default
  example: DesignInput;
  sections: { h2: string; body: string[] }[];
  faqs: { q: string; a: string }[];
}

const PRICE = '$34.99';

export const customPages: CustomPage[] = [
  {
    slug: 'custom-photo-shirt',
    keyword: 'custom photo shirt', volume: 9900, kd: 48, measured: 'RankHero 2026-10-16', indexable: false,
    title: 'Custom Photo Shirt – Your Photo, Background Removed',
    description: 'Make a custom photo shirt on your phone: pick a photo, we take out the background, add a name, see it on the shirt before you order. Printed to order.',
    eyebrow: 'Custom photo shirt',
    h1: 'Put your photo on a shirt',
    intro: 'Pick a photo from your camera roll. We take the background out, you add a name if you want one, and you see the finished shirt before you pay. Keep it a photo, or make it look like a vintage or bootleg tee.',
    templates: ['photo-bootleg'],
    example: { template: 'photo-bootleg', blank: 'bc3001', shirtColor: 'Black', size: 'M', colors: { primary: '#f8f3e8', secondary: '#c8102e' }, answers: { photo: 'sample:dog', style: 'none', caption: 'BUDDY' } },
    sections: [
      { h2: 'How the custom photo shirt works', body: [
        'There is no design program to learn. Tap "Pick a photo", choose one, and the background disappears on its own, so your kid, your dog or your grandparents sit cleanly on the shirt instead of inside a rectangle of someone\'s kitchen. Type a name or a short line if you want one; it sizes itself to fit. Then pick the shirt color and size, read the check-screen, and add it to your cart.',
        'The preview you see is built from the exact file we print. Nothing is dragged, resized or re-typed by a person after you order, so what you approve is what arrives.',
      ] },
      { h2: 'Which photos print best', body: [
        'One clear photo with the subject in the middle. A photo straight from your camera roll beats a screenshot or one that was sent by text, because those have been shrunk. Good light helps; busy backgrounds do not matter, since we remove them. If a photo is too small or blurry to print well, we tell you before you pay instead of after.',
      ] },
      { h2: 'Photo, vintage or bootleg', body: [
        '"Keep it a photo" prints the cutout as it is. "Vintage print" redraws it as a faded, worn-in screen print in a few inks. "Bootleg tee" gives it the airbrushed, glowing look of a 90s concert shirt. You can redo the vintage or bootleg version twice if the first try is not quite right, and you can always go back to the plain photo.',
      ] },
      { h2: 'The shirt itself', body: [
        `Every custom photo shirt is a Bella+Canvas 3001, a lightweight 4.2 oz cotton tee with a retail fit, in twelve colors from white to navy. The print is direct-to-garment ink, not a heat-pressed vinyl patch, so it moves with the fabric and washes like the rest of the shirt. ${PRICE}, printed to order in the US, usually at your door in one to two weeks. Free US shipping on orders of $45 or more.`,
      ] },
    ],
    faqs: [
      { q: 'Can I put any photo on a shirt?', a: 'Any photo you have the right to use: your family, your pets, your own pictures. We do not print photos of celebrities, logos or other people\'s artwork.' },
      { q: 'Do you remove the background from the photo?', a: 'Yes, automatically, the moment you pick the photo. You see the cutout on the shirt right away. If you would rather keep the whole picture, that option is coming; today every photo is a cutout.' },
      { q: 'What if my photo is blurry or small?', a: 'We check it before you pay. If it is too small or looks blurry we say so and ask for another one, so you are not surprised by a soft print.' },
      { q: 'Can I add a name or a date?', a: 'Yes. One line under the photo, up to 16 characters, in bold block letters that shrink to fit. It is optional.' },
      { q: 'How long does a custom photo shirt take?', a: 'Each one is printed after you order it, which takes two to five business days, then ships. Most US orders arrive within one to two weeks of ordering.' },
      { q: 'What if it arrives wrong?', a: 'Misprints and damage are reprinted or refunded within 30 days; send us a photo. Because the shirt is made just for you, we cannot take it back for a change of mind, which is why the check-screen asks you to confirm the spelling before you pay.' },
    ],
  },
  {
    slug: 'custom-dog-shirt',
    keyword: 'custom dog shirt', volume: 8100, kd: 49, measured: 'RankHero 2026-10-16', indexable: false,
    title: 'Custom Dog Shirt – Your Dog\'s Photo on a Tee',
    description: 'A custom dog shirt from your own photo: we cut your dog out of the background, add their name, and show you the shirt before you order. Printed to order.',
    eyebrow: 'Custom dog shirt',
    h1: 'Your dog, on a shirt',
    intro: 'Pick your favorite photo of your dog. We take out the background, you add their name, and you see the finished shirt before you pay. Plain photo, vintage print or full bootleg-tee treatment.',
    templates: ['photo-bootleg'],
    example: { template: 'photo-bootleg', blank: 'bc3001', shirtColor: 'Navy', size: 'M', colors: { primary: '#f2b705', secondary: '#f8f3e8' }, answers: { photo: 'sample:dog', style: 'none', caption: 'BUDDY' } },
    sections: [
      { h2: 'How to make a custom dog shirt', body: [
        'Choose a photo where your dog fills a good part of the frame and is looking somewhere near the camera. The background goes away on its own, so the one from the back seat or the muddy yard is fine. Add the name under the photo, pick a shirt color that suits their coat (a black lab pops on sand or athletic heather; a golden looks right on navy or forest), pick your size, and check the spelling on the last screen.',
        'The bootleg style is the one people stop you about: your dog airbrushed like a 90s tour shirt, name in big block letters underneath. Vintage gives a quieter, thrifted look. Both start from the same photo, and you can redo either twice.',
      ] },
      { h2: 'Photos that work for dogs', body: [
        'Daylight beats a flash, which blows out light fur and gives black dogs green eyes. Eye level beats looking down. Ears, tail and the top of the head should be inside the frame, since anything cut off by the photo edge stays cut off on the shirt. One dog per photo gives the cleanest cutout; if two dogs are touching they come out together as one shape, which usually looks great.',
      ] },
      { h2: 'The shirt', body: [
        `A Bella+Canvas 3001 cotton tee, lightweight and retail-fit, in twelve colors. Direct-to-garment print, soft to the touch. ${PRICE} each, printed to order in the US. Free US shipping on $45 and up, so two shirts (one for you, one for whoever walks the dog) ship free.`,
      ] },
    ],
    faqs: [
      { q: 'Can I put my dog\'s picture on a shirt?', a: 'Yes. Pick the photo, we cut the dog out of the background, you add the name, and the shirt is printed to order.' },
      { q: 'Does the custom dog shirt come in a vintage style?', a: 'Yes. "Vintage print" redraws the photo as a faded screen print; "Bootleg tee" gives it the airbrushed 90s concert-shirt look. Or keep it a plain photo.' },
      { q: 'Can I put two dogs on one shirt?', a: 'If they are side by side in one photo, yes; they are cut out together. Two separate photos on one shirt is not an option yet.' },
      { q: 'What sizes does the custom dog shirt come in?', a: 'XS to 3XL in most colors, on a unisex Bella+Canvas 3001 tee. The size chart is on the size step.' },
      { q: 'What if the cutout misses part of my dog?', a: 'You see the cutout on the shirt before you pay. If an ear or a tail is missing, pick a different photo with the whole dog inside the frame, which fixes it nearly every time.' },
      { q: 'How long does it take?', a: 'Printed two to five business days after you order, then shipped. Most US orders arrive within one to two weeks.' },
    ],
  },
  {
    slug: 'custom-team-shirts',
    keyword: 'custom team shirts', volume: 1300, kd: 20, measured: 'RankHero 2026-10-16', indexable: false,
    title: 'Custom Team Shirts – Name, Number and Team Colors',
    description: 'Custom team shirts, no design program: team name in a varsity arch, player name and number on the back, your two team colors. Printed to order.',
    eyebrow: 'Custom team shirts',
    h1: 'Custom team shirts, filled in like a form',
    intro: 'Type the team name, tap your two colors, add each player\'s name and number. The design fits itself; nothing to drag. See the front and back on the shirt, check the spelling, order one or one for every family.',
    templates: ['team-varsity', 'sports-mom'],
    example: { template: 'team-varsity', blank: 'bc3001', shirtColor: 'White', size: 'M', colors: { primary: '#6b1f2c', secondary: '#f2b705' }, answers: { teamName: 'WILDCATS', sport: 'football', tagline: 'EST. 2024', playerName: 'MATEJA', playerNumber: '78' } },
    sections: [
      { h2: 'Two team designs, both fill-in-the-blanks', body: [
        '"Team name varsity" puts the team name in an arched varsity font over a sport mark, with an optional line underneath (the town, "EST. 2019", "STATE BOUND"). "Sports mom" puts the sport and "Mom" on the front in your colors. Both carry the player\'s name arched over a big jersey number on the back, and both take more than one player: tap "+ Add another player" and each kid gets their own shirt with their own back.',
        'Long names are handled for you. "DE LA CRUZ-MARTINEZ" shrinks until it fits the arch; a single-digit number prints big and centered. You never pick a font size.',
      ] },
      { h2: 'Team colors that stay readable', body: [
        'You tap two colors, in the order a team says them: the first is the letters, the second is the outline. If you then pick a shirt that matches your first color (navy letters on a navy tee), the design swaps them so the letters stay readable, and the check-screen tells you it did. White tees get the first color as letters with the second as a clean outline; dark tees usually look best with the light color first.',
      ] },
      { h2: 'Ordering for a whole team', body: [
        `Add every player in one go; each shirt is its own line in the cart with the name and number written on it, so the team mom can check the list at checkout. ${PRICE} per shirt on a Bella+Canvas 3001 cotton tee, free US shipping on orders of $45 or more. For 12 or more shirts, or sweatshirts and hoodies, email us and we will set up the order by hand.`,
      ] },
    ],
    faqs: [
      { q: 'Can I put a player\'s name and number on the back?', a: 'Yes. The name arches over a big jersey number on the back, in your team colors. Add a line for each player and each one gets their own shirt.' },
      { q: 'How many players can I add at once?', a: 'Up to six per design. For more, make a second design, or email us for a team order.' },
      { q: 'Can everyone on the team pick their own size?', a: 'Yes. The size step lists every player you added, and each one gets their own size. The shirt color is shared, like a real team order.' },
      { q: 'Do you have the shirt in our team colors?', a: 'Twelve shirt colors: white, black, navy, athletic heather, dark grey heather, red, true royal, kelly, maroon, team purple, gold and forest. The letters and outline come from a palette of sixteen team colors.' },
      { q: 'Can I see the back before I order?', a: 'Yes. The preview has a Front and Back switch, and the last step shows the actual print files for every shirt with the spelling and numbers written out.' },
      { q: 'How long do custom team shirts take?', a: 'Each shirt is printed two to five business days after you order, then shipped together. Most US orders arrive within one to two weeks, so order at least two weeks before the game.' },
    ],
  },
];

export const customPageBySlug = (slug: string) => customPages.find((p) => p.slug === slug);
