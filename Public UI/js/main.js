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
            otherwise({
                redirectTo: '/crises'
            });
    }]);
