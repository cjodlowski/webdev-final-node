const express = require('express');
const app = express();
const mongoose = require('mongoose');
 mongoose.connect('mongodb+srv://cs4550:cs4550@cluster0.twrt7.mongodb.net/final');

// const fetch = require("node-fetch");

// this is to help us parse the body
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// this is to intercept all the server and said no worries about security
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Credentials");
  res.header("Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

//app.get("/api/items", function(req, res) {res.send("hello!!!")});
//app.get("/api/items", function(req, res) {res.send("wooowoaoaowaoh")});

require("./users/user-service")(app);
require("./items/items-service")(app);

//testing connecting to Etsy ig
// app.get('/ping', async (req, res) => {
//   const requestOptions = {
//       'method': 'GET',
//       'headers': {
//           'x-api-key': 'pgugurgccp4q0ekmxcjh7b1c',
//       },
//   };

//   const response = await fetch(
//       'https://openapi.etsy.com/v3/application/openapi-ping',
//       requestOptions
//   );

//   if (response.ok) {
//       const data = await response.json();
//       res.send(data);
//   } else {
//       res.send("oops");
//   }
// });

app.listen(4000);