// GET /api/custom/file/<designId>/<front|back>.png  — the print file Printful downloads for the order.
import { errorResponse, HttpError, type Ctx } from '../../../../_lib/env.ts';
import { KEYS } from '../../../../_lib/storage.ts';

export const onRequestGet = async ({ params, env }: Ctx) => {
  try {
    const id = String(params.id ?? '');
    const side = String(params.side ?? '').replace(/\.png$/, '');
    if (!/^[a-z0-9]{20,40}$/.test(id) || (side !== 'front' && side !== 'back')) throw new HttpError(404, 'Not found.');
    const obj = await env.PRINT_FILES.get(KEYS.print(id, side));
    if (!obj) throw new HttpError(404, 'Not found.');
    return new Response(obj.body, {
      headers: {
        'content-type': 'image/png', 'content-length': String(obj.size), etag: obj.httpEtag,
        'cache-control': 'public, max-age=31536000, immutable', 'content-disposition': `inline; filename="${id}-${side}.png"`, 'x-content-type-options': 'nosniff',
      },
    });
  } catch (e) { return errorResponse(e); }
};
