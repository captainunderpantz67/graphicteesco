import sys; sys.path.insert(0,'.')
from designs.lib import *
im=Image.open('designs/e535b/print.png').convert('RGBA'); W=im.width
art=im.crop((0,397,W,3115))
DK=(34,52,79,255); RED=(168,36,36,255)
h1=line("TRAVEL BALL:",'alfa',0.985,W,DK,CREAM,kw=27); h2=line("PAY TO SUNBURN.",'alfa',0.985,W,RED,CREAM,kw=27)
print('headline px',h1.width,'punch px',h2.width,'heights',h1.height,h2.height)
out=lockup(art,W,[h1],[h2],'626-v2-sunburn-ash',{'ash':(200,200,200,255)}); print(out.size)
