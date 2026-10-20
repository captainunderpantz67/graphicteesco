cd /home/user/graphicteesco
FORCE=1 FW=1500 TOP=75 /usr/bin/python3 scripts/pf-sync.py setfile 482345896 $(cat designs/a257/fid3.txt) 1080398177
FORCE=1 FW=1650 TOP=75 /usr/bin/python3 scripts/pf-sync.py setfile 482346982 $(cat designs/a257/fid3.txt) 1080398177
echo DONE
