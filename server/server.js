var http = require('http');
var fs = require('fs');
var _url = require('url');
var _mariadb = require('./mariadb/mariadb');
var app = http.createServer(function(request,response){
    var conn = _mariadb.mariaconnect();
    var url = request.url;
    var pathname = _url.parse(url, true).pathname;
    var querystring = _url.parse(url, true).query;
    if(pathname == '/'){
         url = '/login.html';
          fs.readFile(__dirname + url,function(err, data){
            if(err){
                response.writeHead(404);
                response.end();
            } else{
                response.writeHead(200);
                response.end(data);
            }
         });
    } else if(pathname == '/join'){
        url = '/join.html';
        fs.readFile(__dirname + url,function(err, data){
            if(err){
                response.writeHead(404);
                response.end();
            } else{
                response.writeHead(200);
                response.end(data);
            }
        }); 
    } else if(pathname == '/login'){
        url = '/login.html';
        fs.readFile(__dirname + url,function(err, data){
            if(err){
                response.writeHead(404);
                response.end();
            } else{
                response.writeHead(200);
                response.end(data);
            }
        });
    } else if(pathname == '/join_process'){
        _mariadb.mariaconnect();
        _mariadb.join(querystring, conn, response);
    } else if(pathname == '/login_process'){
        _mariadb.mariaconnect();
        _mariadb.check(querystring, conn, response);
    }
       
});
app.listen(8000);