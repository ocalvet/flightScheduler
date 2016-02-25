(function(module) {

    module('yogoTravelDashboard', ['ngMaterial', 'draganddrop', 'ngLodash', 'common','ui.router'])
      .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
          .primaryPalette('teal')
          .accentPalette('orange');
      })
    .config(function($stateProvider, $urlRouterProvider) {

      // For any unmatched url, redirect to /state1
      $urlRouterProvider.otherwise("/dash");

      // Set up the application states
      $stateProvider
        .state('dash', {
          url: '/dash',
          templateUrl: 'views/dash.html',
          controller: 'DashboardAppCtrl as da'
        })
   });



})(angular.module);
