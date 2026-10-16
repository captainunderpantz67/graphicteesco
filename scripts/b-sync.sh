#!/bin/bash
# b-sync.sh: lane B sync. Merges origin/main (never rebases), resolves covers.ts + the keyword map with scripts/b-merge.py, keeps both sides of other append-only text files,
# verifies the keyword map still parses, pushes. (gsync.sh's marker stripping truncated keyword-map entries when two lanes appended at once.)
cd "$(dirname "$0")/.."
for i in 1 2 3 4; do
  git add -A; git diff --cached --quiet || git commit -qm "[B] wip"
  git fetch -q origin main
  if ! git merge -q --no-edit origin/main >/dev/null 2>&1; then
    if git status -s | grep -qE '^(UU|AA) (docs/product-keyword-map.json|src/data/covers.ts)'; then python3 scripts/b-merge.py >/dev/null; git add docs/product-keyword-map.json src/data/covers.ts; fi
    for f in $(git diff --name-only --diff-filter=U); do sed -i '/^<<<<<<< /d;/^=======$/d;/^>>>>>>> /d' "$f"; git add "$f"; done
    git commit -qm "[B] merge origin/main" || { echo "merge failed"; git merge --abort; exit 1; }
  fi
  python3 -c "import json;json.load(open('docs/product-keyword-map.json'))" || { echo "KEYWORD MAP BROKEN"; exit 1; }
  git push -q origin main 2>/dev/null && { echo pushed; exit 0; }
done
echo "push failed"; exit 1
