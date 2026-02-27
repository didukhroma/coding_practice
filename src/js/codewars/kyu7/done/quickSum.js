console.log('kyu-7-quickSum');
// const quicksum = packet =>
//   packet.match(/[\s,A-Z]/g) &&
//   packet.length === packet.match(/[\s,A-Z]/g).length
//     ? packet
//         .match(/[\s,A-Z]/g)
//         .reduce(
//           (acc, el, i) =>
//             (acc += el === ' ' ? 0 : (el.charCodeAt(0) - 64) * (i + 1)),
//           0
//         )
//     : 0;
const quicksum = packet =>
  packet.length === packet.replace(/[^\s,A-Z]/g, '').length
    ? packet
        .split('')
        .reduce(
          (acc, el, i) =>
            (acc += el === ' ' ? 0 : (el.charCodeAt(0) - 64) * (i + 1)),
          0
        )
    : 0;

console.log(quicksum('ACM'), 46);
console.log(quicksum('MID CENTRAL'), 650);
console.log(quicksum('BBC'), 15);
console.log(quicksum('???'), 0);
console.log(quicksum('axg '), 0);
console.log(quicksum('234 234 WEF ASDF AAA 554211 ???? '), 0);
console.log(quicksum('A C M'), 75);
