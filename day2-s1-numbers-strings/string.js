const password = 'secret123'
const userName = 'arjun'
const lastName = 'nagaraj'
// const email = new String()

console.log(password.length)
console.log(userName.toUpperCase()) // 'ARJUN'
console.log(userName) // 'arjun'

console.log(lastName.toLowerCase()) // 'nagaraj'
console.log(lastName.indexOf('a')) // 1
console.log(lastName.lastIndexOf('a')) // 5
console.log(lastName.indexOf('z')) // -1

console.log(userName.indexOf('rj')) // 1
console.log(userName.includes('rj')) // true 
console.log(userName.includes('z')) // false

console.log(userName.charAt(0)) // 'a' 
console.log(userName.charAt(2)) // 'j'

// strings are array of characters
console.log(userName[0])
console.log(userName[1])
console.log(userName[2])

for(let i = 0; i < userName.length; i++) {
    console.log(userName[i])
}

console.log("*" * 5) // NaN
console.log("*".repeat(5))


// const numbers = []
// const fruits = new Array()

const source = 'bangalore'
const destination = 'mysore'
const kms = 150
const time = '3 hours 30 mins'

console.log('The distance between ' + source + ' and ' + destination + ' is ' + (kms + 12) + ' kms and the time taken is' + time)

// es6 - template strings / template literals 
// syntatical sugar 

console.log(`The distance between ${source} and ${destination} is ${kms + 12} kms and the time taken is ${time}`)
