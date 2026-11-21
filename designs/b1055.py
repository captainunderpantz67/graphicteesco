import sys, math; sys.path.insert(0,'.')
from designs.lib import *
W=1800
def arch(img, R_extra=0, sweep=70):
    # bend a flat line image into an upward arch
    w,h=img.size; R=w/ (2*math.sin(math.radians(sweep/2)))
    out=Image.new('RGBA',(w+200,int(h+R*(1-math.cos(math.radians(sweep/2)))+40)),(0,0,0,0))
    for x in range(w):
        t=(x-w/2)/R; dy=R*(1-math.cos(t))  # edges drop
        col=img.crop((x,0,x+1,h)); out.alpha_composite(col,(100+x,int(dy)+20))
    return out.crop(out.getbbox())
def roof(width,H,ink,shingle,key):
    im=Image.new('RGBA',(width,H),(0,0,0,0)); d=ImageDraw.Draw(im)
    apex=(width//2,10); L=(10,H-10); Rr=(width-10,H-10)
    poly=[L,apex,Rr]
    d.polygon(poly,fill=ink)
    # shingle rows: clip lines to triangle
    mask=Image.new('L',im.size,0); ImageDraw.Draw(mask).polygon(poly,fill=255)
    rows=Image.new('RGBA',im.size,(0,0,0,0)); rd=ImageDraw.Draw(rows)
    rh=46
    for r,y in enumerate(range(60,H,rh)):
        rd.line([(0,y),(width,y)],fill=shingle,width=9)
        off=0 if r%2==0 else 60
        for x in range(off,width,120): rd.line([(x,y),(x,y+rh)],fill=shingle,width=9)
    im.paste(rows,(0,0),Image.composite(rows.split()[3],Image.new('L',im.size,0),mask))
    # outline
    d=ImageDraw.Draw(im); d.line([L,apex,Rr,L],fill=key,width=16,joint='curve')
    # chimney
    cx=int(width*0.70); cy=int(H*0.45)
    d.rectangle([cx,cy-90,cx+110,cy+40],fill=ink,outline=key,width=14)
    d.rectangle([cx-12,cy-120,cx+122,cy-88],fill=ink,outline=key,width=14)
    return im
def build(name,hfill,pfill,roof_ink,shingle,key,kw):
    h=line('TECHNICALLY','graduate',0.80,W,hfill,key,kw=kw)
    ha=arch(h,sweep=55)
    p=line('ABOVE EVERYONE.','fraunces',1.0,W,pfill,key,kw=kw)
    r=roof(W,330,roof_ink,shingle,key)
    H=ha.height+30+p.height+10+r.height
    o=Image.new('RGBA',(W,H),(0,0,0,0)); y=0
    o.alpha_composite(ha,((W-ha.width)//2,y)); y+=ha.height+30
    o.alpha_composite(p,((W-p.width)//2,y)); y+=p.height+10
    o.alpha_composite(r,(0,y)); o.save(f'docs/print-files/{name}.png')
    print(name,o.size,'headline',h.width,'punch',p.width,'type/print h',(h.height+p.height)/H)
CRM=(246,236,214,255); BRICK=(190,62,44,255); SLATE=(70,84,96,255); INK=(26,26,30,255); GOLD=(244,190,64,255); DK=(18,18,20,255)
build('b1055-light',BRICK,INK,SLATE,(30,38,46,255),INK,3)
build('b1055-dark',GOLD,CRM,(120,134,146,255),(60,70,80,255),DK,21)
