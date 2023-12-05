import { str } from './testStr';

const sum = str => {
  let sum = 0;
  const replaceStr = str
    .replaceAll('one', 'one1one')
    .replaceAll('two', 'two2two')
    .replaceAll('three', 'three3three')
    .replaceAll('four', 'four4four')
    .replaceAll('five', 'five5five')
    .replaceAll('six', 'six6six')
    .replaceAll('seven', 'seven7seven')
    .replaceAll('eight', 'eight8eight')
    .replaceAll('nine', 'nine9nine');
  const arr = replaceStr.split(' ').map(el => el.replace(/[a-z]/g, ''));

  for (let word of arr) {
    let fNum = word[0];

    let lNum = word.length === 1 ? word[0] : word[word.length - 1];
    sum += Number(fNum + lNum);
  }
  return sum;
};
console.time('test2');
console.log(sum(str));
console.timeEnd('test2');
