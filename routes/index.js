const express = require("express")
const router = express.Router()

//api whoami
router.get("/", function(req, res) {
  let ipaddress = ""
  // x-forwarded-for response header will be set by the server . so for local dev set a contant
  if (process.env.NODE_ENV === "local") {
    ipaddress = "127.0.0.1"
  } else {
    ipaddress = req.headers["x-forwarded-for"].slice(0, 12)
  }
  let software = req.headers["user-agent"]
  let language = req.headers["accept-language"]

  const result = { ipaddress, language, software }

  res.send(result)
})

module.exports = router
