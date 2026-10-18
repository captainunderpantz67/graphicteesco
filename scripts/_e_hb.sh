#!/bin/bash
# lane E heartbeat: refresh the lock line's timestamp text and push, so a running lane E session keeps a fresh [E] commit (docs/roles/builder.md lock rule)
cd "$(dirname "$0")/.."
exec 9>/tmp/claude-0/e-git.lock; flock 9
sed -i "0,/^RUNNING lane E since .*/s//RUNNING lane E since 2026-10-18 05:15 UTC (syncing queued Printful links; heartbeat $(date -u '+%H:%M') UTC)/" docs/intake-log.md
git add docs/intake-log.md; git commit -qm "[E] heartbeat: lane E still syncing" 
scripts/_e_sync.sh
