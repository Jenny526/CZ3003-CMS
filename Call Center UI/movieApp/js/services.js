/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('movieApp.services',[]).factory('Movie',function($resource, $log){
    return $resource('http://jsonplaceholder.typicode.com/posts/:id',{id:'@id'},{
        //query: {method:'GET', params:{id:'movies'}, isArray:true},
        update: {
            method:'PUT'
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});