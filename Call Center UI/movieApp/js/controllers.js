/**
 * Created by Sandeep on 01/06/14.
 */
angular.module('movieApp.controllers',[])

    .controller('MovieListController',function($scope,$state,popupService,$window,Movie,$log){

    $scope.movies=Movie.query();
        console.log($scope.movies);
    $scope.deleteMovie=function(movie){
        if(popupService.showPopup('Really delete this?')){
            movie.$delete(function(){
                $window.location.href='';
            });
        }
    }

}).controller('MovieViewController',function($scope,$stateParams,Movie){
        console.log("movie viewing");
        console.log($stateParams.id);
        console.log($stateParams);

    $scope.movie=Movie.get({id:$stateParams.id});

}).controller('MovieCreateController',function($scope,$state,$stateParams,Movie){

    $scope.movie=new Movie();

    $scope.addMovie=function(){
        $scope.movie.$save(function(){
            console.log("saving");
            console.log($scope.movie);
            //$state.go('movies');
        });
    }

}).controller('MovieEditController',function($scope,$state,$stateParams,Movie){
        console.log("under movie edit controller");
        console.log($scope.movie);

        //$scope.movie=Movie.get({id:$stateParams.id});

        $scope.updateMovie=function(){
        console.log($stateParams.id);
        console.log("show scope.movie");
        console.log($scope.movie);
        console.log($scope.movie.$update(function(){
            //$state.go('movies');
        }));

    };

    $scope.loadMovie=function(){
        $scope.movie=Movie.get({id:$stateParams.id});
    };

    $scope.loadMovie();
});