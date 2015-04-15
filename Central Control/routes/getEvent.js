module.exports = function(app, connection){
	app.get("/getEvent/:id", function(req, res){
	    var id = req.params.id;
		var query = query = "SELECT * FROM event WHERE event_id='" + id + "'";
	    
	    connection.query(query, function(err, rows, fields){
	        if(err){
	          throw err;
	        }
	        res.send(rows);
	    });
	    
	});
}