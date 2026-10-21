from PIL import Image, ImageDraw
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
# dome (outlined half disc)
d.pieslice((600,360,1400,1160),180,360,outline=0,width=110)
# heavy-lidded unimpressed eye in the dome
d.ellipse((860,610,1140,870),outline=0,width=60)
d.pieslice((860,610,1140,870),180,360,fill=0)
d.ellipse((960,740,1040,820),fill=0)
# saucer disc with lights
d.ellipse((220,880,1780,1360),fill=0)
for x in (500,760,1000,1240,1500):
    d.ellipse((x-55,1040,x+55,1150),fill=255)
# little landing legs and a short tractor beam
d.line((640,1320,520,1580),fill=0,width=90); d.line((1360,1320,1480,1580),fill=0,width=90)
d.rectangle((420,1550,640,1620),fill=0); d.rectangle((1360,1550,1580,1620),fill=0)
im.save('designs/c917/chest_src.png'); im.resize((500,500)).save('designs/c917/icon_view.png')
