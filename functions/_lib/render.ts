// Server-side print renderer: the design's SVG -> 300 dpi PNG with resvg (WebAssembly). The wasm module is
// injected by the route (Pages Functions import it as a module; tests pass the bytes), fonts are the TTF copies
// under /custom/fonts/ fetched from the site itself and cached for the life of the isolate.
import { initWasm, Resvg } from '@resvg/resvg-wasm';
import type { RenderedSide } from '../../src/lib/configurator/types.ts';
import { metrics } from '../../src/lib/configurator/metrics.ts';

let wasmReady: Promise<void> | undefined;
let fontCache: Promise<Uint8Array[]> | undefined;

export function initRenderer(wasm: WebAssembly.Module | BufferSource | Promise<unknown>): Promise<void> {
  wasmReady ??= initWasm(wasm as any).catch((e) => { wasmReady = undefined; throw e; });
  return wasmReady;
}

export const FONT_FILES = Object.values(metrics).map((m) => m.file);

export function loadFonts(fetchFont: (path: string) => Promise<Uint8Array>): Promise<Uint8Array[]> {
  fontCache ??= Promise.all(FONT_FILES.map(fetchFont)).catch((e) => { fontCache = undefined; throw e; });
  return fontCache;
}

export const ASSET_HREF_PREFIX = 'https://assets.invalid/'; // never fetched: resvg hands these back to us to resolve
export const assetHref = (id: string) => `${ASSET_HREF_PREFIX}${id}.png`;
export const assetIdFromHref = (href: string) => (href.startsWith(ASSET_HREF_PREFIX) ? href.slice(ASSET_HREF_PREFIX.length).replace(/\.png$/, '') : null);

export interface Raster { png: Uint8Array; width: number; height: number }

export async function rasterise(side: RenderedSide, fonts: Uint8Array[], resolveAsset: (id: string) => Promise<Uint8Array | null>): Promise<Raster> {
  if (!wasmReady) throw new Error('renderer not initialised');
  await wasmReady;
  const r = new Resvg(side.svg, { font: { fontBuffers: fonts, loadSystemFonts: false, defaultFontFamily: metrics.display!.family }, imageRendering: 0, shapeRendering: 2, textRendering: 2 });
  try {
    for (const href of r.imagesToResolve() as string[]) {
      const id = assetIdFromHref(href);
      const bytes = id ? await resolveAsset(id) : null;
      if (!bytes) throw new Error(`missing image asset for ${href}`);
      r.resolveImage(href, bytes);
    }
    const img = r.render();
    try {
      const png = img.asPng();
      return { png, width: img.width, height: img.height };
    } finally { img.free(); }
  } finally { r.free(); }
}
