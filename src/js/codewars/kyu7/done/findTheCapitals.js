const capitals = function (word) {
  const res = [];
  [...word].forEach((el, i) => {
    if (el === el.toUpperCase()) {
      res.push(i);
    }
  });
  return res;
};

console.log(capitals('CodEWaRs'));
