const express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    compression = require('compression'),
    responseTime = require('response-time'),
    path = require('path'),
    csurf = require('csurf');
let app = express();
app.use(logger('dev'));
app.use(compression());
app.use('/public',express.static(path.resolve(__dirname,'../','../','bower_components')));
app.use('/client',express.static(path.resolve(__dirname,'../','client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

// set up configs 
require('./configs/expressCfg')(app);
app.use(responseTime());
// setup routing system 
require('./routes')(app);
module.exports = app;