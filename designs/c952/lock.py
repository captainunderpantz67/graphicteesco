import sys; sys.path.insert(0,'.')
from designs.lib import *
W=3000; FONT='bevan'
src=Image.open('designs/c952/src_print.png').convert('RGBA').crop((0,639,3337,3817)); src=src.crop(src.getbbox())
AW=1350
art=src.resize((AW,int(src.height*AW/src.width)),Image.LANCZOS)
def build(name,head,punch,key,g=36):
    h=line('I BASICALLY',FONT,0.92,W,head,key); pl=line_same(['HOT GLUE','METAL.'],FONT,0.98,W,punch,key); p=stack(pl,W,gap=20); p=p.crop(p.getbbox())
    out=lockup(art,W,[h],[p],name,{'dark':(30,30,30,255),'ash':(190,190,190,255)},g=g)
    th=h.height+p.height+2*g
    print(name,'headline',h.width,'punch',p.width,'=%d%%'%(100*p.width/h.width),'type',th,'of',out.height,'=%.1f%%'%(100*th/out.height),'subject',art.width,'of',W,'=%.0f%%'%(100*art.width/W),'of widest %.0f%%'%(100*art.width/max(h.width,p.width)),out.size)
build('952-weld-dark',CREAM,(236,120,50,255),(20,26,44,255))
build('952-weld-light',(20,26,44,255),(190,70,30,255),CREAM)
