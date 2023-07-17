const express = require('express');
const cors = require('cors');
const CSVToJSON = require('csvtojson');
require('dotenv').config(); 
const app = express();
const port = 3003 || process.env.PORT;

app.use(cors());

//get the csv file  - Convert CSV to JSON 
app.get('/api/csv', (req, res) => {
  const filePath = __dirname + '/population.csv';

CSVToJSON()
  .fromFile('population.csv')
  .then(users => {
   
   res.status(200).json(users);
  })
  .catch(err => {
    // log error if any
    console.log(err)
    res.status(500).json(err);
  })
});

app.listen(port, () => {
  
  console.log(`Server running on ${process.env.URL}`);
});