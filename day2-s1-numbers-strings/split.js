const fruits = 'apple, water melon, mango'
console.log(fruits.split(', ')) // [ 'apple', 'water melon', 'mango' ]

const email = '1@gmail.com, 2@gmail.com, 3@gmail.com'
console.log(email.split(', ')) // [ '1@gmail.com', '2@gmail.com', '3@gmail.com' ]

const travel = 'bangalore -> mandya -> mysore'
console.log(travel.split(' -> ')) // [ 'bangalore', 'mandya', 'mysore' ]

console.log(travel.split(', ')) // [ 'bangalore -> mandya -> mysore' ]

const city = 'bangalore'
console.log(city.split('')) // [ 'b', 'a', 'n', 'g', 'a', 'l', 'o', 'r', 'e' ]