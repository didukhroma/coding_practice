// var searchArray = function (arrayToSearch, query) {
//   // TODO your code here
//   if (!Array.isArray(query) || query.length !== 2) throw Error;

//   return arrayToSearch.findIndex(el => {
//     if (!Array.isArray(el) || el.length !== 2) throw Error;

//     if (el.toString() === query.toString()) return true;
//     return false;
//   });
// };
//----------------------------------------------------------------------------
function searchArray(arrayToSearch, query) {
  checkCriteria(query);

  return arrayToSearch.findIndex(
    el => checkCriteria(el).toString() === query.toString()
  );
}
function checkCriteria(el) {
  if (!Array.isArray(el) || el.length !== 2) throw Error;
  return el;
}

const bigArray = [
  [2, 3],
  [7, 2],
  [9, 20],
  [1, 2],
  [7, 2],
  [45, 4],
  [7, 87],
  [4, 5],
  [2, 7],
  [6, 32],
];

let searchFor = [9, 20];
console.log(searchArray(bigArray, searchFor), 2);
searchFor = [1, 12];
console.log(searchArray(bigArray, searchFor), -1);
searchFor = [7, 2];
console.log(searchArray(bigArray, searchFor), 1);
