function controlAge(age) {
    if (age < 18) {
        return "Minderjarig"
    }

    else {
        return "Volwassen"
    }
}

console.log(controlAge(18))