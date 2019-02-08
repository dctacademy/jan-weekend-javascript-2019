// node place.js bangalore 
// bangalore (lat,lng) - current temperature - 25c

const axios = require('axios')

const key = 'your api key'
const place = process.argv[2]
const geoURL = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${place}&inputtype=textquery&fields=geometry&key=${key}`
const weatherURL = `https://api.darksky.net/forecast/158002330a7540e2f653f53af824fd93/`

axios.get(geoURL)
    .then(function(response){
        const data = response.data 
        const latitude = data.candidates[0].geometry.location.lat  
        const longitude = data.candidates[0].geometry.location.lng  
        console.log(place, latitude, longitude)
        axios.get(`${weatherURL}${latitude},${longitude}`)
            .then(function(response){
                const data = response.data 
                console.log('f',data.currently.temperature)
            })
            .catch(function(err){
                console.log(err)
            })
    })
    .catch(function(err){
        console.log(err.message)
    })