// server.js
// where your node app starts

// init project
const express = require("express")
const app = express()

//require all the startup files. all files in the startup folder are IIFE
require("./startup/cors.js")(app)
require("./startup/routes.js")(app)

const PORT = process.env.PORT || 3000

// listen for requests :)
var listener = app.listen(PORT, function() {
  console.log("Your app is listening on port " + listener.address().port)
})

//Completed Test cases.All Okay:)
