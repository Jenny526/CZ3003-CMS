/**
 * Created by Boss on 7/4/15.
 */
'use strict';

/* Filters */

angular.module('cmsFilters', []).filter('checkmark', function() {
    return function(input) {
        return input ? '\u2713' : '\u2718';
    };
});