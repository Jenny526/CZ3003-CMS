var express = require("express");
var bodyParser = require("body-parser");
var request = require('request');

var subscribe = require('./handlers/subscribe.js');
var callOperator = require('./handlers/callOperator.js');
var dengue = require('./handlers/dengue.js');
var getEvent = require('./handlers/getEvent.js');
var PSI = require('./handlers/PSI.js');
var publicView = require('./handlers/publicView.js');
var report = require('./handlers/report.js');
var subscribe = require('./handlers/subscribe.js');
var weather = require('./handlers/weather.js');

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

app.post('/subscribe', subscribe.subscribeHandler);
app.get("/publicView", publicView.publicViewHandler);
app.get("/getEvent/:id", getEvent.getEventHandler);
app.get("/report", report.reportHandlder);
app.post("/callOperator", callOperator.callOperatorHandler);
app.post("/PSI", PSI.postPSIHandler);
app.get("/PSI", PSI.getPSIHandler);
app.post("/weather", weather.postWeatherHandler);
app.get("/weather", weather.getWeatherHandler);
app.post("/dengue", dengue.dengueHandler);