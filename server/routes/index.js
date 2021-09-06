var express = require("express");
var router = express.Router();

var authenticate = require("../middleware/authenticator.js");

const { getItems } = require("../controllers/itemsController");

/* GET home page. */
router.route("/items/all").get(getItems);

module.exports = router;
