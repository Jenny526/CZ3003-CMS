/**
 * Created by Boss on 12/4/15.
 */
'use strict';
var crisisApp = angular.module('crisisApp',
    [
    'ui.router',
        'ngResource',
        'crisisApp.controllers',
        'crisisApp.services'
]);

crisisApp.config(function($stateProvider,$httpProvider){
    $stateProvider.state('crises',
        {
            url:'/crises',
            templateUrl:'http://lemon-tea-call-center.cz3003.10.27.151.19.xip.io/partials/crises.html',
            controller:'CrisisListController'
        }).state('viewCrisis',
        {
            url:'/crises/:id/view',
            templateUrl:'http://lemon-tea-call-center.cz3003.10.27.151.19.xip.io/partials/crisis-view.html',
            controller:'CrisisViewController'
        }).state('newCrisis',
        {
            url:'/crises/new',
            templateUrl:'http://lemon-tea-call-center.cz3003.10.27.151.19.xip.io/partials/crisis-add.html',
            controller:'CrisisCreateController'
        }).state('editCrisis',
        {
            url:'/crises/:id/edit',
            templateUrl:'http://lemon-tea-call-center.cz3003.10.27.151.19.xip.io/partials/crisis-edit.html',
            controller:'CrisisEditController'
        }).state('oldCrisis',
        {
            url:'/crises/history',
            templateUrl:'http://lemon-tea-call-center.cz3003.10.27.151.19.xip.io/partials/crisis-history.html',
            controller:'CrisisHistoryController'
        }).state('login',
        {
            url:'/crises/login',
            templateUrl:'http://lemon-tea-call-center.cz3003.10.27.151.19.xip.io/partials/login.html',
            controller:'LoginController'
        });
}).run(function($state){
    $state.go('crises');
});