const students = ["Yme", "Arne", "Mert"]

function generateRandomNumber(max) {
    return Math.floor(Math.random() * (max + 1))
}

function randomStudent(array) {
    return array[generateRandomNumber(array.length - 1)]
}

console.log(randomStudent(students))




function sum(a, b) {
    return a + b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function showCalculation(a, b, callback) {
    console.log(callback(a, b))
}

showCalculation(1, 1, sum)