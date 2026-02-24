// function calculateString(st) {
//   const operations = {
//     '+': (a, b) => a + b,
//     '-': (a, b) => a - b,
//     '*': (a, b) => a * b,
//     '/': (a, b) => a / b,
//   };
//   st = st.replace(/[^\d\.\/+\-*]/g, '');

//   for (let op in operations) {
//     if (st.includes(op)) {
//       const [a, b] = st.split(op);
//       return operations[op](Number.parseFloat(a), Number.parseFloat(b)).toFixed(
//         0
//       );
//     }
//   }
// }

const calculateString = st => eval(st.replace(/[^\d\.\/+\-*]/g, '')).toFixed(0);

console.log(calculateString(';$%§fsdfsd235??df/sdfgf5gh.000kk0000'), '47');
console.log(calculateString('sdfsd23454sdf*2342'), '54929268');
console.log(
  calculateString('fsdfsd235???34.4554s4234df-sdfgf2g3h4j442'),
  '-210908'
);
console.log(calculateString('fsdfsd234.4554s4234df+sf234442'), '234676');
console.log(calculateString('a1a2b3c.c0c/a1a0b.cc00c'), '12');
