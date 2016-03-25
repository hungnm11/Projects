<<<<<<< HEAD
(function(){
	
	var app = angular.module('currencyApp', ['ngRoute']);
	
	app.config(function($routeProvider) {
		
		$routeProvider
			.when('/home', 
				{
			 		controller: 'homeCtrl',
					templateUrl: 'app/views/home.html'
				})
			.otherwise({ redirectTo: '/home' });
		
	});
	
}());
=======
(function() {

    var app = angular.module('customersApp', ['ngRoute']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'CustomersController',
                templateUrl: 'app/views/customers.html'
            })
            .when('/orders/:customerId', {
                controller: 'OrdersController',
                templateUrl: 'app/views/orders.html'
            })
        .otherwise({redirectTo:'/'});
    });

}());
>>>>>>> f2f5c469e8d5d9c14aa866776e01e113ed8dd079
