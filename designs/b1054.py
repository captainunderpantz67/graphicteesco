import sys; sys.path.insert(0,'.')
from designs.lib import *
W=1800
def plank_level(w,wood,grain,lvl,vial,bub,key,tilt):
    PH=170; LH=120; H=PH+LH+80
    im=Image.new('RGBA',(w,H),(0,0,0,0)); d=ImageDraw.Draw(im)
    # plank
    d.rectangle([0,LH+30,w-1,LH+30+PH],fill=wood,outline=key,width=12)
    for y in (LH+30+PH*0.3,LH+30+PH*0.55,LH+30+PH*0.8): d.line([(50,y),(w-50,y)],fill=grain,width=8)
    # level body sitting on the plank
    lx0,lx1=w*0.12,w*0.88; ly0,ly1=6,LH+30
    d.rounded_rectangle([lx0,ly0,lx1,ly1],radius=14,fill=lvl,outline=key,width=12)
    cx=(lx0+lx1)/2; vw=330
    d.rounded_rectangle([cx-vw/2,ly0+22,cx+vw/2,ly1-22],radius=30,fill=vial,outline=key,width=10)
    # bubble pushed hard to the high end
    bx=cx+vw/2-60; by=(ly0+ly1)/2
    d.ellipse([bx-42,by-30,bx+42,by+30],fill=bub,outline=key,width=8)
    for tx in (cx-vw/2+60,cx):  d.line([(tx,ly0+26),(tx,ly1-26)],fill=key,width=7)
    for x in (lx0+90,lx1-90):
        d.ellipse([x-34,by-34,x+34,by+34],fill=vial,outline=key,width=9)
    return im.rotate(tilt,expand=True,resample=Image.BICUBIC)
def build(name,hfill,pfill,wood,grain,lvl,vial,bub,key,kw):
    h=line("IT'S NOT CROOKED.",'alfa',0.94,W,hfill,key,kw=kw)
    p=line("IT'S RUSTIC.",'rye',1.0,W,pfill,key,kw=kw)
    art=plank_level(1350,wood,grain,lvl,vial,bub,key,4)
    H=h.height+30+art.height+20+p.height
    o=Image.new('RGBA',(W,H),(0,0,0,0)); y=0
    o.alpha_composite(h,((W-h.width)//2,0)); y+=h.height+30
    o.alpha_composite(art,((W-art.width)//2,y)); y+=art.height+20
    o.alpha_composite(p,((W-p.width)//2,y))
    t=(h.height+p.height)/H
    o=o.rotate(2.5,expand=True,resample=Image.BICUBIC); o=o.crop(o.getbbox())
    o.save(f'docs/print-files/{name}.png')
    print(name,o.size,'headline',h.width,'punch',p.width,'type/print h %.2f'%t,'art',art.width)
CRM=(246,236,214,255); SAW=(214,172,110,255); WAL=(120,78,46,255); NAV=(24,32,60,255); DK=(18,18,20,255); ORG=(224,138,40,255); RED=(190,62,44,255); BUB=(244,196,48,255); YEL=(244,196,48,255)
# light (Sand): dark-ink headline, no keyline-dependent fill
build('b1054-light',NAV,RED,SAW,(150,100,56,255),ORG,CRM,BUB,NAV,3)
# dark (Navy): cream headline, sawdust punch
build('b1054-dark',CRM,SAW,SAW,(150,100,56,255),ORG,CRM,BUB,DK,21)
