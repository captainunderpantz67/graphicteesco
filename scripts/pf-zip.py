#!/usr/bin/env python3
"""pf-zip.py: zip-up hoodies (Gildan 18600 #692): full art on the BACK plus a small left-chest copy on the front (the zipper splits a big front print).
  pf-zip.py sync <sync_product_id> <file_id> <w> <h>          -> links the file to every variant: back (width BW px, top BT) + front 'default' chest copy (width CW px at 150 dpi)
  pf-zip.py mockup <catalog_id> <image_url> <w> <h> <variant_ids> <out.json>  -> Printful v1 mockup task with the same two placements; keys front:main / back:main plus front:Front, front:Back, front:Left, front:Right (use front:Front and front:Back for the two views)
Env: BW (back width px, default 1650), BT (back top px, default 225), CW (chest width px, default 525), CT (chest top, default 150), CX (chest centre x from the left of the 2250 px front area, default 1725 = about 4 in right of centre, the wearer's left chest)."""
import os, sys, json, time, urllib.request, urllib.error
T = os.environ['PRINTFUL_TOKEN']
def call(m, p, b=None):
    for _ in range(10):
        r = urllib.request.Request('https://api.printful.com' + p, method=m, data=json.dumps(b).encode() if b is not None else None, headers={'Authorization': 'Bearer ' + T, 'Content-Type': 'application/json', 'User-Agent': 'gtc-builder'})
        try: return json.load(urllib.request.urlopen(r, timeout=60))['result']
        except urllib.error.HTTPError as e:
            if e.code == 429: time.sleep(int(e.headers.get('Retry-After', 30)) + 2); continue
            raise Exception(f'{e.code} {e.read()[:300]}')
BW, BT, CW, CT, CX = (int(os.environ.get(k, d)) for k, d in (('BW', 1650), ('BT', 225), ('CW', 525), ('CT', 150), ('CX', 1725)))
def pos(w, h):
    back = {'area_width': 1800, 'area_height': 2400, 'width': BW, 'height': round(BW * h / w), 'top': BT, 'left': (1800 - BW) // 2}
    front = {'area_width': 2250, 'area_height': 1500, 'width': CW, 'height': round(CW * CH / CWD) if (CH := int(os.environ.get('CHEST_H', 0))) and (CWD := int(os.environ.get('CHEST_W', 1))) else round(CW * h / w), 'top': CT, 'left': CX - CW // 2}
    return front, back
cmd = sys.argv[1]
if cmd == 'sync':
    pid, fid, w, h = sys.argv[2], int(sys.argv[3]), int(sys.argv[4]), int(sys.argv[5]); front, back = pos(w, h)
    for i, v in enumerate(vs := call('GET', f'/sync/products/{pid}')['sync_variants']):
        if os.environ.get('ONLY') and os.environ['ONLY'] not in v['name']: continue
        for ft in ('default', 'front'):  # the front placement type is 'default' on most blanks, 'front' on some
            body = {'files': [{'type': ft, 'id': int(os.environ.get('CHEST_FID', fid)), 'position': front}, {'type': 'back', 'id': fid, 'position': back}]}
            if not v['synced']: body['variant_id'] = int(v['sku'].split('-')[-1])
            try: call('PUT', f'/sync/variant/{v["id"]}', body); break
            except Exception as e:
                if 'placements' not in str(e) or ft == 'front': raise
        print(f'{i + 1}/{len(vs)} {v["name"]}', flush=True); time.sleep(6)
elif cmd == 'mockup':
    cat, url, w, h, vids, out = sys.argv[2:8]; front, back = pos(int(w), int(h)); res = {}
    ids = [int(x) for x in vids.split(',')]
    for i in range(0, len(ids), 4):
        t = call('POST', f'/mockup-generator/create-task/{cat}', {'variant_ids': ids[i:i + 4], 'format': 'jpg', 'files': [{'placement': 'front', 'image_url': os.environ.get('CHEST_URL', url), 'position': front}, {'placement': 'back', 'image_url': url, 'position': back}]})
        while True:
            time.sleep(8); r = call('GET', f'/mockup-generator/task?task_key={t["task_key"]}')
            if r['status'] == 'completed': break
            if r['status'] == 'failed': sys.exit('mockup failed ' + json.dumps(r)[:400])
        for m in r['mockups']:  # one task per variant is safer: variant_ids of a chunk can share only some views
            for vid in m['variant_ids']:
                d = res.setdefault(str(vid), {}); d[m['placement'] + ':' + (m.get('option') or m.get('mockup_style') or 'main')] = m['mockup_url']
                for e in m.get('extra', []): d.setdefault(m['placement'] + ':' + e['option'], e['url'])  # extras carry the named views (Front/Back/Left/Right); main can be either view per variant
    json.dump(res, open(out, 'w'), indent=1); print(json.dumps({k: list(v) for k, v in res.items()}))
