import sys; sys.path.insert(0,'.')
from designs.lock import *
im=Image.open('designs/c925/src_print.png').convert('RGBA'); a=im.crop((0,389,im.width,3376)); a=a.crop(a.getbbox()); a.save('designs/c925/art_only.png'); print(a.size)
AW=float(sys.argv[1]); HF=float(sys.argv[2]); F=sys.argv[3]; PF=float(sys.argv[4]) if len(sys.argv)>4 else 1.0
run(a,a,'925-horse',[['HORSE','GIRL']],[['BROKE','ON PURPOSE']],F,AW,((120,60,40,255),(38,50,86,255),CREAM),((246,236,214,255),(238,160,120,255),(20,26,44,255)),HF=HF,PF=PF)
