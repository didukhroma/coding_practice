function listToArray(list, res = []) {
  res.push(list.value);
  if (!list.next) {
    return res;
  }
  //write your code here
  return listToArray(list.next, res);
}

const lists = [
  { value: 1, next: { value: 2, next: { value: 3, next: null } } },
  { value: 'string', next: null },
  {
    value: true,
    next: {
      value: false,
      next: { value: 'true', next: { value: 'false', next: null } },
    },
  },
  {
    value: 1,
    next: {
      value: 1,
      next: {
        value: 1,
        next: { value: 1, next: { value: 1, next: { value: 1, next: null } } },
      },
    },
  },
];

console.log(listToArray(lists[0]), [1, 2, 3]);
console.log(listToArray(lists[1]), ['string']);
console.log(listToArray(lists[2]), [true, false, 'true', 'false']);
console.log(listToArray(lists[3]), [1, 1, 1, 1, 1, 1]);
