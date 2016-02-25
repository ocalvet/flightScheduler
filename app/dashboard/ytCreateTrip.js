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
                  scope.$watch('currentUser', function(user) {
                      if(user) {
                        console.log('user ', scope.currentUser);
                      }
                  });
              },
              controller: "CreateTripCtrl as ct"
            };

        }]);

})(angular.module)
