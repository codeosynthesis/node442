#!/usr/bin/node
//mports
var http= require('http');
var fs = require('fs');
console.log('starting');

function d(x)
{
    console.log(x);
}
var configfile='config.json';
var config =JSON.parse(fs.readFileSync(configfile));

//config
var host=config.host;
var port=config.port;

function servePage(error,data,response)
{
    d('servepage');
    if (error)
    {
        d('error '+error);
        response.writeHead(404,'text/plain');
        response.end('404 page not found');
    }
    else
    {
        d('serving ');
        response.writeHead(200,'text/plain');
        response.end(data);
    }
    d('return');
}

//function to run when a connection is made
function handelRequest(request, response){
    console.log('recieved request: '+ request.url);
    // serve the file
    fs.readFile('./public'+request.url, function(error,data){servePage(error,data,response)});
}

var server = http.createServer(handelRequest);


//function to run server
function listenerFunction()
{
    console.log('listening ' + host+':'+port);
}

server.listen(port,host,listenerFunction);

fs.watchFile(configfile, function(){
    config =JSON.parse(fs.readFileSync('config.json'));
    //config
    host=config.host;
    port=config.port;
    server.close();
    server.listen(port,host,listenerFunction);
});
