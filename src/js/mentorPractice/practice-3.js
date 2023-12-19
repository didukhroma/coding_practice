console.log('practice-3');
//----------------task -1
// потрібно створити функцію яка буде формувати чергу в магазині
// 1 перший параметр масив, кілікість елементів це кількість покіпців, значення елементу масиву це час який покупець витратить на касі
// 2 параметр це кількість кас
// Повертає обєкт де ключ це номер касси, значення це час черги на касі
// 12 + 2 + 15 = 29
// 3 + 5 + 6 + 7 = 21
// { 1 : 29, 2 : 21}

// function fn(buyers, cases) {
//   const result = {};
//   for (let i = 0; i < cases; i += 1) {
//     result[i + 1] = 0;
//   }
//   //   console.log(result);
//   //   return buyers.reduce((acc, el) => {
//   //     // let keys = Object.keys(acc);
//   //     console.log(acc);
//   //     let times = Object.values(acc);
//   //     let minTime = Math.min(...times);
//   //     let numberCashRegister = times.indexOf(minTime);
//   //     acc[numberCashRegister + 1] += el;
//   //   }, result);
//   for (let element of buyers) {
//     let values = Object.values(result);
//     let min = Math.min(...values);
//     result[values.indexOf(min) + 1] += element;
//   }
//   return result;
// }

// console.log(fn([12, 3, 5, 6, 2, 15, 7], 2));
//----------------task-2
// Створи слайдер за допомогою ES6 класу
// Під час ініціалізації екземпляра класу він має приймати
// 1 Посилання на контейнер в середині якого буде генеруватись слайдер
// 2 Масив з посиланнями на зображення які потрібно відмалювати
// Слайдер має мати кнопки для навігації "Вперед" "Назад"
// Слайдер має показувати на якому ми зображені з загальної кількості зображень ми знаходимось
// const cats = [
//   'https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg',
//   'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
//   'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=1200',
// ];
// class Slider {
//   #container;
//   #images;
//   constructor(container, images) {
//     this.#container = container;
//     this.#images = images;
//     this.currentPage = 1;
//     // this.init();
//   }

//   init() {
//     const markup = this.#createMarkup();
//     this.#container.insertAdjacentHTML('afterbegin', markup);
//     console.log(markup);
//   }
//   #createMarkup() {
//     return `  <div class="slides">${this.#images
//       .map(
//         el => ` <div class="slide" >
//       <img src="${el}" alt="slide" width="300"/>
//     </div>`
//       )
//       .join('')}
//   </div>`;
//   }

//   nextPage() {}
//   previousPage() {}
// }

// const sliderRef = document.querySelector('.js-container');

// const slider = new Slider(sliderRef, cats);
// console.log(slider);
// slider.init();
//--------------------------------------------------------------------
const cats = [
  'https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg',
  'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
  'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=1200',
];

const container = document.querySelector('.js-container');
class Slider {
  #container;
  #images;
  constructor(container, images) {
    this.#container = container;
    this.#images = images;
    this.currentImg = 1;
  }
  init() {
    const markup = this.#createMarkup();
    this.#container.insertAdjacentHTML('afterbegin', markup);
    this.refs = {
      next: document.querySelector('.next-btn'),
      prev: document.querySelector('.prev-btn'),
      slides: document.querySelectorAll('.slide'),
      text: document.querySelector('.current'),
    };

    this.#updateSlider();

    this.refs.prev.addEventListener('click', this.#handlerPrev.bind(this));
    this.refs.next.addEventListener('click', this.#handlerNext.bind(this));
  }
  #createMarkup() {
    return `<div class="slides">
    ${this.#images
      .map(
        url => `<div class="slide">
          <img src="${url}" alt="slide" width="300" />
        </div>`
      )
      .join('')}
        
      </div><div>
      <p>Slide <span class="current">${this.currentImg}</span> of <span>${
      this.#images.length
    }</span></p>
        <button class="prev-btn">Prev</button>
         <button class="next-btn">Next</button>
    </div>`;
  }
  #updateSlider() {
    this.refs.slides.forEach((el, i) => {
      el.classList.toggle('active', i === this.currentImg - 1);
    });
    this.refs.text.textContent = this.currentImg;
  }

  #handlerNext() {
    this.currentImg += 1;
    if (this.currentImg > this.#images.length) this.currentImg = 1;
    this.#updateSlider();
  }

  #handlerPrev() {
    this.currentImg -= 1;
    if (this.currentImg < 1) this.currentImg = this.#images.length;
    this.#updateSlider();
  }
}
const slider = new Slider(container, cats);
slider.init();

const foo = (a, b, c) => foo2(a, b) + c;
console.log(foo);
const foo2 = (a, b) => a + b;
console.log(foo(1, 2, 3));
