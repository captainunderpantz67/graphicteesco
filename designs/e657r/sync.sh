cd /home/user/graphicteesco
export FW=1650 TOP=75 FORCE=1 PATH=/tmp/claude-0/venv/bin:$PATH
for c in 'Black' 'Navy' 'Dark Grey Heather' 'Heather Forest' 'Maroon'; do ONLY="/ $c /" python scripts/pf-sync.py setfile 483372523 1090416826 1080398177 >> designs/e657r/m/s.log 2>&1; done
for c in 'Natural' 'Ash' 'Athletic Heather'; do ONLY="/ $c /" python scripts/pf-sync.py setfile 483372523 1090416891 1080398177 >> designs/e657r/m/s.log 2>&1; done
export FORCE=0
for i in 1 2 3; do for c in 'Black' 'Navy' 'Dark Grey Heather' 'Heather Forest' 'Maroon'; do ONLY="/ $c /" python scripts/pf-sync.py setfile 483372523 1090416826 1080398177 >> designs/e657r/m/s.log 2>&1; done; for c in 'Natural' 'Ash' 'Athletic Heather'; do ONLY="/ $c /" python scripts/pf-sync.py setfile 483372523 1090416891 1080398177 >> designs/e657r/m/s.log 2>&1; done; done
touch designs/e657r/m/sync_done
