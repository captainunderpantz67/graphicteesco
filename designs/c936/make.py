import sys; sys.path.insert(0,'.')
from designs.lock import *
im=Image.open('designs/c936/src_print.png').convert('RGBA'); a=im.crop((0,317,im.width,2984)); a=a.crop(a.getbbox()); a.save('designs/c936/art_only.png'); print(a.size)
AW=float(sys.argv[1]); HF=float(sys.argv[2]); F=sys.argv[3]; PF=float(sys.argv[4]) if len(sys.argv)>4 else 1.0
run(a,a,'936-fishing',[["YOU CATCHING 'EM?"]],[['NO.','KEEP WALKING.']],F,AW,((60,100,70,255),(170,60,40,255),CREAM),((200,220,190,255),(240,150,110,255),(20,26,44,255)),HF=HF,PF=PF)
