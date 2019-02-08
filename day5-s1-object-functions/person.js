const p1 = {
    firstName: 'arjun',
    age: 21, 
    city: 'bangalore',
    skills: ['js', 'rb', 'py'], 
    // when a prop inside an obj, holds a function, its known as a method
    details: function() {
        return `${this.firstName} - ${this.age} - ${this.city}`
        // return this.first + ' - ' + this.age + ' - ' + this.city 
    }
}


// console.log(person.firstName)
console.log(p1.details())

const numbers = [10,20,30]

// properties
console.log(numbers.length) 

// methods
numbers.push(40)

