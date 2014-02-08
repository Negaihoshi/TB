var index = angular.module('index', ['ngRoute'], function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'indexContent.php'
	}).when('/FF23', {
		templateUrl: 'lib/FF23.php'
	}).when('/FF23else', {
		templateUrl: 'lib/FF23else.php'
	}).otherwise({
		redirectTo: '/'
	});
});