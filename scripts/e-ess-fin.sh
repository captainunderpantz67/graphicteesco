#!/bin/bash
# e-ess-fin.sh <id> "<title text>" "<log text>"  (env KWH=<handle> KWP="phrase:vol:kd" re-adds the keyword row after a conflict)
# status REVIEW, pipeline + intake log, commit, rebase, push. JSON files are never marker-stripped: on a conflict take upstream and re-add our row.
cd "$(dirname "$0")/.."; f=$(ls docs/pipeline/$1-*.md); now=$(date -u '+%Y-%m-%d %H:%M')
sed -i '1s/.*/status: REVIEW/' $f; printf -- '- %s UTC builder [E]: %s\n' "$now" "$3" >> $f
sed -i "2i $now UTC — [E] REVIEW #$1 $2" docs/intake-log.md
git add -A docs src public scripts; git commit -qm "[E] review $1 $2"
fix() { for x in $(git diff --name-only --diff-filter=U); do
  case $x in docs/product-keyword-map.json) git checkout --ours $x; /usr/bin/python3 scripts/kwmap-add.py "$KWH" "$KWP";; *) sed -i '/^<<<<<<< /d;/^=======$/d;/^>>>>>>> /d' $x;; esac; git add $x; done; GIT_EDITOR=true git rebase --continue >/dev/null 2>&1; }
for t in 1 2 3 4; do git push -q origin HEAD:main 2>/dev/null && break; git pull -q --rebase origin main 2>/dev/null || fix; done
/usr/bin/python3 -c "import json;json.load(open('docs/product-keyword-map.json'))" || echo "KEYWORD MAP BROKEN"; git status -sb | head -1
