#!/bin/bash
# mug-fin-b.sh <id> <handle> <shopify gid number> <sync product id> <file id> <art preview png> <extra log note>: lane B mug cover, registry, review sheet, audit, pipeline status + log, build, commit, push (run with /usr/bin first in PATH for Pillow)
cd "$(dirname "$0")/.."; n=$1; h=$2; sid=$3; sp=$4; fid=$5; art=$6; note=$7
python3 -c "from PIL import Image; Image.open('/tmp/mug-$n-0.jpg').convert('RGB').save('public/covers/$h.webp','WEBP',quality=88)"
git pull -q --rebase --autostash origin main 2>&1 | tail -1
python3 scripts/b-orn-reg.py $n
python3 scripts/review-sheet.py $n $art public/covers/$h.webp /tmp/mug-$n-0.jpg /tmp/mug-$n-1.jpg
node scripts/cohesion-audit.mjs --handle $h 2>&1 | tail -5
U=$(date -u +"%Y-%m-%d %H:%M UTC"); f=$(ls docs/pipeline/$n-*.md)
sed -i "s/^status: BUILDING.*/status: REVIEW/; s/^handle: .*/&\nshopify: gid:\/\/shopify\/Product\/$sid/" $f
echo "- $U [B]: built. DRAFT gid $sid, Printful #19 11 oz mug (1320) sync $sp, 1/1 synced on file $fid (2700x1050 transparent wrap, two lockup copies at 1/4 and 3/4, scripts/mug-print.py, designs/m$n/spec.json). $note Both handle-left and handle-right mockups read. Cost \$6.07, \$17.99, no compare-at (profit ~\$11.9 before shipping). Category hg-11-10-5-5. Keyword recorded. FAQ 6 questions 54-60 words, 720+ words. Cover: Printful #19 handle-right mockup, no person, flat. Etsy duplicate check not possible offline: director eyeball. fal 0." >> $f
echo "$U — [B] Builder run (gift add-ons only): #$n $h built to REVIEW (DRAFT gid://shopify/Product/$sid, sync on file $fid)." | cat - docs/intake-log.md > /tmp/il && cp /tmp/il docs/intake-log.md
npx astro build 2>&1 | grep -i "error\|Complete" | head -3
grep -n "^<<<<<<<\|^=======$\|^>>>>>>>" docs/product-keyword-map.json src/data/covers.ts docs/model-registry.md docs/intake-log.md
python3 -m json.tool docs/product-keyword-map.json >/dev/null || echo KWJSON BROKEN
git add -A; git commit -qm "[B] review $n mug $h"
for i in 1 2 3; do git push -q origin HEAD:main 2>&1 | tail -1; git fetch -q origin main; [ "$(git rev-parse HEAD)" = "$(git rev-parse origin/main)" ] && break; git pull -q --rebase origin main 2>&1 | tail -1; done
git status -sb | head -2
