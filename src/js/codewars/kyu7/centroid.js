console.log('kyu-7-centroid');
// const centroid = ([a, b, c]) => [
//   Number(((a[0] + b[0] + c[0]) / 3).toFixed(2)),
//   Number(((a[1] + b[1] + c[1]) / 3).toFixed(2)),
//   Number(((a[2] + b[2] + c[2]) / 3).toFixed(2)),
// ];
// const centroid = c =>
//   c.reduce((acc, el, i, arr) => {
//     let keys = arr.length;
//     el.forEach((el, i) => {
//       if (!acc[i + 1]) acc[i + 1] = 0;

//       acc[i + 1] += el;
//     });
//     if (i === arr.length - 1) {
//       let values = Object.values(acc);
//       return values.map(el => Number((el / keys).toFixed(2)));
//     }
//     return acc;
//   }, {});
const centroid = c =>
  c
    .reduce(
      (acc, el, i, arr) =>
        el.forEach((el, i) => (acc[i] += el / arr.length)) || acc,
      [0, 0, 0]
    )
    .map(el => Math.round(el * 100) / 100);

console.log(
  centroid([
    [1, 0, 5],
    [0, 1, 5],
    [2, 2, 5],
  ]),
  [1, 1, 5]
);

console.log(
  centroid([
    [7, 0, 5],
    [3, 1, 5],
    [2, 1, 5],
  ]),
  [4, 0.67, 5]
);
