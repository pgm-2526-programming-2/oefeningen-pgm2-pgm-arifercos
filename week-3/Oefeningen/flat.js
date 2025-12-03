function combineAllArrays(...arrays) {
    let combinedArrays = []
    for (const array of arrays) {
        combinedArrays.push(...array)
    }
    return combinedArrays
}


console.log(combineAllArrays([10, 12], [5, 4])); // [10, 12, 5, 4]
console.log(combineAllArrays([10, 12], [5, 4], [6, 6, 6])); // [10, 12, 5, 4, 6, 6]