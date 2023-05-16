let fs = require("fs");

function bindValues(values, content) {

  for (const key in values) {
    content = content.replace("{{" + key + "}}", values[key]);
  }

  return content;
}

function view(templateName, values, response) {
  // Read from template files
  let fileContents = fs.readFileSync(`./views/${templateName}.html`, { encoding: "utf-8" });

  // Insert values into the content
  fileContents = bindValues(values, fileContents);

  // Write to the response
  response.write(fileContents);
}

module.exports.view = view;