(function(module) {
    
    module('yogoTravelDashboard', ['ngMaterial'])
      .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
          .primaryPalette('teal')
          .accentPalette('orange');
      });
      
})(angular.module);