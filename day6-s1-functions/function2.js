let n1 = 10
let n2 = 20

function add() {
    n1 = 100 // here the variables declared in the GS will be changed
    n2 = 200 // here the variables declared in the GS will be changed
    return n1 + n2
}

console.log(add()) // 300
console.log(n1,n2)
