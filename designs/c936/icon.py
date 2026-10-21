from PIL import Image, ImageDraw
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
# fish swimming left: body, forked tail, dorsal and belly fins, eye, gill line, scale hint
d.ellipse((250,640,1450,1360),fill=0)
d.polygon([(1330,1000),(1800,640),(1800,1360)],fill=0)
d.polygon([(1330,1000),(1700,1000),(1800,720),(1800,1280)],fill=0)
d.polygon([(700,700),(920,420),(1200,720)],fill=0)
d.polygon([(800,1280),(1000,1500),(1150,1280)],fill=0)
d.ellipse((430,860,570,1000),fill=255)
d.arc((700,760,1000,1240),100,260,fill=255,width=50)
d.arc((1050,800,1350,1200),100,260,fill=255,width=40)
im.save('designs/c936/chest_src.png'); im.resize((500,500)).save('designs/c936/icon_view.png')
