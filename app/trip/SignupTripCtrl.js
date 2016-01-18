(function(module) {
  
  module('flightScheduler')
    .controller('SignupTripCtrl', ['$state','$stateParams', 'tripService', function($state,$stateParams,tripService) {
      var signupTripCtrl = this;
      signupTripCtrl.title = "Sign up for a trip with ";
      
      tripService.getTripDetails($stateParams.tripId)
        .then(function(tripDetails) {
          signupTripCtrl.tripDetails = tripDetails;          
        }, function (err) {
          console.log('There was an error getting the upcoming trips', err);
        });
      
      signupTripCtrl.signupForm = function(tripId,package) {
          $state.go('trip.signup.form', { tripId: tripId, package: package });
        }  
      console.log('Trip id', $stateParams.tripId);
    }]);
  
})(angular.module);