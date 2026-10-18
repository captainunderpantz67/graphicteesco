#!/bin/bash
# _e_review.sh <id> <printful sync product id> "<intake-log title text>": verifies the sync is complete, flips the item to REVIEW, logs, pushes
cd "$(dirname "$0")/.."
ID=$1; PID=$2; TXT=$3
R=$(python3 scripts/pf-sync.py status $PID); echo "$R"
set -- $R; N=$((${#@}-1)); A=${@:$N:1}; B=${@:$#:1}
[ "$A" = "$B" ] || { echo "NOT COMPLETE"; exit 1; }
F=$(ls docs/pipeline/$ID-*.md); NOW=$(date -u '+%Y-%m-%d %H:%M')
sed -i '1s/.*/status: REVIEW/' $F; echo "- $NOW UTC builder [E]: sync $B/$B confirmed. REVIEW." >> $F
python3 scripts/_e_il.py "$NOW UTC — [E] REVIEW #$ID $TXT"
git add -A; git commit -qm "[E] review $ID"; scripts/_e_sync.sh
