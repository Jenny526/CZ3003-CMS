module.exports = function(app, connection){
	app.post("/PSI", function(req, res){
	    var PSI = req.body.PSI;
	    var haze = req.body.haze;
	    var hour = PSI.hour;
	    var value = PSI.value;
	    var descriptor = PSI.value;
	    var hasHaze = haze.hasHaze;
	    var id = 'NULL';

	    var queryForPSI = "INSERT INTO table psi VALUES('" + id + "','" + hour + "','" + value + "','" + descriptor + "')";
	    var queryForHaze = "INSERT INTO table haze VALUES('" + id + "','" + hour + "','" + hasHaze + "')";

	    connection.query(queryForPSI, function(err, rows, fields){
	        if(err){
	            throw err;
	        }
	    });

	    if(hasHaze){
	      connection.query(queryForHaze, function(err, rows, fields){
	        if(err){
	          throw err;
	        }
	      });
	    }

	    res.send("OK");
	});
}