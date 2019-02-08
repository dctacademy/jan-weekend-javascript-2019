const axios = require('axios')
const url = 'https://jsonplaceholder.typicodecom/users'
// promise obj *****
axios.get(url)
    .then(function (response) {
        const users = response.data
        users.forEach(function (user) {
            console.log(`${user.id}. ${user.name}`)
        })
    }) // success
    .catch(function(err){
        console.log(err.message)
    }) // failure
