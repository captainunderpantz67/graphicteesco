import sys; sys.path.insert(0,'.')
from designs.lib import *
im=Image.open('docs/print-files/465-i-rest-my-case.png').convert('RGBA'); W=im.width
art=im.crop((0,348,W,3163))
NAVY=(34,66,130,255); RED=(168,38,28,255); MUST=(236,176,74,255); DK=(24,38,84,255)
for tag,c1,k1,c2,k2,bg in (('sand',NAVY,CREAM,RED,CREAM,(214,196,160,255)),('navy',CREAM,DK,MUST,DK,(38,50,88,255))):
    h1=line("THIS NAP IS",'bevan',0.97,W,c1,k1,kw=23,track=8); h2=line("BILLABLE.",'alfa',0.975,W,c2,k2,kw=29)
    print(tag,'headline px',h1.width,'punch px',h2.width,'heights',h1.height,h2.height)
    out=lockup(art,W,[h1],[h2],f'465-v2-billable-{tag}',{tag:bg}); print(out.size,out.height/out.width)
