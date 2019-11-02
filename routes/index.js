const express = require("express")
const router = express.Router();


//api whoami
router.get("/", function(req,res){

  let ipaddress = req.headers['x-forwarded-for'].slice(0,12);
  let software = req.headers['user-agent']
  let language = req.headers['accept-language']
  
  const result = {ipaddress,language,software}
  
  res.send(result)
})


module.exports = router