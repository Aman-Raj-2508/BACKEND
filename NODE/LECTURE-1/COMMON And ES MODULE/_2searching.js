function linearSearch(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return i;
        }
    }
    return NaN;
}

function binarySearcha(arr, x) {
    //some code
}

console.log("ending searching");

/** Exporting modules as object */
module.exports = {
    linear: linearSearch,
    binary: binarySearcha,
}

/** Exporting modules as functions */
// module.exports = linearSearch;