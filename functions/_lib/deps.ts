// Wires the real Cloudflare bindings into the pure handoff orchestration.
import { baseUrl, log, type Env } from './env.ts';
import type { HandoffDeps } from './handoff.ts';
import { printfulClient } from './printful.ts';
import { getDesign, getOrder, printFileInfo, putOrder } from './storage.ts';
import { alert, notify } from './telegram.ts';

export const printFileUrl = (env: Env, request: Request, designId: string, side: 'front' | 'back') => `${baseUrl(env, request)}/api/custom/file/${designId}/${side}.png`;

export function handoffDeps(env: Env, request: Request): HandoffDeps {
  return {
    getOrder: (id) => getOrder(env, id),
    putOrder: (rec) => putOrder(env, rec),
    getDesign: (id) => getDesign(env, id),
    printFileInfo: (id, side) => printFileInfo(env, id, side),
    fileUrl: (id, side) => printFileUrl(env, request, id, side),
    printful: printfulClient(env),
    confirm: env.PRINTFUL_CONFIRM === 'true',
    alert: (what, did, options) => alert(env, what, did, options),
    notify: (text) => notify(env, text),
    now: () => Date.now(),
    log,
  };
}
