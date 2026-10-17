#!/bin/sh
# _il.sh "<text>": inserts an intake-log line under the lock line (line 1)
sed -i "1a $(date -u '+%Y-%m-%d %H:%M') UTC — [A] $1" docs/intake-log.md
