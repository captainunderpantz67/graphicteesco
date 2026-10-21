from PIL import Image, ImageDraw
import math
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
cx,cy,R=640,900,570
d.ellipse((cx-R,cy-R,cx+R,cy+R),outline=0,width=110)
# spiral of the rolled mat end
pts=[];t=0
while t<4.6*math.pi:
    r=40+t*37; pts.append((cx+r*math.cos(t),cy+r*math.sin(t)));t+=0.1
d.line(pts,fill=0,width=75,joint='curve')
# strap under the roll
# pilates ball with a shine and a valve
bx,by,br=1530,1450,330
d.ellipse((bx-br,by-br,bx+br,by+br),fill=255,outline=0,width=110)
d.arc((bx-210,by-210,bx+210,by+210),190,290,fill=0,width=80)
im.save('designs/c914/chest_src.png'); im.resize((500,500)).save('designs/c914/icon_view.png')
