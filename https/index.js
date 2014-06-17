var https = require('https');
var fs = require('fs');

cert = fs.readFileSync('cert.pem');
key = fs.readFileSync('key.pem');

var server =https.createServer({'cert':cert,'key':key},function(req, res){
    console.log('recieved request');
    res.writeHead(200);
    res.write('hello world');
    res.end();
});
server.on("request",function(req,res){
    console.log('request event');
});

server.on('clientError',function(e,socket){
    console.log('client error');
    console.log(e);
});


server.listen(4000,'127.0.0.1');

