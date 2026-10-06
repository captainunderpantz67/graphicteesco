// Collection-grid cover photos (public/covers/<handle>.webp): one Flow lifestyle photo per product,
// shot in the product's own world, never the same person twice (see docs/model-registry.md).
// Product-page carousels keep Printful's white-background shots.
export const covers: Record<string, { src: string; alt: string }> = {
  'womens-baseball-mom-diamond-days-graphic-tee': { src: '/covers/womens-baseball-mom-diamond-days-graphic-tee.webp', alt: 'Mom on the ballpark bleachers at golden hour wearing the Diamond Days baseball mom tee' },
  'womens-nurse-nurse-life-coffee-graphic-tee': { src: '/covers/womens-nurse-nurse-life-coffee-graphic-tee.webp', alt: 'Nurse with a coffee outside the hospital after a night shift wearing the Nurse Life Coffee tee' },
  'womens-soccer-mom-sideline-bloom-graphic-tee': { src: '/covers/womens-soccer-mom-sideline-bloom-graphic-tee.webp', alt: 'Mom on the youth soccer sideline wearing the Sideline Bloom soccer mom tee' },
  'womens-christian-grace-wins-graphic-tee': { src: '/covers/womens-christian-grace-wins-graphic-tee.webp', alt: 'Woman outside a white country church on Sunday morning wearing the Grace Wins Christian tee' },
  'womens-vintage-cropped-wildflower-club-graphic-tee': { src: '/covers/womens-vintage-cropped-wildflower-club-graphic-tee.webp', alt: 'Young woman in a wildflower meadow wearing the Wildflower Club cropped tee' },
  'womens-football-mom-game-day-graphic-tee': { src: '/covers/womens-football-mom-game-day-graphic-tee.webp', alt: 'Mom in the home bleachers at a Friday night football game wearing the Game Day football mom tee' },
  'womens-country-sweet-tea-sunsets-graphic-tee': { src: '/covers/womens-country-sweet-tea-sunsets-graphic-tee.webp', alt: 'Woman on a front porch at sunset with a glass of sweet tea wearing the Sweet Tea & Sunsets country tee' },
};

export const coverFor = (handle: string) => covers[handle] ?? null;
