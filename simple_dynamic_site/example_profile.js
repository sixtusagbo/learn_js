let Profile = require("./profile");

let studentProfile = new Profile("chalkers");

/** When the JSON body is fully received,
 * use this callback instead
 **/
studentProfile.on("end", console.dir);

/** When parsing or network error occurs,
 * use this callback instead
 **/
studentProfile.on("error", console.error);