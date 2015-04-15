module.exports = function(app, connection){
	app.post("/weather", function(req, res){
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
	});
}