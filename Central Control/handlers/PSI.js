var mysql = require("mysql");
var connection = mysql.createConnection({
  host : '127.0.0.1',
  port: '3306',
  user : 'yikolyk',
  password : '0323',
  database: 'cms2'
});

exports.postPSIHandler = function(req, res){
	var PSI = req.body.PSI;
	var haze = req.body.haze;
	var hour = PSI.hour;
	var value = PSI.value;
	var descriptor = PSI.value;
	
	var id = 'NULL';

	var queryForPSI = "INSERT INTO psi VALUES('" + id + "','" + hour + "','" + value + "','" + descriptor + "')";

	connection.query(queryForPSI, function(err, rows, fields){
	    if(err){
	        throw err;
	    }
	});

	haze.forEach(function(hazeData){
		var id = 'NULL';
		var description = hazeData.description;
		var priority = haze.priority;
		var location = haze.location;
		var status = haze.status;
		var NRIC = 'NULL';
		var type = haze.type;
		var lat = haze.coords.lat;
		var lng = haze.coords.lng;
		var showWindow = haze.showWindow;
		var draggable = haze.draggable;
		var query = "INSERT INTO event VALUES('" + id + "','" + description + "','" + priority + "','" + location + "','" +
	           status + "','" + NRIC + "','"  + type + "','" + lat + "','" + lng + "','" + showWindow + "','" + draggable + "')";
	   	connection.query(query, function(err, rows, fields){
	     	if(err){
	          throw err;
	        }
	    });
	});

	res.send("OK");
}

exports.getPSIHandler = function(req, res){
	var query = "SELECT * FROM psi ORDER BY id DESC LIMIT 1";

	connection.query(query, function(err, rows, fields){
		if(err){
			throw err;
		}
		res.send(rows[0]);
	});
}