const stalinSort = array => {
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      array.splice(i, 1);
      i--;
    }
  }
};

const array = [3, 1, 4, 1, 5, 9, 2];
stalinSort(array);
console.log(array);
