const request = require('postman-request');

const quotes = ((callback) => {
  const url = 'https://quotes15.p.rapidapi.com/quotes/random/?language_code=en'
  const options = {
      url,
      headers: {
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
        "x-rapidapi-key": "0494c6a4a6msh00b593672c0a7a8p1c4a4bjsnaaec6f38f830",
        "Content-Type": "application/json" 
      },
      json: true
  }
  
  request(options, (error, { body }) => {
    if (error) {
      callback('Unable to connect to api', undefined)    
    } else {
      callback(undefined, {
        quote: body.content,
        name: body.originator.name    
      })
    }
  })

})

module.exports = quotes;
