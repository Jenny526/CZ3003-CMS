angular.module('Twitter',['ngResource']);

//function twitterSearch(result){
//    alert('this is ok');
//}

function TwitterCtrl($scope, $resource){
    $scope.twitter=$resource('http://search.twitter.com/:action',
        {action:'search.json', q:'angularjs', callback:'JSON_CALLBACK'},
        {get:{method:'JSONP'}});
    $scope.doSearch = function() {
        $scope.twitterResult = $scope.twitter.get({q: $scope.searchTerm});
    }
}