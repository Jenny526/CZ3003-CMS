module.exports = function(app, connection){

    app.get("/publicView", function(req, res) {
	    var query = "SELECT * FROM event";

	    connection.query(query, function(err, rows, fields){
	        if(err){
	          throw err;
	        }
	        res.send(rows);
	        
	    });
	});
}