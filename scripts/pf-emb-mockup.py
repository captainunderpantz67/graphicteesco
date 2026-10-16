#!/usr/bin/env python3
"""pf-emb-mockup.py <catalog_product_id> <chest_url> <thread hex> <front_style_id> <back_style_id> <variant_id,...> <out.json> [<cuff_url>]: Printful v2 mockup task for an embroidered chest (+ wrist) design.
Also puts the Graphic Tees Co. back logo (3 in, top center) on the back view. Writes {variant_id: {front: url, back: url}}. Flat style ids: 145 uses 1139 front / 1140 back, 146 uses 1402 / 1403."""
import os, sys, json, time, urllib.request, urllib.error
T = os.environ['PRINTFUL_TOKEN']
def call(m, p, b=None):
    for _ in range(10):
        try: return json.load(urllib.request.urlopen(urllib.request.Request('https://api.printful.com' + p, method=m, data=json.dumps(b).encode() if b else None,
            headers={'Authorization': 'Bearer ' + T, 'Content-Type': 'application/json', 'User-Agent': 'gtc'}), timeout=60))
        except urllib.error.HTTPError as e:
            if e.code == 429: time.sleep(int(e.headers.get('Retry-After', 30)) + 2); continue
            raise Exception(f'{e.code} {e.read()[:400]}')
cat, url, thread, fs, bs, vids, out = sys.argv[1:8]; cuff = sys.argv[8] if len(sys.argv) > 8 else None
def pl(name, u): return {'placement': name, 'technique': 'embroidery', 'layers': [{'type': 'file', 'url': u, 'layer_options': [{'name': 'thread_colors', 'value': [thread]}]}]}
placements = [pl('embroidery_chest_center', url)] + ([pl('embroidery_wrist_left', cuff)] if cuff else [])
LOGO = os.environ.get('BACKLOGO', 'https://files.cdn.printful.com/files/51f/51f0c46f739b8b79665a0cb5158e8e73_preview.png')
placements.append({'placement': 'back', 'technique': 'dtg', 'layers': [{'type': 'file', 'url': LOGO, 'position': {'width': 3, 'height': 3, 'top': 0, 'left': 4.5}}]})  # back logo, 3 in wide, top center (12 in print area)
ids = [int(x) for x in vids.split(',')]
r = call('POST', '/v2/mockup-tasks', {'format': 'jpg', 'products': [{'source': 'catalog', 'catalog_product_id': int(cat), 'catalog_variant_ids': ids, 'mockup_style_ids': [int(fs), int(bs)], 'placements': placements}]})
tid = r['data'][0]['id']
for _ in range(60):
    time.sleep(5); d = call('GET', f'/v2/mockup-tasks?id={tid}')['data'][0]
    if d['status'] == 'completed': break
    if d['status'] == 'failed': raise Exception(d['failure_reasons'])
res = {}
for c in d['catalog_variant_mockups']:
    for m in c['mockups']: res.setdefault(str(c['catalog_variant_id']), {})['front' if m['style_id'] == int(fs) else 'back'] = m['mockup_url']
json.dump(res, open(out, 'w'), indent=1); print(json.dumps(res)[:300])
