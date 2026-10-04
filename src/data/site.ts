// Brand-level facts. Anything null is unconfirmed: copy, FAQs and schema that depend on
// it are hidden automatically until it's filled in. Never fill a fact by guessing.
export interface Facts {
  printedOnDemand: boolean;
  productionDays: string | null; // e.g. '2–5 business days' — from Printful
  sizeRange: string | null; // e.g. 'S–4XL' — from the Printful blanks chosen
  womensFit: boolean | null; // a women's / relaxed women's cut is offered
  kidsSizes: boolean | null;
  longSleeve: boolean | null;
  personalization: boolean | null; // Printful personalization (names/numbers) turned on
  teeBlank: string | null; // e.g. 'Bella+Canvas 3001, 100% cotton'
  hoodieBlank: string | null;
  freeShippingThreshold: number | null;
  returnsPolicy: string | null;
}

const NAME = 'Graphic Tees Co.'; // confirmed by Sam 2026-10-02 (also the Shopify store name)

export const site = {
  name: NAME,
  domain: 'graphicteesco.com',
  url: 'https://graphicteesco.com',
  // ENTITY STATEMENT — used word-for-word in schema, homepage, About, llms.txt.
  // Answer engines learn a brand from consistent repetition; don't paraphrase it elsewhere.
  entity:
    `${NAME} is an online shop for original graphic tees and hoodies, organized by what people do — fishing, hunting, western, gym — with a new seasonal collection every month. Every design is printed to order, and most tee designs also come on a hoodie.`,
  tagline: 'Original graphic tees and hoodies for the things you actually do.',
  instagram: '', // TODO(Sam)
  email: '', // TODO(Sam)
  founders: [] as { name: string; role: string }[], // TODO(Sam): your brother (designer) + you
  // Hero mockup (Printful PNG of a model in a tee). Drop the file in /public and set the path.
  heroImage: {
    src: '/hero/friends-tailgate-1040.webp', srcSmall: '/hero/friends-tailgate-640.webp',
    alt: 'Three friends laughing on a pickup tailgate at golden hour, wearing Graphic Tees Co. graphic tees',
  } as { src: string; alt: string; srcSmall?: string } | null,
  facts: {
    printedOnDemand: true,
    productionDays: null,
    sizeRange: null,
    womensFit: null,
    kidsSizes: null,
    longSleeve: null,
    personalization: null,
    teeBlank: null,
    hoodieBlank: null,
    freeShippingThreshold: null,
    returnsPolicy: null,
  } satisfies Facts as Facts,
};

export type FaqA = string | ((f: Facts) => string);
export interface Faq { q: string; a: FaqA; needs?: keyof Facts }

// Resolve FAQs against facts: drop ones whose required fact is null/false.
export const resolveFaqs = (faqs: Faq[]) =>
  faqs
    .filter((f) => !f.needs || Boolean(site.facts[f.needs]))
    .map((f) => ({ q: f.q, a: typeof f.a === 'function' ? f.a(site.facts) : f.a }));
