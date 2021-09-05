var express = require("express");
var router = express.Router();

const {
  login,
  signup,
  logout,
  regenerateToken,
} = require("../controllers/auth.js");

const { deleteAccount } = require("../controllers/users.js");

const authenticate = require("../middleware/authenticator");

/*
 * Register Routes and assign to controllers
 */
router.route("/login").post(login);

router.route("/register").post(signup);

router.route("/tokens/regenerate").post(regenerateToken);

router.route("/logout").post(logout);

router.route("/account/delete").post(authenticate, deleteAccount);

module.exports = router;
