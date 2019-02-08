const axios = require('axios')

const key = 'youkey goes here'
// to read input while executing the files 
const name = process.argv[2]
const url = `https://gender-api.com/get?name=${name}&key=${key}`

axios.get(url)
    .then(function(response){
        const data = response.data 
        console.log(`The gender of ${name} is ${data.gender}`)
    })
    .catch(function(err){
        console.log(err.message)
    })