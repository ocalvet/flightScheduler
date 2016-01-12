(function(module) {
  module('flightScheduler')
    .controller('HomeCtrl', ['$state', 'tripService', function($state, tripService) {
      var homeCtrl = this;

      homeCtrl.title = "Home View";

      homeCtrl.navigate = function(state) {
        $state.go(state);
      };
      tripService.getUpcomingTrips()
        .then(function(trips) {
          homeCtrl.cards = trips;          
        }, function (err) {
          console.log('There was an error getting the upcoming trips', err);
        });           
    }]);
})(angular.module);