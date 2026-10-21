from PIL import Image, ImageDraw
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
cx,cy,R=1000,780,520
d.ellipse((cx-R,cy-R,cx+R,cy+R),outline=0,width=110)
for x,y in ((850,640),(1010,600),(1160,660),(780,800),(940,780),(1100,820),(860,950),(1020,960)):
    d.ellipse((x-50,y-50,x+50,y+50),fill=0)
# tee
d.polygon([(880,1330),(1120,1330),(1075,1450),(1060,1600),(940,1600),(925,1450)],fill=0)
d.rounded_rectangle((760,1280,1240,1380),50,fill=0)
# bow at upper right of ball
bx,by=1560,300
d.polygon([(bx,by),(bx+200,by-120),(bx+200,by+120)],fill=0)
d.polygon([(bx,by),(bx-200,by-120),(bx-200,by+120)],fill=0)
d.ellipse((bx-85,by-85,bx+85,by+85),fill=255); d.ellipse((bx-55,by-55,bx+55,by+55),fill=0)
im.save('designs/c905/chest_src.png'); im.resize((500,500)).save('designs/c905/icon_view.png')
