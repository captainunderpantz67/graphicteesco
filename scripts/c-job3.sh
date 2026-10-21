#!/bin/bash
# c-job.sh <dir> <shopify numeric id> <WRIST> <hosttag> <ash print> <light print> [SECOND=Navy lead handled by Black pass]
# waits for the Printful import, preps (files), queues behind other syncs, syncs Ash+Navy then Black, makes mockups, touches <dir>/job.done
cd /home/user/graphicteesco; D=$1; N=$2; W=$3; T=$4; A=$5; L=$6
for i in $(seq 1 40); do P=$(/usr/bin/python3 scripts/pf-find.py $N | awk '{print $1}'); [ -n "$P" ] && break; sleep 15; done
echo $P > $D/pid
for try in a b c; do
  HOSTTAG=$T$try /usr/bin/python3 scripts/c-zipbuild.py prep $D $D/chest_src.png "$W" $A $L > $D/prep.log 2>&1
  /usr/bin/python3 -c "import json,sys;d=json.load(open('$D/ids.json'));sys.exit(0 if all(v and v.get('id') for v in d.values()) else 1)" && break
  sleep 30
done

flock /tmp/c-sync.lock bash -c "/usr/bin/python3 scripts/c-zipbuild.py sync $D $P > $D/sync.log 2>&1; SECOND=Black SECOND_VID=17295 SECOND_IDS='{\"S\":17295,\"M\":17296,\"L\":17297,\"XL\":17298,\"2XL\":17299,\"3XL\":17300}' /usr/bin/python3 scripts/c-zipbuild.py sync $D $P > $D/sync_black.log 2>&1"
scripts/c-mock2.sh $D
touch $D/job.done
