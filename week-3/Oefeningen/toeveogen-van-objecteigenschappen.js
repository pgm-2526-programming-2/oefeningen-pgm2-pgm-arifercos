const originalObject = { name: "Alice" };

function addProperty(object, key, value) {
    object[key] = value
    return {...object}
}

const updatedObject = addProperty(originalObject, "age", 25);
console.log(updatedObject); // Output: { name: 'Alice', age: 25 }