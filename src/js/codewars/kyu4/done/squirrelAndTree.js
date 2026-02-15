const squirrel = (h, H, S) => +((H / h) * Math.hypot(S, h)).toFixed(4);

console.log(squirrel(10, 20, 15), 14.1421);
