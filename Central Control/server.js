var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var request = require('request');

var connection = mysql.createConnection({
  host : '127.0.0.1',
  port: '3306',
  user : 'yikolyk',
  password : '0323',
  database: 'cms2'
});

var app = express();
var port = process.env.PORT || 5000;

app.listen(port, function() {
   console.log("Listening on " + port);
 });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

require('./routes')(app, connection);