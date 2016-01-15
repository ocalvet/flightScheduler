(function(module) {
  
  module('flightScheduler')
    .controller('CreateTripCtrl', ['currentStep', function(currentStep) {
      var createTripCtrl = this;
      console.log('Current Step: ', currentStep);
      createTripCtrl.title = "Trip Creation";
    }]);
  
})(angular.module);