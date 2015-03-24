/**
 * Created by Boss on 23/3/15.
 */

angular.module('components', [])
    .directive('helloWorld', function () {
        return {
            restrict: 'E',
            scope: {
                name: 'bind'
            },
            templateUrl: 'partial/hello.html'
        }
    })

angular.module('HelloApp', ['components'])

angular.module("myapp", ['components'])

    angular.module('components',[])
        .directive('uiGmapGoogleMap',function(){
            return {restrict:'E',
            link: function HelloController($scope) {
                $scope.helloTo = {};
                $scope.helloTo.title = "AngularJS";
                $scope.map={
                    events:{
                        tilesloaded: function (map){
                            $scope.$apply(function(){
                                $scope.mapInstance = map;
                            });
                        }
                    },
                    center: {
                        latitude: 50.6278,
                        longitude: 3.0583
                    },
                    zoom: 12,
                    markers: [], // array of models to display
                    markersEvents: {
                        click: function(marker, eventName, model, arguments) {
                            $scope.map.window.model = model;
                            $scope.map.window.show = true;
                        }
                    },
                    window: {
                        marker: {},
                        show: false,
                        closeClick: function() {
                            this.show = false;
                        },
                        options: {} // define when map is ready
                    }
                };

            }}
        }
        )
    //.controller("HelloController", function ($scope) {
    //    $scope.helloTo = {};
    //    $scope.helloTo.title = "AngularJS";
    //    $scope.map={
    //        center:{latitude:45, longitude:-73},
    //        zoom:8
    //    };
    //});

angular
    .module('myApplicationModule',['uiGmapgoogle-maps']);
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
//            latitude: 50.6278,
//            longitude: 3.0583
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