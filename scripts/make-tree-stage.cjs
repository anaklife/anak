const sharp = require("sharp");
const path = require("path");

const root = path.join(__dirname, "..");
const SRC = path.join(root, "public/media/IMG_0595.JPG.jpeg");
const OUT = path.join(root, "public/media/tree-stage.jpg");

const W = 3840;
const H = 2160;
const WALL = [250, 248, 249];
const FLOOR = [214, 214, 216];

function lerp(a, b, t) {
  return a + (b - a) * t;
}
function lerp3(a, b, t) {
  return [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
}
function smooth(t) {
  t = Math.max(0, Math.min(1, t));
  return t * t * (3 - 2 * t);
}

function isMat(r, g, b, y) {
  if (y < H * 0.62) return false;
  const avg = (r + g + b) / 3;
  const chroma = Math.max(r, g, b) - Math.min(r, g, b);
  return avg < 172 && chroma < 48;
}

function isSubject(r, g, b, y) {
  if (isMat(r, g, b, y)) return true;
  const avg = (r + g + b) / 3;
  const chroma = Math.max(r, g, b) - Math.min(r, g, b);
  if (avg < 178) return true;
  if (chroma > 20 && avg < 247) return true;
  return false;
}

(async () => {
  const { data, info } = await sharp(SRC)
    .rotate()
    .resize({ height: H, kernel: "lanczos3" })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pW = info.width;
  const ch = info.channels;
  const left = Math.round((W - pW) / 2);
  const liftW = Math.round(pW * 0.22);
  const feather = 28;

  const canvas = Buffer.alloc(W * H * 3);

  for (let y = 0; y < H; y++) {
    const floorMix = smooth((y / H - 0.66) / 0.34) * 0.78;
    const fill = lerp3(WALL, FLOOR, floorMix);

    for (let x = 0; x < W; x++) {
      const i = (y * W + x) * 3;

      if (x >= left && x < left + pW) {
        const px = x - left;
        const pi = (y * pW + px) * ch;
        const r0 = data[pi];
        const g0 = data[pi + 1];
        const b0 = data[pi + 2];
        const subject = isSubject(r0, g0, b0, y);

        if (subject) {
          canvas[i] = r0;
          canvas[i + 1] = g0;
          canvas[i + 2] = b0;
          continue;
        }

        let r = r0;
        let g = g0;
        let b = b0;
        const edge = Math.min(px, pW - 1 - px);
        const lift = 1 - smooth(Math.min(1, edge / liftW));
        r = Math.round(lerp(r, fill[0], lift));
        g = Math.round(lerp(g, fill[1], lift));
        b = Math.round(lerp(b, fill[2], lift));

        let t = 1;
        if (px < feather) t = smooth(px / feather);
        else if (px > pW - 1 - feather) t = smooth((pW - 1 - px) / feather);

        canvas[i] = Math.round(lerp(fill[0], r, t));
        canvas[i + 1] = Math.round(lerp(fill[1], g, t));
        canvas[i + 2] = Math.round(lerp(fill[2], b, t));
      } else {
        canvas[i] = Math.round(fill[0]);
        canvas[i + 1] = Math.round(fill[1]);
        canvas[i + 2] = Math.round(fill[2]);
      }
    }
  }

  await sharp(canvas, { raw: { width: W, height: H, channels: 3 } })
    .jpeg({ quality: 95, chromaSubsampling: "4:4:4", mozjpeg: true })
    .toFile(OUT);

  console.log(`wrote ${OUT}`);
})();
