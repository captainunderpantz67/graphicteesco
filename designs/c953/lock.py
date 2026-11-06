import sys; sys.path.insert(0,'.')
from designs.lib import *
W=3000; FONT='fraunces'
art0=Image.open('designs/c953/art_only.png').convert('RGBA'); art0=art0.crop(art0.getbbox())
PLUM=(120,40,90,255);RASP=(190,60,80,255);CREAM=(246,236,214,255);PINK=(244,150,180,255);DK=(20,26,44,255)
def build(name,head,punch,key,AW=1350,g=36):
    art=art0.resize((AW,int(art0.height*AW/art0.width)),Image.LANCZOS)
    h=line('MOM SAID NO?',FONT,0.92,W,head,key); p=line("THAT'S CUTE.",FONT,0.98,W,punch,key)
    out=lockup(art,W,[h],[p],name,{'dark':(30,30,30,255),'ash':(190,190,190,255)},g=g)
    th=h.height+p.height+2*g
    print(name,'headline',h.width,'punch',p.width,'=%d%%'%(100*p.width/h.width),'type',th,'of',out.height,'=%.1f%%'%(100*th/out.height),'subject',art.width,'of',W,'=%.0f%%'%(100*art.width/W),'of widest %.0f%%'%(100*art.width/max(h.width,p.width)),out.size)
build('953-nana-dark',CREAM,PINK,DK)
build('953-nana-light',PLUM,RASP,CREAM)
