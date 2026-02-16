function seqToOne(n) {
  const res = [];
  while (n !== 1) {
    res.push(n);
    n += n > 0 ? -1 : 1;
  }
  res.push(1);
  return res;
}

console.log(seqToOne(-5));
// console.log(seqToOne(-2));
