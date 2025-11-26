const students = ["Nick", "Adriaan", "Arif"]

const people = ["Nick", "Adriaan", "Arif"]

function areArrayEqual(array1, array2) {
    const stringifyArray1 = JSON.stringify(array1)
    const stringifyArray2 = JSON.stringify(array2)

    console.log(stringifyArray1 === stringifyArray2)
}

areArrayEqual(students, people)