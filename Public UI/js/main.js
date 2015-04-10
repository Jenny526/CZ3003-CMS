'use strict';

/* App Module */
var cmsApp = angular.module('cmsApp', [
    'ngRoute',
    'cmsAnimations',
    'cmsControllers',
    'cmsFilters',
    'cmsServices',
    'mapApp'
]);
cmsApp.controller('timeCtrl', ['$scope',
        function ($scope) {
            $scope.time=Date.now()
        }]
);

cmsApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/crises', {
                templateUrl: 'partials/crisis-list.html',
                controller: 'CrisisListCtrl'
            }).
            when('/crises/:crisisId', {
                templateUrl: 'partials/crisis-detail.html',
                controller: 'CrisisDetailCtrl'
            }).
            when('/report',{
                templateUrl:'partials/report.html'
                //controller:'reportCtrl'
            }).
            when('/about',{
                templateUrl:'partials/aboutUs.html'
                //controller:'aboutCtrl'
            }).
            otherwise({
                redirectTo: '/crises'
            });
    }]);
