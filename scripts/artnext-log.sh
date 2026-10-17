#!/bin/bash
# artnext-log.sh <id> <product gid number> "<summary>": status ART-NEXT + shopify: line + log line for docs/pipeline/<id>-*.md
cd "$(dirname "$0")/.."
f=$(ls docs/pipeline/$1-*.md); sed -i "1s/.*/status: ART-NEXT/; 5a shopify: gid://shopify/Product/$2" $f
echo "- $(date -u '+%Y-%m-%d %H:%M') UTC builder [A]: ART-NEXT (fal empty): full Shopify DRAFT gid://shopify/Product/$2 ($3). Copy written from the brief's art description: re-check every sentence against the real art when it exists. No Printful sync, no images, no cover. Never publish until art + cover exist." >> $f
