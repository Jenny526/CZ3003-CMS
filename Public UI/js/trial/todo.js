function TodoCtrl($scope) {

    $scope.todos = [
        {text: 'Fire @Jurong Point', done: false},
        {text: 'Air Polution@Pungle', done: false}
    ];
    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    };

    $scope.addTodo = function () {
        $scope.todos.push({text: $scope.formTodoText, done: false});
        $scope.formTodoText = '';
    };

    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function (todo) {
            return !todo.done;
        })
    };
}
mapControllers.controller('mapInstanceCtrl',['$scope','$log','$filter',
    function ($scope, $log, $filter) {

        $scope.types_fire = true;
        $scope.types_other = true;

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
        }

        $scope.filterCrisis = function(items) {
            var filtered = [];
            angular.forEach(items, function(item) {
                if($scope.types_fire == true && $scope.types_other == true) {
                    filtered.push(item);
                }
                else if($scope.types_fire == true && $scope.types_other == false && item.type == 'fire'){
                    filtered.push(item);
                }
                else if($scope.types_other == true && $scope.types_fire == false && item.type == 'other'){
                    filtered.push(item);
                }
            });
            return filtered;
        };

        $scope.map.markers = [{
            id: 0,
            coords:{
                latitude: 1.3447,
                longitude: 103.6814
            },
            title: 'sb',
            showWindow: false,
            options: {
                draggable: false
            },
            iconUrl : "//localhost:63342/CZ3003-CMS/Public%20UI/image/fire.png",

            type: 'fire'
        }, {
            id: 2,
            coords:{
                latitude: 1.34,
                longitude: 103.6814
            },
            title: 'sb',
            showWindow: false,
            options: {
                draggable: false
            },
            iconUrl : "//localhost:63342/CZ3003-CMS/Public%20UI/image/fire.png",

            type: 'fire'
        }, {
            id: 3,
            coords:{
                latitude: 1.35,
                longitude: 103.6814
            },
            title: 'sb',
            showWindow: false,
            options: {
                draggable: true
            },
            type: 'other'
        }, {
            id: 4,
            coords:{
                latitude: 1.34,
                longitude: 103.70
            },
            title: 'sb',
            showWindow: false,
            options: {
                draggable: true
            },
            type: 'other'
        }];
        $scope.map.markersEvents = {
            click: function (marker, eventName, model, args) {
                $scope.currentDisplay = marker.title;
                $scope.$apply();
            }
        };

        $scope.updateCrisis();
    }
]);