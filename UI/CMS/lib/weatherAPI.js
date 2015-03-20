function getWeatherInformationFromYahoo(){
	var getUrl = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='sg, sg')&format=json&env=store://datatables.org/Falltableswithkeys";
	
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", getUrl, false);
	xmlHttp.send(null);

	return xmlHttp.responseText;
}

function getWeatherCondition(){
	var data = getWeatherInformationFromYahoo();
	var condition = data.query.results.channel.item.condition;

	return condition;
}

function getWeatherText(){
	var condition = this.getWeatherCondition();

	return condition.text;
}

function getWeatherCelsiusTemperature(){
	var condition = this.getWeatherCondition();
	var celsius = (5.0/9)*(condition.temp-32);
	celsius = Math.round(celsius*10)/10;

	return celsius;
}

function getWeatherFahrenheitTemperature(){
	var condition = this.getWeatherCondition();

	return condition.temp;
}

function getWeatherConditionCode(){
	var condition = this.getWeatherCondition();

	return condition.code;
}

function getWeatherConditionImageString(){
	var code = this.getWeatherConditionCode();
	var imgStr = "";

	switch(code){
		case 0:
			imgStr = "wi wi-tornado";
			break;
		case 1:
			imgStr = "wi wi-storm-showers";
			break;
		case 2:
			imgStr = "wi wi-hurricane";
			break;
		case 3:
		case 4:
			imgStr = "wi wi-thunderstorm";
			break;
		case 5:
			imgStr = "wi wi-snow";
			break;
		case 6:
		case 7:
			imgStr = "wi wi-day-sleet-storm";
			break;
		case 8:
		case 9:
			imgStr = "wi wi-showers";
			break;
		case 10:
			imgStr = "wi wi-rain-mix";
			break;
		case 11:
		case 12:
			imgStr = "wi wi-showers";
			break;
		case 13:
		case 14:
			imgStr = "wi snow";
			break;
		case 15:
			imgStr = "wi wi-day-snow-thunderstorm";
			break;
		case 16:
			imgStr = "wi snow";
			break;
		case 17:
			imgStr = "wi wi-day-hail";
			break;
		case 18:
			imgStr = "wi wi-sleet";
			break;
		case 19:
			imgStr = "wi wi-dust";
			break;
		case 20:
			imgStr = "wi wi-day-fog";
			break;
		case 21:
			imgStr = "wi wi-day-haze";
			break;
		case 22:
			imgStr = "wi wi-smoke";
			break;
		case 23:
			imgStr = "wi wi-strong-wind";
			break;
		case 24:
			imgStr = "wi wi-windy";
			break;
		case 25:
			imgStr = "wi wi-snowflake-cold";
			break;
		case 26:
			imgStr = "wi wi-day-cloudy";
			break;
		case 27:
			imgStr = "wi wi-night-alt-cloudy";
			break;
		case 28:
			imgStr = "wi ";
			break;
		case 29:
			imgStr = "wi night-partly-cloudy";
			break;
		case 30:
			imgStr = "wi ";
			break;
		case 31:
			imgStr = "wi ";
			break;
		case 32:
			imgStr = "wi ";
			break;
		case 33:
			imgStr = "wi ";
			break;
		case 34:
			imgStr = "wi ";
			break;
		case 35:
			imgStr = "wi ";
			break;
		case 36:
			imgStr = "wi ";
			break;
		case 37:
			imgStr = "wi ";
			break;
		case 38:
			imgStr = "wi ";
			break;
		case 39:
			imgStr = "wi ";
			break;
		case 40:
			imgStr = "wi ";
			break;
		case 41:
			imgStr = "wi ";
			break;
		case 42:
			imgStr = "wi ";
			break;
		case 43:
			imgStr = "wi ";
			break;
		case 44:
			imgStr = "wi ";
			break;
		case 45:
			imgStr = "wi ";
			break;
		case 46:
			imgStr = "wi ";
			break;
		case 47:
			imgStr = "wi ";
			break;
		default:
			imgStr = "wi ";
			break;
	}
}