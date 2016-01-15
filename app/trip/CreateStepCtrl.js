(function(module) {
  
  module('flightScheduler')
    .controller('CreateStepCtrl', ['currentStep', 'tripService', '$state', function(currentStep, tripService, $state) {
      var createStepCtrl = this;
      
      createStepCtrl.currentStep = currentStep;
      
      createStepCtrl.title = "Create Step " + currentStep;
      
      tripService
        .getDestinations()
        .then(function(destinations) {
          console.log('destinations', destinations);
          createStepCtrl.destinations = destinations;
        }, function(error) {
          console.log(error);
        });
        
      createStepCtrl.selectDestination = function(destId) {
        $state.go('trip.create.step-2', { destId: destId });
      }
    }]);
  
})(angular.module);