from PIL import Image, ImageDraw
import math
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
# dome head: filled silhouette with cut-out face area
d.ellipse((520,100,1480,1000),fill=0)
d.rectangle((520,640,1480,1000),fill=0)
# heavy-lidded eyes (white eyeball with lid bar and pupil)
for ex in (770,1230):
    d.ellipse((ex-170,500,ex+170,840),fill=255)
    d.pieslice((ex-170,500,ex+170,840),180,360,fill=0)
    d.rectangle((ex-170,665,ex+170,690),fill=0)
    d.ellipse((ex-48,720,ex+48,816),fill=0)
# six curling arms below the head
def arm(x0,y0,pts,curl_c,curl_r,start,end):
    d.line([(x0,y0)]+pts,fill=0,width=120,joint='curve')
    d.arc((curl_c[0]-curl_r,curl_c[1]-curl_r,curl_c[0]+curl_r,curl_c[1]+curl_r),start,end,fill=0,width=110)
arm(620,950,[(500,1250),(430,1420)],(335,1445),105,330,150)
arm(780,980,[(720,1300),(650,1530)],(560,1560),95,330,150)
arm(1380,950,[(1500,1250),(1570,1420)],(1665,1445),105,30,210)
arm(1220,980,[(1280,1300),(1350,1530)],(1440,1560),95,30,210)
# two arms folded across the front (cross), with sucker dots knocked out
d.line((640,1180,1360,1420),fill=0,width=135); d.line((1360,1180,640,1420),fill=0,width=135)
for x,y in ((740,1230),(860,1270),(980,1310),(1100,1350),(1260,1230),(1140,1270),(900,1350)):
    d.ellipse((x-24,y-24,x+24,y+24),fill=255)
im.save('designs/c910/chest_src.png'); im.resize((500,500)).save('designs/c910/icon_view.png')
