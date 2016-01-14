(function(module) {
  
  module('flightScheduler')
    .controller('SignupTripCtrl', ['$stateParams', function($stateParams) {
      var signupTripCtrl = this;
      signupTripCtrl.title = "Trip Signup";
      console.log('Trip id', $stateParams.tripId);
    }]);
  
})(angular.module);