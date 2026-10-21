#!/bin/bash
# c-redo.sh <dir>: re-run sync (Ash+Navy, then Black) + mockups for a dir whose ids.json is complete; touches <dir>/job.done
cd /home/user/graphicteesco; D=$1; P=$(cat $D/pid); rm -f $D/job.done $D/mock.done
flock /tmp/c-sync.lock bash -c "/usr/bin/python3 scripts/c-zipbuild.py sync $D $P > $D/sync.log 2>&1; SECOND=Black SECOND_VID=17295 SECOND_IDS='{\"S\":17295,\"M\":17296,\"L\":17297,\"XL\":17298,\"2XL\":17299,\"3XL\":17300}' /usr/bin/python3 scripts/c-zipbuild.py sync $D $P > $D/sync_black.log 2>&1"
scripts/c-mock2.sh $D
touch $D/job.done
