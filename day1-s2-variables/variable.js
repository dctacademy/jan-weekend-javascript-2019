var name 
console.log(name) // undefined
var city = 'bangalore'
console.log(city) // 'bangalore'

var minTemp = 12.3
var maxTemp = 28

var placesToVisit = [ 'MG Road', 'Brigade Road']
var placesNotToVisit = ['Silk Board']
var isCapital = true 
var companies = {
    flipkart: 'e-commerce', 
    swiggy: 'food delivery'
}

var details = function() {  // anonymous function
    console.log('im a function')
}

console.log(details)
details()

function add(n1,n2) {
    return n1 + n2
}

add(10,20)