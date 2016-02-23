(function(module) {

    module('yogoTravelDashboard')
        .controller('DashboardAppCtrl', ['lodash', function(lodash){

            var da = this;

            da.availableOptions = [
              { id: 1, title: 'option 1' },
              { id: 2, title: 'option 2' },
              { id: 3, title: 'option 3' },
              { id: 4, title: 'option 4' }
            ];

            da.selectedOptions  = [];

            da.title = "Testing";

            // Drop handler.
            da.onDrop = function (data, event) {
              // Get custom object data.
              var customObjectData = data['json/custom-object']; // {foo: 'bar'}

              if (lodash.findIndex(da.selectedOptions, function(option){
                return option.id === customObjectData.id;
              }) === -1) {
                // Get other attached data.
                var uriList = data['text/uri-list']; // http://mywebsite.com/..

                // Add the object if it is not found on the list
                da.selectedOptions.push(customObjectData);
              }
            };

            // Drag over handler.
            da.onDragOver = function (event) {
              // ...
            };

        }]);

})(angular.module)
