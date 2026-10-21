from PIL import Image, ImageDraw
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
d.polygon([(640,820),(1240,820),(1170,1620),(710,1620)],fill=0)
d.polygon([(700,1040),(1180,1040),(1165,1300),(715,1300)],fill=255)
d.rounded_rectangle((600,740,1280,840),40,fill=0)
d.pieslice((640,480,1240,920),180,360,fill=0)
d.ellipse((780,350,1100,560),fill=0); d.ellipse((860,250,1020,370),fill=0)
d.line((940,740,1020,200),fill=0,width=50)
d.rounded_rectangle((1340,1000,1420,1350),30,fill=0); d.rounded_rectangle((1420,1050,1470,1300),20,fill=0)
d.rectangle((1470,1150,1760,1200),fill=0)
d.rounded_rectangle((1800,1000,1880,1350),30,fill=0); d.rounded_rectangle((1750,1050,1800,1300),20,fill=0)
im.save('designs/c927/chest_src.png'); im.resize((500,500)).save('designs/c927/icon_view.png')
