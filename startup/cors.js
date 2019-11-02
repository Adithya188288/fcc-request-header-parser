// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require("cors");

//Remember only one instance of the app object muct be running
module.exports = function(app) {
  app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204
};
