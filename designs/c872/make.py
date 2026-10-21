import sys; sys.path.insert(0,'.')
from designs.lib import *
a=Image.open('designs/c872/art_only.png').convert('RGBA')
W=3000
for tag,hf,pf,key in (('ash',(40,62,46,255),(171,72,36,255),CREAM),('navy',CREAM,(232,128,76,255),(26,34,62,255))):
    top=[line('SAT 11 HOURS.','fraunces',0.97,W,hf,key,kw=15)]
    bot=[line('SAW A','fraunces',1.0,W,pf,key,kw=15),line('SQUIRREL.','fraunces',1.0,W,pf,key,kw=15)]
    aw=int(W*0.47); art=a.resize((aw,int(a.height*aw/a.width)))
    o=lockup(art,W,top,bot,'872-sat-11-hours-'+tag,{'grey':(150,150,150,255),'navy':(26,34,62,255)},g=40)
    th=top[0].height+sum(b.height for b in bot)
    print(tag,'head',top[0].width,'punch',[b.width for b in bot],'type',th,'of',o.height,round(th/o.height,2),'subject',art.width,round(art.width/W,2),o.size, 'aspect',round(o.height/o.width,2))
