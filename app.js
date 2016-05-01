var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var pg = require("pg");

var routes = require('./routes/index');


var app = express();

var port = process.env.PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 
'X-Requested-With,content-type, Authorization');
    next();
});

app.use(express.static(__dirname+'/bower_components'));
app.use(express.static("./cliente"));

app.get('/', function(req, res, next) {
  res.sendFile("./cliente/index.html");
});

app.use('/',require('./routes/index'));

process.on('uncaughtException', function(err) {
    console.log(err);
});

// Start Server
app.listen(port, function () {
    console.log( "Express server listening on port " + port);
});
