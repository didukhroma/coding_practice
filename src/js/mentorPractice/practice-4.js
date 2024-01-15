console.log('practice-4');
// Завдання TODO LIST (https://ibb.co/tJNV95f)
// Створи форму за допомогою якої можливо додавати свої завдання до їх списку
// Форма має містити input для опису завдання та select для можливості вибору пріоритетності цього завдання (https://ibb.co/4msvtLc)
// Після сабміту форми відмалюй завдання в списку
// Кожен елемент списку має містити: опис завдання, його пріоритетність, кнопку, щоб позначити його як виконане та кнопку для можливості видалення цього завдання (https://ibb.co/GJwsbRz)
// Після того, як статус завдання змінився на виконаний, текст завдання потрібно перекреслити, фон має змінитись на зелений, а кнопка для зміни статусу має зникнути (https://ibb.co/S0Z81bg)
// Після кліку на кнопку видалити, завдання видаляється зі списку
// Після перезавантаження сторінки всі завдання зберігаються в списку відповідно до свого статусу
// Додай можливість сортування списку завдань (https://ibb.co/CBhR78H)

const form = document.querySelector('.todo_form');
const list = document.querySelector('.todo_list');
const LS_KEY = 'TODO';

const todoList = JSON.parse(localStorage.getItem(LS_KEY)) ?? [];

// const btnDone = document.querySelector('.done');
// const btnRemove = document.querySelector('.remove');

const createTodoListMarkup = arr => arr.map(el => markup(el)).join('');

const handleSubmit = e => {
  e.preventDefault();
  const formValues = { id: Date.now() };
  [...e.currentTarget.elements].forEach(
    ({ name, value }) => name && value && (formValues[name] = value)
  );
  // create markup
  list.insertAdjacentHTML('beforeend', markup(formValues));
  todoList.push(formValues);

  localStorage.setItem(LS_KEY, JSON.stringify(todoList));
  // reset form
  form.reset(formValues);
};

const markup = ({ description, priority, id, done }) => {
  return `<li class="todo_list_item ${done ? 'mark-done' : ''}" data-id="${id}">
        <p class="item_description">${description}</p>
        <p class="item_priority">${priority}</p>
        ${
          done
            ? ' '
            : '<button type="button" class="js-done ">Mark Done</button>'
        }
        <button type="button" class="js-remove">Remove</button>
      </li>`;
};

const handleTaskAction = ({ target }) => {
  if (target.classList.contains('js-done')) markDone(target);
  if (target.classList.contains('js-remove')) markRemove(target);
};

const markDone = element => {
  const listElement = element.closest('.todo_list_item');
  listElement.classList.add('mark-done');
  const taskId = Number(listElement.dataset.id);

  const currentTask = todoList.find(el => el.id === taskId);
  currentTask.done = true;
  localStorage.setItem(LS_KEY, JSON.stringify(todoList));

  element.remove();
};

const markRemove = element => {
  console.log(element);
};

form.addEventListener('submit', handleSubmit);
list.addEventListener('click', handleTaskAction);

if (todoList.length !== 0)
  list.insertAdjacentHTML('afterbegin', createTodoListMarkup(todoList));
