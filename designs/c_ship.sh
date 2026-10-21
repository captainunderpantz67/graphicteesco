#!/bin/bash
# c_ship.sh <n> <shopify numeric product id> <sand variant id (M)> <navy variant id (M)> : upload print files, start Printful sync (bg), make mockups, print front/back urls
cd "$(dirname "$0")/.."; P=/usr/bin/python3; n=$1; SID=$2; D=designs/c$n; BU=https://files.cdn.printful.com/files/51f/51f0c46f739b8b79665a0cb5158e8e73_preview.png
for k in sand navy; do cp docs/print-files/$n-$k.png $D/$k.png; u=$($P scripts/fal-host.py $D/$k.png); echo $u > $D/url_$k; $P scripts/pf-sync.py upload "$u" "c$n-$k.png" > $D/fid_$k; done
for i in 1 2 3 4 5 6; do PID=$($P scripts/pf-find.py $SID | head -1 | cut -d' ' -f1); [ -n "$PID" ] && break; sleep 10; done; echo $PID > $D/pid
MP=""; nohup setsid bash -c "sleep 30; FW=1500 TOP=0 ONLY=Sand $P scripts/pf-sync.py setfile $PID \$(cat $D/fid_sand) 1080398177 > $D/sync_Sand.log 2>&1; FW=1500 TOP=0 ONLY=Navy $P scripts/pf-sync.py setfile $PID \$(cat $D/fid_navy) 1080398177 > $D/sync_Navy.log 2>&1" >/dev/null 2>&1 &
for pair in $3:sand $4:navy; do v=${pair%%:*}; k=${pair##*:}; u=$(cat $D/url_$k); read w h < <($P -c "from PIL import Image;print(*Image.open('$D/$k.png').size)"); FW=1500 TOP=0 $P scripts/pf-mockup.py 146 "$u" $w $h "$BU" $v $D/mock_$k.json >/dev/null 2>&1 & MP="$MP $!"; done; wait $MP
$P - <<PY
import json,urllib.request
for k in('navy','sand'):
    d=list(json.load(open('$D/mock_%s.json'%k)).values())[0]; urllib.request.urlretrieve(d['front:main'],'$D/m_%s.jpg'%k)
    from PIL import Image; Image.open('$D/m_%s.jpg'%k).resize((400,400)).save('/tmp/m%s_$n.png'%k)
    print(k,'front',d['front:main'])
print('navy back',list(json.load(open('$D/mock_navy.json')).values())[0]['back:main'])
PY
echo PID $PID; cat $D/fid_sand $D/fid_navy
