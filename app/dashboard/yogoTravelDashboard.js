(function(module) {
    
    module('yogoTravelDashboard', ['ngMaterial', 'draganddrop', 'ngLodash', 'common'])
      .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
          .primaryPalette('teal')
          .accentPalette('orange');
      });
      
})(angular.module);
