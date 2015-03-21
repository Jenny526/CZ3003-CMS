$(function(){
	var getUrl = "https://query.yahooapis.com/v1/public/yql?q=Select * from html where url='http://www.nea.gov.sg/anti-pollution-radiation-protection/air-pollution-control/psi/psi-readings-over-the-last-24-hours' and xpath='//*[@id=\"main\"]/div[1]/div/div[2]/table/tbody/tr[7]/td[13]'&format=json&diagnostics=true&callback=";

	$.get(getUrl, function(data){
		var results = data.query.results.td.content;
		var PSI = results;
		PSI = PSI.trim();
		var descriptor = getAirQualityDescriptor(PSI);

		$("#PSI").html("PSI: " + PSI);
		$("#airPollutionText").html("Air Condition: " + descriptor);
	});
});

function getAirQualityDescriptor(PSIValue){
	var descriptor = "";
	var minPSI = PSIValue.substring(0,2);
	var maxPSI = PSIValue.substring(3,5);

	
	if(minPSI <= 50 && maxPSI <= 50){
		descriptor = "Good";
	}else if(minPSI <= 100 && maxPSI <= 100){
		descriptor = "Moderate";
	}else if(minPSI <= 200 && maxPSI <= 200){
		descriptor = "Unhealthy";
	}else if(minPSI <= 300 && maxPSI <= 300){
		descriptor = "Very unhealthy";
	}else if(minPSI > 300 && maxPSI > 300){
		descriptor = "Hazardous";
	}else{
		descriptor = "Moderate";
	}

	return descriptor;
}

function getLastHour(){
	var today = new Date();
	var hour = today.getHours();

	return hour-1;
}