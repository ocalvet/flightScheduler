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
          views: {
            'slogon-view': { template: '<h1>Start Your Dream Celebrity Vacation</h1>' },
            'main-view': { templateUrl: 'views/home/home.html' }
          },
          controller: 'HomeCtrl as homeCtrl'
        })
        .state('create-trip', {
          url: '/create-trip',
          views: {
            'main-view': { templateUrl: 'views/tripCreation/create.html' }
          },
          controller: 'CreateTripCtrl as createTripCtrl'
        });
    });
  
})(angular.module);