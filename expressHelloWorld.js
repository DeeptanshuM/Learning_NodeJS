/**
 * Created by deetpanshumalik on 4/7/17.
 */
var express = require('express'), http = require('http');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(function(request, response, next) {
   response.writeHead(200, {'Content-Type': 'text/html'});
   response.end('<html><body><h1>Hello World</h1></body></html>');
});

var server = http.createServer(app);

server.listen(port, hostname, function(){
   console.log(`Server running at http://${hostname}:${port}/`)
});