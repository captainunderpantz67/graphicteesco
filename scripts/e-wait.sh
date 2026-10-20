#!/bin/bash
# e-wait.sh <sync_product_id>: wait until no pf-sync setfile python process runs, then print e-verify.
cd "$(dirname "$0")/.."
while pgrep -f "^/tmp/claude-0/venv/bin/python scripts/pf-sync.py setfile" >/dev/null; do sleep 10; done
/tmp/claude-0/venv/bin/python scripts/e-verify.py "$1"
