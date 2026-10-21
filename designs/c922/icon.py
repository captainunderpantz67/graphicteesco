from PIL import Image, ImageDraw
import math
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
cx,cy,R,r=1000,1060,900,390
pts=[]
for k in range(10):
    a=math.radians(-90+k*36); rr=R if k%2==0 else r
    pts.append((cx+math.cos(a)*rr,cy+math.sin(a)*rr))
d.polygon(pts,fill=0)
# face knocked out of the star: two eyes and a small smile
d.ellipse((780,900,880,1020),fill=255); d.ellipse((1120,900,1220,1020),fill=255)
d.arc((800,960,1200,1330),30,150,fill=255,width=85)
im.save('designs/c922/chest_src.png'); im.resize((500,500)).save('designs/c922/icon_view.png')
