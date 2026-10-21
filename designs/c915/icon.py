from PIL import Image, ImageDraw
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
# body, tail
d.ellipse((520,760,1420,1360),fill=0)
d.polygon([(1340,900),(1700,780),(1560,1100)],fill=0)
# neck (thick curved) and head, beak
d.line((640,900,560,560,640,330),fill=0,width=170,joint='curve')
d.ellipse((470,150,790,470),fill=0)
d.polygon([(500,260),(250,330),(500,400)],fill=0)          # beak
d.ellipse((600,250,660,310),fill=255)                       # eye
# legs: one planted, one raised and bent
d.line((860,1320,860,1740),fill=0,width=95); d.line((860,1740,720,1740),fill=0,width=95)
d.line((1060,1300,1200,1480,1060,1560),fill=0,width=95,joint='curve'); d.line((1060,1560,950,1520),fill=0,width=95)
# wing cut-line
d.arc((700,860,1250,1250),200,340,fill=255,width=50)
im.save('designs/c915/chest_src.png'); im.resize((500,500)).save('designs/c915/icon_view.png')
