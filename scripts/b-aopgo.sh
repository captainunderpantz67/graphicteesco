#!/bin/bash
# b-aopgo.sh <id> <shopify product number> <art.png> <art_w px> <art_top px> <catalog> <variantA,variantB> [pattern=assets/patterns/pink-camo-src.png]
# Builds the front panel (pattern + art), uploads it, reuses the back/plain panels of the same pattern ($S/aop_<pattern name>.txt: "backid plainid back_url plain_url"),
# starts the Printful sync in the background and makes the mockups (front + Back + Left Front for each variant) -> $S/mk<id>.json, m<id>_a.jpg / m<id>_b.jpg.
cd "$(dirname "$0")/.."
S=${S:-/tmp/claude-0/-home-user-graphicteesco/a64dce1e-86db-5936-9694-ae2324b9f09b/scratchpad}
ID=$1; SID=$2; ART=$3; AW=$4; AT=$5; CAT=$6; VS=$7; PAT=${8:-assets/patterns/pink-camo-src.png}; N=$(basename $PAT .png)
read BID PID_ BU PU < $S/aop_$N.txt
python3 scripts/aop-panels.py $PAT $S/pn_$ID 1200 $ART $AW $AT | tail -1
OUT=$(python3 scripts/pf-aop.py upload $S/pn_${ID}_front.jpg); echo "$OUT" | cut -c1-100; FID=$(echo "$OUT" | awk '{print $2}'); FU=$(echo "$OUT" | awk '{print $3}')
sleep 6; PF=$(python3 scripts/pf-find.py $SID | head -1 | cut -d' ' -f1); echo $PF > $S/pid$ID
nohup python3 scripts/pf-aop.py sync $PF $FID $BID $PID_ > $S/sync$ID.log 2>&1 &
python3 scripts/pf-aop.py mockup $CAT $FU $BU $PU $VS $S/mk$ID.json | cut -c1-60
python3 - <<PY
import json, urllib.request
m = json.load(open("$S/mk$ID.json")); v = "$VS".split(',')
for k, n in zip(v, 'ab'): urllib.request.urlretrieve(m[k]['front_dtfabric:main'], f"$S/m${ID}_{n}.jpg")
from PIL import Image
ims = [Image.open(f"$S/m${ID}_{n}.jpg").convert('RGB').resize((700, 700)) for n in 'ab']
c = Image.new('RGB', (1400, 700)); [c.paste(i, (700 * j, 0)) for j, i in enumerate(ims)]; c.save("$S/mchk$ID.jpg")
PY
echo "fid $FID pid $PF"
