console.log('kyu-6-houseOfCards.js');

function houseOfCards(floors) {
  if (floors < 1 || typeof floors !== 'number' || floors % 1 !== 0)
    throw new Error();
  //good luck!
  let pair = 0;
  let horizontalCard = 0;
  for (let i = 1; i <= floors; i += 1) {
    horizontalCard += i;
  }
  for (let j = 1; j <= floors + 1; j += 1) {
    pair += j;
  }
  return pair * 2 + horizontalCard;
}
console.log(houseOfCards(1), 7);
console.log(houseOfCards(2), 15);
console.log(houseOfCards(3), 26);
console.log(houseOfCards(6), 77);
console.log(houseOfCards(15), 392);
