from PIL import Image, ImageDraw
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
# plump body and tail
d.ellipse((560,820,1500,1420),fill=0)
d.polygon([(1400,980),(1760,860),(1620,1180)],fill=0)
# S-curved neck and head with a flat bill facing left
d.line((700,980,620,760,700,520),fill=0,width=190,joint='curve')
d.ellipse((520,260,860,590),fill=0)
d.polygon([(560,400),(250,430),(250,500),(560,520)],fill=0)       # flat goose bill
d.rectangle((520,330,860,372),fill=255)                            # headband stripe
d.ellipse((690,370,745,425),fill=255)                              # eye
# wing line cut out of the body
d.arc((760,900,1380,1320),195,345,fill=255,width=55)
# legs: planted foot with a webbed triangle, lifted foot wearing a roller skate
d.line((900,1380,900,1640),fill=0,width=90); d.polygon([(900,1640),(640,1700),(900,1700)],fill=0)
d.line((1130,1370,1240,1500),fill=0,width=90)
d.rounded_rectangle((1120,1480,1480,1580),30,fill=0)                       # skate boot
d.ellipse((1140,1580,1240,1680),fill=0); d.ellipse((1370,1580,1470,1680),fill=0)   # wheels
im.save('designs/c915/chest_src.png'); im.resize((500,500)).save('designs/c915/icon_view.png')
