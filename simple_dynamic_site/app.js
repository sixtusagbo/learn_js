// Create a web server
let http = require("http");
http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write("Before end\n");
  setInterval(() => response.write(new Date + "\n"), 1000);
  // response.end("Hello World\n");
}).listen(1337, "127.0.0.1");
console.log("Server running at http://127.0.0.1:1337/");

// Handle HTTP route GET / and POST /
  // if url == "/" && GET
    // show search
  // if url == "/" && POST
    // redirect to /:username

// Handle HTTP route GET /:username and POST /
  // if url == "/..."
    // get json
      // on "end"
        // show profile
      // on "error"
        // show error

// Read files and merge value
  // read from file and get a string
    // merge values into a string