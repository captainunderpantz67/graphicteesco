// GET /api/custom/asset/<id>  — an uploaded photo or its cutout (ids are unguessable, so no auth).
import { errorResponse, HttpError, type Ctx } from '../../../_lib/env.ts';
import { KEYS } from '../../../_lib/storage.ts';

export const onRequestGet = async ({ params, env }: Ctx) => {
  try {
    const id = String(params.id ?? '').replace(/\.png$/, '');
    if (!/^[a-z0-9]{20,40}$/.test(id)) throw new HttpError(404, 'Not found.');
    const obj = await env.PRINT_FILES.get(KEYS.asset(id));
    if (!obj) throw new HttpError(404, 'Not found.');
    return new Response(obj.body, { headers: { 'content-type': obj.httpMetadata?.contentType ?? 'image/png', 'cache-control': 'public, max-age=31536000, immutable', etag: obj.httpEtag, 'x-content-type-options': 'nosniff' } });
  } catch (e) { return errorResponse(e); }
};
