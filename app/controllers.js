angular.module('App.home', [])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "app/views/home.tpl.html",
      controller:"homeCtrl"
    })
   })

.controller('homeCtrl', function($scope, $state) {



});
