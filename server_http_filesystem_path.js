/**
 * Created by deetpanshumalik on 4/6/17.
 */

//importing http, file system and path node modules
var http = require('http');
var fs = require('fs');
var path = require('path');

var hostname = 'localhost';
var port = 3000;


var server = http.createServer(function(request, res){
  console.log('Request for ' + request.url + ' by method ' + request.method);
  if(request.method == 'GET') {
      var fileUrl;
      if(request.url == '/')
          fileUrl = '/index.html';
      else
          fileUrl = request.url;

      var filePath = path.resolve('./public' + fileUrl);
      var fileExtension = path.extname(filePath);

      if (fileExtension == '.html') {
          fs.exists(filePath, function(exists) {
              if (!exists) {
                  res.writeHead(404, {'Content-Type': 'text/html'});
                  res.end('<html><body><h1>Error 404: ' + fileUrl + ' not found</h1></body></html>');
                  return;
              }
              res.writeHead(200, {'Content-Type': 'text/html'});
              fs.createReadStream(filePath).pipe(res)
          });
      }
      else {
          res.writeHead(404, {'Content-Type': 'text/html'});
          res.end('<html><body><h1>Error 404: ' + fileUrl + ' not a HTML file</h1></body></html>');
      }
  }
  else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<html><body><h1>Error 404: ' + req.method + ' not supported</h1></body></html>');
  }
})

server.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});
