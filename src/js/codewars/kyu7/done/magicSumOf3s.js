const magicSum = numbers =>
  numbers.reduce(
    (a, n) => (a += n % 2 !== 0 && String(n).includes('3') ? n : 0),
    0
  );
