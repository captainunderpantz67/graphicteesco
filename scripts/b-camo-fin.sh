#!/bin/bash
# b-camo-fin.sh <id> <handle> <alt base> <"kw:vol:kd"> <art.png> <colors comma list> <mock.jpg>...: lane B camo twin finish (keyword map, retired cover, local audit, review sheet). Needs $S/spec<id>.json and mk files.
cd "$(dirname "$0")/.."; export PATH=/usr/bin:$PATH
S=${S:-/tmp/claude-0/-home-user-graphicteesco/e2d59130-111b-51db-bf6c-1ae31c4d7325/scratchpad}
ID=$1; H=$2; B=$3; KW=$4; ART=$5; COLS=$6; shift 6
python3 scripts/kwmap-add.py $H "$KW"
H=$H B=$B COLS=$COLS S=$S ID=$ID python3 - <<'P'
import json, os
e = os.environ; H, B, S, ID = e['H'], e['B'], e['S'], e['ID']
p = 'src/data/retired-covers.json'; d = json.load(open(p))
if H not in d: d.append(H); json.dump(d, open(p, 'w'), indent=0); open(p, 'a').write('\n')
m = [{'url': 'https://x/%d.jpg' % n, 'alt': '%s, %s, front view' % (B, c), 'color': c} for n, c in enumerate(e['COLS'].split(','))] + [{'url': 'https://x/9.jpg', 'alt': B + ', back view with Graphic Tees Co. neck logo', 'color': None}]
json.dump(m, open('%s/media%s.json' % (S, ID), 'w'))
P
python3 scripts/audit-local.py $S/spec$ID.json $S/media$ID.json 2>&1 | grep -v -i deprec | grep -v "p = {" | tail -5
python3 scripts/review-sheet.py $ID $ART "$@" >/dev/null 2>&1; ls docs/review/$ID.jpg
python3 -c "import json;print([k for k in json.load(open('docs/product-keyword-map.json')) if k not in('_note','products')])"
