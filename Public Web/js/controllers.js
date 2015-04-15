'use strict';

/* Controllers */

var cmsControllers = angular.module('cmsControllers', []);

cmsControllers.controller('timeCtrl', ['$scope','$log',
        function ($scope,$log) {
            $scope.time=Date.now()
        }
]
);
cmsControllers.controller('weatherCtrl',['$scope','Weather','$log','$interval',
    function ($scope, Weather,$log,$interval) {
        $scope.weather = Weather.get({}, function(result){
        });
        var refresh = $interval(function(){
            $scope.weather = Weather.get({}, function (result) {
                //console.log("get weather");
                //console.log($scope.weather);
                //console.log($scope.weather.celsius)
            });
        }, 60*60*1000)
    }
]);
cmsControllers.controller('PSICtrl',['$scope','PSI','$interval',
    function ($scope, PSI,$interval) {
        $scope.PSI = PSI.get({}, function (result) {
            //var minPSI = PSI.value.substring(0,2);
            var maxPSI = $scope.PSI.value.substring(3,5);
            $scope.icon = "image/haze.png";
            $scope.isHaze = false;

            if(maxPSI > 50){
                $scope.isHaze = true;
            }
        });

        var refresh = $interval(function(){
            $scope.PSI = PSI.get({}, function (result) {
                //console.log("get PSI");
                //console.log($scope.PSI);
                //var minPSI = PSI.value.substring(0,2);
                var maxPSI = $scope.PSI.value.substring(3,5);
                $scope.icon = "image/haze.png";
                $scope.isHaze = false;

                if(maxPSI > 50){
                    $scope.isHaze = true;
                }

                //console.log("is haze?");
                //console.log($scope.isHaze)
            });
        }, 60*60*1000)

    }
]);

//RESTful client
cmsControllers.controller('CrisisListCtrl', ['$scope','Crisis','Weather','PSI',
    function ($scope, Crisis, Weather, PSI) {

        $scope.crises = Crisis.query();

        $scope.orderProp = '-id';
    }]);

//
//cmsControllers.controller('CrisisDetailCtrl',['$scope','$routeParams', 'Crisis',
//    function($scope, $routeParams, Crisis){
//        $scope.crisis = Crisis.get({crisisId: $routeParams.crisisId}, function(crisis){
//            $scope.mainImageUrl = crisis.images[0];
//        });
//        $scope.setImage = function(imageUrl) {
//            $scope.mainImageUrl = imageUrl;
//        }
//    }
//]);

//http get
//cmsControllers.controller('CrisisListCtrl', ['$scope','$http',
//    function ($scope, $http) {
//        $http.get('//localhost:63342/CZ3003-CMS/Public UI/test.json').success(function(data) {
//            $scope.crises = data;
//        });
//
//        $scope.orderProp = 'priority';
//    }]);
//
//cmsControllers.controller('CrisisDetailCtrl',['$scope','$routeParams', '$http',
//    function($scope, $routeParams, $http){
//        $http.get('test/'+ $routeParams.crisisId +'.json').success(function(data){
//            $scope.crisis = data;
//            $scope.mainImageUrl = data.images[0];
//        });
//
//        $scope.setImage = function(imageUrl) {
//            $scope.mainImageUrl = imageUrl;
//        }
//    }
//]);