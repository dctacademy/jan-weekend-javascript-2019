let n1 = 10
let n2 = 20

function add(n1,n2) { // parameters - are local to the function
    // shadow variables
    n1 = 100 
    n2 = 200 
    return n1 + n2
}

console.log(add(n1,n2))  // 300 // arguments
console.log(n1, n2) // 10 20
