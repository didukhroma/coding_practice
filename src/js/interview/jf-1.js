//--------------------------task unique number in array
//remove all numbers who have duplicates
const arr = [1, 1, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8, 9];

function withoutRepeat(array) {
  return array.reduce(
    (acc, el) => {
      console.log(el);
      if (acc.nonUniqueNum.includes(el)) return acc;

      if (acc.uniqueNum.includes(el)) {
        acc.nonUniqueNum.push(el);
        acc.uniqueNum.splice(acc.uniqueNum.indexOf(el), 1);
        return acc;
      }

      acc.uniqueNum.push(el);
      return acc;
    },
    { uniqueNum: [], nonUniqueNum: [] }
  ).uniqueNum;
}

console.log(withoutRepeat(arr));
