import sys; sys.path.insert(0,'.')
from designs.lock import *
im=Image.open('designs/c916/src_print.png').convert('RGBA'); a=im.crop((0,861,im.width,2767)); a=a.crop(a.getbbox()); a.save('designs/c916/art_only.png'); print(a.size)
AW=float(sys.argv[1]); HF=float(sys.argv[2]); F=sys.argv[3]; PF=float(sys.argv[4]) if len(sys.argv)>4 else 1.0
run(a,a,'916-lapdog',[['PROFESSIONAL']],[['LAP DOG','(72 LBS)']],F,AW,((70,80,100,255),(150,60,60,255),CREAM),((246,236,214,255),(244,150,140,255),(20,26,44,255)),HF=HF,PF=PF)
