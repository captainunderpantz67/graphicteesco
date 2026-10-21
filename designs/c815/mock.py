#!/usr/bin/env python3
"""c815/mock.py <variant_id> <chest_url> <thread> <wrist_url|-> <back_url> <out.json> : v2 mockup for Gildan 18600 zip (692): chest embroidery + optional wrist embroidery + back DTG (full width, top)."""
import os, sys, json, time, urllib.request, urllib.error
T = os.environ['PRINTFUL_TOKEN']
def call(m, p, b=None):
    for _ in range(10):
        try: return json.load(urllib.request.urlopen(urllib.request.Request('https://api.printful.com' + p, method=m, data=json.dumps(b).encode() if b else None, headers={'Authorization': 'Bearer ' + T, 'Content-Type': 'application/json', 'User-Agent': 'gtc'}), timeout=60))
        except urllib.error.HTTPError as e:
            if e.code == 429: time.sleep(int(e.headers.get('Retry-After', 30)) + 2); continue
            raise Exception(f'{e.code} {e.read()[:500]}')
vid, chest, thread, wrist, back, out = sys.argv[1:7]
def pl(name, u): return {'placement': name, 'technique': 'embroidery', 'layers': [{'type': 'file', 'url': u, 'layer_options': [{'name': 'thread_colors', 'value': [thread]}]}]}
placements = [pl('embroidery_chest_left', chest)] + ([pl('embroidery_wrist_left', wrist)] if wrist != '-' else [])
BW = float(os.environ.get('BW', 12)); BH = BW * 4179 / 3435
placements.append({'placement': 'back', 'technique': 'dtg', 'layers': [{'type': 'file', 'url': back, 'position': {'width': BW, 'height': BH, 'top': 0, 'left': (12 - BW) / 2}}]})
styles = [int(x) for x in os.environ.get('STYLES', '8531,8532').split(',')]
r = call('POST', '/v2/mockup-tasks', {'format': 'jpg', 'products': [{'source': 'catalog', 'catalog_product_id': 692, 'catalog_variant_ids': [int(vid)], 'mockup_style_ids': styles, 'placements': placements}]})
tid = r['data'][0]['id']
for _ in range(60):
    time.sleep(5); d = call('GET', f'/v2/mockup-tasks?id={tid}')['data'][0]
    if d['status'] == 'completed': break
    if d['status'] == 'failed': raise Exception(d['failure_reasons'])
res = {}
for cv in d['catalog_variant_mockups']:
    for m in cv['mockups']: res.setdefault(str(cv['catalog_variant_id']), {})[f"{m['placement']}:{m['style_id']}"] = m['mockup_url']
json.dump(res, open(out, 'w'), indent=1); print(json.dumps(res, indent=1))
