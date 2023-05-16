let renderer = require("./renderer");
let querystring = require("querystring");

let commonHeaders = { "Content-Type": "text/html" };

// Handle HTTP route GET / and POST /
function home(request, response) {
  // if url == "/" && GET
  if (request.url === "/" && request.method === "GET") {
    // show search
    response.writeHead(200, commonHeaders);
    renderer.view("header", {}, response);
    renderer.view("search", {}, response);
    renderer.view("footer", {}, response);
    response.end();
  } else {
    // url == "/" && POST

    // get the post data
    request.on("data", function (body) {
      // extract username
      let query = querystring.parse(body.toString());

      // redirect to /:username
      response.write(query.username);
      response.end();
    });

  }
}

// Handle HTTP route GET /:username and POST /
async function user(request, response) {
  // if url == "/..."
  let username = request.url.replace("/", "");
  if (username.length > 0) {
    response.writeHead(200, commonHeaders);
    renderer.view("header", {}, response);

    await fetch(`https://api.github.com/users/${username}`)
      .then(async data => {
        if (data.status === 200) {

          let profile = await data.json();

          // store the values we need
          let values = {
            avatarUrl: profile.avatar_url,
            username: profile.login,
            repos: profile.public_repos,
            followers: profile.followers,
          }

          // show profile
          renderer.view("profile", values, response);
        } else {
          // show error
          renderer.view("error", { errorMessage: data.status + " " + data.statusText }, response);
          renderer.view("search", {}, response);
        }
      })
      .catch(error => {
        // show error
        renderer.view("error", { errorMessage: error.message }, response);
        renderer.view("search", {}, response);
      });

    renderer.view("footer", {}, response);
    response.end();
  }
}

module.exports.home = home;
module.exports.user = user;