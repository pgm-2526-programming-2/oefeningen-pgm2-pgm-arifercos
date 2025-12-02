function sorterenOpEigenschap(objecten, eigenschap) {
  return objecten.sort(function (a, b) {
    if (a[eigenschap] < b[eigenschap]) return -1;
    if (a[eigenschap] > b[eigenschap]) return 1;
    if (a[eigenschap] == b[eigenschap]) return 0;
  })
}

let objectenArray = [
  { naam: 'Bob', leeftijd: 25 },
  { naam: 'Anna', leeftijd: 30 },
  { naam: 'Charlie', leeftijd: 35 }
];

let gesorteerdOpNaam = sorterenOpEigenschap(objectenArray, 'naam');
console.log(gesorteerdOpNaam)