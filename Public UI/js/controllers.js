'use strict';

/* Controllers */

var cmsApp = angular.module('cmsApp', []);

//phonecatApp.controller('PhoneListCtrl', ['$scope', '$http', function($scope, $http) {
//    $http.get('test/test.json').success(function(data) {
//        $scope.phones = data;
//    });
//
//    $http.get('test/test.json').fail(function(data) {
//        $scope.phones = [
//            {'name': 'Nexus S',
//                'snippet': 'Fast just got faster with Nexus S.',
//                'age': 1},
//            {'name': 'Motorola XOOM™ with Wi-Fi',
//                'snippet': 'The Next, Next Generation tablet.',
//                'age': 2},
//            {'name': 'MOTOROLA XOOM™',
//                'snippet': 'The Next, Next Generation tablet.',
//                'age': 3}
//        ];
//    });
//
//    $scope.orderProp = 'age';
////}]);
//phonecatApp.controller('PhoneListCtrl', function ($scope) {
//    $scope.phones = [
//        {'name': 'Nexus S',
//            'snippet': 'Fast just got faster with Nexus S.',
//            'age': 1},
//        {'name': 'Motorola XOOM™ with Wi-Fi',
//            'snippet': 'The Next, Next Generation tablet.',
//            'age': 2},
//        {'name': 'MOTOROLA XOOM™',
//            'snippet': 'The Next, Next Generation tablet.',
//            'age': 3}
//    ];
//
//    $scope.orderProp = 'age';
//});
cmsApp.controller('CrisisListCtrl', ['$scope','$http', function ($scope, $http) {
    $http.get('test/test.json').success(function(data) {
        $scope.crises = data;
    });

    $scope.orderProp = 'age';
}]);