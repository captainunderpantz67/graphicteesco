import sys; sys.path.insert(0,'.')
from designs.lib import *
W=1800
def tape(w,h,body,tick,key):
    im=Image.new('RGBA',(w,h),(0,0,0,0)); d=ImageDraw.Draw(im)
    d.rounded_rectangle([0,0,w-1,h-1],radius=10,fill=body,outline=key,width=12)
    for i,x in enumerate(range(60,w-30,45)):
        L=h*0.62 if i%4==0 else (h*0.42 if i%2==0 else h*0.28)
        d.line([(x,12),(x,12+L)],fill=tick,width=8 if i%4==0 else 6)
    # hook end
    d.rectangle([0,0,36,h-1],fill=key)
    return im
def plank(w,h,wood,grain,key):
    im=Image.new('RGBA',(w,h),(0,0,0,0)); d=ImageDraw.Draw(im)
    d.rectangle([0,0,w-1,h-1],fill=wood,outline=key,width=12)
    for y in (h*0.3,h*0.55,h*0.78): d.line([(40,y),(w-40,y)],fill=grain,width=7)
    return im
def build(name,hfill,pfill,tbody,wood,grain,key,kw):
    h=line('MEASURED TWICE.','bowlby',0.88,W,hfill,key,kw=kw)
    p=line('STILL SHORT.','bevan',1.0,W,pfill,key,kw=kw)
    TW=1640; tp=tape(TW,150,tbody,key,key); X0=(W-TW)//2
    PW=1180; pl=plank(PW,130,wood,grain,key)
    H=h.height+34+tp.height+50+p.height+34+pl.height
    o=Image.new('RGBA',(W,H),(0,0,0,0)); y=0
    o.alpha_composite(h,((W-h.width)//2,0)); y+=h.height+34
    o.alpha_composite(tp,(X0,y)); ty=y; y+=tp.height+50
    o.alpha_composite(p,((W-p.width)//2,y)); y+=p.height+34
    o.alpha_composite(pl,(X0,y))
    # dashed marker where the tape ends, running down to the short plank's gap
    d=ImageDraw.Draw(o); mx=X0+TW-6
    for yy in range(ty+tp.height+8,H,34): d.line([(mx,yy),(mx,yy+18)],fill=hfill,width=8)
    for xx in range(X0+PW+10,mx,34): d.line([(xx,y+pl.height//2),(xx+18,y+pl.height//2)],fill=hfill,width=8)
    o.save(f'docs/print-files/{name}.png')
    print(name,o.size,'headline',h.width,'punch',p.width,'type/print h',(h.height+p.height)/H)
CRM=(246,236,214,255); YEL=(244,196,48,255); WAL=(120,78,46,255); INK=(26,26,30,255); RED=(190,62,44,255); DK=(18,18,20,255)
build('b1056-light',RED,INK,YEL,(176,128,84,255),(110,70,40,255),INK,3)
build('b1056-dark',YEL,CRM,YEL,(176,128,84,255),(110,70,40,255),DK,21)
