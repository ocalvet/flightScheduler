(function(module) {
  module('flightScheduler')
    .service('tripService', ['$q', function($q) {
      
      var getUpcoming = function() {
        var defer = $q.defer();
        
        defer.resolve([{
          id: 1,
          title: 'Schilling\'s Trip',
          description: 'This trip contains a variety of cultural exchanges to include visit to Havana and Trinidad',
          days: 12,
          spacesOccupied: 5,
          totalSpaces: 20
      },{
          id: 2,
          title: 'Tyson\'s Trip',
          description: 'This trip contains a variety of cultural exchanges to include visit to Havana and Trinidad',
          days: 10,
          spacesOccupied: 20,
          totalSpaces: 20
      },{
          id: 3,
          title: 'Lenny\'s Trip',
          description: 'This trip contains a variety of cultural exchanges to include visit to Havana and Trinidad',
          days: 15,
          spacesOccupied: 13,
          totalSpaces: 25
      }]);
        
        return defer.promise;
      };
      
      var getDestinations = function() {
        var defer = $q.defer();
        
        defer.resolve([{
          id: 1,
          name: 'Cuba'
        }, {
          id: 2,
          name: 'Cancun'
        }, {
          id: 3,
          name: 'Costa Rica'
        }, {
          id: 4,
          name: 'Peru'
        }])
        
        return defer.promise;        
      }
      
      return {
        getUpcomingTrips: getUpcoming,
        getDestinations: getDestinations
      }
    }])
})(angular.module);