#!/bin/bash
# b-artnext-fin.sh <id> <product gid number> "<phrase:vol:kd>" "<summary>": ART-NEXT log + keyword map + commit + push (lane B)
cd "$(dirname "$0")/.."
f=$(ls docs/pipeline/$1-*.md); h=$(grep -m1 '^handle:' $f | cut -d' ' -f2)
bash scripts/artnext-log.sh $1 $2 "$4"; sed -i '$ s/builder \[A\]/builder [B]/' $f
python3 scripts/kwmap-add.py "$h" "$3"
sed -i "1i $(date -u '+%Y-%m-%d %H:%M') UTC — [B] ART-NEXT #$1 DRAFT built (no art/sync/images; fal empty): $h." docs/intake-log.md
grep -n "^<<<<<<<\|^=======$\|^>>>>>>>" docs/product-keyword-map.json src/data/covers.ts docs/model-registry.md docs/intake-log.md
git add -A; git commit -qm "[B] ART-NEXT $1 $h"; bash scripts/b-sync.sh
