#!/usr/bin/node
/**
 * Module dependencies.
 */

var express = require('express')
  , routes  = require('./routes');

var app = module.exports = express.createServer();

app.get('/',function(req,res)
{
    res.send('hellow express');
});

app.get('/hi',function(req,res,next)
{	
    var message = [
        '<h1> hello, express </h1>',
        '<p>welcom to buildig web apps in nodejs with express </p>',
        '<p> youll love express because it\'s </p>',
        '<ul><li>fast</li><li>fun</li><li>flexable</li></ul>',].join('\n');
        res.send(message);
});



console.log('hi'+app.get('port'));

app.listen(3000);

// dont work
//http.createServer(app).listen(app.get('port'), function(){
//	console.log('express server listening on port ' + app.get('port'));
//}); 
