#!/bin/bash
# boxer-finish.sh <id> <handle> <keyword> <cover alt> <log line>: cover webp from the Printful front mockup, covers.ts row, keyword map, review sheet, REVIEW status + logs, build, commit, push.
cd "$(dirname "$0")/.."
S=/tmp/claude-0/-home-user-graphicteesco/e96ad048-1ef0-58eb-a2b0-8a63365c14f6/scratchpad
ID=$1; H=$2; KW=$3; ALT=$4; LOG=$5
python3 - <<PY
import json, re
from PIL import Image
Image.open('$S/m${ID}_Front.jpg').convert('RGB').resize((1000, 1000)).save('public/covers/$H.webp', 'WEBP', quality=82)
p = 'src/data/covers.ts'; s = open(p).read(); m = re.search(r"\n\};\n", s)
s = s[:m.start() + 1] + "  '$H': { src: '/covers/$H.webp', alt: '$ALT' },\n" + s[m.start() + 1:]; open(p, 'w').write(s)
k = json.load(open('docs/product-keyword-map.json')); k['products']['$H'] = {'claimed': ['$KW'], 'measured': '2026-10-18'}
json.dump(k, open('docs/product-keyword-map.json', 'w'), indent=1, ensure_ascii=False)
PY
python3 scripts/review-sheet.py $ID designs/b$ID/boxer-print.png public/covers/$H.webp $S/m${ID}_Front.jpg $S/m${ID}_Back.jpg
F=$(ls docs/pipeline/$ID-*.md); sed -i '1s/.*/status: REVIEW/' $F; echo "$LOG" >> $F
N=$(date -u '+%Y-%m-%d %H:%M UTC')
echo "- $N [B] REVIEW #$ID boxer briefs ($H); sheet docs/review/$ID.jpg" >> $F
npx astro build 2>&1 | grep -E "error|Complete" | head -3
grep -n "^<<<<<<<\|^=======$\|^>>>>>>>" docs/product-keyword-map.json src/data/covers.ts docs/model-registry.md docs/intake-log.md
python3 -m json.tool docs/product-keyword-map.json >/dev/null && node scripts/cohesion-audit.mjs --handle $H 2>&1 | tail -4
