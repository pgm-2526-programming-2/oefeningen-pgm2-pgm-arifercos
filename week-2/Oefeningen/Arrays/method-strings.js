const woorden = [
  'mal',
  'snurkduif',
  'bromvlieg',
  'snottebel',
  'knotsgek',
  'pindakaas',
  'fluitketel',
  'smurfenmuts',
];

console.log(woorden.join(" - "))

console.log()

console.log(woorden.filter((woorden) => woorden.startsWith("b")))

console.log()

woorden.unshift("Hello")
console.log(woorden)

console.log()

console.log(woorden.filter((woorden) => woorden.length <= 2))

console.log()

woorden.sort()
console.log(woorden)

console.log()

console.log(woorden[3])

console.log()

console.log(woorden.filter((woorden) => woorden.length > 4))