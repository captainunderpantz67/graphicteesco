import sys; sys.path.insert(0,'.')
from designs.lock import *
im=Image.open('designs/c934/src_print.png').convert('RGBA'); a=im.crop((0,542,im.width,2703)); a=a.crop(a.getbbox()); a.save('designs/c934/art_only.png'); print(a.size)
AW=float(sys.argv[1]); HF=float(sys.argv[2]); F=sys.argv[3]; PF=float(sys.argv[4]) if len(sys.argv)>4 else 1.0
run(a,a,'934-crochet',[["NO, I","WON'T"]],[['MAKE YOU ONE.']],F,AW,((170,50,50,255),(38,50,86,255),CREAM),((240,120,100,255),(246,236,214,255),(20,26,44,255)),HF=HF,PF=PF)
