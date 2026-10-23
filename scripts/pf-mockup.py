#!/usr/bin/env python3
"""pf-mockup.py <catalog_product_id> <front_url> <w> <h> <back_url|-> <variant_id,...> <out.json>
Printful mockup-generator task (front art fit to the 10in-wide print area top-aligned; back logo 3in top center).
Polls until done; writes {variant_id: {placement/option: url}} to out.json."""
import os, sys, json, time, urllib.request, urllib.error
T = os.environ['PRINTFUL_TOKEN']
def call(m, p, b=None):
    for _ in range(10):
        try:
            return json.load(urllib.request.urlopen(urllib.request.Request('https://api.printful.com' + p, method=m, data=json.dumps(b).encode() if b else None,
                headers={'Authorization': 'Bearer ' + T, 'Content-Type': 'application/json', 'User-Agent': 'gtc'}), timeout=60))['result']
        except urllib.error.HTTPError as e:
            if e.code == 429: time.sleep(int(e.headers.get('Retry-After', 30)) + 2); continue
            raise Exception(f'{e.code} {e.read()[:300]}')
cat, fu, w, h, bu, vids, out = sys.argv[1:8]; w, h = int(w), int(h)
pf = call('GET', f'/mockup-generator/printfiles/{cat}')
vp = pf['variant_printfiles'][0]['placements']; P = {p['printfile_id']: p for p in pf['printfiles']}
fa = P[vp['front']]; aw, ah = fa['width'], fa['height']
fw = min(aw, int(os.environ.get('FW', 1500))); nh = round(fw * h / w)  # 10 in wide at 150 dpi, 0.5 in below the top of the print area
files = [{'placement': 'front', 'image_url': fu, 'position': {'area_width': aw, 'area_height': ah, 'width': fw, 'height': nh, 'top': int(os.environ.get('TOP', 75)), 'left': int(os.environ['LEFT']) if os.environ.get('LEFT') else (aw - fw) // 2}}]
if bu != '-':
    ba = P[vp['back']]; bw = round(ba['width'] * 0.3)
    files.append({'placement': 'back', 'image_url': bu, 'position': {'area_width': ba['width'], 'area_height': ba['height'], 'width': bw, 'height': bw, 'top': 0, 'left': round((ba['width'] - bw) / 2)}})
res = {}
ids = [int(x) for x in vids.split(',')]
for i in range(0, len(ids), 4):
    chunk = ids[i:i + 4]
    t = call('POST', f'/mockup-generator/create-task/{cat}', {'variant_ids': chunk, 'format': 'jpg', 'files': files})
    while True:
        time.sleep(8)
        r = call('GET', f'/mockup-generator/task?task_key={t["task_key"]}')
        if r['status'] == 'completed': break
        if r['status'] == 'failed': sys.exit('mockup failed ' + json.dumps(r)[:400])
    for m in r['mockups']:
        for vid in m['variant_ids']:
            d = res.setdefault(str(vid), {}); d[m['placement'] + ':' + (m.get('option') or m.get('mockup_style') or 'main')] = m['mockup_url']
            for e in m.get('extra', []): d[m['placement'] + ':' + e['option']] = e['url']
json.dump(res, open(out, 'w'), indent=1); print(json.dumps(res, indent=1)[:1500])
