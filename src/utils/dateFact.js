const request = require('postman-request');
const dateFormat = require('dateformat');

const dateFact = ((callback) => {
  let now = new Date;  
  let date =  dateFormat(now, 'm') + '/' + dateFormat(now, 'd');
 
  const url = `http://numbersapi.com/${date}/date`

  const options = {
      url,
      headers: {
          "Content-type": "application/json"
      },
      json: true
  }

  request(options, (error, { body }) => {
    console.log(error)
    console.log(body.text)
    if (error) {
        callback('Unable to connect to the Numbers api', undefined)
     } else if (body.text === undefined) {
         callback('Unable to connect to the Numbers api', undefined)
    } else {
        callback(undefined, {
          fact: body.text  
        })
    }   
  })
})

module.exports = dateFact;