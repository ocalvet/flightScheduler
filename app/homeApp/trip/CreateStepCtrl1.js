(function(module) {

  module('flightScheduler')
    .controller('CreateStepCtrl1', ['$filter', 'tripService', '$state', 'flightService',
      function($filter, tripService, $state, flightService) {
        var createStepCtrl = this;

        createStepCtrl.title = "Hello";

      }]);

})(angular.module);
