from PIL import Image, ImageDraw
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
# branch
d.line((200,1500,1800,1400),fill=0,width=90)
d.line((1500,1410,1700,1250),fill=0,width=60); d.line((600,1490,450,1330),fill=0,width=60)
# round owl body with ear tufts
d.ellipse((520,420,1480,1480),fill=0)
d.polygon([(580,560),(600,320),(800,450)],fill=0); d.polygon([(1420,560),(1400,320),(1200,450)],fill=0)
# face disc, closed sleepy eyes, beak
d.ellipse((640,560,1360,1020),fill=255)
d.arc((690,740,950,900),20,160,fill=0,width=70); d.arc((1050,740,1310,900),20,160,fill=0,width=70)
d.polygon([(930,900),(1070,900),(1000,1030)],fill=0)
# belly feather dots
for x,y in ((760,1180),(900,1250),(1040,1180),(1180,1250),(1260,1120),(660,1120),(1000,1340)):
    d.ellipse((x-36,y-36,x+36,y+36),fill=255)
# little crescent moon
d.ellipse((1530,240,1800,510),fill=0); d.ellipse((1600,210,1870,480),fill=255)
im.save('designs/c920/chest_src.png'); im.resize((500,500)).save('designs/c920/icon_view.png')
