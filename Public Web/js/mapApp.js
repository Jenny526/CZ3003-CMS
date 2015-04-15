/**
 * Created by Boss on 9/4/15.
 */
angular.module('mapApp', ['mapControllers','cmsServices']);

var mapControllers = angular.module('mapControllers',['uiGmapgoogle-maps', 'cmsServices']);


mapControllers.controller('mapInstanceCtrl',['$scope','$log','$filter','Crisis','$interval',
    function ($scope, $log, $filter,Crisis, $interval) {

        $scope.types_fire = true;
        $scope.types_other = true;
        $scope.types_dengue = true;
        $scope.types_flu = true;
        $scope.types_gas = true;
        $scope.types_rescue = true;
        $scope.types_shelter = true;

        $scope.map = {
            center: {
                latitude: 1.3000,
                longitude: 103.8000
            },
            zoom: 12,
            options: {
                streetViewControl: false,
                panControl: false,
                maxZoom: 20,
                minZoom: 3
            }
        };

        $scope.updateCrisis = function(){
            $scope.map.markersForDisplay = $scope.filterCrisis($scope.map.markers);
            //console.log($scope.map.markersForDisplay)
            $scope.map.markersForDisplay.forEach(function (mk){
                    if (mk.event_Type == "fire") {
                        mk.iconUrl = "image/fire.png";
                    } else if (mk.event_Type == "dengue") {
                        mk.iconUrl = "image/dengue.png";
                    } else if (mk.event_Type == "flu") {
                        mk.iconUrl = "image/flu.png";
                    } else if (mk.event_Type == "gas") {
                        mk.iconUrl = "image/gas.png";
                    } else if (mk.event_Type == "rescue") {
                        mk.iconUrl = "image/rescue.png";
                    } else if (mk.event_Type == "shelter") {
                        mk.iconUrl = "image/shelter.png";
                    } else if (mk.event_Type == "other") {
                        mk.iconUrl = "image/flag.png";
                    }

            });
        };

        $scope.filterCrisis = function(items) {
            var filtered = [];
            angular.forEach(items, function(item) {
                if (item.status == "pending"){
                if(item.event_Type == "fire" && $scope.types_fire == true){
                    filtered.push(item);
                }
                else if(item.event_Type == "other" && $scope.types_other == true){
                    filtered.push(item);
                }
                else if(item.event_Type == "dengue" && $scope.types_dengue == true){
                    filtered.push(item);
                }
                else if(item.event_Type == "flu" && $scope.types_flu == true){
                    filtered.push(item);
                }
                else if(item.event_Type == "gas" && $scope.types_gas == true){
                    filtered.push(item);
                }
                else if(item.event_Type == "rescue" && $scope.types_rescue == true){
                    filtered.push(item);
                }
                else if(item.event_Type == "shelter" && $scope.types_shelter == true){
                    filtered.push(item);
                }}
            });
            $scope.toBeFiltered = filtered;
            filtered = $scope.$eval("toBeFiltered | filter:query");
            return filtered;
        };


        //console.log($scope.map.markers);
        $scope.map.markersEvents = {
            click: function (marker, eventName, model, args) {
                $scope.currentDisplay = marker.model.description;
                $scope.$apply();
            }
        };
        $scope.map.markers = Crisis.query({}, function (result) {
            $scope.updateCrisis();
        });


        var refresh = $interval(function(){
                $scope.map.markers = Crisis.query({}, function (result) {
                    //console.log("update");
                    //console.log($scope.map.markers);
                    $scope.updateCrisis();
                });
        }, 1000)
    }
]);