const currentDate = new Date();
console.log(currentDate);
const targetDate = new Date('08/12/2024'); // <12 month and date maybe not correct //  Month-day-year format-string //  splitter '-' ' ' '/'
console.log(targetDate);
console.log(targetDate - currentDate); // difference is number in ms
