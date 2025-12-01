const willekeurigeNamenArray = [
  ['Alice', 'Bob', 'Charlie'],
  ['David', 'Eva', 'Frank'],
  ['Grace', 'Hank', 'Ivy'],
  ['Jack', 'Kelly', 'Liam']
];

const willekeurigeNamenArrayFlat = willekeurigeNamenArray.flat()
console.log(willekeurigeNamenArrayFlat)

console.log()

// Er staat 'Verdubbel elk getal...' in de oefening, maar er zijn toch geen getallen?

willekeurigeNamenArray.forEach(namen => {
    namen.shift()
});
console.log(willekeurigeNamenArray)

console.log()

willekeurigeNamenArray.pop()
console.log(willekeurigeNamenArray)