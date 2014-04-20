#!/usr/bin/node

var name = process.argv[2];
for (var i = 0; i < 30000; i++)
{
    console.log('hello'+i+' from '+name);
}
