var models = require("../models");

var findOne = function(req, res){
    models.User.findAll({
        where:{
            userid : req.params.userid
        }
    }).then(function(usuarios){
        res.status(200).jsonp(usuarios);
    })
    .error(function(error){
        console.log(JSON.stringify(error));
    });
};


var todos = function(req, res){
    models.User.findAll().then(function(usuarios){
        res.status(200).jsonp(usuarios);
    })
    .error(function(error){
        console.log(JSON.stringify(error));
    });
};


var borrar = function(req, res){
    models.User.destroy({
        where:{
            userid : req.params.userid
        }
    }).then(function(rowDeleted){         
        res.json({
                type:true,
                data:"Usarios borardos: "+rowDeleted
        });
    });
}

var modificar = function(req, res){
    models.User.update({
                    username: req.params.username,
                    password: req.params.password,
                    token: req.params.token
                },{
                    where: {
                        userid: req.params.userid
                    }
                }).then(function(err){
                    if(err == 1){
                        res.json({
                            type: true,
                            data: "Usuario modificado "
                        });
                    }else{
                        res.json({
                            type: false,
                            data: "Error al modificar "
                        });       
                    }
                });   
                
}

var registro = function(req, res){
    models.User.findOne({
        where:{
            username : req.params.username,
            password : req.params.password
        }
    }).then(function(usuario,err){
        
        if(err){
            res.json({
                type:false,
                data:"Error ocurrido "+err
            });
        }else{            
            if(usuario){
                console.log("Datos consulta "+usuario.username);
                res.json({
                    type: false,
                    data: "Usuario existente"
                });
            }else{                                              
                
                models.User.create({
                    username: req.params.username,
                    password: req.params.password,
                    token: req.params.token
                });
                res.json({
                    type: true,
                    data: "Usuario ingresado"
                });
            }
        }
        
    });
    
};

module.exports.registro = registro;
module.exports.findOne = findOne;
module.exports.todos = todos;
module.exports.modificar = modificar;
module.exports.borrar = borrar;
