function greetings(name = "") {
    return "Hallo daar " + name + "!"
}

console.log(greetings("Arif"))




// Om geen spatie te krijgen voor het uitroepteken als name leeg is, gebruik onderstaande code

// function greetings(name = "") {
//     if (!name) {
//         return "Hallo daar!"
//     }

//     else {
//         return "Hallo daar " + name + "!"
//     }
// }

// console.log(greetings("Arif"))