# Custom configurator (to be built by Fable only; spec from Sam, 2026-10-15/16)

- Pets first ("custom dog shirt" 8,100/49, "custom pet shirt" 3,600/50, "custom cat shirt" 1,600/43, "custom photo shirt" 9,900/48), then other custom ___ shirt pages that pass the keyword gate (rulebook R2), starting with custom football mom shirts (name + number, no photo).
- Flow: upload a photo → pick a style (vintage bootleg, boutique, embroidery look) → AI art → live preview on the shirt → max 2 regenerations → add to cart → order.
- One engine, many landing pages: each custom ___ page targets its own measured keyword with its own examples and copy.
- Order handoff must be bulletproof: a paid Shopify order carries the generated art file reference; a background service creates the Printful order with that exact file. No order may ever be lost or printed with the wrong art.
- Testing: a 100% Shopify discount code for test orders and Printful DRAFT orders only (never confirmed/charged). Cover failure cases: bad photo, timeout, double submit, two orders at once.
- Stays offline until Sam approves. Full order test needs the Shopify password off.
