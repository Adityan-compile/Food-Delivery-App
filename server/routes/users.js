var express = require("express");
var router = express.Router();

const { login, signup } = require("../controllers/auth.js");


router.post("/login", login);

router.post("/register", signup)

module.exports = router;
