/** Application Dependencies */
var sys = require('sys');
var express = require('express');
var fs = require('fs');
var https = require('https');
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

var options = {
    key: fs.readFileSync('/home/enroll/ssl/keys/b39c0_e481d_fb1e77918304b559071121a19e669ece.key'),
    cert: fs.readFileSync('/home/enroll/ssl/certs/www_2015enroll_com_b39c0_e481d_1447953325_36fe388c29be50786b0fd4f51de3baf1.crt'),
};

app.post('/post', function( req, res) {
        console.log(req.body);
        if (req.body.firstname) {
            var d = req.body.firstname;
    var c = req.body.lastname;
    var date = new Date().getTime().toString();
    doc = new PDFDocument();
    var fp = '/home/enroll/pdf/';             //creating a new PDF object
    var fp1 = fp.concat(date);
    var fp2 = fp1.concat(".pdf");
doc.pipe(fs.createWriteStream(fp2));  //creating a write stream
            //to write the content on the file system
doc.text(JSON.stringify(req.body), 100, 100);             //adding the text to be written,
            // more things can be added here including new pages
doc.end(); //we end the document writing.
res.sendStatus(200);

        } else {
            res.sendStatus(500);
        };
    });

app.set('port', process.env.PORT || 8000);
https.createServer(options, app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});

