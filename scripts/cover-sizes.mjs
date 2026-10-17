// Post-build: a 400px copy of every collection-grid cover at dist/covers/sm/<handle>.webp, so phones
// (cards ~190px wide) stop downloading the 600px original (Lighthouse: ~0.8 MB saved per collection page).
// AI covers keep their IPTC trainedAlgorithmicMedia label (Google's AI-image rule); sharp drops metadata,
// so the same XMP is written back. Printful temp covers have no label and get none.
import { readdirSync, readFileSync, mkdirSync, existsSync } from 'node:fs';
import sharp from 'sharp';

const SRC = 'public/covers', OUT = 'dist/covers/sm';
const XMP = `<?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?>
<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
<rdf:Description rdf:about="" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/"
 Iptc4xmpExt:DigitalSourceType="http://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia"/>
</rdf:RDF></x:xmpmeta>
<?xpacket end="w"?>`;

if (existsSync(SRC)) {
  mkdirSync(OUT, { recursive: true });
  const files = readdirSync(SRC).filter((f) => f.endsWith('.webp'));
  let n = 0;
  for (const f of files) {
    const buf = readFileSync(`${SRC}/${f}`);
    let img = sharp(buf).resize({ width: 400, withoutEnlargement: true }).webp({ quality: 72 });
    if (buf.includes('trainedAlgorithmicMedia')) img = img.withXmp(XMP);
    await img.toFile(`${OUT}/${f}`);
    n++;
  }
  console.log(`[cover-sizes] ${n} small covers`);
}
