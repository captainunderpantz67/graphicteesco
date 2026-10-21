from PIL import Image, ImageDraw
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
# fish on a hook: body, tail, dorsal fin, eye, gill line; line drops from above to a hook at the mouth
d.ellipse((330,780,1530,1500),fill=0)
d.polygon([(1400,1140),(1880,820),(1880,1460)],fill=0)
d.polygon([(800,820),(1000,540),(1250,830)],fill=0)
d.polygon([(900,1400),(1100,1640),(1250,1400)],fill=0)
d.ellipse((520,1000,640,1120),fill=255)
d.arc((760,900,1060,1380),100,260,fill=255,width=50)
d.line((420,150,420,720),fill=0,width=50)
d.arc((300,700,560,980),180,350,fill=0,width=50)
im.save('designs/c926/chest_src.png'); im.resize((500,500)).save('designs/c926/icon_view.png')
