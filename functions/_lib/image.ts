// Image header sniffing (type + pixel size) without decoding. Enough to refuse tiny photos before paying fal.
export interface ImageInfo { type: 'image/jpeg' | 'image/png' | 'image/webp'; width: number; height: number }

export function imageInfo(b: Uint8Array): ImageInfo | null {
  if (b.length > 24 && b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47) {
    const dv = new DataView(b.buffer, b.byteOffset, b.byteLength);
    return { type: 'image/png', width: dv.getUint32(16), height: dv.getUint32(20) };
  }
  if (b.length > 4 && b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i + 9 < b.length) {
      if (b[i] !== 0xff) { i++; continue; }
      const marker = b[i + 1]!;
      if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) { i += 2; continue; }
      const len = (b[i + 2]! << 8) | b[i + 3]!;
      if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
        return { type: 'image/jpeg', height: (b[i + 5]! << 8) | b[i + 6]!, width: (b[i + 7]! << 8) | b[i + 8]! };
      }
      i += 2 + len;
    }
    return null;
  }
  if (b.length > 30 && b[0] === 0x52 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x46 && b[8] === 0x57 && b[9] === 0x45 && b[10] === 0x42 && b[11] === 0x50) {
    const fourcc = String.fromCharCode(b[12]!, b[13]!, b[14]!, b[15]!);
    if (fourcc === 'VP8 ') return { type: 'image/webp', width: (b[26]! | (b[27]! << 8)) & 0x3fff, height: (b[28]! | (b[29]! << 8)) & 0x3fff };
    if (fourcc === 'VP8L') { const bits = b[21]! | (b[22]! << 8) | (b[23]! << 16) | (b[24]! << 24); return { type: 'image/webp', width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 }; }
    if (fourcc === 'VP8X') return { type: 'image/webp', width: 1 + (b[24]! | (b[25]! << 8) | (b[26]! << 16)), height: 1 + (b[27]! | (b[28]! << 8) | (b[29]! << 16)) };
  }
  return null;
}

export const MIN_PHOTO_SIDE = 700; // px; below this a 10 in print goes soft even with upscaling
export const MAX_UPLOAD_BYTES = 15_000_000;

// Plain-words verdict on an upload. null = fine.
export function photoProblem(info: ImageInfo | null, bytes: number): string | null {
  if (bytes > MAX_UPLOAD_BYTES) return 'That photo is too big to send. Try one under 15 MB.';
  if (!info) return "We can't read that file. A JPEG or PNG straight from your camera roll works best.";
  if (Math.min(info.width, info.height) < MIN_PHOTO_SIDE) return 'This photo is a little small to print well. A photo straight from your camera roll (not a screenshot or one sent by text) usually works.';
  return null;
}
