#!/usr/bin/node
/**
 * Module dependencies.
 */
//include express
var express = require('express');

//create an express app
//make it accessable globaly and locally as app
var app = express.createServer();

app.configure(function(){
    
    app.set('views',__dirname+'/views');
    app.set('view engine','jade');

    //app.router is the engine that is configured by app.verb,
    app.use(express.bodyParser());
    app.use(express.methodOverride());

    app.use(app.router);
    app.use(express.static(__dirname+'/public'));
});

app.get('/',function(req,res)
{
    res.render('home.jade',{title:'building web apps in node with express'});
});

app.get(/.*/,function(req,res)
{
    res.send('unspecified route');
});


console.log('listening ');
app.listen(3000);
