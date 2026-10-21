from PIL import Image, ImageDraw
import math
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
# Christmas tree: three stacked tiers, trunk, five-point star on top
d.polygon([(1000,380),(1480,900),(520,900)],fill=0)
d.polygon([(1000,700),(1620,1350),(380,1350)],fill=0)
d.polygon([(1000,1100),(1760,1800),(240,1800)],fill=0)
d.rectangle((900,1780,1100,1960),fill=0)
cx,cy,R,r=1000,270,200,85
pts=[]
for i in range(10):
    ang=-math.pi/2+i*math.pi/5; rad=R if i%2==0 else r
    pts.append((cx+rad*math.cos(ang),cy+rad*math.sin(ang)))
d.polygon(pts,fill=0)
im=im.resize((2000,1760)); im.save('designs/c940/chest_src.png'); im.resize((500,440)).save('designs/c940/icon_view.png')
