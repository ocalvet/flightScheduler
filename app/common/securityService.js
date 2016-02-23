(function(module) {
  
  module('common')
    .service('securityService', ['$q', '$timeout', function($q, $timeout) {
      
      var getCurrentUser = function() {
        var defer = $q.defer();
        
        $timeout(function() {
            defer.resolve({
                id: 1,
                name: 'Ovidio R. Calvet'
            });
        }, 500);
        
        return defer.promise;
      };
      
      return {
        getCurrentUser: getCurrentUser
      }
    }])
  
})(angular.module)