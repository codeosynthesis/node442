#!/usr/bin/node

var app = require('http').createServer(handler);
var io = require('socket.io').listen(app);
var fs = require('fs');

app.listen(3000);

function handler(req,res){
    fs.readFile(__dirname+'/index.html',
        function(err,data){
            if(err){
                res.writeHead(500);
                return res.end('Error loading index.html');
            }
            else
            {
                res.writeHead(200);
                res.end(data);
            }
        })
}

var clients=[];

io.sockets.on('connection',function(socket){
    clients.push(socket);
    socket.emit('data',{hello:'world'});
    
    socket.on('data',function(data){
        console.log('recieved '+data);
    });
    
    socket.on('pass',function(data)
    {
        console.log('padding on '+data);
        for (var client in clients)
        {
            
            clients[client].emit('data',{'msg':data});
        }
    });
});
