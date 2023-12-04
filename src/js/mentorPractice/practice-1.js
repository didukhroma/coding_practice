// const arr = [12, 15, 20, 25, 30];

// function checkArr(arr,target) {
//     for (const num of arr) {
//         if (target > num) {
//             console.log('fail')
//             break
//         };
//         console.log('check')
//     }
//     return 'Success'
// }
// console.log(checkArr(arr,21))

// ---------task 1
// const numbers = [3, 7, 12, 5, 9, 10, 15];

// function foo(arr) {
//   let res = 0;
//   for (const num of arr) {
//     if (num % 2 === 0 && num > res) res = num;
//   }

//   return res;
// }
// console.log(foo(numbers));

//--------------task 2
// Напиши функцію, яка приймає масив рядків (слів) і повертає новий масив, який містить тільки ті слова, які мають непарну кількість літер.
// const words = ["яблуко", "банан", "апельсин", "персик", "слива"];

// function foo(arr) {
//   let res = [];
//   for (const word of words) {
//     if (word.length % 2 !== 0) res.push(word);
//   }

//   return res;
// }
// console.log(foo(words));
//--------------task 3
// Напиши функцію, яка приймає рядок (наприклад, текст повідомлення чи фразу)
// і повертає true, якщо рядок містить як мінімум три слова, починаючи з літери "б",
//     і false в іншому випадку.

// function foo(str, target) {
//   let count = 0;
//   const arr = str.split(" ");
//   for (const word of arr) {
//     if (word.toLowerCase().startsWith(target.toLowerCase())) count += 1;
//   }

//   return count >= 3 ? true : false;
// }

// const text = "Багато бур'яну біля будинку.";
// console.log(foo(text, "б"));
//--------------task 4
//  Створи функцію, яка приймає рядок та змінює порядок слів у масиві
// та з'єднує їх, утворюючи новий рядок.

// const text = "Це завдання для перевірки навичок.";

// -----task 5
//Написати функцію, яка буде видаляти з масива усі значення, які приводяться до false
// undefined, null, false, '', 0, NaN

//
// const array = [
//   1,
//   0,
//   54,
//   "doc",
//   null,
//   "jpg",
//   undefined,
//   "",
//   "png",
//   "exe",
//   false,
//   "mp4",
//   NaN,
//   "hbs",
// ];

// function foo(arr) {
//   let res = [];
//   for (const value of arr) {
//     if (value) res.push(value);
//   }

//   return res;
// }

// function foo(arr) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (!arr[i]) arr.splice(i, 1);
//   }
//   return arr;
// }
// console.log(foo(array));

// --- task 5
// Створи функцію, яка приймає рядок та змінює порядок слів у масиві та з'єднує їх, утворюючи новий рядок.

// const text = "Це завдання для перевірки навичок.";

// function reverseStr(str) {
//   return str.split(" ").reverse().join(" ");
// }

// console.log(reverseStr(text));
// ------------------------------------------------------------------
// ---- task 6
// Створи функцію, яка приймає рядок та змінює регістр літер наступним чином: великі літери робляться малими, а малі - великими.
// const word = "Hello, World!";

// function changeRegister(str) {
//   let resultStr = "";
//   for (const letter of str) {
//     resultStr +=
//       letter.toLowerCase() === letter
//         ? letter.toUpperCase()
//         : letter.toLowerCase();
//   }
//   return resultStr;
// }

// console.log(word);
// console.log(changeRegister(word));

// ---- task 7
// Створи дві функції: одна для кодування рядка,
// інша - для декодування.Кодування повинно працювати так:
//  кожен символ в рядку замінюється його ASCII - кодом, і
//  кожен код розділяється певним роздільником(наприклад,
//      тире).Декодування повинно виконувати зворотню операцію.

// const word = "Hello, World!";

// function coder(str) {
//   let result = [];
//   for (const letter of str) {
//     result.push(letter.charCodeAt(0));
//   }

//   return result.join("-");
// }

// function decoder(str) {
//   let arr = str.split("-");
//   let result = "";
//   for (const letter of arr) {
//     result += String.fromCharCode(letter);
//   }
//   return result;

//   //   return result.join("");
// }
// // console.log(coder(word));
// const keyWord = coder("My name Roman");
// console.log(keyWord);
// console.log(decoder(keyWord));
// console.log(decoder("77-121-32-110-97-109-101-32-82-111-109-97-110"));

// const user = {
//   name: "Alice",
// };
// // Object.freeze(user);
// const newUser = user;
// console.log(newUser);
// newUser.city = "Lviv";
// console.log(newUser);
// const arr = [1, 2, 3];
// console.log(arr);
// arr.forEach((el, i, arr) => (arr[i] += el + 1));
// console.log(arr);
//---------------------------------
// function spoonerize(words) {
//   const arr = words.split(" ");
//   let centerArr = arr.slice(1, arr.length - 1);
//   let fwArr = arr[0].split("");
//   let lwArr = arr[arr.length - 1].split("");
//   let fwLettter = fwArr[0];
//   let lwLettter = lwArr[0];
//   fwArr[0] = lwLettter;
//   lwArr[0] = fwLettter;

//   return [fwArr.join(""), ...centerArr, lwArr.join("")].join(" ");
// }
// console.log(spoonerize("nit picking"), "pit nicking");
// function noonerize(numbers) {
//   // ...mathoonerize, maybe?
//   if (typeof numbers[0] !== "number" || typeof numbers[1] !== "number")
//     return "invalid array";
//   const [a, b] = numbers;
//   let fNUm = Number(String(a)[0] + String(b).slice(1));
//   let sNUm = Number(String(b)[0] + String(a).slice(1));
//   return Math.max(fNUm, sNUm) - Math.min(fNUm, sNUm);
//   0;
// }
// console.log(noonerize([12, 34]), 18);
// console.log(noonerize([55, 63]), 12);
// console.log(noonerize([357, 579]), 178);
// console.log(noonerize([1000000, 9999999]), 7000001);
