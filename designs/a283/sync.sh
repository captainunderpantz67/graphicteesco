cd /home/user/graphicteesco
FORCE=1 FW=1500 TOP=75 /usr/bin/python3 scripts/pf-sync.py setfile 482392944 $(cat designs/a283/fid.txt) 1080398177
FORCE=1 FW=1650 TOP=75 /usr/bin/python3 scripts/pf-sync.py setfile 482677575 $(cat designs/a283/fid.txt) 1080398177
echo DONE
