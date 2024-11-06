// One way
// import searching from './_1seachingalgo.cjs';
//console.log(searching);

// Second way
//1.no default exports in _1.searching.js then
// import { linearSearch, binarySearch } from './_1seachingalgo.js';
// console.log(linearSearch, binarySearch);   

//2.with default export
// import searching, { linearSearch, binarySearch } from './_1seachingalgo.js';
// console.log(searching, linearSearch, binarySearch); 

//3.multiple default exports like fun and gun
// import searching, { linearSearch, binarySearch } from './_1seachingalgo.js';
// console.log(searching, linearSearch, binarySearch);  //error duplicate default exports

//4.Importing linearSearch is exported both as default and named

import searching, { linearSearch } from './_1seachingalgo.js';
console.log(searching, linearSearch);