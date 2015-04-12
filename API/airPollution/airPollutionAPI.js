var timeStamp = 60*60*1000;

var run = setInterval(function(){
    console.log("Hi, I am running every one hour....");
    var hour = getHour();
    var minutes = getMinute();
    var tr;
    var td;

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
    
    if(minutes < 12){
        td = hour-1;
    }else{
        td = hour;
    }
    activelyGetDataAndPostToServer(tr, td);
},timeStamp);

function activelyGetDataAndPostToServer(tr, td){
    var getUrl = "https://query.yahooapis.com/v1/public/yql?q=Select * from html where url='http://www.nea.gov.sg/anti-pollution-radiation-protection/air-pollution-control/psi/psi-readings-over-the-last-24-hours' and xpath='//*[@id=\"main\"]/div[1]/div/div[2]/table/tbody/tr[" + tr + "]/td[" + td + "]/strong'&format=json&diagnostics=true&callback=";
    var postData = {};
    var PSI = {};
    var haze = {};

    $.get(getUrl, function(data){
        var hour = getHour()-1;
        var PSIValue = data.query.results.strong.content;
        PSIValue = PSIValue.trim();
        var descriptor = getAirQualityDescriptor(PSIValue);

        PSI.hour = hour;
        PSI.PSIValue = PSIValue;
        PSI.descriptor = descriptor;

        var hasHaze;

        if(descriptor != "Good"){
            hasHaze = false;
        }else{
            hasHaze = true;
        }
        haze.hasHaze = hasHaze;

        postData.PSI = PSI;
        postData.haze = haze;

        console.log(postData);
        $.post("server url for PSI", null, postData)
            .success(function(data, status, headers, config){
                console.log("data posted successfully!!!");
            })
            .error(function(data, status, headers, config){
                console.log("submit error");
            });
    });

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