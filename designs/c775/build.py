import sys; sys.path.insert(0,'.')
from designs.c_common import *
build(775,'designs/c775/art_pp.png',["SLEEPS ALL DAY."],["JUDGES ALL NIGHT."],'anton',((74,28,84,255),(52,62,74,255)),AW=int(sys.argv[1]),W=int(sys.argv[2]),hfrac=0.9,npunch=(190,170,215,255))
