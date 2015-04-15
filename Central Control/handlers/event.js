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

exports.updateEventHandler = function(req, res){
	var event_id = req.params.id;
	var event_Type = req.body.event_Type;
	var priority = req.body.priority;
	var location = req.body.location;
	var longitude = req.body.longitude;
	var latitude = req.body.latitude;
	var status = req.body.status;
	var reporter_id = req.body.reporter_id;
	var description = req.body.description;
	var query = "UPDATE event SET ='event_Type=" + event_Type + "', priority='" + priority + "', location='" + location + "', longitude='" + 
				longitude + "', latitude='" + latitude + "', status='" + status + "', reporter_id='" + reporter_id + "', description='" + 
				description + "' WHERE event_id='" + event_id + "'";

	connection.query(query, function(err, rows, fields){
	    if(err){
	       	throw err;
	    }
	    res.send("OK");
	});
}