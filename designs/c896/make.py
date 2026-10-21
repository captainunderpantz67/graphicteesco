import sys; sys.path.insert(0,'.')
from designs.lib import *
im=Image.open('designs/c896/src_print.png').convert('RGBA'); a=im.crop((0,465,im.width,3017)); a=a.crop(a.getbbox())
W=3000; FONT='anton'; AW=float(sys.argv[1]); HF=float(sys.argv[2])
for tag,hf,pf,key in (('ash',(150,30,40,255),(38,50,86,255),CREAM),('light',(244,120,104,255),(246,236,214,255),(20,26,44,255))):
    top=[line('LIFT HEAVY.',FONT,HF,W,hf,key,kw=15)]
    bot=[line('REPLY LATER.',FONT,1.0,W,pf,key,kw=15)]
    aw=int(W*AW); art=a.resize((aw,int(a.height*aw/a.width)))
    o=lockup(art,W,top,[bot[0]] if False else bot,'896-lift-heavy-'+tag,{'grey':(150,150,150,255),'navy':(26,34,62,255),'black':(20,20,20,255)},g=40)
    th=top[0].height+sum(b.height for b in bot)
    print(tag,'head',top[0].width,'punch',[b.width for b in bot],'type',th,'of',o.height,round(th/o.height,3),'subject',art.width,round(art.width/W,2),o.size,'aspect',round(o.height/o.width,2))
