
var angularRutas = angular.module('angularRutas',['ngRoute']);

angularRutas.config(function($routeProvider){
        $routeProvider.
            when('/',{
                templateUrl: 'views/inicio.html',
                controller: 'inicio'
            }).
            when('/tabla',{
                templateUrl: 'views/tabla.html',
                controller: 'tabla'
            }).
            when('/formulario',{
                templateUrl: 'views/formulario.html',
                controller: 'formulario'
            }).        
            otherwise({
                redirecTo:'/'
            });
    });    
 