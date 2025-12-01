let woordenArray = ['appel', 'peer', 'kiwi', 'banaan'];

let langsteWoord = ""

for (const woord of woordenArray) {
    if (woord.length > langsteWoord.length) {
        langsteWoord = woord
    }
}

console.log(langsteWoord);