const products = [
    {name: "Shirt", price: 20},
    {name: "Shoes", price: 50},
    {name: "Hat", price: 15}
]

const totalPrice = products.reduce((prevPrice, currentPrice) => {
    return prevPrice + currentPrice.price;
}, 0)

console.log(totalPrice)