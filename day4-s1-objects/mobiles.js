const mobiles = [ '9480937132' , '7978400978', '9620841474', '8147540166', '7310781718', '9008847608' ]

const mobileNumbers1 = {
    // key : value 
    'kumaresh': '9480937132',
    'biswajit': '7978400978', 
    'sunil': '9620841474',
    'vinod': "8147540166"
}

const city = {
    // key: value
    name: 'bangalore',
    minTemp: 23.5, 
    placesToVisit: ['mg road', 'brigade road']
}


const restaurant = {
    name: '1947', 
    location: ['jayanagar', 'vijaynagar'], 
    type: 'casual dining', 
    rating: 4.1,
    cuisines: ['North Indian', 'Chinese'], 
    features: { 
        'Home Delivery': true, 
        'Veg Only': true ,
        'Alcohol': false
    }, 
    reviews: [
        { 
            name: 'Suraj',
            createdAt: '25-01-2019', 
            body: 'fab place', 
            rating: 5
        },
        {
            name: 'Sumanth',
            createdAt: '21-01-2019',
            body: 'ok place',
            rating: 4
        }
    ]
}

console.log(restaurant.name)
console.log(restaurant['location'])
console.log(restaurant.reviews.length)
console.log('Listing Reviews')
// for( let i = 0; i < restaurant.reviews.length; i++ ) {
//     console.log(restaurant.reviews[i].name, restaurant.reviews[i].body)
// }

restaurant.reviews.forEach(function(review){
    console.log(review.name, review.body)
})


const restaurantArray = [
   ['name', '1947'], 
    ['location', ['jayanagar', 'vijaynagar']],
    'casual dining',
    4.1,
    ['North Indian', 'Chinese'],
    {
        'Home Delivery': true,
        'Veg Only': true,
        'Alcohol': false
    }, 
    ['reviews', [
        {
            name: 'Suraj',
            createdAt: '25-01-2019',
            body: 'fab place',
            rating: 5
        },
        {
            name: 'Sumanth',
            createdAt: '21-01-2019',
            body: 'ok place',
            rating: 4
        }
    ]]
]

console.log(restaurantArray[0])
console.log(restaurantArray[1])
console.log(restaurantArray[6].length)

restaurantArray[6].forEach(function(review){
    console.log(review.name, review.body)
})