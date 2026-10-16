#!/bin/bash
# finish-item.sh <id> <shopify-numeric-id> <art.png> <cover-handle> <mk.json> <varA> <varB> <printful-file-id> <FW> <TOP> <variants>
# review sheet + queue the Printful link (runner reads /tmp/claude-0/w/queue.txt)
cd "$(dirname "$0")/.."
ID=$1; SID=$2; ART=$3; COV=$4; MK=$5; VA=$6; VB=$7; FID=$8; FW=$9; TOP=${10}; N=${11}
PID=$(python3 scripts/pf-find.py $SID | head -1 | cut -d' ' -f1)
python3 scripts/review-sheet.py $ID $ART public/covers/$COV.webp "$(python3 -c "import json;print(json.load(open('$MK'))['$VA']['front:main'])")" "$(python3 -c "import json;print(json.load(open('$MK'))['$VB']['front:main'])")"
echo "FORCE=1 FW=$FW TOP=$TOP python3 scripts/pf-sync.py setfile $PID $FID 1080398177 > /tmp/claude-0/w/sync$ID.log 2>&1" >> /tmp/claude-0/w/queue.txt
echo "sync product $PID, queued ($N variants)"
echo "$PID" > /tmp/claude-0/w/pid$ID.txt
