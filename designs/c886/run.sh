#!/bin/bash
cd /home/user/graphicteesco
while ps -eo args | grep -v grep | grep -q "c-zipbuild.py sync"; do sleep 20; done
/usr/bin/python3 scripts/c-zipbuild.py sync designs/c886 482347891 > designs/c886/sync.log 2>&1
touch designs/c886/sync.done
