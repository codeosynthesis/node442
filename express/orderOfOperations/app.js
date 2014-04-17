#!/usr/bin/node
/**
 * Module dependencies.
 * try :user.html next
 */

var express = require('express');

var app = module.exports = express();

var render=function(path,options,callback)
{
    d('rendering');
    d(' '+path);
    d(' '+options.toString());
    d(' '+callback.toString());
    callback();
}

var d= console.log;

app.param('user', render);
//1
app.use('/:user',function(req,res,next) {d('use'); next();} );
//2
app.all('/:user',function(){d('all');});
//3
app.get('/:user',function(){d('get');});

d('listening');
app.listen(8080);
d('done');
  

// Configuration

// app.configure(function(){
//   app.set('views', __dirname + '/views');
//   app.set('view engine', 'jade');
//   app.use(express.bodyParser());
//   app.use(express.methodOverride());
//   app.use(app.router);
//   app.use(express.static(__dirname + '/public'));
// });

// app.configure('development', function(){
//   app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
// });

// app.configure('production', function(){
//   app.use(express.errorHandler());
// });

// // Routes

// app.get('/', routes.index);

// app.listen(8080, function(){
//   console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
// });
