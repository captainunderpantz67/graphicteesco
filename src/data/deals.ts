// Holiday sale config shared by /black-friday/ and (later) /cyber-monday/.
// Tiers must match the automatic discounts in Shopify exactly. `discountLive` stays false until
// Sam has approved and the discounts exist; until then the page shows the tiers as "coming".
export const blackFriday = {
  year: 2026,
  start: '2026-11-08T00:00:00-06:00', // Sunday Nov 8, 12am Central (Sam moved it up from Thanksgiving night, 2026-10-20)
  end: '2026-11-30T23:59:00-06:00', // Cyber Monday, 11:59pm Central
  tiers: [
    { qty: 2, pct: 15 },
    { qty: 3, pct: 20 },
    { qty: 4, pct: 25 },
  ],
  discountLive: true, // 3 automatic discounts created 2026-10-20, scheduled Nov 8 12am CT → Nov 30 11:59pm CT
};
