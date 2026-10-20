#!/usr/bin/env python3
"""e-zip.py <dir> <sync_pid> <BW> <BT> <CW> <chest.png> Color=back.png [Color=back2.png ...]   (lane E zip-hoodie redo, Gildan 18600 #692)
Uploads the chest copy and each back print (waits until Printful has their size), starts the paced pf-zip.py sync per color in the
background (<dir>/sync_<Color>.log), makes one mockup task per color (retries), prints the front and back mockup URLs. Reads secrets from the environment."""
import os, sys, json, subprocess, time, shlex, urllib.request
d, pid, bw, bt, cw, chest = sys.argv[1:7]; pairs = [a.split('=', 1) for a in sys.argv[7:]]
H = {'Authorization': 'Bearer ' + os.environ['PRINTFUL_TOKEN'], 'User-Agent': 'gtc'}
def get(p): return json.load(urllib.request.urlopen(urllib.request.Request('https://api.printful.com' + p, headers=H), timeout=60))['result']
def up(png):
    url = subprocess.check_output([sys.executable, 'scripts/fal-host.py', png], text=True).strip()
    fid = subprocess.check_output([sys.executable, 'scripts/pf-sync.py', 'upload', url, os.path.basename(png)], text=True).strip()
    for _ in range(40):
        f = get(f'/files/{fid}')
        if f.get('width') and f.get('height') and f.get('status') == 'ok': return fid, f
        time.sleep(4)
    raise SystemExit('file not ready ' + png)
cf, cinfo = up(chest); open(f'{d}/id_chest', 'w').write(cf); print('chest', cf, flush=True)
vs = get(f'/sync/products/{pid}')['sync_variants']
env = dict(os.environ, BW=bw, BT=bt, CW=cw, FORCE='1', CHEST_FID=cf, CHEST_H=str(cinfo['height']), CHEST_W=str(cinfo['width']), CHEST_URL=cinfo['url'])
info = {}
for c, png in pairs:
    fid, f = up(png); info[c] = (fid, f['width'], f['height'], f['url']); open(f'{d}/id_{c}', 'w').write(fid); print(c, fid, flush=True)
cmds = ' ; '.join(f"ONLY={shlex.quote('/ ' + c + ' /')} {sys.executable} scripts/pf-zip.py sync {pid} {fid} {w} {h} > {shlex.quote(d + '/sync_' + c + '.log')} 2>&1" for c, (fid, w, h, u) in info.items())
subprocess.Popen(['bash', '-c', cmds], env=env, start_new_session=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
for c, (fid, w, h, u) in info.items():
    v = next(v for v in vs if f' / {c} / M' in v['name'] or f' / {c} / L' in v['name'])
    for t in range(4):
        r = subprocess.run([sys.executable, 'scripts/pf-zip.py', 'mockup', '692', u, str(w), str(h), str(v['variant_id']), f'{d}/mock_{c}.json'], env=env, capture_output=True)
        if r.returncode == 0: break
        time.sleep(20)
    else: raise SystemExit('mockup failed ' + c)
    m = json.load(open(f'{d}/mock_{c}.json')); m = m[str(v['variant_id'])] if str(v['variant_id']) in m else list(m.values())[0]
    print(c, 'FRONT', m['front:Front'] if 'front:Front' in m else m['back:Front']); print(c, 'BACK', m['back:Back'], flush=True)
