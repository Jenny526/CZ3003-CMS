var mysql = require("mysql");
var request = require('request');
var connection = mysql.createConnection({
  host : '127.0.0.1',
  port: '3306',
  user : 'yikolyk',
  password : '0323',
  database: 'cms2'
});

exports.callOperatorHandler =  function(req, res){
	var reporterName = req.body.reporterName;
	var priority = req.body.priority;
	var lat = req.body.lat;
	var lng = req.body.lng;
	var location = req.body.location;
	var callerPhone = req.body.callerPhone;
	var description = req.body.description;
	var NRIC = req.body.NRIC;
	var type = req.body.type;
	var status = req.body.status;
	var callOperatorId = req.body.callOperatorId;
	var id = 'NULL';
	var showWindow = false;
	var draggable = false;
	   	
	var query = "INSERT INTO event VALUES('" + id + "','" + description + "','" + priority + "','" + location + "','" +
	           status + "','" + NRIC + "','"  + type + "','" + lat + "','" + lng + "','" + showWindow + "','" + draggable + "')";
	connection.query(query, function(err, rows, fields){
	    if(err){
	       	throw err;
	    }
	        
	});

	query = "INSERT INTO reporter VALUES('" + id + "','" + callerPhone + "','" + reporterName + "','" + NRIC +  "')";
	connection.query(query, function(err, rows, fields){
	    if(err){
	        throw err;
	    }   
	}); 

	var eventDescription = 'Attention: ' + type + ' found in ' + location + ' (exact coordinates: [' + lat + ',' + lng + ']';
	if(description != null){
	    eventDescription += ('details: ' + description);
	}

	// sms
	query = "SELECT * FROM agency";

	connection.query(query, function(err, rows, fields){
	    if(err){
	        throw err;
	    }

	    for(var rowValue in rows){
	        var data = {
	           	'body' :eventDescription,
	            'to' : '+65'+rowValue.phone
	        };

	        postToSMSServer(data);
	    }    
	});

	var data = {
		'body' : eventDescription
	};

	postToFacebookServer(data);
	postToTwitterServer(data);
	res.send("OK");
};

function postToSMSServer(data){
  var url = "http://172.27.121.20:5003/post";
  post(data, url);
}

function postToFacebookServer(data){
  var url = "http://172.27.121.20:5001/post";
  post(data, url);
}

function postToTwitterServer(data){
  var url = "http://172.27.121.20:5002/post";
  post(data, url); 
}

function post(data, url){
  data = JSON.stringify(data);
  console.log(data);
  request({
    uri : url,
    method : "POST",
    form : data
  }, function(error, response, body){
    if(error){
      console.log("failed posting data ....");
    }
    console.log(body);
  }); 
}