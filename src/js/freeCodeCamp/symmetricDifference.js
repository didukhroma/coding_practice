function difference(arr1, arr2) {
  return [...arr1, ...arr2].filter(
    (el, index, arr) =>
      index === arr.lastIndexOf(el) && index === arr.indexOf(el)
  );
}

console.log(difference([1, 2, 3], [3, 4, 5]));
