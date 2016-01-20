(function(module) {
  
  module('flightScheduler')
    .controller('CreateStepCtrl', ['tripService', '$state', 'flightService', 
      function(tripService, $state, flightService) {
        var createStepCtrl = this;
        
        createStepCtrl.selection = {};
        
        tripService
          .getDestinations()
          .then(function(destinations) {
            createStepCtrl.destinations = destinations;
          }, function(error) {
            console.log(error);
          });
          
        createStepCtrl.selectDestination = function(destination) {
          if (destination.available) {
            createStepCtrl.selection.destination = destination;
            // Get the upcoming flights
            flightService.getUpcomingFlights(destination.id)
              .then(function(flights) {
                createStepCtrl.flights = flights;
              }, function(error) {
                console.log('Error ', error);
              })
            $state.go('trip.create.step-2');
          }  else {
            delete createStepCtrl.selection.destination;
          }
        };
        
        createStepCtrl.selectFlight = function(flight) {
            createStepCtrl.selection.flight = flight;
            $state.go('trip.create.step-3');          
        };
        
        createStepCtrl.submitItinerary = function(itinerary) {
          createStepCtrl.selection.itinerary = itinerary;
          $state.go('trip.create.step-4');
        };
        
        createStepCtrl.submitCelebrityOptions = function(celOptions) {
           createStepCtrl.selection.celOptions = celOptions;
          $state.go('trip.create.step-5');
        };
        
        createStepCtrl.sendForApproval = function(selection) {
          console.log('selection', selection);
          $state.go('trip.create.step-6');
        }
        
        createStepCtrl.finishVerification = function() {
          $state.go('trip.create.step-7');
        };
        
        createStepCtrl.scheduleTrip = function() {
          $state.go('trip.upcoming');
        };
      }]);
  
})(angular.module);