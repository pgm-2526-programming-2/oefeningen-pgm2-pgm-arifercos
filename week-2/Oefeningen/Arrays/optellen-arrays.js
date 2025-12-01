const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

let arraySum = [];

function sum (array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        arraySum[i] = array1[i] + array2[i];
    }
    console.log(arraySum)
}

sum(array1, array2)