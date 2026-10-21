import sys; sys.path.insert(0,'.')
from designs.c_common import *
build(782,'designs/c782/art_pp.png',["CHEEKS FULL."],["PLANS","EMPTY."],'bevan',((70,40,24,255),(158,64,28,255)),AW=int(sys.argv[1]),W=int(sys.argv[2]),hfrac=0.85,psame=True,kw=7,g=30)
