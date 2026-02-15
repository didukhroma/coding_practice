// const ballCollector = detritus =>
//   detritus.reduce(
//     (ac, n) => {
//       ac.weight += n === 58 ? n : 0;
//       return ac;
//     },
//     { weight: 0 }
//   );

const ballCollector = detritus => ({
  weight: detritus.filter(el => el === 58).length * 58,
});

console.log(ballCollector([58, 68, 62, 69, 58]), { weight: 116 });
console.log(ballCollector([60, 66, 71, 68, 62]), { weight: 0 });
console.log(ballCollector([58]), { weight: 58 });
console.log(ballCollector([58, 58, 58]), { weight: 174 });
