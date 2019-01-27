// function scope 
// var is function scope
function number() {
    var n1 = 10
    var n2 = 20
    if (n1 > n2) {
        var msg = 'n1 is greater'
    } else {
        var msg = 'n2 is greater'
    }
    console.log(msg)
}  
number()

// block scope
// let & const block scope
function greater() {
    let a1 = 10
    let a2 = 20
    if (a1 > a2) {
        const result = 'a1 is greater'
    } else {
        const result = 'a2 is greater'
    }
    // console.log(result)
}
greater()


// block scope
// let & const block scope
function greater1() {
    let a1 = 10
    let a2 = 20
    let result
    if (a1 > a2) {
         result = 'a1 is greater'
    } else {
         result = 'a2 is greater'
    }
    console.log(result)
}
greater1()