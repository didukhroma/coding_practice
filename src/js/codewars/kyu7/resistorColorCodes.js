console.log('kyu-7-resistorColorCodes.js');

function decodeResistorColors(bands) {
  const toleranceValues = {
    gold: '5%',
    silver: '10%',
  };
  const colors = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    gray: 8,
    white: 9,
  };
  const arr = bands.split(' ');
  const tolerance = toleranceValues[arr.at(-1)] || '20%';

  const value =
    Number(String(colors[arr[0]]) + String(colors[arr[1]])) *
    Math.pow(10, colors[arr[2]]);

  const resValue =
    value >= 1000
      ? value >= 1000000
        ? value / 1000000 + 'M'
        : value / 1000 + 'k'
      : value;

  return `${resValue} ohms, ${tolerance}`;
}

console.log(decodeResistorColors('yellow violet black'), '\n47 ohms, 20%');

console.log(decodeResistorColors('yellow violet red gold'), '\n4.7k ohms, 5%');

console.log(decodeResistorColors('brown black green silver'), '\n1M ohms, 10%');
