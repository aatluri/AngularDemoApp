// The below tells node that this app requires express
var express = require('express');
var path = require('path');
// created an instance of express which we can use
var app = express();
var rootPath = path.normalize(__dirname);
var port= process.env.PORT || 5000;

// The below commamd tells express the first place to look for when it is trying to find files. In this case it is asking it to look in the app folder.
app.use(express.static('app'));

//app.use(express.static('app/views'));

app.listen(port,function(err){
    
   console.log('running server on port: ' + port); 
});