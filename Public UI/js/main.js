/**
  * Created by Boss on 24/3/15.
  */
'use strict';

/* App Module */

var cmsApp = angular.module('cmsApp', [
    'ngRoute',
    'cmsControllers'
]);

cmsApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/#',{
                templateUrl:'partials/nav-bar.html'
            }).
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


// //angular
// //    .module('angularMapsTutorialApp',[
// //        'ngCookies',
// //        'ngResource',
// //        'ngSanitize',
// //        'ngRoute',
// //        'google-maps'
// //    ])
// //    .config(function($routeProvider){
// //        $routeProvider
// //            .when('/',{
// //                templateUrl:'main.html',
// //                controller:'MainCtrl'
// //            })
// //        .otherwise({
// //                redirectTo:'/'
// //            });
// //    });

// angular
//     .module('myApplicationModule',['uiGmapgoogle-maps']);

// //angular.module('myApplicationModule', ['uiGmapgoogle-maps']).config(
// //    ['uiGmapGoogleMapApiProvider', function (GoogleMapApiProviders) {
// //        GoogleMapApiProvider.config({
// //            china: true
// //        });
// //    }]
// //);

// angular
//     .module("myapp", [])
//     .controller("HelloController", function ($scope) {
//         $scope.helloTo = {};
//         $scope.helloTo.title = "AngularJS";
//         $scope.map={
//             center:{latitude:45, longitude:-73},
//             zoom:8
//         };
//     });
