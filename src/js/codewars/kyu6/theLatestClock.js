console.log('kyu-6-theLatestClock.js');

const permutator = inputArr => {
  let result = [];

  const permute = (arr, m = []) => {
    if (!arr.length) result.push(m);
    for (let i = 0; i < arr.length; i++) {
      let curr = arr.slice();
      let next = curr.splice(i, 1);
      console.log(next);
      permute(curr, [...m, next]);
    }
  };

  permute(inputArr);

  return result;
};

function latestClock(a, b, c, d) {
  const combinations = permutator([...arguments])
    .map(el => el.join(''))
    .filter(el => Number(el) <= 2359 && Number(el.slice(2)) <= 59);

  const num = Math.max(...combinations);

  const timeString = String(num).padStart(4, '0');

  return `${timeString.slice(0, 2)}:${timeString.slice(2)}`;
}

console.log(latestClock(1, 9, 8, 3), '19:38');
console.log(latestClock(9, 1, 2, 5), '21:59');
console.log(latestClock(1, 2, 8, 9), '19:28');
console.log(latestClock(0, 0, 0, 0), '00:00');
console.log(latestClock(2, 4, 0, 0), '20:40');
console.log(latestClock(3, 0, 6, 0), '06:30');
