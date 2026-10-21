#!/usr/bin/env python3
"""e-ess-go.py <dir> <shopify product number> <mockup variant id> <model style 28710 men|28713 women>: finds the Printful sync product of a new Essentials draft (waits for the import),
syncs every variant to chest file 1090961074 (resumes if killed), makes 4 mockups into <dir>, prints sync id, N/N and the model/back/flat mockup URLs."""
import os, sys, json, subprocess, time, urllib.request
d, ext, vid, sty = sys.argv[1:5]; os.makedirs(d, exist_ok=True)
H = {'Authorization': 'Bearer ' + os.environ['PRINTFUL_TOKEN'], 'User-Agent': 'gtc'}
def get(p): return json.load(urllib.request.urlopen(urllib.request.Request('https://api.printful.com' + p, headers=H), timeout=60))['result']
pid = None
for _ in range(30):
    for p in get('/sync/products?limit=30'):
        if p['external_id'] == ext: pid = p['id']
    if pid: break
    time.sleep(10)
print('sync', pid, flush=True)
fu = get('/files/1090961074')['url']
subprocess.run([sys.executable, 'scripts/e-ess.py', 'sync', str(pid), '1090961074', '#E25C27'], check=True, stdout=subprocess.DEVNULL)
vs = get(f'/sync/products/{pid}')['sync_variants']; print('synced', sum(1 for v in vs if v['synced'] and any(f['type'] == 'embroidery_chest_left' and f['id'] == 1090961074 for f in v['files'])), len(vs), flush=True)
print(subprocess.check_output([sys.executable, 'scripts/e-ess.py', 'mockup', fu, '#E25C27', vid, f'28668,28669,28675,{sty}', d + '/mk'], text=True))
