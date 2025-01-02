// function showMessage (name, city) {
//     console.log("Hello, my name is " + name + " I'm from " + city);
// }

// showMessage("Nata", "Kyiv");
// showMessage("Olya", "Lviv");

// const username = "Ann";

// const sayHi = function () {
//     let message = "Hello, my name is ";
//     console.log(message + username);
// }

// sayHi();

// function sum (a, b) {
//     return a+b;
// }

// let result = sum(7,8);
// console.log(result);

// const testFunk = function (a,b) {
//     console.log("a:", a);
//     console.log("b:", b);
//     c = a+b;
//     console.log(c);
//     return c;
// }

// testFunk(5,8);

// const a = function() {
//     c();
//     console.log("function a");
//     b();
// }

// const b = function() {
//     console.log("function b");
    
// }

// const c = function() {
//     console.log("function c");
    
// }

// a();

// const addName = function () {
//     const arg = Array.from(arguments);
//     console.log(arguments);
//     console.log(arg);
// }

// addName(1,3,5);

// const addName = function (...arg) {
//     console.log(arg);
// }

// addName(1,3,5);

// function ask (question, yes, no) {
//     if (confirm(question)) {
//         yes();
//     } else {
//         no();
//     }
// }

// function showOk() {
//     console.log("You say ok");
// }

// function showCancel() {
//     console.log("You say no");
// }

// ask("Yes or no?", showOk, showCancel);

// const hello = function(name) {
//     console.log(`Hello, ${name}`);
// }

// const searchName = function(callback) {
//     const name = "Ivan";
//     callback(name);
// }

// searchName(hello);

// function checkAge (age) {
//     if (age>18) {
//         return console.log("Hello");
//     }
//         return console.log("Good Bye");
// }
// checkAge(18);

// function showMovie (age) {
//     if (age<21) {
//         return;
//     }
//     return console.log("Go to movie!");
// }
// showMovie(21);

// const test = (arg) => {
//     console.log(arg);
// }
// test("hello");

// const shoeMovie = (age)=> {
//     if (age>21) {
//         return console.log("Hello");
//     }
//         return console.log("Bye");
// }
// shoeMovie(18);

// const a = () => {
//     console.log("a");
// }

// const b = () => {
//     console.log("b");
// }

// const c = () => {
//     console.log("c");
//     a();
//     b();
// }

// c();

// console.log(document);

// const addNumber = (number) => {
//     let summ = +number + 10;
//     return console.log(summ);
// }

// const numberRef = document.querySelector('input[name="number"]');
// const buttonRef = document.querySelector('button');

// buttonRef.addEventListener('click', () => addNumber(numberRef.value));