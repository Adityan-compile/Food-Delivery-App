var express = require("express");
var router = express.Router();

const { login, signup, regenerateToken } = require("../controllers/auth.js");


router.post("/login", login);

router.post("/register", signup);

router.post("/tokens/regenerate", regenerateToken);

module.exports = router;
