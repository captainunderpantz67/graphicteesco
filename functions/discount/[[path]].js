// Shopify Collabs / affiliate links: /discount/CODE?redirect=/path&ref=... -> /apply-discount/?code=CODE&redirect=/path&ref=...
// A Pages Function keeps the whole incoming query string (a _redirects rule drops it when its target has its own query).
export function onRequest({ request, params }) {
  const url = new URL(request.url);
  const raw = Array.isArray(params.path) ? params.path[0] : params.path || '';
  let code = '';
  try { code = decodeURIComponent(raw); } catch (e) { code = raw; }
  code = code.replace(/[^A-Za-z0-9_-]/g, '').slice(0, 40);
  const dest = new URL('/apply-discount/', url.origin);
  if (code) dest.searchParams.set('code', code);
  url.searchParams.forEach((v, k) => { if (k !== 'code') dest.searchParams.append(k, v); });
  return Response.redirect(dest.toString(), 302);
}
