#!/usr/bin/node

var mongo = require('mongodb');
var host = '127.0.0.1';
var port = mongo.Connection.DEFAULT_PORT;

function getUser(id,callback)
{
    var srvr=new mongo.Server(host,port,{});
    var db = new mongo.Db('nodejs-intro',srvr);
    
    db.open(function(error){
        console.log('db connected '+host+':'+port);    
        console.log('db.open.error '+error);
    
        db.collection('user',function(error,collection)
        {
            
            console.log('collection get '+error);
            collection.find({'id':id},function(error,cursor){
                cursor.toArray(function(error,users)
                {
                    if (users.length==0)
                    {
                        console.log('query failed');
                        callback(false);
                    }
                    else
                    {
                        console.log('found user '+users[0].name);
                        callback(users[0]);
                    }
                });
            });
        });
    });
};

var gu=function(ret){
    if (!ret)
    {
        console.log(ret.name);
    }
};
for (var i =0;i<13;i++)
{
    getUser(i,gu);
}
