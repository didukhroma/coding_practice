const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) =>
  enteredCode === correctCode &&
  new Date(expirationDate) >= new Date(currentDate);

console.log(checkCoupon('123', '123', 'July 9, 2015', 'July 9, 2015'));
