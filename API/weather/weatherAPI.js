var timeStamp = 60*60*1000;

var run = setInterval(function(){
	console.log("Hi, I am running every one hour....");
	activelyGetDataAndPostToServer();
},timeStamp);

function activelyGetDataAndPostToServer(){
	var getUrl = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='sg, sg')&format=json&env=store://datatables.org/Falltableswithkeys";
            
	$.get(getUrl, function(data){
    	var text = getWeatherText(data);
    	var celsius = getWeatherCelsiusTemperature(data);
    	           
        var data = {};
        data.text = text;
        data.celsius  = celsius;
        
        console.log(data);
    	$.post('http://10.27.163.216:5000/weather', data)
		.success(function(data, status, headers, config){
			console.log("data posted successfully!!!");
		})
		.error(function(data, status, headers, config){
			console.log("submit error");
		});
	});
}

function getWeatherCondition(data){
	var condition = data.query.results.channel.item.condition;

	return condition;
}

function getWeatherText(data){
	var condition = getWeatherCondition(data);

	return condition.text;
}

function getWeatherCelsiusTemperature(data){
	var condition = this.getWeatherCondition(data);
	var celsius = (5.0/9)*(condition.temp-32);
	celsius = Math.round(celsius*10)/10;

	return celsius;
}

function getWeatherFahrenheitTemperature(data){
	var condition = this.getWeatherCondition(data);

	return condition.temp;
}

function getWeatherConditionCode(data){
	var condition = this.getWeatherCondition(data);

	return condition.code;
}