const person = {
    // key: value 
    // property: value 
    firstName: 'arjun',
    lastName: 'n'
}

console.log(person.firstName)
console.log(person['lastName'])

// Objects Methods
console.log(Object.keys(person)) // [ 'firstName', 'lastName' ]
console.log(Object.values(person)) // [ 'arjun', 'n' ]

// property is present in object 

// if calling a prop returns undefined, then prop is not present in obj
console.log(person.city) // undefined 

console.log(Object.keys(person).includes('city')) // false
console.log(Object.keys(person).indexOf('firstName') >= 0) // true 
console.log(person.hasOwnProperty('lastName')) // true 

// determine total k:v pairs in object
console.log(Object.keys(person).length)

console.log(person)

// determine if object is object
console.log(Array.isArray(person)) // false

// array - push, unshift, splice

// add a new key: value pair in object 
person.city = 'bangalore'
console.log(person)

// update a new key: value pair in object 
person.lastName = 'nagarajan'

// delete a key: value pair 
delete person.city 

console.log(person)

console.log(person)

// array 
// const numbers = [10,20,30] 
// console.log(numbers.length)