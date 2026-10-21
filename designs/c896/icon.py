from PIL import Image, ImageDraw
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
# kettlebell: handle ring + body
d.arc((430,360,1070,1000),180,360,fill=0,width=110)
d.rectangle((430,640,540,780),fill=0); d.rectangle((960,640,1070,780),fill=0)
d.ellipse((260,620,1240,1600),fill=0)
d.rectangle((420,1500,1080,1640),fill=0)
d.ellipse((560,1020,940,1400),fill=255); d.ellipse((650,1110,850,1310),fill=0)   # weight plate ring
# phone face-down beside it
d.rounded_rectangle((1320,1000,1780,1640),70,fill=0)
d.ellipse((1390,1060,1510,1180),fill=255); d.ellipse((1420,1090,1480,1150),fill=0)  # camera lens on the back
d.rounded_rectangle((1330,1640,1770,1700),20,fill=0)
im.save('designs/c896/chest_src.png'); im.resize((500,500)).save('designs/c896/icon_view.png')
