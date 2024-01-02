console.log('kyu-6-theLatestClock.js');
function latestClock(a, b, c, d) {
  const combinations = [
    [
      [a, b],
      [c, d],
    ],
    [
      [a, c],
      [b, d],
    ],
    [
      [a, d],
      [b, c],
    ],
  ];

  const res = Math.max(
    ...combinations.flatMap(item =>
      [
        `${item[0].join('')}${item[1].join('')}`,
        `${item[1].join('')}${item[0].join('')}`,
        `${item[0].reverse().join('')}${item[1].join('')}`,
        `${item[0].reverse().join('')}${item[1].reverse().join('')}`,
        `${item[1].reverse().join('')}${item[0].join('')}`,
        `${item[1].reverse().join('')}${item[0].reverse().join('')}`,
      ].filter(el => Number(el) < 2359 && el[2] < 6)
    )
  );
  if (res === 0) return `00:00`;
  const hour = String(res).slice(0, 2);
  const minutes = String(res).slice(2);
  return `${hour}:${minutes}`;
}
console.log(latestClock(1, 9, 8, 3), '19:38');
console.log(latestClock(9, 1, 2, 5), '21:59');
console.log(latestClock(1, 2, 8, 9), '19:28');
console.log(latestClock(0, 0, 0, 0), '00:00');
console.log(latestClock(2, 4, 0, 0), '20:40');
console.log(latestClock(3, 0, 6, 0), '06:30');
