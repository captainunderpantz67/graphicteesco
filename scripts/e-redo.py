#!/usr/bin/env python3
"""e-redo.py <dir> <sync_product_id> <catalog_id> <FW> <TOP> Color=print.png [Color=print2.png ...]
Lane E redo helper: hosts each print on fal, uploads to Printful, starts the paced setfile per color in the background
(logs <dir>/sync_<Color>.log, ids <dir>/id_<Color>), and makes one front mockup per color (<dir>/mk_<Color>.json).
Reads PRINTFUL_TOKEN / FAL_KEY from the environment; prints no secrets."""
import os, sys, json, subprocess, time, shlex, urllib.request
d, pid, cat, fw, top = sys.argv[1:6]; pairs = [a.split('=', 1) for a in sys.argv[6:]]
H = {'Authorization': 'Bearer ' + os.environ['PRINTFUL_TOKEN'], 'User-Agent': 'gtc'}
def get(p): return json.load(urllib.request.urlopen(urllib.request.Request('https://api.printful.com' + p, headers=H), timeout=60))['result']
vs = get(f'/sync/products/{pid}')['sync_variants']; env = dict(os.environ, FW=fw, TOP=top, FORCE='1'); out = {}
for color, png in pairs:
    url = subprocess.check_output([sys.executable, 'scripts/fal-host.py', png], text=True).strip()
    fid = subprocess.check_output([sys.executable, 'scripts/pf-sync.py', 'upload', url, os.path.basename(png)], text=True).strip()
    open(f'{d}/id_{color}', 'w').write(fid); out[color] = fid
    for _ in range(30):
        f = get(f'/files/{fid}')
        if f.get('width') and f.get('status') == 'ok': break
        time.sleep(4)
    out[color + '_wh'] = (f['width'], f['height'], f['url'])
    print(color, fid, f['width'], f['height'], flush=True)
cmds = ' ; '.join(f"ONLY={shlex.quote(f'/ {c} /')} {sys.executable} scripts/pf-sync.py setfile {pid} {out[c]} > {shlex.quote(d + '/sync_' + c.replace(' ', '_') + '.log')} 2>&1" for c, _ in pairs)
subprocess.Popen(['bash', '-c', cmds], env=env, start_new_session=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
for c, _ in pairs:
    v = next(v for v in vs if f' / {c} / M' in v['name'] or f' / {c} / L' in v['name'])
    w, h, u = out[c + '_wh']
    subprocess.run([sys.executable, 'scripts/pf-mockup.py', cat, u, str(w), str(h), '-', str(v['variant_id']), f'{d}/mk_{c}.json'], env=env, check=True, stdout=subprocess.DEVNULL)
    m = json.load(open(f'{d}/mk_{c}.json')); print(c, 'MOCKUP', list(m.values())[0]['front:main'])
