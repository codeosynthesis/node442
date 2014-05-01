#!/usr/bin/node

console.log('starting');

var https = require('https');

var username='OllieParsley';

var options = {
        host: 'api.github.com',
        path:'/users/'+username+'/repos',
        method:'GET'
};

var request = https.request(options, function(response)
{
    var body='';

    response.on('data',function(chunck){
        body+= chunck.toString('utf8');
    });

    response.on('end',function()
    {
        console.log('Body: ',body);
    });

});

request.end();

