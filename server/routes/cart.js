const express = require('express');
const router = express.Router();

const {
  addToCart,
  getCart,
  deleteFromCart,
} = require('../controllers/cartController');

const authenticate = require('../middleware/authenticator');
const manageRole = require('../middleware/role');

router.route('/').get([authenticate, manageRole('u')], getCart);
router.route('/add').post([authenticate, manageRole('u')], addToCart);
router
  .route('/delete/:item')
  .delete([authenticate, manageRole('u')], deleteFromCart);

module.exports = router;
