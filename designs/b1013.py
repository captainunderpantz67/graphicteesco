import sys; sys.path.insert(0,'.')
from designs.lib import *
W=1800
def build(name,hfill,pfill,key,kw,dash):
    h=line_same(['OUT OF','MY WAY.'],'alfa',0.80,W,hfill,key,kw=kw)
    p=line_same(['I HAVE','A COUPON.'],'bowlby',1.0,W-120,pfill,key,kw=kw)
    t=stack(h,W,gap=16); b=stack(p,W-120,gap=16)
    pad=60; bw,bh=b.width+2*pad,b.height+2*pad
    box=Image.new('RGBA',(W,bh),(0,0,0,0)); d=ImageDraw.Draw(box)
    x0,y0,x1,y1=6,6,W-7,bh-7
    # dashed coupon outline
    def seg(a,b_,fixed,horiz):
        s=a
        while s<b_:
            e=min(s+44,b_)
            d.line(((s,fixed),(e,fixed)) if horiz else ((fixed,s),(fixed,e)),fill=dash,width=10); s+=76
    seg(x0+30,x1-30,y0,True); seg(x0+30,x1-30,y1,True); seg(y0+30,y1-30,x0,False); seg(y0+30,y1-30,x1,False)
    box.alpha_composite(b,((W-b.width)//2,pad))
    H=t.height+50+bh
    o=Image.new('RGBA',(W,H),(0,0,0,0)); o.alpha_composite(t,(0,0)); o.alpha_composite(box,(0,t.height+50)); o.save(f'docs/print-files/{name}.png')
    print(name,o.size,'headline',[x.width for x in h],'punch',[x.width for x in p],'type/print h',(sum(x.height for x in h)+sum(x.height for x in p))/H)
RED=(205,38,42,255); INK=(26,26,30,255); GOLD=(244,190,64,255)
build('b1013-light',RED,INK,INK,3,INK)
build('b1013-dark',GOLD,CREAM,(18,18,20,255),21,CREAM)
