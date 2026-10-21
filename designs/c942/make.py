import sys; sys.path.insert(0,'.')
from designs.lock import *
im=Image.open('designs/c942/src_print.png').convert('RGBA'); a=im.crop((0,338,im.width,3427)); a=a.crop(a.getbbox()); a.save('designs/c942/art_only.png'); print(a.size)
AW=float(sys.argv[1]); HF=float(sys.argv[2]); F=sys.argv[3]; PF=float(sys.argv[4]) if len(sys.argv)>4 else 1.0
run(a,a,'942-pickle',[['MY PARTNER','SAYS']],[['IT WAS OUT.']],F,AW,((170,50,40,255),(38,50,86,255),CREAM),((246,236,214,255),(244,190,60,255),(20,26,44,255)),HF=HF,PF=PF)
