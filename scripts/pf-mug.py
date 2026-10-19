#!/usr/bin/env python3
"""pf-mug.py <id> <handle> <shopify numeric id> <printful file id> <fal url of file> <alt> <kw:vol:kd> <art png>
Printful #19 11 oz mug (variant 1320, printfile 2700 x 1050): finds the sync product, links the file, makes the mockups (every view),
saves public/covers/<handle>.webp (first mockup), writes /tmp/reg-<id>.json for b-orn-reg.py-style registration and /tmp/mugviews-<id>.json, builds the review sheet."""
import os, sys, json, time, urllib.request, urllib.error, subprocess
from pathlib import Path
n, handle, sid, fid, furl, alt, kw, art = sys.argv[1:9]
T = os.environ['PRINTFUL_TOKEN']; ROOT = Path(__file__).resolve().parent.parent
def call(m, p, b=None):
    for _ in range(10):
        try:
            return json.load(urllib.request.urlopen(urllib.request.Request('https://api.printful.com' + p, method=m, data=json.dumps(b).encode() if b is not None else None,
                headers={'Authorization': 'Bearer ' + T, 'Content-Type': 'application/json', 'User-Agent': 'gtc-builder'}), timeout=90))['result']
        except urllib.error.HTTPError as e:
            if e.code == 429: time.sleep(int(e.headers.get('Retry-After', 30)) + 2); continue
            raise Exception(f'{e.code} {e.read()[:400]}')
pos = {'area_width': 2700, 'area_height': 1050, 'width': 2700, 'height': 1050, 'top': 0, 'left': 0}
sp = None
for _ in range(12):
    for off in (0, 20, 40):
        sp = next((p for p in call('GET', f'/sync/products?limit=20&offset={off}') if p['external_id'] == sid), None)
        if sp: break
    if sp: break
    time.sleep(10)
if not sp: sys.exit('no sync product yet')
sv = call('GET', f'/sync/products/{sp["id"]}')['sync_variants'][0]
call('PUT', f'/sync/variant/{sv["id"]}', {'variant_id': 1320, 'files': [{'type': 'default', 'id': int(fid), 'position': pos}]})
chk = call('GET', f'/sync/products/{sp["id"]}')['sync_variants'][0]; print('sync product', sp['id'], 'synced', chk['synced'], [(f['type'], f['id']) for f in chk['files'] if f['type'] != 'preview'])
t = call('POST', '/mockup-generator/create-task/19', {'variant_ids': [1320], 'format': 'jpg', 'files': [{'placement': 'default', 'image_url': furl, 'position': pos}]})
while True:
    time.sleep(8); r = call('GET', f'/mockup-generator/task?task_key={t["task_key"]}')
    if r['status'] == 'completed': break
    if r['status'] == 'failed': sys.exit('failed ' + json.dumps(r)[:400])
urls = []
for m in r['mockups']:
    urls.append(m['mockup_url']); urls += [e['url'] for e in m.get('extra', [])]
json.dump(urls, open(f'/tmp/mugviews-{n}.json', 'w'), indent=1)
for i, u in enumerate(urls): urllib.request.urlretrieve(u, f'/tmp/mug-{n}-{i}.jpg')
print(len(urls), 'views', urls)
json.dump({'handle': handle, 'alt': alt, 'kw': kw}, open(f'/tmp/reg-{n}.json', 'w'))
