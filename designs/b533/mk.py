import sys; sys.path.insert(0,'.')
from designs.lib import *
art=Image.open('designs/b533/art.png').convert('RGBA'); art=art.crop(art.getbbox()); print('art',art.size)
W=3600
BR=(58,34,24,255); PK=(224,69,123,255); KEY=(58,34,24,255)
top=line('HOLD YOUR HORSES,','rye',0.92,W,BR,BR,kw=15)
# same size both: punch fitted wider
bot=line('I\'M OVERSTIMULATED.','rye',1.0,W,PK,BR,kw=15)
top=line('HOLD YOUR HORSES,','rye',0.92*17/19*1.0,W,BR,BR,kw=15)
aw=int(W*0.80); art=art.resize((aw,int(art.height*aw/art.width)))
lockup(art,W,[top],[bot],'533-hyh',{'white':(255,255,255,255),'pink':(247,205,220,255),'nat':(235,225,205,255)})
print('headline',top.width,'punch',bot.width,'art',art.width, art.width/bot.width)
