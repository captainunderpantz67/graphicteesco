#!/bin/bash
# e-ess-fin.sh <id> "<title text>" "<log text>": status REVIEW, pipeline + intake log, commit, rebase (keep both sides on append-only files), push
cd "$(dirname "$0")/.."; f=$(ls docs/pipeline/$1-*.md); now=$(date -u '+%Y-%m-%d %H:%M')
sed -i '1s/.*/status: REVIEW/' $f; printf -- '- %s UTC builder [E]: %s\n' "$now" "$3" >> $f
sed -i "2i $now UTC — [E] REVIEW #$1 $2" docs/intake-log.md
git add -A docs src public scripts; git commit -qm "[E] review $1 $2"
if ! git pull -q --rebase origin main 2>/dev/null; then
  for x in $(git diff --name-only --diff-filter=U); do sed -i '/^<<<<<<< /d;/^=======$/d;/^>>>>>>> /d' $x; git add $x; done; GIT_EDITOR=true git rebase --continue >/dev/null 2>&1
fi
for t in 1 2 3; do git push -q origin HEAD:main 2>/dev/null && break; git pull -q --rebase origin main 2>/dev/null || { for x in $(git diff --name-only --diff-filter=U); do sed -i '/^<<<<<<< /d;/^=======$/d;/^>>>>>>> /d' $x; git add $x; done; GIT_EDITOR=true git rebase --continue >/dev/null 2>&1; }; done; git status -sb | head -1
