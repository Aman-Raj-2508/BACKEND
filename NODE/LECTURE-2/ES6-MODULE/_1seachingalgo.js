//Second way of ES-6 modulling without using .mjs extension
// function linearSearch(arr, x) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === x) {
//             return i;
//         }
//     }
//     return NaN;
// }

// function binarySearch(arr, x) {
//     //some code
// }
console.log("ending searching");

/** Exporting using module.exports  which works only  in common js we have to change file to .cjs */
// module.exports = {
//     linear: linearSearch,
//     binary: binarySearch,
// }

// Second way to export so that we can use (import searching from './_1seachingalgo.js';)

// export default function fun() { //default exports
//     console.log("fun");
// }

// export default function gun() { //default exports
//     console.log("gun");
// }



function binarySearch(arr, x) {
    //some code
}

console.log("ending searching")
//named exports
export function linearSearch(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return i;
        }
    }
    return NaN;
}

//named exports
// export {
//     linearSearch,
//     binarySearch
// }

//To export multiple default exports

export default {
    binarySearch,
    fun: function fun() {
        console.log("fun");
    },
    linearSearch
}