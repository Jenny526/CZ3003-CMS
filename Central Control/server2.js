var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  port     : '3306',
  user     : 'yikolyk',
  password : '0323',
  database : 'cms'
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
 
app.get("/getEvent/:id", function(req, res){
    var id = req.param('id');
    var query = "SELECT * FROM event WHERE event_id='" + id + "'";
    
    connection.query(query, function(err, rows, fields){
        if(err){
          throw err;
        }

        res.send(rows);
    });
    connection.end();
});
 
 
app.post("/subscribe", function(req, res) { 
    var name = req.body.name;
    var mobile = req.body.mobile;
    var location = req.body.location;
    var email = req.body.email;
	var id = 'NULL';
    //var query = "INSERT INTO subscriber VALUES(" + 'name' + ',' + 'mobile' + ',' + 'location' + ',' + 'email' + ")";
	//var query = "INSERT INTO `subscriber` (`subscriber_name`, `subscriber_phone_number`, `subscriber_location`, `subscriber_email`) VALUES ('LIU', NULL, NULL, NULL)";
    var query = "INSERT INTO subscriber (id,subscriber_name, subscriber_phone_number, subscriber_location, subscriber_email) VALUES('"+ id + "','"+name+"','"+ mobile+"','"+location+"','"+email+"')";
	//console.log(query);
	console.log(name + " " + mobile + " " + location + " " + email);
    connection.connect();

    connection.query(query, function(err, rows, fields){
        if(err){
          throw err;
        }
       // console.log('The solution is: ', rows[0].solution);
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