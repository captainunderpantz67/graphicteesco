#!/bin/bash
# b-mug-file.sh <id>: host designs/m<id>/print.png on fal storage and POST it to Printful; prints file id (url in /tmp/w/url<id>)
cd "$(dirname "$0")/.."; n=$1
python3 scripts/fal-host.py designs/m$n/print.png m$n.png > /tmp/w/url$n
python3 - <<P
import os,json,urllib.request
T=os.environ['PRINTFUL_TOKEN'];u=open('/tmp/w/url$n').read().strip()
r=json.load(urllib.request.urlopen(urllib.request.Request('https://api.printful.com/files',data=json.dumps({'url':u,'type':'default'}).encode(),headers={'Authorization':'Bearer '+T,'Content-Type':'application/json','User-Agent':'gtc-builder'},method='POST')))['result']
print('FILE',r['id'])
P
