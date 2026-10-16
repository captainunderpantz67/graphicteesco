// Photo pipeline: original upload -> (upscale) -> (AI style) -> background removal -> transparent PNG cutout.
// Every stage's output is saved to R2 so a design can always point at a durable file.
import { HttpError, log, newId, type Env } from './env.ts';
import { falRun, fetchBytes, toDataUri } from './fal.ts';
import { imageInfo } from './image.ts';
import { KEYS } from './storage.ts';

export const STYLE_PROMPTS: Record<string, string> = {
  vintage: "Redraw this exact subject as a faded vintage screen-print illustration for a t-shirt: muted four-color ink palette (faded red, cream, sage, navy, soft black line work), worn halftone texture, slightly cracked edges, 1970s print feel. Keep the subject's likeness, pose and expression exactly. Plain flat white background, no frame, no border, no badge, no text.",
  bootleg: "Turn this exact subject into a 1990s bootleg rap-tee style airbrushed portrait: bold saturated colors, soft airbrush shading, subtle halftone, a faint glowing edge around the subject. Keep the subject's likeness, pose and expression exactly. Plain flat white background, no frame, no border, no badge, no text.",
};

export const BG_MODEL = (env: Env) => env.FAL_BG_MODEL || 'fal-ai/birefnet/v2';
export const STYLE_MODEL = (env: Env) => env.FAL_STYLE_MODEL || 'fal-ai/flux-pro/kontext';

export interface Cutout { assetId: string; width: number; height: number; style: string }

export async function processPhoto(env: Env, uploadId: string, style: string): Promise<Cutout> {
  const orig = await env.PRINT_FILES.get(KEYS.asset(uploadId));
  if (!orig) throw new HttpError(404, 'That photo is gone from our side. Please pick it again.', 'missing-upload');
  let bytes = new Uint8Array(await orig.arrayBuffer());
  let type = orig.httpMetadata?.contentType ?? 'image/jpeg';
  let info = imageInfo(bytes);

  if (env.FAL_UPSCALE_MODEL && info && Math.min(info.width, info.height) < 1800) {
    const r = await falRun<{ image: { url: string } }>(env, env.FAL_UPSCALE_MODEL, { image_url: toDataUri(bytes, type), scale: 2 });
    ({ bytes, contentType: type } = await fetchBytes(r.image.url));
    info = imageInfo(bytes);
  }
  if (style !== 'none') {
    const prompt = STYLE_PROMPTS[style];
    if (!prompt) throw new HttpError(400, 'Pick a photo style.', 'bad-style');
    const r = await falRun<{ images: { url: string }[] }>(env, STYLE_MODEL(env), {
      prompt, image_url: toDataUri(bytes, type), output_format: 'png', guidance_scale: 3.5, safety_tolerance: '2', num_images: 1,
    });
    if (!r.images?.[0]?.url) throw new HttpError(502, 'The style step returned nothing. Please try again.', 'fal');
    ({ bytes, contentType: type } = await fetchBytes(r.images[0].url));
  }
  const bg = await falRun<{ image: { url: string; width?: number; height?: number } }>(env, BG_MODEL(env), {
    image_url: toDataUri(bytes, type), operating_resolution: '2048x2048', refine_foreground: true, output_format: 'png',
  });
  const cut = await fetchBytes(bg.image.url);
  const cutInfo = imageInfo(cut.bytes);
  if (!cutInfo) throw new HttpError(502, 'The cutout came back unreadable. Please try again.', 'fal');
  const assetId = newId();
  await env.PRINT_FILES.put(KEYS.asset(assetId), cut.bytes, {
    httpMetadata: { contentType: 'image/png', cacheControl: 'public, max-age=31536000, immutable' },
    customMetadata: { kind: 'cutout', upload: uploadId, style, width: String(cutInfo.width), height: String(cutInfo.height) },
  });
  log('photo.cutout', { uploadId, assetId, style, width: cutInfo.width, height: cutInfo.height, bytes: cut.bytes.length });
  return { assetId, width: cutInfo.width, height: cutInfo.height, style };
}
