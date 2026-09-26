const fs = require('fs');
const path = require('path');

const uploadDir = 'C:\\Users\\rjik\\.gemini\\antigravity\\brain\\49bc1c1b-189f-4767-8e2c-d416e46ccb17\\.user_uploaded';
const targetDir = 'C:\\Users\\rjik\\.gemini\\antigravity\\scratch\\imako-solution\\public\\images';

const map = [
  ['media_1790432164094.png', 'portfolio-bisrat-hotel.png'],
  ['media_1790432179813.png', 'portfolio-nisir-adama-football-academy.png'],
  ['media_1790432137694.png', 'portfolio-dr-abdi-speciality-dental.png'],
  ['media_1790432191533.png', 'portfolio-hailu-dental-no1.png'],
  ['media_1790432122665.png', 'portfolio-aalam-media.png'],
];

for (const [srcName, destName] of map) {
  const src = path.join(uploadDir, srcName);
  const dest = path.join(targetDir, destName);
  // Also copy as .jpg so both work
  const destJpg = dest.replace('.png', '.jpg');
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    fs.copyFileSync(src, destJpg);
    console.log(`Copied ${srcName} -> ${destName} and ${path.basename(destJpg)}`);
  } else {
    console.log(`Missing: ${src}`);
  }
}
