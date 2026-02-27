// console.log('kyu-7-calculateMealTotal');
// // const calculate_total = (subtotal, tax, tip) =>
// //   Number((subtotal * (1 + (tax + tip) / 100)).toFixed(2));
// const calculate_total = (subtotal, tax, tip) =>
//   Math.round(subtotal * (100 + tax + tip)) / 100;
// console.log(calculate_total(5, 5, 10), 5.75);
// console.log(calculate_total(36.97, 7, 15), 45.1);
// console.log(calculate_total(0.0, 6, 18), 0.0);
// console.log(calculate_total(80.94, 0, 20), 97.13);
// console.log(calculate_total(54.96, 8, 0), 59.36);
// console.log(Number(null));
// 'use strict';
// const numbers = [5, 10, 15, 20];
// console.log(numbers);
// const result = numbers.reduce((previousValue, number) => {
//   previousValue.push(number * 2);
//   // console.log(previousValue);
//   return previousValue;
// }, []);
// console.log(result);
// // const resul2t = numbers.reduce(
// //   (previousValue, number) => [...previousValue, number * 2],
// //   []
// // );
// console.log(resul2t);
