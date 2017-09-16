process.env.NODEENV = process.env.NODEENV || 'development';

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
//var port = process.env.PORT;
var port = 8001;
var ip = process.env.IP;
var passport = require('passport');
var session = require('express-session');
var morgan = require('morgan');
mongoose.connect('mongodb://localhost:27017/grm_project');

app.use(morgan('dev'));
app.set('view engine','html');
app.use(express.static(path.join(__dirname + "/client")));
app.use('/controllers', express.static(process.cwd() + '/server/controllers'));
require('./server/routes')(app);
app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(session({secret: 'secret',resave: false,saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());  

app.listen(port);
console.log('Listening on port: '+ port);