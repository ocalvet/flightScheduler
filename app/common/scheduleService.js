(function(module) {

  module('common')
    .service('scheduleService', ['$q', function($q) {

      var getAvailableDestinationDates = function(destinationId) {
        var defer = $q.defer();

        defer.resolve({});

        return defer.promise;
      };

      return {
        getAvailability: getAvailableDestinationDates
      }
    }])

})(angular.module)
