// Text fitting without a canvas: widths come from the font's own advance table (metrics.ts), so the browser
// preview and the server print file pick the same font size for the same name. Long names shrink, nothing moves.
import { metrics } from './metrics.ts';
import type { FontRole } from './types.ts';

const FALLBACK_ADVANCE = 0.6; // em, for a glyph outside the Latin table (rare: emoji, accents we don't ship)

// Width of `text` in em units (1 em = the font size).
export function widthEm(text: string, font: FontRole, letterSpacingEm = 0): number {
  const adv = metrics[font].advances;
  let w = 0;
  for (const ch of text) w += adv[ch] ?? adv[ch.toUpperCase()] ?? FALLBACK_ADVANCE;
  return w + Math.max(0, text.length - 1) * letterSpacingEm;
}

// Largest font size (inches) at which `text` fits `maxWidthIn`, between minSizeIn and sizeIn.
export function fitSizeIn(text: string, font: FontRole, maxWidthIn: number, sizeIn: number, minSizeIn: number, letterSpacingEm = 0): number {
  const w = widthEm(text, font, letterSpacingEm);
  if (w <= 0) return sizeIn;
  const size = Math.min(sizeIn, maxWidthIn / w);
  return Math.max(minSizeIn, Math.round(size * 1000) / 1000);
}

// Width in inches at a given size.
export const widthIn = (text: string, font: FontRole, sizeIn: number, letterSpacingEm = 0) => widthEm(text, font, letterSpacingEm) * sizeIn;

// Characters the fonts can print. Anything else is refused at validation with a plain message.
export const printable = (text: string, font: FontRole) => [...text].every((ch) => ch === ' ' || metrics[font].advances[ch] !== undefined);
