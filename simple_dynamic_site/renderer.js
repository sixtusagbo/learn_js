let fs = require("fs");

function view(templateName, values, response) {
  // Read from template files
  let fileContents = fs.readFileSync(`./views/${templateName}.html`);

  // Insert values into the content

  // Write to the response
  response.write(fileContents);
}

module.exports.view = view;