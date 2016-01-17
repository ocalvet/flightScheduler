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
          totalSpaces: 20,
          image: "MikeTyson.jpg"
      },{
          id: 2,
          title: 'Tyson\'s Trip',
          description: 'This trip contains a variety of cultural exchanges to include visit to Havana and Trinidad',
          days: 10,
          spacesOccupied: 20,
          totalSpaces: 20,
          image: "MikeTyson.jpg"
      },{
          id: 3,
          title: 'Lenny\'s Trip',
          description: 'This trip contains a variety of cultural exchanges to include visit to Havana and Trinidad',
          days: 15,
          spacesOccupied: 13,
          totalSpaces: 25,
          image: "MikeTyson.jpg"
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
      
       var getTripDetails = function(tripId) {
           var defer = $q.defer();
        
        defer.resolve({
            id: 2,
            celebrity: 'Mike Tyson',
            extendedDescription: 'Join me, Iron Mike Tyson, on an unforgetable trim to Cuba. We\'ll see yadda yadda yadda yadda',
            destination: 'Cuba',
            days: '10',
            standardPrice: '$3,000',
            premiumPrice: '$5,000',
            image: "MikeTyson.jpg",
            itinerary: [{day: 1, location: 'Walking tour of old Havana' }, {day: 2, location: 'Baseball game at the famous XX stadium in Santiago de Cuba'}, {day: 3, location: 'Boxing match at the old XX in Holguín'}]
        });
        return defer.promise;
      }
      
      
      return {
        getUpcomingTrips: getUpcoming,
        getDestinations: getDestinations,
        getTripDetails: getTripDetails
      }
    }])
})(angular.module);