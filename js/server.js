/** Application Dependencies */
var sys = require('sys');
var express = require('express');
var fs = require('fs');
var util = require('util');
/** New Application ENV OBJ */
var app = express();
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var http = require('http');
var PDFDocument = require('pdfkit');
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
    res.send(req.body);
    var d = req.body.firstname;
    var c = req.body.lastname;
    var date = new Date().toDateString();
    doc = new PDFDocument();
    var fp = '/home/enroll/pdf/';             //creating a new PDF object
    var fp1 = fp.concat(d);
    var fp2 = fp1.concat(c);
    var fp3 = fp2.concat(date);
    var fp4 = fp3.concat(".pdf");
doc.pipe(fs.createWriteStream(fp3));  //creating a write stream
            //to write the content on the file system
doc.text(JSON.stringify(req.body), 100, 100);             //adding the text to be written,
            // more things can be added here including new pages
doc.end(); //we end the document writing.
    });

app.set('port', process.env.PORT || 8000);
http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});

