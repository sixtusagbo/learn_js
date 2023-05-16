// Handle HTTP route GET / and POST /
function home(request, response) {
  // if url == "/" && GET
  if (request.url === "/") {
    // show search
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Header\n");
    response.write("Search\n");
    response.end("Footer\n");
  }
  // if url == "/" && POST
  // redirect to /:username
}

// Handle HTTP route GET /:username and POST /
async function user(request, response) {
  // if url == "/..."
  let username = request.url.replace("/", "");
  if (username.length > 0) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Header\n");

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
          response.write(values.username + " has " + values.repos + " repositories.\n");
          response.end("Footer\n");
        } else {
          // show error
          response.write(data.status + " " + data.statusText + "\n");
          response.end("Footer\n");
        }
      })
      .catch(error => {
        // show error
        response.write(error.message + "\n");
        response.end("Footer\n");
      });
  }
}

module.exports.home = home;
module.exports.user = user;