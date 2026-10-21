import sys; sys.path.insert(0,'.')
from designs.c_common import *
build(784,'designs/c784/art_pp.png',["STUCK THE","LANDING."],["ON THE","COUCH."],'bevan',((74,28,84,255),(168,52,40,255)),AW=int(sys.argv[1]),W=int(sys.argv[2]),hfrac=0.8,hsame=True,psame=True,pfrac=0.93,npunch=(245,140,125,255),kw=7,g=30)
