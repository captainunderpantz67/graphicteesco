// POST /api/custom/photo  (multipart: photo=<file>, style=none|vintage|bootleg)
// Saves the original, removes the background (and styles it if asked), returns the cutout asset id.
import { errorResponse, HttpError, json, newId, log, requireEnv, type Ctx } from '../../_lib/env.ts';
import { imageInfo, photoProblem } from '../../_lib/image.ts';
import { processPhoto } from '../../_lib/photo.ts';
import { KEYS } from '../../_lib/storage.ts';
import { MAX_STYLE_RUNS } from '../../../src/lib/configurator/pricing.ts';

export const onRequestPost = async ({ request, env }: Ctx) => {
  try {
    requireEnv(env, ['FAL_KEY', 'PRINT_FILES', 'CUSTOM_KV']);
    let form: FormData;
    try { form = await request.formData(); } catch { throw new HttpError(400, 'No photo arrived. Please pick it again.'); }
    const file = form.get('photo');
    const style = String(form.get('style') ?? 'none');
    if (!(file instanceof File)) throw new HttpError(400, 'No photo arrived. Please pick it again.');
    const bytes = new Uint8Array(await file.arrayBuffer());
    const info = imageInfo(bytes);
    const problem = photoProblem(info, bytes.length);
    if (problem) throw new HttpError(422, problem, 'bad-photo');

    const uploadId = newId();
    await env.PRINT_FILES.put(KEYS.asset(uploadId), bytes, {
      httpMetadata: { contentType: info!.type },
      customMetadata: { kind: 'upload', width: String(info!.width), height: String(info!.height) },
    });
    log('photo.upload', { uploadId, type: info!.type, width: info!.width, height: info!.height, bytes: bytes.length, style });
    const cut = await processPhoto(env, uploadId, style);
    const runs = style === 'none' ? 0 : 1;
    if (runs) await env.CUSTOM_KV.put(`regen:${uploadId}`, String(runs), { expirationTtl: 60 * 60 * 24 * 7 });
    return json({ uploadId, assetId: cut.assetId, width: cut.width, height: cut.height, style, previewUrl: `/api/custom/asset/${cut.assetId}`, runsLeft: MAX_STYLE_RUNS - runs });
  } catch (e) { return errorResponse(e); }
};
