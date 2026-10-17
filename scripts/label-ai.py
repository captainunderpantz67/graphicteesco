#!/usr/bin/env python3
"""Label AI-generated images the way Google asks (Merchant Center + Search, 2024+): embed IPTC
DigitalSourceType = trainedAlgorithmicMedia as XMP. Edits the WebP container in place without
re-encoding the pixels; already-labeled files are skipped.

  python3 scripts/label-ai.py public/covers/*.webp
"""
import struct, sys
from PIL import Image

XMP = b'''<?xpacket begin="\xef\xbb\xbf" id="W5M0MpCehiHzreSzNTczkc9d"?>
<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
<rdf:Description rdf:about="" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/"
 Iptc4xmpExt:DigitalSourceType="http://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia"/>
</rdf:RDF></x:xmpmeta>
<?xpacket end="w"?>'''


def chunks(data):
    i = 12
    while i + 8 <= len(data):
        tag, size = data[i:i + 4], struct.unpack('<I', data[i + 4:i + 8])[0]
        yield tag, data[i + 8:i + 8 + size]
        i += 8 + size + (size & 1)


def pack(tag, body):
    return tag + struct.pack('<I', len(body)) + body + (b'\0' if len(body) & 1 else b'')


def label(path):
    data = open(path, 'rb').read()
    if data[:4] != b'RIFF' or data[8:12] != b'WEBP':
        return 'not webp'
    cs = list(chunks(data))
    if any(t == b'XMP ' and b'trainedAlgorithmicMedia' in b for t, b in cs):
        return 'already labeled'
    cs = [(t, b) for t, b in cs if t != b'XMP ']
    if cs[0][0] == b'VP8X':
        flags = cs[0][1][0] | 0x04
        cs[0] = (b'VP8X', bytes([flags]) + cs[0][1][1:])
    else:
        w, h = Image.open(path).size
        alpha = 0x10 if cs[0][0] == b'VP8L' and Image.open(path).mode == 'RGBA' else 0
        vp8x = bytes([0x04 | alpha, 0, 0, 0]) + (w - 1).to_bytes(3, 'little') + (h - 1).to_bytes(3, 'little')
        cs.insert(0, (b'VP8X', vp8x))
    body = b'WEBP' + b''.join(pack(t, b) for t, b in cs) + pack(b'XMP ', XMP)
    open(path, 'wb').write(b'RIFF' + struct.pack('<I', len(body)) + body)
    Image.open(path).load()  # still decodes
    return 'labeled'


if __name__ == '__main__':
    out = {}
    for f in sys.argv[1:]:
        r = label(f)
        out[r] = out.get(r, 0) + 1
    print(out)
