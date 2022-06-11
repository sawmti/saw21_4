const express = require('express');
const path = require('path');
const https = require('https');
const querystring = require("querystring")

const app = express();
const root = path.resolve(__dirname, '..');

// Log invocations
app.use(function (req, res, next) { console.log(req.url); next(); });

// Directly serve static content from /client
app.use(express.static(root + '/client'));

// Simple REST API that returns some entities
app.get('/api/entities', (req, res) =>{
    const queryParams = new URLSearchParams(
  [['query', `SELECT DISTINCT ?deporte ?deporteLabel ?deporteDescription ?deporteImage ?activo
      WHERE
      {
      ?deporte wdt:P31 wd:Q31629.
      ?deporte wdt:P18 ?deporteImage
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
      }
      ORDER BY ASC (?deporteLabel)`],
  ['format', 'json']
  ]).toString();




  //app.post('/api/entities/', (req, res) => {
    //const queryParams = new URLSearchParams(
      //[['query', `INSERT INTO datadeportes VALUES (deporte ?deporteLabel ?deporteDescription ?deporteImage)
        //  WHERE
          //{
 // ?deporte wdt:P31 wd:Q31629.
   //       ?deporte wdt:P18 ?deporteImage
     //     SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
       //   }
         // ORDER BY ASC (?deporteLabel)`],
      //['format', 'json']
      //]).toString();

  const options = {
    hostname: 'query.wikidata.org',
    port: 443,
    path: `/sparql?${queryParams}`,
    method: 'GET',
    headers: { 'User-Agent': 'Example/1.0' }
  }
  https.get(options, httpres => {
    let data = [];
    console.log('Status Code:', httpres.statusCode);
    httpres.on('data', chunk => {
      data.push(chunk);
    });
    httpres.on('end', () => {
      console.log('Response ended:');
      const result = Buffer.concat(data).toString();
      console.log(`Result obtained:\n${result}\n---`);
      const json = JSON.parse(result);
      const bindings = json.results.bindings;
      //const label = bindings.length > 0 ? bindings[0].label.value : 'Not found';
      res.send(json)
    });
  }).on('error', err => {
    console.log('Error: ', err.message);
  })
});

module.exports = app;