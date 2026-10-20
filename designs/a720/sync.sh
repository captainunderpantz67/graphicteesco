cd /home/user/graphicteesco
ONLY="/ Sand /" FORCE=1 FW=1650 TOP=75 /usr/bin/python3 scripts/pf-sync.py setfile 483407822 $(cat designs/a719/fid-dark.txt) 1080398177
ONLY="/ Navy /" FORCE=1 FW=1650 TOP=75 /usr/bin/python3 scripts/pf-sync.py setfile 483407822 $(cat designs/a719/fid-light.txt) 1080398177
echo DONE
