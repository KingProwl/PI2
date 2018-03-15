var express = require('express');
var mongoose = require('mongoose');
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');
var multer = require('multer');



var upload = multer({
    dest: __dirname + '/uploads'
});

mongoose.connect('mongodb://localhost/asset');

require('./models/Client');
require('./models/Type');

var app = express();

app.use(bodyParser.urlencoded());
app.use(upload.single('file'));

app.use('/css',express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/', require('./routes/clients'));
app.use('/types',require('./routes/types'));
app.use(express.static(__dirname + '/public'));
app.use('/uploads',express.static(__dirname + '/uploads'));

nunjucks.configure('views', {
    autoescape : true,
    express: app
});

//Lancer l'app sur le port 3000
console.log("Appli bien lancé sur le port 3000");
app.listen(3000);

