// var express = require("express");
// var bodyParser = require("body-parser");
// var mysql = require("mysql");
// var request = require('request');

// var connection = mysql.createConnection({
//   host : '127.0.0.1',
//   port: '3306',
//   user : 'yikolyk',
//   password : '0323',
//   database: 'cms2'
// });

// var app = express();
// var port = process.env.PORT || 5000;

// app.listen(port, function() {
//    console.log("Listening on " + port);
//  });

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// app.get("/publicView", function(req, res) {
	
// 	//connection.connect();
//     var query = "SELECT * FROM event";

//     connection.query(query, function(err, rows, fields){
//         if(err){
//           throw err;
//         }
//         res.send(rows);
        
//     });
//    // connection.end();

// });

// app.get("/getEvent/:id", function(req, res){
//     var id = req.params.id;
// 	var query = query = "SELECT * FROM event WHERE event_id='" + id + "'";
//     //connection.connect();
//     connection.query(query, function(err, rows, fields){
//         if(err){
//           throw err;
//         }
//         res.send(rows);
//     });
//     //connection.end();
// });

// app.get("/report", function(){
//     var query = "SELECT * FROM event";

//     var reportTable = "<html><title>All Recent Events</title><body><table><tr><th>Event Type</th><th>Description</th><th>Location></th><th>Latitude</th><th>Longitude</th><th>Priority</th>";
//     connection.query(query, function(err, rows, fields){
//         if(err){
//           throw err;
//         }
//         rows.forEach(function(rowData){
//             var description = rowData.description;
//             var priority = rowData.priority;
//             var location = rowData.location;
//             var type = rowData.type;
//             var lat = rowData.latitude;
//             var lng = rowData.longitude;

//             var htmlRow = "<tr><td>" + type + "</td><td>" + description + "</td><td>" + location + "</td><td>" + lat + "</td><td>" + lng + "</td><td>" + priority + "</td></tr>"; 
//             reportTable += htmlRow;
//         });

//         reportTable += "</body></html>"

//         res.send(htmlRow);
//     });
// });

// app.post("/callOperator", function(req, res){
//     var reporterName = req.body.reporterName;
//     var priority = req.body.priority;
//     var lat = req.body.lat;
//     var lng = req.body.lng;
//     var location = req.body.location;
//     var callerPhone = req.body.callerPhone;
//     var description = req.body.description;
//     var NRIC = req.body.NRIC;
//     var type = req.body.type;
//     var status = req.body.status;
//     var callOperatorId = req.body.callOperatorId;
// 	var id = 'NULL';
//     var showWindow = false;
//     var draggable = false;
//     // insert into event
// 	//connection.connect();
//     var query = "INSERT INTO event VALUES('" + id + "','" + description + "','" + priority + "','" + location + "','" +
//                 status + "','" + NRIC + "','"  + type + "','" + lat + "','" + lng + "','" + showWindow + "','" + draggable + "')";
//     connection.query(query, function(err, rows, fields){
//         if(err){
//           throw err;
//         }
        
//     });

//     query = "INSERT INTO reporter VALUES('" + id + "','" + callerPhone + "','" + reporterName + "','" + NRIC +  "')";
//     connection.query(query, function(err, rows, fields){
//         if(err){
//           throw err;
//         }   
//     }); 

//     var eventDescription = 'Attention: ' + type + ' found in ' + location + ' (exact coordinates: [' + lat + ',' + lng + ']';
//     if(description != null){
//         eventDescription += ('details: ' + description);
//     }

//     // sms
//     query = "SELECT * FROM agency";

//     connection.query(query, function(err, rows, fields){
//         if(err){
//           throw err;
//         }

//         for(var rowValue in rows){
//             var data = {
//               'body' :eventDescription,
//               'to' : '+65'+rowValue.phone
//             };

//             postToSMSServer(data);
//         }

        
//     });

//     var data = {
// 		'body' : eventDescription
// 	};

//     postToFacebookServer(data);
//     postToTwitterServer(data);
// 	//connection.end();
//     res.send("OK");
// });
 
// app.post("/subscribe", function(req, res) {
//     console.log(req.body);
//     var name = req.body.name;
//     var mobile = req.body.mobile;
//     var location = req.body.location;
//     var email = req.body.email;
//     var id = 'NULL';

//     var query = "INSERT INTO subscriber VALUES('" + id + "','" + name + "','" + mobile + "','" + location + "','" + email + "')";

//     //connection.connect();

//     connection.query(query, function(err, rows, fields){
//         if(err){
//           throw err;
//         }
//         //console.log('The solution is: ', rows[0].solution);
//     });
    
//     //connection.end();
//     res.send("OK");
// });

// app.post("/PSI", function(req, res){
//     var PSI = req.body.PSI;
//     var haze = req.body.haze;
//     var hour = PSI.hour;
//     var value = PSI.value;
//     var descriptor = PSI.value;
//     var hasHaze = haze.hasHaze;
//     var id = 'NULL';

//     var queryForPSI = "INSERT INTO table psi VALUES('" + id + "','" + hour + "','" + value + "','" + descriptor + "')";
//     var queryForHaze = "INSERT INTO table haze VALUES('" + id + "','" + hour + "','" + hasHaze + "')";

//     //connection.connect();

//     connection.query(queryForPSI, function(err, rows, fields){
//         if(err){
//             throw err;
//         }
//     });

//     if(hasHaze){
//       connection.query(queryForHaze, function(err, rows, fields){
//         if(err){
//           throw err;
//         }
//       });
//     }

//     //connection.end();
//     res.send("OK");
// });

// app.post("/weather", function(req, res){
//     var text = req.body.text;
//     var celsius = req.body.celsius;
//     var id = 'NULL';
    
//     var query = "INSERT INTO table weather VALUES('" + id + "','" + text + "','" + celsius + "')";
   
//     //connection.connect();

//     connection.query(query, function(err, rows, fields){
//         if(err){
//             throw err;
//         }
//         //console.log('The solution is: ', rows[0].solution);
//     });
//     //connection.end();
//     res.send("OK");
// });

// app.post("/dengue", function(req, res){
//     var dengueList = req.body;
//     dengueList.forEach(function(dengueItem){
//         var callerNumber = dengueItem.callerNumber;
//         var description = dengueItem.description;
//         var priority = dengueItem.priority;
//         var location = dengueItem.location;
//         var postalCode = dengueItem.postalCode;
//         var reporter = dengueItem.reporter;
//         var eventType = dengueItem.eventType;
//         var eventName = eventType.eventName;
//         var coords = dengueItem.coords;
//         var lat = coords.lat;
//         var lng = coords.lng;
//         var showWindow = dengueItem.showWindow;
//         var options = dengueItem.options;
//         var draggable = options.draggable;
//         var id = 'NULL';
//         //connection.connect();
//         var query = "INSERT INTO event VALUES('" + id + "','" + description + "','" + priority + "','" + location + "','" +
//                 status + "','" + NRIC + "','"  + type + "','" + lat + "','" + lng + "','" + showWindow + "','" + draggable + "')";
//         connection.query(query, function(err, rows, fields){
//             if(err){
//                 throw err;
//             }
        
//         });
//     });
//    // connection.end();
//     res.send("OK");
// });

// function postToSMSServer(data){
//   var url = "http://172.27.121.20:5003/post";
//   post(data, url);
// }

// function postToFacebookServer(data){
//   var url = "http://172.27.121.20:5001/post";
//   post(data, url);
// }

// function postToTwitterServer(data){
//   var url = "http://172.27.121.20:5002/post";
//   post(data, url); 
// }

// function post(data, url){
//   data = JSON.stringify(data);
//   console.log(data);
//   request({
//     uri : url,
//     method : "POST",
//     form : data
//   }, function(error, response, body){
//     if(error){
//       console.log("failed posting data ....");
//     }
//     console.log(body);
//   }); 
// }