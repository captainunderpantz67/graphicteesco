from PIL import Image, ImageDraw
import math
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
cx,cy=1000,1000
# crack lines radiating from the ball (zigzag)
for ang,L in ((200,300),(250,300),(300,300),(345,300),(155,300),(20,300),(110,300),(70,300)):
    a=math.radians(ang); pts=[(cx+math.cos(a)*470,cy+math.sin(a)*470)]; r=470
    k=0
    while r<L+470:
        r+=110; off=(55 if k%2==0 else -55); k+=1
        pts.append((cx+math.cos(a)*r+math.cos(a+1.57)*off, cy+math.sin(a)*r+math.sin(a+1.57)*off))
    d.line(pts,fill=0,width=70,joint='curve')
d.ellipse((cx-470,cy-470,cx+470,cy+470),fill=255)
d.ellipse((cx-420,cy-420,cx+420,cy+420),outline=0,width=110)
for x,y in ((860,860),(1010,830),(1150,920),(830,1020),(990,1000),(1140,1100),(890,1170),(1030,1190)):
    d.ellipse((x-45,y-45,x+45,y+45),fill=0)
im.save('designs/c906/chest_src.png'); im.resize((500,500)).save('designs/c906/icon_view.png')
