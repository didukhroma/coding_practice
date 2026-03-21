const squaresOnly = arr => arr.filter(e => Number.isInteger(Math.sqrt(e)));

console.log(squaresOnly([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
