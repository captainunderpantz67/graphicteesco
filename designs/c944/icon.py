from PIL import Image, ImageDraw
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
# crescent moon (big disc minus an offset disc) with a small z beside it
d.ellipse((200,300,1300,1400),fill=0); d.ellipse((520,200,1500,1180),fill=255)
d.polygon([(1380,900),(1820,900),(1820,980),(1500,1350),(1820,1350),(1820,1430),(1380,1430),(1380,1350),(1700,980),(1380,980)],fill=0)
im.save('designs/c944/chest_src.png'); im.resize((500,500)).save('designs/c944/icon_view.png')
