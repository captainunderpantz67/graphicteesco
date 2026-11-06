import sys; sys.path.insert(0,'.')
from designs.lib import *
W=3000; FONT='alfa'
art0=Image.open('designs/c954/art_only.png').convert('RGBA'); art0=art0.crop(art0.getbbox())
CREAM=(246,236,214,255);CORAL=(240,120,90,255);DK=(20,26,44,255);NAVY=(38,50,86,255);RUST=(170,60,40,255)
def build(name,head,punch,key,AW=1450,g=36):
    art=art0.resize((AW,int(art0.height*AW/art0.width)),Image.LANCZOS)
    h=line('SHORT GRACE.',FONT,0.92,W,head,key); p=line("HOT FOOD.",FONT,0.98,W,punch,key)
    out=lockup(art,W,[h],[p],name,{'dark':(30,30,30,255),'ash':(190,190,190,255)},g=g)
    th=h.height+p.height+2*g
    print(name,'headline',h.width,'punch',p.width,'=%d%%'%(100*p.width/h.width),'type',th,'of',out.height,'=%.1f%%'%(100*th/out.height),'subject',art.width,'of',W,'=%.0f%%'%(100*art.width/W),'of widest %.0f%%'%(100*art.width/max(h.width,p.width)),out.size)
build('954-grace-dark',CREAM,CORAL,DK)
build('954-grace-light',NAVY,RUST,CREAM)
