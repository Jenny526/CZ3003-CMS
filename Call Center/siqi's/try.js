angular.module('CallCenter', []).controller('eventsCtrl', function($scope) {
    $scope.events = [ 
		{ 
		 "Serial" : " 1 ",  
		 "Type" : "Fire ",
		 "Location" : "Jurong Point",
		 "Status": " Unsolved",
		 "Option":" Update"
		 },
		 { 
		 "Serial" : " 2 ",  
		 "Type" : "Air Pollution ",
		 "Location" : "Jurong Point",
		 "Status": " Unsolved",
		 "Option":" Update"
		 },
		 { 
		 "Serial" : " 3 ",  
		 "Type" : "Traffic Accident ",
		 "Location" : "Jurong East",
		 "Status": " Solved",
		 "Option":" Delete"
		 },
		 { 
		 "Serial" : " 4 ",  
		 "Type" : "Dengue ",
		 "Location" : "Woodlands",
		 "Status": " Solved",
		 "Option":" Delete"
		 }
	];
	
	$scope.getTotalEvents = function(){
        return $scope.events.length;
    };
});

/*var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
    $http.get("http://localhost/try.php")
    .success(function (response) {$scope.names = response;});
});*/