(function(module) {
  
  module('flightScheduler')
    .controller('CreateStepCtrl', ['tripService', '$state', 
      function(tripService, $state) {
        var createStepCtrl = this;
        
        createStepCtrl.tripInfo = {};
        
        tripService
          .getDestinations()
          .then(function(destinations) {
            createStepCtrl.destinations = destinations;
          }, function(error) {
            console.log(error);
          });
          
        createStepCtrl.selectDestination = function(destination) {
          if (destination.available) {
            createStepCtrl.selectedDestination = destination;
            console.log('destination', destination);
            createStepCtrl.tripInfo.destination = destination.id;
            $state.go('trip.create.step-2');
          }  else {
            createStepCtrl.selectedDestination = undefined;
          }
        }
      }]);
  
})(angular.module);