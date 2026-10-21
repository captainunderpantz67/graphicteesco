#!/bin/bash
# b-tee2.sh <id> <shopify product number> <catalog> <FW> <TOP> <dark.png> <light.png> <"colors dark, comma"> <"colors light, comma"> <dark variant ids (one per dark color)> <light variant ids>
# two-file tee: hosts and uploads both print files, starts a background sync (dark file on the dark colors, light file on the light ones, one color at a time),
# then makes the mockups for both file sets. Needs $S (scratch dir). Writes $S/mk<id>d.json, mk<id>l.json, fid<id>d/l, pid<id>.
cd "$(dirname "$0")/.."; export PATH=/usr/bin:$PATH
ID=$1; SID=$2; CAT=$3; FW=$4; TOP=$5; D=$6; L=$7; DC=$8; LC=$9; DV=${10}; LV=${11}
read DW DH < <(python3 -c "from PIL import Image;print(*Image.open('$D').size)"); read LW LH < <(python3 -c "from PIL import Image;print(*Image.open('$L').size)")
UD=$(python3 scripts/fal-host.py "$D" "k${ID}d.png"); UL=$(python3 scripts/fal-host.py "$L" "k${ID}l.png")
FD=$(python3 scripts/pf-sync.py upload "$UD" "k${ID}d.png" | tail -1); FL=$(python3 scripts/pf-sync.py upload "$UL" "k${ID}l.png" | tail -1); echo $FD > $S/fid${ID}d; echo $FL > $S/fid${ID}l
sleep 8; PID=$(python3 scripts/pf-find.py $SID | head -1 | cut -d' ' -f1); echo $PID > $S/pid$ID
cat > $S/sync$ID.sh <<SYNC
#!/bin/bash
cd /home/user/graphicteesco; export PATH=/usr/bin:\$PATH
IFS=,; for c in $DC; do FORCE=1 ONLY="/ \$c /" FW=$FW TOP=$TOP python3 scripts/pf-sync.py setfile $PID $FD 1080398177; done
for c in $LC; do FORCE=1 ONLY="/ \$c /" FW=$FW TOP=$TOP python3 scripts/pf-sync.py setfile $PID $FL 1080398177; done
SYNC
chmod +x $S/sync$ID.sh
BU=$(curl -s -H "Authorization: Bearer $PRINTFUL_TOKEN" https://api.printful.com/files/1080398177 | python3 -c "import json,sys;print(json.load(sys.stdin)['result']['preview_url'])")
FW=$FW TOP=$TOP python3 scripts/pf-mockup.py $CAT "$UD" $DW $DH "$BU" $DV $S/mk${ID}d.json > /dev/null &
FW=$FW TOP=$TOP python3 scripts/pf-mockup.py $CAT "$UL" $LW $LH "$BU" $LV $S/mk${ID}l.json > /dev/null &
wait %2 %3 2>/dev/null; wait
echo "fids $FD $FL pid $PID"; ls $S/mk${ID}d.json $S/mk${ID}l.json
