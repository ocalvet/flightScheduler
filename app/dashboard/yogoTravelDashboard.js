(function(module) {
    
    module('yogoTravelDashboard', ['ngMaterial', 'draganddrop', 'ngLodash'])
      .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
          .primaryPalette('teal')
          .accentPalette('orange');
      });
      
})(angular.module);
