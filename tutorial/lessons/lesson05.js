#!/usr/bin/node
console.log('starting')

var fs = require('fs');

var config = JSON.parse(fs.readFileSync('config.json'));

var host = config.host;
var port = config.port;

var express=require('express');

var app=express();

app.use(app.router);
app.use(express.static(__dirname+'/public'));

app.get('/', function(request,response)
    {
        response.send('hello from root');
    });
app.get('/hello/:text',function(request,response){
    response.send('hello' + request.params.text);
});



app.listen(port,host);
console.log('Listening on '+host+':'+port);

