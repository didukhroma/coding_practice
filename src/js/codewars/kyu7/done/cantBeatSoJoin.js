console.log('kyu-7-cantBeatSoJoin.js');
const cantBeatSoJoin = numbers =>
  numbers
    .sort(
      (a, b) =>
        b.reduce((acc, el) => acc + el, 0) - a.reduce((acc, el) => acc + el, 0)
    )
    .flatMap(el => el);

console.log(cantBeatSoJoin([[1, 2], [3, 4], [5, 6], [7, 8], [9]]));
