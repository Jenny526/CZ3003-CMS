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

function activelyGetDataAndPostToServer(trValue, tdValue){
    var getUrl = "https://query.yahooapis.com/v1/public/yql?q=Select * from html where url='http://www.nea.gov.sg/anti-pollution-radiation-protection/air-pollution-control/psi/psi-readings-over-the-last-24-hours' and xpath='//*[@id=\"main\"]/div[1]/div/div[2]/table/tbody'&format=json&diagnostics=true&callback=";
    var postData = {};
    var PSI = {};
    var haze = {};

    $.get(getUrl, function(data){
         console.log(data);
        var hour = getHour()-1;
        var table = data.query.results.tbody;
        var north, south, east, west, central;
        if(trValue == 7){
            north = 1;
            south = 2;
            east = 3;
            west = 4;
            central =5;
        }else{
            north = 8;
            south = 9;
            east = 10;
            west = 11;
            central =12;
        }
        
        var northPSI = table.tr[north].td[tdValue-1].strong.content;
        northPSI = northPSI.trim();
         
        var southPSI = table.tr[south].td[tdValue-1].strong.content;
        southPSI = southPSI.trim();
          
        var eastPSI = table.tr[east].td[tdValue-1].strong.content;
        eastPSI = eastPSI.trim();
          
        var westPSI = table.tr[west].td[tdValue-1].strong.content;
        westPSI = westPSI.trim();
          
        var centralPSI = table.tr[central].td[tdValue-1].strong.content;
        centralPSI = centralPSI.trim();
          
        var PSIValue = table.tr[trValue-1].td[tdValue-1].strong.content;
        PSIValue = PSIValue.trim();
          
        var descriptor = getAirQualityDescriptor(PSIValue);

        PSI.hour = hour;
        PSI.PSIValue = PSIValue;
        PSI.descriptor = descriptor;

        var hazeList = [];
        if(northPSI>50){
          var northHaze = hazeData(northPSI, "north");
          hazeList.push(northHaze);
        }
          
        if(southPSI>50){
          var southHaze = hazeData(southPSI, "south");
          hazeList.push(southHaze);
        }
          
        if(eastPSI>50){
          var eastHaze = hazeData(eastPSI, "east");
          hazeList.push(eastHaze);
        }
        if(westPSI>50){
          var westHaze = hazeData(westPSI, "west");
          hazeList.push(westHaze);
        }
        if(centralPSI>50){
          var centralHaze = hazeData(centralPSI, "central");
          hazeList.push(centralHaze);
        }
        
        postData.PSI = PSI;
        postData.haze = hazeList;

        console.log(postData);
        console.log(hazeList);
        $.post("http://10.27.163.216:5000/PSI", postData)
            .success(function(data, status, headers, config){
                console.log("data posted successfully!!!");
            })
            .error(function(data, status, headers, config){
                console.log("submit error");
            });
    });

}

function hazeData(PSI, location){
    var haze = {};
    if(PSI > 50){
        var descriptor = getAirQualityDescriptor(PSI);
        haze.coords = getCoords(location);
        haze.data = PSI;
        haze.type = "Haze";
        haze.description = "Air condition: haze in " + location + " of Singapore";
        haze.priority = 5;
        haze.location = location + " of Singapore";
        haze.status = "pending";
        haze.showWindow = "false";
        haze.draggable = "false";
        if(descriptor == "Moderate"){
            haze.priority = 4;
        }else if(descriptor == "Unhealthy"){
            haze.priority = 3;
        }else if(descriptor == "Very unhealthy"){
            haze.priority = 2;
        }else if(descriptor == "Hazardous"){
            haze.priority = 1;
        }
        return haze;
    }else{
        return {};
    }
}

function getCoords(location){
    var coords = {};

    if(location == "north"){
        coords.lat = "1.352083";
        coords.lng = "103.819836";
    }else if(location == "south"){
        coords.lat = "1.294166";
        coords.lng = "103.786127";
    }else if(location == "east"){
        coords.lat = "1.345010";
        coords.lng = "103.983209";
    }else if(location == "west"){
        coords.lat = "1.340390";
        coords.lng = "103.708988";

    }else{
        coords.lat = "1.341833";
        coords.lng = "103.860876";
    }

    return coords;
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