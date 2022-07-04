const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
app.use(express.static(__dirname+'/frontend'));
app.use(bodyParser.json());
const  {Client} = require('pg');
const PORT= 3300
const credentials =  {
    "label": "",
    "host": "kenny.postgres.database.azure.com",
    "user": "kenny",
    "port": 5432,
    "ssl": true,
    "database": "postgres",
    "password": "password123."
  }
   console.log({credentials});
   const client = new Client (credentials);
  //  client.connect();

   app.get('/', (req, res) => {
    res.send('connecting to the database')
  });

  app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });

   app.get('/getData', (req, res) => {
    res.json({
      "StatusCode": 200, 
      "StatusMessage": "SUCCESS"
    })
   })
  
app.listen(PORT, () => console.log(`server is running ON port ${PORT}`));

app.get('/companies', (res, req)=> {
  client.query(`select * from company`, (err, res) => {
    console.log(err, res)
    client.end()
})
client.connect();
});

