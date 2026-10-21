#!/usr/bin/env python3
"""c-zipbuild.py (lane C, zip standard on Gildan 18600 #692; run with /usr/bin/python3)
  prep <dir> <chest_src.png> <WRIST WORD> [<back_ash.png> [<back_navy.png>]]   emb-prep chest (white + #333366) and wrist (Anton), upload all to Printful, write <dir>/ids.json (back files: pass local pngs to upload, else reuse the synced ones with --keep)
  sync <dir> <sync_pid>     paced PUT for every Ash + Navy variant (Navy catalog ids 17311-17316, Ash 32069..): chest + wrist embroidery + back DTG at full width top
  mock <dir> <sync_pid>     v2 mockups: Navy + Ash back and front (m_navy_back.jpg ...), urls.json"""
import os, sys, json, time, subprocess, urllib.request, urllib.error
from PIL import Image, ImageDraw, ImageFont
import numpy as np
T = os.environ['PRINTFUL_TOKEN']
def call(m, p, b=None):
    for _ in range(10):
        try: return json.load(urllib.request.urlopen(urllib.request.Request('https://api.printful.com' + p, method=m, data=json.dumps(b).encode() if b is not None else None, headers={'Authorization': 'Bearer ' + T, 'Content-Type': 'application/json', 'User-Agent': 'gtc'}), timeout=60))
        except urllib.error.HTTPError as e:
            if e.code == 429: time.sleep(int(e.headers.get('Retry-After', 30)) + 2); continue
            raise Exception(f'{e.code} {e.read()[:500]}')
def upload(png):
    url = subprocess.check_output([sys.executable, 'scripts/fal-host.py', png], text=True).strip()
    fid = subprocess.check_output([sys.executable, 'scripts/pf-sync.py', 'upload', url, os.path.basename(png)], text=True).strip()
    for _ in range(30):
        f = call('GET', f'/files/{fid}')['result']
        if f.get('width') and f.get('status') == 'ok': return dict(id=int(fid), url=f['url'], w=f['width'], h=f['height'])
        time.sleep(4)
NAVY = {'S': 17311, 'M': 17312, 'L': 17313, 'XL': 17314, '2XL': 17315, '3XL': 17316}
cmd, d = sys.argv[1:3]
if cmd == 'prep':
    chest, word = sys.argv[3:5]; ids = {}
    f = ImageFont.truetype('designs/fonts/Anton-Regular.ttf', 150); b = Image.new('L', (1400, 300), 255); ImageDraw.Draw(b).text((50, 40), word, font=f, fill=0); b.save(f'{d}/wrist_src.png')
    a = np.array(b) < 150; ys, xs = np.where(a); capw = xs.max() - xs.min() + 1; caph = ys.max() - ys.min() + 1
    wpx = int(105 * capw / caph)   # cap height 0.35 in = 105 px at 300 dpi
    for tag, hexc in (('white', '#FFFFFF'), ('navy', '#333366')):
        print(subprocess.check_output([sys.executable, 'scripts/emb-prep.py', chest, f'{d}/chest_{tag}.png', hexc, '1050', '18'], text=True).strip())
        print(subprocess.check_output([sys.executable, 'scripts/emb-prep.py', f'{d}/wrist_src.png', f'{d}/wrist_{tag}.png', hexc, str(wpx), '18', '600'], text=True).strip(), f'wrist word {word}: cap 105 px = 0.35 in, width {wpx / 300:.2f} in')
        ids['chest_' + tag] = upload(f'{d}/chest_{tag}.png'); ids['wrist_' + tag] = upload(f'{d}/wrist_{tag}.png')
    for tag, p in zip(('ash', 'navy'), sys.argv[5:7]):
        if p.isdigit(): ids['back_' + tag] = {'id': int(p)}
        else: ids['back_' + tag] = upload(p)
    json.dump(ids, open(f'{d}/ids.json', 'w'), indent=1); print(json.dumps({k: v['id'] for k, v in ids.items()}))
elif cmd == 'sync':
    pid = sys.argv[3]; ids = json.load(open(f'{d}/ids.json')); vs = call('GET', f'/sync/products/{pid}')['result']['sync_variants']
    cat = {v['name'].split(' / ')[2]: v['variant_id'] for v in vs if '/ Ash /' in v['name'] and v['variant_id']}
    vs = [v for v in vs if '/ Ash /' in v['name'] or '/ Navy /' in v['name']]
    for i, v in enumerate(vs):
        nv = '/ Navy /' in v['name']; sz = v['name'].split(' / ')[2]; t = 'white' if nv else 'navy'; bk = ids['back_navy' if nv else 'back_ash']['id']
        bw = ids['back_navy' if nv else 'back_ash'].get('h') and ids['back_ash']; ref = ids['back_ash'] if 'h' in ids['back_ash'] else ids.get('back_dims', {'w': 3600, 'h': 3198})
        w, h = ref['w'], ref['h']
        files = [{'type': 'embroidery_chest_left', 'id': ids['chest_' + t]['id']}, {'type': 'embroidery_wrist_left', 'id': ids['wrist_' + t]['id']}, {'type': 'back', 'id': bk, 'position': {'area_width': 1800, 'area_height': 2400, 'width': 1800, 'height': min(2360, round(1800 * h / w)), 'top': 40, 'left': 0}}]
        opts = [{'id': 'embroidery_type', 'value': 'flat'}, {'id': 'thread_colors_chest_left', 'value': ['#FFFFFF' if nv else '#333366']}, {'id': 'thread_colors_wrist_left', 'value': ['#FFFFFF' if nv else '#333366']}]
        call('PUT', f'/sync/variant/{v["id"]}', {'variant_id': NAVY[sz] if nv else cat[sz], 'files': files, 'options': opts}); print(f'{i+1}/{len(vs)} {v["name"]}', flush=True); time.sleep(6)
elif cmd == 'mock':
    ids = json.load(open(f'{d}/ids.json')); ref = ids['back_ash'] if 'h' in ids['back_ash'] else ids.get('back_dims', {'w': 3600, 'h': 3198}); BH = 12 * ref['h'] / ref['w']; out = {}
    for tag, vid, th in (('navy', 17311, 'white'), ('ash', 32069, 'navy')):
        t = '#FFFFFF' if tag == 'navy' else '#333366'
        def pl(n, k): return {'placement': n, 'technique': 'embroidery', 'layers': [{'type': 'file', 'url': ids[k]['url'], 'layer_options': [{'name': 'thread_colors', 'value': [t]}]}]}
        back = ids['back_' + tag]
        r = call('POST', '/v2/mockup-tasks', {'format': 'jpg', 'products': [{'source': 'catalog', 'catalog_product_id': 692, 'catalog_variant_ids': [vid], 'mockup_style_ids': [8531, 8532], 'placements': [pl('embroidery_chest_left', 'chest_' + th), pl('embroidery_wrist_left', 'wrist_' + th), {'placement': 'back', 'technique': 'dtg', 'layers': [{'type': 'file', 'url': back['url'], 'position': {'width': 12, 'height': min(15.7, BH), 'top': 0, 'left': 0}}]}]}]})
        tid = r['data'][0]['id']
        for _ in range(60):
            time.sleep(5); x = call('GET', f'/v2/mockup-tasks?id={tid}')['data'][0]
            if x['status'] == 'completed': break
            if x['status'] == 'failed': raise Exception(x['failure_reasons'])
        for cv in x['catalog_variant_mockups']:
            for m in cv['mockups']:
                k = 'front' if m['style_id'] == 8531 else 'back'; out[f'{tag}_{k}'] = m['mockup_url']; open(f'{d}/m_{tag}_{k}.jpg', 'wb').write(urllib.request.urlopen(m['mockup_url']).read())
    json.dump(out, open(f'{d}/urls.json', 'w'), indent=1); print(json.dumps(out, indent=1))
