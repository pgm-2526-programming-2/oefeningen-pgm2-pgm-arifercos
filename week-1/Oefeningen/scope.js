let number = 10

function scope() {
    number += 10
    console.log(number)
}


scope()                     // Dit toont het nummer waar we 10 bij hebben opgeteld 
console.log(number)         // Dit toont het oorspronkelijke nummer omdat number zich niet in de scope van de functie bevindt