const express = require("express");
const path = require("path");
const whoami = require("../routes/index.js");


//Remember only one instance of app must be running
module.exports = function(app) {
  // http://expressjs.com/en/starter/static-files.html
  app.use(express.static("public"));

  // http://expressjs.com/en/starter/basic-routing.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views", "/index.html"));
  });

  app.use("/api/whoami", whoami);
};
