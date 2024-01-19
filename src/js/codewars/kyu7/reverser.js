console.log('kyu-7-reverser');
/**Task */
// Impliment the reverse function, which takes in input n and reverses it.
// For instance, reverse(123) should return 321. You should do this without
// converting the inputted number into a string.
//---------------------------------------------------------------------------------
// function reverse(n) {
//   let revNum = 0;
//   while (n > 0) {
//     revNum = revNum * 10 + (n % 10);
//     n = Math.trunc(n / 10);
//   }
//   return revNum;
// }
//---------------------------------------------------------------------------------
// const reverse = n => Number(Array.of(n).join().split([]).reverse().join([]));
//---------------------------------------------------------------------------------
const reverse = n => Number(([] + n).split([]).reverse().join([]));

console.log(reverse(1234), 4321);
console.log(reverse(10987), 78901);
console.log(reverse(1020), 201);
