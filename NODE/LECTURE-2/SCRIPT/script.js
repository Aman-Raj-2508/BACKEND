#!/usr/bin/env node


//shebang to run script.js without using (node script.js) and run directly script.js


console.log("Hello world");

console.log(process.argv); // process global has a  argv that is used to consume the arguments like --name=sanket --company=google
//when we pass some argument to process we are able to access under argv
//this is array 

console.log(process.argv[2].split("="));
//to extract the given arguments

/**
process.argv[0] → /usr/local/bin/node
process.argv[1] → /path/to/script.js
process.argv[2] → --name=sanket
process.argv[3] → --company=google
*/

//to access sanket
console.log(process.argv[2].split("=")[1]);