#!/usr/bin/env python3
"""c-second.py <dir> <sync_pid> <catalog> <FW> <TOP> <Color> <print.png> <wait_pid>
Second per-color file for a product whose first c-redo sync is already running: uploads the print, makes the <Color> front mockup
(<dir>/m_<Color>.jpg, murl_<Color>.txt), and queues the paced sync for that color after process <wait_pid> exits."""
import os, sys, json, subprocess, time, urllib.request, shlex
d, pid, cat, fw, top, color, png, wait = sys.argv[1:9]
H = {'Authorization': 'Bearer ' + os.environ['PRINTFUL_TOKEN'], 'User-Agent': 'gtc'}
def get(p): return json.load(urllib.request.urlopen(urllib.request.Request('https://api.printful.com' + p, headers=H), timeout=60))['result']
url = subprocess.check_output([sys.executable, 'scripts/fal-host.py', png], text=True).strip()
fid = subprocess.check_output([sys.executable, 'scripts/pf-sync.py', 'upload', url, os.path.basename(png)], text=True).strip()
for _ in range(30):
    f = get(f'/files/{fid}')
    if f.get('width') and f.get('status') == 'ok': break
    time.sleep(4)
print(color, fid, f['width'], f['height'], flush=True); open(f'{d}/fid_{color}', 'w').write(fid)
env = dict(os.environ, FW=fw, TOP=top, FORCE='1', ONLY='/ ' + color + ' /')
cmd = f"while kill -0 {int(wait)} 2>/dev/null; do sleep 5; done; {sys.executable} scripts/pf-sync.py setfile {pid} {fid} > {shlex.quote(d + '/sync_' + color + '.log')} 2>&1"
subprocess.Popen(['bash', '-c', cmd], env=env, start_new_session=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
vs = get(f'/sync/products/{pid}')['sync_variants']
v = next(v for v in vs if f' / {color} / M' in v['name'] or f' / {color} / L' in v['name'])
subprocess.run([sys.executable, 'scripts/pf-mockup.py', cat, f['url'], str(f['width']), str(f['height']), '-', str(v['variant_id']), f'{d}/mock_{color}.json'], env=env, check=True, stdout=subprocess.DEVNULL)
url = json.load(open(f'{d}/mock_{color}.json'))[str(v['variant_id'])]['front:main']
open(f'{d}/m_{color}.jpg', 'wb').write(urllib.request.urlopen(url).read()); open(f'{d}/murl_{color}.txt', 'w').write(url); print(color, 'MOCKUP', url, flush=True)
