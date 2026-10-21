import sys; sys.path.insert(0,'.')
from designs.lock import *
im=Image.open('designs/c924/src_print.png').convert('RGBA'); a=im.crop((0,0,im.width,3342)); a=a.crop(a.getbbox()); a.save('designs/c924/art_only.png'); print(a.size)
F=sys.argv[1]; HF=float(sys.argv[2]); PF=float(sys.argv[3]); COL=int(sys.argv[4]); ART=int(sys.argv[5])
run_side(a,a,'924-pirate',[['PILLAGING','IS A']],[["YOUNG","MAN'S",'GAME']],F,((150,90,30,255),(38,50,86,255),CREAM),((246,236,214,255),(238,190,70,255),(20,26,44,255)),HF=HF,PF=PF,COL=COL,ART=ART)
