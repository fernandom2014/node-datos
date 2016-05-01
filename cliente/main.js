// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute']);

// Configuración de las rutas
angularRoutingApp.config(function($routeProvider) {

	$routeProvider
		.when('/inicio', {
			templateUrl	: 'pages/home.html',
			controller 	: 'mainController'
		})
		.when('/tabla', {
			templateUrl : 'pages/tabla.html',
			controller 	: 'tablaController'
		})
		.when('/formulario', {
			templateUrl : 'pages/formulario.html',
			controller 	: 'formularioController'
		})
                .when('/formulario/:usuarioid', {
			templateUrl : 'pages/formulario1.html',
			controller 	: 'formularioController'
		})
		.otherwise({
			redirectTo: '/inicio'
		});
});






