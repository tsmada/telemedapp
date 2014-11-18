/** Application Dependencies */
var sys = require('sys');
var express = require('express');
/** New Application ENV OBJ */
var app = express();
var bodyparser = require('body-parser');
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
        console.log(req);
        console.log('ayy')

    });

app.listen(8000);