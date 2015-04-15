/**
 * Created by Boss on 8/4/15.
 */
'use strict';

/* Services */

var cmsServices = angular.module('cmsServices', ['ngResource']);

cmsServices.factory('Crisis', ['$resource',
    function($resource){
        return $resource('http://10.27.246.102:5000/publicView', {}, {
            query: {method:'GET', params:{}, isArray:true}
        });
    }]).factory('Weather',['$resource',
    function($resource){
        return $resource('http://10.27.246.102:5000/weather',{}, {
            //get:{method:'GET', params:{},isArray:false}
        })
    }
]).factory('PSI',['$resource',
    function($resource){
        return $resource('http://10.27.246.102:5000/PSI',{}, {
            //get:{method:'GET', params:{},isArray:false}
        })
    }
]);
