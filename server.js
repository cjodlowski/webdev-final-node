const express = require('express');
const app = express();
// const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://cs4550:cs4550@cluster0.twrt7.mongodb.net/tests');


// this is to help us parse the body
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// this is to intercept all the server and said no worries about security
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

require("./users/user-service")(app);


app.listen(process.env.PORT || 4000);