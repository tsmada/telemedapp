/** Application Dependencies */
var sys = require('sys');
var express = require('express');
/** New Application ENV OBJ */
var app = express();
var bodyParser = require('body-parser');
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
        if (!req.body.firstname) {
            var message = "Please insert a First Name"
        res.send(message);
    };
    res.send(res.body);
    });

app.set('port', process.env.PORT || 8000);
http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});