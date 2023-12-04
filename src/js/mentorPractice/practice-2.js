// Створити функцію яка буде приймати 2 параметра.
// 1 Масив студентів.
// 2 Мову програмування яку потрібно знайти.
// Функція повертає масив імен користувачів які вивчають цю мову.
//-----------------------task 1
// const students2 = [
//   {
//     name: `Den`,
//     language: `html`,
//   },
//   {
//     name: `Petro`,
//     language: `css`,
//   },
//   {
//     name: `Egor`,
//     language: `js`,
//   },
//   {
//     name: `Max`,
//     language: `html`,
//   },
//   {
//     name: `Olga`,
//     language: `css`,
//   },
//   {
//     name: `Kate`,
//     language: `js`,
//   },
//   {
//     name: `Ivan`,
//     language: `html`,
//   },
// ];

// const foo = (arr, language) =>
//   arr
//     .filter(({ language: studentlang }) => language === studentlang)
//     .map(({ name }) => name);
// console.log(foo(students2, `js`));
//-----------------------task 2
// Створіть масив об'єктів, кожен з яких представляє товар і має властивість category. Використовуйте метод reduce для групування товарів за їхніми категоріями.
// const products = [
//   { name: "Laptop", category: "Electronics" },
//   { name: "T-shirt", category: "Fashion" },
//   { name: "Refrigerator", category: "Electronics" },
//   { name: "Jeans", category: "Fashion" },
//   { name: "Headphones", category: "Electronics" },
//   { name: "Sneakers", category: "Fashion" },
//   { name: "Microwave", category: "Electronics" },
// ];
// const foo = (arr) =>
//   arr.reduce((acc, el) => {
//     acc[el.category] = acc[el.category] ? [...acc[el.category], el] : [el];
//     return acc;
//   }, {});

// console.log(foo(products));
//-----------------------task 3
// Створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.
// const people1 = [
//   {
//     name: "Alex",
//     know: ["Eva", "Jhon"],
//   },
//   {
//     name: "Ivan",
//     know: ["Jhon", "Alex"],
//   },
//   {
//     name: "Eva",
//     know: ["Alex", "Jhon"],
//   },
//   {
//     name: "Jhon",
//     know: ["Alex"],
//   },
// ]; //Not found
// const people2 = [
//   {
//     name: "Alex",
//     know: ["Eva", "Jhon"],
//   },
//   {
//     name: "Jhon",
//     know: [],
//   },
//   {
//     name: "Eva",
//     know: [],
//   },
//   {
//     name: "Ivan",
//     know: ["Jhon", "Alex"],
//   },
// ]; // Not found

// const people3 = [
//   {
//     name: "Alex",
//     know: ["Eva", "Jhon"],
//   },
//   {
//     name: "Jhon",
//     know: [],
//   },
//   {
//     name: "Eva",
//     know: ["Alex", "Jhon"],
//   },
//   {
//     name: "Ivan",
//     know: ["Jhon", "Alex"],
//   },
// ]; // Jhon
// const people4 = [
//   {
//     name: "Alex",
//     know: ["Eva", "Jhon"],
//   },
//   {
//     name: "Jhon",
//     know: [],
//   },
//   {
//     name: "Eva",
//     know: ["Alex"],
//   },
//   {
//     name: "Ivan",
//     know: ["Jhon", "Alex"],
//   },
// ]; // Not found
// function findNarc(arr) {
//   const candidates = arr.filter(({ know }) => !know.length);

//   if (candidates.length !== 1) return 'Not found';

//   const candidatesName = candidates[0].name;

//   const isNarcissi = arr.every(
//     ({ know, name }) => name === candidatsName || know.includes(candidatsName)
//   );

//   return isNarcissi ? candidatesName : 'Not found';
// }

// console.log(findNarc(people1));
// console.log(findNarc(people2));
// console.log(findNarc(people3));
// console.log(findNarc(people4));

//-----------------------task 4
// Знаходження середнього віку користувачів з умовою:
// Створіть масив об'єктів користувачів (ім'я та вік) і використовуйте методи filter,
// map та reduce для знаходження середнього віку користувачів, вік яких перевищує 25.
// const users = [
//   { name: "Alice", age: 28 },
//   { name: "Bob", age: 22 },
//   { name: "Charlie", age: 30 },
//   { name: "Kate", age: 21 },
//   { name: "Den", age: 40 },
// ];
// const averageAge = (arr) =>
//   arr
//     .filter(({ age }) => age > 25)
//     .map(({ age }) => age)
//     .reduce((acc, num, idx, arr) => {
//       acc += num;
//       return idx === arr.length - 1 ? Math.round(acc / arr.length) : acc;
//     }, 0);

// console.log(averageAge(users));
//-----------------------task 5
