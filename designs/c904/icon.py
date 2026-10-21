from PIL import Image, ImageDraw
import math
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
cx,cy=1000,560
# petals
for k in range(8):
    a=math.radians(k*45); px,py=cx+math.cos(a)*330,cy+math.sin(a)*330
    d.ellipse((px-190,py-190,px+190,py+190),fill=0)
d.ellipse((cx-210,cy-210,cx+210,cy+210),fill=255)   # open centre
d.ellipse((cx-110,cy-110,cx+110,cy+110),fill=0)
# stem + leaves
d.line((cx,cy+330,cx,1500),fill=0,width=120)
d.polygon([(cx,1330),(cx-620,1240),(cx-760,970),(cx-300,1030),(cx,1210)],fill=0)
d.polygon([(cx,1440),(cx+620,1350),(cx+780,1080),(cx+300,1140),(cx,1320)],fill=0)
im.save('designs/c904/chest_src.png'); im.resize((500,500)).save('designs/c904/icon_view.png')
