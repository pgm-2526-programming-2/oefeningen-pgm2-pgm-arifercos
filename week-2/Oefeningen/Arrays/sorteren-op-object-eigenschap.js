let objectenArray = [
  { naam: 'Anna', leeftijd: 30 },
  { naam: 'Bob', leeftijd: 25 },
  { naam: 'Charlie', leeftijd: 35 },
];

function sorterenOpEigenschap(objecten, eigenschap) {
    return objecten.sort((a, b) => {
        if (a[eigenschap] < b[eigenschap]) {
        return -1;
        }
        if (a[eigenschap] > b[eigenschap]) {
        return 1;
        }
        return 0;
  });
}

let gesorteerdOpNaam = sorterenOpEigenschap(objectenArray, 'naam');
console.log(gesorteerdOpNaam)