var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var connection = mysql.createConnection({
  host : 'http://10.27.163.216:3306/cms',
  user : 'yikolyk',
  password : '0323'
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

app.get("/publicView", function(req, res) {
    res.send("ok");
});
 
app.post("/subscribe", function(req, res) { 
    var name = req.body.name;
    var mobile = req.body.mobile;
    var location = req.body.location;
    var email = req.body.email;
    var query = 'INSERT INTO table subscriber VALUES(' + name + ',' + mobile + ',' + location + ',' + email + ')';

    console.log(name + " " + mobile + " " + location + " " + email);
    connection.connect();

    connection.query(query, function(err, rows, fields){
        if(err){
          throw err;
        }
        console.log('The solution is: ', rows[0].solution);
    });
    
    connection.end();
    res.send("OK");
});

app.post("/PSI", function(req, res){
    var PSI = req.body.PSI;
    var haze = req.body.haze;
    var hour = PSI.hour;
    var value = PSI.value;
    var descriptor = PSI.value;
    var hasHaze = haze.hasHaze;
    var queryForPSI = 'INSERT INTO table psi VALUES(' + hour + ',' + value + ',' + descriptor + ')';
    var queryForHaze = 'INSERT INTO table haze VALUES(' + hour + ',' + hasHaze + ')';

    connection.connect();

    connection.query(queryForPSI, function(err, rows, fields){
        if(err){

        }
    });
});