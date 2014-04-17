#!/usr/bin/nodejs
var fs = require('fs');

function getUser(id,callback)
{
	fs.readFile('sync.js',function(err,data){callback(err,data)});	
	console.log('read file');
}

getUser(432, function (err,data) {
    console.log('callback');	
    console.log(data);
});

console.log('Done');
