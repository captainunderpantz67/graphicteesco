from PIL import Image, ImageDraw
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
d.ellipse((450,100,1550,1200),outline=0,width=115)
for ex in (780,1220):
    d.ellipse((ex-190,620,ex+190,1000),outline=0,width=70)
    d.pieslice((ex-190,620,ex+190,1000),180,360,fill=0)      # heavy lid (upper half)
    d.ellipse((ex-60,810,ex+60,930),fill=0)                  # pupil
d.rounded_rectangle((850,1040,1150,1100),30,fill=0)           # flat mouth
# folded arms: two thick bands crossing the front below the head, arm tips curling out
d.line((400,1330,1300,1560),fill=0,width=130)
d.line((1600,1330,700,1560),fill=0,width=130)
d.arc((250,1280,650,1700),100,260,fill=0,width=110)
d.arc((1350,1280,1750,1700),-80,80,fill=0,width=110)
im.save('designs/c910/chest_src.png'); im.resize((500,500)).save('designs/c910/icon_view.png')
