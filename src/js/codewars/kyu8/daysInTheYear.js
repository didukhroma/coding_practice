console.log('kyu-8-daysInTheYear.js');

// const yearDays = year =>
//   `${year} has ${
//     year % 100 === 0
//       ? year % 400 === 0
//         ? 366
//         : 365
//       : year % 4 === 0
//       ? 366
//       : 365
//     } days`;

const yearDays = year =>
  `${year} has ${
    year % 4 ? 365 : year % 100 ? 366 : year % 400 ? 365 : 366
  } days`;

console.log(yearDays(0), '0 has 366 days');
console.log(yearDays(-64), '-64 has 366 days');
console.log(yearDays(2016), '2016 has 366 days');
console.log(yearDays(1974), '1974 has 365 days');
console.log(yearDays(-10), '-10 has 365 days');
console.log(yearDays(666), '666 has 365 days');
console.log(yearDays(1857), '1857 has 365 days');
