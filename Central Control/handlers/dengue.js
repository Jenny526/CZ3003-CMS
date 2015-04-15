var mysql = require("mysql");
var connection = mysql.createConnection({
  host : '127.0.0.1',
  port: '3306',
  user : 'yikolyk',
  password : '0323',
  database: 'cms2'
});

exports.dengueHandler = function(req, res){
	var dengueList = req.body;
	dengueList.forEach(function(dengueItem){
	    var callerNumber = dengueItem.callerNumber;
	    var description = dengueItem.description;
	    var priority = dengueItem.priority;
	    var location = dengueItem.location;
	    var postalCode = dengueItem.postalCode;
	    var reporter = dengueItem.reporter;
	    var eventType = dengueItem.eventType;
	    var eventName = eventType.eventName;
	    var coords = dengueItem.coords;
	   	var lat = coords.lat;
	    var lng = coords.lng;
	    var showWindow = dengueItem.showWindow;
	    var options = dengueItem.options;
	    var draggable = options.draggable;
	    var id = 'NULL';
	        
	    var query = "INSERT INTO event VALUES('" + id + "','" + description + "','" + priority + "','" + location + "','" +
	            status + "','" + NRIC + "','"  + type + "','" + lat + "','" + lng + "','" + showWindow + "','" + draggable + "')";
	    connection.query(query, function(err, rows, fields){
	        if(err){
	            throw err;
	        }
	    });
	   	
	    res.send("OK");
	});
};