console.log('kyu-7-catYearsDogYears.js');

const ownedCatAndDog = (catYears, dogYears) => [
  catYears < 24
    ? Math.trunc(catYears / 15)
    : Math.trunc((catYears - 24) / 4 + 2),
  dogYears < 24
    ? Math.trunc(dogYears / 15)
    : Math.trunc((dogYears - 24) / 5 + 2),
];

console.log(ownedCatAndDog(15, 15), [1, 1]);

console.log(ownedCatAndDog(24, 24), [2, 2]);

console.log(ownedCatAndDog(56, 64), [10, 10]);
