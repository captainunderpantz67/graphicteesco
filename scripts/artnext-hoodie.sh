#!/bin/bash
# artnext-hoodie.sh <out-prefix> "<tags comma>" <hoodie-spec.py args...>: hoodie-spec -> productSet vars (DRAFT, no compare-at, hoodies category) at <out-prefix>.vars.json
cd "$(dirname "$0")/.."
P=$1; TAGS=$2; shift 2
python3 scripts/hoodie-spec.py "$P.spec.json" "$@" >/dev/null && python3 - "$P.spec.json" "$TAGS" <<'PY'
import json, sys
p = sys.argv[1]; s = json.load(open(p)); s['compare'] = None; s['tags'] = sys.argv[2].split(','); json.dump(s, open(p, 'w'))
PY
python3 scripts/mkvars.py "$P.spec.json" > "$P.vars.json" && python3 - "$P.vars.json" <<'PY'
import json, sys
p = sys.argv[1]; d = json.load(open(p)); d['input']['category'] = 'gid://shopify/TaxonomyCategory/aa-1-13-13'
for v in d['input']['variants']: v.pop('compareAtPrice', None)
json.dump(d, open(p, 'w'), separators=(',', ':'), ensure_ascii=False); print(len(open(p).read()), 'bytes')
PY
