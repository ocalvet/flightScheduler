(function(module) {

  module('flightScheduler')
    .controller('SignupFormCtrl', ['$stateParams', 'tripService', function($stateParams,tripService) {
      var signupFormCtrl = this;
      signupFormCtrl.title = "Sign up";

      tripService.getTripDetails($stateParams.tripId)
        .then(function(tripDetails) {
          signupFormCtrl.tripDetails = tripDetails;
        }, function (err) {
          console.log('There was an error getting the upcoming trips', err);
        });

      console.log('Trip id', $stateParams.tripId);
    }]);

})(angular.module);
