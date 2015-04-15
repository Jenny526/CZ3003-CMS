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
	var hasHaze = haze.hasHaze;
	var id = 'NULL';

	var queryForPSI = "INSERT INTO table psi VALUES('" + id + "','" + hour + "','" + value + "','" + descriptor + "')";
	var queryForHaze = "INSERT INTO table haze VALUES('" + id + "','" + hour + "','" + hasHaze + "')";

	connection.query(queryForPSI, function(err, rows, fields){
	    if(err){
	        throw err;
	    }
	});

	if(hasHaze){
	   	connection.query(queryForHaze, function(err, rows, fields){
	     	if(err){
	          throw err;
	        }
	    });
	}

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