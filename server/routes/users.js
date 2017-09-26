var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {

  // console.log(req)
  // console.log(res)
  // console.log(next)

  res.send(login(req, res));
});

module.exports = router;

function login(req, res) {

  let username = req.query.userName
  // let password = req.query.password;

  if (username === 'admin') {
    return {"code":"0000","message":"9b876beab99c4372b20984eb231b8f85,0"}
  } else {
    return {"code":"9000","message":"fail"}
  }

}
