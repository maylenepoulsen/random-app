const path = require('path');
const express = require('express');
const quotes = require('./utils/quotes');

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

app.listen(port);