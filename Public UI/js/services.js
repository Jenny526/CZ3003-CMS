/**
 * Created by Boss on 8/4/15.
 */
'use strict';

/* Services */

var cmsServices = angular.module('cmsServices', ['ngResource']);

cmsServices.factory('Crisis', ['$resource',
    function($resource){
        return $resource('//localhost:63342/CZ3003-CMS/:crisisId.json', {}, {
            query: {method:'GET', params:{crisisId:'test'}, isArray:true}
        });
    }]);
