#!/bin/bash
# c-job6.sh <dir> <shopify numeric id> <WRIST> <hosttag> <ash print> <light print>: NEW product: waits for the Printful import, then runs c-job5 (fresh-ids check, flock sync, mockups)
cd /home/user/graphicteesco; D=$1; N=$2
for i in $(seq 1 60); do P=$(/usr/bin/python3 scripts/pf-find.py $N | awk '{print $1}'); [ -n "$P" ] && break; sleep 15; done
echo $P > $D/pid
exec scripts/c-job5.sh $D "$3" $4 $5 $6
