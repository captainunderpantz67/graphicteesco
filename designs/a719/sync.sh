cd /home/user/graphicteesco
for c in White Natural Pink "Heather Stone"; do ONLY="/ $c /" FORCE=1 FW=1650 TOP=75 /usr/bin/python3 scripts/pf-sync.py setfile 483407238 $(cat designs/a719/fid-dark.txt) 1080398177; done
for c in Black Navy Maroon "Forest Green"; do ONLY="/ $c /" FORCE=1 FW=1650 TOP=75 /usr/bin/python3 scripts/pf-sync.py setfile 483407238 $(cat designs/a719/fid-light.txt) 1080398177; done
echo DONE
