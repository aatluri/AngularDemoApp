// The below tells node that this app requires express
var express = require('express');
var path = require('path');
var events = require('./eventsController');
// created an instance of express which we can use
var app = express();
var rootPath = path.normalize(__dirname);
var port= process.env.PORT || 5000;
var bodyParser = require('body-parser');

// The below commamd tells express the first place to look for when it is trying to find files. In this case it is asking it to look in the app folder.
app.use(express.static('app'));

//Encode the url and set the type to JSOn
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/data/event/:id', events.get);
app.post('/data/event/:id',events.save);

//app.use(express.static('app/views'));

app.listen(port,function(err){
    
   console.log('running server on port: ' + port); 
});