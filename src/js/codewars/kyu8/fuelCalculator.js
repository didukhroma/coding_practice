console.log('kyu-8-fuelCalculator.js');
function fuelPrice(litres, pricePerLitre) {
  const MAX_DISCOUNT = 0.25;
  let discount = Math.trunc(litres / 2) * 0.05;

  return Number(
    (litres * (pricePerLitre - Math.min(discount, MAX_DISCOUNT))).toFixed(2)
  );
  // Good luck with it!
}
console.log(fuelPrice(5, 1.23), 5.65);
console.log(fuelPrice(8, 2.5), 18.4);
console.log(fuelPrice(5, 5.6), 27.5);
