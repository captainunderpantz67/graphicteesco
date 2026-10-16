#!/bin/bash
# gsync.sh: rebase onto origin/main keeping both sides of append-only files (covers.ts, registry, keyword map, intake-log), repair the keyword-map JSON, push.
cd "$(dirname "$0")/.."
for i in 1 2 3; do
  git pull -q --rebase origin main 2>/dev/null
  while [ -d .git/rebase-merge ] || [ -d .git/rebase-apply ]; do
    for f in $(git diff --name-only --diff-filter=U); do sed -i '/^<<<<<<< /d;/^=======$/d;/^>>>>>>> /d' "$f"; git add "$f"; done
    GIT_EDITOR=true git rebase --continue >/dev/null 2>&1 || break
  done
  python3 scripts/kwmap-repair.py || exit 1
  python3 -c "import json;json.load(open('docs/product-keyword-map.json'))" || { echo "keyword map JSON broken, fix by hand"; exit 1; }
  if ! git diff --quiet; then git add -A; git commit -qm "[A] merge fixups"; fi
  git push -q origin main 2>/dev/null && { echo pushed; exit 0; }
done
echo "push failed"; exit 1
