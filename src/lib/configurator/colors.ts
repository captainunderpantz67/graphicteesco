// Team colors and the legibility rule (rulebook R5.3.8: light ink on dark shirts, dark ink on light).
import type { ResolvedInks } from './types.ts';

export interface TeamColor { name: string; hex: string }

// The palette she taps two from. Named the way a team mom says them.
export const TEAM_COLORS: TeamColor[] = [
  { name: 'White', hex: '#ffffff' },
  { name: 'Black', hex: '#141414' },
  { name: 'Navy', hex: '#1f2a44' },
  { name: 'Royal Blue', hex: '#2747a8' },
  { name: 'Light Blue', hex: '#8db7f6' },
  { name: 'Red', hex: '#c8102e' },
  { name: 'Maroon', hex: '#6b1f2c' },
  { name: 'Orange', hex: '#e0661f' },
  { name: 'Gold', hex: '#f2b705' },
  { name: 'Kelly Green', hex: '#1a9462' },
  { name: 'Forest Green', hex: '#223e25' },
  { name: 'Purple', hex: '#4b2a6e' },
  { name: 'Pink', hex: '#f06aa3' },
  { name: 'Teal', hex: '#0f8b8d' },
  { name: 'Silver', hex: '#c9c9c9' },
  { name: 'Cream', hex: '#f8f3e8' },
];

export const INK_LIGHT = '#f8f3e8'; // cream ink on dark shirts
export const INK_DARK = '#1c1b19'; // near-black ink on light shirts

const hexToRgb = (hex: string): [number, number, number] => {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const n = parseInt(full, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};

// WCAG relative luminance (0 = black, 1 = white).
export function luminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex).map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r! + 0.7152 * g! + 0.0722 * b!;
}

export function contrast(a: string, b: string): number {
  const la = luminance(a), lb = luminance(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

export const isDark = (hex: string) => luminance(hex) < 0.35;
export const autoInk = (shirtHex: string) => (isDark(shirtHex) ? INK_LIGHT : INK_DARK);

const MIN_FILL = 2.4; // a fill below this against the shirt is hard to read from the bleachers
const MIN_STROKE = 1.6; // the outline only needs to separate letters from the shirt

// Which of her two team colors becomes the letter fill and which the outline on this shirt. Never returns
// an unreadable pair: if both colors vanish on the shirt, the fill falls back to plain light/dark ink.
// `accent` is what a layer asking for the second color actually gets: the second color when it reads on the
// shirt, otherwise the fill (so a navy "Mom" never disappears on a navy tee).
export function resolveInks(primary: string, secondary: string, shirtHex: string): ResolvedInks {
  const c1 = contrast(primary, shirtHex), c2 = contrast(secondary, shirtHex);
  const accentFor = (fill: string, stroke: string) => (contrast(stroke, shirtHex) >= MIN_FILL ? stroke : fill);
  if (c1 >= MIN_FILL) return { fill: primary, stroke: secondary, accent: accentFor(primary, secondary), swapped: false, note: '' };
  if (c2 >= MIN_FILL) return { fill: secondary, stroke: primary, accent: secondary, swapped: true, note: 'We swapped your two colors so the letters stay readable on this shirt.' };
  const fill = autoInk(shirtHex);
  const stroke = contrast(primary, fill) >= MIN_STROKE ? primary : contrast(secondary, fill) >= MIN_STROKE ? secondary : fill;
  return { fill, stroke, accent: fill, swapped: true, note: `Your team colors are too close to this shirt color, so the letters print in ${fill === INK_LIGHT ? 'cream' : 'black'} with your team color as the outline.` };
}

export const colorName = (hex: string) => TEAM_COLORS.find((c) => c.hex.toLowerCase() === hex.toLowerCase())?.name ?? (hex === INK_LIGHT ? 'Cream' : hex === INK_DARK ? 'Black' : hex);
export const isTeamColor = (hex: string) => TEAM_COLORS.some((c) => c.hex.toLowerCase() === hex.toLowerCase());
