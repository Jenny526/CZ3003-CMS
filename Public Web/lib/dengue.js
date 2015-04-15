$(function(){
	var data = getDengeEvent();
	console.log("finished");
	console.log(data);
});

function getDengeEvent(){
	var getUrl = "https://query.yahooapis.com/v1/public/yql?q=Select * from html where url='http://www.dengue.gov.sg/subject.asp?id=74' and xpath='//*[@id=\"wrapper\"]/table/tbody/tr/td/table/tbody/tr/td[2]/div/table[2]/tbody'&format=json&diagnostics=true&callback=";
	var addressData = ["Geylang Road", "Yishun Avenue 2", "Bishan Street 23", "Jalan Kemuning", 
						"Jalan Mata Aye", "Kaki Bukit Place", "Chuan Hoe Avenue", "Eunos Avenue", 
						"Flora Road", "Admiralty Drive", "Champions Way", "Hougang Avenue 3",
						"Jurong West Central 1", "Keppel Bay View", "Marine Terrace", "Rivervale Crescent"];

    $.get(getUrl, function(data){
        
        var dengueData = [];
        var dengueEvent = [];
        var id = 1;
        var results = data.query.results.tbody;

        for(var rowIndex=1; rowIndex<=16; rowIndex++){
        	var data = {};
        	data.value = results.tr[rowIndex].td[3].p.span.content;
        	data.address = addressData[rowIndex-1];
        	dengueData.push(data);
        }
      	  
        for(var index=0; index<dengueData.length; index++){
        	var data = {};
        	var value = dengueData[index].value;
        	var address = dengueData[index].address;

        	data.id = id;
        	data.callerNumber = null;
        	data.description = "Dengue data";
        	if(value >= 10){
        		data.priority = "High";
        	}else if(value > 0){
        		data.priority = "low";
        	}
        	data.callingTime = new Date();
        	data.location = address;
        	data.postalCode = null;
        	data.reporter = null;
        	data.eventType = {
        		"eventName" : "dengue"
        	};
        	data.coords = locationToLanAndLon(address);
        	data.showWindow = false;
        	data.options = {
        		"draggable" : false
        	};
        	data.iconUrl = "image/dengue.png";

        	dengueEvent.push(data);
        }

        return dengueEvent;
    });
}

var timeStamp = 24*60*60*1000;

var run = setInterval(function(){
	console.log("Hi, I am running one time a day....");
	activelyGetDataAndPostToServer();
},timeStamp);

function activelyGetDataAndPostToServer(){
	var getUrl = "https://query.yahooapis.com/v1/public/yql?q=Select * from html where url='http://www.dengue.gov.sg/subject.asp?id=74' and xpath='//*[@id=\"wrapper\"]/table/tbody/tr/td/table/tbody/tr/td[2]/div/table[2]/tbody'&format=json&diagnostics=true&callback=";
	var addressData = ["Geylang Road", "Yishun Avenue 2", "Bishan Street 23", "Jalan Kemuning", 
						"Jalan Mata Aye", "Kaki Bukit Place", "Chuan Hoe Avenue", "Eunos Avenue", 
						"Flora Road", "Admiralty Drive", "Champions Way", "Hougang Avenue 3",
						"Jurong West Central 1", "Keppel Bay View", "Marine Terrace", "Rivervale Crescent"];

    $.get(getUrl, function(data){
        
        var dengueData = [];
        var dengueEvent = [];
        var id = 1;
        var results = data.query.results.tbody;

        for(var rowIndex=1; rowIndex<=16; rowIndex++){
        	var data = {};
        	data.value = results.tr[rowIndex].td[3].p.span.content;
        	data.address = addressData[rowIndex-1];
        	dengueData.push(data);
        }
      	  
        for(var index=0; index<dengueData.length; index++){
        	var data = {};
        	var value = dengueData[index].value;
        	var address = dengueData[index].address;

        	data.id = id;
        	data.callerNumber = null;
        	data.description = "Dengue data";
        	if(value >= 10){
        		data.priority = "High";
        	}else if(value > 0){
        		data.priority = "low";
        	}
        	data.callingTime = new Date();
        	data.location = address;
        	data.postalCode = null;
        	data.reporter = null;
        	data.eventType = {
        		"eventName" : "dengue"
        	};
        	data.coords = locationToLanAndLon(address);
        	data.showWindow = false;
        	data.options = {
        		"draggable" : false
        	};
        	data.iconUrl = "image/dengue.png";

        	dengueEvent.push(data);
        }

        $.post('server url', null, dengueEvent)
		.success(function(data, status, headers, config){
			console.log("data posted successfully!!!");
		})
		.error(function(data, status, headers, config){
			console.log("submit error");
		});
    });
}

var lookUpTable = {
	"Geylang Road" : {
		lat : "1.313431",
		lng : "103.883767"
	},
	"Yishun Avenue 2" : {
		lat : "1.426451",
		lng : "103.835138"
	},
	"Bishan Street 23" : {
		lat : "1.356524",
		lng : "103.847808"
	},
	"Jalan Kemuning" : {
		lat : "1.441390",
		lng : "103.826777"
	},
	"Jalan Mata Aye" : {
		lat : "1.426017",
		lng : "103.824104"
	},
	"Kaki Bukit Place" : {
		lat : "1.333917",
		lng : "103.903436"
	},
	"Chuan Hoe Avenue" : {
		lat : "1.364583",
		lng : "103.876445"
	},
	"Eunos Avenue" : {
		lat : "1.332684",
		lng : "103.901620"
	},
	"Flora Road" : {
		lat : "1.360427",
		lng : "103.967087"
	},
	"Admiralty Drive" : {
		lat : "1.450512",
		lng : "103.816879"
	},
	"Champions Way" : {
		lat : "1.429598",
		lng : "103.789689"
	},
	"Hougang Avenue 3" : {
		lat : "1.353149",
		lng : "103.891099"
	},
	"Jurong West Central 1" :  {
		lat : "1.342956",
		lng : "103.705740"
	},
	"Keppel Bay View" : {
		lat : "1.267989",
		lng : "103.813695"
	},
	"Marine Terrace" : {
		lat : "1.304367",
		lng : "103.916013"
	},
	"Rivervale Crescent" : {
		lat : "1.391164",
		lng : "103.907946"
	}

};

function locationToLanAndLon(address){
	var location = lookUpTable[address];
	if(location == null){
		return getLanAndLonFromGoogleMapAPI(address);
	}else{
		var data ={};
		data.lat = location.lat;
		data.lng = location.lng;
		return data;
	}
}

function getLanAndLonFromGoogleMapAPI(address){
	address = address + " Singapore";
	var addressArray = address.split(" ");
	var formattedAddress = "";
	for(var index=0; index<addressArray.length; index++){
		formattedAddress += addressArray[index];
	}
	var url="https://maps.googleapis.com/maps/api/geocode/json?address="+formattedAddress;
	$.get(getUrl, function(data){
		var location = data.results[0].geometry.location;
		var lat = location.lat;
		var lon = location.lng;
		var data = "" + lat + " " + lon;
		return data;
	});
}