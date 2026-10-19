#!/usr/bin/env python3
"""b-orn-pf.py <id> <handle> <shopify numeric id> <printful file id> <fal url of file> <alt text> <kw:vol:kd> <art png>
After the Shopify productSet: finds the Printful sync variant, links the print file, makes the #881 mockup, saves public/covers/<handle>.webp,
adds the covers.ts line, the keyword-map entry and the review sheet; prints the mockup URL for productCreateMedia."""
import os, sys, json, time, subprocess, urllib.request
from pathlib import Path
n, handle, sid, fid, furl, alt, kw, art = sys.argv[1:9]
T = os.environ['PRINTFUL_TOKEN']; ROOT = Path(__file__).resolve().parent.parent
def call(m, p, b=None):
    return json.load(urllib.request.urlopen(urllib.request.Request('https://api.printful.com' + p, method=m, data=json.dumps(b).encode() if b is not None else None,
        headers={'Authorization': 'Bearer ' + T, 'Content-Type': 'application/json', 'User-Agent': 'gtc-builder'}), timeout=90))['result']
sp = None
for _ in range(12):
    r = call('GET', f'/sync/products?limit=20&offset=0')
    sp = next((p for p in r if p['external_id'] == sid), None)
    if sp: break
    time.sleep(10)
if not sp: sys.exit('no sync product yet')
sv = call('GET', f'/sync/products/{sp["id"]}')['sync_variants'][0]
subprocess.run(['python3', str(ROOT / 'scripts/pf-orn.py'), 'sync', str(sv['id']), fid], check=True, capture_output=True)
chk = call('GET', f'/sync/products/{sp["id"]}')['sync_variants'][0]; print('sync product', sp['id'], 'synced', chk['synced'])
mj = f'/tmp/mock-{n}.json'
subprocess.run(['python3', str(ROOT / 'scripts/pf-orn.py'), 'mockup', furl, mj], check=True, capture_output=True)
url = json.load(open(mj))['main:front']; jpg = f'/tmp/m-{n}.jpg'; urllib.request.urlretrieve(url, jpg)
from PIL import Image
Image.open(jpg).convert('RGB').save(ROOT / f'public/covers/{handle}.webp', 'WEBP', quality=88)
json.dump({'handle': handle, 'alt': alt, 'kw': kw}, open(f'/tmp/reg-{n}.json', 'w'))
subprocess.run(['python3', str(ROOT / 'scripts/review-sheet.py'), n, art, str(ROOT / f'public/covers/{handle}.webp'), jpg], check=True)
print('MOCKUP', url)
