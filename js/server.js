/** Application Dependencies */
var sys = require('sys');
var express = require('express');
var util = require('util');
/** New Application ENV OBJ */
var app = express();
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
app.use(bodyParser);
app.use(expressValidator([options]));
var http = require('http');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });


app.post('/post', function( req, res) {
        console.log(req.body);
        req.checkBody('firstname', 'Please provide your first name').notEmpty();
        var errors = req.validationErrors();
  if (errors) {
    res.send('There have been validation errors: ' + util.inspect(errors), 400);
    return;
  } else {
    res.send(req.body);
};
    });

app.set('port', process.env.PORT || 8000);
http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});