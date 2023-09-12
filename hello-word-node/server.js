var http = require("http");
var port = 9000;
//http.createServer(....).listen(portNumber);
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "json" });
    response.end('{"name": "Rutvik"}');
  })
  .listen(port);

// Console will print the message
console.log("Server running at http://127.0.0.1:" + port);
