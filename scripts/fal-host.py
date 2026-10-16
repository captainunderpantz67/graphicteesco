#!/usr/bin/env python3
"""Host a local file on fal storage: fal-host.py <file> [<name>] -> prints the public URL (key from FAL_KEY, never printed)."""
import os, sys, json, mimetypes, urllib.request
K = os.environ['FAL_KEY']; p = sys.argv[1]; name = sys.argv[2] if len(sys.argv) > 2 else os.path.basename(p)
ct = mimetypes.guess_type(name)[0] or 'application/octet-stream'
r = json.load(urllib.request.urlopen(urllib.request.Request('https://rest.alpha.fal.ai/storage/upload/initiate?storage_type=fal-cdn-v3',
    json.dumps({'content_type': ct, 'file_name': name}).encode(), method='POST', headers={'Authorization': 'Key ' + K, 'Content-Type': 'application/json'})))
urllib.request.urlopen(urllib.request.Request(r['upload_url'], open(p, 'rb').read(), method='PUT', headers={'Content-Type': ct}))
print(r['file_url'])
