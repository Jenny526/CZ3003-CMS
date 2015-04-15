'use strict';

/* Controllers */

var cmsControllers = angular.module('cmsControllers', []);

cmsControllers.controller('timeCtrl', ['$scope',
        function ($scope) {
            $scope.time=Date.now()
        }]
);
cmsControllers.controller('weatherCtrl',['$scope','Weather',
    function ($scope, Weather) {
        $scope.weather = Weather.get();
    }
]);
cmsControllers.controller('PSICtrl',['$scope','PSI',
    function ($scope, PSI) {
        $scope.PSI = PSI.get();
    }
]);

//RESTful client
cmsControllers.controller('CrisisListCtrl', ['$scope','Crisis','Weather','PSI',
    function ($scope, Crisis, Weather, PSI) {

        $scope.crises = Crisis.query();

        $scope.orderProp = '-id';
    }]);


cmsControllers.controller('CrisisDetailCtrl',['$scope','$routeParams', 'Crisis',
    function($scope, $routeParams, Crisis){
        $scope.crisis = Crisis.get({crisisId: $routeParams.crisisId}, function(crisis){
            $scope.mainImageUrl = crisis.images[0];
        });
        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }
    }
]);

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