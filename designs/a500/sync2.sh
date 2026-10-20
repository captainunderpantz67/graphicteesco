cd /home/user/graphicteesco
ONLY="/ Sand /" FORCE=1 /usr/bin/python3 scripts/pf-emb-sync.py 482690229 "#01784E" $(cat designs/a500/fid2-green.txt)
ONLY="/ Navy /" FORCE=1 /usr/bin/python3 scripts/pf-emb-sync.py 482690229 "#FFFFFF" $(cat designs/a500/fid2-white.txt)
echo DONE
