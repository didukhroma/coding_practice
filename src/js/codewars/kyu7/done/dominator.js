function dominator(arr) {
  //code me
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    let el = String(arr[i]);
    if (hash[el]) {
      hash[el] += 1;
    } else {
      hash[el] = 1;
    }
  }
  const result = Object.entries(hash).sort((a, b) => b[1] - a[1])[0];

  return result[1] > arr.length / 2 ? result[0] : -1;
}

console.log(dominator([3, 4, 3, 2, 3, 1, 3, 3]), 3);
console.log(dominator([1, 2, 3, 4, 5]), -1);
console.log(dominator([1, 1, 1, 2, 2, 2]), -1);
console.log(dominator([1, 1, 1, 2, 2, 2, 2]), 2);
