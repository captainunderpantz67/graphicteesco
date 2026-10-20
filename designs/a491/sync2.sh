cd /home/user/graphicteesco
ONLY="/ Sand /" FORCE=1 /usr/bin/python3 scripts/pf-emb-sync.py 482690521 "#333366" $(cat designs/a491/fid2-navy.txt)
ONLY="/ Navy /" FORCE=1 /usr/bin/python3 scripts/pf-emb-sync.py 482690521 "#FFFFFF" $(cat designs/a491/fid2-white.txt)
echo DONE
