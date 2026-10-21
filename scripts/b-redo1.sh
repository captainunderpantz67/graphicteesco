#!/bin/bash
# b-redo1.sh <id> <shopify product number> <print.png> <catalog> <FW> <TOP> <variant ids comma (one per color)>: one-file redo: hosts + uploads the print, starts the background sync of every variant (nohup), makes mockups for all listed variants into $S/mk<id>.json. Needs $S.
cd "$(dirname "$0")/.."; export PATH=/usr/bin:$PATH
ID=$1; SID=$2; K=$3; CAT=$4; FW=$5; TOP=$6; VS=$7
read W H < <(python3 -c "from PIL import Image;print(*Image.open('$K').size)")
U=$(python3 scripts/fal-host.py "$K" "k${ID}${SUF}.png"); FID=$(python3 scripts/pf-sync.py upload "$U" "k${ID}${SUF}.png" | tail -1); echo $FID > $S/fid$ID
for i in 1 2 3 4 5 6 7 8; do python3 -c "import os,json,urllib.request as u;r=u.Request('https://api.printful.com/files/$FID',headers={'Authorization':'Bearer '+os.environ['PRINTFUL_TOKEN'],'User-Agent':'gtc'});import sys;sys.exit(0 if json.load(u.urlopen(r))['result'].get('width') else 1)" && break; sleep 4; done
PID=$(python3 scripts/pf-find.py $SID | head -1 | cut -d' ' -f1); echo $PID > $S/pid$ID
(FORCE=1 FW=$FW TOP=$TOP nohup python3 scripts/pf-sync.py setfile $PID $FID 1080398177 > $S/sync$ID.log 2>&1 &)
BU=$(curl -s -H "Authorization: Bearer $PRINTFUL_TOKEN" https://api.printful.com/files/1080398177 | python3 -c "import json,sys;print(json.load(sys.stdin)['result']['preview_url'])")
FW=$FW TOP=$TOP python3 scripts/pf-mockup.py $CAT "$U" $W $H "$BU" $VS $S/mk$ID.json | grep -c http
echo "fid $FID pid $PID"
