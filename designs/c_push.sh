#!/bin/bash
# c_push.sh "<commit msg>": astro build, commit, merge origin/main (never rebase; conflicts in append-only files keep both sides), verify JSON + no markers, push
cd "$(dirname "$0")/.."
npx astro build 2>&1 | grep -E "error|Complete" | head -3
git add -A; git commit -qm "$1"
for i in 1 2 3 4; do
  git fetch -q origin main
  if ! git merge -q --no-edit origin/main >/dev/null 2>&1; then
    for f in $(git diff --name-only --diff-filter=U); do
      if [ "$f" = docs/product-keyword-map.json ]; then /usr/bin/python3 - <<'PY'
import re,json
p='docs/product-keyword-map.json'; s=open(p).read()
s=s.replace('<<<<<<< HEAD\n','').replace('=======\n','  },\n'); s=re.sub(r'>>>>>>> [0-9a-f]+\n','',s); json.loads(s); open(p,'w').write(s)
PY
      else sed -i '/^<<<<<<< /d;/^=======$/d;/^>>>>>>> /d' "$f"; fi
      git add "$f"
    done
    git commit -qm "[C] merge origin/main" || { echo "merge failed"; git merge --abort; exit 1; }
  fi
  /usr/bin/python3 - <<'PY'
import re,json
p='src/data/retired-covers.json'; t=open(p).read()
try: json.loads(t)
except Exception:
    items=list(dict.fromkeys(re.findall(r'"([^"\n]+)"',t))); json.dump(items,open(p,'w'),indent=0,ensure_ascii=False); open(p,'a').write('\n')
PY
  git add src/data/retired-covers.json; git diff --cached --quiet || git commit -qm "[C] repair retired-covers.json"
  /usr/bin/python3 -c "import json;json.load(open('docs/product-keyword-map.json'));json.load(open('src/data/retired-covers.json'));d=json.load(open('docs/product-keyword-map.json'));assert [k for k in d if k not in('_note','products')]==[]" || { echo "JSON BROKEN, not pushing"; exit 1; }
  grep -ln "^<<<<<<<\|^>>>>>>>" docs/product-keyword-map.json src/data/covers.ts docs/model-registry.md docs/intake-log.md && { echo "MARKERS, not pushing"; exit 1; }
  git push -q origin main 2>/dev/null && { echo pushed; exit 0; }
done
echo "push failed"; exit 1
