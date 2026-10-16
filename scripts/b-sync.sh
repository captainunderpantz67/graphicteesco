#!/bin/bash
# b-sync.sh: gsync.sh, then verify docs/product-keyword-map.json still parses (the append-only merge can truncate an entry); exits 1 if broken.
cd "$(dirname "$0")/.."
scripts/gsync.sh | tail -1
python3 -c "import json;json.load(open('docs/product-keyword-map.json'))" || { echo "KEYWORD MAP BROKEN"; exit 1; }
