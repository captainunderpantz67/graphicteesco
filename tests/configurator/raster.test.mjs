// Print files: the server renderer turns the SVG into a 300 dpi PNG of the right size with real ink in it.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { initWasm, Resvg } from '@resvg/resvg-wasm';
import { initRenderer, loadFonts, rasterise, assetHref } from '../../functions/_lib/render.ts';
import { renderDesign } from '../../src/lib/configurator/render.ts';
import { templateById } from '../../src/data/configurator/templates.ts';
import { blanks } from '../../src/data/configurator/blanks.ts';
import { imageInfo } from '../../functions/_lib/image.ts';

const ROOT = new URL('../../', import.meta.url);
const wasm = readFileSync(new URL('node_modules/@resvg/resvg-wasm/index_bg.wasm', ROOT));
const blank = blanks[0];
const OUT = new URL('../../.test-out/', ROOT);
mkdirSync(OUT, { recursive: true });

await initRenderer(wasm);
const fonts = await loadFonts(async (p) => readFileSync(new URL('public' + p, ROOT)));

const opaqueFraction = (png) => {
  const img = new Resvg(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><image href="data:image/png;base64,${Buffer.from(png).toString('base64')}" width="200" height="200" preserveAspectRatio="xMidYMid meet"/></svg>`).render();
  const px = img.pixels; let n = 0;
  for (let i = 3; i < px.length; i += 4) if (px[i] > 0) n++;
  return n / (px.length / 4);
};

test('raster: sports-mom front and back are 3600 px wide, 300 dpi sized, transparent with ink', async () => {
  const r = renderDesign({ template: 'sports-mom', blank: 'bc3001', shirtColor: 'Navy', size: 'L', colors: { primary: '#f2b705', secondary: '#1f2a44' }, answers: { sport: 'football', playerName: 'MATEJA', playerNumber: '78' } }, { template: templateById('sports-mom'), blank });
  for (const side of ['front', 'back']) {
    const out = await rasterise(r[side], fonts, async () => null);
    assert.equal(out.width, 3600);
    assert.equal(out.height, Math.round(templateById('sports-mom').sides[side].heightIn * 300));
    assert.deepEqual([...out.png.slice(0, 4)], [0x89, 0x50, 0x4e, 0x47]);
    const frac = opaqueFraction(out.png);
    assert.ok(frac > 0.05 && frac < 0.6, `${side} ink coverage ${frac}`);
    writeFileSync(new URL(`sports-mom-${side}.png`, OUT), out.png);
  }
});

test('raster: a photo design pulls the cutout from storage by asset id', async () => {
  const blob = new Resvg('<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><ellipse cx="400" cy="330" rx="260" ry="200" fill="#c2461f"/></svg>').render().asPng();
  const r = renderDesign({ template: 'photo-bootleg', blank: 'bc3001', shirtColor: 'Black', size: 'M', colors: { primary: '#f8f3e8', secondary: '#c8102e' }, answers: { photo: 'abcdefghijklmnopqrstuvwx', style: 'none', caption: 'BUDDY' } }, { template: templateById('photo-bootleg'), blank, imageHref: assetHref });
  let asked = null;
  const out = await rasterise(r.front, fonts, async (id) => { asked = id; return blob; });
  assert.equal(asked, 'abcdefghijklmnopqrstuvwx');
  assert.equal(out.width, 3600);
  assert.ok(opaqueFraction(out.png) > 0.1);
  await assert.rejects(() => rasterise(r.front, fonts, async () => null), /missing image asset/);
  // photoCrop zooms to the subject's box: more ink in the same print box
  const cropped = renderDesign({ template: 'photo-bootleg', blank: 'bc3001', shirtColor: 'Black', size: 'M', colors: { primary: '#f8f3e8', secondary: '#c8102e' }, answers: { photo: 'abcdefghijklmnopqrstuvwx', style: 'none', caption: 'BUDDY', photoCrop: '140 130 520 400 800 600' } }, { template: templateById('photo-bootleg'), blank, imageHref: assetHref });
  assert.match(cropped.front.svg, /viewBox="140 130 520 400"/);
  const out2 = await rasterise(cropped.front, fonts, async () => blob);
  assert.ok(opaqueFraction(out2.png) > opaqueFraction(out.png));
  // a bad crop string is ignored, never an error
  const bad = renderDesign({ template: 'photo-bootleg', blank: 'bc3001', shirtColor: 'Black', size: 'M', colors: { primary: '#f8f3e8', secondary: '#c8102e' }, answers: { photo: 'abcdefghijklmnopqrstuvwx', style: 'none', photoCrop: '900 0 100 100 800 600' } }, { template: templateById('photo-bootleg'), blank, imageHref: assetHref });
  assert.ok(!bad.front.svg.includes('viewBox="900'));
});

test('image: header sniffing reads PNG and JPEG sizes and refuses tiny photos', () => {
  const png = new Resvg('<svg xmlns="http://www.w3.org/2000/svg" width="33" height="21"></svg>').render().asPng();
  assert.deepEqual(imageInfo(png), { type: 'image/png', width: 33, height: 21 });
  // minimal JPEG: SOI, SOF0 with 1200x900, EOI
  const jpg = Uint8Array.from([0xff, 0xd8, 0xff, 0xc0, 0x00, 0x11, 0x08, 0x03, 0x84, 0x04, 0xb0, 0x03, 0x01, 0x22, 0x00, 0x02, 0x11, 0x01, 0x03, 0x11, 0x01, 0xff, 0xd9]);
  assert.deepEqual(imageInfo(jpg), { type: 'image/jpeg', width: 1200, height: 900 });
  assert.equal(imageInfo(new Uint8Array([1, 2, 3, 4, 5])), null);
});
