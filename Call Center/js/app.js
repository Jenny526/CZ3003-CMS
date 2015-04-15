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
            templateUrl:'partials/crises.html',
            controller:'CrisisListController'
        }).state('viewCrisis',
        {
            url:'/crises/:id/view',
            templateUrl:'partials/crisis-view.html',
            controller:'CrisisViewController'
        }).state('newCrisis',
        {
            url:'/crises/new',
            templateUrl:'partials/crisis-add.html',
            controller:'CrisisCreateController'
        }).state('editCrisis',
        {
            url:'/crises/:id/edit',
            templateUrl:'partials/crisis-edit.html',
            controller:'CrisisEditController'
        }).state('oldCrisis',
        {
            url:'/crises/history',
            templateUrl:'partials/crisis-history.html',
            controller:'CrisisHistoryController'
        }).state('login',
        {
            url:'/crises/login',
            templateUrl:'partials/login.html',
            controller:'LoginController'
        });
}).run(function($state){
    $state.go('crises');
});