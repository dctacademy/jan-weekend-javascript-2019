const username = 'aniruddha'

console.log(username.slice(0,3)) // 'ani'
console.log(username.slice(3,6)) // 'rud'
console.log(username.slice(1)) // 'niruddha' 

console.log(username[0].toUpperCase() + username.slice(1).toLowerCase())

console.log(username.substr(0,3)) // 'ani'
console.log(username.substr(3,2)) // 'ru'

const numbers = '1234567890'
// (123) 456-7890

const first = username.slice(0,3)
const second = username.slice(3,6)
const third = username.slice(6)

console.log('(' + first + ') ' + second + '-' + third)
console.log(`(${first}) ${second}-${third}`)

// 1st using slice with concatenation
//      using slice with es6 template strings

// 2nd using substr with es6 template strings 
