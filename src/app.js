const path = require('path');
const express = require('express');
const quotes = require('./utils/quotes');
const getDate = require('./utils/date');
const dateFact = require('./utils/dateFact');

const app = express();
const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath));

app.get('/quotes', (req, res) => {
    quotes((error, result) => {
      if (error) {
        return res.send( { error })    
      }
       
      res.send(result)
    })
})

app.get('/date', (req, res) => {
  let date = {
    date: getDate()
  }

  res.send(date)
})

app.get('/datefact', (req, res) => {
  dateFact((error, result) => {
    if (error) {
      return res.send( { error })
    }

    let dateFact = Object.assign({}, result)
    res.send(dateFact);
  })
})

app.listen(port);