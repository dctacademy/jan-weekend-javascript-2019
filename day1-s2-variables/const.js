// ES6 
const city = 'bangalore'

// cannot reassign
// TypeError: Assignment to constant variable.
// city = 'mysore'

// // cannot redeclare
// TypeError: Assignment to constant variable.
// const city = 'pune'

const numbers = [10,20,30]
// numbers = ['one', 'two', 'three']
Object.freeze(numbers)
numbers.push(40)
console.log(numbers)

