#!/usr/bin/node

console.log('start')
console.log('repl read eval print loop, is the interactive node ');
var repl=require('repl');

function hi()
{
	console.log('hi');
}
hi();

var cont=0;
var cfg={
    'useGlobal':true,
    'prompt':'>>>',
};
repl.start(cfg);
console.log('end');
