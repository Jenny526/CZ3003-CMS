var mysql = require("mysql");
var connection = mysql.createConnection({
  host : '127.0.0.1',
  port: '3306',
  user : 'yikolyk',
  password : '0323',
  database: 'cms2'
});

exports.postWeatherHandler = function(req, res){
	var text = req.body.text;
	var celsius = req.body.celsius;
	var id = 'NULL';
	    
	var query = "INSERT INTO table weather VALUES('" + id + "','" + text + "','" + celsius + "')";
	 
	connection.query(query, function(err, rows, fields){
	    if(err){
	        throw err;
	    }
	});
	  	
	res.send("OK");
};

exports.getWeatherHandler = function(req, res){
	var query = "SELECT * FROM psi ORDER BY id DESC LIMIT 1";

	connection.query(query, function(err, rows, fields){
		if(err){
			throw err;
		}
		res.send(rows[0]);
	});
}