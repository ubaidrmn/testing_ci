var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("WELCOME TO UBAIDS APP CD");
  res.end();
}).listen(80);
