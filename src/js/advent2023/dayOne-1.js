import { str } from './testStr';

const arr = str
  .split(' ')
  .map(el => el.match(/[0-9]/g))
  .reduce((acc, el) => {
    if (!el.length) {
      return acc;
    }
    if (el.length === 1) {
      return (acc += Number(el[0] + el[0]));
    }

    return (acc += Number(el[0] + el[el.length - 1]));
  }, 0);

console.time('test1');
console.log(arr);
console.timeEnd('test1');
