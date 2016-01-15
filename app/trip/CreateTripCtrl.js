(function(module) {
  
  module('flightScheduler')
    .controller('CreateTripCtrl', ['currentStep', function(currentStep) {
      var createTripCtrl = this;
      createTripCtrl.currentStep = currentStep;
      createTripCtrl.title = "Trip Creation";
    }]);
  
})(angular.module);