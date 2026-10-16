// POST /api/custom/finalize  { design }
// Validates one shirt's design, renders the real print files (300 dpi PNG, front and back) and stores them with a
// design id. The cart line carries that id; the paid-order webhook sends exactly these files to Printful.
import wasm from '@resvg/resvg-wasm/index_bg.wasm';
import { baseUrl, errorResponse, HttpError, json, log, newId, readJson, sha256hex, type Ctx } from '../../_lib/env.ts';
import { assetHref, initRenderer, loadFonts, rasterise } from '../../_lib/render.ts';
import { KEYS, putDesign, type DesignRecord, type SideFile } from '../../_lib/storage.ts';
import { blanks } from '../../../src/data/configurator/blanks.ts';
import { templateById } from '../../../src/data/configurator/templates.ts';
import { renderDesign } from '../../../src/lib/configurator/render.ts';
import { validateDesign } from '../../../src/lib/configurator/validate.ts';

export const onRequestPost = async ({ request, env }: Ctx) => {
  try {
    if (!env.PRINT_FILES || !env.CUSTOM_KV) throw new HttpError(503, 'Custom orders are not switched on yet (storage not bound).', 'not-configured');
    const body = await readJson<{ design?: Record<string, unknown> }>(request, 50_000);
    const raw = body.design ?? {};
    const template = templateById(String(raw.template ?? ''));
    const blank = blanks.find((b) => b.id === String(raw.blank ?? ''));
    if (!template || !blank) throw new HttpError(400, 'Unknown template or shirt.');
    const v = validateDesign(raw, template, blank);
    if (!v.ok) return json({ error: v.problems[0]?.message ?? 'Please check the form.', problems: v.problems }, 422);
    const design = v.design;

    // The photo must be a cutout we made (not an arbitrary upload id).
    let photo: DesignRecord['photo'];
    if (design.answers.photo) {
      const head = await env.PRINT_FILES.head(KEYS.asset(design.answers.photo));
      if (!head || head.customMetadata?.kind !== 'cutout') throw new HttpError(422, 'That photo is not ready. Please pick it again.', 'bad-photo');
      photo = { assetId: design.answers.photo, uploadId: head.customMetadata?.upload, style: head.customMetadata?.style };
    }

    const rendered = renderDesign(design, { template, blank, imageHref: assetHref });
    await initRenderer(wasm);
    const fonts = await loadFonts(async (path) => {
      const res = await env.ASSETS.fetch(new Request(new URL(path, request.url)));
      if (!res.ok) throw new Error(`font ${path}: ${res.status}`);
      return new Uint8Array(await res.arrayBuffer());
    });
    const resolveAsset = async (id: string) => { const o = await env.PRINT_FILES.get(KEYS.asset(id)); return o ? new Uint8Array(await o.arrayBuffer()) : null; };

    const designId = newId();
    const sides: DesignRecord['sides'] = {} as DesignRecord['sides'];
    const urls: Record<string, { url: string; width: number; height: number; sha: string }> = {};
    for (const side of ['front', 'back'] as const) {
      const r = rendered[side];
      if (r.empty) continue;
      const t0 = Date.now();
      const out = await rasterise(r, fonts, resolveAsset);
      const sha = await sha256hex(out.png);
      await env.PRINT_FILES.put(KEYS.print(designId, side), out.png, {
        httpMetadata: { contentType: 'image/png', cacheControl: 'public, max-age=31536000, immutable' },
        customMetadata: { sha, designId, side, width: String(out.width), height: String(out.height) },
      });
      await env.PRINT_FILES.put(KEYS.svg(designId, side), r.svg, { httpMetadata: { contentType: 'image/svg+xml' } });
      const file: SideFile = { sha, bytes: out.png.length, width: out.width, height: out.height, topIn: r.topIn, heightIn: r.heightIn, widthIn: r.widthIn };
      sides[side] = file;
      urls[side] = { url: `/api/custom/file/${designId}/${side}.png`, width: out.width, height: out.height, sha };
      log('finalize.side', { designId, side, ms: Date.now() - t0, width: out.width, height: out.height, bytes: out.png.length });
    }
    if (!sides.front) throw new HttpError(422, 'There is nothing to print on the front yet.', 'empty');

    const color = blank.colors.find((c) => c.name === design.shirtColor)!;
    const record: DesignRecord = {
      id: designId, createdAt: new Date().toISOString(), template: template.id, blank: blank.id, printfulProductId: blank.printful,
      catalogVariantId: color.sizes[design.size]!, shirtColor: design.shirtColor, size: design.size,
      summary: rendered.summary, readback: rendered.readback, sides, ...(photo ? { photo } : {}),
    };
    await putDesign(env, record, { record, design, inks: rendered.inks, base: baseUrl(env, request) });
    log('finalize.ok', { designId, template: template.id, variant: record.catalogVariantId });
    return json({
      designId, summary: rendered.summary, readback: rendered.readback, inks: rendered.inks, sides: urls,
      sku: `custom-${blank.id}-${record.catalogVariantId}`, catalogVariantId: record.catalogVariantId, shaShort: sides.front.sha.slice(0, 12),
    });
  } catch (e) { return errorResponse(e); }
};
