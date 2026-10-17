#!/bin/bash
# artnext-tee.sh <in.json> <out-prefix> [tee3001|tee6400]: tee3001 spec -> productSet vars (DRAFT, no compare-at, tees category) at <out-prefix>.vars.json; prints it compact.
cd "$(dirname "$0")/.."
python3 scripts/${3:-tee3001}-spec.py "$2.spec.json" "$1" >/dev/null && python3 - "$2.spec.json" "$1" <<'PY'
import json, sys
p = sys.argv[1]; s = json.load(open(p)); s['compare'] = None; i = json.load(open(sys.argv[2])); s['slug'] = i.get('slug', s['slug']); json.dump(s, open(p, 'w'))
PY
python3 scripts/mkvars.py "$2.spec.json" > "$2.vars.json" && python3 - "$2.vars.json" <<'PY'
import json, sys
p = sys.argv[1]; d = json.load(open(p)); d['input']['category'] = 'gid://shopify/TaxonomyCategory/aa-1-13-8'
for v in d['input']['variants']: v.pop('compareAtPrice', None)
json.dump(d, open(p, 'w'), separators=(',', ':'), ensure_ascii=False); print(len(open(p).read()), 'bytes')
PY
