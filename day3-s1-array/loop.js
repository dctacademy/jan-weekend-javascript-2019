const fruits = ['apple', 'mango', 'water melon']

// 1st way 
for( let i = 0; i < fruits.length; i++ ) {
    console.log(i, fruits[i].toUpperCase())
}

// reverse an array 
for( let i = fruits.length - 1; i >= 0; i-- ) {
    console.log(fruits[i])
}

// print numbers 1 - 10 
for (let i = 1; i <= 10 ; i++) {
    console.log(i)
}

// 2nd way 
console.log('--------  forEach ----------')
fruits.forEach(function (fruit, index){
    console.log(index, fruit.toUpperCase())
})

// 3rd way 
console.log('--------- for of (ES6) ----------')
for(const fruit of fruits) {
    console.log(fruit)
}

const products = [
    { id: 1, name: 'marker', price: 10}, 
    { id: 2, name: 'scale', price: 5 }
]

for(let i = 0; i < products.length; i++ ) {
    console.log(products[i].name, products[i].price)
}

products.forEach(function(product){
    console.log(product.name, product.price)
})