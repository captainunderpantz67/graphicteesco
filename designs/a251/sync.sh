cd /home/user/graphicteesco
FORCE=1 FW=1500 TOP=75 /usr/bin/python3 scripts/pf-sync.py setfile 482340395 $(cat designs/a251/fid.txt) 1080398177
FORCE=1 FW=1650 TOP=75 /usr/bin/python3 scripts/pf-sync.py setfile 482340765 $(cat designs/a251/fid.txt) 1080398177
echo DONE
