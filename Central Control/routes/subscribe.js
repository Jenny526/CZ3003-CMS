module.exports = function(app, connection){
	app.post("/subscribe", function(req, res) {
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
	});
}