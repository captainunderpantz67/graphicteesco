// fal.ai calls (synchronous endpoint). Inputs go in as data URIs so nothing has to be publicly hosted first.
import { HttpError, log, type Env } from './env.ts';

export async function falRun<T = any>(env: Env, model: string, input: Record<string, unknown>, timeoutMs = 120_000): Promise<T> {
  if (!env.FAL_KEY) throw new HttpError(503, 'Photo processing is not switched on yet (missing setting: FAL_KEY).', 'not-configured');
  const t0 = Date.now();
  let res: Response;
  try {
    res = await fetch(`https://fal.run/${model}`, {
      method: 'POST',
      headers: { Authorization: `Key ${env.FAL_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
      signal: AbortSignal.timeout(timeoutMs),
    });
  } catch (e) {
    log('fal.timeout', { model, ms: Date.now() - t0 });
    throw new HttpError(504, 'That took too long. Please try the photo again.', 'timeout');
  }
  if (!res.ok) {
    const body = (await res.text()).slice(0, 300);
    log('fal.error', { model, status: res.status, body });
    if (res.status === 422) throw new HttpError(422, 'We could not work with that photo. Try a clearer one with the subject in the middle.', 'bad-photo');
    throw new HttpError(502, 'The photo service hiccuped. Please try again.', 'fal');
  }
  log('fal.ok', { model, ms: Date.now() - t0 });
  return (await res.json()) as T;
}

export function toDataUri(bytes: Uint8Array, contentType: string): string {
  let bin = '';
  const CHUNK = 0x8000;
  for (let i = 0; i < bytes.length; i += CHUNK) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + CHUNK) as unknown as number[]);
  return `data:${contentType};base64,${btoa(bin)}`;
}

export async function fetchBytes(url: string, maxBytes = 40_000_000): Promise<{ bytes: Uint8Array; contentType: string }> {
  const res = await fetch(url, { signal: AbortSignal.timeout(60_000) });
  if (!res.ok) throw new HttpError(502, 'Could not fetch the processed photo.', 'fal-fetch');
  const buf = await res.arrayBuffer();
  if (buf.byteLength > maxBytes) throw new HttpError(413, 'The processed photo is too large.', 'too-large');
  return { bytes: new Uint8Array(buf), contentType: res.headers.get('content-type') ?? 'image/png' };
}
