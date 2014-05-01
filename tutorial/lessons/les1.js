#!/usr/bin/node 
var fs = require("fs");
console.log("Loading");
function echo(x)
{
	console.log(x);
}
console.log('starting');

var contents = fs.readFileSync("./config.json");
echo('parsing');
var config = JSON.parse(contents);

echo(config);
echo("username: "+config.username);


console.log('ASYNC');

fs.readFile('./samples.txt',function(error , data)
{
	console.log(error)
	console.log("contents of the file are \n" + data);
});
console.log('done ');

