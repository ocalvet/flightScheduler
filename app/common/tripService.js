(function(module) {
  module('flightScheduler')
    .service('tripService', ['$q', function($q) {
      
      var getUpcoming = function() {
        var defer = $q.defer();
        
        defer.resolve([{
          title: 'Schilling\'s Trip',
          description: 'This trip contains a variety of cultural exchanges to include visit to Havana and Trinidad',
          days: 12,
          spacesOccupied: 5,
          totalSpaces: 20
      },{
          title: 'Tyson\'s Trip',
          description: 'This trip contains a variety of cultural exchanges to include visit to Havana and Trinidad',
          days: 10,
          spacesOccupied: 20,
          totalSpaces: 20
      },{
          title: 'Lenny\'s Trip',
          description: 'This trip contains a variety of cultural exchanges to include visit to Havana and Trinidad',
          days: 15,
          spacesOccupied: 13,
          totalSpaces: 25
      }]);
        
        return defer.promise;
      }
      
      return {
        getUpcomingTrips: getUpcoming
      }
    }])
})(angular.module);