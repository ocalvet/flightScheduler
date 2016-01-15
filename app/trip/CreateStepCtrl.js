(function(module) {
  
  module('flightScheduler')
    .controller('CreateStepCtrl', ['currentStep', function(currentStep) {
      var createStepCtrl = this;
      createStepCtrl.currentStep = currentStep;
      createStepCtrl.title = "Create Step " + currentStep;
    }]);
  
})(angular.module);