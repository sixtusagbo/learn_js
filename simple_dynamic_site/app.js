let router = require("./router");

// Create a web server
let http = require("http");
http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(1337, "127.0.0.1");
console.log("Server running at http://127.0.0.1:1337/");

// Read files and merge value
  // read from file and get a string
    // merge values into a string