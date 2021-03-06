'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'myApp.autocomplete',
  'ui.bootstrap'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/index', {templateUrl: 'partials/index.html', controller: 'IndexCtrl'});
  $routeProvider.when('/login', {templateUrl: 'login/login.html', controller: 'LoginCtrl'});
  $routeProvider.when('/welcome', {templateUrl: 'partials/welcomeCookie.html', controller: 'WelcomeCookie'});
  $routeProvider.otherwise({redirectTo: '/login'});
  
}])

.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
])

/*
.controller('TemplateCtrl',['$scope',function($scope){

	$scope.logged="hola";

}])
*/

	



