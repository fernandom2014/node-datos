'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
//var config    = require(__dirname + '/../config.json')[env];
var config    = require('./config.json')[env];
var db        = {};

 
if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config/*{
    dialect: "postgres",
    define:{
      timeStamp: false,
      freezeTableName: true,
      timestamps: false
    }
  }*/);
}

sequelize.authenticate().then(function(err) {
    if (err) {
      console.log('No se ha podido establecer conexión a la Base de Datos:', err);
    } else {
      console.log('La conexión a la Base de Datos '+ config.host+' ha sido establecida con éxito .');
    }
});

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
     db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
