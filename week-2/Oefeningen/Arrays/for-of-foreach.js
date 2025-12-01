const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
    console.log(number)
}

console.log()

const hello = "Hello"
for (let i = 0; i < hello.length; i++) {
  console.log(hello.charAt(i));
}

console.log()

const colors = ['red', 'blue', 'green', 'yellow'];
colors.forEach((color) => console.log(color, colors.indexOf(color)))