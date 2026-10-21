import sys; sys.path.insert(0,'.')
from designs.lock import *
im=Image.open('designs/c926/src_print.png').convert('RGBA'); a=im.crop((0,704,im.width,3415)); a=a.crop(a.getbbox()); a.save('designs/c926/art_only.png'); print(a.size)
AW=float(sys.argv[1]); HF=float(sys.argv[2]); F=sys.argv[3]; PF=float(sys.argv[4]) if len(sys.argv)>4 else 1.0
run(a,a,'926-fishing',[['FISHING IS MY','LOVE LANGUAGE.']],[["TALKING ISN'T."]],F,AW,((60,90,60,255),(38,50,86,255),CREAM),((246,236,214,255),(238,190,70,255),(20,26,44,255)),HF=HF,PF=PF)
