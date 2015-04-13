/**
 * Created by Boss on 12/4/15.
 */
'use strict';

/* Services */

angular.module('crisisApp.services', []).factory('Crisis', ['$resource',
    function($resource){
        return $resource('http://10.27.163.216:9000/event/:id',
            { id: '@id' }, {
            update: {
                method: 'PUT'
            }
        });
    }])
    .service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
