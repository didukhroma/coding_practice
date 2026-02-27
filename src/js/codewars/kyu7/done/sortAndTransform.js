console.log('kyu-7-sortAndTransform.js');

function sortTransform(a) {
  const getElemFromArr = arr =>
    [...arr.slice(0, 2), ...arr.slice(arr.length - 2)].map(el =>
      String.fromCharCode(el)
    );
  const wordOne = getElemFromArr(a).join('');
  const wordTwo = getElemFromArr([...a].sort((a, b) => a - b)).join('');
  const wordThree = getElemFromArr([...a].sort((a, b) => b - a)).join('');
  const wordFour = getElemFromArr([...a].sort((a, b) => b - a))
    .sort()
    .join('');

  const result = [wordOne, wordTwo, wordThree, wordFour];
  return result.join('-');
}

console.log(
  sortTransform([121, 122, 123, 124, 125, 120, 122, 132]),
  '\n',
  'yzz-xy}-}yx-xy}'
);
console.log(
  sortTransform([111, 112, 113, 114, 115, 113, 114, 110]),
  '\n',
  'oprn-nors-sron-nors'
);
console.log(
  sortTransform([51, 62, 73, 84, 95, 100, 99, 126]),
  '\n',
  '3>c~-3>d~-~d>3-3>d~'
);
console.log(
  sortTransform([66, 101, 55, 111, 113]),
  '\n',
  'Beoq-7Boq-qoB7-7Boq'
);

console.log(
  sortTransform([99, 98, 97, 96, 81, 82, 82]),
  '\n',
  'cbRR-QRbc-cbRQ-QRbc'
);
