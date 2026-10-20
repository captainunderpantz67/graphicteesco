#!/usr/bin/env python3
"""c-zip.py <dir> <sync_pid> <chest_fid> <BW> <BT> <CW> Colors=back.png [Colors=back2.png ...]   (lane C zip-up hoodie redo, Gildan 18600 #692)
Uploads each back print, starts the paced pf-zip.py sync (back + the existing chest file) per color in the background (<dir>/sync_<Color>.log),
makes one back mockup per color (<dir>/m_<Color>.jpg, murl_<Color>.txt). 'A+B' shares one file."""
import os, sys, json, subprocess, time, urllib.request, shlex
d, pid, chest, bw, bt, cw = sys.argv[1:7]; pairs = [a.split('=', 1) for a in sys.argv[7:]]
H = {'Authorization': 'Bearer ' + os.environ['PRINTFUL_TOKEN'], 'User-Agent': 'gtc'}
def get(p): return json.load(urllib.request.urlopen(urllib.request.Request('https://api.printful.com' + p, headers=H), timeout=60))['result']
vs = get(f'/sync/products/{pid}')['sync_variants']; cf = get(f'/files/{chest}'); info = {}
for colors, png in pairs:
    url = subprocess.check_output([sys.executable, 'scripts/fal-host.py', png], text=True).strip()
    fid = subprocess.check_output([sys.executable, 'scripts/pf-sync.py', 'upload', url, os.path.basename(png)], text=True).strip()
    for _ in range(30):
        f = get(f'/files/{fid}')
        if f.get('width') and f.get('status') == 'ok': break
        time.sleep(4)
    info[colors] = (fid, f['width'], f['height'], f['url']); print(colors, fid, f['width'], f['height'], flush=True); open(f'{d}/fid_{colors}', 'w').write(fid)
env = dict(os.environ, BW=bw, BT=bt, CW=cw, FORCE='1', CHEST_FID=chest, CHEST_H=str(cf['height']), CHEST_W=str(cf['width']))
cmds = [f"ONLY={shlex.quote('/ ' + c + ' /')} {sys.executable} scripts/pf-zip.py sync {pid} {fid} {w} {h} > {shlex.quote(d + '/sync_' + c + '.log')} 2>&1" for colors, (fid, w, h, u) in info.items() for c in colors.split('+')]
subprocess.Popen(['bash', '-c', ' ; '.join(cmds)], env=env, start_new_session=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
for colors, (fid, w, h, u) in info.items():
    for c in colors.split('+'):
        v = next(v for v in vs if f' / {c} / M' in v['name'] or f' / {c} / L' in v['name'])
        e2 = dict(env, CHEST_URL=cf['url'])
        subprocess.run([sys.executable, 'scripts/pf-zip.py', 'mockup', '692', u, str(w), str(h), str(v['variant_id']), f'{d}/mock_{c}.json'], env=e2, check=True, stdout=subprocess.DEVNULL)
        m = json.load(open(f'{d}/mock_{c}.json'))[str(v['variant_id'])]; url = m.get('back:Back') or m['back:main']
        open(f'{d}/m_{c}.jpg', 'wb').write(urllib.request.urlopen(url).read()); open(f'{d}/murl_{c}.txt', 'w').write(url); print(c, 'MOCKUP', url, flush=True)
