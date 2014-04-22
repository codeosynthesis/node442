var fs = require('fs');
var cfg= JSON.parse(fs.readFileSync(__dirname+'/dbcfg.json'));
var dbcfg = {host:cfg.host,user:cfg.user,password:cfg.password,database:cfg.database};
var mysql = require('mysql2');


function handle(err,rows,fields)
{
    if (err) throw err;
    console.log(rows);
    console.log('fields');
    console.log(fields);
}

function doquery(q)
{
    var connection = mysql.createConnection(dbcfg);

    connection.connect();

    var query = connection.query(q,handle);
    console.log('closing');
    console.log(query);

    connection.end();
}

doquery('select * from test');


