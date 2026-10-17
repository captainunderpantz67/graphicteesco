#!/bin/bash
# _resolve.sh [handle "phrase:vol:kd"...]: resolves an append-only rebase conflict (intake-log union with the lane lock first, keyword map = upstream + re-added entry), then continues
cd "$(dirname "$0")/.."
git checkout --ours docs/product-keyword-map.json 2>/dev/null
[ $# -ge 2 ] && python3 scripts/kwmap-add.py "$@"
python3 - <<'PY'
import re
p='docs/intake-log.md'; t=open(p).read()
t=re.sub(r"<<<<<<< [^\n]*\n(.*?)=======\n(.*?)>>>>>>> [^\n]*\n", lambda m:m.group(1)+m.group(2), t, flags=re.S)
l=t.split('\n'); i=[k for k,x in enumerate(l) if x.startswith('RUNNING lane A')]
if i: x=l.pop(i[0]); l.insert(0,x)
seen=set(); out=[]
for x in l:
    if x.startswith('RUNNING') and x in seen: continue
    seen.add(x); out.append(x)
open(p,'w').write('\n'.join(out))
PY
git add -A; GIT_EDITOR=true git rebase --continue 2>&1 | tail -1
