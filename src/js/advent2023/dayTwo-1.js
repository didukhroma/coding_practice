import { data } from './dayTwoData';
// const data =
//   'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green';

let maxQubes = {
  red: 12,
  green: 13,
  blue: 14,
};

const str = data
  .replaceAll('Game', '!Game')
  .split('!')
  .splice(1)
  .reduce((acc, el, idx) => {
    console.log(el, 'idx', idx + 1);
    let arr = el
      .split(': ')
      .map(el =>
        el.split('; ').map(el => el.split(', ').map(el => el.split(' ')))
      );

    const countOfCubes = arr[1].reduce(
      (acc, el) => {
        el.forEach(el => (acc[el[1]] += Number(el[0])));

        return acc;
      },
      { isPossible: true, red: 0, blue: 0, green: 0 }
    );

    if (
      countOfCubes.red > maxQubes.red ||
      countOfCubes.blue > maxQubes.blue ||
      countOfCubes.green > maxQubes.green
    ) {
      countOfCubes.isPossible = false;
      console.log(idx + 1);
    }
    console.log(countOfCubes.isPossible);
    acc += countOfCubes.isPossible ? Number(idx + 1) : 0;
    return acc;
  }, 0);
console.log(str);
