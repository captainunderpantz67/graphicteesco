#!/bin/bash
# b-log.sh <id> "<build log text>": status line -> REVIEW and one "[B]" log line (UTC time) appended to docs/pipeline/<id>-*.md
cd "$(dirname "$0")/.."
f=$(ls docs/pipeline/$1-*.md); sed -i '1s/.*/status: REVIEW/' $f; echo "- $(date -u '+%Y-%m-%d %H:%M') UTC [B]: $2" >> $f
