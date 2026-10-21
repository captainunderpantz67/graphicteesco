from PIL import Image, ImageDraw
import math
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
# horseshoe: thick U with open top, nail holes knocked out, small heart inside
cx,cy=1000,1000
d.pieslice((250,250,1750,1750),0,180,fill=0)            # lower half disc
d.rectangle((250,1000,610,1000+0),fill=0)
d.rectangle((250,560,640,1000),fill=0); d.rectangle((1360,560,1750,1000),fill=0)   # the two arms
d.ellipse((680,560,1320,1200),fill=255); d.rectangle((640,560,1360,1000),fill=255)  # inner opening
d.pieslice((540,540,1460,1460),0,180,fill=255)
d.rectangle((540,560,640,1000),fill=0); d.rectangle((1360,560,1460,1000),fill=0)
for ang in (200,235,270,305,340):
    pass
for x,y in ((420,690),(420,860),(1580,690),(1580,860),(560,1230),(1440,1230),(760,1470),(1240,1470)):
    d.ellipse((x-45,y-60,x+45,y+60),fill=255)
# heart inside the shoe
hx,hy=1000,880
d.ellipse((hx-210,hy-190,hx,hy+20),fill=0); d.ellipse((hx,hy-190,hx+210,hy+20),fill=0)
d.polygon([(hx-208,hy-60),(hx+208,hy-60),(hx,hy+260)],fill=0)
im.save('designs/c925/chest_src.png'); im.resize((500,500)).save('designs/c925/icon_view.png')
