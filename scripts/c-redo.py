#!/usr/bin/env python3
"""c-redo.py <dir> <sync_product_id> <catalog_id> <FW> <TOP> Color=print.png [Color=print.png ...]   (lane C pullover/crewneck redo)
Hosts each print on fal, uploads to Printful, starts the paced setfile per color in the background (<dir>/sync_<Color>.log),
then makes one front mockup per color (<dir>/mock_<Color>.json) and downloads <dir>/m_<Color>.jpg. Color 'ALL' links every variant.
A Color may be 'A+B' to take several colors from one file (mockup is made for each)."""
import shlex, os, sys, json, subprocess, time, urllib.request
from PIL import Image
d, pid, cat, fw, top = sys.argv[1:6]; pairs = [a.split('=', 1) for a in sys.argv[6:]]
H = {'Authorization': 'Bearer ' + os.environ['PRINTFUL_TOKEN'], 'User-Agent': 'gtc'}
def get(p): return json.load(urllib.request.urlopen(urllib.request.Request('https://api.printful.com' + p, headers=H), timeout=60))['result']
vs = get(f'/sync/products/{pid}')['sync_variants']; env = dict(os.environ, FW=fw, TOP=top, FORCE='1'); info = {}
for colors, png in pairs:
    url = subprocess.check_output([sys.executable, 'scripts/fal-host.py', png], text=True).strip()
    fid = subprocess.check_output([sys.executable, 'scripts/pf-sync.py', 'upload', url, os.path.basename(png)], text=True).strip()
    for _ in range(30):
        f = get(f'/files/{fid}')
        if f.get('width') and f.get('status') == 'ok': break
        time.sleep(4)
    info[colors] = (fid, f['width'], f['height'], f['url']); print(colors, fid, f['width'], f['height'], flush=True)
    open(f'{d}/fid_{colors}', 'w').write(fid)
cmds = []
for colors, (fid, w, h, u) in info.items():
    for c in colors.split('+'):
        cmds.append(f"ONLY={shlex.quote('/ ' + c + ' /')} {sys.executable} scripts/pf-sync.py setfile {pid} {fid} > {shlex.quote(d + '/sync_' + c + '.log')} 2>&1")
subprocess.Popen(['bash', '-c', ' ; '.join(cmds)], env=env, start_new_session=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
for colors, (fid, w, h, u) in info.items():
    for c in colors.split('+'):
        v = next(v for v in vs if f' / {c} / M' in v['name'] or f' / {c} / L' in v['name'])
        subprocess.run([sys.executable, 'scripts/pf-mockup.py', cat, u, str(w), str(h), '-', str(v['variant_id']), f'{d}/mock_{c}.json'], env=env, check=True, stdout=subprocess.DEVNULL)
        m = json.load(open(f'{d}/mock_{c}.json'))[str(v['variant_id'])]; url = m['front:main']
        open(f'{d}/m_{c}.jpg', 'wb').write(urllib.request.urlopen(url).read()); open(f'{d}/murl_{c}.txt', 'w').write(url); print(c, 'MOCKUP', url, flush=True)
