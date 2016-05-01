angularRoutingApp.controller('tablaController', function($scope,$http) {
	$scope.message = 'Esta es la página tabla';
    
        $scope.listarUsuarios = function(){
            var peticion = $http.get("todos");
            peticion.success(function(listaUsuarios){
                var usuarios = [];
                for (var i=0; i<listaUsuarios.length; i++){
                    usuarios.push(listaUsuarios[i]);
                }
                $scope.tablaUsuarios = usuarios;
            });
        }
    
        $scope.borrarUsuario= function(usuario){
        
            $scope.message = "click en borrar: "+usuario.username;
            
            var url = "borrar/"+usuario.userid;
            var peticion = $http.delete(url);
            peticion.success(function(mensaje){
                $scope.message = mensaje.data;
            });
            
            $scope.listarUsuarios();
            
        }            
        
}); 
