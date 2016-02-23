(function(module) {

    module('yogoTravelDashboard')
        .controller('CreateTripCtrl', ['lodash', function(lodash){

            var ct = this;

            ct.availableOptions = [
              { id: 1, title: 'option 1' },
              { id: 2, title: 'option 2' },
              { id: 3, title: 'option 3' },
              { id: 4, title: 'option 4' }
            ];
            
            ct.selectedOptions  = [];

            ct.title = "Yogo! Create Trip";

            // Drop handler.
            ct.onDrop = function (data, event) {
                // Get custom object data.
                var customObjectData = data['json/custom-object']; // {foo: 'bar'}

                if (lodash.findIndex(ct.selectedOptions, function(option){
                    return option.id === customObjectData.id;
                }) === -1) {
                    
                    // Get other attached data.
                    var uriList = data['text/uri-list']; // http://mywebsite.com/..

                    // Add the object if it is not found on the list
                    ct.selectedOptions.push(customObjectData);
                }
            };

            // Drag over handler.
            ct.onDragOver = function (event) {
              // ...
            };
        }]);

})(angular.module)
