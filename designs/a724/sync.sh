cd /home/user/graphicteesco
for c in White Natural Pink "Heather Stone"; do ONLY="/ $c /" FORCE=1 FW=1650 TOP=75 /usr/bin/python3 scripts/pf-sync.py setfile 483423021 $(cat designs/a724/fid-dark.txt) 1080398177; done
for c in Black Navy Maroon "Forest Green"; do ONLY="/ $c /" FORCE=1 FW=1650 TOP=75 /usr/bin/python3 scripts/pf-sync.py setfile 483423021 $(cat designs/a724/fid-light.txt) 1080398177; done
echo DONE
