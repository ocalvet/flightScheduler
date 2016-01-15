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
        .state('trip', {
          abstract: true,
          url: '/trip',
          template: '<div class="view-container"><ui-view /></div>'
        })
        .state('trip.create', {
          abstract: true,
          url: '/create',
          templateUrl: 'views/trip/create.html'
        })
        .state('trip.create.step-1', {
          url: '/step-1',
          templateUrl: 'views/trip/step-1.html',
          resolve: {
            currentStep: function() { return 1 }
          },
          controller: 'CreateStepCtrl as createStepCtrl',
          reload: true
        })
        .state('trip.create.step-2', {
          url: '/step-2',
          templateUrl: 'views/trip/step-2.html',
          resolve: {
            currentStep: function() { return 2 }
          },
          controller: 'CreateStepCtrl as createStepCtrl',
          reload: true
        })
        .state('trip.create.step-3', {
          url: '/step-3',
          templateUrl: 'views/trip/step-3.html',
          resolve: {
            currentStep: function() { return 3 }
          },
          controller: 'CreateStepCtrl as createStepCtrl',
          reload: true
        })
        .state('trip.create.step-4', {
          url: '/step-4',
          templateUrl: 'views/trip/step-4.html',
          resolve: {
            currentStep: function() { return 4 }
          },
          controller: 'CreateStepCtrl as createStepCtrl',
          reload: true
        })
        .state('trip.create.step-5', {
          url: '/step-5',
          templateUrl: 'views/trip/step-5.html',
          resolve: {
            currentStep: function() { return 5 }
          },
          controller: 'CreateStepCtrl as createStepCtrl',
          reload: true
        })
        .state('trip.create.step-6', {
          url: '/step-6',
          templateUrl: 'views/trip/step-6.html',
          resolve: {
            currentStep: function() { return 6 }
          },
          controller: 'CreateStepCtrl as createStepCtrl',
          reload: true
        })
        .state('trip.create.step-7', {
          url: '/step-7',
          templateUrl: 'views/trip/step-7.html',
          resolve: {
            currentStep: function() { return 7 }
          },
          controller: 'CreateStepCtrl as createStepCtrl',
          reload: true
        })
        .state('trip.upcoming', {
          url: '/upcoming',
          templateUrl: 'views/trip/upcoming.html',
          controller: 'UpcomingTripCtrl as upcomingTripCtrl'
        })
        .state('trip.signup', {
          url: '/signup/:tripId',
          templateUrl: 'views/trip/signup.html',
          controller: 'SignupTripCtrl as signupTripCtrl'
        });
    });
  
})(angular.module);