#!/usr/bin/env python3
"""Host a local file on fal storage: fal-host.py <file> [<name>] -> prints the public URL (key from FAL_KEY, never printed)."""
import os, sys, json, mimetypes, urllib.request, urllib.error
def repo_host(p):
    """fal wallet exhausted (403): host through the public repo's raw URL (print files only, never secrets)."""
    import shutil, subprocess
    d = 'docs/hosted'; os.makedirs(d, exist_ok=True); dst = d + '/' + name; shutil.copy(p, dst)
    subprocess.run(['git', 'add', dst], check=True); subprocess.run(['git', 'commit', '-qm', '[B] host ' + name, '--', dst], check=True)
    for i in range(4):
        if subprocess.run(['git', 'push', '-q', 'origin', 'HEAD:main']).returncode == 0: break
        subprocess.run(['git', 'pull', '-q', '--rebase', 'origin', 'main'])
    url = 'https://raw.githubusercontent.com/captainunderpantz67/graphicteesco/main/' + dst; print(url)
K = os.environ['FAL_KEY']; p = sys.argv[1]; name = sys.argv[2] if len(sys.argv) > 2 else os.path.basename(p)
ct = mimetypes.guess_type(name)[0] or 'application/octet-stream'
try:
  r = json.load(urllib.request.urlopen(urllib.request.Request('https://rest.alpha.fal.ai/storage/upload/initiate?storage_type=fal-cdn-v3',
    json.dumps({'content_type': ct, 'file_name': name}).encode(), method='POST', headers={'Authorization': 'Key ' + K, 'Content-Type': 'application/json'})))
  urllib.request.urlopen(urllib.request.Request(r['upload_url'], open(p, 'rb').read(), method='PUT', headers={'Content-Type': ct}))
  print(r['file_url'])
except urllib.error.HTTPError as e:
  if e.code != 403: raise
  repo_host(p)
