/**
 * Created by Boss on 9/4/15.
 */
angular.module('mapApp', ['mapControllers','cmsServices']);

var mapControllers = angular.module('mapControllers',['uiGmapgoogle-maps', 'cmsServices']);


mapControllers.controller('mapInstanceCtrl',['$scope','$log','$filter','Crisis',
    function ($scope, $log, $filter,Crisis) {

        $scope.types_fire = true;
        $scope.types_other = true;
        $scope.types_dengue = true;
        $scope.types_flu = true;
        $scope.types_gas = true;
        $scope.types_rescue = true;
        $scope.types_shelter = true;

        $scope.map = {
            center: {
                latitude: 1.3447,
                longitude: 103.6814
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
        };

        $scope.filterCrisis = function(items) {
            var filtered = [];
            angular.forEach(items, function(item) {
                if(item.eventType == "fire" && $scope.types_fire == true){
                    filtered.push(item);
                }
                else if(item.eventType == "other" && $scope.types_other == true){
                    filtered.push(item);
                }
                else if(item.eventType == "dengue" && $scope.types_dengue == true){
                    filtered.push(item);
                }
                else if(item.eventType == "flu" && $scope.types_flu == true){
                    filtered.push(item);
                }
                else if(item.eventType == "gas" && $scope.types_gas == true){
                    filtered.push(item);
                }
                else if(item.eventType == "shelter" && $scope.types_rescue == true){
                    filtered.push(item);
                }
                else if(item.eventType == "rescue" && $scope.types_shelter == true){
                    filtered.push(item);
                }
            });
            $scope.toBeFiltered = filtered;
            filtered = $scope.$eval("toBeFiltered | filter:query");
            return filtered;
        };


        //console.log($scope.map.markers);
        $scope.map.markersEvents = {
            click: function (marker, eventName, model, args) {
                $scope.currentDisplay = marker.eventType;
                $scope.$apply();
            }
        };
        $scope.map.markers = Crisis.query({}, function (result) {
            $scope.updateCrisis();
        });
    }
]);