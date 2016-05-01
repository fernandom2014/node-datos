var express = require('express');
var router = express.Router();

var usuarios = require("../controllers/usuarios");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/todos',function(req,res){
    usuarios.todos(req,res);
});

router.get('/detalle/:userid',function(req,res){
    usuarios.findOne(req,res);
});

router.post('/registro/:username/:password/:token', function(req,res){
    usuarios.registro(req,res);
});

router.post('/modificar/:userid/:username/:password/:token', function(req,res){
    usuarios.modificar(req,res);
});

router.delete('/borrar/:userid', function(req, res){
    usuarios.borrar(req,res);
});

module.exports = router;
