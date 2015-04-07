'use strict';

/* Controllers */

var cmsControllers = angular.module('cmsControllers', []);

cmsControllers.controller('CrisisListCtrl', ['$scope','$http',
    function ($scope, $http) {
        $http.get('test/test.json').success(function(data) {
            $scope.crises = data;
        });

        $scope.orderProp = 'age';
    }]);

cmsControllers.controller('CrisisDetailCtrl',['$scope','$routeParams',
    function($scope, $routeParams){
        $scope.crisisId = $routeParams.crisisId;
    }
]);