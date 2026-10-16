// POST /api/custom/style  { uploadId, style }
// Re-runs the styling on an uploaded photo. Capped at MAX_STYLE_RUNS (the first + 2 regenerations) per photo,
// enforced here, not just in the browser.
import { errorResponse, HttpError, json, readJson, requireEnv, type Ctx } from '../../_lib/env.ts';
import { processPhoto } from '../../_lib/photo.ts';
import { MAX_STYLE_RUNS } from '../../../src/lib/configurator/pricing.ts';

const ID_RE = /^[a-z0-9]{20,40}$/;

export const onRequestPost = async ({ request, env }: Ctx) => {
  try {
    requireEnv(env, ['FAL_KEY', 'PRINT_FILES', 'CUSTOM_KV']);
    const body = await readJson<{ uploadId?: string; style?: string }>(request, 10_000);
    const uploadId = String(body.uploadId ?? '');
    const style = String(body.style ?? 'none');
    if (!ID_RE.test(uploadId)) throw new HttpError(400, 'That photo did not upload properly. Please pick it again.');
    if (!['none', 'vintage', 'bootleg'].includes(style)) throw new HttpError(400, 'Pick a photo style.');
    const key = `regen:${uploadId}`;
    const used = Number((await env.CUSTOM_KV.get(key)) ?? 0);
    if (style !== 'none' && used >= MAX_STYLE_RUNS) throw new HttpError(429, `You've used both redos for this photo. Pick the version you like best, or choose a different photo.`, 'regen-cap');
    const cut = await processPhoto(env, uploadId, style);
    const runs = style === 'none' ? used : used + 1;
    if (runs !== used) await env.CUSTOM_KV.put(key, String(runs), { expirationTtl: 60 * 60 * 24 * 7 });
    return json({ uploadId, assetId: cut.assetId, width: cut.width, height: cut.height, style, previewUrl: `/api/custom/asset/${cut.assetId}`, runsLeft: Math.max(0, MAX_STYLE_RUNS - runs) });
  } catch (e) { return errorResponse(e); }
};
