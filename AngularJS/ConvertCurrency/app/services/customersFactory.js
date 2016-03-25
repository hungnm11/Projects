(function() {
    var customersFactory = function() {
        var customers = [{
                id: 1,
                joined: '2012-12-02',
                name: 'Dylan',
                city: 'Buffalo',
                orderTotal: 9.99526,
                orders: [ 
                    {
                        id: 1,
                        product: 'shoes',
                        total: 9.99526
                    }
                ]
            }, {
                id: 2,
                joined: '1932-12-02',
                name: 'Pete',
                city: 'Detroit',
                orderTotal: 111.521,
                orders: [ 
                    {
                        id: 2,
                        product: 'Shirt',
                        total: 10.551
                    }
                ]
            }, {
                id: 3,
                joined: '1967-11-04',
                name: 'Sampress',
                city: 'Kanas City',
                orderTotal: 92.521,
                orders: [ 
                    {
                        id: 3,
                        product: 'T-shirt',
                        total: 9.99526
                    }
                ]
            }];
        var facetory = {};
        facetory.getCustomers = function() {
            return customers;
        };
        
        facetory.getCustomer = function(customerId) {
            for (var i = 0, len = customers.length; i < len; i++) {
                 if (customers[i].id === parseInt(customerId)) {
                     return customers[i];
                 }
             }
            return {};
        };
        
        return facetory;
    };
    
    angular.module('customersApp').factory('customersFactory', customersFactory);
}());