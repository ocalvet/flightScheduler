(function(module) {
  module('flightScheduler')
    .controller('HomeCtrl', ['$state', 'tripService', function($state, tripService) {
      var homeCtrl = this;

      homeCtrl.title = "Home View";

      tripService.getUpcomingTrips()
        .then(function(trips) {
          homeCtrl.cards = trips;
        }, function (err) {
          console.log('There was an error getting the upcoming trips', err);
        });

        homeCtrl.signForTrip = function(tripId) {
          $state.go('trip.signup', { tripId: tripId });
        }
    }]);
})(angular.module);
