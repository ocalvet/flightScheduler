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
            'slogon-view': { template: '<h1 class="slogon">Start Your Dream Celebrity Vacation</h1>' },
            'main-view': { templateUrl: 'views/home/home.html' }
          },
          controller: 'HomeCtrl as homeCtrl'
        })
        .state('trip', {
          abstract: true,
          url: '/trip',
          views: {
            'main-view': { template: '<div class="view-container"><ui-view /></div>' }
          }
        })
        .state('trip.create', {
          url: '/create',
          templateUrl: 'views/trip/create.html',
          controller: 'CreateTripCtrl as createTripCtrl'
        })
        .state('trip.signup', {
          url: '/signup/:tripId',
          templateUrl: 'views/trip/signup.html',
          controller: 'SignupTripCtrl as signupTripCtrl'
        });
    });
  
})(angular.module);