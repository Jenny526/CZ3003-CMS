/**
 * Created by Boss on 8/4/15.
 */
'use strict';

/* Services */

var cmsServices = angular.module('cmsServices', ['ngResource']);

cmsServices.factory('Crisis', ['$resource',
    function($resource){
        return $resource('http://lemon-tea-cms.cz3003.project.10.27.151.19.xip.io/:crisisId.json', {}, {
            query: {method:'GET', params:{crisisId:'test'}, isArray:true}
        });
    }]);
