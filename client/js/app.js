(function(){
/*global angular*/


// Declare app level module which depends on views, and components
var ang = angular.module('grmProjectApp', ['ngRoute']);

ang.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
              $routeProvider
              .when('/',{
                 templateUrl:'/../template/home.html',
                 controller:'homeController',
                 controllerAs:'v'
              })              
              .when('/physics',{
                 templateUrl:'/../template/physics.html',
                 
              })
              .otherwise({redirectTo:'/'});
              $locationProvider.html5Mode(true);
              //$locationProvider.html5Mode({enabled:true,requireBase: false});
          }]);

})();