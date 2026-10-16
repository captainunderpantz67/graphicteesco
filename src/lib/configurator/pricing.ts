// Custom tee pricing (rulebook R12 + the custom premium). One price for every color and size.
//
// Why $34.99: competitors sit at $32–49 for a one-off custom tee (Threadheads $32, Limeberry $39+); the blank is
// our normal $24.99/$29.99 tee and the custom step costs us about $0.05–0.10 of fal time plus a second print
// side, so a flat $10 premium lands under the big customizers while still clearing ~$15 after Printful.
export const CUSTOM_PRICE = { tee: { price: '34.99', compareAt: '39.99' } } as const;

// Photo styling (AI vintage/bootleg) is included in the price; it is capped at 2 regenerations per photo.
export const MAX_STYLE_RUNS = 3; // the first styling + 2 regenerations

export const priceFor = (garment: 'tee') => CUSTOM_PRICE[garment];
