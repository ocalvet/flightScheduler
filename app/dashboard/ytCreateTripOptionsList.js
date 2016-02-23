(function(module) {
    
    module('yogoTravelDashboard')
        .directive('ytCreateTripOptionsList', [function(){
            
            return {
              restrict: 'E',
              templateUrl: 'views/ytCreateTripOptionsList.html',
            //   link: function(scope, el, attr) {
            //       console.log('user ', scope.currentUser)
            //       scope.$watch('currentUser', function(user) {
            //           if(user) {
            //             console.log('user ', scope.currentUser)
            //             console.log('user set');
            //           } 
            //       });
            //   }
            };
            
        }]);
    
})(angular.module)