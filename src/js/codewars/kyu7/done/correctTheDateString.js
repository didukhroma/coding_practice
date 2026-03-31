// function dateCorrect(date) {
//   // 1. Null or empty → return as is
//   if (date === null || date === '') return date;

//   // 2. Validate format DD.MM.YYYY
//   if (!/^\d{2}\.\d{2}\.\d{4}$/.test(date)) return null;

//   let [day, month, year] = date.split('.').map(Number);

//   // 3. Normalize month first
//   year += Math.floor((month - 1) / 12);
//   month = ((((month - 1) % 12) + 12) % 12) + 1;

//   // 4. Use JS Date to handle day overflow
//   let result = new Date(year, month - 1, 1); // months are 0-based
//   result.setDate(day);

//   // 5. Format back to DD.MM.YYYY
//   const dd = String(result.getDate()).padStart(2, '0');
//   const mm = String(result.getMonth() + 1).padStart(2, '0');
//   const yyyy = result.getFullYear();

//   return `${dd}.${mm}.${yyyy}`;
// }

function dateCorrect(datestring) {
  if (!datestring) return datestring;
  if (!/^([0-9]{2}\.){2}[0-9]{4}$/.test(datestring)) return null;
  let correctDate = new Date(
    datestring.slice(-4),
    datestring.slice(3, 5) - 1,
    datestring.slice(0, 2)
  )
    .toLocaleDateString()
    .split('/');
  return [correctDate[1], correctDate[0], correctDate[2]]
    .map(e => e.padStart(2, '0'))
    .join('.');
}
console.log(dateCorrect('30.02.2016')); // "01.03.2016"
// console.log(dateCorrect('40.06.2015')); // "10.07.2015"
// console.log(dateCorrect('11.13.2014')); // "11.01.2015"
// console.log(dateCorrect('99.11.2010')); // "07.02.2011"
