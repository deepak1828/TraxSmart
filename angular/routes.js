// angular.module('myApp.routes',['ngRoute']);
	myApp.config(['$routeProvider', function($routeProvider){

		$routeProvider
			.when('/#',{
				templateUrl: 'views/main.html',
				controller: 'MainController',
    			controllerAs : 'mainCtrl'
			})
			.otherwise({
				redirectTo: '/#'
			});
	}])