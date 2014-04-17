#!/usr/bin/nodejs
//var addr='vm-0.jjw9128.koding.kd.io';
var addr='0.0.0.0';
var async=require('async');
var http=require('http');
var marker;

function handelRequest(request,response)
{
	console.log('recieved request')	
	function sleep(ms) {
	  var start = new Date().getTime(), expire = start + ms;
	  while (new Date().getTime() < expire) { }
	  return;
	}

	function spit(num)
	{
		var time=(10-num)*100;
		response.write('sleeping for '+time);
		sleep(time);
		for (var i =0; i<num; i++)
		{
			response.write(' '+num);
		}
	}
	function error(err)
	{
		console.log('****************'+err+'**************');
	}
	var nums = [1,2,3,4,5,6,7,8,9,10];
	response.write('start async.each');
	async.each(nums,spit,error);
	response.write('start async.parallel');
	async.parallel([
		function(){spit(1)},
		function(){spit(7)},
		function(){spit(8)},
		function(){spit(9)},
		function(){spit(10)}
	]);
	
	response.end('done');
}
var server=http.createServer(handelRequest);
server.listen(8080,addr,function(){
	console.log('server listening');
});
console.log('server listening FINISHED async.js');
