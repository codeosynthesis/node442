#!/usr/bin/node
/**
 * Module dependencies.
 */

var express = require('express');

var app = module.exports = express.createServer();
app.use(express.bodyParser());

app.get('/',function(req,res)
{
    res.send('hello express');
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

app.get('/users/:userId',function(req,res){
    res.send("<h1>Hello, User #"+req.params.userId+"!");
});

app.post('/users',function(req,res){
    console.log(Object.keys(req));
    console.log('---------');
    console.log(Object.keys(req.body));
    res.send('Creating a new user with the name '+ req.body.username + '.');
});

app.get(/^\/user\/(\d*)\/?(edit)?$/,function(req,res){
    // /users/10
    // /users/10/
    // /users/10/edit
    console.log('regex'+req.params);
    var message="user #"+req.params[0]+"'s profile";

    if(req.params[1] ==='edit')
    {
        message="Editing "+message;
    }
    else
    {
        message="Viewing "+message;   
    }
    res.send(message);
});

//app.put
//app.delete

console.log('listening ');

app.listen(3000);

// dont work
//http.createServer(app).listen(app.get('port'), function(){
//	console.log('express server listening on port ' + app.get('port'));
//}); 
