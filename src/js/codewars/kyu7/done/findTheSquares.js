const findSquares = num =>
  `${Math.pow(Math.ceil(num / 2), 2)}-${Math.pow(Math.floor(num / 2), 2)}`;

console.log(findSquares(3), '4-1');
