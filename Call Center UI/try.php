<?php 
	angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.names = [ 
		{ 
		 "Serial" : " 1 ",  
		 "Type" : "Fire ",
		 "Location" : "Jurong Point",
		 "Status": " Unsolved"
		 },
		 { 
		 "Serial" : " 2 ",  
		 "Type" : "Air Pollution ",
		 "Location" : "Jurong Point",
		 "Status": " Unsolved"
		 },
		 { 
		 "Serial" : " 3 ",  
		 "Type" : "Traffic Accident ",
		 "Location" : "Jurong East",
		 "Status": " Solved"
		 },
		 { 
		 "Serial" : " 4 ",  
		 "Type" : "Dengue ",
		 "Location" : "Woodlands",
		 "Status": " Solved"
		 }
	];
});
/*var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
    $http.get("http://localhost/try.php")
    .success(function (response) {$scope.names = response;});
});*/
?>