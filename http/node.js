var http = require('http');
var handler=function(req,res){
    
    var body="<!Doctype html><html ><head><title>hello from nodejs</title></head><body>console.log('Hello World')</body></html>";

    res.writeHead(200,{
    'Content-Length':body.length,
    'Content-Type':'text/html'});

    res.write(body);

    res.end();
};
var server=http.createServer(handler);
server.listen(3000);
