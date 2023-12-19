// task 1

// class Rectangle {
//   #width;
//   #height;
//   constructor({ width, height } = {}) {
//     this.#width = width;
//     this.#height = height;
//   }
//   get width() {
//     return this.#width;
//   }
//   set width(newWidth) {
//     if (typeof newWidth === 'number' && newWidth >= 0) {
//       this.#width = newWidth;
//     } else {
//       console.log('width must be a number and digger than o');
//     }
//   }
//   get height() {
//     return this.#height;
//   }
//   set height(newHeight) {
//     if (typeof newHeight === 'number' && newHeight >= 0) {
//       this.#height = newHeight;
//     } else {
//       console.log('height must be a number and digger than o');
//     }
//   }
// }

// const item = new Rectangle({ width: 10, height: 5 });
//----------------------------------------------------------------------
// task 2
// class User {
//   #name;
//   #surname;

//   constructor(name, surname) {
//     this.#name = name;
//     this.#surname = surname;
//   }
//   getfullName() {
//     return `${this.#name} ${this.#surname}`;
//   }
// }

// class Student extends User {
//   constructor(name, surname, year) {
//     super(name, surname);
//     this.year = year;
//   }
//   getCourse() {
//     const today = new Date();
//     const currentYear = today.getFullYear();
//     const difference = currentYear - this.year;
//     return difference > 5
//       ? `Student already graduated`
//       : `${difference} course`;
//   }
// }

// const student = new Student('Peter', 'Dou', 2019);
//----------------------------------------------------------------------
// task 3
// class Hero {
//   static counter = 0;
//   static addHero() {
//     // Hero.counter += 1;
//     this.counter += 1;
//   }

//   constructor(name) {
//     this.name = name;
//     this.level = 1;
//     this.health = 200;
//     Hero.addHero();
//   }
//   attack(person) {
//     person.health -= 10;
//     console.log(`${person.name} health ${person.health}`);
//   }
//   heal() {
//     this.health += 10;
//   }
// }

// const bloodseker = new Hero('Bloodseker');
// const venom = new Hero('Venom');

// console.log(bloodseker);
// console.log(venom);
//----------------------------------------------------------------------
// task 4

class BankAccount {
  #balance = 0;
  deposit(amount) {
    if (amount > 0) {
      this.#changeBalance(amount);
      return;
    }
    console.error(`amount must be bigger than 0`);
  }
  withdraw(amount) {
    if (amount <= 0) {
      console.error(`amount must be bigger than 0`);
    } else if (this.#balance < amount) {
      console.log(`Total balance < amount`);
    } else {
      this.#changeBalance(-amount);
    }
  }
  #changeBalance(amount) {
    this.#balance += amount;
  }
}
const instance = new BankAccount();
// console.log(instance);
