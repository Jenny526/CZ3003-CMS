$(function(){
	var getUrl = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='sg, sg')&format=json&env=store://datatables.org/Falltableswithkeys";
            
	$.get(getUrl, function(data){
    	var text = getWeatherText(data);
    	var celsius = getWeatherCelsiusTemperature(data);
    	var fahrenheit = getWeatherFahrenheitTemperature(data);
    	var description = getWeatherConditionImageString(data);
                  
    	$("#weatherText").html(text);
    	$("#celsius").html(celsius);
    	$("#fahrenheit").html(fahrenheit);
    	$("#weatherDescription").addClass(description);
	});
});

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

function getWeatherConditionImageString(data){
	var code = this.getWeatherConditionCode(data);
	var imgStr = "";

	switch(code){
		case "0":
			imgStr = "wi wi-tornado";
			break;
		case "1":
			imgStr = "wi wi-storm-showers";
			break;
		case "2":
			imgStr = "wi wi-hurricane";
			break;
		case "3":
		case "4":
			imgStr = "wi wi-thunderstorm";
			break;
		case "5":
			imgStr = "wi wi-snow";
			break;
		case "6":
		case "7":
			imgStr = "wi wi-day-sleet-storm";
			break;
		case "8":
		case "9":
			imgStr = "wi wi-showers";
			break;
		case "10":
			imgStr = "wi wi-rain-mix";
			break;
		case "11":
		case "12":
			imgStr = "wi wi-showers";
			break;
		case "13":
		case "14":
			imgStr = "wi snow";
			break;
		case "15":
			imgStr = "wi wi-day-snow-thunderstorm";
			break;
		case "16":
			imgStr = "wi snow";
			break;
		case "17":
			imgStr = "wi wi-day-hail";
			break;
		case "18":
			imgStr = "wi wi-sleet";
			break;
		case "19":
			imgStr = "wi wi-dust";
			break;
		case "20":
			imgStr = "wi wi-day-fog";
			break;
		case "21":
			imgStr = "wi wi-day-haze";
			break;
		case "22":
			imgStr = "wi wi-smoke";
			break;
		case "23":
			imgStr = "wi wi-strong-wind";
			break;
		case "24":
			imgStr = "wi wi-windy";
			break;
		case "25":
			imgStr = "wi wi-snowflake-cold";
			break;
		case "26":
			imgStr = "wi wi-day-cloudy";
			break;
		case "27":
			imgStr = "wi wi-night-alt-cloudy";
			break;
		case "28":
			imgStr = "wi wi-cloudy";
			break;
		case "29":
			imgStr = "wi night-partly-cloudy";
			break;
		case "30":
			imgStr = "wi wi-day-cloudy";
			break;
		case "31":
			imgStr = "wi wi-night-clear";
			break;
		case "32":
			imgStr = "wi wi-day-sunny";
			break;
		case "33":
			imgStr = "wi wi-night-clear";
			break;
		case "34":
			imgStr = "wi wi-day-sunny";
			break;
		case "35":
			imgStr = "wi wi-hail";
			break;
		case "36":
			imgStr = "wi wi-hot";
			break;
		case "37":
        case "38":
        case "39":
			imgStr = "wi wi-thunderstorm";
			break;
		case "40":
			imgStr = "wi wi-showers";
			break;
		case "41":
        case "42":
        case "43":
			imgStr = "wi wi-snow";
			break;
		case "44":
			imgStr = "wi night-partly-cloudy";
			break;
		case "45":
			imgStr = "wi wi-day-storm-showers";
			break;
		case "46":
			imgStr = "wi wi-night-showers";
			break;
		case "47":
			imgStr = "wi wi-storm-showers";
			break;
		default:
			imgStr = "wi wi-day-sunny";
			break;
	}

	return imgStr;
}