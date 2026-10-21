#!/bin/bash
# c_push.sh "<commit msg>": astro build, conflict-marker check, commit, merge origin/main (never rebase), push
cd "$(dirname "$0")/.."
npx astro build 2>&1 | grep -E "error|Complete" | head -3
grep -n "^<<<<<<<\|^=======$\|^>>>>>>>" docs/product-keyword-map.json src/data/covers.ts docs/model-registry.md docs/intake-log.md
git add -A; git commit -qm "$1"
for i in 1 2 3 4; do git pull -q --no-rebase --no-edit origin main 2>&1 | tail -2; /usr/bin/python3 -c "import json;json.load(open('docs/product-keyword-map.json'));json.load(open('src/data/retired-covers.json'))" || exit 1; git push -q origin main 2>&1 | tail -1 && git diff --quiet origin/main HEAD && { echo pushed; exit 0; }; done
