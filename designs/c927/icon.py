from PIL import Image, ImageDraw
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
# iced coffee cup (dome lid, straw, sleeve band) sitting on top of a dumbbell
d.polygon([(680,640),(1320,640),(1230,1260),(770,1260)],fill=0)
d.polygon([(730,850),(1270,850),(1250,1050),(750,1050)],fill=255)
d.rounded_rectangle((640,560,1360,660),40,fill=0)
d.pieslice((690,280,1310,740),180,360,fill=0)
d.line((1040,560,1130,120),fill=0,width=60)
# dumbbell: bar and two stacked plates each side
d.rectangle((420,1520,1580,1600),fill=0)
d.rounded_rectangle((300,1360,400,1760),30,fill=0); d.rounded_rectangle((400,1420,470,1700),20,fill=0)
d.rounded_rectangle((1600,1360,1700,1760),30,fill=0); d.rounded_rectangle((1530,1420,1600,1700),20,fill=0)
im.save('designs/c927/chest_src.png'); im.resize((500,500)).save('designs/c927/icon_view.png')
