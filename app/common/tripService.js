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
          image: "mike_tyson.jpg"
      },{
          id: 2,
          title: 'Tyson\'s Trip',
          description: 'This trip contains a variety of cultural exchanges to include visit to Havana and Trinidad',
          days: 10,
          spacesOccupied: 20,
          totalSpaces: 20,
          image: "mike_tyson.jpg"
      },{
          id: 3,
          title: 'Lenny\'s Trip',
          description: 'This trip contains a variety of cultural exchanges to include visit to Havana and Trinidad',
          days: 15,
          spacesOccupied: 13,
          totalSpaces: 25,
          image: "mike_tyson.jpg"
      }]);
        
        return defer.promise;
      };
      
      var getDestinations = function() {
        var defer = $q.defer();
        
        defer.resolve([{
          id: 1,
          name: 'Cuba',
          image: 'images/cuba.png',
          available: true,
          description: 'Cuba, a large Caribbean island nation under communist rule, is known for its white-sand beaches, rolling mountains, cigars and rum. Its colorful capital, Havana, features well-preserved Spanish colonial architecture within its 16th-century core, Old Havana, loomed over by the pre-revolutionary Capitolio. Salsa emanates from the city\'s dance clubs and cabaret shows are performed at the famed Tropicana.',
          itineraryOptions: [
            { id:2, title: 'Walking tour of Old Havana', selected: 'no' },
            { id:3, title: 'Lectures on US-Cuba Relations, Cuban Economy, Music, Dance and Architecture', selected: 'no' },
            { id:4, title: 'Visit project of Muralenado', selected: 'no' },
            { id:5, title: 'Visit senior center', selected: 'no' },
            { id:6, title: 'Visit day-care-center', selected: 'no' },
            { id:7, title: 'Visit the house of artist Jose Fuster', selected: 'no' },
            { id:8, title: 'Vist arts and crafts market', selected: 'no' },
            { id:9, title: 'Visit farmers market', selected: 'no' },
            { id:10, title: 'Ride in bicitaxis', selected: 'no' },
            { id:11, title: 'Ride in old convertibles', selected: 'no' },
            { id:12, title: 'Visit museum of fine arts', selected: 'no' },
            { id:13, title: 'Visit museum of the revolution', selected: 'no' },
            { id:14, title: 'Visit hemingway\'s museum', selected: 'no' },
            { id:15, title: 'Go to fabrica de arte', selected: 'no' },
            { id:16, title: 'Salsa leson', selected: 'no' },
            { id:17, title: 'Dance performance', selected: 'no' },
            { id:18, title: 'Choir concert', selected: 'no' },
            { id:19, title: 'Jazz concert', selected: 'no' },
            { id:20, title: 'Meals in private restaurants (paladars)', selected: 'no' },
            { id:21, title: 'Day trip to viniales', selected: 'no' },
            { id:22, title: 'Day trip to soroa and las terrazas', selected: 'no' },
            { id:23, title: 'Day trip to the bay of pigs', selected: 'no' },
            { id:24, title: 'Snorkeling in playa larga', selected: 'no' }
          ],
          celebrityOptions: [
            { id:1, title: 'Personal diner', selected: 'no' },
            { id:2, title: 'Plane seat next to celebrity reservation', selected: 'no' },
            { id:3, title: 'Ride on bus', selected: 'no' },
            { id:4, title: 'Watch beisball game', selected: 'no' },
            { id:5, title: 'Night Club VIP with celebrity', selected: 'no' }
          ]
        }, {
          id: 2,
          name: 'Cancun',
          image: 'images/cancun.png',
          available: false,
          description: 'Cancún, a Mexican city on the Yucatán Peninsula bordering the Caribbean Sea, is known for its beaches, numerous resorts and energetic nightlife. It’s composed of 2 distinct areas: the more traditional downtown area, El Centro, and Zona Hotelera, a long, beachfront strip of high-rise hotels, nightclubs, shops and restaurants. Cancun is also a famed destination for students during college’s spring break period.'
        }, {
          id: 3,
          name: 'Costa Rica',
          image: 'images/costa-rica.png',
          available: false,
          description: 'Costa Rica is a rugged, rainforested Central American country with coastlines on the Caribbean and Pacific. Though its capital, San Jose, is home to cultural institutions like the Pre-Columbian Gold Museum, Costa Rica is known for its beaches, volcanoes and immense biodiversity. Roughly a quarter of its area is made up of protected jungle, rich with wildlife including spider monkeys and quetzal birds.'
        }, {
          id: 4,
          name: 'Peru',
          image: 'images/peru.png',
          available: false,
          description: 'Peru is a country in South America that\'s home to a section of Amazon rainforest and Machu Picchu, an ancient Incan city set high in the Andes mountains. The area surrounding Machu Picchu, including the Sacred Valley, the Inca Trail and the lively city of Cusco, is also rich in Incan sites as well as hiking, rafting and mountain-biking opportunities.'
        }])
        
        return defer.promise;        
      }
      
       var getTripDetails = function(tripId) {
           var defer = $q.defer();
        
        defer.resolve({
            id: 2,
            celebrity: 'Mike Tyson',
            extendedDescription: 'Join me, Iron Mike Tyson, on an unforgetable trip to Cuba. We\'ll see yadda yadda yadda yadda',
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