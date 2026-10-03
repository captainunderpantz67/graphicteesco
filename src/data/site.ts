// Brand-level facts. Anything marked TODO must be confirmed by Sam before launch.
export const site = {
  name: 'Graphic Tees Co.', // TODO: confirm brand name
  domain: 'graphicteesco.com',
  url: 'https://graphicteesco.com',
  tagline: 'Original graphic tees and hoodies for the things you actually do.',
  instagram: '', // TODO: Sam's Instagram handle (~10k followers)
  email: '', // TODO: support email
  // Facts used in copy. Leave null until confirmed — components hide null facts.
  facts: {
    printedOnDemand: true, // Printful fulfillment
    productionDays: null as string | null, // e.g. '2–5 business days' — confirm from Printful
    freeShippingThreshold: null as number | null,
    returnsPolicy: null as string | null,
  },
};
