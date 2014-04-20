#!/usr/bin/node

var d= console.log;

var cproc=require('child_process');

var children=[];

var names =[['bob'],['ted'],['joe']];

names.forEach(function(item)
{
    var child=cproc.fork(__dirname+'/child.js',item);
    
    child.on('exit',function(){console.log(item+'died')});
    child.on('message',function(text)
    {
        console.log(item+ ' says ' +text);
    });
    children.push(child);

}
);

process.on('exit',function(){
    children.forEach(function(child)
    {
        child.kill();  
    });
});
