const willekeurigeGetallen = [23, 7, 45, 12, 87, 3, 56, 19, 34, 91];

console.log(willekeurigeGetallen.filter((willekeurigeGetallen) => willekeurigeGetallen > 10))

console.log()

willekeurigeGetallen.pop()
console.log(willekeurigeGetallen)

console.log()

willekeurigeGetallen.shift()
console.log(willekeurigeGetallen)

console.log()

willekeurigeGetallen.push(5)
console.log(willekeurigeGetallen)

console.log(willekeurigeGetallen.filter((willekeurigeGetallen) => willekeurigeGetallen < 20))

console.log()

console.log(willekeurigeGetallen.join(" "))

console.log()

let optelling = 0;

willekeurigeGetallen.forEach(getal => {
    optelling = optelling + getal
});
console.log(optelling)

console.log()

const willekeurigeGetallenVerdubbeld = willekeurigeGetallen.map(getal => getal * 2)
console.log(willekeurigeGetallenVerdubbeld)

console.log()

console.log(willekeurigeGetallen.filter((willekeurigeGetallen) => willekeurigeGetallen > 30))