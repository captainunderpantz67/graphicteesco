#!/usr/bin/env python3
"""e-new.py <dir> <sync_pid> <dark.png> <light.png> <name>  (lane E new 3001 tee, 8 colors: 5 dark on dark file, 3 light on light file)
Uploads both prints, starts a background paced setfile chain (with back logo; reruns until every variant carries the file + back logo),
makes 8 front mockups + 1 back mockup (<dir>/m/). Writes <dir>/ids.json. FW 1650, TOP 75."""
import os, sys, json, subprocess, time, urllib.request
d, pid, dark, light, name = sys.argv[1:6]; os.makedirs(d + '/m', exist_ok=True)
H = {'Authorization': 'Bearer ' + os.environ['PRINTFUL_TOKEN'], 'User-Agent': 'gtc'}
def get(p): return json.load(urllib.request.urlopen(urllib.request.Request('https://api.printful.com' + p, headers=H), timeout=60))['result']
ids = {}
for k, png in (('dark', dark), ('light', light)):
    url = subprocess.check_output([sys.executable, 'scripts/fal-host.py', png], text=True).strip()
    fid = subprocess.check_output([sys.executable, 'scripts/pf-sync.py', 'upload', url, os.path.basename(png)], text=True).strip()
    for _ in range(30):
        f = get(f'/files/{fid}')
        if f.get('width') and f.get('status') == 'ok': break
        time.sleep(4)
    ids[k] = dict(id=int(fid), w=f['width'], h=f['height'], url=f['url'])
json.dump(ids, open(d + '/ids.json', 'w')); print(ids, flush=True)
DARK = ['Black', 'Navy', 'Dark Grey Heather', 'Heather Forest', 'Maroon']; LIGHT = ['Natural', 'Ash', 'Athletic Heather']
sh = f"cd {os.getcwd()}\nexport FW=1650 TOP=75 FORCE=1\n"
for c in DARK: sh += f"ONLY='/ {c} /' python3 scripts/pf-sync.py setfile {pid} {ids['dark']['id']} 1080398177 > '{d}/m/sync_{c}.log' 2>&1\n"
for c in LIGHT: sh += f"ONLY='/ {c} /' python3 scripts/pf-sync.py setfile {pid} {ids['light']['id']} 1080398177 > '{d}/m/sync_{c}.log' 2>&1\n"
sh += "export FORCE=0\nfor i in 1 2 3; do for c in " + ' '.join(f"'{c}'" for c in DARK) + f"; do ONLY=\"/ $c /\" python3 scripts/pf-sync.py setfile {pid} {ids['dark']['id']} 1080398177 >> '{d}/m/sync_fix.log' 2>&1; done; for c in " + ' '.join(f"'{c}'" for c in LIGHT) + f"; do ONLY=\"/ $c /\" python3 scripts/pf-sync.py setfile {pid} {ids['light']['id']} 1080398177 >> '{d}/m/sync_fix.log' 2>&1; done; done\ntouch {d}/m/sync_done\n"
open(d + '/sync.sh', 'w').write(sh)
subprocess.Popen(['bash', d + '/sync.sh'], start_new_session=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
M = {'Black': 4017, 'Navy': 4112, 'Dark Grey Heather': 8461, 'Heather Forest': 8489, 'Maroon': 4107, 'Natural': 14683, 'Ash': 4027, 'Athletic Heather': 6949}
env = dict(os.environ, FW='1650', TOP='75'); media = []
for c, v in M.items():
    x = ids['dark' if c in DARK else 'light']; out = f"{d}/m/mock_{c.replace(' ', '_')}.json"
    for t in range(3):
        r = subprocess.run([sys.executable, 'scripts/pf-mockup.py', '71', x['url'], str(x['w']), str(x['h']), '-', str(v), out], env=env, stdout=subprocess.DEVNULL)
        if r.returncode == 0: break
    u = json.load(open(out))[str(v)]['front:main']; open(f"{d}/m/m_{c.replace(' ', '_')}.jpg", 'wb').write(urllib.request.urlopen(u).read())
    media.append({'originalSource': u, 'alt': f'{name}, {c}, front view', 'mediaContentType': 'IMAGE'}); print(c, flush=True)
lu = subprocess.check_output([sys.executable, 'scripts/fal-host.py', 'designs/brand/back-logo-cream.png'], text=True).strip(); x = ids['dark']
for t in range(3):
    r = subprocess.run([sys.executable, 'scripts/pf-mockup.py', '71', x['url'], str(x['w']), str(x['h']), lu, '4017', d + '/m/mock_back.json'], env=env, stdout=subprocess.DEVNULL)
    if r.returncode == 0: break
b = json.load(open(d + '/m/mock_back.json'))['4017']
media.append({'originalSource': b['back:main'], 'alt': f'{name}, back view with Graphic Tees Co. neck logo', 'mediaContentType': 'IMAGE'})
json.dump(media, open(d + '/media.json', 'w')); print('MEDIA DONE', flush=True)
