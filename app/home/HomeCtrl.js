(function(module) {
  module('flightScheduler')
    .controller('HomeCtrl', [function() {
      var homeCtrl = this;
      homeCtrl.title = "Home View";
      homeCtrl.cards = [{
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
      },{
          title: 'Micileni\'s Trip',
          description: 'This trip contains a variety of cultural exchanges to include visit to Havana and Trinidad',
          days: 5,
          spacesOccupied: 0,
          totalSpaces: 10
      }];
    }]);
})(angular.module);