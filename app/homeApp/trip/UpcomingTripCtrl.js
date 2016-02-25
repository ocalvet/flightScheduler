(function(module) {
  module('flightScheduler')
    .controller('UpcomingTripCtrl', ['$state', 'tripService', function($state, tripService) {
      var upcomingTripCtrl = this;

      upcomingTripCtrl.title = "Home View";

      tripService.getUpcomingTrips()
        .then(function(trips) {
          upcomingTripCtrl.cards = trips;
        }, function (err) {
          console.log('There was an error getting the upcoming trips', err);
        });

        upcomingTripCtrl.signForTrip = function(tripId) {
          $state.go('trip.signup.details', { tripId: tripId });
        }
    }]);
})(angular.module);
