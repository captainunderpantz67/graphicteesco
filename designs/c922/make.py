import sys; sys.path.insert(0,'.')
from designs.lock import *
im=Image.open('designs/c922/src_print.png').convert('RGBA'); a=im.crop((0,484,im.width,2784)); a=a.crop(a.getbbox()); a.save('designs/c922/art_only.png'); print(a.size)
AW=float(sys.argv[1]); HF=float(sys.argv[2]); F=sys.argv[3]; PF=float(sys.argv[4]) if len(sys.argv)>4 else 1.0
run(a,a,'922-star',[['GOLD STAR']],[['FOR LEAVING','THE HOUSE']],F,AW,((190,130,20,255),(38,50,86,255),CREAM),((244,196,60,255),(246,236,214,255),(20,26,44,255)),HF=HF,PF=PF)
