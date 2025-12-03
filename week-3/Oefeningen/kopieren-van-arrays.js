const originalArray = [1, 2, 3];

function copyArray(array) {
    return [...array]
}

const copiedArray = copyArray(originalArray);
console.log(copiedArray); // Output: [1, 2, 3]