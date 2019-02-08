const cartLineItem = {
    id: 1,
    name: 'idly',
    price: 20,
    quantity: 0,
    details: function(){ 
        return `${this.name} - ${this.quantity} - ${this.price} - ${this.quantity * this.price}`
    }, 
    increaseQty: function(){
        this.quantity = this.quantity + 1
        this
    },
    decreaseQty: function(){
        this.quantity -= 1
    },
    reset: function(){ 
        this.quantity = 0 
    }
}

console.log(cartLineItem.details())
cartLineItem.increaseQty() 
console.log(cartLineItem.details())
cartLineItem.increaseQty() 

cartLineItem.decreaseQty() 
console.log(cartLineItem.details()) 

cartLineItem.resetQty() // quantity 0 