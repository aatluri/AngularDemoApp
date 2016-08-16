var fs = require('fs');

module.exports.get = function(req, res){
    //Reading the file from the disk
    var event = fs.readFileSync('app/data/event/' + req.params.id + '.json','utf8');
    //Setting the content type
    res.setHeader('Content-Type', 'application/json');
    //Sending back the data read
    res.send(event)
};

module.exports.save = function(req,res){
    //Reading the file from the disk
    var event = fs.writeFileSync('app/data/event/' + req.params.id + '.json', JSON.stringify(event));
    //Setting the content type
    res.setHeader('Content-Type', 'application/json');
    //Sending back the data read
    res.send(event)
};