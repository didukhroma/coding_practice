console.log('practice-4');
// import obj from './db';

// console.log(obj);
// obj.foo();
// obj.func();
//------------------------------------------
// import foo from './db';
// foo();
// import name from './db';//?
// name();
//------------------------------------------

const user = {
  username: 'Mango',
  showName() {
    console.log(this.username);
  },
};
const json = JSON.stringify(user);
console.log(json);
