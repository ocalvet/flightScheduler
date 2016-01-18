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
          name: 'Cuba',
          image: 'images/cuba.png',
          available: true,
          description: 'Cuba, a large Caribbean island nation under communist rule, is known for its white-sand beaches, rolling mountains, cigars and rum. Its colorful capital, Havana, features well-preserved Spanish colonial architecture within its 16th-century core, Old Havana, loomed over by the pre-revolutionary Capitolio. Salsa emanates from the city\'s dance clubs and cabaret shows are performed at the famed Tropicana.',
          itineraryOptions: [
            { title: 'Walking tour of Old Havana' },
            { title: 'Lectures on US-Cuba Relations, Cuban Economy, Music, Dance and Architecture' },
            { title: 'Visit project of Muralenado' },
            { title: 'Visit senior center' },
            { title: 'Visit day-care-center' },
            { title: 'Visit the house of artist Jose Fuster' },
            { title: 'Vist arts and crafts market' },
            { title: 'Visit farmers market' },
            { title: 'Ride in bicitaxis' },
            { title: 'Ride in old convertibles' },
            { title: 'Visit museum of fine arts' },
            { title: 'Visit museum of the revolution' },
            { title: 'Visit hemingway\'s museum' },
            { title: 'Go to fabrica de arte' },
            { title: 'Salsa leson' },
            { title: 'Dance performance' },
            { title: 'Choir concert' },
            { title: 'Jazz concert' },
            { title: 'Meals in private restaurants (paladars)' },
            { title: 'Day trip to viniales' },
            { title: 'Day trip to soroa and las terrazas' },
            { title: 'Day trip to the bay of pigs' },
            { title: 'Snorkeling in playa larga' }
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
      
      return {
        getUpcomingTrips: getUpcoming,
        getDestinations: getDestinations
      }
    }])
})(angular.module);