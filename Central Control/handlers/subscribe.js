var mysql = require("mysql");
var connection = mysql.createConnection({
  host : '127.0.0.1',
  port: '3306',
  user : 'yikolyk',
  password : '0323',
  database: 'cms2'
});

exports.subscribeHandler = function(req, res) {
	console.log(req.body);
	var name = req.body.name;
	var mobile = req.body.mobile;
	var location = req.body.location;
	var email = req.body.email;
	var id = 'NULL';

	var query = "INSERT INTO subscriber VALUES('" + id + "','" + name + "','" + mobile + "','" + location + "','" + email + "')";

	connection.query(query, function(err, rows, fields){
	    if(err){
	      throw err;
	    }
	});
	    
	res.send("OK");
};