angularRoutingApp.controller('formularioController', function($scope,$http, $routeParams)  {
    
        $scope.detalleUser = function(){
            var usuarioid = 0;
            if($routeParams.usuarioid){
                usuarioid = $routeParams.usuarioid;        
                var url = "detalle/"+usuarioid;        
                var peticion = $http.get(url);
                peticion.success(function(datos){
                    var usuario = [];
                    usuario = datos[0];
                    $scope.message = "Modificar datos del usuario: "+usuario.username;
                    $scope.nuevouser  = usuario;        
                });        
            }
        }
        
        $scope.modificarUser = function(){
            $scope.message = "Modificar usuario: "+$scope.nuevouser.username;
            var url = "modificar/"+$scope.nuevouser.userid+"/"+$scope.nuevouser.username+"/"+$scope.nuevouser.password+"/"+$scope.nuevouser.token;
            var peticion = $http.post(url);
            peticion.success(function(mensaje){
                $scope.message = mensaje.data;
            }); 
        }

        $scope.addUser = function(){        
            $scope.message = "click en formulario: "+$scope.nuevouser.username;
            var url = "registro/"+$scope.nuevouser.username+"/"+$scope.nuevouser.password+"/"+$scope.nuevouser.token;
            var peticion = $http.post(url);
            peticion.success(function(mensaje){
                $scope.message = mensaje.data;
            });            
        }                
});
