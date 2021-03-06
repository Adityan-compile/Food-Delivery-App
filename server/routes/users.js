const express = require('express');
const router = express.Router();

const {
  login,
  signup,
  regenerateToken,
} = require('../controllers/authController.js');

const {
  deleteAccount,
  editAccount,
} = require('../controllers/userController.js');

const authenticate = require('../middleware/authenticator');
const manageRole = require('../middleware/role');

/*
 * Register Routes and assign to controllers
 */
router.route('/login').post(login);

router.route('/register').post(signup);

router
  .route('/account/delete')
  .post([authenticate, manageRole('u')], deleteAccount);

router
  .route('/account/edit')
  .patch([authenticate, manageRole('u')], editAccount);

module.exports = router;
