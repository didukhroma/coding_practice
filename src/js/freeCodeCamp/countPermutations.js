function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function countPermutations(str) {
  const uniqueChars = [...new Set(str)];

  str =
    factorial(str.length) /
    uniqueChars
      .map(el => factorial(str.split(el).length - 1))
      .reduce((acc, el) => acc * el, 1);
  return str;
}

console.log(countPermutations('abb'), 3);
console.log(countPermutations('abc'), 6);
console.log(countPermutations('racecar'), 630);
console.log(countPermutations('freecodecamp'), 39916800);
