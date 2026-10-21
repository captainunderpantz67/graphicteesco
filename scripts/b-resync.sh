#!/bin/bash
# b-resync.sh <id> <sync product id> <hosted file name under docs/hosted> [FW=1500] [TOP=0]: re-upload the hosted print to Printful, wait until it has a width, start the background sync of every variant. Needs $S.
cd "$(dirname "$0")/.."; export PATH=/usr/bin:$PATH
ID=$1; PID=$2; NAME=$3; FW=${4:-1500}; TOP=${5:-0}
U=https://raw.githubusercontent.com/captainunderpantz67/graphicteesco/main/docs/hosted/$NAME
FID=$(python3 scripts/pf-sync.py upload "$U" "$NAME" | tail -1); echo $FID > $S/fid$ID
for i in $(seq 1 10); do python3 -c "import os,json,sys,urllib.request as u;r=u.Request('https://api.printful.com/files/$FID',headers={'Authorization':'Bearer '+os.environ['PRINTFUL_TOKEN'],'User-Agent':'gtc'});sys.exit(0 if json.load(u.urlopen(r))['result'].get('width') else 1)" && break; sleep 4; done
(FORCE=1 FW=$FW TOP=$TOP nohup python3 scripts/pf-sync.py setfile $PID $FID 1080398177 > $S/sync$ID.log 2>&1 &)
echo "fid $FID started"
