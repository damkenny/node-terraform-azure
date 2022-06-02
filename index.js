const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const  {Client} = require('pg');

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
   client.connect();

client.query('select * from company', (err, res) => {
    console.log(err, res)
    client.end()
  });