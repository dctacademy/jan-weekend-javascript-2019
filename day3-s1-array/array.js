const player1 = 'dhoni'
const player2 = 'sachin'
const player3 = 'virat'

const players = []
console.log(players)
console.log(typeof players) // 'object'
console.log(Array.isArray(players)) // true

const fruits = new Array()
console.log(fruits)

const person = {
    firstName: 'arjun',
    city: 'bangalore'
}
console.log(typeof person) // 'object'
console.log(Array.isArray(person)) // false 

// array is ordered, integer indexed, collection of values

const places = ['jayanagar', 'btm', 'kormangala']
console.log(places)
console.log(places)

// value / element means same
console.log(places[0]) // 'jayanagar' 
console.log(places[1]) // 'btm'
console.log(places[2]) // 'kormangala'
console.log(places[3]) // undefined

// properties 
console.log(places.length) // 3

// last element in an array will be length - 1
console.log(places[places.length - 1]) // 'kormangala'

places[1] = 'btm layout'
console.log(places)

// methods  - mutable methods
// adding elements to the end of the array
console.log(places.push('bsk'))
console.log(places)

// add elements to the beginning of the array
places.unshift('gandhi bazaar')
console.log(places)

// add elements to specific index
places.splice(2, 0, 'JP Nagar')
console.log(places)

// remove elements from the end 
places.pop()
console.log(places)

// remove elements from the beginning of array
places.shift()
console.log(places)

// remove element from a specific index 
places.splice(1, 2)
console.log(places)


const mixedArray = ['bangalore', 23.7, [ 'jayanagar', 'btm'], { state: 'karnataka' } ]

console.log(mixedArray[0])
console.log(mixedArray[2][0])
console.log(mixedArray[3].state)


// methods - immutable methods 
console.log(places.join(', '))
console.log(places)

const numbers = [10,11,12,13,14,15,16,17,18,19]

console.log(numbers.slice(0,3)) // [10, 11, 12]
console.log(numbers.slice(5)) // [15,16,17,18,19]

// to check value is present 

console.log(numbers.indexOf(15)) // 5
console.log(numbers.indexOf(25)) // -1
console.log(numbers.indexOf()) // -1

// boolean method to check availablility of a value
console.log(numbers.includes(10)) // true 
console.log(numbers.includes(25)) // false 

console.log([10,20] + [30,40]) // '10, 2030, 40'
// adding arrays in js - contact returns a new array
console.log([10, 20].concat([30, 40])) // [ 10, 20, 30, 40 ]

// console.log([10].concat([20]).concat([30]))

// array of functions
const greetings = [ function(){ return 'hello' }, function(){ console.log('hello there')}, function greet(){ console.log('hey')} ]

console.log(greetings[0]())