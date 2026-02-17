// function hexStringToRGB(hexString) {
//   const r = parseInt(hexString.toLowerCase().slice(1, 3), 16);
//   const g = parseInt(hexString.toLowerCase().slice(3, 5), 16);
//   const b = parseInt(hexString.toLowerCase().slice(5), 16);
//   return { r, g, b };
// }
const hexStringToRGB = hexString => {
  const [r, g, b] = hexString
    .slice(1)
    .match(/.{2}/g)
    .map(el => parseInt(el, 16));
  return { r, g, b };
};
console.log(hexStringToRGB('#FF9933'), { r: 255, g: 153, b: 51 });
// console.log(hexStringToRGB('#beaded'), { r: 190, g: 173, b: 237 });
// console.log(hexStringToRGB('#000000'), { r: 0, g: 0, b: 0 });
// console.log(hexStringToRGB('#111111'), { r: 17, g: 17, b: 17 });
// console.log(hexStringToRGB('#Fa3456'), { r: 250, g: 52, b: 86 });
