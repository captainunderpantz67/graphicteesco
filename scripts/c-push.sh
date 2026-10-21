#!/bin/bash
# c-push.sh "<msg>" <paths...>: add, commit, pull --rebase (kwfix on conflict), push with retries; verifies the keyword map parses
cd /home/user/graphicteesco; M=$1; shift
git add -A "$@"; git commit -qm "$M" -q
for i in 1 2 3 4 5; do
  git pull -q --rebase --autostash origin main 2>/dev/null || { /usr/bin/python3 scripts/c-kwfix.py >/dev/null; git add -A docs; GIT_EDITOR=true git rebase --continue >/dev/null 2>&1; }
  git push -q origin HEAD:main 2>/dev/null && { echo pushed; break; }; sleep 3
done
python3 -c "import json;json.load(open('docs/product-keyword-map.json'));print('map ok')"
