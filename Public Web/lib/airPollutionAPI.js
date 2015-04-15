$(function(){
    var hour = getHour();
    var minutes = getMinute();
    var tr;

    if(hour > 1 && hour <= 13){
        tr = 7;
    }else{
        if(hour == 1){
            tr = 14;
            hour = 13;
        }else{
            tr = 14;
            hour = hour - 12;
        }
    }
    
    if(minutes < 20){
        td = hour-1;
    }else{
        td = hour;
    }

    console.log(hour);
    console.log(td);
    var getUrl = "https://query.yahooapis.com/v1/public/yql?q=Select * from html where url='http://www.nea.gov.sg/anti-pollution-radiation-protection/air-pollution-control/psi/psi-readings-over-the-last-24-hours' and xpath='//*[@id=\"main\"]/div[1]/div/div[2]/table/tbody/tr[" + tr + "]/td[" + td + "]/strong'&format=json&diagnostics=true&callback=";

    $.get(getUrl, function(data){
        console.log(getUrl);
        var results = data.query.results.strong.content;
        var PSI = results;
        PSI = PSI.trim();
        var descriptor = getAirQualityDescriptor(PSI);

        var data = PSI + " " + descriptor;
        $("#PSI").html(data);
    });
});


var now1 = new Date();
var millisTill12 = new Date(now1.getFullYear(), now1.getMonth(), now1.getDate(), 12, 30, 0, 0) - now1;
if (millisTill12 < 0) {
     millisTill12 += 86400000; // it's after 12:30, try 12:30 tomorrow.
}

var run = setTimeOut(function(){
    console.log("Hi, I am running at 00: 30 am");
    activelyGetDataAndPostToServer(7);
}, millisTill12);

var now2 = new Date();
var millisTill24 = new Date(now2.getFullYear(), now2.getMonth(), now2.getDate(), 24, 30, 0, 0) - now2;
if (millisTill24 < 0) {
     millisTill24 += 86400000; // it's after 00:30, try 00:30 tomorrow.
}

var run = setTimeOut(function(){
    console.log("Hi, I am running at 00: 30 am");
    activelyGetDataAndPostToServer(14);
}, millisTill24);


function activelyGetDataAndPostToServer(tr){
    var getUrl = "https://query.yahooapis.com/v1/public/yql?q=Select * from html where url='http://www.nea.gov.sg/anti-pollution-radiation-protection/air-pollution-control/psi/psi-readings-over-the-last-24-hours' and xpath='//*[@id=\"main\"]/div[1]/div/div[2]/table/tbody/tr[" + tr + "]'&format=json&diagnostics=true&callback=";
    var PSIData = [];
    var haze = [];

    $.get(getUrl, function(data){
        console.log(getUrl);
        var results = data.query.results.tr;

        for(var index=1; index<=12; index++){
            if(index == tr){
                var PSI = results.td[index].strong.content;
            }else{
                var PSI = results.td[index].content;
            }
            
            PSI = PSI.trim();
            PSIData.push(PSI);
            var descriptor = getAirQualityDescriptor(PSI);
            if(descriptor != "Good"){
                haze.push(index);
            }
        }

        if(haze.length == 0){
            haze = "no haze info";
        }

        $.post("server url for PSI", null, PSIData)
            .success(function(data, status, headers, config){
                console.log("data posted successfully!!!");
            })
            .error(function(data, status, headers, config){
                console.log("submit error");
            });
        $.post("server url for PSI", null, haze)
            .success(function(data, status, headers, config){
                console.log("data posted successfully!!!");
            })
            .error(function(data, status, headers, config){
                console.log("submit error");
            });
    });

    for(var index=0; index<PSIData.length; index++){
        console.log(PSIData[index]);
    }

}

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

function getHour(){
    var today = new Date();
    var hour = today.getHours();
    var minutes = today.getMinutes();

    hour += 1;

    return hour;
}

function getMinute(){
    var today = new Date();
    var hour = today.getHours();
    var minutes = today.getMinutes();

    return minutes;
}