#!/usr/bin/env python3
"""Upload a local file to fal storage and print its public https URL (used to hand print files to Printful).
Usage: fal-upload.py designs/<slug>.png"""
import json, mimetypes, os, pathlib, sys, urllib.request
key = os.environ.get('FAL_KEY') or (pathlib.Path.home() / '.config/fal/key').read_text().strip()
p = pathlib.Path(sys.argv[1]); ct = mimetypes.guess_type(p.name)[0] or 'application/octet-stream'
req = urllib.request.Request('https://rest.alpha.fal.ai/storage/upload/initiate?storage_type=fal-cdn-v3', method='POST',
                             data=json.dumps({'content_type': ct, 'file_name': p.name}).encode(),
                             headers={'Authorization': f'Key {key}', 'Content-Type': 'application/json'})
with urllib.request.urlopen(req, timeout=60) as r: init = json.loads(r.read())
put = urllib.request.Request(init['upload_url'], method='PUT', data=p.read_bytes(), headers={'Content-Type': ct})
with urllib.request.urlopen(put, timeout=300) as r: r.read()
print(init['file_url'])
