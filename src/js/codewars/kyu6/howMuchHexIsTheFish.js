console.log('kyu-6-howMuchHexIsTheFish');
// const fisHex = name => {
//   let hexValueArr = name.match(/[a,b,c,d,e,f]/gi);
//   if (!hexValueArr) return 0;
//   return hexValueArr.map(el => parseInt(el, 16)).reduce((acc, el) => acc ^ el);
// };

const fisHex = name =>
  (name.match(/[a,b,c,d,e,f]/gi) || []).reduce(
    (acc, el) => acc ^ parseInt(el, 16),
    0
  );

console.log(fisHex('pufferfish'), 1);
console.log(fisHex('puffers'), 14);
console.log(fisHex('balloonfish'), 14);
console.log(fisHex('blowfish'), 4);
console.log(fisHex('bubblefish'), 10);
console.log(fisHex('globefish'), 10);
console.log(fisHex('swellfish'), 1);
console.log(fisHex('toadfish'), 8);
console.log(fisHex('toadies'), 9);
console.log(fisHex('honey toads'), 9);
console.log(fisHex('sugar toads'), 13);
console.log(fisHex('sea squab'), 5);
