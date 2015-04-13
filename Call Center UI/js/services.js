/**
 * Created by Boss on 12/4/15.
 */
'use strict';

/* Services */

angular.module('crisisApp.services', []).factory('Crisis', ['$resource',
    function($resource){
        return $resource('http://10.27.111.79:5000/:id',
            { id: '@id' }, {
            update: {
                method: 'PUT'
            },
                save: {method:'POST', params:{id:'subscribe'}}
        }

        );
    }])
    .service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
