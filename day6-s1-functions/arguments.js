// functions that accept variable number of argumenets
// ex - push(10) push(10,20,30), Math.min(10,20)
function add() {
    // arguments obj will hold the values in key:value pair of the arguments passed 
    // console.log(arguments)
    let total = 0 
    for( const key in arguments) {
        total += arguments[key]
    }
    return total
}

console.log(add(10,20,30))
console.log(add(10, 20))
