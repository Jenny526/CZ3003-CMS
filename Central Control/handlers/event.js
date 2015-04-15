var mysql = require("mysql");
var connection = mysql.createConnection({
  host : '127.0.0.1',
  port: '3306',
  user : 'yikolyk',
  password : '0323',
  database: 'cms2'
});

exports.getEventHandler = function(req, res){
	var id = req.params.id;
	var query = query = "SELECT * FROM event WHERE event_id='" + id + "'";
	    
	connection.query(query, function(err, rows, fields){
	    if(err){
	       	throw err;
	    }
	    res.send(rows);
	});
}