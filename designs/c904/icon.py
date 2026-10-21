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
d.line((cx,cy+330,cx,1850),fill=0,width=120)
d.polygon([(cx,1290),(cx-620,1180),(cx-760,880),(cx-300,960),(cx,1160)],fill=0)
d.polygon([(cx,1420),(cx+620,1310),(cx+780,1010),(cx+300,1090),(cx,1290)],fill=0)
im.save('designs/c904/chest_src.png'); im.resize((500,500)).save('designs/c904/icon_view.png')
