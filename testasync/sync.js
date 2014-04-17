#!/usr/bin/nodejs
var spit=function(num)
{
	for (var i =0; i<num; i++)
	{
		console.log(num);
	}
}
var nums = [1,2,3,4,5,6,7,8,9,10];
for (var i in nums)
{
	spit(i);
}
