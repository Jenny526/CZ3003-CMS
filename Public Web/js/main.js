'use strict';

/* App Module */
var cmsApp = angular.module('cmsApp', [
    'ngRoute',
    'cmsAnimations',
    'cmsControllers',
    'cmsServices',
    'mapApp'
]);
cmsApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
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
                redirectTo: '/'
            });
    }]);
