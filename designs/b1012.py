import sys; sys.path.insert(0,'.')
from designs.lib import *
W=1800
def build(name, hfill, pfill, key, kw):
    h=line_same(['BLACK FRIDAY','SHOPPING SQUAD'],'big',0.86,W,hfill,key,kw=kw)
    p=line_same(["I'M JUST",'THE DRIVER.'],'bevan',1.0,W,pfill,key,kw=kw)
    out=lockup(None,W,h,p,name,{'blk':(20,20,22,255),'wht':(255,255,255,255)}) if False else None
    t=stack(h,W,gap=16); b=stack(p,W,gap=16); H=t.height+40+b.height
    o=Image.new('RGBA',(W,H),(0,0,0,0)); o.alpha_composite(t,(0,0)); o.alpha_composite(b,(0,t.height+40)); o.save(f'docs/print-files/{name}.png')
    print(name,o.size,'headline',[x.width for x in h],'punch',[x.width for x in p],'type h/print h',(sum(x.height for x in h)+sum(x.height for x in p))/H)
    return o
RED=(205,38,42,255); INK=(26,26,30,255); GOLD=(244,190,64,255)
build('b1012-light',RED,INK,INK,3)
build('b1012-dark',GOLD,CREAM,(18,18,20,255),21)
