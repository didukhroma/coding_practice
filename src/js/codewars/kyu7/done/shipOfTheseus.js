// function shipOfTheseus(ship) {
//   for (let i = 0; i < ship.length - 1; i++) {
//     if (ship[i].length !== ship[i + 1].length) return false;
//     let common = 0;
//     for (let j = 0; j < ship[i].length; j++) {
//       if (ship[i][j] !== ship[i + 1][j]) {
//         common += 1;
//       }
//       if (common > 1) return false;
//     }
//     if (common === 0) return false;
//   }
//   return true;
// }

const shipOfTheseus = ship =>
  ship.every(
    (el, i) =>
      i === 0 ||
      (el.length === ship[i - 1].length &&
        el.filter((e, j) => e !== ship[i - 1][j]).length === 1)
  );

console.log(
  shipOfTheseus([
    ['a', 'b', 'c'],
    ['x', 'b', 'c'],
    ['x', 'y', 'c'],
    ['x', 'y', 'z'],
  ])
);
