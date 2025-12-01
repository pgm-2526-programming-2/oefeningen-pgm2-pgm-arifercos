let willekeurigeGetallen = [3, 8, 15, 6, 10, 7];
let evenGetallen = []

function filterEvenGetallen(getallen) {
    getallen.forEach(getal => {
        if (getal % 2 === 0) {
            evenGetallen.push(getal)
        }
    })
    console.log(evenGetallen);
}

filterEvenGetallen(willekeurigeGetallen)