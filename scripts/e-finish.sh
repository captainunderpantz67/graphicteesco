#!/bin/bash
# e-finish.sh <id> <handle> <art.png> <mock1.jpg> <mock2.jpg>: retire the cover (mid-list insert, no trailing-comma clash), review sheet, design crops, audit --handle, astro build.
cd "$(dirname "$0")/.."; PY=${PY:-/tmp/claude-0/venv/bin/python}
grep -q "\"$2\"" src/data/retired-covers.json || sed -i "2i \"$2\"," src/data/retired-covers.json
python3 -c "import json;json.load(open('src/data/retired-covers.json'))" || exit 1
$PY scripts/review-sheet.py "$1" "$3" "$4" "$4" "$5" | tail -1
$PY scripts/design-crops.py | tail -1
node scripts/cohesion-audit.mjs --handle "$2" 2>&1 | tail -3
npx astro build 2>&1 | grep -c Complete
