const express = require('express');
const request = require('request');
require('dotenv').config();

const app = express();

request.get(`http://api.eia.gov/series/?api_key=${process.env.EIA_API_KEY}&series_id=TOTAL.RETCBUS.A`, (err, res, body) => {
  if(err) {
    return console.log(err);
  }
  // console.log('body: ' + body);
  var jsonObj = JSON.parse(body);

  for (let stat of jsonObj['series'][0].data) {
    console.log(stat);
  }
  // console.log(jsonObj['series'][0].data[10]);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is up on port: ${PORT}`);
});
