(function(module) {
    
    module('yogoTravelDashboard')
        .directive('ytCreateTrip', [function(){
            
            return {
              templateUrl: 'views/ytCreateTrip.html'
            };
            
        }]);
    
})(angular.module)