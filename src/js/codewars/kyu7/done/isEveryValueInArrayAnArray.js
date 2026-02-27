console.log('kyu-7-isEveryValueInArrayAnArray.js');

// const arrCheck = value => !value.find(el => !Array.isArray(el));
const arrCheck = value => value.every(Array.isArray);

console.log(arrCheck([]), true);
console.log(arrCheck([['string']]), true);
console.log(arrCheck([[], {}]), false);
console.log(arrCheck([[1], [2], [3]]), true);
console.log(arrCheck(['A', 'R', 'R', 'A', 'Y']), false);
