cd /home/user/graphicteesco
export FW=1650 TOP=75 FORCE=1
ONLY='/ Black /' python3 scripts/pf-sync.py setfile 483377472 1090355349 1080398177 > 'designs/e655/m/sync_Black.log' 2>&1
ONLY='/ Navy /' python3 scripts/pf-sync.py setfile 483377472 1090355349 1080398177 > 'designs/e655/m/sync_Navy.log' 2>&1
ONLY='/ Dark Grey Heather /' python3 scripts/pf-sync.py setfile 483377472 1090355349 1080398177 > 'designs/e655/m/sync_Dark Grey Heather.log' 2>&1
ONLY='/ Heather Forest /' python3 scripts/pf-sync.py setfile 483377472 1090355349 1080398177 > 'designs/e655/m/sync_Heather Forest.log' 2>&1
ONLY='/ Maroon /' python3 scripts/pf-sync.py setfile 483377472 1090355349 1080398177 > 'designs/e655/m/sync_Maroon.log' 2>&1
ONLY='/ Natural /' python3 scripts/pf-sync.py setfile 483377472 1090355442 1080398177 > 'designs/e655/m/sync_Natural.log' 2>&1
ONLY='/ Ash /' python3 scripts/pf-sync.py setfile 483377472 1090355442 1080398177 > 'designs/e655/m/sync_Ash.log' 2>&1
ONLY='/ Athletic Heather /' python3 scripts/pf-sync.py setfile 483377472 1090355442 1080398177 > 'designs/e655/m/sync_Athletic Heather.log' 2>&1
export FORCE=0
for i in 1 2 3; do for c in 'Black' 'Navy' 'Dark Grey Heather' 'Heather Forest' 'Maroon'; do ONLY="/ $c /" python3 scripts/pf-sync.py setfile 483377472 1090355349 1080398177 >> 'designs/e655/m/sync_fix.log' 2>&1; done; for c in 'Natural' 'Ash' 'Athletic Heather'; do ONLY="/ $c /" python3 scripts/pf-sync.py setfile 483377472 1090355442 1080398177 >> 'designs/e655/m/sync_fix.log' 2>&1; done; done
touch designs/e655/m/sync_done
