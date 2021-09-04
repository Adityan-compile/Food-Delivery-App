var express = require("express");
var router = express.Router();

var authenticate = require("../middleware/authenticator.js");

/* GET home page. */
router.route("/items/all").get(authenticate, function (req, res) {
  res.json({
    items: [],
  });
});

module.exports = router;
