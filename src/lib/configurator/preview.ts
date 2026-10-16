// The on-screen shirt: a flat tee silhouette in the chosen color with the design SVG placed over the chest (or
// the back). The design SVG is the same string the server prints, scaled with a viewBox, so the preview can't
// drift from the print file. Pure function, used at build time for the first paint and in the browser after.
import type { RenderedSide } from './types.ts';
import { isDark } from './colors.ts';

// Tee silhouette in a 600 x 700 box. The 12 x 16 in print area maps to the chest rectangle below.
const TEE_PATH = 'M212 62c-26 6-74 28-112 50-22 13-36 30-46 56L30 240l72 32-6 326c0 10 8 16 18 16h372c10 0 18-6 18-16l-6-326 72-32-24-72c-10-26-24-43-46-56-38-22-86-44-112-50-10 24-44 40-88 40s-78-16-88-40z';
const BACK_COLLAR = 'M212 62c10 14 44 24 88 24s78-10 88-24';
const FRONT_COLLAR = 'M212 62c10 24 44 40 88 40s78-16 88-40';
// Chest print area: the body is about 20 in across (400 units), so 1 in = 20 units and the 12 x 16 in print
// area is 240 x 320 units, starting just under the collar.
const AREA = { x: 180, y: 112, w: 240, h: 320 }; // 12 x 16 in

export function shirtSvg(side: RenderedSide, shirtHex: string, opts: { label?: string } = {}): string {
  const dark = isDark(shirtHex);
  const line = dark ? 'rgba(255,255,255,.18)' : 'rgba(28,27,25,.22)';
  const inner = side.svg.replace(/^<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
  const scale = AREA.w / side.widthIn; // units per inch
  const y = AREA.y + side.topIn * scale;
  const h = side.heightIn * scale;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 700" role="img" aria-label="${opts.label ?? `${side.side} of the shirt`}">
<path d="${TEE_PATH}" fill="${shirtHex}" stroke="${line}" stroke-width="3" stroke-linejoin="round"/>
<path d="${side.side === 'back' ? BACK_COLLAR : FRONT_COLLAR}" fill="none" stroke="${line}" stroke-width="3"/>
<path d="M102 272l12 326M498 272l-12 326" fill="none" stroke="${line}" stroke-width="2"/>
<svg x="${AREA.x}" y="${y}" width="${AREA.w}" height="${h}" viewBox="0 ${side.topIn} ${side.widthIn} ${side.heightIn}" overflow="visible">${inner}</svg>
</svg>`;
}
