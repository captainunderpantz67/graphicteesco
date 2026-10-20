#!/bin/bash
# e-commit.sh <id> <dir> <intake-line> <log-text>: status REVIEW, copy prints to docs/print-files, pipeline log + intake-log line, commit, gsync, json check.
cd "$(dirname "$0")/.."; id=$1; d=$2; f=$(ls docs/pipeline/$id-*.md | head -1); now=$(date -u '+%Y-%m-%d %H:%M UTC')
sed -i '1s/.*/status: REVIEW/' $f
for p in $d/print*.png; do cp "$p" docs/print-files/$id-$(basename "$p" | sed 's/print_//;s/print/main/'); done
rm -f $d/_art.png
printf -- '- %s builder [E]: %s\n' "$now" "$4" >> $f
sed -i "2i ${now/ UTC/} UTC — [E] Builder run: $3" docs/intake-log.md
git add -A && git commit -qm "[E] review $id $3" && bash scripts/gsync.sh 2>&1 | tail -1
python3 -c "import json;json.load(open('src/data/retired-covers.json'));json.load(open('src/data/design-crops.json'));json.load(open('docs/product-keyword-map.json'))" && echo json ok
