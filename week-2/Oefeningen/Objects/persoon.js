let persoon = {
    naam: "Anna",
    leeftijd: 25,
    adres: {
        straat: "Hoofdstraat",
        nummer: 123,
        stad: "Stadsville" }
}
console.log(persoon)

console.log()

console.log(persoon.adres.nummer)

console.log()

persoon.telefoonnummer = "+32 476 94 02 44"
console.log(persoon)

console.log()

persoon.extrainfo = {}
persoon.extrainfo.hobby = "Springen"
persoon.extrainfo.favorieteKleur = "Blauw"
console.log(persoon)