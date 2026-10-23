#!/bin/bash
# b-hoodie.sh <dir> <sync_pid> <catalog_id> <variantA> <colorA> <variantB> <colorB> [FW]  (lane B redo helper: uses <dir>/print_<colorA lower>.png, uploads, syncs both colors in the background, makes mockups)
cd "$(dirname "$0")/.."; P=/usr/bin/python3; D=$1; PID=$2; CAT=$3; FW=${8:-1500}
BU=https://files.cdn.printful.com/files/51f/51f0c46f739b8b79665a0cb5158e8e73_preview.png
for k in "$5" "$7"; do l=$(echo $k | tr A-Z a-z); u=$($P scripts/fal-host.py $D/print_$l.png); $P scripts/pf-sync.py upload "$u" "$(basename $D)-$l.png" > $D/id_$l; echo $k $(cat $D/id_$l) $u; done
( sleep 25; for k in "$5" "$7"; do l=$(echo $k | tr A-Z a-z); FW=$FW TOP=${TOP:-400} ONLY=$k $P scripts/pf-sync.py setfile $PID $(cat $D/id_$l) > $D/sync_$k.log 2>&1; done ) >/dev/null 2>&1 &
for pair in "$4:$5" "$6:$7"; do v=${pair%%:*}; k=${pair##*:}; l=$(echo $k | tr A-Z a-z); u=$($P scripts/fal-host.py $D/print_$l.png)
 read w h < <($P -c "from PIL import Image;print(*Image.open('$D/print_$l.png').size)")
 FW=$FW TOP=${TOP:-400} $P scripts/pf-mockup.py $CAT "$u" $w $h "$BU" $v $D/mk_$k.json >/dev/null &
done; wait %2 %3 2>/dev/null
for k in "$5" "$7"; do $P - <<P2
import json;d=list(json.load(open('$D/mk_$k.json')).values())[0]
import urllib.request
for n,key in (('front','front:main'),('back','back:main' if 'back:main' in d and d['back:main']!=d['front:main'] else 'front:Back')): urllib.request.urlretrieve(d[key],'$D/'+n+'_$k.jpg'); print('$k',n,d[key])
P2
done
