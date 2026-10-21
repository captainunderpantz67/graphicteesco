#!/bin/bash
# b-mk.sh <id> <variant ids comma> [FW=1500] [TOP=0] [catalog=1543]: (re)makes the mockups for docs/hosted/k<id>c.png style hosted file named by $HOSTED (default k<id>c.png) into $S/mk<id>.json
cd "$(dirname "$0")/.."; export PATH=/usr/bin:$PATH
ID=$1; VS=$2; FW=${3:-1500}; TOP=${4:-0}; CAT=${5:-1543}; NAME=${HOSTED:-k${ID}c.png}; F=${PRINT:-docs/print-files/$ID-camo.png}
read W H < <(python3 -c "from PIL import Image;print(*Image.open('$F').size)")
BU=$(curl -s -H "Authorization: Bearer $PRINTFUL_TOKEN" https://api.printful.com/files/1080398177 | python3 -c "import json,sys;print(json.load(sys.stdin)['result']['preview_url'])")
FW=$FW TOP=$TOP python3 scripts/pf-mockup.py $CAT "https://raw.githubusercontent.com/captainunderpantz67/graphicteesco/main/docs/hosted/$NAME" $W $H "$BU" $VS $S/mk$ID.json 2>&1 | grep -c http
