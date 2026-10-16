#!/usr/bin/env python3
"""Run cohesion-audit --handle on a DRAFT from the build spec (no Storefront needed):
audit-local.py <spec.json> <media.json [{url,alt,color|null}]>  (collections = the spec's collection tags)"""
import json, re, sys, subprocess, html, tempfile
s = json.load(open(sys.argv[1])); media = json.load(open(sys.argv[2]))
text = html.unescape(re.sub(r'<[^>]+>', ' ', s['descriptionHtml'])); text = re.sub(r'\s+', ' ', text).strip()
sizes = s.get('sizes') or ['S', 'M', 'L', 'XL', '2XL', '3XL']
byc = {m['color']: m['url'] for m in media if m.get('color')}
vs = [{'price': {'amount': s['price']}, 'compareAtPrice': {'amount': s['compare']}, 'selectedOptions': [{'name': 'Color', 'value': c}, {'name': 'Size', 'value': z}], 'image': {'url': byc.get(c)}} for c in s['colors'] for z in sizes]
p = {'handle': s['handle'], 'title': s['title'], 'productType': s['productType'], 'tags': s['tags'], 'seo': s['seo'], 'description': text,
     'images': {'nodes': [{'url': m['url'], 'altText': m['alt']} for m in media]}, 'variants': {'nodes': vs},
     'collections': {'nodes': [{'handle': t} for t in s['tags'] if t not in ('ai-art', 'intake-done')]}}
f = tempfile.NamedTemporaryFile('w', suffix='.json', delete=False); json.dump({s['handle']: p}, f); f.close()
r = subprocess.run(['node', 'scripts/cohesion-audit.mjs', '--handle', s['handle'], '--admin-json', f.name], capture_output=True, text=True); print(r.stdout[-3000:], r.stderr[-1500:])
