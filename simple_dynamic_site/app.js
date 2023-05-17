let router = require("./router");
let http = require("http");

host = "127.0.0.1";
port = 1337;

// Create a web server
http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(port, host);

console.log(`Server running at http://${host}:${port}/`);
