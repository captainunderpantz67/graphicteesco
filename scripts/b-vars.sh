#!/bin/bash
# b-vars.sh <id>: spec from $S/in<id>.json (b-spec.py) -> vars<id>.json (mkvars.py); prints the variant ids and the compact productSet variables.
cd "$(dirname "$0")/.."
S=${S:-/tmp/claude-0/-home-user-graphicteesco/a64dce1e-86db-5936-9694-ae2324b9f09b/scratchpad}
python3 scripts/b-spec.py $S/in$1.json $S/spec$1.json && python3 scripts/mkvars.py $S/spec$1.json > $S/vars$1.json || exit 1
python3 - <<PY
import json
d = json.load(open("$S/vars$1.json"))
print([(v['sku'].split('-')[-1], v['optionValues'][0]['name'], v['optionValues'][1]['name']) for v in d['input']['variants']])
print(json.dumps(d))
PY
