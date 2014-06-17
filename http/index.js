var http = require('http');

var server = http.createServer(function(req,res){
    console.log('request recieved');
    res.writeHead(200);
    res.end('hello world');
}); 

server.on('request',function(req,res){
    console.log('request event');
});

server.listen(3000);
