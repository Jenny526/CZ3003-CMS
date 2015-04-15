/**
 * Created by Boss on 8/4/15.
 */
'use strict';

/* Services */

var cmsServices = angular.module('cmsServices', ['ngResource']);

cmsServices.factory('Crisis', ['$resource',
    function($resource){
        return $resource('http://10.27.163.216:5000/publicView', {}, {
            query: {method:'GET', params:{}, isArray:true}
        });
    }]).factory('Weather',['$resource',
    function($resource){
        return $resource('weather.json',{}, {
            get:{method:'GET', params:{}}
        })
    }
]).factory('PSI',['$resource',
    function($resource){
        return $resource('PSI.json',{}, {
            get:{method:'GET', params:{}}
        })
    }
]);
