(function(module) {

    module('yogoTravelDashboard')
        .controller('DashboardAppCtrl', ['securityService', function(securityService){

            var da = this;

            da.title = "Testing";

            securityService.getCurrentUser()
                .then(function(user) {
                   da.user = user; 
                }, function(error) {
                    console.log("there is an error retrieving user");
                });
        }]);

})(angular.module)
