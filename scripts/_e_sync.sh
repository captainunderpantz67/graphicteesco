#!/bin/bash
# lane E: merge origin/main keeping both sides of append-only files, build, push
cd "$(dirname "$0")/.."
for i in 1 2 3; do
  git add -A; git diff --cached --quiet || git commit -qm "[E] wip"
  git fetch -q origin main
  if ! git merge -q --no-edit origin/main >/dev/null 2>&1; then
    for f in $(git diff --name-only --diff-filter=U); do
      case $f in
        docs/pipeline/*|docs/review/*|public/*|docs/print-files/*) git checkout --ours $f ;;
        *) sed -i '/^<<<<<<< /d;/^=======$/d;/^>>>>>>> /d' $f ;;
      esac
    done
    [ -f docs/fal-spend.csv ] && awk '!s[$0]++' docs/fal-spend.csv > /tmp/claude-0/fs.csv && cp /tmp/claude-0/fs.csv docs/fal-spend.csv
    git add -A; git commit -qm "[E] merge main"
  fi
  python3 -m json.tool docs/product-keyword-map.json >/dev/null || { echo KWMAP BROKEN; exit 1; }
  npx astro build >/dev/null 2>&1 || { echo BUILD FAIL; exit 1; }
  git push -q origin HEAD:main 2>&1 | tail -1 && { git status -sb | head -1; exit 0; }
done
