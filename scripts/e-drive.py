#!/usr/bin/env python3
"""e-drive.py <dir> <sync_pid> <catalog> <FW> <TOP> "Color=print.png=mockup_variant_id" ...   (lane E: new printed hoodie/crewneck/tee, run with /usr/bin/python3)
Uploads each print to Printful, starts the paced setfile chain (front print + back logo 1080398177; rerun passes until every variant carries them) in the background
(<dir>/sync_done appears at the end), makes one front mockup per color and a neck-logo back mockup (retrying on Printful 500/429), writes <dir>/urls.json
{"front": {Color: url}, "back": url} and downloads <dir>/m_<Color>.jpg and <dir>/m_back.jpg."""
import os, sys, json, subprocess, time, urllib.request, urllib.error
d, pid, cat, fw, top = sys.argv[1:6]; items = [a.split('=') for a in sys.argv[6:]]; os.makedirs(d, exist_ok=True)
H = {'Authorization': 'Bearer ' + os.environ['PRINTFUL_TOKEN'], 'User-Agent': 'gtc'}
def get(p):
    for _ in range(12):
        try: return json.load(urllib.request.urlopen(urllib.request.Request('https://api.printful.com' + p, headers=H), timeout=60))['result']
        except urllib.error.HTTPError as e:
            if e.code == 429: time.sleep(45); continue
            raise
files = {}
for c, png, vid in items:
    if png not in files:
        try: url = subprocess.check_output([sys.executable, 'scripts/fal-host.py', png], text=True, stderr=subprocess.DEVNULL).strip()
        except Exception:  # fal wallet empty (403): the repo is public, so a pushed docs/print-files/ file is a public URL
            sha = subprocess.check_output(['git', 'ls-remote', 'origin', 'refs/heads/main'], text=True).split()[0]  # a sha URL dodges raw.githubusercontent's cached 404s
            url = f'https://raw.githubusercontent.com/captainunderpantz67/graphicteesco/{sha}/' + png
            for _ in range(12):
                if subprocess.run(['curl', '-sfI', url], capture_output=True).returncode == 0: break
                time.sleep(10)
        fid = subprocess.check_output([sys.executable, 'scripts/pf-sync.py', 'upload', url, os.path.basename(png)], text=True).strip()
        for _ in range(30):
            f = get(f'/files/{fid}')
            if f.get('width') and f.get('status') == 'ok': break
            time.sleep(4)
        files[png] = dict(id=int(fid), w=f['width'], h=f['height'], url=f['url'])
        print(png, files[png]['id'], f['width'], f['height'], flush=True)
json.dump(files, open(f'{d}/files.json', 'w'))
sh = f"cd {os.getcwd()}\nexport FW={fw} TOP={top} FORCE=1\n"
for c, png, vid in items: sh += f"ONLY='/ {c} /' {sys.executable} scripts/pf-sync.py setfile {pid} {files[png]['id']} 1080398177 > '{d}/sync_{c.replace(' ', '_')}.log' 2>&1\n"
sh += "export FORCE=0\nfor i in 1 2 3; do\n"
for c, png, vid in items: sh += f"ONLY='/ {c} /' {sys.executable} scripts/pf-sync.py setfile {pid} {files[png]['id']} 1080398177 >> '{d}/sync_fix.log' 2>&1\n"
sh += f"done\ntouch {d}/sync_done\n"
open(f'{d}/sync.sh', 'w').write(sh); subprocess.Popen(['bash', f'{d}/sync.sh'], start_new_session=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
logo = get('/files/1080398177')['preview_url']; env = dict(os.environ, FW=fw, TOP=top); urls = {'front': {}, 'back': None}
def mock(url, w, h, back, vid, out):
    for t in range(6):
        if os.path.exists(out): os.remove(out)
        r = subprocess.run([sys.executable, 'scripts/pf-mockup.py', cat, url, str(w), str(h), back, vid, out], env=env, capture_output=True, text=True)
        if os.path.exists(out): return json.load(open(out))[vid]
        time.sleep(60)
    raise SystemExit('mockup failed: ' + r.stdout[-300:] + r.stderr[-300:])
def dl(url, path): open(path, 'wb').write(urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'gtc'})).read())
for c, png, vid in items:
    f = files[png]; m = mock(f['url'], f['w'], f['h'], '-', vid, f"{d}/mock_{c.replace(' ', '_')}.json")
    urls['front'][c] = m['front:main']; dl(m['front:main'], f"{d}/m_{c.replace(' ', '_')}.jpg"); print(c, 'front ok', flush=True)
c, png, vid = items[0]; f = files[png]; m = mock(f['url'], f['w'], f['h'], logo, vid, f'{d}/mock_back.json')
b = m.get('back:main') or m.get('front:Back') or m.get('back:Back'); urls['back'] = b; dl(b, f'{d}/m_back.jpg')
json.dump(urls, open(f'{d}/urls.json', 'w'), indent=1); print('MOCKUPS DONE', flush=True)
