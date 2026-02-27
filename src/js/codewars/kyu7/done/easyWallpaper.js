console.log('kyu-7-easyWallpaper');
const numbers = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
  'twenty',
];

const wallpaper = (l, w, h) =>
  !l || !w || !h
    ? numbers[0]
    : numbers[Math.ceil(((((l + w) * 2 * h) / 0.52) * 1.15) / 10)];

console.log(wallpaper(6.3, 4.5, 3.29), 'sixteen');
console.log(wallpaper(7.8, 2.9, 3.29), 'sixteen');
console.log(wallpaper(6.3, 5.8, 3.13), 'seventeen');
console.log(wallpaper(6.1, 6.7, 2.81), 'sixteen');
console.log(wallpaper(0, 5.6, 3.2), 'zero');
