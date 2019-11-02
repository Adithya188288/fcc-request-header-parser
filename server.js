// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

//require all the startup files. all files in the startup folder are IIFE
require("./startup/cors.js")(app);
require("./startup/routes.js")(app);

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
