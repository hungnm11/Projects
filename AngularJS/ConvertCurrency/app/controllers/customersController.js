//Option 1
/*
app.controller('CustomersController', function($scope) {
    $scope.sortby = 'name';
    $scope.reverse = false;

    $scope.customers = [{
            joined: '2012-12-02',
            name: 'Dylan',
            city: 'Buffalo',
            orderTotal: 9.521
        }, {
            joined: '1932-12-02',
            name: 'Pete',
            city: 'Detroit',
            orderTotal: 111.521
        }, {
            joined: '1967-11-04',
            name: 'Sampress',
            city: 'Kanas City',
            orderTotal: 92.521
        }, {
            joined: '2000-12-02',
            name: 'John',
            city: 'California',
            orderTotal: 87.521
        }];

    $scope.doSort = function(propName) {
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
    }
});
*/

// Option 2
/*
(function(){
    angular.module('customersApp').controller('CustomersController', function($scope) {
    
        $scope.sortBy = 'name';
        $scope.reverse = false;

        $scope.customers = [{
            joined: '2012-12-02',
            name: 'Dylan',
            city: 'Buffalo',
            orderTotal: 9.521
        }, {
            joined: '1932-12-02',
            name: 'Pete',
            city: 'Detroit',
            orderTotal: 111.521
        }, {
            joined: '1967-11-04',
            name: 'Sampress',
            city: 'Kanas City',
            orderTotal: 92.521
        }];

        $scope.doSort = function(propName) {
            $scope.sortBy= propName;
            $scope.reverse = !$scope.reverse;
        };
    
    });
    
}());
*/

// Option 3

(function(){
    
    var CustomesControllerFn = function($scope, customersFactory) {
    
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        
        function init() {
            $scope.customers = customersFactory.getCustomers();
        }

        init();
        
        $scope.doSort = function(propName) {
            $scope.sortBy= propName;
            $scope.reverse = !$scope.reverse;
        };
    
    }
    
    CustomesControllerFn.$inject = ['$scope','customersFactory'];
    angular.module('customersApp').controller('CustomersController', CustomesControllerFn);

}());
