(function(module) {

  module('common')
    .service('flightService', ['$q', function($q) {

      var getUpcomingFlights = function(destinationId) {
        var defer = $q.defer();

        defer.resolve([{
          id: 1,
          starting: {
            from: 'Miami',
            to: 'Ciudad Habana',
            date: new Date(2016, 1, 22, 9, 30)
          },
          returning: {
            from: 'Ciudad Habana',
            to: 'Miami',
            date: new Date(2016, 1, 24, 22)
          }
        }, {
          id: 2,
          starting: {
            from: 'Boca Raton',
            to: 'Ciudad Habana',
            date: new Date(2016, 1, 22, 10)
          },
          returning: {
            from: 'Ciudad Habana',
            to: 'Miami',
            date: new Date(2016, 1, 24, 20)
          }
        }, {
          id: 3,
          starting: {
            from: 'Miami',
            to: 'Camaguey',
            date: new Date(2016, 1, 22, 9, 30)
          },
          returning: {
            from: 'Camaguey',
            to: 'Miami',
            date: new Date(2016, 1, 24, 22)
          }
        }, {
          id: 4,
          starting: {
            from: 'Boca Raton',
            to: 'Ciudad Habana',
            date: new Date(2016, 1, 29, 10)
          },
          returning: {
            from: 'Ciudad Habana',
            to: 'Miami',
            date: new Date(2016, 2, 9, 21)
          }
        },]);

        return defer.promise;
      };

      return {
        getUpcomingFlights: getUpcomingFlights
      }
    }])

})(angular.module)
