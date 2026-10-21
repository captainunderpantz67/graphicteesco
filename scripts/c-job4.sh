#!/bin/bash
# c-job4.sh <dir> <WRIST> <hosttag> <ash print> <light print>: re-prep (new print/chest files), sync, mockups for an existing sync product (pid file), touches job.done
cd /home/user/graphicteesco; D=$1; W=$2; T=$3; A=$4; L=$5; P=$(cat $D/pid)
for try in a b c; do
  HOSTTAG=$T$try /usr/bin/python3 scripts/c-zipbuild.py prep $D $D/chest_src.png "$W" $A $L > $D/prep.log 2>&1
  /usr/bin/python3 -c "import json,sys;d=json.load(open('$D/ids.json'));sys.exit(0 if all(v and v.get('id') for v in d.values()) else 1)" && break
  sleep 30
done
rm -f $D/job.done $D/mock.done
flock /tmp/c-sync.lock bash -c "/usr/bin/python3 scripts/c-zipbuild.py sync $D $P > $D/sync.log 2>&1; SECOND=Black SECOND_VID=17295 SECOND_IDS='{\"S\":17295,\"M\":17296,\"L\":17297,\"XL\":17298,\"2XL\":17299,\"3XL\":17300}' /usr/bin/python3 scripts/c-zipbuild.py sync $D $P > $D/sync_black.log 2>&1"
scripts/c-mock2.sh $D
touch $D/job.done
