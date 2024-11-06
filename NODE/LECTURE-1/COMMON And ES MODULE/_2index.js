//Common js modulling
const searching = require('./_2searching.js')

// import searching from './_2searching.js'  //error as this is ES6 modules and we need to do something to use it
console.log("Start");
let arr = [5, 4, 2, 7, 1, 3, 4, 5, 6];
let x = 6;

console.log(searching); // objects

console.log(searching.linear(arr, x)); // When object is exported

// console.log(searching); //function

//When function is exported
// console.log(searching(arr, x));


