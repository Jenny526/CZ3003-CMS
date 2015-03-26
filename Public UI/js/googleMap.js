///**
// * Created by Boss on 24/3/15.
//// */
//
//    var app = angular.module("myApp", []);
//app.controller('mapCtrl',['$scope', function($scope){
//    $scope.map = { events: {
//        tilesloaded: function (map) {
//            $scope.$apply(function () {
//                $log.info('this is the map instance', map);
//            });
//        }
//    },
//        center: { latitude: 45, longitude: -73 }, zoom: 8 };
//}]);

//app.config(function($scope){
//    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
//})
    //angular.module('google-maps',[])
    //.directive('googleMap',function($scope){
    //    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    //})


    //angular.extend($scope, {
    //    center: {
    //        latitude: 1.30,
    //        longitude: 103.8
    //    },
    //    zoom: 12,
    //    markers: []
    //})

function initialize() {
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
        center: new google.maps.LatLng(1.30, 103.8),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)
}
google.maps.event.addDomListener(window, 'load', initialize);

//angular.module("myapp", ['components'])

//angular.module('components',[])
//        .directive('uiGmapGoogleMap',function(){
//            return {restrict:'E',
//            link: function HelloController($scope) {
//                $scope.helloTo = {};
//                $scope.helloTo.title = "AngularJS";
//                $scope.map={
//                    events:{
//                        tilesloaded: function (map){
//                            $scope.$apply(function(){
//                                $scope.mapInstance = map;
//                            });
//                        }
//                    },
//                    center: {
//                        latitude: 50.6278,
//                        longitude: 3.0583
//                    },
//                    zoom: 12,
//                    markers: [], // array of models to display
//                    markersEvents: {
//                        click: function(marker, eventName, model, arguments) {
//                            $scope.map.window.model = model;
//                            $scope.map.window.show = true;
//                        }
//                    },
//                    window: {
//                        marker: {},
//                        show: false,
//                        closeClick: function() {
//                            this.show = false;
//                        },
//                        options: {} // define when map is ready
//                    }
//                };
//
//            }}
//        }
//        )
    //.controller("HelloController", function ($scope) {
    //    $scope.helloTo = {};
    //    $scope.helloTo.title = "AngularJS";
    //    $scope.map={
    //        center:{latitude:45, longitude:-73},
    //        zoom:8
    //    };
    //});
//
//angular
//    .module('myApplicationModule',['uiGmapgoogle-maps']);
//function HelloController($scope) {
//    $scope.helloTo = {};
//    $scope.helloTo.title = "AngularJS";
//    $scope.map={
//        events:{
//            tilesloaded: function (map){
//                $scope.$apply(function(){
//                    $scope.mapInstance = map;
//                });
//            }
//        },
//        center: {
//            latitude: 1.30,
//            longitude: 103.8
//        },
//        zoom: 12,
//        markers: [], // array of models to display
//        markersEvents: {
//            click: function(marker, eventName, model, arguments) {
//                $scope.map.window.model = model;
//                $scope.map.window.show = true;
//            }
//        },
//        window: {
//            marker: {},
//            show: false,
//            closeClick: function() {
//                this.show = false;
//            },
//            options: {} // define when map is ready
//        }
//    };
//}