const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
    console.log(number)
}

// const hello = "Hello"

// for (const letter of hello) {
//     JSON.parse(hello)
//     console.log(hello.letter)
// }

const colors = ['red', 'blue', 'green', 'yellow'];

colors.forEach((color) => console.log(color, colors.indexOf(color)))