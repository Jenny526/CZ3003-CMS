/**
 * Created by Boss on 12/4/15.
 */
angular.module('crisisApp.controllers',[])

    .controller('CrisisListController',function($scope,$state,popupService,$window,Crisis,Crisis2,$log){

        $scope.crises=Crisis.query(
            {}, function(data){
                $scope.pendingonly = "pending";
                console.log("here is returned from query");
                console.log(data);
            }
        );
        console.log($scope.crises);
        //$scope.deleteMovie=function(movie){
        //    if(popupService.showPopup('Really delete this?')){
        //        movie.$delete(function(){
        //            $window.location.href='';
        //        });
        //    }
        //}

    })
    .controller('CrisisViewController',function($scope,$stateParams,Crisis,Crisis2){
        console.log("crisis viewing");
        console.log($stateParams.id);
        console.log($stateParams);
        console.log("under crisis edit controller");
        $scope.loadCrisis=function(){
            $scope.crisis=Crisis2.get({id:$stateParams.id});
        };
        $scope.loadCrisis();
        //console.log($scope.crisis);
        //$scope.crisis=Crisis2.get({id:$stateParams.id},function(data){
        //    console.log("here is returned from view");
        //    console.log(data);
        //});
        console.log($scope.crisis);
        $scope.toshow=false;

    })
    .controller('CrisisCreateController',function($scope,$state,$stateParams,$http,Crisis){
        console.log("posting");

        $scope.crisis=new Crisis();

        $scope.addCrisis=function(){
            var url = "http://maps.googleapis.com/maps/api/geocode/json?address=santa+cruz&components=postal_code:"
                +$scope.crisis.location+"&sensor=false";
            console.log(url);

            $http.get(url).
                success(function(data, status, headers, config) {
                    console.log(data);
                    $scope.crisis.lat = data.results[0].geometry.location.lat;
                    $scope.crisis.lng = data.results[0].geometry.location.lng;
                    console.log("posting now");
                    console.log($scope.crisis);
                    $scope.crisis.$save({},function(data2){
                        console.log("saving");
                        console.log($scope.crisis);

                        console.log("here is returned from saving");
                        console.log(data2);
                        $state.go('crises');

                        });
                    }
                );
            $state.go('crises');

        };

    })
    .controller('CrisisEditController',function($scope,$state,$stateParams,Crisis2){
        console.log("under crisis edit controller");
        $scope.loadCrisis=function(){
            $scope.crisis=Crisis2.get({id:$stateParams.id});
        };
        $scope.loadCrisis();
        console.log($scope.crisis);

        //$scope.movie=Movie.get({id:$stateParams.id});

        $scope.updateCrisis=function(){
            console.log($stateParams.id);
            console.log("show scope.crisis");
            console.log($scope.crisis);
            //var container1 = [];
            //container1.push($scope.crisis);
            //$scope.crisis = container1;
            console.log($scope.crisis);
            console.log($scope.crisis.$update({id:$scope.crisis.event_id},function(data){
                console.log("here is the returned from update");
                console.log(data);
                $state.go('crises');

            }));

        };




    })
    .controller('CrisisHistoryController',function($scope,$state,$stateParams, Crisis){
        console.log("under crisis history controller");
        $scope.historyonly = "resolved";
        $scope.crises=Crisis.query(
            {}, function(data){
                console.log("here is returned from query");
                console.log(data);
            }
        );

    })
    .controller('LoginController',function($scope,$state,$stateParams){
        console.log("logging in");
        //$scope.login=new Login();
        //
        //$scope.loginUser=function(){
        //    $scope.login.$post({},function(data){
        //        console.log("here is returned from post");
        //        console.log(data);
        //        $state.go('crises');
        //
        //    });
        //    $state.go('crises');
        //
        //};
    })
;