// Design -> SVG. One pure function used by the browser preview and by the server print renderer, so the shirt
// she sees is the file Printful prints: same fonts, same fit, same inks. Units inside the SVG are inches
// (viewBox over the blank's print area); the server rasterises at 300 dpi.
import type { Blank } from '../../data/configurator/blanks.ts';
import { sportByValue } from '../../data/configurator/sports.ts';
import { fitSizeIn, widthIn } from './fit.ts';
import { metrics } from './metrics.ts';
import { colorName, resolveInks } from './colors.ts';
import type { DesignInput, Layer, Rendered, RenderedSide, ResolvedInks, Side, Template } from './types.ts';

export const DPI = 300;
const DEFAULT_STROKE_IN = 0.06;

export interface RenderOptions {
  template: Template;
  blank: Blank;
  // How an uploaded photo is referenced: the browser points at the preview URL, the server uses "asset:<id>"
  // and swaps the bytes in before rasterising.
  imageHref?: (assetId: string) => string;
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
const num = (n: number) => String(Math.round(n * 10000) / 10000);

// "{sport} MOM" -> "FOOTBALL MOM". Any unresolved binding returns null (the layer is skipped).
function bindText(text: string, answers: Record<string, string>): string | null {
  let missing = false;
  const out = text.replace(/\{(\w+)\}/g, (_, k: string) => {
    const v = k === 'sport' ? sportByValue(answers.sport ?? '')?.word : answers[k];
    if (!v || !v.trim()) { missing = true; return ''; }
    return v.trim();
  });
  return missing ? null : out;
}

// A layer's fill is the first ink, or the readable second ink (`accent`). Its outline is always the other ink.
const inkHex = (ink: 'primary' | 'secondary' | 'auto' | undefined, inks: ResolvedInks) => (ink === 'secondary' ? inks.accent : inks.fill);
const outlineFor = (fill: string, inks: ResolvedInks) => (fill === inks.fill ? inks.stroke : inks.fill);

function textLayer(l: Extract<Layer, { kind: 'text' }>, text: string, inks: ResolvedInks): string {
  const spacing = l.letterSpacingEm ?? 0;
  const size = fitSizeIn(text, l.font, l.maxWidthIn, l.sizeIn, l.minSizeIn, spacing);
  const m = metrics[l.font];
  const fill = inkHex(l.fill, inks);
  const stroke = l.stroke ? outlineFor(fill, inks) : null;
  const attrs = [
    `font-family="${esc(m.family)}"`, `font-weight="${m.weight}"`, `font-size="${num(size)}"`,
    `fill="${fill}"`,
    stroke && stroke !== fill ? `stroke="${stroke}" stroke-width="${num(l.strokeIn ?? DEFAULT_STROKE_IN)}" stroke-linejoin="round" paint-order="stroke"` : '',
  ].filter(Boolean).join(' ');
  if (!l.arc) return `<text x="${num(l.x)}" y="${num(l.y)}" text-anchor="middle" ${spacing ? `letter-spacing="${num(spacing * size)}" ` : ''}${attrs}>${esc(text)}</text>`;
  // Arched: every glyph is placed and rotated by hand along a circle (no <textPath>, which browsers and the
  // print rasteriser space differently). Up = apex at the baseline y, letters standing on the arc.
  const R = l.arc.radiusIn, up = l.arc.dir === 'up';
  const cx = l.x, cy = up ? l.y + R : l.y - R;
  const total = widthIn(text, l.font, size, spacing);
  const glyphs: string[] = [];
  let along = -total / 2; // arc length from the apex, negative = left
  for (const ch of text) {
    const w = widthIn(ch, l.font, size);
    const mid = along + w / 2;
    const theta = mid / R; // radians from the apex
    const deg = (theta * 180) / Math.PI;
    const gx = cx + R * Math.sin(theta) * (up ? 1 : -1) * (up ? 1 : 1);
    const gy = up ? cy - R * Math.cos(theta) : cy + R * Math.cos(theta);
    if (ch !== ' ') glyphs.push(`<text x="${num(gx)}" y="${num(gy)}" text-anchor="middle" transform="rotate(${num(up ? deg : -deg)} ${num(gx)} ${num(gy)})" ${attrs}>${esc(ch)}</text>`);
    along += w + spacing * size;
  }
  return `<g>${glyphs.join('')}</g>`;
}

function renderSide(side: Side, input: DesignInput, o: RenderOptions, inks: ResolvedInks): RenderedSide {
  const { template: t, blank } = o;
  const spec = t.sides[side];
  const wIn = blank.printArea.widthIn;
  const parts: string[] = [];
  const images: { href: string; assetId: string }[] = [];
  t[side].forEach((l) => {
    if (l.kind === 'text') {
      const text = bindText(l.text, input.answers);
      if (text) parts.push(textLayer(l, text, inks));
    } else if (l.kind === 'image') {
      const id = input.answers.photo;
      if (!id) return;
      const href = o.imageHref ? o.imageHref(id) : `asset:${id}`;
      images.push({ href, assetId: id });
      parts.push(`<image href="${esc(href)}" xlink:href="${esc(href)}" x="${num(l.x - l.wIn / 2)}" y="${num(l.y)}" width="${num(l.wIn)}" height="${num(l.hIn)}" preserveAspectRatio="xMidYMid meet"/>`);
    } else if (l.kind === 'icon') {
      const sport = sportByValue(input.answers.sport ?? '');
      if (!sport) return;
      const s = l.sizeIn / 24;
      parts.push(`<g transform="translate(${num(l.x - l.sizeIn / 2)} ${num(l.y)}) scale(${num(s)})">${sport.icon.replace(/currentColor/g, inkHex(l.fill, inks))}</g>`);
    }
  });
  const widthPx = Math.round(wIn * DPI), heightPx = Math.round(spec.heightIn * DPI);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${widthPx}" height="${heightPx}" viewBox="0 ${num(spec.topIn)} ${num(wIn)} ${num(spec.heightIn)}">${parts.join('')}</svg>`;
  return { side, svg, widthPx, heightPx, topIn: spec.topIn, widthIn: wIn, heightIn: spec.heightIn, images, empty: parts.length === 0 };
}

// The "Does this look right?" list. Everything that prints, spelled exactly as it prints.
function readback(input: DesignInput, t: Template, inks: ResolvedInks, blank: Blank): { label: string; value: string }[] {
  const out: { label: string; value: string }[] = [];
  const a = input.answers;
  for (const s of t.steps) {
    if (s.type === 'choice') { const opt = s.options.find((x) => x.value === a[s.key]); if (opt) out.push({ label: s.label, value: opt.label }); }
    else if (s.type === 'text') { if (a[s.key]?.trim()) out.push({ label: s.label, value: `“${a[s.key].trim()}”` }); }
    else if (s.type === 'players') {
      if (a.playerName?.trim()) out.push({ label: 'Back', value: `“${a.playerName.trim()}”${a.playerNumber ? ` over the number ${a.playerNumber}` : ''}` });
    } else if (s.type === 'colors') {
      out.push({ label: 'Letters', value: `${colorName(inks.fill)}${inks.stroke !== inks.fill ? ` with a ${colorName(inks.stroke)} outline` : ''}` });
    } else if (s.type === 'photo') {
      if (a.photo) out.push({ label: 'Photo', value: s.styles.find((x) => x.value === (a.style ?? 'none'))?.label ?? 'Your photo' });
    }
  }
  const shirt = blank.colors.find((c) => c.name === input.shirtColor);
  out.push({ label: 'Shirt', value: `${shirt?.name ?? input.shirtColor} ${blank.garment}, size ${input.size}` });
  return out;
}

export function renderDesign(input: DesignInput, o: RenderOptions): Rendered {
  const shirt = o.blank.colors.find((c) => c.name === input.shirtColor);
  const inks = resolveInks(input.colors.primary, input.colors.secondary, shirt?.hex ?? '#ffffff');
  const front = renderSide('front', input, o, inks);
  const back = renderSide('back', input, o, inks);
  const rb = readback(input, o.template, inks, o.blank);
  const a = input.answers;
  const bits = [o.template.name.split(':')[0]];
  if (a.teamName) bits.push(a.teamName.trim());
  if (a.sport) bits.push(sportByValue(a.sport)?.label ?? a.sport);
  if (a.playerName) bits.push(`Back: ${a.playerName.trim()}${a.playerNumber ? ` #${a.playerNumber}` : ''}`);
  if (a.caption) bits.push(`“${a.caption.trim()}”`);
  if (a.photo) bits.push(`photo (${a.style ?? 'none'})`);
  bits.push(`${colorName(inks.fill)}/${colorName(inks.stroke)}`);
  bits.push(`${input.shirtColor} ${o.blank.garment}, ${input.size}`);
  return { front, back, inks, readback: rb, summary: bits.join(' · ') };
}
