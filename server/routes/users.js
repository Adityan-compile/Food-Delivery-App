var express = require("express");
var router = express.Router();

const { login, signup, regenerateToken } = require("../controllers/auth.js");


router.route("/login").post(login);

router.route("/register").post(signup);

router.route("/tokens/regenerate").post(regenerateToken);

module.exports = router;
