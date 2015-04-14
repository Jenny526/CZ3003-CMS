/**
 * Created by Boss on 12/4/15.
 */
'use strict';

/* Services */

angular.module('crisisApp.services', []).factory('Crisis', ['$resource',
    function($resource){
        return $resource('http://10.27.163.216:5000/:id',
            { id: '@id' }, {

                save: {method:'POST', params:{id:'callOperator'}},
                query:{method:'GET', params:{id:'publicView'},isArray:true}
        }

        );
    }]).factory('Crisis2', ['$resource',
    function($resource,$log){
        return $resource('http://10.27.163.216:5000/getEvent/:id',
            { id: '@id' }, {
                update: {
                    method: 'PUT',params:{id:'@id'}
                },
                get:{method:'GET'}

            }

        );
    }])
    .service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
