console.log('kyu-7-stonePickaxeCrafting.js');

function stonePick(arr) {
  let cobblestonesCount = 0;
  let sticksCount = 0;

  arr.forEach(el => {
    if (el === 'Sticks') sticksCount += 1;
    if (el === 'Cobblestone') cobblestonesCount += 1;
    if (el === 'Wood') sticksCount += 4;
  });

  return Math.trunc(Math.min(cobblestonesCount / 3, sticksCount / 2));
}

console.log(stonePick(['Wood', 'Dirt', 'Cobblestone', 'Sticks']));
