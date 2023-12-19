// console.log('first');

// const person = {
//   name: 'Alice',
//   hello: () => console.log(this),
// };
// person.hello();

// const person = {
//   name: 'Alice',
//   hello() {
//     console.log(this);
//     const a = () => console.log(this);
//     a();
//   },
// };
// person.hello();
// ----------------task 1
// const cruiseControl = {
//   brand: 'Audi',
//   speed: 0,

//   accelerate() {
//     this.speed += 10;
//     console.log(`Auto ${this.brand} accelerate. Current speed ${this.speed}`);
//   },

//   decrease() {
//     this.speed -= 10;
//     if (this.speed <= 0) {
//       console.log('Auto stop');
//       return;
//     }
//     console.log(`Auto ${this.brand} decrease. Current speed ${this.speed}`);
//   },
// };

// cruiseControl.accelerate();
// cruiseControl.accelerate();
// cruiseControl.accelerate();
// cruiseControl.accelerate();
// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();
// console.log(cruiseControl);
// ----------------task 2
// const product = {
//   name: 'Smartphone',
//   price: 500,
//   discount(percent) {
//     return (this.price * (100 - percent)) / 100;
//   },
// };

// const client = {
//   name: 'Alice',
//   discountPercent: 8,
//   purchase() {
//     const price = product.discount(this.discountPercent);
//     console.log(
//       `${this.name} buy product with discount ${this.discountPercent} percentage and price to pay ${price} usd `
//     );
//   },
// };
// client.purchase();

// const client2 = {
//   name: 'Kate',
//   discountPercent: 15,
//   purchase: client.purchase,
// };
// client2.purchase();
// ----------------task 3
// const SAFE_SPEED = 60;
// const tesla = {
//   brand: 'Tesla',
//   speed: 30,
// };
// const audi = {
//   brand: 'Audi',
//   speed: 70,
// };

// function speedSensor(maxSpeed) {
//   //   if (this.speed > maxSpeed) return `${this.brand} - speed too much`;
//   //   return `${this.brand} - speed normal`;
//   return this.speed > maxSpeed
//     ? `${this.brand} - speed too much`
//     : `${this.brand} - speed normal`;
// }

// console.log(speedSensor.call(audi, SAFE_SPEED));
// console.log(speedSensor.call(tesla, SAFE_SPEED));
// -------------------------------------------------------------
// -------------------------------------------------------task 4
// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   add() {
//     return (
//       (typeof this.a === 'number' ? this.a : 0) +
//       (typeof this.b === 'number' ? this.b : 0)
//     );
//   },

//   mult() {
//     return (
//       (typeof this.a === 'number' ? this.a : 1) *
//       (typeof this.b === 'number' ? this.b : 1)
//     );
//   },
// };

// calculator.read(3, '4');
// console.log(calculator);
// console.log(calculator.add());
// console.log(calculator.mult());

// console.log(typeof null);
// console.log(typeof undefined);
// console.log(a);
// var a = 1;
// console.log(a);
// console.log(b);
// let b = 1;
// console.log(b);
