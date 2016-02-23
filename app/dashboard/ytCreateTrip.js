(function(module) {
    
    module('yogoTravelDashboard')
        .directive('ytCreateTrip', [function(){
            
            return {
              restrict: 'E',
              scope: {
                currentUser: '=user'  
              },
              templateUrl: 'views/ytCreateTrip.html',
              link: function(scope, el, attr) {
                  console.log('user ', scope.currentUser)
                  scope.$watch('currentUser', function(user) {
                      if(user) {
                        console.log('user ', scope.currentUser)
                        console.log('user set');
                      } 
                  });
              }
            };
            
        }]);
    
})(angular.module)