const bodyParser = require("body-parser");
const express = require("express");
const { default: mongoose } = require("mongoose");
mongoose =  require("mongoose");
path = require("path");
cors = require("cors");
bodyParser = require("body-parser");
dbConfig = require('./db/database');

mongoose.Promise = global.Promise;
mongoose.connect().then(()=>{

     app.listen(5000);
     console.log("Connected to Database");

}).catch((err) => console.log(err));