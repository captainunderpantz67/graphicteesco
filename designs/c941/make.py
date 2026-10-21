import sys; sys.path.insert(0,'.')
from designs.lock import *
im=Image.open('designs/c941/src_print.png').convert('RGBA'); a=im.crop((0,372,im.width,3396)); a=a.crop(a.getbbox()); a.save('designs/c941/art_only.png'); print(a.size)
AW=float(sys.argv[1]); HF=float(sys.argv[2]); F=sys.argv[3]; PF=float(sys.argv[4]) if len(sys.argv)>4 else 1.0
run(a,a,'941-apres',[['EXPERT','IN APRÈS']],[['(BEGINNER AT SKIING)']],F,AW,((150,40,70,255),(38,50,86,255),CREAM),((244,150,170,255),(246,236,214,255),(20,26,44,255)),HF=HF,PF=PF)
