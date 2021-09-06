var express = require("express");
var router = express.Router();

const {
  login,
  signup,
  logout,
  regenerateToken,
} = require("../controllers/authController.js");

const { deleteAccount, editAccount } = require("../controllers/userController.js");

const authenticate = require("../middleware/authenticator");

/*
 * Register Routes and assign to controllers
 */
router.route("/login").post(login);

router.route("/register").post(signup);

router.route("/tokens/regenerate").post(regenerateToken);

router.route("/logout").post(logout);

router.route("/account/delete").post(authenticate, deleteAccount);

router.route("/account/edit").patch(authenticate, editAccount);

module.exports = router;
