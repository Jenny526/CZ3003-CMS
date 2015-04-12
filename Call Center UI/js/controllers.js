/**
 * Created by Boss on 12/4/15.
 */
angular.module('crisisApp.controllers',[])

    .controller('CrisisListController',function($scope,$state,popupService,$window,Crisis,$log){

        $scope.crises=Crisis.query(
            {}, function(data){
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
    .controller('CrisisViewController',function($scope,$stateParams,Crisis){
        console.log("crisis viewing");
        console.log($stateParams.id);
        console.log($stateParams);

        $scope.crisis=Crisis.get({id:$stateParams.id},function(data){
            console.log("here is returned from view");
            console.log(data);
        });
        console.log($scope.crisis);

    })
    .controller('CrisisCreateController',function($scope,$state,$stateParams,Crisis){

        $scope.crisis=new Crisis();

        $scope.addCrisis=function(){
            $scope.crisis.$save({},function(data){
                console.log("saving");
                console.log($scope.crisis);

                console.log("here is returned from saving");
                console.log(data);
                $state.go('crises');

            });
            $state.go('crises');

        }

    })
    .controller('CrisisEditController',function($scope,$state,$stateParams,Crisis){
        console.log("under crisis edit controller");
        console.log($scope.crisis);

        //$scope.movie=Movie.get({id:$stateParams.id});

        $scope.updateCrisis=function(){
            console.log($stateParams.id);
            console.log("show scope.crisis");
            console.log($scope.crisis);
            console.log($scope.crisis.$update({},function(data){
                console.log("here is the returned from update");
                console.log(data);
                $state.go('crises');

            }));

        };

        $scope.loadCrisis=function(){
            $scope.crisis=Crisis.get({id:$stateParams.id});
        };

        $scope.loadCrisis();
    })
    .controller('CrisisHistoryController',function($scope,$state,$stateParams, Crisis){
        console.log("under crisis history controller");
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