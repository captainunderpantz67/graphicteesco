#!/bin/bash
# b-aopredo.sh <id> <shopify product number> <lockup.png> [back file id] [plain file id]: in-place redo of a woodland-camo AOP sweatshirt (#1418, 5037 x 6600 panels).
# Pastes the camo lockup (1500 px wide, top 1700 = the old print's box) onto the plain pattern panel ($S/aop/plain.jpg), uploads it, makes the M mockup ($S/mk<id>.json),
# then syncs every variant (paced, foreground) with the existing back/sleeve panels. Needs $S, $S/aop/plain.jpg.
cd "$(dirname "$0")/.."; export PATH=/usr/bin:$PATH
ID=$1; SID=$2; L=$3; BK=${4:-1087947726}; PL=${5:-1087947657}
python3 - "$L" "$S/aop/plain.jpg" "$S/aop/front$ID.jpg" <<'P'
import sys
from PIL import Image
L = Image.open(sys.argv[1]).convert('RGBA'); W = 1500; L = L.resize((W, round(L.height * W / L.width)), Image.LANCZOS)
p = Image.open(sys.argv[2]).convert('RGBA'); p.alpha_composite(L, ((p.width - W) // 2, 1700)); p.convert('RGB').save(sys.argv[3], quality=92); print('front', L.size)
P
OUT=$(python3 scripts/pf-aop.py upload $S/aop/front$ID.jpg); FID=$(echo "$OUT" | awk '{print $2}'); FU=$(echo "$OUT" | awk '{print $3}'); echo $FID > $S/fid$ID
for i in 1 2 3 4 5 6 7 8; do python3 -c "import os,json,sys,urllib.request as u;r=u.Request('https://api.printful.com/files/$FID',headers={'Authorization':'Bearer '+os.environ['PRINTFUL_TOKEN'],'User-Agent':'gtc'});sys.exit(0 if json.load(u.urlopen(r))['result'].get('width') else 1)" && break; sleep 4; done
gu() { python3 -c "import os,json,urllib.request as u;print(json.load(u.urlopen(u.Request('https://api.printful.com/files/$1',headers={'Authorization':'Bearer '+os.environ['PRINTFUL_TOKEN'],'User-Agent':'gtc'})))['result']['url'])"; }
BU=$(gu $BK); PU=$(gu $PL)
PF=$(python3 scripts/pf-find.py $SID | head -1 | cut -d' ' -f1); echo $PF > $S/pid$ID
SWEAT=1 python3 scripts/pf-aop.py mockup 1418 $FU $BU $PU 33966 $S/mk$ID.json | cut -c1-80
SWEAT=1 python3 scripts/pf-aop.py sync $PF $FID $BK $PL > $S/sync$ID.log 2>&1
echo "done $ID fid $FID pid $PF"
