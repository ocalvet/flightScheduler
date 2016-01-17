(function(module) {
  
  module('flightScheduler')
    .controller('SignupTripCtrl', ['$stateParams', 'tripService', function($stateParams,tripService) {
      var signupTripCtrl = this;
      signupTripCtrl.title = "Sign up for a trip with ";
      
      tripService.getTripDetails($stateParams.tripId)
        .then(function(tripDetails) {
          signupTripCtrl.tripDetails = tripDetails;          
        }, function (err) {
          console.log('There was an error getting the upcoming trips', err);
        });
      
      console.log('Trip id', $stateParams.tripId);
    }]);
  
})(angular.module);