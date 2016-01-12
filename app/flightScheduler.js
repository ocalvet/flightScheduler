(function(module) {
  
  module('flightScheduler', ['ui.router'])
    .controller('AppCtrl', ['$state', function($state) {
      var appCtrl = this;
      
      // navigate to the different states
      appCtrl.navigate = function(state) {
        console.log('Navigating to ' + state);
        $state.go(state);
      }
    }])
    .config(function($stateProvider, $urlRouterProvider) {
      
      // For any unmatched url, redirect to /state1
      $urlRouterProvider.otherwise("/home");
      
      // Set up the application states
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'views/home/home.html',
          controller: 'HomeCtrl as homeCtrl'
        })
        .state('cuba', {
          url: '/cuba',
          templateUrl: 'views/cuba/cuba.html',
          controller: 'CubaCtrl as cubaCtrl'
        })
        .state('create-trip', {
          url: '/create-trip',
          templateUrl: 'views/tripCreation/create.html',
          controller: 'CreateTripCtrl as createTripCtrl'
        });
    });
  
})(angular.module);