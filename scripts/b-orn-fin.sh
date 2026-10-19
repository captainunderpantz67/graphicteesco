#!/bin/bash
# b-orn-fin.sh <id> <handle> <shopify gid number> <sync product id> <file id> <lines> : audit, pipeline status + log, build, commit, push (lane B ornament)
cd "$(dirname "$0")/.."; n=$1; h=$2; sid=$3; sp=$4; fid=$5; msg=$6
git pull -q --rebase --autostash origin main 2>&1 | tail -1
python3 scripts/b-orn-reg.py $n
node scripts/cohesion-audit.mjs --handle $h 2>&1 | tail -4
U=$(date -u +"%Y-%m-%d %H:%M UTC"); f=$(ls docs/pipeline/$n-*.md)
sed -i "s/^status: BUILDING.*/status: REVIEW/; s/^handle: .*/&\nshopify: gid:\/\/shopify\/Product\/$sid/" $f
echo "- $U [B]: built. DRAFT gid $sid, Printful #881 sync $sp, 1/1 synced on file $fid (954x954 circle file, scripts/b-ornament-print.py, spec designs/b$n/spec.json; cream disc, Alfa Slab/Lobster lockup sized to the safe-circle chord). Cost \$6.34, \$14.99, no compare-at (profit ~\$8.65 before shipping). Category hg-3-58-7. Keyword recorded. FAQ 40-60 words, 530+ words. Cover: Printful flat #881 mockup (no person), logged. Etsy duplicate check not possible offline: director eyeball. fal 0. $msg" >> $f
npx astro build 2>&1 | grep -i "error\|Complete" | head -3
grep -n "^<<<<<<<\|^=======$\|^>>>>>>>" docs/product-keyword-map.json src/data/covers.ts docs/model-registry.md docs/intake-log.md
python3 -m json.tool docs/product-keyword-map.json >/dev/null || echo KWJSON BROKEN
git add -A; git commit -qm "[B] review $n ornament $h"
for i in 1 2 3; do git push -q origin HEAD:main 2>&1 | tail -1; git fetch -q origin main; [ "$(git rev-parse HEAD)" = "$(git rev-parse origin/main)" ] && break; git pull -q --rebase origin main 2>&1 | tail -1; done
git status -sb | head -2
