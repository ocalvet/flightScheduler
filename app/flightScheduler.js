(function(module) {
  
  module('flightScheduler', ['ui.router'])
    .controller('AppCtrl', [function() {
      var appCtrl = this;
      appCtrl.title = "Hello from angular";
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
        });
    });
  
})(angular.module);