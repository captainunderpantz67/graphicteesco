#!/bin/bash
# b-go.sh <id> <shopify product number> <print.png> <w> <h> <FW> <catalog> <variantA,variantB> [TOP=0]
# Hosts the print on fal, uploads it to Printful, starts the (background) sync of every variant, makes the mockups for the two variants
# and downloads the two front views to $S/m<id>_a.jpg and m<id>_b.jpg (S = scratch dir). Prints the Printful file id and sync product id.
cd "$(dirname "$0")/.."
S=${S:-/tmp/claude-0/-home-user-graphicteesco/a64dce1e-86db-5936-9694-ae2324b9f09b/scratchpad}
ID=$1; SID=$2; K=$3; W=$4; H=$5; FW=$6; CAT=$7; VS=$8; TOP=${9:-0}
U=$(python3 scripts/fal-host.py "$K" "k$ID.png"); FID=$(python3 scripts/pf-sync.py upload "$U" "k$ID.png" | tail -1); echo $FID > $S/fid$ID
sleep 8; PID=$(python3 scripts/pf-find.py $SID | head -1 | cut -d' ' -f1); echo $PID > $S/pid$ID
FORCE=1 FW=$FW TOP=$TOP nohup python3 scripts/pf-sync.py setfile $PID $FID 1080398177 > $S/sync$ID.log 2>&1 &
BU=$(curl -s -H "Authorization: Bearer $PRINTFUL_TOKEN" https://api.printful.com/files/1080398177 | python3 -c "import json,sys;print(json.load(sys.stdin)['result']['preview_url'])")
FW=$FW TOP=$TOP python3 scripts/pf-mockup.py $CAT "$U" $W $H "$BU" $VS $S/mk$ID.json | grep -c http
python3 - <<PY
import json, urllib.request
m = json.load(open("$S/mk$ID.json")); v = "$VS".split(',')
for k, n in zip(v, 'ab'): urllib.request.urlretrieve(m[k]['front:main'], f"$S/m${ID}_{n}.jpg")
from PIL import Image
ims = [Image.open(f"$S/m${ID}_{n}.jpg").convert('RGB').resize((600, 600)) for n in 'ab']
c = Image.new('RGB', (1200, 600)); [c.paste(i, (600 * j, 0)) for j, i in enumerate(ims)]; c.save("$S/mchk$ID.jpg")
PY
echo "fid $FID pid $PID"
