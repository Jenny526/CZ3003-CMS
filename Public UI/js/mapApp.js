/**
 * Created by Boss on 9/4/15.
 */
angular.module('mapApp', ['mapControllers']);

var mapControllers = angular.module('mapControllers',['uiGmapgoogle-maps']);

mapControllers.controller('mapInstanceCtrl',['$scope','$log','$timeout',
    function ($scope, $log, $timeout) {
        $scope.map={
            center:{
                latitude:1.3447,
                longitude:103.6814
            },
            zoom: 12
        };
        $scope.options = {scrollwheel:true};
        $scope.coordsUpdates = 0;
        $scope.dynamicMoveCtr = 0;
        $scope.marker = {
            id: 0,
            coords: {
                latitude:1.3447,
                longitude:103.6814
            },
            options: { draggable: true },
            events: {
                dragend: function (marker, eventName, args) {
                    $log.log('marker dragend');
                    var lat = marker.getPosition().lat();
                    var lon = marker.getPosition().lng();
                    $log.log(lat);
                    $log.log(lon);

                    $scope.marker.options = {
                        draggable: true,
                        labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
                        labelAnchor: "100 0",
                        labelClass: "marker-labels"
                    };
                }
            }
        };
        $scope.$watchCollection("marker.coords", function (newVal, oldVal) {
            if (_.isEqual(newVal, oldVal))
                return;
            $scope.coordsUpdates++;
        });
        //$timeout(function () {
        //    $scope.marker.coords = {
        //        latitude:2.3447,
        //        longitude:103.6814
        //    };
        //    $scope.dynamicMoveCtr++;
        //    $timeout(function () {
        //        $scope.marker.coords = {
        //            latitude:3.3447,
        //            longitude:103.6814
        //        };
        //        $scope.dynamicMoveCtr++;
        //    }, 2000);
        //}, 1000);
    }]);

