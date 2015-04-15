/**
 * Created by Sandeep on 01/06/14.
 */
angular.module('movieApp.controllers',[])

    .controller('MovieListController',function($scope,$state,popupService,$window,Movie,$log){

    $scope.movies=Movie.query(
        {}, function(data){
        console.log("here is returned from query");
        console.log(data);
        }
    );
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

    $scope.movie=Movie.get({id:$stateParams.id},function(data){
        console.log("here is returned from view");
        console.log(data);
    });

}).controller('MovieCreateController',function($scope,$state,$stateParams,Movie){

    $scope.movie=new Movie();

    $scope.addMovie=function(){
        $scope.movie.$save({},function(data){
            console.log("saving");
            console.log($scope.movie);
            //$state.go('movies');
            console.log("here is returned from saving");
            console.log(data);
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
        console.log($scope.movie.$update({},function(data){
            //$state.go('movies');
            console.log("here is the returned from update");
            console.log(data);
        }));

    };

    $scope.loadMovie=function(){
        $scope.movie=Movie.get({id:$stateParams.id});
    };

    $scope.loadMovie();
});