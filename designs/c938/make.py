import sys; sys.path.insert(0,'.')
from designs.lock import *
im=Image.open('designs/c938/src_print.png').convert('RGBA'); a=im.crop((0,558,im.width,3958)); a=a.crop(a.getbbox()); a.save('designs/c938/art_only.png'); print(a.size)
AW=float(sys.argv[1]); HF=float(sys.argv[2]); F=sys.argv[3]; PF=float(sys.argv[4]) if len(sys.argv)>4 else 1.0
run(a,a,'938-running',[['MILE ONE']],[['WAS A','MISTAKE.']],F,AW,((38,50,86,255),(170,60,40,255),CREAM),((246,236,214,255),(244,130,100,255),(20,26,44,255)),HF=HF,PF=PF)
